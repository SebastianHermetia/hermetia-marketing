import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));
const files = [
  "src/content/marketing.ts",
  "src/content/systems.ts",
  "src/app/[locale]/glossar/page.tsx",
  "src/app/[locale]/glossar/[slug]/page.tsx",
  "src/app/[locale]/wissen/[slug]/page.tsx",
  "src/app/[locale]/vergleiche/[slug]/page.tsx",
  "src/app/[locale]/ueber-hermetia/page.tsx",
  "src/app/[locale]/anwendungsfaelle/page.tsx",
  "src/app/[locale]/kostenlos-vs-premium/page.tsx",
  "src/app/[locale]/daten-und-sicherheit/page.tsx",
  "src/app/[locale]/profil-starten/page.tsx",
  "src/app/[locale]/journaling/page.tsx",
  "src/app/[locale]/vollprofil-buch/page.tsx",
  "src/app/[locale]/companion/page.tsx",
  "src/app/[locale]/profil-verfeinern/page.tsx",
];

const refs = new Set();
const requiredPublicAssets = [
  "og/default.jpg",
];

for (const file of files) {
  const text = readFileSync(join(root, file), "utf8");
  for (const match of text.matchAll(/\/((?:images|graphics)\/[^"'`)]+(?:\.(?:png|jpg|jpeg|svg|webp|avif)))/g)) {
    refs.add(match[1]);
  }
  for (const match of text.matchAll(/art:\s*"([^"]+)"/g)) {
    refs.add(`images/art/${match[1]}`);
  }
}

const missing = [];
for (const ref of [...refs].sort()) {
  const path = join(root, "public", ref);
  if (!existsSync(path)) missing.push(ref);
}

for (const ref of requiredPublicAssets) {
  const path = join(root, "public", ref);
  if (!existsSync(path)) missing.push(ref);
}

const graphicDir = join(root, "public", "graphics", "convergence");
const sourceGraphics = readdirSync(graphicDir, { withFileTypes: true })
  .filter((entry) => entry.isFile() && entry.name.endsWith(".svg"))
  .map((entry) => entry.name);

for (const locale of config.locales.filter((value) => value !== "de")) {
  for (const filename of sourceGraphics) {
    const localized = `graphics/convergence/i18n/${locale}/${filename}`;
    if (!existsSync(join(root, "public", localized))) missing.push(localized);
  }
}

if (missing.length > 0) {
  console.error("Missing public assets:");
  for (const ref of missing) console.error(`- /${ref}`);
  process.exit(1);
}

console.log(`Asset check passed: ${refs.size} referenced public assets, ${sourceGraphics.length * (config.locales.length - 1)} localized SVG graphics and ${requiredPublicAssets.length} required SEO assets found.`);
