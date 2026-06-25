import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));
const cachePath = join(root, "content", "i18n-html-translations.json");
const locales = config.locales.filter((locale) => locale !== "de");
const delimiter = "\n<<<HERMETIA_TRANSLATION_SPLIT>>>\n";
const args = new Set(process.argv.slice(2));
const generateMissing = args.has("--generate-missing");
const refreshExisting = args.has("--refresh-existing");

function readCache() {
  if (!existsSync(cachePath)) return {};
  return JSON.parse(readFileSync(cachePath, "utf8"));
}

function saveCache(cache) {
  mkdirSync(dirname(cachePath), { recursive: true });
  writeFileSync(cachePath, `${JSON.stringify(cache, null, 2)}\n`);
}

function filesByName(dir, names) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return filesByName(full, names);
    return names.has(entry.name) ? [full] : [];
  });
}

function htmlFiles(dir) {
  return filesByName(dir, new Set(["index.html"]));
}

function payloadFiles(dir) {
  return filesByName(dir, new Set(["index.txt", "__next._full.txt", "__PAGE__.txt"]));
}

function decodeHtml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function encodeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function encodeAttribute(value) {
  return encodeHtml(value).replace(/"/g, "&quot;");
}

function normalizedText(value) {
  return decodeHtml(value).replace(/\s+/g, " ").trim();
}

function shouldTranslate(value) {
  const text = normalizedText(value);
  if (!text) return false;
  if (text.length < 3) return false;
  if (text === "Astrakey" || text === "AI" || text === "FAQ" || text === "Premium") return false;
  if (/^[a-z]{2}$/i.test(text)) return false;
  if (/^https?:\/\//i.test(text) || text.startsWith("/") || text.startsWith("#")) return false;
  // A bare email/handle is not translatable, but prose that merely *contains* an address is
  // (e.g. the Impressum/Datenschutz/Widerruf legal blocks). Skip only when, after removing
  // contact addresses, there is no real sentence left.
  if (text.includes("@")) {
    const withoutContacts = text.replace(/\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b/g, " ").replace(/\s+/g, " ").trim();
    if (!/[A-Za-zÄÖÜäöüß].*\s.*[A-Za-zÄÖÜäöüß]/.test(withoutContacts)) return false;
  }
  if (/^[\d\s.,:;€%/+()[\]\-–—|·→✓]+$/.test(text)) return false;
  if (/^\{\{.*\}\}$/.test(text)) return false;
  return /[A-Za-zÄÖÜäöüß]/.test(text);
}

// Maps a normalized source string to its raw (newline-bearing) form, so multi-line
// `whitespace-pre-line` blocks can also be matched inside RSC (.txt) payloads, which
// store them with literal "\n" rather than collapsed whitespace.
const rawByNormalized = new Map();

function collectTexts(html) {
  const texts = new Set();
  const withoutScripts = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  withoutScripts.replace(/>([^<>]+)</g, (_, value) => {
    const text = normalizedText(value);
    if (shouldTranslate(text)) {
      texts.add(text);
      const raw = decodeHtml(value).trim();
      if (raw !== text) rawByNormalized.set(text, raw);
    }
    return _;
  });
  withoutScripts.replace(/\b(alt|title|aria-label|content)="([^"]*)"/gi, (_, attr, value) => {
    const text = normalizedText(value);
    if (shouldTranslate(text)) texts.add(text);
    return _;
  });
  return texts;
}

function chunks(values, maxChars = 1200) {
  const result = [];
  let current = [];
  let length = 0;
  for (const value of values) {
    const nextLength = length + value.length + delimiter.length;
    if (current.length && nextLength > maxChars) {
      result.push(current);
      current = [];
      length = 0;
    }
    current.push(value);
    length += value.length + delimiter.length;
  }
  if (current.length) result.push(current);
  return result;
}

