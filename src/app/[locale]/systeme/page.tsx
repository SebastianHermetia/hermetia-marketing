import type { Metadata } from "next";
import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, localePath, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { systems } from "@/content/systems";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return buildMetadata({ locale: locale as Locale, path: paths.systeme, title: t.systeme.seoTitle, description: t.systeme.seoDescription });
}

export default async function SystemePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const p = t.systeme;
  const core = systems.filter((s) => s.core);
  const more = systems.filter((s) => !s.core);

  return (
    <>
      <Header locale={locale} current="systeme" />

      <section className="pb-8 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{p.kicker}</span>
          <h1 className="max-w-[720px] text-[clamp(32px,5vw,46px)]">{p.title}</h1>
          <p className="lead mt-4">{p.lead}</p>
        </div>
      </section>

      {/* Konvergenz-Engine */}
      <section className="pt-4">
        <div className="wrap">
          <div className="rounded-card bg-gradient-to-br from-aubergine to-pflaume p-11 text-gold-weich">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="chip chip-gold">{p.convergence.tag}</span>
                <h2 className="my-3 text-[clamp(24px,3.5vw,32px)] text-white">{p.convergence.title}</h2>
                <p className="text-[17px] text-[#e9dcf2]">{p.convergence.text}</p>
              </div>
              <div className="flex justify-center">
                <svg viewBox="0 0 200 160" width="220" height="176" role="img" aria-label="Konvergenz">
                  <circle cx="80" cy="60" r="46" fill="rgba(201,139,155,.4)" stroke="#C98B9B" />
                  <circle cx="120" cy="60" r="46" fill="rgba(156,174,139,.4)" stroke="#9CAE8B" />
                  <circle cx="100" cy="98" r="46" fill="rgba(190,154,83,.4)" stroke="#BE9A53" />
                  <circle cx="100" cy="76" r="8" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kernsysteme */}
      <section className="py-20">
        <div className="wrap">
          <div className="mb-10 text-center">
            <span className="kicker">{p.coreKicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,34px)]">{p.coreTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {core.map((s) => {
              const c = s[locale] ?? s.de;
              return (
                <Link key={s.slug} href={localePath(locale, `${paths.systeme}/${s.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
                  <div className="ic" aria-hidden>{s.glyph}</div>
                  <h3 className="mb-2 text-xl">{c.name}</h3>
                  <p className="muted">{c.tagline}.</p>
                  <span className="note mt-3 inline-block font-semibold text-gold">{t.cta.more} →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weitere Systeme */}
      <section className="bg-creme-tief py-20">
        <div className="wrap">
          <div className="mb-9 text-center">
            <span className="kicker">{p.moreKicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,34px)]">{p.moreTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {more.map((s) => {
              const c = s[locale] ?? s.de;
              return (
                <Link key={s.slug} href={localePath(locale, `${paths.systeme}/${s.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
                  <h3 className="text-[19px]">{c.name}</h3>
                  <p className="muted">{c.tagline}.</p>
                </Link>
              );
            })}
          </div>
          <p className="note mt-6 text-center">{p.note}</p>
        </div>
      </section>

      <section className="py-20 text-center">
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
