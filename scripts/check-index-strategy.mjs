#!/usr/bin/env node
// Guard für die Indexierungs-Strategie: prüft den gebauten Export gegen `indexedLocales`.
//
// Warum ein eigener Guard: Ein versehentliches `noindex` auf den deutschen Seiten wäre
// der teuerste Fehler, den dieses Repo machen kann — er fällt in keinem Test auf, kostet
// aber Wochen an Sichtbarkeit, bis jemand ihn bemerkt. Umgekehrt hebelt eine
// maschinenübersetzte Sprache in der Sitemap genau die Bereinigung wieder aus, für die
// diese Strategie eingeführt wurde.
//
// Läuft nach dem Build gegen `out/`. Aufruf: npm run check:index

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");

if (!existsSync(outDir)) {
  console.error("check-index-strategy: out/ fehlt — zuerst bauen.");
  process.exit(1);
}

// Bewusst aus der TS-Quelle gelesen statt importiert: das Skript läuft ohne Bundler.
const configSource = readFileSync(join(root, "src/i18n/config.ts"), "utf8");
const indexedMatch = configSource.match(/export const indexedLocales = \[([^\]]+)\]/);
if (!indexedMatch) {
  console.error("check-index-strategy: indexedLocales in src/i18n/config.ts nicht gefunden.");
  process.exit(1);
}
const indexed = [...indexedMatch[1].matchAll(/"([a-z-]+)"/g)].map((m) => m[1]);

const errors = [];

// 1. DE und EN sind die redaktionell gepflegten Fassungen — sie müssen indexiert sein.
for (const required of ["de", "en"]) {
  if (!indexed.includes(required)) errors.push(`${required} fehlt in indexedLocales`);
}

// 2. Jede Locale liefert das Robots-Meta, das zu ihrer Einstufung passt.
const localeDirs = readdirSync(outDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^[a-z]{2}$/.test(entry.name))
  .map((entry) => entry.name);

for (const locale of localeDirs) {
  const file = join(outDir, locale, "index.html");
  if (!existsSync(file)) continue;
  const html = readFileSync(file, "utf8");
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "(fehlt)";
  const shouldIndex = indexed.includes(locale);
  const doesIndex = /(^|,\s*)index/.test(robots) && !robots.includes("noindex");
  if (shouldIndex !== doesIndex) {
    errors.push(`/${locale}/ hat robots="${robots}", erwartet wurde ${shouldIndex ? "index" : "noindex"}`);
  }
}

// 3. Die Sitemap enthält ausschließlich indexierte Locales — und jede davon.
const sitemap = readFileSync(join(outDir, "sitemap.xml"), "utf8");
const sitemapLocales = new Set(
  [...sitemap.matchAll(/<loc>https?:\/\/[^/]+\/([a-z]{2})\//g)].map((m) => m[1]),
);
for (const locale of sitemapLocales) {
  if (!indexed.includes(locale)) errors.push(`Sitemap enthält nicht indexierte Locale /${locale}/`);
}
for (const locale of indexed) {
  if (!sitemapLocales.has(locale)) errors.push(`Sitemap enthält indexierte Locale /${locale}/ nicht`);
}

// 4. lastmod ist das einzige Sitemap-Feld, das Google auswertet — es muss überall stehen.
const locCount = (sitemap.match(/<loc>/g) ?? []).length;
const lastmodCount = (sitemap.match(/<lastmod>/g) ?? []).length;
if (locCount !== lastmodCount) {
  errors.push(`Sitemap: ${locCount} URLs, aber ${lastmodCount} lastmod-Angaben`);
}

if (errors.length) {
  console.error("check-index-strategy: FEHLER");
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `check-index-strategy: OK (indexiert: ${indexed.join(", ")}; ` +
    `${locCount} Sitemap-URLs, alle mit lastmod; ${localeDirs.length} Locales geprüft)`,
);
