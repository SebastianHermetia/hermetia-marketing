// Offizielle EU-Sprachen. Alle Routen liefern versionierte redaktionelle
// Sprachfassungen aus, damit keine Sprachroute auf DE/EN-Longform zurückfällt.
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
export const editorialLocales = locales;
export const uiLocalizedLocales = locales;

export function hasEditorialTranslation(locale: Locale): boolean {
  return (editorialLocales as readonly string[]).includes(locale);
}

export function hasUiLocalization(locale: Locale): boolean {
  return (uiLocalizedLocales as readonly string[]).includes(locale);
}

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
// Zielmarke Astrakey: Marketing läuft auf astrakey.me. Per ENV überschreibbar
// (Preview/Staging): NEXT_PUBLIC_SITE_URL setzen. Beim Domain-Cutover muss die
// Domain astrakey.me im Vercel-Projekt hinterlegt sein.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://astrakey.me"
).replace(/\/$/, "");

// URL zur App (Onboarding + Login leben in der Astrakey-App).
export const appUrl = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.astrakey.me"
).replace(/\/$/, "");
