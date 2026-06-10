import { appUrl, type Locale } from "@/i18n/config";

// Interner Link mit Locale-Prefix.
export function localePath(locale: Locale, path = ""): string {
  const clean = path === "/" ? "" : path.replace(/^\//, "");
  return `/${locale}/${clean}`.replace(/\/+$/, "/").replace(/\/$/, "") + "/";
}

// Onboarding (Profil starten) und Login leben in der bestehenden Hermetia-App.
export function startUrl(locale: Locale): string {
  return `${appUrl}/${locale}/start`;
}
export function loginUrl(locale: Locale): string {
  return `${appUrl}/${locale}/login`;
}

// Pfad-Konstanten (ohne Locale) – eine Quelle der Wahrheit für Nav + Sitemap.
export const paths = {
  home: "/",
  leistungen: "/leistungen",
  systeme: "/systeme",
  methodik: "/so-entsteht-dein-profil",
  preise: "/preise",
  faq: "/faq",
  datenschutz: "/datenschutz",
  ki: "/ki-transparenz",
  agb: "/agb",
  widerruf: "/widerruf",
  impressum: "/impressum",
} as const;
