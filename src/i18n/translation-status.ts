import { hasEditorialTranslation, hasUiLocalization, localeNames, locales, type Locale } from "./config";

export type TranslationStatus = "editorial" | "ui" | "fallback";

export type LocaleStatus = {
  locale: Locale;
  name: string;
  status: TranslationStatus;
  label: string;
  description: string;
};

export type TranslationBacklogItem = {
  key: string;
  label: string;
  priority: "P0" | "P1" | "P2";
  pages: number;
  wordsPerPage: string;
  status: string;
};

export type TranslationQaGate = {
  id: string;
  title: string;
  appliesTo: string;
  requirement: string;
};

export const translationQaGates: TranslationQaGate[] = [
  {
    id: "terminology",
    title: "Terminologie und Systembegriffe",
    appliesTo: "alle Longform-Seiten",
    requirement:
      "Hermetia-Begriffe wie Seelenkarte, Konvergenz, Theme-Signal, Art. 9 und AI-Deutung müssen pro Sprache konsistent verwendet werden.",
  },
  {
    id: "legal",
    title: "Rechtliche Sinngleichheit",
    appliesTo: "Recht, Datenschutz, Preise, Beziehungen",
    requirement:
      "Disclaimer, Einwilligung, Widerruf, Verbraucherinformationen und Datenschutzgrenzen dürfen in der Übersetzung nicht abgeschwächt werden.",
  },
  {
    id: "safety",
    title: "Keine Diagnose, Therapie oder Vorhersage",
    appliesTo: "Systeme, Glossar, Wissen, Tagesimpulse",
    requirement:
      "Jede Sprache muss Hermetia als Selbstreflexion rahmen und medizinische, therapeutische, rechtliche oder finanzielle Beratung ausschließen.",
  },
  {
    id: "conversion",
    title: "CTA- und Paid-Modell-Klarheit",
    appliesTo: "Start, Leistungen, Preise, Pillar-Seiten",
    requirement:
      "Kostenloser Einstieg, bezahlte Tiefe, Kündigung und App-Absprung müssen klar, nicht manipulativ und lokal verständlich bleiben.",
  },
  {
    id: "seo-aeo",
    title: "SEO/AEO-Struktur",
    appliesTo: "Systeme, Glossar, Wissen, Vergleiche",
    requirement:
      "Titel, Meta-Description, Kurzantwort, FAQ und strukturierte Daten müssen die lokale Suchintention bedienen.",
  },
  {
    id: "native-review",
    title: "Native Review oder qualifizierte Redaktion",
    appliesTo: "alle redaktionell freizugebenden Sprachfassungen",
    requirement:
      "Eine Sprachfassung wird erst als redaktionell freigegeben markiert, wenn Terminologie, Tonalität und rechtliche Aussagen geprüft sind.",
  },
];

export const translationBacklog: TranslationBacklogItem[] = [
  {
    key: "legal",
    label: "Rechtstexte, Datenschutz, AI-Transparenz",
    priority: "P0",
    pages: 5,
    wordsPerPage: "1.200-2.500",
    status: "Externe Rechts-/Terminologieprüfung erforderlich",
  },
  {
    key: "core",
    label: "Startseite, Leistungen, Preise, Methode",
    priority: "P0",
    pages: 4,
    wordsPerPage: "1.500-3.500",
    status: "UI lokalisiert, Longform-Redaktion offen",
  },
  {
    key: "pillars",
    label: "Konvergenz, Seelenkarte, Tagesimpulse, Beziehungen",
    priority: "P1",
    pages: 4,
    wordsPerPage: "2.000-4.000",
    status: "Mastercontent vorhanden, Übersetzung und lokale QA offen",
  },
  {
    key: "systems",
    label: "31 Systemdetailseiten",
    priority: "P1",
    pages: 31,
    wordsPerPage: "1.200-2.000",
    status: "DE/EN-Struktur vorhanden, EU-Longform offen",
  },
  {
    key: "resources",
    label: "Glossar, Wissen und Vergleiche",
    priority: "P2",
    pages: 83,
    wordsPerPage: "700-5.000",
    status: "SEO-/AEO-Struktur vorhanden, lokalisierte Redaktion offen",
  },
];

export function getLocaleStatuses(): LocaleStatus[] {
  return locales.map((locale) => {
    const editorial = hasEditorialTranslation(locale);
    const ui = hasUiLocalization(locale);
    return {
      locale,
      name: localeNames[locale],
      status: editorial ? "editorial" : ui ? "ui" : "fallback",
      label: editorial
        ? "Redaktionell freigegeben"
        : ui
          ? "UI lokalisiert, Longform in Vorbereitung"
          : "Technisch live, redaktionell in Vorbereitung",
      description: editorial
        ? "Diese Sprachfassung ist redaktionell gepflegt und ohne Fallback-Hinweis live."
        : ui
          ? "Navigation, CTAs und globale UI-Texte sind lokalisiert. Lange Inhalte bleiben bis zur finalen Redaktion sichtbar als Mastercontent gekennzeichnet."
          : "Diese Sprachroute ist technisch live. Bis zur finalen Übersetzung zeigt sie teilweise deutschen Mastercontent mit sichtbarem Hinweis.",
    };
  });
}

export function translationSummary() {
  const statuses = getLocaleStatuses();
  return {
    total: statuses.length,
    editorial: statuses.filter((entry) => entry.status === "editorial").length,
    ui: statuses.filter((entry) => entry.status === "ui").length,
    fallback: statuses.filter((entry) => entry.status === "fallback").length,
  };
}

export function translationBacklogSummary() {
  return {
    pageTypes: translationBacklog.length,
    pages: translationBacklog.reduce((sum, item) => sum + item.pages, 0),
    p0: translationBacklog.filter((item) => item.priority === "P0").length,
    p1: translationBacklog.filter((item) => item.priority === "P1").length,
    p2: translationBacklog.filter((item) => item.priority === "P2").length,
  };
}

export function translationQaSummary() {
  return {
    gates: translationQaGates.length,
    legalCritical: translationQaGates.filter((gate) => gate.id === "legal" || gate.id === "safety").length,
  };
}
