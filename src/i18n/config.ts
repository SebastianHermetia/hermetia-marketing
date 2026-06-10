// Aktuell ausgelieferte Sprachen. Architektur ist auf alle EU-Sprachen vorbereitet:
// neue Sprache = Locale hier ergänzen + messages/<locale>.json anlegen.
export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const localeNames: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
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
