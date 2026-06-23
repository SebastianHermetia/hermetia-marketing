import type { Metadata } from "next";
import Link from "next/link";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths, startUrl } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/JsonLd";
import { comparisons } from "@/content/marketing";
import { localizedUi, localizeKnowledgeItem } from "@/i18n/localized-content";

type ComparisonSlug = (typeof comparisons)[number]["slug"];

const comparisonFamilies: { title: string; text: string; slugs: ComparisonSlug[] }[] = [
  {
    title: "Astrologie, Human Design und Gene Keys",
    text: "Für Suchfragen rund um Horoskop, Bodygraph, Tore, Archetypen und die Frage, warum verwandte Datenquellen nicht doppelt gezählt werden sollten.",
    slugs: ["human-design-vs-gene-keys", "astrologie-vs-human-design", "bazi-vs-astrologie"],
  },
  {
    title: "Psychologie, Typologien und Selbstauskunft",
    text: "Für Nutzer, die verstehen möchten, wie Big Five, Enneagramm und Human Design unterschiedliche Arten von Aussagen liefern.",
    slugs: ["big-five-vs-enneagramm", "enneagramm-vs-human-design", "big-five-vs-human-design"],
  },
  {
    title: "Alltag, Tagesimpulse und Journaling",
    text: "Für Menschen, die klassische Tageshoroskope, Journaling-Apps oder intuitive Tageskarten mit Astrakeys profilbasierter Begleitung vergleichen.",
    slugs: ["tageshoroskop-vs-hermetia", "tagesimpuls-vs-journaling-app", "oracle-cards-vs-tagesimpuls"],
  },
  {
    title: "Kostenloser Einstieg und Premium-Tiefe",
    text: "Für Conversion-nahe Fragen: Was kann ein kostenloses Horoskop, was kann Astrakey, und wann lohnt sich ein bezahltes Modell?",
    slugs: ["kostenloses-horoskop-vs-hermetia", "seelenkarte-vs-persoenlichkeitstest", "astrologie-vs-numerologie"],
  },
];

const comparisonQuestions = [
  "Was ist der Unterschied zwischen Human Design und Gene Keys?",
  "Ist Astrakey eher Astrologie oder Persönlichkeitstest?",
  "Warum reicht ein kostenloses Horoskop oft nicht aus?",
  "Wie unterscheiden sich Tageshoroskop und persönlicher Tagesimpuls?",
  "Wann ist welches System hilfreich und wo liegen die Grenzen?",
];

const comparisonPrinciples = [
  "Keine Gewinnerliste: Systeme werden nach Nutzen, Datenbasis und Grenzen verglichen.",
  "Keine Diagnose: Vergleiche bleiben Reflexion, nicht medizinische oder therapeutische Beratung.",
  "Keine Doppelzählung: Verwandte Quellen werden als Systemfamilien verstanden.",
  "Eigene Sprache: Die Seite übernimmt keine geschützten Deutungstexte Dritter.",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale: locale as Locale, path: paths.vergleiche, title: "Astrakey Vergleiche — Systeme verständlich gegenübergestellt", description: "Vergleiche zwischen Astrologie, Human Design, Gene Keys, Numerologie und weiteren Systemen." });
}

