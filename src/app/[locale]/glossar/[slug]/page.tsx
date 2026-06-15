import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, faqSchema } from "@/components/JsonLd";
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
  const faq = glossaryFaq(term);
  const related = glossaryTerms.filter((item) => item.slug !== term.slug).slice(0, 4);
  return (
    <>
      <JsonLd data={[articleSchema({ headline: term.seoTitle, description: term.definition, locale, url: `${siteUrl}/${locale}${paths.glossar}/${term.slug}/`, about: term.term, image: `${siteUrl}/images/hermetia/library-of-self-profile.png` }), faqSchema(faq)]} />
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
          <section className="mt-12 rounded-card border border-sand bg-creme-tief p-6">
            <span className="kicker">Suchfrage</span>
            <h2 className="mt-2 text-[clamp(24px,3vw,30px)]">Wann ist {term.term} für mein Profil relevant?</h2>
            <p className="muted mt-3 text-[17px] leading-[1.85]">
              Relevant wird {term.term}, wenn der Begriff hilft, ein wiederkehrendes Muster präziser zu benennen. Hermetia nutzt solche Begriffe nicht als isolierte Etiketten, sondern als verständliche Antwortbausteine: erst erklären, dann mit anderen Systemsignalen vergleichen, dann in der eigenen Seelenkarte prüfen.
            </p>
          </section>
          <section className="mt-12 rounded-card border border-sand bg-white p-6 shadow-soft">
            <h2 className="text-[clamp(24px,3vw,30px)]">Bedeutung in Hermetia</h2>
            <p className="muted mt-3 text-[17px] leading-[1.85]">
              Der Begriff {term.term} wird bei Hermetia nicht isoliert verwendet. Er bekommt seine Bedeutung erst im Zusammenspiel mit Seelenkarte, Konvergenz-Engine, Systemfamilien und Nutzerfeedback. Dadurch bleibt die Erklärung verständlich, ohne den Begriff als starres Etikett über eine Person zu legen.
            </p>
          </section>
          <section className="mt-8 rounded-card border border-sand bg-white p-6 shadow-soft">
            <span className="kicker">Beispiel, fiktiv</span>
            <h2 className="mt-2 text-[clamp(24px,3vw,30px)]">Wie {term.term} in einer Deutung auftauchen könnte</h2>
            <p className="muted mt-3 text-[17px] leading-[1.85]">
              Eine fiktive Person liest den Begriff {term.term} und erkennt darin zunächst nur ein einzelnes Wort. Erst wenn Hermetia zeigt, welche Systeme, Fragen oder Tagesimpulse dasselbe Thema berühren, entsteht ein nutzbarer Kontext. Die Deutung würde deshalb nicht lauten: Du bist so. Sie würde fragen: Wo zeigt sich dieses Motiv, wo hilft es dir, und wo wird es zu eng?
            </p>
          </section>
          <section className="mt-8 rounded-card border border-altrosa/25 bg-altrosa/10 p-6">
            <h2 className="text-[clamp(24px,3vw,30px)]">Grenzen der Deutung</h2>
            <p className="muted mt-3 text-[17px] leading-[1.85]">
              Glossar-Begriffe erklären Sprache und Methode, ersetzen aber keine Diagnose, Beratung oder persönliche Entscheidung. Wenn ein Begriff Resonanz auslöst, ist das ein guter Startpunkt für Reflexion. Wenn er nicht passt, ist auch das eine wichtige Information.
            </p>
          </section>
          <section className="mt-8 rounded-card border border-sand bg-creme-tief p-6">
            <span className="kicker">IP und Datenschutz</span>
            <h2 className="mt-2 text-[clamp(24px,3vw,30px)]">Warum Hermetia eigene Sprache verwendet</h2>
            <p className="muted mt-3 text-[17px] leading-[1.85]">
              Hermetia erklärt {term.term} mit eigenen Texten und übernimmt keine geschützten Reportpassagen, Kartentexte oder Fragebogenitems. Wenn ein Begriff sensible Profilinhalte berührt, bleibt außerdem wichtig: Einwilligung, Datenminimierung, Löschung und AI-Transparenz gehören zur Produktlogik.
            </p>
          </section>
          <section className="mt-10">
            <span className="kicker">Verwandte Begriffe</span>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {related.map((item) => (
                <Link key={item.slug} href={localePath(locale, `${paths.glossar}/${item.slug}`)} className="rounded-card border border-sand bg-white p-5 no-underline shadow-soft transition-transform hover:-translate-y-1">
                  <h3 className="text-[18px]">{item.term}</h3>
                  <p className="muted mt-2 text-[14.5px] leading-relaxed">{item.definition}</p>
                </Link>
              ))}
            </div>
          </section>
          <div className="mt-12">
            <h2 className="mb-4 text-[clamp(24px,3vw,32px)]">Häufige Fragen</h2>
            <Faq items={faq} />
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

function glossaryFaq(term: (typeof glossaryTerms)[number]) {
  return [
    {
      q: `Was bedeutet ${term.term} kurz gesagt?`,
      a: term.definition,
    },
    {
      q: `Wie nutzt Hermetia ${term.term}?`,
      a: "Hermetia nutzt den Begriff als erklärbaren Baustein innerhalb der Seelenkarte. Entscheidend ist, ob er mit anderen Systemsignalen zusammenläuft und für den Nutzer nachvollziehbar bleibt.",
    },
    {
      q: `Ist ${term.term} eine Diagnose oder Vorhersage?`,
      a: "Nein. Der Begriff dient der Orientierung und Selbstreflexion. Hermetia ersetzt keine medizinische, psychologische, therapeutische oder rechtliche Beratung.",
    },
  ];
}
