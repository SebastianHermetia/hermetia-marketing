import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { JsonLd, articleSchema } from "@/components/JsonLd";
import { articles } from "@/content/marketing";

export function generateStaticParams() {
  return locales.flatMap((locale) => articles.map((article) => ({ locale, slug: article.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return buildMetadata({ locale: locale as Locale, path: `${paths.wissen}/${slug}`, title: article.seoTitle, description: article.description });
}

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <>
      <JsonLd data={articleSchema({ headline: article.seoTitle, description: article.description, locale, url: `${siteUrl}/${locale}${paths.wissen}/${article.slug}/`, about: article.title, image: `${siteUrl}/images/hermetia/alchemical-listening-room.png` })} />
      <Header locale={locale} current="wissen" />
      <article className="py-16">
        <div className="wrap max-w-[820px]">
          <span className="kicker">Wissen</span>
          <h1 className="mt-3 text-[clamp(32px,5vw,46px)]">{article.title}</h1>
          <p className="lead mt-5">{article.description}</p>
          <p className="muted mt-10 text-[17px] leading-[1.9]">{article.body}</p>
          <div className="mt-12">
            <AppCta locale={locale} title="Mach aus Wissen deinen eigenen Aha-Moment." text="Starte dein Hermetia-Profil und verbinde die Theorie mit deiner persönlichen Seelenkarte." source={`article-${article.slug}`} />
          </div>
        </div>
      </article>
      <Footer locale={locale} />
    </>
  );
}
