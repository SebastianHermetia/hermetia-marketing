import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const baseArg = args[args.indexOf("--base") + 1];
const base = (baseArg || "https://hermetiastart.digital-expert.de").replace(/\/$/, "");
const root = process.cwd();
const config = JSON.parse(await import("node:fs").then((fs) => fs.readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8")));
const reportDir = join(root, "..", "..", "2.Gehirn", "02 Projekte", "Hermetia", "Übersetzungen", "Audits");
const locales = config.locales;
const targets = locales.filter((locale) => locale !== "de");
const forbiddenMarkers = [...config.forbiddenLocalizedMarkers, "Ein Bild deiner Seele", "Sechs Wege, dich besser zu verstehen"];

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordCount(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function routeFromUrl(url) {
  const parsed = new URL(url);
  const parts = parsed.pathname.split("/").filter(Boolean);
  const locale = parts.shift();
  return { locale, route: `/${parts.join("/")}${parts.length ? "/" : ""}` };
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "Hermetia-live-parity-audit/1.0" } });
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.text();
}

const sitemapXml = await fetchText(`${base}/sitemap.xml`);
const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const routeMap = new Map();
for (const url of urls) {
  const { locale, route } = routeFromUrl(url);
  if (!locales.includes(locale)) continue;
  routeMap.set(`${locale}${route}`, url);
}

const deRoutes = [...routeMap.keys()]
  .filter((key) => key.startsWith("de/"))
  .map((key) => key.slice(2))
  .sort();

const deWordCounts = new Map();
const failures = [];
for (const route of deRoutes) {
  const html = await fetchText(routeMap.get(`de${route}`));
  deWordCounts.set(route, wordCount(stripHtml(html)));
}

const rows = [];
for (const locale of targets) {
  let checked = 0;
  let missing = 0;
  let markerLeaks = 0;
  let suspiciousRatios = 0;
  let minRatio = Number.POSITIVE_INFINITY;
  let totalRatio = 0;
  for (const route of deRoutes) {
    const url = routeMap.get(`${locale}${route}`);
    if (!url) {
      missing += 1;
      failures.push(`${locale}${route}: missing live route`);
      continue;
    }
    checked += 1;
    const html = await fetchText(url);
    const words = wordCount(stripHtml(html));
    const deWords = deWordCounts.get(route) || 1;
    const ratio = words / deWords;
    minRatio = Math.min(minRatio, ratio);
    totalRatio += ratio;
    if (ratio < 0.45 || ratio > 1.9) {
      suspiciousRatios += 1;
      failures.push(`${locale}${route}: suspicious live word ratio ${ratio.toFixed(2)} (de=${deWords}, locale=${words})`);
    }
    for (const marker of forbiddenMarkers) {
      if (marker && html.includes(marker)) {
        markerLeaks += 1;
        failures.push(`${locale}${route}: live marker leak: ${marker}`);
      }
    }
  }
  rows.push({
    locale,
    checked,
    missing,
    avgWordRatio: checked ? totalRatio / checked : 0,
    minWordRatio: Number.isFinite(minRatio) ? minRatio : 0,
    suspiciousRatios,
    markerLeaks,
  });
}

mkdirSync(reportDir, { recursive: true });
const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const jsonPath = join(reportDir, `live-content-parity-de-vs-all-locales-${timestamp}.json`);
const mdPath = join(reportDir, `live-content-parity-de-vs-all-locales-${timestamp}.md`);
writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), base, sourceRoutes: deRoutes.length, rows, failures }, null, 2));
writeFileSync(
  mdPath,
  [
    "# HermetiaStart Live Content Parity Audit",
    "",
    `- Generated: ${new Date().toISOString()}`,
    `- Base: ${base}`,
    `- Source routes: ${deRoutes.length}`,
    `- Target locales: ${targets.length}`,
    `- Failures: ${failures.length}`,
    "",
    "| Locale | Routes | Missing | Avg Word Ratio | Min Word Ratio | Suspicious Ratios | Marker Leaks |",
    "|---|---:|---:|---:|---:|---:|---:|",
    ...rows.map((row) => `| ${row.locale} | ${row.checked} | ${row.missing} | ${row.avgWordRatio.toFixed(2)} | ${row.minWordRatio.toFixed(2)} | ${row.suspiciousRatios} | ${row.markerLeaks} |`),
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

if (failures.length) {
  console.error(`Live content parity check failed with ${failures.length} issue(s).`);
  process.exit(1);
}

console.log(`Live content parity check passed: ${deRoutes.length} routes compared across ${targets.length} locales.`);
