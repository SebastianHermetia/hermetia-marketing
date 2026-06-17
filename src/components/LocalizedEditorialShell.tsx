import type { Locale } from "@/i18n/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { localizedUi } from "@/i18n/localized-content";
import { paths, localePath, startUrl } from "@/lib/links";

export function LocalizedEditorialShell({ locale }: { locale: Locale }) {
  const ui = localizedUi(locale);
  const cards = [
    { title: ui.method, text: ui.body, href: paths.methodik },
    { title: ui.strengths, text: ui.ctaText, href: paths.systeme },
    { title: ui.safeNote, text: ui.safeNote, href: paths.datenSicherheit },
  ];

  return (
    <>
      <Header locale={locale} />
      <main>
        <section className="pb-12 pt-16">
          <div className="wrap grid items-center gap-9 lg:grid-cols-[1fr_.85fr]">
            <div>
              <span className="kicker">{ui.overview}</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">{ui.title}</h1>
              <p className="lead mt-5 max-w-[720px]">{ui.lead}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "localized-editorial" })}>{ui.startFree}</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.sprachen)}>{ui.overview}</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/atmospheric-data-topography.png" alt="Hermetia" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">{ui.ctaText}</figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <a key={card.title} href={localePath(locale, card.href)} className="card no-underline transition-transform hover:-translate-y-1">
                <h2 className="text-[23px]">{card.title}</h2>
                <p className="muted mt-3 text-[15.5px] leading-relaxed">{card.text}</p>
                <span className="note mt-4 inline-block font-semibold text-gold">{ui.learnMore}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <span className="kicker">{ui.method}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{ui.ctaTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{ui.body}</p>
            </div>
            <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                <li>{ui.proof}</li>
                <li>{ui.safeNote}</li>
                <li>{ui.ctaText}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <AppCta locale={locale} title={ui.ctaTitle} text={ui.ctaText} source="localized-editorial-final" />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
