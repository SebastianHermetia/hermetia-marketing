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

export function generateStaticParams() {
  return locales.flatMap((locale) => comparisons.map((comparison) => ({ locale, slug: comparison.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) return {};
  return buildMetadata({ locale: locale as Locale, path: `${paths.vergleiche}/${slug}`, title: comparison.seoTitle, description: comparison.description });
}

export default async function ComparisonPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const comparison = comparisons.find((c) => c.slug === slug);
  if (!comparison) notFound();
  const sections = comparisonSections(comparison);
  const faq = comparisonFaq(comparison);
  return (
    <>
      <JsonLd data={[articleSchema({ headline: comparison.seoTitle, description: comparison.description, locale, url: `${siteUrl}/${locale}${paths.vergleiche}/${comparison.slug}/`, about: comparison.title, image: `${siteUrl}/images/hermetia/celestial-layer-orbits.png` }), faqSchema(faq)]} />
      <Header locale={locale} current="vergleiche" />
      <article className="py-16">
        <div className="wrap max-w-[820px]">
          <span className="kicker">Vergleich</span>
          <h1 className="mt-3 text-[clamp(32px,5vw,46px)]">{comparison.title}</h1>
          <p className="lead mt-5">{comparison.description}</p>
          <div className="my-10 rounded-card border border-sand bg-white p-6 shadow-soft">
            <p className="muted text-[17px] leading-[1.9]">{comparison.body}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-salbei/25 bg-salbei/10 p-5">
              <span className="kicker">Stärken</span>
              <p className="muted mt-2 leading-relaxed">Der Vergleich macht sichtbar, welche Perspektive besonders gut für Struktur, Sprache, Timing oder Alltagstauglichkeit geeignet ist.</p>
            </div>
            <div className="rounded-card border border-altrosa/25 bg-altrosa/10 p-5">
              <span className="kicker">Grenzen</span>
              <p className="muted mt-2 leading-relaxed">Keines der Systeme sollte allein über eine Person entscheiden. Hermetia nutzt Vergleiche als Orientierung, nicht als endgültiges Urteil.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-10">
            {sections.map((section, idx) => (
              <section key={section.title}>
                <h2 className="text-[clamp(24px,3vw,32px)]">{section.title}</h2>
                <p className="muted mt-3 text-[17px] leading-[1.9]">{section.body}</p>
                {idx === 1 ? (
                  <div className="mt-8">
                    <AppCta locale={locale} title="Sieh den Vergleich in deinem eigenen Profil." text="Hermetia zeigt nicht nur, wie Systeme sich abstrakt unterscheiden, sondern welche Perspektiven bei dir tatsächlich zusammenwirken." source={`comparison-${comparison.slug}-inline`} />
                  </div>
                ) : null}
              </section>
            ))}
          </div>
          <div className="mt-12">
            <h2 className="mb-4 text-[clamp(24px,3vw,32px)]">Häufige Fragen</h2>
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
      body: `${comparison.title} ist nicht nur ein Vergleich zweier Begriffe. Entscheidend ist, welche Art von Signal beide Seiten liefern: Manche Systeme sind rechnerisch aus Geburtsdaten abgeleitet, andere beruhen auf Selbstauskunft, wieder andere sind symbolische Reflexionsmodelle. Hermetia trennt diese Quellen, damit ein stark klingendes Ergebnis nicht automatisch als stärkerer Beweis wirkt.`,
    },
    {
      title: "Warum Hermetia beide Perspektiven verbindet",
      body: `Ein einzelnes System kann sehr treffend wirken, bleibt aber in seiner eigenen Sprache. Hermetia prüft deshalb, ob Themen aus verschiedenen Familien wiederkehren. Wenn der Vergleich zeigt, dass zwei Systeme unterschiedliche Datenquellen nutzen und dennoch ähnliche Motive sichtbar machen, wird daraus ein stärkeres Konvergenzsignal. Wenn sie widersprechen, entsteht kein Fehler, sondern eine gute Reflexionsfrage.`,
    },
    {
      title: "Wann welcher Blickwinkel hilfreicher ist",
      body: `Für schnelle Orientierung kann eine klare Typologie hilfreich sein. Für Alltag, Beziehung und langfristige Entwicklung braucht es oft mehr Nuance. Hermetia nutzt Vergleiche deshalb nicht, um einen Gewinner zu bestimmen, sondern um den passenden Einsatz zu erklären: Was hilft beim ersten Aha-Moment, was bei Entscheidungen, was bei Beziehungsmustern und was bei tieferer Selbstreflexion?`,
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
      a: "Hermetia entscheidet das nicht pauschal. Systeme haben unterschiedliche Stärken. Entscheidend ist, welche Perspektive zur Frage passt und ob mehrere unabhängige Signale zusammenlaufen.",
    },
    {
      q: "Warum nutzt Hermetia überhaupt mehrere Systeme?",
      a: "Mehrere Systeme reduzieren die Abhängigkeit von einer einzelnen Symbolsprache. Wichtig ist dabei, verwandte Datenquellen nicht naiv doppelt zu zählen.",
    },
    {
      q: "Kann ich den Vergleich kostenlos auf mein Profil anwenden?",
      a: "Der Einstieg ins Profil ist kostenlos. Tiefere Ebenen und zusätzliche Auswertungen können später Teil eines bezahlten Modells sein.",
    },
  ];
}
