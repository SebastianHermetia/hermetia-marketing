// Offizielle EU-Sprachen. Nicht vollständig redaktionell übersetzte Locales
// fallen im Dictionary-Layer auf den deutschen Mastercontent zurück, bleiben
// aber technisch mit eigener URL, hreflang und Sprachwahl erreichbar.
export const locales = [
  "de",
  "en",
  "fr",
  "es",
  "it",
  "nl",
  "pl",
  "pt",
  "bg",
  "hr",
  "cs",
  "da",
  "et",
  "fi",
  "el",
  "hu",
  "ga",
  "lv",
  "lt",
  "mt",
  "ro",
  "sk",
  "sl",
  "sv",
] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  nl: "Nederlands",
  pl: "Polski",
  pt: "Português",
  bg: "Български",
  hr: "Hrvatski",
  cs: "Čeština",
  da: "Dansk",
  et: "Eesti",
  fi: "Suomi",
  el: "Ελληνικά",
  hu: "Magyar",
  ga: "Gaeilge",
  lv: "Latviešu",
  lt: "Lietuvių",
  mt: "Malti",
  ro: "Română",
  sk: "Slovenčina",
  sl: "Slovenščina",
  sv: "Svenska",
};

// Basis-URL für canonical / hreflang / Sitemap.
// Vorerst hermetia.digital-expert.de — vor Launch per ENV auf eigene Domain umziehbar,
// ohne Code-Änderung: NEXT_PUBLIC_SITE_URL setzen.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hermetia.digital-expert.de"
).replace(/\/$/, "");

// URL zur App (Onboarding + Login leben in der bestehenden Hermetia-App).
export const appUrl = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://hermetia.digital-expert.de"
).replace(/\/$/, "");
