import type { MetadataRoute } from "next";
import { indexedLocales, siteUrl } from "@/i18n/config";
import { paths } from "@/lib/links";
import { systemSlugs } from "@/content/systems";
import { articles, comparisons, glossaryTerms } from "@/content/marketing";
import lastmod from "../../content/lastmod.json";

export const dynamic = "force-static";

// `changefreq` und `priority` sind bewusst nicht mehr enthalten: Google wertet beide
// nach eigener Aussage nicht aus. `lastmod` dagegen schon — es kommt aus
// `content/lastmod.json` (erzeugt von `scripts/gen-lastmod.mjs` aus der Git-Historie
// der jeweiligen Content-Quelldatei).
//
// Enthalten sind nur die indexierten Sprachen. Die übrigen Locales tragen
// `noindex, follow` und gehören damit nicht in die Sitemap.
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(paths);
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of indexedLocales) {
    for (const route of routes) {
      const clean = route === "/" ? "" : route;
      entries.push({
        url: `${siteUrl}/${locale}${clean}/`,
        lastModified: lastmod.pages,
      });
    }
    for (const slug of systemSlugs) {
      entries.push({
        url: `${siteUrl}/${locale}${paths.systeme}/${slug}/`,
        lastModified: lastmod.systems,
      });
    }
    for (const term of glossaryTerms) {
      entries.push({
        url: `${siteUrl}/${locale}${paths.glossar}/${term.slug}/`,
        lastModified: lastmod.glossary,
      });
    }
    for (const article of articles) {
      entries.push({
        url: `${siteUrl}/${locale}${paths.wissen}/${article.slug}/`,
        lastModified: lastmod.articles,
      });
    }
    for (const comparison of comparisons) {
      entries.push({
        url: `${siteUrl}/${locale}${paths.vergleiche}/${comparison.slug}/`,
        lastModified: lastmod.comparisons,
      });
    }
  }
  return entries;
}
