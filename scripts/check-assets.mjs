import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
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

if (missing.length > 0) {
  console.error("Missing public assets:");
  for (const ref of missing) console.error(`- /${ref}`);
  process.exit(1);
}

console.log(`Asset check passed: ${refs.size} referenced public assets and ${requiredPublicAssets.length} required SEO assets found.`);