export default async function VergleichePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const ui = localizedUi(locale);
  const localizedComparisons = comparisons.map((comparison) => localizeKnowledgeItem(comparison, locale, "comparison"));
  const pageUrl = `${siteUrl}/${locale}${paths.vergleiche}/`;
  const bySlug = new Map(localizedComparisons.map((comparison) => [comparison.slug, comparison]));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Astrakey Vergleiche",
            description: "Vergleiche zwischen Astrologie, Human Design, Gene Keys, Big Five, Enneagramm, Tageshoroskop und Astrakey.",
            locale,
            url: pageUrl,
            about: "Astrakey Systemvergleiche",
            image: `${siteUrl}/images/hermetia/atmospheric-data-topography.png`,
          }),
          breadcrumbSchema([
            { name: "Astrakey", url: `${siteUrl}/${locale}/` },
            { name: "Vergleiche", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="vergleiche" />
      <section className="py-16">
        <div className="wrap grid items-center gap-9 lg:grid-cols-[1fr_.85fr]">
          <div>
            <span className="kicker">{ui.comparison}</span>
            <h1 className="mt-3 max-w-[760px] text-[clamp(32px,5vw,48px)]">Welche Systeme zeigen was?</h1>
            <p className="lead mt-5 max-w-[700px]">Vergleichsseiten holen typische Suchfragen ab und zeigen, warum Astrakey Systeme nicht gegeneinander ausspielt, sondern verantwortungsvoll verbindet.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "comparisons-hero" })}>{ui.startFree}</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.systeme)}>{ui.overview}</a>
            </div>
          </div>
          <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
            <img src="/images/hermetia/atmospheric-data-topography.png" alt="Abstrakte Datenlandschaft als Motiv für Systemvergleiche" className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
              Vergleiche helfen nicht beim Gewinnen, sondern beim Einordnen: Welche Perspektive sieht welchen Teil?
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="kicker">Suchfragen</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Welche Vergleichsfragen beantwortet Astrakey?</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Viele Nutzer kommen über Gegenüberstellungen: Human Design oder Gene Keys, Horoskop oder Seelenkarte, Persönlichkeitstest oder spirituelles Profil. Der Vergleichs-Hub beantwortet diese Fragen ohne künstliche Rangliste.
            </p>
          </div>
          <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
            <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
              {comparisonQuestions.map((question) => <li key={question}>✓ {question}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap">
          <div className="mb-9 max-w-[760px]">
            <span className="kicker">Vergleichsfamilien</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Lesewege für typische Entscheidungen.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Die Vergleiche sind nach Nutzerintention sortiert. So erkennt man schneller, ob es um ähnliche Datenquellen, unterschiedliche Aussagearten, Alltagsbegleitung oder Premium-Entscheidungen geht.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {comparisonFamilies.map((family) => (
              <article key={family.title} className="card">
                <h3 className="text-[24px]">{family.title}</h3>
                <p className="muted mt-3 text-[15.5px] leading-relaxed">{family.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {family.slugs.map((slug) => {
                    const comparison = bySlug.get(slug);
                    if (!comparison) return null;
                    return (
                      <Link key={slug} href={localePath(locale, `${paths.vergleiche}/${slug}`)} className="chip no-underline">
                        {comparison.title}
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
            <span className="kicker">Alle Vergleiche</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Systeme, Methoden und Alltag gegenübergestellt</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {localizedComparisons.map((comparison) => (
              <Link key={comparison.slug} href={localePath(locale, `${paths.vergleiche}/${comparison.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
                <h2 className="text-[22px]">{comparison.title}</h2>
                <p className="muted mt-2">{comparison.description}</p>
                <span className="note mt-3 inline-block font-semibold text-gold">{ui.comparison} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap grid items-start gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <span className="kicker">Fairness</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Warum Astrakey nicht nach Gewinnern sucht.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Ein Vergleich ist hilfreich, wenn er Unterschiede klärt. Er wird gefährlich, wenn er absolute Wahrheiten verspricht. Astrakey nutzt Vergleiche deshalb als Orientierung, nicht als Urteil über Menschen oder Systeme.
            </p>
            <div className="mt-7">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "comparisons-fairness" })}>Eigene Seelenkarte prüfen</a>
            </div>
          </div>
          <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
            <h3 className="text-[23px]">Vergleichsregeln</h3>
            <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
              {comparisonPrinciples.map((principle) => <li key={principle}>✓ {principle}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap">
          <AppCta
            locale={locale}
            title="Vergleiche erklären Systeme. Dein Profil zeigt, was bei dir zusammenläuft."
            text="Starte kostenlos und erlebe, welche Themen Astrakey aus mehreren Perspektiven bei dir erkennt."
            source="comparisons-final"
          />
        </div>
      </section>
      <Footer locale={locale} />
    </>
  );
}
