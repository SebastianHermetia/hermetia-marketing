// Guard against untranslated German leaking into localized pages.
//
// The other i18n checks only look for a small list of forbidden placeholder markers,
// so a whole block that silently stays German (e.g. legal text the HTML patcher skipped)
// passes unnoticed. This check diffs each localized page against its German counterpart:
// any visible line that is byte-identical to the German page AND carries multiple distinctly
// German function words is treated as untranslated and fails the build.
//
// Proper names (e.g. "Steven Forrest"), brand terms and shared cognates do not trip it,
// because they lack German function words — only real German prose does.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));

if (!existsSync(outDir)) {
  console.error("Missing out/ directory. Run the build before checking i18n.");
  process.exit(1);
}

// Distinctly German function words. Chosen to avoid Dutch/Scandinavian/etc. false positives
// (e.g. German "und/nicht/für/ist/wird" differ from Dutch "en/niet/voor/is/wordt").
const GERMAN_WORDS = [
  "und", "oder", "nicht", "für", "über", "wird", "werden", "wurde", "deine", "deiner", "dein",
  "dich", "dir", "euch", "unsere", "unserer", "unserem", "gemäß", "dass", "weil", "kannst",
  "musst", "keine", "kein", "zwischen", "möchtest", "während", "durch", "gegen", "ohne",
  "auch", "schon", "immer", "sondern", "damit", "diese", "dieser", "dieses", "wenn",
];
const GERMAN_RE = new RegExp(
  `(?:^|[^A-Za-zÀ-ÿ])(${GERMAN_WORDS.join("|")})(?![A-Za-zÀ-ÿ])`,
  "g",
);

function visibleLines(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, "\n")
    .replace(/&amp;/g, "&")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s.length >= 20 && /[A-Za-zÀ-ÿ]/.test(s) && /\s/.test(s));
}

function pageRoutes(locale) {
  const base = join(outDir, locale);
  const routes = [];
  (function walk(dir, rel) {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(join(dir, entry.name), `${rel}/${entry.name}`);
      else if (entry.name === "index.html") routes.push(`${rel}/`);
    }
  })(base, "");
  return routes;
}

const germanHits = (line) => (line.match(GERMAN_RE) ?? []).length;

const deRoutes = new Set(pageRoutes("de"));
const targets = config.locales.filter((locale) => locale !== "de");
const violations = [];

for (const locale of targets) {
  for (const route of pageRoutes(locale)) {
    if (!deRoutes.has(route)) continue;
    const deLines = new Set(visibleLines(readFileSync(join(outDir, "de", route, "index.html"), "utf8")));
    const locLines = visibleLines(readFileSync(join(outDir, locale, route, "index.html"), "utf8"));
    const leaked = [...new Set(locLines.filter((l) => deLines.has(l) && germanHits(l) >= 2))];
    if (leaked.length) violations.push({ locale, route, leaked });
  }
}

if (violations.length) {
  const routeTally = {};
  for (const v of violations) routeTally[v.route] = (routeTally[v.route] ?? 0) + 1;
  console.error(`\n❌ Untranslated German prose found on ${violations.length} localized page(s):\n`);
  for (const [route, count] of Object.entries(routeTally).sort((a, b) => b[1] - a[1])) {
    console.error(`  ${String(count).padStart(2)}/${targets.length} locales  ${route}`);
  }
  const sample = violations[0];
  console.error(`\n  e.g. ${sample.locale} ${sample.route}:`);
  for (const line of sample.leaked.slice(0, 3)) console.error(`     "${line.slice(0, 110)}"`);
  console.error(
    "\nAdd the missing German source string(s) to content/i18n-html-translations.json for every locale\n" +
      "(or run scripts/gen-legal-i18n.mjs for the legal blocks), then rebuild.\n",
  );
  process.exit(1);
}

console.log(`i18n untranslated check passed: no German leakage across ${targets.length} locale(s).`);
