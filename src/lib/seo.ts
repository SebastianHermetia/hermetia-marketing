import type { Metadata } from "next";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { localizedRouteCopy } from "@/i18n/localized-content";

function localizedFallbackMetadata(locale: Locale, path: string, title: string, description: string) {
  if (locale === "de" || locale === "en") return { title, description };
  const copy = localizedRouteCopy(locale, path);
  return { title: copy.seoTitle, description: copy.seoDescription };
}

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
  const meta = localizedFallbackMetadata(locale, path, title, description);

  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${siteUrl}/${l}${clean}/`;
  languages["x-default"] = `${siteUrl}/de${clean}/`;

  const ogImage = `${siteUrl}/og/default.jpg`;

  return {
    title: meta.title,
    description: meta.description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    alternates: { canonical, languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: "Hermetia",
      locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "Hermetia" }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [ogImage] },
  };
}
