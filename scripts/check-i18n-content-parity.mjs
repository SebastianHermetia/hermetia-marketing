import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const out = join(root, "out");
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));
const cache = JSON.parse(readFileSync(join(root, "content", "i18n-html-translations.json"), "utf8"));
const reportDir = join(root, "..", "..", "2.Gehirn", "02 Projekte", "Hermetia", "Übersetzungen", "Audits");
const locales = config.locales;
const targetLocales = locales.filter((locale) => locale !== "de");
const fallbackMarkers = [
  ...config.forbiddenLocalizedMarkers,
  "Ein Bild deiner Seele",
  "Sechs Wege, dich besser zu verstehen",
  "Sprachfassung in redaktioneller Vorbereitung",
  "Editorial translation in progress",
];

function htmlFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name === "index.html" ? [full] : [];
  });
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

function stripHtml(html, keepScripts = false) {
  const scriptless = keepScripts ? html : html.replace(/<script[\s\S]*?<\/script>/gi, " ");
  return decodeHtml(scriptless)
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function routeFromFile(locale, file) {
  const rel = relative(join(out, locale), file).replace(/\\/g, "/");
  return rel === "index.html" ? "/" : `/${rel.replace(/\/index\.html$/, "/")}`;
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function isPublicRoute(route) {
  return !route.includes("/_next/") && !route.includes("$");
}

function shouldTranslate(value) {
  const text = decodeHtml(value).replace(/\s+/g, " ").trim();
  if (!text) return false;
  if (text === "Astrakey" || text === "AI" || text === "FAQ" || text === "Premium") return false;
  if (/^[a-z]{2}$/i.test(text)) return false;
  if (/^https?:\/\//i.test(text) || text.startsWith("/") || text.startsWith("#") || text.includes("@")) return false;
  if (/^[\d\s.,:;€%/+()[\]\-–—|·→✓]+$/.test(text)) return false;
  return /[A-Za-zÄÖÜäöüß]/.test(text);
}

function collectStrings(html) {
  const texts = new Set();
  const withoutScripts = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  withoutScripts.replace(/>([^<>]+)</g, (_, value) => {
    const text = decodeHtml(value).replace(/\s+/g, " ").trim();
    if (shouldTranslate(text)) texts.add(text);
    return _;
  });
  withoutScripts.replace(/\b(alt|title|aria-label|content)="([^"]*)"/gi, (_, attr, value) => {
    const text = decodeHtml(value).replace(/\s+/g, " ").trim();
    if (shouldTranslate(text)) texts.add(text);
    return _;
  });
  return texts;
}

if (!existsSync(join(out, "de"))) {
  console.error("Missing out/de. Run npm run build:i18n before parity check.");
  process.exit(1);
}

const deFiles = htmlFiles(join(out, "de")).filter((file) => isPublicRoute(routeFromFile("de", file)));
const routeWords = new Map();
const sourceStrings = new Set();
for (const file of deFiles) {
  const route = routeFromFile("de", file);
  const html = readFileSync(file, "utf8");
  routeWords.set(route, wordCount(stripHtml(html)));
  for (const text of collectStrings(html)) sourceStrings.add(text);
}

const failures = [];
const rows = [];

for (const locale of targetLocales) {
  let checked = 0;
  let lowWordRatio = 0;
  let markerLeaks = 0;
  let missingTranslations = 0;
  let missingRoutes = 0;
  let minRatio = Number.POSITIVE_INFINITY;
  let totalRatio = 0;

  for (const [route, deWords] of routeWords.entries()) {
    const file = join(out, locale, ...route.split("/").filter(Boolean), "index.html");
    if (!existsSync(file)) {
      missingRoutes += 1;
      failures.push(`${locale}${route}: missing route`);
      continue;
    }
    checked += 1;
    const html = readFileSync(file, "utf8");
    const text = stripHtml(html);
    const ratio = deWords > 0 ? wordCount(text) / deWords : 1;
    minRatio = Math.min(minRatio, ratio);
    totalRatio += ratio;
    if (ratio < 0.45 || ratio > 1.9) {
      lowWordRatio += 1;
      failures.push(`${locale}${route}: suspicious word ratio ${ratio.toFixed(2)} (de=${deWords}, locale=${wordCount(text)})`);
    }
    for (const marker of fallbackMarkers) {
      if (marker && html.includes(marker)) {
        markerLeaks += 1;
        failures.push(`${locale}${route}: fallback marker leaked: ${marker}`);
      }
    }
  }

  for (const source of sourceStrings) {
    if (!cache[locale]?.[source]) missingTranslations += 1;
  }

  rows.push({
    locale,
    checked,
    missingRoutes,
    avgWordRatio: checked ? totalRatio / checked : 0,
    minWordRatio: Number.isFinite(minRatio) ? minRatio : 0,
    lowWordRatio,
    markerLeaks,
    missingTranslations,
  });

  if (missingTranslations > 0) failures.push(`${locale}: ${missingTranslations} source strings missing from translation cache`);
}

mkdirSync(reportDir, { recursive: true });
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const jsonPath = join(reportDir, `content-parity-de-vs-all-locales-${timestamp}.json`);
const mdPath = join(reportDir, `content-parity-de-vs-all-locales-${timestamp}.md`);
writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), sourceRoutes: routeWords.size, sourceStrings: sourceStrings.size, rows, failures }, null, 2));
writeFileSync(
  mdPath,
  [
    "# HermetiaStart Content Parity Audit",
    "",
    `- Generated: ${new Date().toISOString()}`,
    `- Source routes: ${routeWords.size}`,
    `- Source strings: ${sourceStrings.size}`,
    `- Failures: ${failures.length}`,
    "",
    "| Locale | Routes | Missing Routes | Avg Word Ratio | Min Word Ratio | Suspicious Ratios | Marker Leaks | Missing Cache Strings |",
    "|---|---:|---:|---:|---:|---:|---:|---:|",
    ...rows.map((row) => `| ${row.locale} | ${row.checked} | ${row.missingRoutes} | ${row.avgWordRatio.toFixed(2)} | ${row.minWordRatio.toFixed(2)} | ${row.lowWordRatio} | ${row.markerLeaks} | ${row.missingTranslations} |`),
    "",
    "## Failures",
    "",
    ...(failures.length ? failures.slice(0, 500).map((failure) => `- ${failure}`) : ["- None"]),
    failures.length > 500 ? `- ... ${failures.length - 500} more` : "",
    "",
  ].join("\n"),
);

console.log(`Wrote ${jsonPath}`);
console.log(`Wrote ${mdPath}`);

if (failures.length > 0) {
  console.error(`Content parity check failed with ${failures.length} issue(s).`);
  process.exit(1);
}

console.log(`Content parity check passed: ${routeWords.size} routes compared across ${targetLocales.length} locales.`);
