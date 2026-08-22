import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { Faq } from "@/components/Faq";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ComparisonTable } from "@/components/ComparisonTable";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { systemsInComparison } from "@/content/cross-links";
import { getSystem, systemText } from "@/content/systems";
import { comparisons } from "@/content/marketing";
import { getComparisonDetail } from "@/content/comparisons";
import { tr } from "@/i18n/html-translations";
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
  // Die verglichenen Systeme bekommen ihre eigenen Detailseiten verlinkt — sonst
  // endet der Leser hier, obwohl beide Systeme ausfuehrliche Seiten haben.
  const relatedSystems = systemsInComparison(comparison.slug)
    .map((slug) => getSystem(slug))
    .filter((system): system is NonNullable<typeof system> => Boolean(system))
    .map((system) => {
      const text = systemText(system, locale);
      return { href: `${paths.systeme}/${system.slug}`, label: text.name, note: text.tagline };
    });

  // Seiten mit ausgearbeitetem Inhalt bekommen die vollstaendige Darstellung: Frage
  // als H1, Antwort direkt darunter, Vergleichstabelle, eigene Abschnitte,
  // Entscheidungshilfe und echte Folgefragen. Alle uebrigen bleiben bei der
  // frueheren Vorlage, bis sie ebenfalls ausgearbeitet sind.
  const detail = getComparisonDetail(comparison.slug);
  const faq = localizedFaq(locale, detail ? detail.faq : comparisonFaq(comparison));
  const url = `${siteUrl}/${locale}${paths.vergleiche}/${comparison.slug}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ headline: comparison.seoTitle, description: comparison.description, locale, url, about: comparison.title, image: `${siteUrl}/images/hermetia/celestial-layer-orbits.webp` }),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Astrakey", url: `${siteUrl}/${locale}/` },
            { name: tr(locale, "Vergleiche"), url: `${siteUrl}/${locale}${paths.vergleiche}/` },
            { name: tr(locale, comparison.title), url },
          ]),
        ]}
      />
      <Header locale={locale} current="vergleiche" />
      <article className="py-16">
        <div className="wrap max-w-[820px]">
          <Breadcrumbs locale={locale} items={[{ label: tr(locale, "Vergleiche"), href: paths.vergleiche }, { label: comparison.title }]} />
          <span className="kicker">{ui.comparison}</span>

          {detail ? (
            <>
              <h1 className="mt-3 text-[clamp(30px,4.6vw,44px)]">{tr(locale, detail.question)}</h1>
              {/* Die Kurzantwort steht bewusst vor allem anderen: Sie ist der Absatz,
                  den Suchmaschinen als Snippet und Antwortmaschinen als Zitat nehmen.
                  Deshalb muss sie ohne den Rest der Seite verstaendlich sein. */}
              <div className="mt-6 rounded-card border border-gold/30 bg-gold-weich/25 p-6">
                <span className="kicker">{tr(locale, "Kurz beantwortet")}</span>
                <p className="mt-2 text-[18px] leading-relaxed text-aubergine">{tr(locale, detail.answer)}</p>
              </div>

              <h2 className="mt-12 text-[clamp(24px,3vw,32px)]">{tr(locale, "Der Vergleich im Überblick")}</h2>
              <ComparisonTable
                locale={locale}
                columns={detail.columns}
                rows={detail.table.map((row) => ({ aspect: tr(locale, row.aspect), a: tr(locale, row.a), b: tr(locale, row.b) }))}
                caption={tr(locale, detail.question)}
              />

              <div className="mt-12 flex flex-col gap-10">
                {detail.sections.map((section, idx) => (
                  <section key={section.title}>
                    <h2 className="text-[clamp(24px,3vw,32px)]">{tr(locale, section.title)}</h2>
                    <p className="muted mt-3 text-[17px] leading-[1.9]">{tr(locale, section.body)}</p>
                    {idx === 1 ? (
                      <div className="mt-8">
                        <AppCta locale={locale} title="Sieh den Vergleich in deinem eigenen Profil." text="Astrakey zeigt nicht nur, wie Systeme sich abstrakt unterscheiden, sondern welche Perspektiven bei dir tatsächlich zusammenwirken." source={`comparison-${comparison.slug}-inline`} />
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>

              <section className="mt-12">
                <h2 className="text-[clamp(24px,3vw,32px)]">{tr(locale, "Was passt in welcher Situation?")}</h2>
                <div className="mt-5 flex flex-col gap-4">
                  {detail.decide.map((entry) => (
                    <div key={entry.when} className="rounded-card border border-sand bg-white p-5 shadow-soft">
                      <h3 className="text-[17px] leading-snug">{tr(locale, entry.when)}</h3>
                      <p className="mt-2 text-[15.5px] font-semibold text-gold">{tr(locale, entry.pick)}</p>
                      <p className="muted mt-1 text-[15.5px] leading-relaxed">{tr(locale, entry.why)}</p>
                    </div>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <>
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
              <div className="mt-10 flex flex-col gap-10">
                {comparisonSections(comparison).map((section, idx) => (
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
            </>
          )}

          <section className="mt-12 rounded-card border border-altrosa/25 bg-altrosa/10 p-6">
            <h2 className="text-[clamp(22px,2.6vw,28px)]">{tr(locale, "Grenzen dieses Vergleichs")}</h2>
            <p className="muted mt-3 text-[16.5px] leading-[1.85]">
              {tr(
                locale,
                "Keines dieser Systeme ist wissenschaftlich validiert, und keines ersetzt Diagnose, Beratung oder Therapie. Die Texte hier sind eigene Astrakey-Erklärungen und übernehmen keine geschützten Reportpassagen oder Fragebogenitems. Wenn eine Beschreibung nicht passt, ist auch das eine brauchbare Information.",
              )}
            </p>
          </section>

          <div className="mt-12">
            <h2 className="mb-4 text-[clamp(24px,3vw,32px)]">{ui.faq}</h2>
            <Faq items={faq} />
          </div>
          <div className="mt-10">
            <RelatedLinks locale={locale} heading="Systeme" links={relatedSystems} />
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
      body: `Für schnelle Orientierung kann eine klare Typologie hilfreich sein. Für Alltag, Beziehung und langfristige Entwicklung braucht es oft mehr Nuance. Astrakey nutzt Vergleiche deshalb nicht, um einen Gewinner zu bestimmen, sondern um den passenden Einsatz zu erklären: Was hilft beim ersten Resonanzmoment, was bei Entscheidungen, was bei Beziehungsmustern und was bei tieferer Selbstreflexion?`,
    },
    {
      title: "So wird daraus ein persönlicher Resonanzmoment",
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
