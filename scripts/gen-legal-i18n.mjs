// One-off generator: translate the 4 legal text nodes (datenschutz/impressum/widerruf)
// that the main patcher skips because they embed an email "@". Masks volatile tokens
// (emails, [placeholders], ____ ) so they survive verbatim, translates the rest via the
// same gtx endpoint the build uses, preserving whitespace-pre-line newlines.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));
const cachePath = join(root, "content", "i18n-html-translations.json");
const delimiter = "\n<<<HERMETIA_TRANSLATION_SPLIT>>>\n";
const dryRun = process.argv.includes("--dry");
const onlyLocales = process.argv.find((a) => a.startsWith("--locales="))?.split("=")[1]?.split(",");

function decodeHtml(v) {
  return v
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
    .replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ");
}
const normalize = (v) => decodeHtml(v).replace(/\s+/g, " ").trim();

// Extract the @-bearing prose nodes straight from the built DE HTML (exact source of truth).
function legalNodes() {
  const out = [];
  for (const route of ["datenschutz", "impressum", "widerruf"]) {
    const html = readFileSync(join(root, "out", "de", route, "index.html"), "utf8")
      .replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
    let m; const re = /></g; void re;
    const re2 = />([^<>]+)</g;
    while ((m = re2.exec(html))) {
      const raw = decodeHtml(m[1]).replace(/\r/g, "");
      if (raw.includes("@") && /[A-Za-zÄÖÜäöüß]/.test(raw)) out.push(raw);
    }
  }
  return [...new Set(out)];
}

// Mask tokens that must be preserved verbatim: emails, [bracket placeholders], underscore runs.
const TOKEN_RE = /\b[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}\b|\[[^\]]*\]|_{3,}/g;
function mask(line) {
  const tokens = [];
  const masked = line.replace(TOKEN_RE, (t) => { tokens.push(t); return `⟦${tokens.length - 1}⟧`; });
  return { masked, tokens };
}
function unmask(text, tokens) {
  return text.replace(/⟦(\d+)⟧/g, (_, i) => tokens[+i] ?? "");
}
const hasLetters = (s) => /[A-Za-zÄÖÜäöüß]/.test(s);

async function translateBatch(locale, batch) {
  const params = new URLSearchParams({ client: "gtx", sl: "de", tl: locale, dt: "t", q: batch.join(delimiter) });
  const r = await fetch(`https://translate.googleapis.com/translate_a/single?${params}`, { headers: { "user-agent": "Hermetia-i18n-build/1.0" } });
  if (!r.ok) throw new Error(`gtx ${locale} ${r.status}`);
  const data = await r.json();
  const joined = (data[0] ?? []).map((p) => p[0]).join("");
  const parts = joined.split(delimiter).map((p) => p.trim());
  if (parts.length !== batch.length) throw new Error(`split mismatch ${locale}: ${parts.length}/${batch.length}`);
  return parts;
}

async function translateNode(locale, raw) {
  const lines = raw.split("\n");
  const jobs = []; // {idx, tokens}
  const toTranslate = [];
  const lineMeta = lines.map((line, idx) => {
    if (!line.trim()) return { idx, kind: "blank" };
    const { masked, tokens } = mask(line);
    if (!hasLetters(masked)) return { idx, kind: "literal", line }; // token-only line, keep verbatim
    jobs.push({ idx, tokens });
    toTranslate.push(masked);
    return { idx, kind: "translate" };
  });
  let translated = [];
  if (toTranslate.length) {
    try {
      translated = await translateBatch(locale, toTranslate);
    } catch {
      // gtx sometimes mangles the batch delimiter (seen for hr) — fall back to per-line calls.
      translated = [];
      for (const line of toTranslate) translated.push((await translateBatch(locale, [line]))[0]);
    }
  }
  let j = 0;
  const outLines = lineMeta.map((meta) => {
    if (meta.kind === "blank") return "";
    if (meta.kind === "literal") return meta.line;
    const value = unmask(translated[j], jobs[j].tokens); j += 1;
    return value;
  });
  return outLines.join("\n");
}

const cache = JSON.parse(readFileSync(cachePath, "utf8"));
const nodes = legalNodes();
console.error(`Found ${nodes.length} legal @-nodes to translate.`);
const targets = (onlyLocales ?? config.locales).filter((l) => l !== "de");

for (const locale of targets) {
  cache[locale] ??= {};
  for (const raw of nodes) {
    const key = normalize(raw);
    const value = await translateNode(locale, raw);
    cache[locale][key] = value;
  }
  console.error(`  ${locale}: done`);
}

if (dryRun) {
  for (const locale of targets) {
    console.log(`\n===== ${locale} =====`);
    for (const raw of nodes) console.log(JSON.stringify(cache[locale][normalize(raw)]));
  }
} else {
  writeFileSync(cachePath, `${JSON.stringify(cache, null, 2)}\n`);
  console.error(`Wrote ${targets.length} locales × ${nodes.length} nodes to cache.`);
}
