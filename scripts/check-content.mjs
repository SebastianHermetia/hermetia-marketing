import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "out");

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function readOut(path) {
  const file = join(out, ...path.split("/"), "index.html");
  if (!existsSync(file)) {
    fail(`Missing generated page: /${path}/`);
    return "";
  }
  return readFileSync(file, "utf8");
}

function countDirs(path) {
  const dir = join(out, ...path.split("/"));
  if (!existsSync(dir)) return 0;
  return readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isDirectory()).length;
}

if (!existsSync(out)) {
  fail("Missing out directory. Run npm run build before npm run check:content.");
}

const expectations = [
  ["DE system pages", countDirs("de/systeme"), 31],
  ["DE glossary pages", countDirs("de/glossar"), 51],
  ["DE article pages", countDirs("de/wissen"), 20],
  ["DE comparison pages", countDirs("de/vergleiche"), 12],
];

for (const [label, actual, expected] of expectations) {
  if (actual < expected) fail(`${label}: expected at least ${expected}, got ${actual}.`);
}

const deHome = readOut("de");
const enHome = readOut("en");
const frHome = readOut("fr");
const frPricing = readOut("fr/preise");
const esSystems = readOut("es/systeme");
const plMethod = readOut("pl/so-entsteht-dein-profil");
const svConvergence = readOut("sv/konvergenz-engine");
const article = readOut("de/wissen/seelenkarte-erstellen");
const comparison = readOut("de/vergleiche/big-five-vs-human-design");
const glossary = readOut("de/glossar/datenminimierung");
const convergence = readOut("de/konvergenz-engine");
const languages = readOut("de/sprachen");
const launchReview = readOut("de/freigaben");
const about = readOut("de/ueber-hermetia");
const frAbout = readOut("fr/ueber-hermetia");
const useCases = readOut("de/anwendungsfaelle");
const esUseCases = readOut("es/anwendungsfaelle");
const freePremium = readOut("de/kostenlos-vs-premium");
const frFreePremium = readOut("fr/kostenlos-vs-premium");
const dataSecurity = readOut("de/daten-und-sicherheit");
const frDataSecurity = readOut("fr/daten-und-sicherheit");
const pricing = readOut("de/preise");
const services = readOut("de/leistungen");
const systemsHub = readOut("de/systeme");
const method = readOut("de/so-entsteht-dein-profil");
const faqPage = readOut("de/faq");

