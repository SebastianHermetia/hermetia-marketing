import type { Metadata } from "next";
import Link from "next/link";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths, startUrl } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/JsonLd";
import { glossaryTerms } from "@/content/marketing";

type GlossarySlug = (typeof glossaryTerms)[number]["slug"];

const termFamilies: { title: string; text: string; slugs: GlossarySlug[] }[] = [
  {
    title: "Profil und Seelenkarte",
    text: "Grundbegriffe für den Einstieg: Was Hermetia berechnet, wie Kernthemen entstehen und warum die Seelenkarte kein einzelnes Chart ist.",
    slugs: ["seelenkarte", "kernthema", "spannungsfeld", "theme-signal"],
  },
  {
    title: "Methode und Konvergenz",
    text: "Begriffe, die erklären, wie Hermetia mehrere Systeme vergleichbar macht und verwandte Quellen nicht doppelt zählt.",
    slugs: ["konvergenz", "systemfamilie", "gewichtung", "evidenzart"],
  },
  {
    title: "AI, Datenschutz und Recht",
    text: "Begriffe für Vertrauen vor dem Profilstart: AI-Deutung, Einwilligung, Datenminimierung und rechtlich saubere Sprache.",
    slugs: ["ai-deutung", "einwilligung", "datenminimierung", "art-9-dsgvo"],
  },
  {
    title: "Beziehung und Alltag",
    text: "Begriffe für spätere Premium- und Begleitfunktionen: Beziehungsauswertung, Tagesimpulse, Journaling und Rückblicke.",
    slugs: ["synastrie", "tagesimpuls", "journaling", "monatsrueckblick"],
  },
];

const glossaryQuestions = [
  "Was bedeutet Seelenkarte bei Hermetia?",
  "Was ist Konvergenz in spirituellen Systemen?",
  "Welche Rolle spielt AI bei Deutungstexten?",
  "Warum sind spirituelle Profildaten sensibel?",
  "Welche Begriffe brauche ich vor dem kostenlosen Profilstart?",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale: locale as Locale, path: paths.glossar, title: "Hermetia Glossar — Begriffe aus Profiling, Systemen und AI erklärt", description: "Das Hermetia Glossar erklärt Seelenkarte, Konvergenz, Synastrie, AI-Deutung und weitere Begriffe verständlich und rechtssicher." });
}

export default async function GlossarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const pageUrl = `${siteUrl}/${locale}${paths.glossar}/`;
  const bySlug = new Map(glossaryTerms.map((term) => [term.slug, term]));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Hermetia Glossar",
            description: "Begriffe aus Seelenkarte, Konvergenz, spirituellen Systemen, AI-Deutung und Datenschutz verständlich erklärt.",
            locale,
            url: pageUrl,
            about: "Hermetia Glossar",
            image: `${siteUrl}/images/hermetia/library-of-self-profile.png`,
          }),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "Glossar", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="glossar" />
      <section className="py-16">
        <div className="wrap grid items-center gap-8 md:grid-cols-[1fr_.8fr]">
          <div>
            <span className="kicker">Wissen · AEO</span>
            <h1 className="mt-3 text-[clamp(32px,5vw,48px)]">Glossar für Seelenkarte, Systeme und AI-Deutung</h1>
            <p className="lead mt-5">Kurze, klare Antworten auf die Begriffe, die Hermetia ausmachen. Jede Erklärung führt tiefer in die Methode und bei Bedarf direkt zur eigenen Erfahrung.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "glossary-hero" })}>Profil kostenlos starten</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.wissen)}>Ratgeber lesen</a>
            </div>
          </div>
          <img src="/images/hermetia/library-of-self-profile.png" alt="Bibliothek des Selbst als Hermetia Glossar-Motiv" className="rounded-card border border-sand object-cover shadow-soft" />
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="kicker">Antwortmaschine</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Welche Fragen beantwortet das Glossar?</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Das Glossar ist für kurze, zitierfähige Antworten gebaut. Es hilft Suchmaschinen, AI-Antwortsystemen und neuen Nutzern, Hermetias Sprache schnell einzuordnen.
            </p>
          </div>
          <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
            <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
              {glossaryQuestions.map((question) => <li key={question}>✓ {question}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap">
          <div className="mb-9 max-w-[760px]">
            <span className="kicker">Begriffsfamilien</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Begriffe nach Nutzerintention sortiert.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Wer Hermetia neu entdeckt, sucht selten alphabetisch. Begriffsfamilien führen deshalb nach Thema: Einstieg, Methode, Vertrauen und Premium-Alltag.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {termFamilies.map((family) => (
              <article key={family.title} className="card">
                <h3 className="text-[24px]">{family.title}</h3>
                <p className="muted mt-3 text-[15.5px] leading-relaxed">{family.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {family.slugs.map((slug) => {
                    const term = bySlug.get(slug);
                    if (!term) return null;
                    return (
                      <Link key={slug} href={localePath(locale, `${paths.glossar}/${slug}`)} className="chip no-underline">
                        {term.term}
                      </Link>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap">
          <div className="mb-9 text-center">
            <span className="kicker">Alle Begriffe</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Von Seelenkarte bis Datenminimierung</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {glossaryTerms.map((term) => (
              <Link key={term.slug} href={localePath(locale, `${paths.glossar}/${term.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
                <h2 className="text-[22px]">{term.term}</h2>
                <p className="muted mt-2">{term.definition}</p>
                <span className="note mt-3 inline-block font-semibold text-gold">Begriff lesen →</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="wrap mt-10">
          <AppCta locale={locale} title="Begriffe sind gut. Dein eigenes Profil ist besser." text="Starte kostenlos und sieh, welche Themen Hermetia bei dir erkennt." source="glossary-index" />
        </div>
      </section>
      <Footer locale={locale} />
    </>
  );
}
