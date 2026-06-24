import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, faqSchema } from "@/components/JsonLd";
import { comparisons } from "@/content/marketing";
import { localizedFaq, localizedUi, localizeKnowledgeItem } from "@/i18n/localized-content";

export function generateStaticParams() {
  return locales.flatMap((locale) => comparisons.map((comparison) => ({ locale, slug: comparison.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) return {};
  const localizedComparison = localizeKnowledgeItem(comparison, locale as Locale, "comparison");
  return buildMetadata({ locale: locale as Locale, path: `${paths.vergleiche}/${slug}`, title: localizedComparison.seoTitle, description: localizedComparison.description });
}

export default async function ComparisonPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const ui = localizedUi(locale);
  const rawComparison = comparisons.find((c) => c.slug === slug);
  if (!rawComparison) notFound();
  const comparison = localizeKnowledgeItem(rawComparison, locale, "comparison");
  const sections = comparisonSections(comparison);
  const faq = localizedFaq(locale, comparisonFaq(comparison));
  return (
    <>
      <JsonLd data={[articleSchema({ headline: comparison.seoTitle, description: comparison.description, locale, url: `${siteUrl}/${locale}${paths.vergleiche}/${comparison.slug}/`, about: comparison.title, image: `${siteUrl}/images/hermetia/celestial-layer-orbits.png` }), faqSchema(faq)]} />
      <Header locale={locale} current="vergleiche" />
      <article className="py-16">
        <div className="wrap max-w-[820px]">
          <span className="kicker">{ui.comparison}</span>
          <h1 className="mt-3 text-[clamp(32px,5vw,46px)]">{comparison.title}</h1>
          <p className="lead mt-5">{comparison.description}</p>
          <div className="my-10 rounded-card border border-sand bg-white p-6 shadow-soft">
            <p className="muted text-[17px] leading-[1.9]">{comparison.body}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-salbei/25 bg-salbei/10 p-5">
              <span className="kicker">{ui.strengths}</span>
              <p className="muted mt-2 leading-relaxed">Der Vergleich macht sichtbar, welche Perspektive besonders gut für Struktur, Sprache, Timing oder Alltagstauglichkeit geeignet ist.</p>
            </div>
            <div className="rounded-card border border-altrosa/25 bg-altrosa/10 p-5">
              <span className="kicker">{ui.limits}</span>
              <p className="muted mt-2 leading-relaxed">Keines der Systeme entscheidet allein über eine Person. Astrakey nutzt Vergleiche als Orientierung, nicht als endgültiges Urteil.</p>
            </div>
          </div>
          <div className="mt-8 rounded-card border border-sand bg-creme-tief p-6">
            <span className="kicker">{ui.overview}</span>
            <h2 className="mt-2 text-[clamp(24px,3vw,30px)]">Wann welcher Blick hilfreicher ist</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-card border border-sand bg-white p-5">
                <h3 className="text-[18px]">Für den ersten Aha-Moment</h3>
                <p className="muted mt-2 text-[15px] leading-relaxed">Nutze die Perspektive, die schnell Sprache für ein Muster gibt, ohne dich festzulegen.</p>
              </div>
              <div className="rounded-card border border-sand bg-white p-5">
                <h3 className="text-[18px]">Für verlässliche Tiefe</h3>
                <p className="muted mt-2 text-[15px] leading-relaxed">Achte darauf, ob unabhängige Datenquellen dasselbe Thema stützen oder nur dieselbe Familie wiederholt wird.</p>
              </div>
              <div className="rounded-card border border-sand bg-white p-5">
                <h3 className="text-[18px]">Für Premium-Entscheidung</h3>
                <p className="muted mt-2 text-[15px] leading-relaxed">Tiefe lohnt sich, wenn du den Vergleich nicht nur lesen, sondern im eigenen Profil nachvollziehen willst.</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-10">
            {sections.map((section, idx) => (
              <section key={section.title}>
                <h2 className="text-[clamp(24px,3vw,32px)]">{section.title}</h2>
                <p className="muted mt-3 text-[17px] leading-[1.9]">{section.body}</p>
                {idx === 1 ? (
                  <div className="mt-8">
                    <AppCta locale={locale} title="Sieh den Vergleich in deinem eigenen Profil." text="Astrakey zeigt nicht nur, wie Systeme sich abstrakt unterscheiden, sondern welche Perspektiven bei dir tatsächlich zusammenwirken." source={`comparison-${comparison.slug}-inline`} />
                  </div>
                ) : null}
              </section>
            ))}
          </div>
          <section className="mt-10">
            <span className="kicker">Datenquellen und Fairness</span>
            <h2 className="mt-2 text-[clamp(24px,3vw,32px)]">Warum Vergleiche bei Astrakey keine Gewinnerliste sind</h2>
            <p className="muted mt-3 text-[17px] leading-[1.9]">
              Astrakey bewertet Systeme nicht nach Lautstärke, Bekanntheit oder spiritueller Dramaturgie. Entscheidend ist, welche Datenbasis vorliegt, welche Aussage daraus verantwortungsvoll abgeleitet werden kann und ob andere unabhängige Quellen dasselbe Motiv bestätigen. So entsteht ein Vergleich, der Nutzer weiterführt, ohne Systeme gegeneinander auszuspielen.
            </p>
          </section>
          <section className="mt-10">
            <span className="kicker">Rechtliche Grenzen</span>
            <h2 className="mt-2 text-[clamp(24px,3vw,32px)]">Keine Diagnose, keine kopierten Deutungstexte</h2>
            <p className="muted mt-3 text-[17px] leading-[1.9]">
              Die Vergleichstexte sind eigene Astrakey-Erklärungen. Sie übernehmen keine geschützten Reporttexte, Fragebogenitems oder fremden Kartendeutungen. Gerade bei psychologischen, körpernahen oder spirituellen Systemen bleibt die Sprache bewusst vorsichtig: Reflexion ja, Diagnose oder Therapie nein.
            </p>
          </section>
          <div className="mt-12">
            <h2 className="mb-4 text-[clamp(24px,3vw,32px)]">{ui.faq}</h2>
            <Faq items={faq} />
          </div>
          <AppCta locale={locale} title="Vergleiche Systeme nicht nur abstrakt." text="Starte dein Profil und sieh, welche Perspektiven bei dir wirklich zusammenwirken." source={`comparison-${comparison.slug}`} />
        </div>
      </article>
      <Footer locale={locale} />
    </>
  );
}

function comparisonSections(comparison: (typeof comparisons)[number]) {
  return [
    {
      title: "Der wichtigste Unterschied",
      body: `${comparison.title} ist nicht nur ein Vergleich zweier Begriffe. Entscheidend ist, welche Art von Signal beide Seiten liefern: Manche Systeme sind rechnerisch aus Geburtsdaten abgeleitet, andere beruhen auf Selbstauskunft, wieder andere sind symbolische Reflexionsmodelle. Astrakey trennt diese Quellen, damit ein stark klingendes Ergebnis nicht automatisch als stärkerer Beweis wirkt.`,
    },
    {
      title: "Warum Astrakey beide Perspektiven verbindet",
      body: `Ein einzelnes System kann sehr treffend wirken, bleibt aber in seiner eigenen Sprache. Astrakey prüft deshalb, ob Themen aus verschiedenen Familien wiederkehren. Wenn der Vergleich zeigt, dass zwei Systeme unterschiedliche Datenquellen nutzen und dennoch ähnliche Motive sichtbar machen, wird daraus ein stärkeres Konvergenzsignal. Wenn sie widersprechen, entsteht kein Fehler, sondern eine gute Reflexionsfrage.`,
    },
    {
      title: "Wann welcher Blickwinkel hilfreicher ist",
      body: `Für schnelle Orientierung kann eine klare Typologie hilfreich sein. Für Alltag, Beziehung und langfristige Entwicklung braucht es oft mehr Nuance. Astrakey nutzt Vergleiche deshalb nicht, um einen Gewinner zu bestimmen, sondern um den passenden Einsatz zu erklären: Was hilft beim ersten Aha-Moment, was bei Entscheidungen, was bei Beziehungsmustern und was bei tieferer Selbstreflexion?`,
    },
    {
      title: "So wird daraus ein persönlicher Aha-Moment",
      body: `Die Vergleichsseite beantwortet die Suchfrage. Die App beantwortet die persönliche Frage: Welche Seite des Vergleichs ist bei mir wirklich aktiv? Über das Onboarding entsteht zuerst ein kostenloser Einstieg in die Seelenkarte. Danach können Nutzer bewusst entscheiden, ob sie mehr Tiefe, Tagesimpulse, Beziehungsauswertungen oder bezahlte Modelle nutzen möchten.`,
    },
  ];
}

function comparisonFaq(comparison: (typeof comparisons)[number]) {
  return [
    {
      q: `Welches System ist bei ${comparison.title} besser?`,
      a: "Astrakey entscheidet das nicht pauschal. Systeme haben unterschiedliche Stärken. Entscheidend ist, welche Perspektive zur Frage passt und ob mehrere unabhängige Signale zusammenlaufen.",
    },
    {
      q: "Warum nutzt Astrakey überhaupt mehrere Systeme?",
      a: "Mehrere Systeme reduzieren die Abhängigkeit von einer einzelnen Symbolsprache. Wichtig ist dabei, verwandte Datenquellen nicht naiv doppelt zu zählen.",
    },
    {
      q: "Kann ich den Vergleich kostenlos auf mein Profil anwenden?",
      a: "Der Einstieg ins Profil ist kostenlos. Tiefere Ebenen und zusätzliche Auswertungen gehören zur bewussten Premium-Entscheidung.",
    },
  ];
}
