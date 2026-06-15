import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/i18n/config";
import { paths } from "@/lib/links";
import { systemSlugs } from "@/content/systems";
import { articles, comparisons, glossaryTerms } from "@/content/marketing";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(paths);
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const route of routes) {
      const clean = route === "/" ? "" : route;
      entries.push({
        url: `${siteUrl}/${locale}${clean}/`,
        changeFrequency: "weekly",
        priority: route === "/" ? 1 : 0.7,
      });
    }
    for (const slug of systemSlugs) {
      entries.push({
        url: `${siteUrl}/${locale}${paths.systeme}/${slug}/`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
    for (const term of glossaryTerms) {
      entries.push({
        url: `${siteUrl}/${locale}${paths.glossar}/${term.slug}/`,
        changeFrequency: "monthly",
        priority: 0.55,
      });
    }
    for (const article of articles) {
      entries.push({
        url: `${siteUrl}/${locale}${paths.wissen}/${article.slug}/`,
        changeFrequency: "monthly",
        priority: 0.55,
      });
    }
    for (const comparison of comparisons) {
      entries.push({
        url: `${siteUrl}/${locale}${paths.vergleiche}/${comparison.slug}/`,
        changeFrequency: "monthly",
        priority: 0.55,
      });
    }
  }
  return entries;
}
