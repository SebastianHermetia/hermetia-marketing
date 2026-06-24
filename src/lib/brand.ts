// Zentrale Brand-Konfiguration: eine Quelle der Wahrheit für Markennamen,
// Domains sowie Trust- und SEO-Felder.

import { siteUrl, appUrl } from "@/i18n/config";

export const brand = {
  name: "Astrakey",
  legacyName: "Hermetia",
  marketingUrl: siteUrl,
  appUrl,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "hallo@astrakey.me",
  slogan: "Ein einzelnes System kann dich berühren. Astrakey zeigt, was wirklich wiederkehrt.",
  socialImagePath: "/og/default.jpg",
  positioning:
    "Astrakey verbindet viele spirituelle, symbolische und psychologische Systeme zu einem erklärbaren persönlichen Profil und zeigt, welche Themen über mehrere unabhängige Systemfamilien hinweg wirklich wiederkehren.",
  primaryCta: "Profil kostenlos starten",
  primaryCtaRoute: "/de/beta-zugang/",
  trustlines: {
    privacy: "Datenschutz bewusst gestaltet",
    noSale: "kein Verkauf deiner Daten",
    processors: "Dienstleister nur zweckgebunden",
    control: "Datenkontrolle mit Export und Löschung",
    ai: "AI formuliert, sie urteilt nicht über dich",
    noDiagnosis: "Keine Diagnose, ein Reflexionsangebot",
  },
  standardDisclaimer: "Astrakey ist kein medizinischer, therapeutischer, rechtlicher oder finanzieller Rat.",
  footerLinks: ["Impressum", "Datenschutz", "AGB", "Widerruf", "AI-Transparenz", "Freigaben"],
} as const;

export type Brand = typeof brand;

