import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, localePath, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, faqSchema, articleSchema, breadcrumbSchema } from "@/components/JsonLd";
import { systems, systemSlugs, getSystem } from "@/content/systems";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) for (const slug of systemSlugs) params.push({ locale, slug });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const sys = getSystem(slug);
  if (!sys) return {};
  const c = sys[locale as Locale] ?? sys.de;
  return buildMetadata({ locale: locale as Locale, path: `${paths.systeme}/${slug}`, title: c.seoTitle, description: c.seoDescription });
}

export default async function SystemDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const sys = getSystem(slug);
  if (!sys) notFound();
  const t = getDictionary(locale);
  const c = sys[locale] ?? sys.de;
  const related = systems.filter((s) => s.slug !== slug).slice(0, 4);
  const pageUrl = `${siteUrl}/${locale}${paths.systeme}/${slug}/`;
  const imageUrl = `${siteUrl}/images/art/${sys.art}`;

  return (
    <>
      <JsonLd
        data={[
          faqSchema(c.faq),
          articleSchema({ headline: c.seoTitle, description: c.seoDescription, locale, url: pageUrl, about: c.name, image: imageUrl }),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: t.nav.systeme, url: `${siteUrl}/${locale}${paths.systeme}/` },
            { name: c.name, url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="systeme" />

      {/* Header-Band mit Brand-Art */}
      <section className="relative">
        <div className="relative h-[260px] w-full overflow-hidden">
          <img src={`/images/art/${sys.art}`} alt={`${c.name} – Hermetia`} width={1400} height={520} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-aubergine/85 via-aubergine/45 to-aubergine/25" />
          <div className="absolute inset-0 flex items-end">
            <div className="wrap pb-7">
              <Link href={localePath(locale, paths.systeme)} className="text-[13px] text-gold-weich/80 no-underline hover:text-white">
                ← {t.nav.systeme}
              </Link>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-[34px] text-gold-weich" aria-hidden>{sys.glyph}</span>
                <div>
                  <h1 className="text-[clamp(28px,4vw,40px)] text-white">{c.name}</h1>
                  <p className="text-gold-weich/90">{c.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="wrap max-w-[800px]">
          <p className="lead">{c.intro}</p>

          <div className="mt-10 flex flex-col gap-9">
            <div>
              <h2 className="text-[24px]">{c.whatTitle}</h2>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">{c.what}</p>
            </div>
            <div className="rounded-card border border-sand bg-creme-tief p-6">
              <span className="kicker">{c.howTitle}</span>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">{c.how}</p>
            </div>
            <div>
              <h2 className="text-[24px]">{c.revealsTitle}</h2>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">{c.reveals}</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="mb-2 text-[24px]">{t.home.faq.kicker}</h2>
            <Faq items={c.faq} />
          </div>

          {/* CTA */}
          <div className="mt-12 rounded-card bg-gradient-to-br from-aubergine to-pflaume px-8 py-12 text-center">
            <h2 className="text-[26px] text-white">{t.systeme.cta.title}</h2>
            <p className="mx-auto my-3 max-w-[460px] text-[#e9dcf2]">{t.systeme.cta.lead}</p>
            <a className="btn btn-on-dark btn-lg" href={startUrl(locale)}>{t.cta.startFree}</a>
          </div>
        </div>
      </section>

      {/* Verwandte Systeme */}
      <section className="bg-creme-tief py-16">
        <div className="wrap">
          <h2 className="mb-6 text-center text-[24px]">{t.systeme.moreKicker}</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {related.map((r) => {
              const rc = r[locale] ?? r.de;
              return (
                <Link key={r.slug} href={localePath(locale, `${paths.systeme}/${r.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
                  <div className="ic" aria-hidden>{r.glyph}</div>
                  <h3 className="text-[18px]">{rc.name}</h3>
                  <p className="note mt-1">{rc.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
