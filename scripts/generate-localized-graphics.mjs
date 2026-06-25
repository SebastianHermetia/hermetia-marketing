import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";

const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));
const cachePath = join(root, "content", "i18n-html-translations.json");
const sourceDir = join(root, "public", "graphics", "convergence");
const outRoot = join(sourceDir, "i18n");
const locales = config.locales.filter((locale) => locale !== "de");
const delimiter = "\n<<<HERMETIA_GRAPHIC_TRANSLATION_SPLIT>>>\n";

function readCache() {
  if (!existsSync(cachePath)) return {};
  return JSON.parse(readFileSync(cachePath, "utf8"));
}

function saveCache(cache) {
  writeFileSync(cachePath, `${JSON.stringify(cache, null, 2)}\n`);
}

function decodeXml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function encodeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function normalizedText(value) {
  return decodeXml(value).replace(/\s+/g, " ").trim();
}

function shouldTranslate(value) {
  const text = normalizedText(value);
  if (!text || text.length < 3) return false;
  if (text === "Astrakey" || text === "AI" || text === "Premium") return false;
  if (/^https?:\/\//i.test(text) || text.startsWith("/") || text.startsWith("#")) return false;
  if (/^[\d\s.,:;€%/+()[\]\-–—|·→✓★⚖√≤↑↔×]+$/.test(text)) return false;
  if (/^[a-z0-9_.-]+$/i.test(text) && /[_.]/.test(text)) return false;
  if (/^\{.*\}$/.test(text)) return false;
  if (["strength", "agreement", "confidence", "recency", "adaptive", "admin", "llm"].includes(text.toLowerCase())) return false;
  return /[A-Za-zÄÖÜäöüßÀ-ÿΑ-ω]/.test(text);
}

function chunks(values, maxChars = 900) {
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
  const params = new URLSearchParams({ client: "gtx", sl: "de", tl: locale, dt: "t", q: batch.join(delimiter) });
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params.toString()}`, {
        headers: { "user-agent": "Astrakey-graphic-i18n/1.0" },
      });
      if (!response.ok) throw new Error(`Graphic translation request failed for ${locale}: ${response.status}`);
      const data = await response.json();
      const translated = (data[0] ?? []).map((part) => part[0]).join("");
      const parts = translated.split(delimiter).map((part) => part.trim());
      if (parts.length !== batch.length) throw new Error(`Graphic translation split mismatch for ${locale}: expected ${batch.length}, got ${parts.length}`);
      return parts;
    } catch (error) {
      lastError = error;
      if (attempt < 4) await new Promise((resolve) => setTimeout(resolve, 750 * attempt));
    }
  }
  throw lastError;
}

function extractStrings(svg) {
  const strings = new Set();
  svg.replace(/>([^<>]+)</g, (_, raw) => {
    const text = normalizedText(raw);
    if (shouldTranslate(text)) strings.add(text);
    return _;
  });
  return strings;
}

async function fillCache(cache, strings) {
  for (const locale of locales) {
    cache[locale] ??= {};
    const missing = [...strings].filter((text) => !cache[locale][text]);
    if (!missing.length) continue;
    console.log(`Translating ${missing.length} graphic strings for ${locale}...`);
    for (const batch of chunks(missing)) {
      try {
        const translated = await translateBatch(locale, batch);
        batch.forEach((source, index) => {
          cache[locale][source] = translated[index] || source;
        });
      } catch (error) {
        console.warn(`${error.message}; retrying graphic strings individually.`);
        for (const source of batch) {
          const [translated] = await translateBatch(locale, [source]);
          cache[locale][source] = translated || source;
        }
      }
      saveCache(cache);
    }
  }
}

function translateSvg(svg, cache, locale) {
  return svg.replace(/>([^<>]+)</g, (match, raw) => {
    const source = normalizedText(raw);
    if (!shouldTranslate(source)) return match;
    const translated = cache[locale]?.[source];
    if (!translated) return match;
    const leading = raw.match(/^\s*/)?.[0] ?? "";
    const trailing = raw.match(/\s*$/)?.[0] ?? "";
    return `>${leading}${encodeXml(translated)}${trailing}<`;
  });
}

const svgs = readdirSync(sourceDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".svg"))
  .map((entry) => join(sourceDir, entry.name));

const sourceStrings = new Set();
for (const file of svgs) {
  for (const text of extractStrings(readFileSync(file, "utf8"))) sourceStrings.add(text);
}

const cache = readCache();
await fillCache(cache, sourceStrings);

let written = 0;
for (const locale of locales) {
  const localeDir = join(outRoot, locale);
  mkdirSync(localeDir, { recursive: true });
  for (const file of svgs) {
    const output = join(localeDir, basename(file));
    writeFileSync(output, translateSvg(readFileSync(file, "utf8"), cache, locale));
    written += 1;
  }
}

console.log(`Generated ${written} localized SVG graphic(s) from ${svgs.length} source SVG(s) across ${locales.length} locale(s).`);
