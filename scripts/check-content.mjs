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
const systemDetail = readOut("de/systeme/human-design");
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
const onboarding = readOut("de/profil-starten");
const frOnboarding = readOut("fr/profil-starten");
const journaling = readOut("de/journaling");
const frJournaling = readOut("fr/journaling");
const profileBook = readOut("de/vollprofil-buch");
const frProfileBook = readOut("fr/vollprofil-buch");
const companion = readOut("de/companion");
const frCompanion = readOut("fr/companion");
const profileRefinement = readOut("de/profil-verfeinern");
const frProfileRefinement = readOut("fr/profil-verfeinern");
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
  ["Comparison detail has decision helper", comparison.includes("Entscheidungshilfe") && comparison.includes("Wann welcher Blick hilfreicher ist")],
  ["Comparison detail has data fairness block", comparison.includes("Datenquellen und Fairness") && comparison.includes("keine Gewinnerliste")],
  ["Comparison detail has legal limits block", comparison.includes("Rechtliche Grenzen") && comparison.includes("Keine Diagnose")],
  ["Comparison detail has FAQ schema", comparison.includes("FAQPage")],
  ["Glossary detail has Hermetia meaning block", glossary.includes("Bedeutung in Hermetia")],
  ["Glossary detail has search question block", glossary.includes("Suchfrage") && glossary.includes("Wann ist")],
  ["Glossary detail has fictional example", glossary.includes("Beispiel, fiktiv") && glossary.includes("in einer Deutung auftauchen könnte")],
  ["Glossary detail has limits block", glossary.includes("Grenzen der Deutung")],
  ["Glossary detail has IP and privacy block", glossary.includes("IP und Datenschutz") && glossary.includes("eigene Sprache verwendet")],
  ["Glossary detail has related terms block", glossary.includes("Verwandte Begriffe") && glossary.includes("/de/glossar/")],
  ["Glossary detail has FAQ schema", glossary.includes("FAQPage")],
  ["Convergence page embeds explainer graphics", convergence.includes("/graphics/convergence/abb1-familien-modell.svg") && convergence.includes("/graphics/convergence/abb5-algorithmus-funnel.svg")],
  ["System detail has data basis block", systemDetail.includes("Datenbasis") && systemDetail.includes("Welche Angaben Hermetia")],
  ["System detail has fictional example", systemDetail.includes("Beispiel, fiktiv") && systemDetail.includes("Wie eine Deutung klingen könnte")],
  ["System detail has pro and contra block", systemDetail.includes("Pro und Contra") && systemDetail.includes("verantwortungsvoll lesen")],
  ["System detail has tracked CTAs", systemDetail.includes("utm_content=system-human-design-midpage") && systemDetail.includes("utm_content=system-human-design-final")],
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
  ["Onboarding guide page exists", onboarding.includes("So kommst du von der Website") && onboarding.includes("Vier Schritte")],
  ["Onboarding guide page has FAQ schema", onboarding.includes("FAQPage")],
  ["Onboarding guide page has tracked CTAs", onboarding.includes("utm_content=onboarding-guide-hero") && onboarding.includes("utm_content=onboarding-guide-final")],
  ["Onboarding guide page is linked in footer", deHome.includes("/de/profil-starten/")],
  ["Onboarding guide page has localized fallback SEO", frOnboarding.includes("<title>Commencer le profil | Hermetia</title>")],
  ["Journaling page exists", journaling.includes("Journaling mit Hermetia") && journaling.includes("aus Impulsen wird Selbsterkenntnis")],
  ["Journaling page has FAQ schema", journaling.includes("FAQPage")],
  ["Journaling page has tracked CTAs", journaling.includes("utm_content=journaling-inline-1") && journaling.includes("utm_content=journaling-final")],
  ["Journaling page is linked in footer", deHome.includes("/de/journaling/")],
  ["Journaling page has localized fallback SEO", frJournaling.includes("<title>Journal | Hermetia</title>")],
  ["Profile book page exists", profileBook.includes("Das Vollprofil-Buch") && profileBook.includes("Premium-Tiefe")],
  ["Profile book page has FAQ schema", profileBook.includes("FAQPage")],
  ["Profile book page has tracked CTAs", profileBook.includes("utm_content=vollprofil-buch-inline-1") && profileBook.includes("utm_content=vollprofil-buch-final")],
  ["Profile book page is linked in footer", deHome.includes("/de/vollprofil-buch/")],
  ["Profile book page has localized fallback SEO", frProfileBook.includes("<title>Livre de profil complet | Hermetia</title>")],
  ["Companion page exists", companion.includes("Hermetia Companion") && companion.includes("ruhiger AI-Begleiter")],
  ["Companion page has FAQ schema", companion.includes("FAQPage")],
  ["Companion page has tracked CTAs", companion.includes("utm_content=companion-inline-1") && companion.includes("utm_content=companion-final")],
  ["Companion page is linked in footer", deHome.includes("/de/companion/")],
  ["Companion page has localized fallback SEO", frCompanion.includes("<title>Companion | Hermetia</title>")],
  ["Profile refinement page exists", profileRefinement.includes("Profil verfeinern") && profileRefinement.includes("Export und Löschung")],
  ["Profile refinement page has FAQ schema", profileRefinement.includes("FAQPage")],
  ["Profile refinement page has tracked CTAs", profileRefinement.includes("utm_content=profil-verfeinern-inline-1") && profileRefinement.includes("utm_content=profil-verfeinern-final")],
  ["Profile refinement page is linked in footer", deHome.includes("/de/profil-verfeinern/")],
  ["Profile refinement page has localized fallback SEO", frProfileRefinement.includes("<title>Affiner le profil | Hermetia</title>")],
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
