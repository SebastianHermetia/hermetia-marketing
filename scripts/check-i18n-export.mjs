import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const out = join(root, "out");
const locales = ["de", "en", "fr", "es", "it", "nl", "pl", "pt", "bg", "hr", "cs", "da", "et", "fi", "el", "hu", "ga", "lv", "lt", "mt", "ro", "sk", "sl", "sv"];
const fallbackMarkers = [
  "Sprachfassung in redaktioneller Vorbereitung",
  "Editorial translation in progress",
  "Version éditoriale en préparation",
  "redaktionell in Vorbereitung",
  "Longform in Vorbereitung",
  "Technischer Fallback",
  "englischen Editorial-Content",
  "A portrait of your soul",
  "Ein Bild deiner Seele",
];

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return htmlFiles(full);
    return entry.name === "index.html" ? [full] : [];
  });
}

function stripHtml(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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
    const html = readFileSync(file, "utf8");
    const text = stripHtml(html);
    if (!text.includes("Hermetia")) {
      console.error(`Missing Hermetia content in ${relative(out, file)}`);
      failures += 1;
    }
    if (locale !== "de" && locale !== "en") {
      for (const marker of fallbackMarkers) {
        if (text.includes(marker)) {
          console.error(`Fallback marker leaked in ${relative(out, file)}: ${marker}`);
          failures += 1;
        }
      }
    }
  }
}

if (failures > 0) {
  console.error(`i18n export check failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log(`i18n export check passed: ${checked} localized HTML pages scanned.`);
