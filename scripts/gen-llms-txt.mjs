/**
 * Erzeugt /llms.txt und /llms-full.txt im statischen Export (out/).
 *
 * Zweck (GEO): Antwortmaschinen und LLM-Crawler finden so eine kuratierte, flache
 * Landkarte der Seite statt sich durch 3.500 Sitemap-URLs zu arbeiten.
 * Format nach der llms.txt-Konvention: H1, Kurzbeschreibung als Blockquote,
 * danach Abschnitte mit `- [Titel](URL): Beschreibung`.
 *
 * Die Datei wird aus dem gebauten HTML erzeugt (Titel + Meta-Description je Seite),
 * nicht aus einer gepflegten Liste — sie kann also nicht veralten.
 *
 * Bewusst nur DE und EN: die uebrigen Locales sind maschinell uebersetzt und
 * wuerden die Datei aufblaehen, ohne Antwortmaschinen etwas Neues zu geben.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "..", "out");
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://astrakey.me").replace(/\/$/, "");

const LOCALES = ["de", "en"];

// Reihenfolge = Wichtigkeit fuer eine Antwortmaschine: erst was Astrakey ist,
// dann Methode, dann die Nachschlagewerke, zuletzt Rechtliches.
const SECTIONS = [
  { title: { de: "Einstieg", en: "Start here" }, match: (p) => p === "" || p === "/leistungen" || p === "/preise" || p === "/profil-starten" },
  { title: { de: "Methode", en: "Method" }, match: (p) => ["/so-entsteht-dein-profil", "/konvergenz-engine", "/seelenkarte", "/profil-verfeinern", "/ki-transparenz", "/daten-und-sicherheit"].includes(p) },
  { title: { de: "Systeme", en: "Systems" }, match: (p) => p.startsWith("/systeme") },
  { title: { de: "Wissen", en: "Knowledge" }, match: (p) => p.startsWith("/wissen") },
  { title: { de: "Vergleiche", en: "Comparisons" }, match: (p) => p.startsWith("/vergleiche") },
  { title: { de: "Glossar", en: "Glossary" }, match: (p) => p.startsWith("/glossar") },
  { title: { de: "Rechtliches", en: "Legal" }, match: (p) => ["/impressum", "/datenschutz", "/agb", "/widerruf"].includes(p) },
  { title: { de: "Weiteres", en: "More" }, match: () => true },
];

const INTRO = {
  de: "Astrakey verbindet mehr als 30 symbolische, psychologische und koerperbezogene Systeme zu einem erklaerbaren Profil. Jede Aussage bleibt nachvollziehbar: berechnet, begruendet, begrenzt. Astrakey stellt keine Diagnosen und ersetzt keine Beratung oder Therapie.",
  en: "Astrakey combines more than 30 symbolic, psychological and body-related systems into one explainable profile. Every statement stays traceable: calculated, justified, bounded. Astrakey makes no diagnoses and does not replace counselling or therapy.",
};

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)));
}

/** Liest Titel + Meta-Description aus einer gebauten index.html. */
function readPageMeta(locale, path) {
  const file = join(outDir, locale, ...path.split("/").filter(Boolean), "index.html");
  if (!existsSync(file)) return null;
  const html = readFileSync(file, "utf8");
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1];
  if (!title) return null;
  return { title: decodeEntities(title).trim(), description: decodeEntities(description ?? "").trim() };
}

/** Alle Pfade (ohne Locale-Praefix) aus der gebauten Sitemap. */
function collectPaths(locale) {
  const sitemap = join(outDir, "sitemap.xml");
  if (!existsSync(sitemap)) throw new Error("out/sitemap.xml fehlt — erst `next build` laufen lassen.");
  const xml = readFileSync(sitemap, "utf8");
  const base = `${siteUrl}/${locale}`;
  const paths = new Set();
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const loc = match[1].trim();
    if (!loc.startsWith(`${base}/`)) continue;
    // "" fuer die Locale-Startseite, sonst "/wissen", "/systeme/astrologie", …
    paths.add(loc.slice(base.length).replace(/\/$/, ""));
  }
  return [...paths].sort();
}

function buildDocument(locale, { full }) {
  const paths = collectPaths(locale);
  const buckets = SECTIONS.map((section) => ({ section, entries: [] }));

  for (const path of paths) {
    const meta = readPageMeta(locale, path);
    if (!meta) continue;
    const bucket = buckets.find((b) => b.section.match(path));
    bucket.entries.push({ url: `${siteUrl}/${locale}${path}/`, ...meta });
  }

  const lines = [`# Astrakey`, "", `> ${INTRO[locale]}`, ""];
  for (const { section, entries } of buckets) {
    if (!entries.length) continue;
    lines.push(`## ${section.title[locale]}`, "");
    for (const entry of entries) {
      const suffix = full && entry.description ? `: ${entry.description}` : "";
      lines.push(`- [${entry.title}](${entry.url})${suffix}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

const summary = [];
for (const locale of LOCALES) {
  const short = buildDocument(locale, { full: false });
  const full = buildDocument(locale, { full: true });
  const suffix = locale === "de" ? "" : `.${locale}`;
  writeFileSync(join(outDir, `llms${suffix}.txt`), short, "utf8");
  writeFileSync(join(outDir, `llms-full${suffix}.txt`), full, "utf8");
  summary.push(`${locale}: ${short.split("\n").filter((l) => l.startsWith("- ")).length} Eintraege`);
}

console.log(`Generated llms.txt / llms-full.txt (${summary.join(", ")}).`);
