import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));
const graphicRoot = join(root, "public", "graphics", "convergence");
const locales = config.locales.filter((locale) => locale !== "de");

const germanWords = [
  "nicht", "fuer", "für", "über", "ueber", "wird", "werden", "deine", "dein",
  "dich", "dir", "quellen", "themen", "staerke", "stärke", "sichtweisen", "gedaempft",
  "gedämpft", "konvergenz", "kernthemen", "rueckzug", "rückzug",
  "sichtbarkeit", "freude", "spannungsfeld", "redudanz", "redundanz",
];
const germanRe = new RegExp(`(?:^|[^A-Za-zÀ-ÿ])(${germanWords.join("|")})(?![A-Za-zÀ-ÿ])`, "i");

function decodeXml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number.parseInt(dec, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function visibleText(svg) {
  return [...svg.matchAll(/>([^<>]+)</g)]
    .map((match) => decodeXml(match[1]).replace(/\s+/g, " ").trim())
    .filter((text) => text.length >= 4 && /[A-Za-zÀ-ÿÄÖÜäöüß]/.test(text));
}

const sourceGraphics = readdirSync(graphicRoot, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".svg"))
  .map((entry) => entry.name);

const missing = [];
const leaks = [];

for (const locale of locales) {
  for (const filename of sourceGraphics) {
    const file = join(graphicRoot, "i18n", locale, filename);
    if (!existsSync(file)) {
      missing.push(`${locale}/${filename}`);
      continue;
    }
    const lines = visibleText(readFileSync(file, "utf8")).filter((line) => germanRe.test(line));
    if (lines.length) leaks.push({ locale, filename, lines: lines.slice(0, 5) });
  }
}

if (missing.length || leaks.length) {
  if (missing.length) {
    console.error("Missing localized graphics:");
    for (const entry of missing.slice(0, 50)) console.error(`- ${entry}`);
  }
  if (leaks.length) {
    console.error("German text still present in localized graphics:");
    for (const leak of leaks.slice(0, 20)) {
      console.error(`- ${leak.locale}/${leak.filename}: ${leak.lines.join(" | ")}`);
    }
  }
  process.exit(1);
}

console.log(`Localized graphics check passed: ${sourceGraphics.length * locales.length} SVG graphic variants scanned across ${locales.length} locale(s).`);
