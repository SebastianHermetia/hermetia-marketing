import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const deDir = join(outDir, "de");
const reportDir = join(
  root,
  "..",
  "..",
  "2.Gehirn",
  "02 Projekte",
  "Astrakey",
  "Übersetzungen",
  "Audits",
);
const catalogPath = join(root, "content", "i18n-source-catalog.json");

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

function normalizedText(value) {
  return decodeHtml(value).replace(/\s+/g, " ").trim();
}

function shouldTranslate(value) {
  const text = normalizedText(value);
  if (!text) return false;
  if (text === "Astrakey" || text === "AI" || text === "FAQ" || text === "Premium") return false;
  if (/^https?:\/\//i.test(text) || text.startsWith("/") || text.startsWith("#") || text.includes("@")) return false;
  if (/^[\d\s.,:;€%/+()[\]\-–—|·→✓]+$/.test(text)) return false;
  return /[A-Za-zÄÖÜäöüß]/.test(text);
}

function routeFromFile(file) {
  const rel = relative(deDir, file).replace(/\\/g, "/");
  return rel === "index.html" ? "/" : `/${rel.replace(/\/index\.html$/, "/")}`;
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

if (!existsSync(deDir)) {
  console.error("Missing out/de. Run npm run build before extracting the i18n source catalog.");
  process.exit(1);
}

const entries = new Map();
const routeStats = new Map();

for (const file of htmlFiles(deDir)) {
  const route = routeFromFile(file);
  const html = readFileSync(file, "utf8");
  const withoutScripts = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  routeStats.set(route, routeStats.get(route) ?? { route, strings: 0, words: 0 });

  function add(raw, source) {
    const text = normalizedText(raw);
    if (!shouldTranslate(text)) return;
    const item = entries.get(text) ?? { source: text, words: wordCount(text), occurrences: [] };
    item.occurrences.push({ route, source });
    entries.set(text, item);
    const stat = routeStats.get(route);
    stat.strings += 1;
    stat.words += wordCount(text);
  }

  withoutScripts.replace(/>([^<>]+)</g, (_, value) => {
    add(value, "text");
    return _;
  });
  withoutScripts.replace(/\b(alt|title|aria-label|content)="([^"]*)"/gi, (_, attr, value) => {
    add(value, attr);
    return _;
  });
}

const catalog = {
  generatedAt: new Date().toISOString(),
  sourceLocale: "de",
  stringCount: entries.size,
  occurrenceCount: [...entries.values()].reduce((sum, item) => sum + item.occurrences.length, 0),
  totalSourceWords: [...entries.values()].reduce((sum, item) => sum + item.words, 0),
  routes: [...routeStats.values()].sort((a, b) => a.route.localeCompare(b.route)),
  strings: [...entries.values()].sort((a, b) => b.words - a.words || a.source.localeCompare(b.source)),
};

mkdirSync(dirname(catalogPath), { recursive: true });
writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);

mkdirSync(reportDir, { recursive: true });
const reportPath = join(reportDir, `i18n-source-catalog-${new Date().toISOString().replace(/[:.]/g, "-")}.md`);
const largest = catalog.strings.slice(0, 20);
const busiestRoutes = [...catalog.routes].sort((a, b) => b.words - a.words).slice(0, 20);
const report = [
  "# AstrakeyStart i18n Source Catalog",
  "",
  `- Generated: ${catalog.generatedAt}`,
  "- Source locale: de",
  `- Unique translatable strings: ${catalog.stringCount}`,
  `- Text occurrences: ${catalog.occurrenceCount}`,
  `- Unique source words: ${catalog.totalSourceWords}`,
  `- Routes: ${catalog.routes.length}`,
  "",
  "## Largest Strings",
  "",
  "| Words | Occurrences | Source |",
  "|---:|---:|---|",
  ...largest.map((item) => `| ${item.words} | ${item.occurrences.length} | ${item.source.replace(/\|/g, "\\|")} |`),
  "",
  "## Heaviest Routes",
  "",
  "| Words | Strings | Route |",
  "|---:|---:|---|",
  ...busiestRoutes.map((route) => `| ${route.words} | ${route.strings} | ${route.route} |`),
  "",
].join("\n");
writeFileSync(reportPath, report);

console.log(`Wrote ${catalogPath}`);
console.log(`Wrote ${reportPath}`);
