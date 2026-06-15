import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "out");

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function readOut(path) {
  const file = join(out, ...path.split("/"), "index.html");
  if (!existsSync(file)) {
    fail(`Missing generated page: /${path}/`);
    return "";
  }
  return readFileSync(file, "utf8");
}

function countDirs(path) {
  const dir = join(out, ...path.split("/"));
  if (!existsSync(dir)) return 0;
  return readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).length;
}

if (!existsSync(out)) {
  fail("Missing out directory. Run npm run build before npm run check:content.");
}

const expectations = [
  ["DE system pages", countDirs("de/systeme"), 31],
  ["DE glossary pages", countDirs("de/glossar"), 51],
  ["DE article pages", countDirs("de/wissen"), 20],
  ["DE comparison pages", countDirs("de/vergleiche"), 12],
];

for (const [label, actual, expected] of expectations) {
  if (actual < expected) fail(`${label}: expected at least ${expected}, got ${actual}.`);
}

const deHome = readOut("de");
const enHome = readOut("en");
const frHome = readOut("fr");
const article = readOut("de/wissen/seelenkarte-erstellen");
const comparison = readOut("de/vergleiche/big-five-vs-human-design");
const glossary = readOut("de/glossar/datenminimierung");
const convergence = readOut("de/konvergenz-engine");
const languages = readOut("de/sprachen");

const checks = [
  ["DE has no fallback language notice", !deHome.includes("Sprachfassung in redaktioneller Vorbereitung")],
  ["EN has no fallback language notice", !enHome.includes("Editorial translation in progress")],
  ["FR has fallback language notice", frHome.includes("Sprachfassung in redaktioneller Vorbereitung")],
  ["EN references 31 systems", enHome.includes("31 interpretive systems")],
  ["EN no longer references 25 systems", !enHome.includes("25 interpretive systems")],
  ["Article detail has longform section", article.includes("Warum dieses Thema")],
  ["Article detail has FAQ schema", article.includes("FAQPage")],
  ["Article detail has inline CTA", article.includes("article-seelenkarte-erstellen-inline")],
  ["Comparison detail has strengths block", comparison.includes("Stärken")],
  ["Comparison detail has FAQ schema", comparison.includes("FAQPage")],
  ["Glossary detail has Hermetia meaning block", glossary.includes("Bedeutung in Hermetia")],
  ["Glossary detail has limits block", glossary.includes("Grenzen der Deutung")],
  ["Glossary detail has FAQ schema", glossary.includes("FAQPage")],
  ["Convergence page embeds explainer graphics", convergence.includes("/graphics/convergence/abb1-familien-modell.svg") && convergence.includes("/graphics/convergence/abb5-algorithmus-funnel.svg")],
  ["Language status page exists", languages.includes("Hermetia in europäischen Sprachen")],
  ["Language status page reports 24 live routes", languages.includes("Sprachrouten live") && languages.includes(">24<")],
  ["Language status page reports editorial locales", languages.includes("Redaktionell freigegeben") && languages.includes(">2<")],
  ["Language status page reports fallback locales", languages.includes("In Übersetzung") && languages.includes(">22<")],
  ["Language status page is linked in footer", deHome.includes("/de/sprachen/")],
];

for (const [label, ok] of checks) {
  if (!ok) fail(`Content check failed: ${label}.`);
}

if (process.exitCode) process.exit(process.exitCode);

console.log("Content check passed: counts, language notices, longform resources and convergence graphics verified.");
