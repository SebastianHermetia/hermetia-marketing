import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { articles, getPillarPage } from "@/content/marketing";
import { MarketingContentPage } from "@/components/MarketingContentPage";
import { HubIndex, hubItemListSchema } from "@/components/HubIndex";
import { JsonLd, articleSchema, faqSchema } from "@/components/JsonLd";
import { localizeKnowledgeItem } from "@/i18n/localized-content";

const pageKey = "wissen";
const routePath = paths.wissen;
const indexHeading = "Alle Artikel";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const page = getPillarPage(pageKey, locale as Locale)!;
  return buildMetadata({ locale: locale as Locale, path: routePath, title: page.seoTitle, description: page.seoDescription });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const page = getPillarPage(pageKey, locale)!;
  const items = articles.map((article) => localizeKnowledgeItem(article, locale, "article"));
  return (
    <>
      <JsonLd
        data={[
          faqSchema(page.faq),
          articleSchema({ headline: page.seoTitle, description: page.seoDescription, locale, url: `${siteUrl}/${locale}${routePath}/`, about: page.title, image: `${siteUrl}${page.image}` }),
          hubItemListSchema({ name: indexHeading, siteUrl, locale, basePath: routePath, items }),
        ]}
      />
      <MarketingContentPage
        locale={locale}
        page={page}
        index={<HubIndex locale={locale} heading={indexHeading} basePath={routePath} items={items} />}
      />
    </>
  );
}
