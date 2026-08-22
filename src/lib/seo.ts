import type { Metadata } from "next";
import { indexedLocales, isIndexedLocale, siteUrl, type Locale } from "@/i18n/config";
import { localizedRouteCopy } from "@/i18n/localized-content";
import { brand } from "@/lib/brand";

// Indexierte Sprachen bekommen den echten, seitenspezifischen Titel. Sie durchlaufen
// als deutscher Quelltext die Post-Build-Übersetzung (`apply-i18n-html-translations.mjs`
// übersetzt <title> als Textknoten und `content="…"` bei description/og/twitter) und
// werden dadurch pro Seite unterschiedlich — anders als der generische Fallback.
// Nicht indexierte Sprachen behalten den Fallback: sie stehen ohnehin auf `noindex`,
// und ~13.000 zusätzliche Cache-Strings hätten dort keinen Gegenwert.
function localizedFallbackMetadata(locale: Locale, path: string, title: string, description: string) {
  if (isIndexedLocale(locale) || path === "/beta-zugang") return { title, description };
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

  // hreflang nur zwischen indexierbaren Fassungen — Alternates, die auf `noindex`
  // zeigen, sind für Google ein widersprüchliches Signal.
  const languages: Record<string, string> = {};
  for (const l of indexedLocales) languages[l] = `${siteUrl}/${l}${clean}/`;
  languages["x-default"] = `${siteUrl}/de${clean}/`;

  const ogImage = `${siteUrl}/og/default.jpg`;
  const indexable = isIndexedLocale(locale);

  return {
    title: meta.title,
    description: meta.description,
    robots: {
      index: indexable,
      follow: true,
      googleBot: {
        index: indexable,
        follow: true,
      },
    },
    alternates: { canonical, languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: brand.name,
      locale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: brand.name }],
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description, images: [ogImage] },
  };
}

