import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const out = join(root, "out");
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));
const locales = config.locales;
const localizedLocales = new Set(config.localizedLocales);
const fallbackMarkers = config.forbiddenLocalizedMarkers;

function isPublicRouteDir(name) {
  return !name.startsWith(".") && !name.startsWith("_") && !name.includes("$");
}

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return isPublicRouteDir(entry.name) ? htmlFiles(full) : [];
    return entry.name === "index.html" ? [full] : [];
  });
}

function stripHtml(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function routeFromFile(locale, file) {
  const rel = relative(join(out, locale), file).replace(/\\/g, "/");
  return rel === "index.html" ? "/" : `/${rel.replace(/\/index\.html$/, "/")}`;
}

function isCoveredRoute(route) {
  const configuredRoutes = Object.values(config.phaseRoutes).flat();
  return configuredRoutes.includes(route) || Object.keys(config.detailCounts).some((prefix) => route.startsWith(prefix) && route !== prefix);
}

if (!existsSync(out)) {
  console.error("Missing out directory. Run npm run build before check-i18n-export.");
  process.exit(1);
}

let failures = 0;
let checked = 0;

for (const locale of locales) {
  const dir = join(out, locale);
  if (!existsSync(dir)) {
    console.error(`Missing locale export: ${locale}`);
    failures += 1;
    continue;
  }
  for (const file of htmlFiles(dir)) {
    checked += 1;
    const route = routeFromFile(locale, file);
    const html = readFileSync(file, "utf8");
    const text = stripHtml(html);
    if (!text.includes("Hermetia")) {
      console.error(`Missing Hermetia content in ${relative(out, file)}`);
      failures += 1;
    }
    if (!isCoveredRoute(route) && !["/faq/", "/sprachen/", "/ueber-hermetia/", "/anwendungsfaelle/"].includes(route)) {
      console.error(`Unmapped exported route in i18n audit config: ${locale}${route}`);
      failures += 1;
    }
    if (localizedLocales.has(locale)) {
      for (const marker of fallbackMarkers) {
        if (text.includes(marker)) {
          console.error(`Fallback marker leaked in ${relative(out, file)}: ${marker}`);
          failures += 1;
        }
      }
    }
  }
}

for (const locale of locales) {
  for (const route of Object.values(config.phaseRoutes).flat()) {
    const file = join(out, locale, ...route.split("/").filter(Boolean), "index.html");
    if (!existsSync(file)) {
      console.error(`Missing configured route export: ${locale}${route}`);
      failures += 1;
    }
  }
  for (const [prefix, expected] of Object.entries(config.detailCounts)) {
    const dir = join(out, locale, ...prefix.split("/").filter(Boolean));
    const actual = existsSync(dir) ? readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isDirectory() && isPublicRouteDir(entry.name)).length : 0;
    if (actual < expected) {
      console.error(`Missing detail exports for ${locale}${prefix}: expected at least ${expected}, got ${actual}`);
      failures += 1;
    }
  }
}

if (failures > 0) {
  console.error(`i18n export check failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log(`i18n export check passed: ${checked} localized HTML pages scanned across ${locales.length} locales.`);