async function translateBatch(locale, batch) {
  const query = batch.join(delimiter);
  const params = new URLSearchParams({ client: "gtx", sl: "de", tl: locale, dt: "t", q: query });
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`, {
        headers: { "user-agent": "Astrakey-i18n-build/1.0" },
      });
      if (!response.ok) throw new Error(`Translation request failed for ${locale}: ${response.status}`);
      const data = await response.json();
      const translated = (data[0] ?? []).map((part) => part[0]).join("");
      const parts = translated.split(delimiter).map((part) => part.trim());
      if (parts.length !== batch.length) throw new Error(`Translation split mismatch for ${locale}: expected ${batch.length}, got ${parts.length}`);
      return parts;
    } catch (error) {
      lastError = error;
      if (attempt < 4) await new Promise((resolve) => setTimeout(resolve, 750 * attempt));
    }
  }
  throw lastError;
}

async function fillCache(cache, stringsByLocale) {
  if (!generateMissing) return;
  for (const locale of locales) {
    cache[locale] ??= {};
    const missing = [...stringsByLocale[locale]].filter((text) => refreshExisting || !cache[locale][text]);
    if (!missing.length) continue;
    console.log(`Translating ${missing.length} missing strings for ${locale}...`);
    for (const batch of chunks(missing)) {
      try {
        const translated = await translateBatch(locale, batch);
        batch.forEach((source, index) => {
          cache[locale][source] = translated[index] || source;
        });
      } catch (error) {
        console.warn(`${error.message}; retrying individually.`);
        for (const source of batch) {
          const [translated] = await translateBatch(locale, [source]);
          cache[locale][source] = translated || source;
        }
      }
      saveCache(cache);
    }
  }
}

function translateText(cache, locale, raw, attribute = false) {
  const leading = raw.match(/^\s*/)?.[0] ?? "";
  const trailing = raw.match(/\s*$/)?.[0] ?? "";
  const source = normalizedText(raw);
  if (!shouldTranslate(source)) return raw;
  const translated = cache[locale]?.[source];
  if (!translated) return raw;
  const encoded = attribute ? encodeAttribute(translated) : encodeHtml(translated);
  return `${leading}${encoded}${trailing}`;
}

function shouldTranslateContentAttribute(tag) {
  return /\b(name|property)="(?:description|twitter:title|twitter:description|og:title|og:description|og:image:alt)"/i.test(tag);
}

function applyAttributeTranslations(cache, locale, html) {
  return html.replace(/<[^>]+>/g, (tag) =>
    tag.replace(/\b(alt|title|aria-label|content)="([^"]*)"/gi, (match, attr, value) => {
      if (attr.toLowerCase() === "content" && !shouldTranslateContentAttribute(tag)) return match;
      return `${attr}="${translateText(cache, locale, value, true)}"`;
    }),
  );
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function createJsStringReplacers(cache, locale, strings, embeddedInJsString = false) {
  const skipped = new Set([
    "width=device-width, initial-scale=1",
    "noindex, nofollow",
    "website",
    "summary_large_image",
  ]);
  const replacements = new Map();
  const register = (sourceText, target) => {
    const sourceJson = JSON.stringify(sourceText);
    const targetJson = JSON.stringify(target);
    const sourceJs = embeddedInJsString ? JSON.stringify(sourceJson).slice(1, -1) : sourceJson;
    const targetJs = embeddedInJsString ? JSON.stringify(targetJson).slice(1, -1) : targetJson;
    if (sourceJs) replacements.set(sourceJs, targetJs);
  };
  for (const source of strings) {
    if (skipped.has(source)) continue;
    const target = cache[locale]?.[source];
    if (!target || target === source) continue;
    register(source, target);
    // Multi-line blocks appear in RSC payloads with literal newlines, not collapsed
    // whitespace — register that raw variant too so the payload gets translated.
    const raw = rawByNormalized.get(source);
    if (raw && raw !== source) register(raw, target);
  }

  const keys = [...replacements.keys()].sort((a, b) => b.length - a.length);
  const replacers = [];
  for (const batch of chunks(keys, 25000)) {
    const pattern = batch.map(escapeRegExp).join("|");
    replacers.push({
      regex: new RegExp(pattern, "g"),
      replacements,
    });
  }
  return replacers;
}

function applyReplacers(value, replacers) {
  let translated = value;
  for (const { regex, replacements } of replacers) {
    translated = translated.replace(regex, (source) => replacements.get(source) ?? source);
  }
  return translated;
}

function offsetByUtf8Bytes(value, start, byteLength) {
  let offset = start;
  let consumed = 0;
  while (offset < value.length && consumed < byteLength) {
    const codePoint = value.codePointAt(offset);
    const char = String.fromCodePoint(codePoint);
    consumed += Buffer.byteLength(char, "utf8");
    offset += char.length;
  }
  return { offset, consumed };
}

function applyPayloadTranslations(payload, replacers, state = { pendingTextBytes: 0 }) {
  if (!replacers.length) return payload;

  let translated = "";
  let cursor = 0;
  const textChunkPattern = /(^|\n)([0-9a-f]+):T([0-9a-f]+),/gi;

  if (state.pendingTextBytes > 0) {
    const protectedEnd = offsetByUtf8Bytes(payload, 0, state.pendingTextBytes);
    translated += payload.slice(0, protectedEnd.offset);
    state.pendingTextBytes -= protectedEnd.consumed;
    cursor = protectedEnd.offset;
  }

  let match;
  while ((match = textChunkPattern.exec(payload))) {
    const markerStart = match.index + match[1].length;
    const payloadStart = textChunkPattern.lastIndex;
    const declaredBytes = parseInt(match[3], 16);
    const protectedEnd = offsetByUtf8Bytes(payload, payloadStart, declaredBytes);

    translated += applyReplacers(payload.slice(cursor, markerStart), replacers);
    translated += payload.slice(markerStart, protectedEnd.offset);
    state.pendingTextBytes = declaredBytes - protectedEnd.consumed;
    cursor = protectedEnd.offset;
    textChunkPattern.lastIndex = protectedEnd.offset;
  }

  translated += applyReplacers(payload.slice(cursor), replacers);
  return translated;
}

function applyInlineFlightTranslations(html, replacers) {
  const state = { pendingTextBytes: 0 };
  return html.replace(/(self\.__next_f\.push\(\[1,)((?:"(?:\\.|[^"\\])*"))(\]\))/g, (match, prefix, encoded, suffix) => {
    try {
      const payload = JSON.parse(encoded);
      return `${prefix}${JSON.stringify(applyPayloadTranslations(payload, replacers, state))}${suffix}`;
    } catch {
      return match;
    }
  });
}

function applyScriptStringTranslations(html, rawReplacers, embeddedReplacers) {
  if (!rawReplacers.length && !embeddedReplacers.length) return html;
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (script) => {
    if (/type=["']application\/ld\+json["']/i.test(script)) {
      return applyReplacers(script, rawReplacers);
    }
    return script;
  });
}

function applyTranslations(cache, locale, html, rawScriptReplacers, embeddedScriptReplacers) {
  let translated = html.replace(/>([^<>]+)</g, (match, value) => `>${translateText(cache, locale, value)}<`);
  translated = applyAttributeTranslations(cache, locale, translated);
  translated = applyScriptStringTranslations(translated, rawScriptReplacers, embeddedScriptReplacers);
  translated = applyInlineFlightTranslations(translated, rawScriptReplacers);
  return translated;
}

if (!existsSync(outDir)) {
  console.error("Missing out directory. Run next build before applying i18n HTML translations.");
  process.exit(1);
}

const cache = readCache();
const sourceStrings = new Set();
for (const file of htmlFiles(join(outDir, "de"))) {
  const html = readFileSync(file, "utf8");
  for (const text of collectTexts(html)) sourceStrings.add(text);
}
const stringsByLocale = Object.fromEntries(locales.map((locale) => [locale, sourceStrings]));

await fillCache(cache, stringsByLocale);

let rewritten = 0;
let rewrittenPayloads = 0;
let missing = 0;
for (const locale of locales) {
  const rawScriptReplacers = createJsStringReplacers(cache, locale, stringsByLocale[locale]);
  const embeddedScriptReplacers = createJsStringReplacers(cache, locale, stringsByLocale[locale], true);
  for (const file of htmlFiles(join(outDir, locale))) {
    const html = readFileSync(file, "utf8");
    const translated = applyTranslations(cache, locale, html, rawScriptReplacers, embeddedScriptReplacers);
    writeFileSync(file, translated);
    rewritten += 1;
  }
  for (const file of payloadFiles(join(outDir, locale))) {
    const payload = readFileSync(file, "utf8");
    const translated = applyPayloadTranslations(payload, rawScriptReplacers);
    writeFileSync(file, translated);
    rewrittenPayloads += 1;
  }
  for (const text of stringsByLocale[locale]) {
    if (!cache[locale]?.[text]) missing += 1;
  }
}

if (missing > 0) {
  console.error(`Missing ${missing} cached translation(s). Re-run with --generate-missing or add the missing entries to ${cachePath}.`);
  process.exit(1);
}

if (generateMissing) saveCache(cache);
console.log(`Applied i18n HTML translations to ${rewritten} exported pages and ${rewrittenPayloads} RSC payload(s) across ${locales.length} locale(s).`);
