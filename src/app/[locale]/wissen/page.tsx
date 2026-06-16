import type { Metadata } from "next";
import Link from "next/link";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths, startUrl } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/JsonLd";
import { articles } from "@/content/marketing";

type ArticleSlug = (typeof articles)[number]["slug"];

const clusters: { title: string; text: string; slugs: ArticleSlug[] }[] = [
  {
    title: "Seelenkarte und Profilstart",
    text: "Für Nutzer, die wissen möchten, was eine Seelenkarte ist, welche Daten gebraucht werden und warum der kostenlose Einstieg vor jeder Kaufentscheidung steht.",
    slugs: ["seelenkarte-erstellen", "geburtszeit-unbekannt", "was-kostet-spirituelles-profil"],
  },
  {
    title: "Systeme, Konvergenz und Methode",
    text: "Für Suchfragen rund um Astrologie, Human Design, Gene Keys, Fragebögen und die Frage, warum ein einzelnes System selten ausreicht.",
    slugs: ["warum-ein-system-nicht-reicht", "konvergenz-statt-beliebigkeit", "astrologie-mit-erklärbarkeit", "frageboegen-als-erdung"],
  },
  {
    title: "AI, Datenschutz und rechtliche Grenzen",
    text: "Für Vertrauen vor der Anmeldung: AI-Transparenz, sensible spirituelle Daten, Einwilligung, eigene Sprache und klare Abgrenzung zu Therapie oder Diagnose.",
    slugs: ["ai-selbstreflexion", "sensible-spirituelle-daten", "warum-geburtsdaten-sensibel-sind", "gene-keys-ohne-kopierte-texte", "warum-hermetia-keine-therapie-ist"],
  },
  {
    title: "Alltag, Premium und Beziehung",
    text: "Für Nutzer, die verstehen wollen, wann Tagesimpulse, Journaling, Beziehungsprofile und bezahlte Modelle sinnvoll werden.",
    slugs: ["tageshoroskop-vs-tagesimpuls", "beziehungsprofil-mit-consent", "premium-modell-sinnvoll-waehlen", "spirituelle-app-ohne-angstmarketing"],
  },
];

const searchIntents = [
  "Was ist eine Seelenkarte und wie entsteht sie?",
  "Welche spirituellen Systeme nutzt Hermetia?",
  "Wie funktioniert Konvergenz statt einzelner Deutung?",
  "Ist Hermetia Therapie, Diagnose oder Vorhersage?",
  "Wann lohnt sich ein bezahltes Modell?",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale: locale as Locale, path: paths.wissen, title: "Hermetia Wissen — spirituelles Profiling, AI und Selbstreflexion", description: "Ratgeber und Grundlagen zu spirituellem Profiling, Geburtszeit, AI-Deutung, Datenschutz und verantwortungsvoller Selbstreflexion." });
}

export default async function WissenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const pageUrl = `${siteUrl}/${locale}${paths.wissen}/`;
  const bySlug = new Map(articles.map((article) => [article.slug, article]));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Hermetia Wissen",
            description: "Ratgeber zu spirituellem Profiling, Seelenkarte, Konvergenz, AI, Datenschutz und verantwortungsvoller Selbstreflexion.",
            locale,
            url: pageUrl,
            about: "Hermetia Wissen",
            image: `${siteUrl}/images/hermetia/library-of-self-profile.png`,
          }),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "Wissen", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="wissen" />
      <section className="py-16">
        <div className="wrap grid items-center gap-9 lg:grid-cols-[1fr_.85fr]">
          <div>
            <span className="kicker">Wissen</span>
            <h1 className="mt-3 max-w-[780px] text-[clamp(32px,5vw,48px)]">Ratgeber für spirituelles Profiling, AI und Selbstreflexion</h1>
            <p className="lead mt-5 max-w-[700px]">Vertiefende Artikel, die Suchfragen beantworten und gleichzeitig zeigen, wie Hermetia verantwortungsvoll mit komplexen Systemen arbeitet.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "knowledge-hero" })}>Profil kostenlos starten</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.glossar)}>Glossar öffnen</a>
            </div>
          </div>
          <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
            <img src="/images/hermetia/library-of-self-profile.png" alt="Ruhige Bibliothek als Bild für Hermetia Wissen und Selbstreflexion" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
              Wissen gibt Orientierung und macht den Weg zur eigenen Seelenkarte verständlicher.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="kicker">Suchfragen</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Welche Fragen beantwortet dieser Bereich?</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Der Wissensbereich ist für Menschen gebaut, die Hermetia noch nicht kennen, aber nach Seelenkarte, Human Design, AI-Deutung, Datenschutz oder spirituellem Profiling suchen. Jede Antwort hilft konkret und führt bei passender Resonanz zum Profilstart.
            </p>
          </div>
          <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
            <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
              {searchIntents.map((intent) => <li key={intent}>✓ {intent}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap">
          <div className="mb-9 max-w-[760px]">
            <span className="kicker">Themencluster</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Lesewege statt Artikelflut.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Die Artikel sind so gruppiert, dass Nutzer und Suchmaschinen die Rolle jedes Inhalts erkennen: Einstieg, Methode, Vertrauen und Premium-Entscheidung.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {clusters.map((cluster) => (
              <article key={cluster.title} className="card">
                <h3 className="text-[24px]">{cluster.title}</h3>
                <p className="muted mt-3 text-[15.5px] leading-relaxed">{cluster.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cluster.slugs.map((slug) => {
                    const article = bySlug.get(slug);
                    if (!article) return null;
                    return (
                      <Link key={slug} href={localePath(locale, `${paths.wissen}/${slug}`)} className="chip no-underline">
                        {article.title}
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
            <span className="kicker">Alle Ratgeber</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Grundlagen, Grenzen und nächste Schritte</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.slug} href={localePath(locale, `${paths.wissen}/${article.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
                <h2 className="text-[22px]">{article.title}</h2>
                <p className="muted mt-2">{article.description}</p>
                <span className="note mt-3 inline-block font-semibold text-gold">Artikel lesen →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap">
          <AppCta
            locale={locale}
            title="Wissen ist der Einstieg. Dein Profil ist die Erfahrung."
            text="Starte kostenlos und sieh, welche Themen Hermetia bei dir tatsächlich erkennt."
            source="knowledge-final"
          />
        </div>
      </section>
      <Footer locale={locale} />
    </>
  );
}
