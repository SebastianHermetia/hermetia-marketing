import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, localePath, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SoulMap } from "@/components/SoulMap";
import { Faq } from "@/components/Faq";
import { JsonLd, faqSchema, orgSchema } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return buildMetadata({ locale: locale as Locale, path: paths.home, title: t.home.seoTitle, description: t.home.seoDescription });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const h = t.home;

  return (
    <>
      <JsonLd data={[orgSchema(siteUrl), faqSchema(h.faq.items)]} />
      <Header locale={locale} current="home" />

      {/* Hero */}
      <section className="pb-12 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{h.hero.eyebrow}</span>
          <h1 className="max-w-[760px] text-[clamp(34px,6vw,52px)] leading-[1.1]">{h.hero.title}</h1>
          <p className="lead my-6 max-w-[620px]">{h.hero.lead}</p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "home-hero" })}>{t.cta.seeChart}</a>
            <a className="btn btn-ghost btn-lg" href="#methodik">{t.cta.howItWorks}</a>
          </div>
          <p className="note mt-4">{h.hero.trustline}</p>

          <div className="mt-12 w-full max-w-[560px] rounded-[28px] border border-sand bg-white p-7 shadow-soft">
            <SoulMap />
            <p className="mt-2 text-center font-serif text-lg italic text-pflaume">„{h.hero.quote}“</p>
            <div className="mt-2.5 text-center">
              {h.hero.chips.map((c, i) => (
                <span key={i} className={`chip m-1 ${i === 0 ? "chip-rose" : i === 2 ? "chip-gold" : ""}`}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-9">
        <div className="wrap text-center">
          <p className="note mb-4 uppercase tracking-[1px]">{h.trust.kicker}</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-semibold text-salbei-tief">
            {h.trust.items.map((i, k) => <span key={k}>✶ {i}</span>)}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="bg-creme-tief py-20">
        <div className="wrap">
          <div className="mb-11 text-center">
            <span className="kicker">{h.features.kicker}</span>
            <h2 className="mt-2 text-[clamp(28px,4vw,38px)]">{h.features.title}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {h.features.items.map((f, i) => (
              <div key={i} className="card">
                <div className="ic" aria-hidden>{f.icon}</div>
                <h3 className="mb-2 text-xl">{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 text-center">
            <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.leistungen)}>{t.cta.allServices} →</a>
          </div>
        </div>
      </section>

      {/* Methodik */}
      <section id="methodik" className="py-20">
        <div className="wrap">
          <div className="mb-12 text-center">
            <span className="kicker">{h.method.kicker}</span>
            <h2 className="mt-2 text-[clamp(28px,4vw,38px)]">{h.method.title}</h2>
            <p className="lead mx-auto mt-4 max-w-[620px]">{h.method.lead}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {h.method.steps.map((s, i) => (
              <div key={i} className="card">
                <span className="kicker">{s.step}</span>
                <h3 className="mt-2 text-xl">{s.title}</h3>
                <p className="muted mt-2">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 text-center">
            <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.methodik)}>{t.cta.methodDetail} →</a>
          </div>
        </div>
      </section>

      {/* Systeme / Konvergenz */}
      <section className="bg-gradient-to-br from-aubergine to-pflaume py-20 text-gold-weich">
        <div className="wrap grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="kicker">{h.systems.kicker}</span>
            <h2 className="mt-2 text-[clamp(28px,4vw,38px)] text-white">{h.systems.title}</h2>
            <p className="my-5 max-w-[440px] text-[17px] text-[#e9dcf2]">{h.systems.text}</p>
            <a className="btn btn-on-dark" href={localePath(locale, paths.systeme)}>{t.cta.exploreSystems}</a>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {h.systems.chips.map((c, i) => (
              <span key={i} className="chip bg-gold-weich/15 text-gold-weich">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stimmen */}
      <section className="py-20">
        <div className="wrap">
          <div className="mb-10 text-center">
            <span className="kicker">{h.voices.kicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,34px)]">{h.voices.title}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {h.voices.items.map((v, i) => (
              <div key={i} className="card">
                <p className="font-serif text-lg italic text-pflaume">„{v.quote}“</p>
                <p className="note mt-3.5">— {v.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preis-Teaser */}
      <section className="bg-creme-tief py-20">
        <div className="wrap text-center">
          <span className="kicker">{h.pricingTeaser.kicker}</span>
          <h2 className="mt-2 text-[clamp(28px,4vw,38px)]">{h.pricingTeaser.title}</h2>
          <p className="lead mx-auto my-4 max-w-[620px]">{h.pricingTeaser.lead}</p>
          <a className="btn btn-primary btn-lg mt-2" href={localePath(locale, paths.preise)}>{t.cta.comparePrices}</a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="wrap">
          <div className="mb-8 text-center">
            <span className="kicker">{h.faq.kicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,34px)]">{h.faq.title}</h2>
          </div>
          <Faq items={h.faq.items} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20 pt-4">
        <div className="wrap">
          <div className="rounded-card bg-gradient-to-br from-aubergine to-pflaume px-8 py-16 text-center">
            <h2 className="text-[clamp(28px,4vw,40px)] text-white">{h.finalCta.title}</h2>
            <p className="mx-auto my-4 max-w-[520px] text-lg text-[#e9dcf2]">{h.finalCta.lead}</p>
            <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "home-final" })}>{t.cta.startFree}</a>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
