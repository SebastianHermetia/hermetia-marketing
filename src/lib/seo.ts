import type { Metadata } from "next";
import { locales, siteUrl, type Locale } from "@/i18n/config";

// Baut konsistente Metadaten inkl. canonical + hreflang-Alternates für jede Seite.
// path = Pfad OHNE Locale, z. B. "/preise" oder "" für die Startseite.
export function buildMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  const canonical = `${siteUrl}/${locale}${clean}/`;

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${siteUrl}/${l}${clean}/`;
  languages["x-default"] = `${siteUrl}/de${clean}/`;

  const ogImage = `${siteUrl}/og/default.jpg`;

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Hermetia",
      locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Hermetia" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}
