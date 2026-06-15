import type { Metadata } from "next";
import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { glossaryTerms } from "@/content/marketing";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale: locale as Locale, path: paths.glossar, title: "Hermetia Glossar — Begriffe aus Profiling, Systemen und AI erklärt", description: "Das Hermetia Glossar erklärt Seelenkarte, Konvergenz, Synastrie, AI-Deutung und weitere Begriffe verständlich und rechtssicher." });
}

export default async function GlossarPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  return (
    <>
      <Header locale={locale} current="glossar" />
      <section className="py-16">
        <div className="wrap grid items-center gap-8 md:grid-cols-[1fr_.8fr]">
          <div>
            <span className="kicker">Wissen · AEO</span>
            <h1 className="mt-3 text-[clamp(32px,5vw,48px)]">Glossar für Seelenkarte, Systeme und AI-Deutung</h1>
            <p className="lead mt-5">Kurze, klare Antworten auf die Begriffe, die Hermetia ausmachen. Jede Erklärung führt tiefer in die Methode und bei Bedarf direkt zur eigenen Erfahrung.</p>
          </div>
          <img src="/images/hermetia/library-of-self-profile.png" alt="Bibliothek des Selbst als Hermetia Glossar-Motiv" className="rounded-card border border-sand object-cover shadow-soft" />
        </div>
      </section>
      <section className="bg-creme-tief py-16">
        <div className="wrap grid gap-5 md:grid-cols-2">
          {glossaryTerms.map((term) => (
            <Link key={term.slug} href={localePath(locale, `${paths.glossar}/${term.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
              <h2 className="text-[22px]">{term.term}</h2>
              <p className="muted mt-2">{term.definition}</p>
              <span className="note mt-3 inline-block font-semibold text-gold">Begriff lesen →</span>
            </Link>
          ))}
        </div>
        <div className="wrap mt-10">
          <AppCta locale={locale} title="Begriffe sind gut. Dein eigenes Profil ist besser." text="Starte kostenlos und sieh, welche Themen Hermetia bei dir erkennt." source="glossary-index" />
        </div>
      </section>
      <Footer locale={locale} />
    </>
  );
}
