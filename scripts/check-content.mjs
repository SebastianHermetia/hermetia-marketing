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
const comparisonHub = readOut("de/vergleiche");
const comparison = readOut("de/vergleiche/big-five-vs-human-design");
const glossaryHub = readOut("de/glossar");
const glossary = readOut("de/glossar/datenminimierung");
const convergence = readOut("de/konvergenz-engine");
const soulMap = readOut("de/seelenkarte");
const systemDetail = readOut("de/systeme/human-design");
const languages = readOut("de/sprachen");
const launchReview = readOut("de/freigaben");
const about = readOut("de/ueber-hermetia");
const frAbout = readOut("fr/ueber-hermetia");
const useCases = readOut("de/anwendungsfaelle");
const esUseCases = readOut("es/anwendungsfaelle");
const terms = readOut("de/agb");
const frTerms = readOut("fr/agb");
const withdrawal = readOut("de/widerruf");
const frWithdrawal = readOut("fr/widerruf");
const freePremium = readOut("de/kostenlos-vs-premium");
const frFreePremium = readOut("fr/kostenlos-vs-premium");
const privacyPolicy = readOut("de/datenschutz");
const frPrivacyPolicy = readOut("fr/datenschutz");
const dataSecurity = readOut("de/daten-und-sicherheit");
const frDataSecurity = readOut("fr/daten-und-sicherheit");
const aiTransparency = readOut("de/ki-transparenz");
const frAiTransparency = readOut("fr/ki-transparenz");
const relationships = readOut("de/beziehungen");
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
const dailyImpulses = readOut("de/tagesimpulse");
const pricing = readOut("de/preise");
const services = readOut("de/leistungen");
const systemsHub = readOut("de/systeme");
const method = readOut("de/so-entsteht-dein-profil");
const knowledgeHub = readOut("de/wissen");
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
  ["Comparison hub has search questions", comparisonHub.includes("Suchfragen") && comparisonHub.includes("Welche Vergleichsfragen beantwortet Hermetia")],
  ["Comparison hub has comparison families", comparisonHub.includes("Vergleichsfamilien") && comparisonHub.includes("Astrologie, Human Design und Gene Keys") && comparisonHub.includes("Kostenloser Einstieg und Premium-Tiefe")],
  ["Comparison hub has all comparisons heading", comparisonHub.includes("Alle Vergleiche") && comparisonHub.includes("Systeme, Methoden und Alltag gegenübergestellt")],
  ["Comparison hub has fairness block", comparisonHub.includes("Fairness") && comparisonHub.includes("Warum Hermetia nicht nach Gewinnern sucht")],
  ["Comparison hub has structured data", comparisonHub.includes("Article") && comparisonHub.includes("BreadcrumbList")],
  ["Comparison hub has tracked CTAs", comparisonHub.includes("utm_content=comparisons-hero") && comparisonHub.includes("utm_content=comparisons-fairness") && comparisonHub.includes("utm_content=comparisons-final")],
  ["Glossary detail has Hermetia meaning block", glossary.includes("Bedeutung in Hermetia")],
  ["Glossary detail has search question block", glossary.includes("Suchfrage") && glossary.includes("Wann ist")],
  ["Glossary detail has fictional example", glossary.includes("Beispiel, fiktiv") && glossary.includes("in einer Deutung auftauchen könnte")],
  ["Glossary detail has limits block", glossary.includes("Grenzen der Deutung")],
  ["Glossary detail has IP and privacy block", glossary.includes("IP und Datenschutz") && glossary.includes("eigene Sprache verwendet")],
  ["Glossary detail has related terms block", glossary.includes("Verwandte Begriffe") && glossary.includes("/de/glossar/")],
  ["Glossary detail has FAQ schema", glossary.includes("FAQPage")],
  ["Glossary hub has AEO questions", glossaryHub.includes("Antwortmaschine") && glossaryHub.includes("Welche Fragen beantwortet das Glossar")],
  ["Glossary hub has term families", glossaryHub.includes("Begriffsfamilien") && glossaryHub.includes("Profil und Seelenkarte") && glossaryHub.includes("AI, Datenschutz und Recht")],
  ["Glossary hub has all terms heading", glossaryHub.includes("Alle Begriffe") && glossaryHub.includes("Von Seelenkarte bis Datenminimierung")],
  ["Glossary hub has structured data", glossaryHub.includes("Article") && glossaryHub.includes("BreadcrumbList")],
  ["Glossary hub has tracked CTAs", glossaryHub.includes("utm_content=glossary-hero") && glossaryHub.includes("utm_content=glossary-index")],
  ["Convergence page embeds explainer graphics", convergence.includes("/graphics/convergence/abb1-familien-modell.svg") && convergence.includes("/graphics/convergence/abb5-algorithmus-funnel.svg")],
  ["Soul map page has data basis", soulMap.includes("Welche Daten in die Seelenkarte einfließen") && soulMap.includes("Geburtsdatum, Geburtsort, Geburtszeit")],
  ["Soul map page explains convergence", soulMap.includes("Von Systemsignalen zu Kernthemen") && soulMap.includes("Konvergenz-Engine")],
  ["Soul map page explains free and premium depth", soulMap.includes("Was kostenlos sichtbar wird") && soulMap.includes("Was Premium an der Seelenkarte vertieft")],
  ["Soul map page has legal and ethical limits", soulMap.includes("Rechtliche und ethische Grenzen") && soulMap.includes("keine übernommenen proprietären Deutungspassagen")],
  ["Soul map page has graphics", soulMap.includes("/graphics/convergence/abb1-familien-modell.svg") && soulMap.includes("/graphics/convergence/abb5-algorithmus-funnel.svg")],
  ["Soul map page has expanded FAQ and CTAs", soulMap.includes("FAQPage") && soulMap.includes("Wann lohnt sich Premium für die Seelenkarte") && soulMap.includes("utm_content=seelenkarte-inline-1") && soulMap.includes("utm_content=seelenkarte-final")],
  ["System detail has data basis block", systemDetail.includes("Datenbasis") && systemDetail.includes("Welche Angaben Hermetia")],
  ["System detail has fictional example", systemDetail.includes("Beispiel, fiktiv") && systemDetail.includes("Wie eine Deutung klingen könnte")],
  ["System detail has pro and contra block", systemDetail.includes("Pro und Contra") && systemDetail.includes("verantwortungsvoll lesen")],
  ["System detail has tracked CTAs", systemDetail.includes("utm_content=system-human-design-midpage") && systemDetail.includes("utm_content=system-human-design-final")],
  ["Systems hub has search questions", systemsHub.includes("Suchfragen") && systemsHub.includes("Welche Systemfragen beantwortet Hermetia")],
  ["Systems hub has system families", systemsHub.includes("Systemfamilien") && systemsHub.includes("31 Systeme, aber nicht 31 Stimmen durcheinander")],
  ["Systems hub has explainability block", systemsHub.includes("Erklärbarkeit") && systemsHub.includes("So bleibt Vielfalt verständlich")],
  ["Systems hub has system gates", systemsHub.includes("System-Gates") && systemsHub.includes("Hermetia verwendet eigene Texte")],
  ["Systems hub has graphics", systemsHub.includes("/graphics/convergence/abb1-familien-modell.svg") && systemsHub.includes("/graphics/convergence/abb5-algorithmus-funnel.svg")],
  ["Systems hub has structured data", systemsHub.includes("Article") && systemsHub.includes("BreadcrumbList")],
  ["Systems hub has expanded tracked CTAs", systemsHub.includes("utm_content=systems-hero") && systemsHub.includes("utm_content=systems-explainability") && systemsHub.includes("utm_content=systems-convergence")],
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
  ["Use cases page has search questions", useCases.includes("Suchfragen") && useCases.includes("Welche Anwendungsfragen beantwortet Hermetia")],
  ["Use cases page has user journey", useCases.includes("Nutzerreise") && useCases.includes("Vom ersten Interesse zur bezahlten Tiefe")],
  ["Use cases page has deep use cases", useCases.includes("Vier Anwendungsfelder") && useCases.includes("Identität und Selbstbild") && useCases.includes("Alltag, Journaling und Integration")],
  ["Use cases page has conversion principles", useCases.includes("Conversion-Prinzip") && useCases.includes("Neugier soll in Anmeldung übergehen")],
  ["Use cases page has legal frame", useCases.includes("Rechtlicher Rahmen") && useCases.includes("Eigene Sprache statt geschützter Deutungstexte")],
  ["Use cases page has graphics", useCases.includes("/graphics/convergence/abb5-algorithmus-funnel.svg")],
  ["Use cases page has expanded tracked CTAs", useCases.includes("utm_content=use-cases-hero") && useCases.includes("utm_content=use-cases-journey") && useCases.includes("utm_content=use-cases-identity") && useCases.includes("utm_content=use-cases-relationships") && useCases.includes("utm_content=use-cases-final")],
  ["Use cases page is linked in footer", deHome.includes("/de/anwendungsfaelle/")],
  ["Use cases page has localized fallback SEO", esUseCases.includes("<title>Casos de uso | Hermetia</title>")],
  ["Terms page covers paid models", terms.includes("bezahlte Modelle") && terms.includes("Vollprofil-Buch") && terms.includes("Premium soll zusätzliche Tiefe schaffen")],
  ["Terms page covers advice limits and AI", terms.includes("Kein Ersatz für Fachberatung") && terms.includes("AI-Inhalte und Kennzeichnung")],
  ["Terms page covers withdrawal and cancellation", terms.includes("Widerrufsrecht") && terms.includes("Kündigungsbutton im Profil")],
  ["Terms page covers user duties and relationship data", terms.includes("Nutzerpflichten und faire Nutzung") && terms.includes("heimlichen Bewertung")],
  ["Terms page covers rights and final review", terms.includes("Rechte an Inhalten und Nutzungsrechte") && terms.includes("rechtlich final geprüft")],
  ["Terms page is linked in footer", deHome.includes("/de/agb/")],
  ["Terms page has localized fallback SEO", frTerms.includes("<title>Allgemeine Geschäftsbedingungen</title>") && frTerms.includes("Version éditoriale en préparation")],
  ["Withdrawal page covers digital products", withdrawal.includes("digitale Leistungen von Hermetia") && withdrawal.includes("Vollprofil-Buch als digitales Produkt")],
  ["Withdrawal page covers immediate access", withdrawal.includes("Digitale Inhalte und Sofortzugriff") && withdrawal.includes("Zustimmung muss im Bestellprozess klar und getrennt erfolgen")],
  ["Withdrawal page separates subscriptions and cancellation", withdrawal.includes("Abonnements und laufende Verträge") && withdrawal.includes("Widerruf und Kündigung unterscheiden")],
  ["Withdrawal page has model form and final review", withdrawal.includes("Muster-Widerrufsformular") && withdrawal.includes("anwaltlich final geprüft")],
  ["Withdrawal page is linked in footer", deHome.includes("/de/widerruf/")],
  ["Withdrawal page has localized fallback SEO", frWithdrawal.includes("<title>Widerrufsbelehrung</title>") && frWithdrawal.includes("Version éditoriale en préparation")],
  ["Free vs Premium page exists", freePremium.includes("Erst Resonanz prüfen") && freePremium.includes("Nicht jeder sollte sofort upgraden")],
  ["Free vs Premium page has FAQ schema", freePremium.includes("FAQPage")],
  ["Free vs Premium page has value ladder", freePremium.includes("Werttreppe") && freePremium.includes("Von kostenloser Resonanz zu bezahlter Tiefe")],
  ["Free vs Premium page has premium modules", freePremium.includes("Premium-Module") && freePremium.includes("Wofür bezahlte Modelle konkret stehen")],
  ["Free vs Premium page has fairness rules", freePremium.includes("Ein gutes Upgrade fühlt sich nicht gedrängt an") && freePremium.includes("Angstmarketing")],
  ["Free vs Premium page has graphic", freePremium.includes("/graphics/convergence/abb10-verankert-und-fein.svg")],
  ["Free vs Premium page has expanded FAQ and tracked CTAs", freePremium.includes("Woran erkenne ich, dass Premium zu früh wäre") && freePremium.includes("Welche Premium-Funktion liefert den meisten Wert") && freePremium.includes("utm_content=free-premium-hero") && freePremium.includes("utm_content=free-premium-final")],
  ["Free vs Premium page is linked in footer", deHome.includes("/de/kostenlos-vs-premium/")],
  ["Free vs Premium page has localized fallback SEO", frFreePremium.includes("<title>Gratuit ou Premium | Hermetia</title>")],
  ["Data security page exists", dataSecurity.includes("Persönliche Tiefe braucht verständlichen Datenschutz") && dataSecurity.includes("Vier Datenbereiche")],
  ["Data security page has FAQ schema", dataSecurity.includes("FAQPage")],
  ["Data security page has trust questions", dataSecurity.includes("Trust-Fragen") && dataSecurity.includes("Die drei wichtigsten Sicherheitsfragen vor dem Profilstart")],
  ["Data security page explains sensitive profiles", dataSecurity.includes("Warum sind spirituelle Profile besonders sensibel") && dataSecurity.includes("nicht wie harmlose Marketingdaten")],
  ["Data security page has lifecycle", dataSecurity.includes("Daten-Lebenszyklus") && dataSecurity.includes("Von der Eingabe bis zur Kontrolle")],
  ["Data security page has risk controls", dataSecurity.includes("Risikobereiche") && dataSecurity.includes("Beziehungsdaten") && dataSecurity.includes("Journaltexte")],
  ["Data security page has launch indexing gate", dataSecurity.includes("Launch und Indexierung") && dataSecurity.includes("noindex/nofollow")],
  ["Data security page has graphics", dataSecurity.includes("/graphics/convergence/abb4-pipeline-einordnung.svg") && dataSecurity.includes("/graphics/convergence/abb5-algorithmus-funnel.svg")],
  ["Data security page has expanded FAQ and tracked CTAs", dataSecurity.includes("Werden meine Daten für Werbung verkauft") && dataSecurity.includes("Warum bleibt die Website vor dem Launch auf noindex/nofollow") && dataSecurity.includes("utm_content=data-security-hero") && dataSecurity.includes("utm_content=data-security-final")],
  ["Data security page is linked in footer", deHome.includes("/de/daten-und-sicherheit/")],
  ["Data security page has localized fallback SEO", frDataSecurity.includes("<title>Données et sécurité | Hermetia</title>")],
  ["Privacy policy has extended sensitive data framing", privacyPolicy.includes("nicht wie gewöhnliche Marketingdaten") && privacyPolicy.includes("besondere Kategorien personenbezogener Daten")],
  ["Privacy policy covers AI and data minimization", privacyPolicy.includes("AI-Verarbeitung") && privacyPolicy.includes("Rohdaten reduziert, pseudonymisiert")],
  ["Privacy policy covers third-country transfers and processors", privacyPolicy.includes("Drittlandübermittlung und Dienstleister") && privacyPolicy.includes("Transfer-Risiko-Prüfung")],
  ["Privacy policy covers relationship data consent", privacyPolicy.includes("Beziehungen und Daten anderer Personen") && privacyPolicy.includes("niemand heimlich spirituell")],
  ["Privacy policy covers export deletion and security", privacyPolicy.includes("Speicherdauer, Löschung und Export") && privacyPolicy.includes("verschlüsselte Übertragung")],
  ["Privacy policy covers advertising limits and final review", privacyPolicy.includes("Keine Weitergabe zu Werbezwecken") && privacyPolicy.includes("anwaltlich freigegeben")],
  ["Privacy policy is linked in footer", deHome.includes("/de/datenschutz/")],
  ["Privacy policy has localized fallback SEO", frPrivacyPolicy.includes("<title>Datenschutzerklärung</title>") && frPrivacyPolicy.includes("Version éditoriale en préparation")],
  ["AI transparency page exists", aiTransparency.includes("Warum Hermetia KI-Transparenz offenlegt") && aiTransparency.includes("EU AI Act")],
  ["AI transparency page separates calculation and wording", aiTransparency.includes("Berechnung, Konvergenz und Formulierung sind getrennt") && aiTransparency.includes("Erst danach kommt AI als Formulierungsebene hinzu")],
  ["AI transparency page explains data minimization", aiTransparency.includes("Welche Daten AI verarbeitet") && aiTransparency.includes("Prinzip der Datenminimierung")],
  ["AI transparency page states advice limits", aiTransparency.includes("Was AI ausdrücklich nicht tut") && aiTransparency.includes("keine Diagnose") && aiTransparency.includes("keine Rechtsberatung")],
  ["AI transparency page covers Companion and journaling", aiTransparency.includes("Companion, Journaling und persönliche Dialoge") && aiTransparency.includes("Journaltexte dürfen nicht automatisch grenzenlos genutzt werden")],
  ["AI transparency page covers fair conversion", aiTransparency.includes("Premium-Inhalte und faire Conversion") && aiTransparency.includes("Gute Conversion entsteht durch Klarheit")],
  ["AI transparency page covers copyright and launch indexing", aiTransparency.includes("Urheberrecht, Quellen und eigene Sprache") && aiTransparency.includes("noindex/nofollow")],
  ["AI transparency page is linked in footer", deHome.includes("/de/ki-transparenz/")],
  ["AI transparency page has localized fallback SEO", frAiTransparency.includes("<title>KI-Transparenz</title>") && frAiTransparency.includes("Version éditoriale en préparation")],
  ["Relationships page has consent framing", relationships.includes("Warum Einwilligung unverzichtbar ist") && relationships.includes("Wer andere heimlich auswerten will")],
  ["Relationships page has use questions", relationships.includes("Welche Beziehungsfragen Hermetia beantworten kann") && relationships.includes("Partnerschaft, Freundschaft, Familie")],
  ["Relationships page has resonance model", relationships.includes("Resonanz, Reibung und Entwicklungsfeld") && relationships.includes("Harmoniepunkte")],
  ["Relationships page has privacy block", relationships.includes("Datenschutz bei Profilen anderer Menschen") && relationships.includes("Einwilligung dokumentiert")],
  ["Relationships page has premium value", relationships.includes("Warum Beziehungsauswertungen Premium-Tiefe schaffen") && relationships.includes("Consent-Flows")],
  ["Relationships page has legal limits", relationships.includes("Was Hermetia nicht verspricht") && relationships.includes("keine Beziehungsgarantie")],
  ["Relationships page has graphics", relationships.includes("/graphics/convergence/abb6-beispiel-radar.svg") && relationships.includes("/graphics/convergence/abb9-deine-innere-spannung.svg")],
  ["Relationships page has expanded FAQ and CTAs", relationships.includes("FAQPage") && relationships.includes("Was ist der Unterschied zwischen Synastrie und Composite") && relationships.includes("utm_content=beziehungen-inline-1") && relationships.includes("utm_content=beziehungen-final")],
  ["Onboarding guide page exists", onboarding.includes("So kommst du von der Website") && onboarding.includes("Vier Schritte")],
  ["Onboarding guide page has FAQ schema", onboarding.includes("FAQPage")],
  ["Onboarding guide page has pre-start trust", onboarding.includes("Was vor dem App-Absprung klar sein sollte") && onboarding.includes("Kostenlos vor Kauf")],
  ["Onboarding guide page has app handoff", onboarding.includes("App-Handoff") && onboarding.includes("Website erklärt") && onboarding.includes("App berechnet")],
  ["Onboarding guide page has after-start path", onboarding.includes("Was du nach der ersten Seelenkarte tun kannst") && onboarding.includes("erst danach Premium-Modelle vergleichen")],
  ["Onboarding guide page has graphic", onboarding.includes("/graphics/convergence/abb4-pipeline-einordnung.svg")],
  ["Onboarding guide page has expanded FAQ and tracked CTAs", onboarding.includes("Werde ich direkt zu einem Kauf gedrängt") && onboarding.includes("Kann ich meine Daten später korrigieren") && onboarding.includes("utm_content=onboarding-guide-hero") && onboarding.includes("utm_content=onboarding-guide-final")],
  ["Onboarding guide page is linked in footer", deHome.includes("/de/profil-starten/")],
  ["Onboarding guide page has localized fallback SEO", frOnboarding.includes("<title>Commencer le profil | Hermetia</title>")],
  ["Daily impulses page has personal logic", dailyImpulses.includes("Wie ein persönlicher Tagesimpuls entsteht") && dailyImpulses.includes("stabile Profilthemen")],
  ["Daily impulses page has impulse structure", dailyImpulses.includes("Beispielhafte Struktur eines Impulses") && dailyImpulses.includes("eine Journaling-Frage")],
  ["Daily impulses page has rhythm and premium value", dailyImpulses.includes("Rhythmus statt Dauerbeschallung") && dailyImpulses.includes("Warum Tagesimpulse Premium-Wert schaffen")],
  ["Daily impulses page has legal limits", dailyImpulses.includes("Rechtliche Grenzen und sensible Sprache") && dailyImpulses.includes("keine sichere Zukunft behaupten")],
  ["Daily impulses page has graphics", dailyImpulses.includes("/graphics/convergence/abb8-deine-kernthemen.svg") && dailyImpulses.includes("/graphics/convergence/abb9-deine-innere-spannung.svg")],
  ["Daily impulses page has expanded FAQ and CTAs", dailyImpulses.includes("FAQPage") && dailyImpulses.includes("Was unterscheidet Hermetia-Tagesimpulse von Tageshoroskopen") && dailyImpulses.includes("utm_content=tagesimpulse-inline-1") && dailyImpulses.includes("utm_content=tagesimpulse-final")],
  ["Journaling page exists", journaling.includes("Journaling mit Hermetia") && journaling.includes("aus Impulsen wird Selbsterkenntnis")],
  ["Journaling page has FAQ schema", journaling.includes("FAQPage")],
  ["Journaling page has tracked CTAs", journaling.includes("utm_content=journaling-inline-1") && journaling.includes("utm_content=journaling-final")],
  ["Journaling page is linked in footer", deHome.includes("/de/journaling/")],
  ["Journaling page has localized fallback SEO", frJournaling.includes("<title>Journal | Hermetia</title>")],
  ["Profile book page exists", profileBook.includes("Das Vollprofil-Buch") && profileBook.includes("Premium-Tiefe")],
  ["Profile book page has FAQ schema", profileBook.includes("FAQPage")],
  ["Profile book page has chapter logic", profileBook.includes("Kapitel, die Nutzer wirklich erwarten") && profileBook.includes("Kapitelzusammenfassungen")],
  ["Profile book page has reading and export block", profileBook.includes("Leseerlebnis, Export und Wiederlesen") && profileBook.includes("buchartiger Lesemodus")],
  ["Profile book page has fictional example rules", profileBook.includes("Beispielkapitel nur fiktiv und transparent") && profileBook.includes("keine echten Nutzerprofile ohne Einwilligung")],
  ["Profile book page connects ecosystem", profileBook.includes("Wie das Buch mit Journaling und Companion zusammenhängt") && profileBook.includes("Tagesimpulse halten Themen lebendig")],
  ["Profile book page has premium fairness", profileBook.includes("Bezahlte Tiefe ohne Druck") && profileBook.includes("Der Kaufgrund ist Tiefe, nicht Druck")],
  ["Profile book page has legal editorial guardrails", profileBook.includes("Rechtliche und redaktionelle Leitplanken") && profileBook.includes("mehr Reflexion, nicht mehr Wahrheit")],
  ["Profile book page has graphics", profileBook.includes("/graphics/convergence/abb5-algorithmus-funnel.svg") && profileBook.includes("/graphics/convergence/abb10-verankert-und-fein.svg")],
  ["Profile book page has expanded FAQ and tracked CTAs", profileBook.includes("Welche Kapitel sollte ein Vollprofil enthalten") && profileBook.includes("Warum ist das Vollprofil Premium") && profileBook.includes("utm_content=vollprofil-buch-inline-1") && profileBook.includes("utm_content=vollprofil-buch-final")],
  ["Profile book page is linked in footer", deHome.includes("/de/vollprofil-buch/")],
  ["Profile book page has localized fallback SEO", frProfileBook.includes("<title>Livre de profil complet | Hermetia</title>")],
  ["Companion page exists", companion.includes("Hermetia Companion") && companion.includes("ruhiger AI-Begleiter")],
  ["Companion page has FAQ schema", companion.includes("FAQPage")],
  ["Companion page has answer logic", companion.includes("Antwortlogik: Quelle, Kontext, Frage") && companion.includes("Welche Profilquelle ist relevant")],
  ["Companion page has AI transparency", companion.includes("Transparenz bei AI-Nutzung") && companion.includes("Die AI schreibt keine freien Wahrheiten")],
  ["Companion page has data minimization", companion.includes("Datenschutz und Datenminimierung im Gespräch") && companion.includes("nur freigegebene Journalnotizen")],
  ["Companion page has example questions", companion.includes("Beispielhafte Fragen an den Companion") && companion.includes("Warum taucht mein Kernthema")],
  ["Companion page has safety limits", companion.includes("Grenzen bei Gesundheit, Beziehung und Entscheidung") && companion.includes("wann sie nicht antworten sollte")],
  ["Companion page has premium value", companion.includes("Warum der Companion Premium-Wert erzeugt") && companion.includes("längeren Gesprächsverläufen")],
  ["Companion page has graphics", companion.includes("/graphics/convergence/abb5-algorithmus-funnel.svg") && companion.includes("/graphics/convergence/abb7-crosswalk-sankey.svg")],
  ["Companion page has expanded FAQ and tracked CTAs", companion.includes("Woher weiß der Companion") && companion.includes("Nutzt der Companion meine Journaltexte automatisch") && companion.includes("utm_content=companion-inline-1") && companion.includes("utm_content=companion-final")],
  ["Companion page is linked in footer", deHome.includes("/de/companion/")],
  ["Companion page has localized fallback SEO", frCompanion.includes("<title>Companion | Hermetia</title>")],
  ["Profile refinement page exists", profileRefinement.includes("Profil verfeinern") && profileRefinement.includes("Export und Löschung")],
  ["Profile refinement page has FAQ schema", profileRefinement.includes("FAQPage")],
  ["Profile refinement page has data quality", profileRefinement.includes("Datenqualität sichtbar machen") && profileRefinement.includes("Was ist stabil")],
  ["Profile refinement page has safety levels", profileRefinement.includes("Sicherheitsstufen statt Absolutheit") && profileRefinement.includes("hoch, wenn Eingaben vollständig")],
  ["Profile refinement page has export trust", profileRefinement.includes("Export als Vertrauenssignal") && profileRefinement.includes("Datenportabilität")],
  ["Profile refinement page has consent and deletion", profileRefinement.includes("Löschung und Einwilligung nicht verstecken") && profileRefinement.includes("zweite Person zu deuten")],
  ["Profile refinement page has AI usage", profileRefinement.includes("AI-Nutzung und Profilverfeinerung") && profileRefinement.includes("nur notwendige Informationen")],
  ["Profile refinement page has premium value", profileRefinement.includes("Premium-Wert durch bessere Genauigkeit") && profileRefinement.includes("mehr Kontext über Zeit")],
  ["Profile refinement page has graphics", profileRefinement.includes("/graphics/convergence/abb4-pipeline-einordnung.svg") && profileRefinement.includes("/graphics/convergence/abb2-konvergenz-vs-staerke.svg")],
  ["Profile refinement page has expanded FAQ and tracked CTAs", profileRefinement.includes("Was bedeutet Datenqualität in Hermetia") && profileRefinement.includes("Werden Aussagen nach Sicherheit gekennzeichnet") && profileRefinement.includes("utm_content=profil-verfeinern-inline-1") && profileRefinement.includes("utm_content=profil-verfeinern-final")],
  ["Profile refinement page is linked in footer", deHome.includes("/de/profil-verfeinern/")],
  ["Profile refinement page has localized fallback SEO", frProfileRefinement.includes("<title>Affiner le profil | Hermetia</title>")],
  ["Header CTAs are source tagged", deHome.includes("utm_content=header-start") && deHome.includes("utm_content=header-login")],
  ["Home CTAs are source tagged", deHome.includes("utm_content=home-hero") && deHome.includes("utm_content=home-final")],
  ["Pricing CTAs are source tagged", pricing.includes("utm_content=pricing-tier-1") && pricing.includes("utm_content=pricing-tier-2") && pricing.includes("utm_content=pricing-tier-3") && pricing.includes("utm_content=pricing-final")],
  ["Pricing page has decision helper", pricing.includes("Entscheidungshilfe") && pricing.includes("Welches Modell passt zu welchem Moment")],
  ["Pricing page has tier comparison", pricing.includes("Was öffnet sich in welchem Tarif") && pricing.includes("Begleitung") && pricing.includes("Tiefe")],
  ["Pricing page explains value logic", pricing.includes("Warum 49 Euro pro Jahr plausibel sind") && pricing.includes("Wann kostenlos reicht")],
  ["Pricing page has fairness limits", pricing.includes("Fairness und Grenzen") && pricing.includes("Ein guter Kaufgrund ist Klarheit")],
  ["Pricing page has expanded tracked CTAs", pricing.includes("utm_content=pricing-decision") && pricing.includes("utm_content=pricing-comparison") && pricing.includes("utm_content=pricing-fairness")],
  ["Services page has offer blocks", services.includes("Leistungsbereiche") && services.includes("Vom ersten Profil bis zur bezahlten Tiefe")],
  ["Services page has depth table", services.includes("Wertlogik") && services.includes("Welche Tiefe entsteht in welchem Schritt")],
  ["Services page has legal limits block", services.includes("Rechtliche und redaktionelle Leitplanken") && services.includes("keine übernommenen proprietären Deutungstexte")],
  ["Services page has FAQ schema", services.includes("FAQPage") && services.includes("Häufige Fragen zu Hermetia Leistungen")],
  ["Services page has expanded tracked CTAs", services.includes("utm_content=services-hero") && services.includes("utm_content=services-depth-table") && services.includes("utm_content=services-legal-cta")],
  ["Hub CTAs are source tagged", services.includes("utm_content=services-final") && systemsHub.includes("utm_content=systems-final") && method.includes("utm_content=method-final") && faqPage.includes("utm_content=faq-final")],
  ["Method page has short answer block", method.includes("Kurzantwort") && method.includes("Wie wird aus Daten ein persönliches Profil")],
  ["Method page has detail blocks", method.includes("Methodik im Detail") && method.includes("Datenbasis") && method.includes("Von Signal zu verständlicher Sprache")],
  ["Method page has graphics", method.includes("/graphics/convergence/abb1-familien-modell.svg") && method.includes("/graphics/convergence/abb5-algorithmus-funnel.svg")],
  ["Method page has quality gates", method.includes("Qualitäts-Gates") && method.includes("Eigene Sprache statt kopierter geschützter Systemtexte")],
  ["Method page has FAQ schema", method.includes("FAQPage") && method.includes("Häufige Fragen zur Hermetia Methodik")],
  ["Method page has expanded tracked CTAs", method.includes("utm_content=method-hero") && method.includes("utm_content=method-graphics") && method.includes("utm_content=method-quality")],
  ["Knowledge hub has search intents", knowledgeHub.includes("Suchfragen") && knowledgeHub.includes("Welche Fragen beantwortet dieser Bereich")],
  ["Knowledge hub has topic clusters", knowledgeHub.includes("Themencluster") && knowledgeHub.includes("Seelenkarte und Profilstart") && knowledgeHub.includes("AI, Datenschutz und rechtliche Grenzen")],
  ["Knowledge hub has article list heading", knowledgeHub.includes("Alle Ratgeber") && knowledgeHub.includes("Grundlagen, Grenzen und nächste Schritte")],
  ["Knowledge hub has structured data", knowledgeHub.includes("Article") && knowledgeHub.includes("BreadcrumbList")],
  ["Knowledge hub has tracked CTAs", knowledgeHub.includes("utm_content=knowledge-hero") && knowledgeHub.includes("utm_content=knowledge-final")],
  ["FAQ page has answer categories", faqPage.includes("Antwortbereiche") && faqPage.includes("Die wichtigsten Fragen vor dem ersten Profil")],
  ["FAQ page has expanded questions", faqPage.includes("Was ist Hermetia in einem Satz") && faqPage.includes("Was bedeutet Konvergenz in Hermetia")],
  ["FAQ page has legal and IP answers", faqPage.includes("Verwendet Hermetia fremde geschützte Deutungstexte") && faqPage.includes("keine proprietären Systemtexte")],
  ["FAQ page has conversion bridge", faqPage.includes("Die beste Antwort entsteht in deinem eigenen Profil")],
  ["FAQ page has expanded tracked CTAs", faqPage.includes("utm_content=faq-hero") && faqPage.includes("utm_content=faq-final")],
  ["Language CTAs are source tagged", languages.includes("utm_content=language-status-inline") && languages.includes("utm_content=language-status")],
];

for (const [label, ok] of checks) {
  if (!ok) fail(`Content check failed: ${label}.`);
}

if (process.exitCode) process.exit(process.exitCode);

console.log("Content check passed: counts, language notices, longform resources and convergence graphics verified.");
