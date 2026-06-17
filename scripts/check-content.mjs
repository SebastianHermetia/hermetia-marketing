import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "out");
const locales = ["de", "en", "fr", "es", "it", "nl", "pl", "pt", "bg", "hr", "cs", "da", "et", "fi", "el", "hu", "ga", "lv", "lt", "mt", "ro", "sk", "sl", "sv"];
const fallbackMarkers = [
  "Sprachfassung in redaktioneller Vorbereitung",
  "Editorial translation in progress",
  "Version éditoriale en préparation",
  "versión editorial completa está en preparación",
  "redaktionell in Vorbereitung",
  "Longform in Vorbereitung",
  "Technischer Fallback",
  "UI lokalisiert",
  "englischen Editorial-Content",
];

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

if (!existsSync(out)) fail("Missing out directory. Run npm run build before npm run check:content.");

for (const locale of locales) {
  const home = readOut(locale);
  if (!home.includes("Hermetia")) fail(`${locale}: missing rendered content.`);
  for (const marker of fallbackMarkers) {
    if (home.includes(marker)) fail(`${locale}: fallback marker leaked on home: ${marker}`);
  }
}

const expectations = [
  ["DE system pages", countDirs("de/systeme"), 31],
  ["DE glossary pages", countDirs("de/glossar"), 51],
  ["DE article pages", countDirs("de/wissen"), 20],
  ["DE comparison pages", countDirs("de/vergleiche"), 12],
  ["FR glossary pages", countDirs("fr/glossar"), 51],
  ["SV comparison pages", countDirs("sv/vergleiche"), 12],
];

for (const [label, actual, expected] of expectations) {
  if (actual < expected) fail(`${label}: expected at least ${expected}, got ${actual}.`);
}

const deHome = readOut("de");
const enHome = readOut("en");
const frHome = readOut("fr");
const esPricing = readOut("es/preise");
const svSystem = readOut("sv/systeme/human-design");
const languages = readOut("de/sprachen");

const checks = [
  ["DE master home remains intact", deHome.includes("Ein Bild deiner Seele") && deHome.includes("Sechs Wege, dich besser zu verstehen")],
  ["EN master home remains intact", enHome.includes("A portrait of your soul") && enHome.includes("Six ways to understand yourself better")],
  ["FR localized editorial shell renders", frHome.includes("Hermetia relie systèmes") && frHome.includes("Commencer gratuitement")],
  ["ES localized editorial shell renders on P0", esPricing.includes("Hermetia conecta sistemas") && esPricing.includes("Empezar gratis")],
  ["SV localized editorial shell renders on detail route", svSystem.includes("Hermetia förenar system") && svSystem.includes("Starta gratis")],
  ["Language status reports all editorial locales", languages.includes("Sprachrouten live") && languages.includes(">24<") && languages.includes("Redaktionell freigegeben")],
  ["Language status has no fallback backlog", !languages.includes("Technischer Fallback") && !languages.includes("Seiten im Longform-Backlog") && !languages.includes("UI lokalisiert")],
];

for (const [label, ok] of checks) {
  if (!ok) fail(`Content check failed: ${label}.`);
}

if (process.exitCode) process.exit(process.exitCode);
console.log("Content check passed: all locales render without DE/EN fallback notices and route counts are complete.");