const checks = [
  ["DE has no fallback language notice", !deHome.includes("Sprachfassung in redaktioneller Vorbereitung")],
  ["EN has no fallback language notice", !enHome.includes("Editorial translation in progress")],
  ["FR has localized fallback language notice", frHome.includes("Version éditoriale en préparation")],
  ["Fallback locales have localized SEO titles", frPricing.includes("<title>Tarifs | Hermetia</title>") && esSystems.includes("<title>Sistemas | Hermetia</title>")],
  ["Fallback locales have localized SEO descriptions", plMethod.includes("Pełna wersja redakcyjna jest w przygotowaniu") && svConvergence.includes("Den fullständiga redaktionella versionen förbereds")],
  ["EN references 31 systems", enHome.includes("31 interpretive systems")],
  ["EN no longer references 25 systems", !enHome.includes("25 interpretive systems")],
  ["Article detail has longform section", article.includes("Warum dieses Thema")],
  ["Article detail has FAQ schema", article.includes("FAQPage")],
  ["Article detail has inline CTA", article.includes("article-seelenkarte-erstellen-inline")],
  ["Comparison detail has strengths block", comparison.includes("Stärken")],
  ["Comparison detail has FAQ schema", comparison.includes("FAQPage")],
  ["Glossary detail has Hermetia meaning block", glossary.includes("Bedeutung in Hermetia")],
  ["Glossary detail has limits block", glossary.includes("Grenzen der Deutung")],
  ["Glossary detail has FAQ schema", glossary.includes("FAQPage")],
  ["Convergence page embeds explainer graphics", convergence.includes("/graphics/convergence/abb1-familien-modell.svg") && convergence.includes("/graphics/convergence/abb5-algorithmus-funnel.svg")],
  ["Language status page exists", languages.includes("Hermetia in europäischen Sprachen")],
  ["Language status page reports 24 live routes", languages.includes("Sprachrouten live") && languages.includes(">24<")],
  ["Language status page reports editorial locales", languages.includes("Redaktionell freigegeben") && languages.includes(">2<")],
  ["Language status page reports UI-localized locales", languages.includes("UI lokalisiert") && languages.includes(">22<")],
  ["Language status page reports fallback locales", languages.includes("Technischer Fallback") && languages.includes(">0<")],
  ["Language status page exposes translation backlog", languages.includes("Redaktions-Backlog") && languages.includes("Seiten im Longform-Backlog") && languages.includes(">127<")],
  ["Language status page prioritizes legal translations", languages.includes("Rechtstexte, Datenschutz, AI-Transparenz") && languages.includes("P0")],
  ["Language status page exposes QA gates", languages.includes("Translation QA") && languages.includes("QA-Gates") && languages.includes(">6<")],
  ["Language status page includes legal/safety QA", languages.includes("Rechtliche Sinngleichheit") && languages.includes("Keine Diagnose, Therapie oder Vorhersage")],
  ["Language status page is linked in footer", deHome.includes("/de/sprachen/")],
  ["FR UI navigation is localized", frHome.includes("Fonctionnalités") && frHome.includes("Commencer le profil")],
  ["Launch review page exists", launchReview.includes("Legal-, IP- und Launch-Freigaben")],
  ["Launch review page states external legal review", launchReview.includes("keine anwaltliche Endfreigabe")],
  ["Launch review page lists indexing gate", launchReview.includes("Indexing und Domain-Launch")],
  ["Launch review page is linked in footer", deHome.includes("/de/freigaben/")],
  ["About Hermetia page exists", about.includes("Ein System für Menschen") && about.includes("FAQPage")],
  ["About Hermetia page has tracked CTAs", about.includes("utm_content=about-hero") && about.includes("utm_content=about-paid-depth")],
  ["About Hermetia page is linked in footer", deHome.includes("/de/ueber-hermetia/")],
  ["About Hermetia has localized fallback SEO", frAbout.includes("<title>À propos de Hermetia | Hermetia</title>")],
  ["Use cases page exists", useCases.includes("Wofür Hermetia besonders gut geeignet ist") && useCases.includes("Hermetia passt gut, wenn")],
  ["Use cases page has limits and FAQ schema", useCases.includes("Hermetia passt nicht, wenn") && useCases.includes("FAQPage")],
  ["Use cases page has tracked CTAs", useCases.includes("utm_content=use-cases-hero") && useCases.includes("utm_content=use-cases-final")],
  ["Use cases page is linked in footer", deHome.includes("/de/anwendungsfaelle/")],
  ["Use cases page has localized fallback SEO", esUseCases.includes("<title>Casos de uso | Hermetia</title>")],
  ["Free vs Premium page exists", freePremium.includes("Erst Resonanz prüfen") && freePremium.includes("Nicht jeder sollte sofort upgraden")],
  ["Free vs Premium page has FAQ schema", freePremium.includes("FAQPage")],
  ["Free vs Premium page has tracked CTAs", freePremium.includes("utm_content=free-premium-hero") && freePremium.includes("utm_content=free-premium-final")],
  ["Free vs Premium page is linked in footer", deHome.includes("/de/kostenlos-vs-premium/")],
  ["Free vs Premium page has localized fallback SEO", frFreePremium.includes("<title>Gratuit ou Premium | Hermetia</title>")],
  ["Data security page exists", dataSecurity.includes("Persönliche Tiefe braucht verständlichen Datenschutz") && dataSecurity.includes("Vier Datenbereiche")],
  ["Data security page has FAQ schema", dataSecurity.includes("FAQPage")],
  ["Data security page has tracked CTAs", dataSecurity.includes("utm_content=data-security-hero") && dataSecurity.includes("utm_content=data-security-final")],
  ["Data security page is linked in footer", deHome.includes("/de/daten-und-sicherheit/")],
  ["Data security page has localized fallback SEO", frDataSecurity.includes("<title>Données et sécurité | Hermetia</title>")],
  ["Header CTAs are source tagged", deHome.includes("utm_content=header-start") && deHome.includes("utm_content=header-login")],
  ["Home CTAs are source tagged", deHome.includes("utm_content=home-hero") && deHome.includes("utm_content=home-final")],
  ["Pricing CTAs are source tagged", pricing.includes("utm_content=pricing-tier-1") && pricing.includes("utm_content=pricing-tier-2") && pricing.includes("utm_content=pricing-tier-3") && pricing.includes("utm_content=pricing-final")],
  ["Hub CTAs are source tagged", services.includes("utm_content=services-final") && systemsHub.includes("utm_content=systems-final") && method.includes("utm_content=method-final") && faqPage.includes("utm_content=faq-final")],
  ["Language CTAs are source tagged", languages.includes("utm_content=language-status-inline") && languages.includes("utm_content=language-status")],
];

for (const [label, ok] of checks) {
  if (!ok) fail(`Content check failed: ${label}.`);
}

if (process.exitCode) process.exit(process.exitCode);

console.log("Content check passed: counts, language notices, longform resources and convergence graphics verified.");
