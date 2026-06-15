import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { JsonLd, articleSchema } from "@/components/JsonLd";
import { glossaryTerms } from "@/content/marketing";

export function generateStaticParams() {
  return locales.flatMap((locale) => glossaryTerms.map((term) => ({ locale, slug: term.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const term = glossaryTerms.find((t) => t.slug === slug);
  if (!term) return {};
  return buildMetadata({ locale: locale as Locale, path: `${paths.glossar}/${slug}`, title: term.seoTitle, description: term.definition });
}

export default async function GlossarDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const term = glossaryTerms.find((t) => t.slug === slug);
  if (!term) notFound();
  return (
    <>
      <JsonLd data={articleSchema({ headline: term.seoTitle, description: term.definition, locale, url: `${siteUrl}/${locale}${paths.glossar}/${term.slug}/`, about: term.term, image: `${siteUrl}/images/hermetia/library-of-self-profile.png` })} />
      <Header locale={locale} current="glossar" />
      <article className="py-16">
        <div className="wrap max-w-[820px]">
          <span className="kicker">Glossar</span>
          <h1 className="mt-3 text-[clamp(32px,5vw,46px)]">{term.term}</h1>
          <div className="mt-7 rounded-card border border-gold/30 bg-gold-weich/25 p-6">
            <span className="kicker">Kurz gesagt</span>
            <p className="mt-2 text-[18px] leading-relaxed text-aubergine">{term.definition}</p>
          </div>
          <div className="mt-10 flex flex-col gap-7">
            {term.sections.map((section, idx) => (
              <p key={idx} className="muted text-[17px] leading-[1.85]">{section}</p>
            ))}
          </div>
          <div className="mt-12">
            <AppCta locale={locale} title="Erlebe den Begriff in deinem eigenen Profil." text="Hermetia macht abstrakte Begriffe erst dann wirklich greifbar, wenn sie mit deiner Seelenkarte verbunden sind." source={`glossary-${term.slug}`} />
          </div>
        </div>
      </article>
      <Footer locale={locale} />
    </>
  );
}
