import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return buildMetadata({ locale: locale as Locale, path: paths.methodik, title: t.methodik.seoTitle, description: t.methodik.seoDescription });
}

export default async function MethodikPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const p = t.methodik;

  return (
    <>
      <Header locale={locale} current="methodik" />

      <section className="pb-7 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{p.kicker}</span>
          <h1 className="max-w-[720px] text-[clamp(32px,5vw,46px)]">{p.title}</h1>
          <p className="lead mt-4 max-w-[640px]">{p.lead}</p>
        </div>
      </section>

      {/* 3 Schritte */}
      <section className="pt-6">
        <div className="wrap max-w-[840px]">
          {p.steps.map((s, i) => (
            <div key={i} className={`card mb-5 ${i === 1 ? "border-gold" : ""}`}>
              <div className="grid items-center gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-center font-serif text-[56px] text-gold">{s.n}</div>
                <div>
                  {s.tag ? <span className="chip chip-gold mb-2">{s.tag}</span> : null}
                  <h2 className="text-[26px]">{s.title}</h2>
                  <p className="muted mt-2">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schichten */}
      <section className="bg-creme-tief py-20">
        <div className="wrap">
          <div className="mb-9 text-center">
            <span className="kicker">{p.layersKicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,32px)]">{p.layersTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {p.layers.map((l, i) => (
              <div key={i} className="card">
                <span className="kicker">{l.label}</span>
                <h3 className="mt-1.5 text-xl">{l.title}</h3>
                <p className="muted">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KI tut / tut nicht */}
      <section className="py-20">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <div className="card">
            <h3 className="text-[22px]"><span className="text-salbei-tief">✓</span> {p.aiDoTitle}</h3>
            <ul className="mt-3.5 flex list-none flex-col gap-2.5 text-[15px] text-pflaume/90">
              {p.aiDo.map((x, i) => <li key={i}>– {x}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3 className="text-[22px]"><span className="text-altrosa-tief">✕</span> {p.aiDontTitle}</h3>
            <ul className="mt-3.5 flex list-none flex-col gap-2.5 text-[15px] text-pflaume/90">
              {p.aiDont.map((x, i) => <li key={i}>– {x}</li>)}
            </ul>
          </div>
        </div>
        <div className="wrap mt-8 text-center">
          <p className="note mx-auto max-w-[640px]">{p.privacyNote}</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-aubergine to-pflaume py-20 text-center text-white">
        <div className="wrap">
          <h2 className="text-[clamp(26px,3.5vw,34px)] text-white">{p.cta.title}</h2>
          <p className="mx-auto my-4 max-w-[480px] text-[#e9dcf2]">{p.cta.lead}</p>
          <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "method-final" })}>{t.cta.startFree}</a>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
