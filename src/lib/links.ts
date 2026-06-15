import { appUrl, type Locale } from "@/i18n/config";

type MarketingLinkOptions = {
  source?: string;
  medium?: "cta" | "nav" | "footer";
  campaign?: string;
};

// Interner Link mit Locale-Prefix.
export function localePath(locale: Locale, path = ""): string {
  const clean = path === "/" ? "" : path.replace(/^\//, "");
  return `/${locale}/${clean}`.replace(/\/+$/, "/").replace(/\/$/, "") + "/";
}

// Onboarding (Profil starten) und Login leben in der bestehenden Hermetia-App.
// Die App-Routen sind NICHT locale-prefixed (`/onboarding`, `/login`); die
// Profilsprache wählt der Nutzer im ersten Onboarding-Schritt. `?lang=` ist ein
// unschädlicher Sprach-Hinweis (App darf ihn künftig zur UI-Vorauswahl nutzen).
function withMarketingParams(url: string, options: MarketingLinkOptions = {}): string {
  const tracked = new URL(url);
  tracked.searchParams.set("utm_source", "marketing");
  tracked.searchParams.set("utm_medium", options.medium ?? "cta");
  tracked.searchParams.set("utm_campaign", options.campaign ?? "profile_start");
  if (options.source) {
    tracked.searchParams.set("utm_content", options.source);
    tracked.searchParams.set("source", options.source);
  }
  return tracked.toString();
}

export function startUrl(locale: Locale, options: MarketingLinkOptions = {}): string {
  return withMarketingParams(`${appUrl}/onboarding?lang=${locale}`, options);
}
export function loginUrl(locale: Locale, options: MarketingLinkOptions = {}): string {
  return withMarketingParams(`${appUrl}/login?lang=${locale}`, {
    campaign: "returning_user",
    ...options,
  });
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
  anwendungsfaelle: "/anwendungsfaelle",
  about: "/ueber-hermetia",
  sprachen: "/sprachen",
  freigaben: "/freigaben",
  preise: "/preise",
  faq: "/faq",
  datenschutz: "/datenschutz",
  ki: "/ki-transparenz",
  agb: "/agb",
  widerruf: "/widerruf",
  impressum: "/impressum",
} as const;
