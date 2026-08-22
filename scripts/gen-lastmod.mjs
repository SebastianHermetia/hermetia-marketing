#!/usr/bin/env node
// Erzeugt `content/lastmod.json` — je Content-Bereich das Commit-Datum seiner Quelldatei.
//
// Warum: Die Sitemap trug bisher `priority` und `changefreq`, die Google seit Jahren
// ignoriert, aber kein `lastmod` — das einzige Feld, das Google tatsächlich als
// Crawl-Signal auswertet. Ohne lastmod sagt die Sitemap nur "hier sind URLs",
// nicht "diese hier ist neu".
//
// Die Datei wird committet. Das Skript überschreibt einen vorhandenen Wert nur dann,
// wenn `git log` wirklich ein Datum liefert — auf Buildhosts mit flachem Klon bleibt
// der eingecheckte Stand damit erhalten statt durch einen Fallback ersetzt zu werden.

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const target = resolve(root, "content/lastmod.json");

// Bereich -> Quelldatei, aus der die Inhalte dieses Bereichs stammen.
const sources = {
  pages: "src/content/marketing.ts",
  systems: "src/content/systems.ts",
  glossary: "src/content/marketing.ts",
  articles: "src/content/marketing.ts",
  comparisons: "src/content/marketing.ts",
};

function commitDate(file, { first = false } = {}) {
  try {
    const args = ["log", "--format=%cI"];
    if (first) args.push("--reverse");
    else args.push("-1");
    args.push("--", file);
    const out = execFileSync("git", args, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (!out) return null;
    const line = first ? out.split("\n")[0] : out;
    const date = new Date(line.trim());
    return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10);
  } catch {
    return null;
  }
}

const existing = existsSync(target) ? JSON.parse(readFileSync(target, "utf8")) : {};
const next = { ...existing };
let changed = false;

for (const [area, file] of Object.entries(sources)) {
  const date = commitDate(file);
  if (!date) {
    console.warn(`gen-lastmod: kein Commit-Datum für ${file} — behalte ${existing[area] ?? "(leer)"}`);
    continue;
  }
  if (next[area] !== date) changed = true;
  next[area] = date;

  // Erstveröffentlichung = erster Commit der Quelldatei. Wird für `datePublished`
  // im Article-Schema und für die sichtbare Herkunftszeile gebraucht.
  const firstKey = `${area}First`;
  const first = commitDate(file, { first: true });
  if (first && next[firstKey] !== first) {
    next[firstKey] = first;
    changed = true;
  }
}

if (!Object.keys(next).length) {
  console.warn("gen-lastmod: keine Daten ermittelbar, Datei bleibt ungeschrieben.");
  process.exit(0);
}

if (changed || !existsSync(target)) {
  writeFileSync(target, `${JSON.stringify(next, null, 2)}\n`, "utf8");
  console.log(`gen-lastmod: geschrieben → ${JSON.stringify(next)}`);
} else {
  console.log("gen-lastmod: unverändert.");
}
