#!/usr/bin/env node
// Wandelt die Brand-PNGs in WebP um und begrenzt ihre Kantenlänge.
//
// Hintergrund (SEO-Audit 2026-08-22): `public/images/hermetia` enthielt 17 PNGs mit
// zusammen 25 MB. Das LCP-Bild der Startseite allein war 1,9 MB — bei ~2,6 MB
// Gesamtgewicht pro Seitenaufruf. Core Web Vitals sind ein Rankingfaktor, und auf
// Mobilgeräten war der Largest Contentful Paint entsprechend jenseits von vier Sekunden.
//
// WebP statt <picture>-Fallback: Alle relevanten Browser unterstützen WebP seit 2020
// (Safari ab 14). Ein PNG-Fallback wäre toter Ballast im Deploy.
//
// Die Originale liegen in `assets/source-images/` und werden nicht ausgeliefert.
// Aufruf: node scripts/optimize-images.mjs [--force]

import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { basename, extname, join, resolve } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = join(root, "assets/source-images");
const targetDir = join(root, "public/images/hermetia");
const force = process.argv.includes("--force");

// Die Bilder werden nirgends breiter als ~640 CSS-Pixel dargestellt; 1200 px Kantenlänge
// deckt auch 2x-Displays ab und halbiert die Fläche gegenüber den Originalen.
const maxEdge = 1200;
const quality = 78;

if (!existsSync(sourceDir)) {
  console.error(`Quellordner fehlt: ${sourceDir}`);
  process.exit(1);
}
mkdirSync(targetDir, { recursive: true });

const sources = readdirSync(sourceDir).filter((file) => /\.(png|jpe?g)$/i.test(file));
if (!sources.length) {
  console.error(`Keine Bilder in ${sourceDir}`);
  process.exit(1);
}

let totalBefore = 0;
let totalAfter = 0;

for (const file of sources) {
  const from = join(sourceDir, file);
  const to = join(targetDir, `${basename(file, extname(file))}.webp`);
  const before = statSync(from).size;
  totalBefore += before;

  if (existsSync(to) && !force && statSync(to).mtimeMs >= statSync(from).mtimeMs) {
    totalAfter += statSync(to).size;
    console.log(`= ${basename(to)} (aktuell)`);
    continue;
  }

  await sharp(from)
    .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(to);

  const after = statSync(to).size;
  totalAfter += after;
  const saved = Math.round((1 - after / before) * 100);
  console.log(`→ ${basename(to)}  ${Math.round(before / 1024)} KB → ${Math.round(after / 1024)} KB  (−${saved} %)`);
}

console.log(
  `\nGesamt: ${Math.round(totalBefore / 1024)} KB → ${Math.round(totalAfter / 1024)} KB ` +
    `(−${Math.round((1 - totalAfter / totalBefore) * 100)} %)`,
);
