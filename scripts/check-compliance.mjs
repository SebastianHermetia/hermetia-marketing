import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "out");

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function read(path) {
  const file = join(root, path);
  if (!existsSync(file)) {
    fail(`Missing compliance source: ${path}`);
    return "";
  }
  return readFileSync(file, "utf8");
}

function readOut(path) {
  const file = join(out, ...path.split("/"), "index.html");
  if (!existsSync(file)) {
    fail(`Missing generated page: /${path}/`);
    return "";
  }
  return readFileSync(file, "utf8");
}

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

if (!existsSync(out)) {
  fail("Missing out directory. Run npm run build before npm run check:compliance.");
}

const headers = read("public/_headers");
const vercel = read("vercel.json");
const launchReview = read("src/content/launch-review.ts");
const assetInventory = read("content/asset-inventory.md");
const links = read("src/lib/links.ts");
const deHome = readOut("de");
const legalPage = readOut("de/freigaben");
const languagePage = readOut("de/sprachen");
const generatedHtml = walk(out).filter((file) => file.endsWith(".html"));

const externalAssetRefs = generatedHtml.flatMap((file) => {
  const html = readFileSync(file, "utf8");
  return [...html.matchAll(/<(?:img|source|video)\b[^>]*(?:src|poster)=["']https?:\/\/(?!app\.astrakey\.me|astrakey\.me)([^"']+)["']/g)].map(
    (match) => `${file}: ${match[0]}`,
  );
});
const appDomainMarketingLinks = generatedHtml.flatMap((file) => {
  const html = readFileSync(file, "utf8");
  return [...html.matchAll(/https:\/\/app\.astrakey\.me\/(?:de|en|fr|es|it|nl|pl|pt|bg|hr|cs|da|et|fi|el|hu|ga|lv|lt|mt|ro|sk|sl|sv)\//g)].map(
    (match) => `${file}: ${match[0]}`,
  );
});

const checks = [
  ["Public launch headers do not block indexing", !headers.includes("X-Robots-Tag: noindex") && !headers.includes("X-Robots-Tag: nofollow")],
  ["Vercel headers do not block indexing", !vercel.includes("X-Robots-Tag") && !vercel.includes("noindex") && !vercel.includes("nofollow")],
  ["Generated HTML allows indexing", !deHome.includes("noindex") && !deHome.includes("nofollow")],
  ["Public launch keeps security headers", headers.includes("X-Content-Type-Options: nosniff") && headers.includes("X-Frame-Options: DENY")],
  ["Launch review includes legal and asset gates", launchReview.includes("data-protection") && launchReview.includes("asset-rights")],
  ["Launch review keeps external legal review visible", launchReview.includes("anwaltliche Endprüfung bleibt vor Launch erforderlich")],
  ["Asset inventory forbids third-party protected material", assetInventory.includes("Keine fremden Screenshots, Logos, Marken")],
  ["Asset inventory requires final rights approval", assetInventory.includes("Vor finalem Launch braucht jedes Asset eine finale Rechtefreigabe")],
  ["CTA links carry marketing source fields", links.includes("utm_source") && links.includes("utm_content") && links.includes("source")],
  ["Live export exposes launch review page", legalPage.includes("Legal-, IP- und Launch-Freigaben")],
  ["Live export exposes translation QA", languagePage.includes("Translation QA") && languagePage.includes("Rechtliche Sinngleichheit")],
  ["Home export exposes non-PII CTA source", deHome.includes("utm_content=home-hero") && deHome.includes("source=home-hero")],
  ["Start CTAs point to marketing beta access", deHome.includes("https://astrakey.me/de/beta-zugang/")],
  ["Generated HTML does not send marketing locale paths to app domain", appDomainMarketingLinks.length === 0],
  ["Generated HTML has no external image/poster hosts", externalAssetRefs.length === 0],
];

for (const [label, ok] of checks) {
  if (!ok) fail(`Compliance check failed: ${label}.`);
}

if (externalAssetRefs.length > 0) {
  for (const ref of externalAssetRefs.slice(0, 20)) console.error(ref);
}
if (appDomainMarketingLinks.length > 0) {
  for (const ref of appDomainMarketingLinks.slice(0, 20)) console.error(ref);
}

if (process.exitCode) process.exit(process.exitCode);

console.log("Compliance check passed: launch gates, asset rights markers, public indexing state and CTA sources verified.");

