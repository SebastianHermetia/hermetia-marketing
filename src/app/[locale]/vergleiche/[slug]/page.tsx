import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { JsonLd, articleSchema } from "@/components/JsonLd";
import { comparisons } from "@/content/marketing";

export function generateStaticParams() {
  return locales.flatMap((locale) => comparisons.map((comparison) => ({ locale, slug: comparison.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) return {};
  return buildMetadata({ locale: locale as Locale, path: `${paths.vergleiche}/${slug}`, title: comparison.seoTitle, description: comparison.description });
}

export default async function ComparisonPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) notFound();
  return (
    <>
      <JsonLd data={articleSchema({ headline: comparison.seoTitle, description: comparison.description, locale, url: `${siteUrl}/${locale}${paths.vergleiche}/${comparison.slug}/`, about: comparison.title, image: `${siteUrl}/images/hermetia/celestial-layer-orbits.png` })} />
      <Header locale={locale} current="vergleiche" />
      <article className="py-16">
        <div className="wrap max-w-[820px]">
          <span className="kicker">Vergleich</span>
          <h1 className="mt-3 text-[clamp(32px,5vw,46px)]">{comparison.title}</h1>
          <p className="lead mt-5">{comparison.description}</p>
          <div className="my-10 rounded-card border border-sand bg-white p-6 shadow-soft">
            <p className="muted text-[17px] leading-[1.9]">{comparison.body}</p>
          </div>
          <AppCta locale={locale} title="Vergleiche Systeme nicht nur abstrakt." text="Starte dein Profil und sieh, welche Perspektiven bei dir wirklich zusammenwirken." source={`comparison-${comparison.slug}`} />
        </div>
      </article>
      <Footer locale={locale} />
    </>
  );
}
