import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Section = { heading: string; body: string };

export function LegalPage({
  locale,
  entry,
}: {
  locale: Locale;
  entry: { title: string; sections: Section[] };
}) {
  const t = getDictionary(locale);
  const L = t.legal;

  return (
    <>
      <Header locale={locale} />
      <section className="py-16">
        <div className="wrap max-w-[820px]">
          <h1 className="text-[clamp(30px,4vw,42px)]">{entry.title}</h1>
          <p className="note mt-2">{L.updatedLabel}: {L.updated}</p>

          <div className="mt-5 rounded-field border border-gold/40 bg-gold/10 px-5 py-3.5 text-[13.5px] text-pflaume">
            {L.reviewNote}
          </div>

          <nav className="mt-8 border-l-2 border-sand pl-4" aria-label={L.tocLabel}>
            <p className="kicker mb-2">{L.tocLabel}</p>
            <ul className="flex flex-col gap-1.5 text-[14px]">
              {entry.sections.map((s, i) => (
                <li key={i}>
                  <a href={`#sec-${i}`} className="text-pflaume no-underline hover:text-aubergine">{s.heading}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 flex flex-col gap-9">
            {entry.sections.map((s, i) => (
              <div key={i} id={`sec-${i}`} className="scroll-mt-24">
                <h2 className="text-[21px]">{s.heading}</h2>
                <p className="muted mt-2 whitespace-pre-line leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer locale={locale} />
    </>
  );
}

