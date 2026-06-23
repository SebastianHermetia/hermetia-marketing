import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { getPillarPage } from "@/content/marketing";
import { MarketingContentPage } from "@/components/MarketingContentPage";
import { JsonLd, articleSchema, faqSchema } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const page = getPillarPage("journaling", locale as Locale)!;
  return buildMetadata({ locale: locale as Locale, path: paths.journaling, title: page.seoTitle, description: page.seoDescription });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const page = getPillarPage("journaling", locale)!;
  return (
    <>
      <JsonLd data={[faqSchema(page.faq), articleSchema({ headline: page.seoTitle, description: page.seoDescription, locale, url: `${siteUrl}/${locale}${paths.journaling}/`, about: "Astrakey Journaling", image: `${siteUrl}${page.image}` })]} />
      <MarketingContentPage locale={locale} page={page} />
    </>
  );
}
