import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, faqSchema, productSchema } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return buildMetadata({ locale: locale as Locale, path: paths.preise, title: t.preise.seoTitle, description: t.preise.seoDescription });
}

export default async function PreisePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const p = t.preise;
  const pageUrl = `${siteUrl}/${locale}${paths.preise}/`;
  const offers = p.tiers.map((tier) => ({ name: tier.name, price: tier.price.match(/\d+/)?.[0] ?? "0" }));

  return (
    <>
      <JsonLd data={[faqSchema(p.faq), productSchema({ name: "Hermetia", description: p.seoDescription, url: pageUrl, offers })]} />
      <Header locale={locale} current="preise" />

      <section className="pb-7 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{p.kicker}</span>
          <h1 className="max-w-[680px] text-[clamp(32px,5vw,46px)]">{p.title}</h1>
          <p className="lead mt-4">{p.lead}</p>
          <div className="mt-6 inline-flex rounded-pill bg-creme-tief p-1.5 text-sm font-semibold">
            <span className="rounded-pill bg-white px-[18px] py-2 text-aubergine shadow-soft">{p.toggleYear}</span>
            <span className="px-[18px] py-2 text-[#8a7f93]">{p.toggleMonth}</span>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="pt-6">
        <div className="wrap">
          <div className="grid items-start gap-5 md:grid-cols-3">
            {p.tiers.map((tier, i) => (
              <div key={i} className={`card relative ${tier.featured ? "border-2 border-gold md:-translate-y-2" : ""}`}>
                {tier.featured ? (
                  <span className="chip chip-gold absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">{p.popular}</span>
                ) : null}
                <span className="kicker">{tier.name}</span>
                <p className="my-1.5 font-serif text-[40px] leading-none">
                  {tier.price}
                  {tier.per ? <span className="muted font-sans text-base"> {tier.per}</span> : null}
                </p>
                <p className="note">{tier.note}</p>
                <a className={`btn ${tier.featured ? "btn-primary" : "btn-ghost"} my-5 w-full`} href={startUrl(locale, { source: `pricing-tier-${i + 1}` })}>{tier.cta}</a>
                <ul className="flex list-none flex-col gap-2.5 text-[14.5px]">
                  {tier.features.map((f, k) => <li key={k}>✓ {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="note mt-6 text-center">{p.smallprint}</p>
        </div>
      </section>

      {/* Vertrauen */}
      <section className="my-14 bg-creme-tief py-14">
        <div className="wrap grid gap-5 text-center md:grid-cols-3">
          {p.trust.map((tr, i) => (
            <div key={i}>
              <div className="ic mx-auto" aria-hidden>{tr.icon}</div>
              <h3 className="text-[19px]">{tr.title}</h3>
              <p className="muted">{tr.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12">
        <div className="wrap">
          <div className="mb-7 text-center">
            <span className="kicker">{p.faqKicker}</span>
            <h2 className="mt-2 text-[clamp(24px,3.5vw,32px)]">{p.faqTitle}</h2>
          </div>
          <Faq items={p.faq} />
        </div>
      </section>

      <section className="pb-20 text-center">
        <div className="wrap">
          <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-final" })}>{p.cta}</a>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
