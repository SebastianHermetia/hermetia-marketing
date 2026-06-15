import { appUrl, type Locale } from "@/i18n/config";

// Interner Link mit Locale-Prefix.
export function localePath(locale: Locale, path = ""): string {
  const clean = path === "/" ? "" : path.replace(/^\//, "");
  return `/${locale}/${clean}`.replace(/\/+$/, "/").replace(/\/$/, "") + "/";
}

// Onboarding (Profil starten) und Login leben in der bestehenden Hermetia-App.
// Die App-Routen sind NICHT locale-prefixed (`/onboarding`, `/login`); die
// Profilsprache wählt der Nutzer im ersten Onboarding-Schritt. `?lang=` ist ein
// unschädlicher Sprach-Hinweis (App darf ihn künftig zur UI-Vorauswahl nutzen).
export function startUrl(locale: Locale): string {
  return `${appUrl}/onboarding?lang=${locale}`;
}
export function loginUrl(locale: Locale): string {
  return `${appUrl}/login?lang=${locale}`;
}

// Pfad-Konstanten (ohne Locale) – eine Quelle der Wahrheit für Nav + Sitemap.
export const paths = {
  home: "/",
  leistungen: "/leistungen",
  systeme: "/systeme",
  methodik: "/so-entsteht-dein-profil",
  konvergenz: "/konvergenz-engine",
  seelenkarte: "/seelenkarte",
  tagesimpulse: "/tagesimpulse",
  beziehungen: "/beziehungen",
  glossar: "/glossar",
  wissen: "/wissen",
  vergleiche: "/vergleiche",
  sprachen: "/sprachen",
  preise: "/preise",
  faq: "/faq",
  datenschutz: "/datenschutz",
  ki: "/ki-transparenz",
  agb: "/agb",
  widerruf: "/widerruf",
  impressum: "/impressum",
} as const;
