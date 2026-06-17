import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "out");
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));
const locales = config.locales;
const localizedLocales = new Set(config.localizedLocales);
const fallbackMarkers = config.forbiddenLocalizedMarkers;

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
  if (localizedLocales.has(locale)) {
    for (const marker of fallbackMarkers) {
      if (home.includes(marker)) fail(`${locale}: fallback marker leaked on home: ${marker}`);
    }
  }
}

const expectations = locales.flatMap((locale) =>
  Object.entries(config.detailCounts).map(([prefix, expected]) => [
    `${locale}${prefix} detail pages`,
    countDirs(`${locale}${prefix}`.replace(/^\/+|\/+$/g, "")),
    expected,
  ]),
);

for (const [label, actual, expected] of expectations) {
  if (actual < expected) fail(`${label}: expected at least ${expected}, got ${actual}.`);
}

const deHome = readOut("de");
const enHome = readOut("en");
const frHome = readOut("fr");
const esPricing = readOut("es/preise");
const svSystem = readOut("sv/systeme/human-design");
const mtArticle = readOut("mt/wissen/ai-selbstreflexion");
const elComparison = readOut("el/vergleiche/human-design-vs-gene-keys");
const languages = readOut("de/sprachen");

const checks = [
  ["DE master home remains intact", deHome.includes("Ein Bild deiner Seele") && deHome.includes("Sechs Wege, dich besser zu verstehen")],
  ["EN home renders translated full master content", enHome.includes("A picture of your soul") || enHome.includes("An image of your soul")],
  ["FR home renders translated full master content", frHome.includes("Une image de votre âme")],
  ["ES pricing renders translated full master content", esPricing.includes("Comienza gratis") || esPricing.includes("Empieza gratis")],
  ["SV system detail renders translated full master content", svSystem.includes("Human Design") && !svSystem.includes("Wofür Human Design besonders nützlich ist")],
  ["MT article renders translated full master content", mtArticle.includes("AI") && !mtArticle.includes("Warum dieses Thema für Hermetia wichtig ist")],
  ["EL comparison renders translated full master content", elComparison.includes("Human Design") && !elComparison.includes("Der wichtigste Unterschied")],
  ["Language status reports all editorial locales", languages.includes("Sprachrouten live") && languages.includes(">24<") && languages.includes("Redaktionell freigegeben")],
  ["Language status has no fallback backlog", !languages.includes("Technischer Fallback") && !languages.includes("Seiten im Longform-Backlog") && !languages.includes("UI lokalisiert")],
];

for (const [label, ok] of checks) {
  if (!ok) fail(`Content check failed: ${label}.`);
}

if (process.exitCode) process.exit(process.exitCode);
console.log("Content check passed: all locales render full translated pages without DE/EN fallback notices and route counts are complete.");
