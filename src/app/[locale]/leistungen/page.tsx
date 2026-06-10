import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SoulMap } from "@/components/SoulMap";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return buildMetadata({ locale: locale as Locale, path: paths.leistungen, title: t.leistungen.seoTitle, description: t.leistungen.seoDescription });
}

export default async function LeistungenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const p = t.leistungen;

  return (
    <>
      <Header locale={locale} current="leistungen" />

      <section className="pb-8 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{p.kicker}</span>
          <h1 className="max-w-[700px] text-[clamp(32px,5vw,46px)]">{p.title}</h1>
          <p className="lead mt-4">{p.lead}</p>
        </div>
      </section>

      {/* Seelenkarte */}
      <section className="py-11">
        <div className="wrap grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="chip chip-rose">{p.soulmap.tag}</span>
            <h2 className="my-3 text-[clamp(24px,3.5vw,32px)]">{p.soulmap.title}</h2>
            <p className="muted text-[16.5px]">{p.soulmap.text}</p>
          </div>
          <div className="card text-center"><SoulMap size={190} /></div>
        </div>
      </section>

      {/* Ebenen */}
      <section className="bg-creme-tief py-11">
        <div className="wrap grid items-center gap-8 md:grid-cols-2">
          <div className="card">
            <div className="flex flex-col gap-2.5">
              {p.levels.labels.map((label, i) => {
                const locked = i === 2;
                return (
                  <div key={i} className={`flex items-center gap-3 rounded-field border border-sand bg-creme px-4 py-3 ${locked ? "opacity-60 blur-[0.4px]" : ""}`}>
                    <span className={locked ? "text-[#bbb]" : "text-gold"}>{locked ? "○" : "●"}</span>
                    <span className="font-semibold">{label}</span>
                    <span className="flex-1" />
                    <span className="note">{locked ? `${p.levels.locked} ⟡` : p.levels.open}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <span className="chip">{p.levels.tag}</span>
            <h2 className="my-3 text-[clamp(24px,3.5vw,32px)]">{p.levels.title}</h2>
            <p className="muted text-[16.5px]">{p.levels.text}</p>
          </div>
        </div>
      </section>

      {/* Tägliche Begleitung */}
      <section className="py-14">
        <div className="wrap">
          <div className="mb-9 text-center">
            <span className="kicker">{p.daily.kicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,32px)]">{p.daily.title}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {p.daily.items.map((it, i) => (
              <div key={i} className="card">
                <div className="ic" aria-hidden>{it.icon}</div>
                <h3 className="mb-2 text-xl">{it.title}</h3>
                <p className="muted">{it.text}{it.tier ? <span className="note"> ({it.tier})</span> : null}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creme-tief py-20 text-center">
        <div className="wrap">
          <h2 className="text-[clamp(26px,3.5vw,34px)]">{p.cta.title}</h2>
          <p className="lead mx-auto my-4 max-w-[520px]">{p.cta.lead}</p>
          <a className="btn btn-primary btn-lg" href={startUrl(locale)}>{t.cta.startFree}</a>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
