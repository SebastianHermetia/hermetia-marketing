// Zentrale Brand-Konfiguration — eine Quelle der Wahrheit für den Markennamen,
// Domains und Trust-/SEO-Felder. Ein künftiger Marken- oder Domainwechsel passiert
// hier, nicht verstreut über die Codebasis.
//
// Domains sind per ENV überschreibbar (Vercel), damit Preview/Staging/Prod ohne
// Code-Änderung umgezogen werden können.

import { siteUrl, appUrl } from "@/i18n/config";

export const brand = {
  /** Sichtbarer Markenname. Eigenname — wird in KEINER Sprache übersetzt. */
  name: "Astrakey",
  /** Frühere Marke. Nur für bewusste Legacy-Hinweise / Redirects. */
  legacyName: "Hermetia",
  /** Marketing-Domain (canonical/hreflang/Sitemap). */
  marketingUrl: siteUrl,
  /** App-Domain (Onboarding + Login). */
  appUrl,
  /** Support-/Kontaktadresse. TODO: finale Anbieter-E-Mail bestätigen. */
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "hallo@astrakey.me",
  /** Anzeigeslogan für Organization-Schema. */
  slogan: "Wie oben, so unten",
  /** Default-OG-/Social-Bild (relativ zur Marketing-Domain). */
  socialImagePath: "/og/default.jpg",
} as const;

export type Brand = typeof brand;
