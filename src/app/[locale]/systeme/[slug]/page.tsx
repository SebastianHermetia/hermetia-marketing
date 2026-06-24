import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locales, siteUrl, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { AppCta } from "@/components/AppCta";
import { JsonLd, faqSchema, articleSchema, breadcrumbSchema } from "@/components/JsonLd";
import { systems, systemSlugs, getSystem, systemText } from "@/content/systems";
import { bookSearchUrl, bookText, getBooksForSystem } from "@/content/bookRecommendations";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) for (const slug of systemSlugs) params.push({ locale, slug });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const sys = getSystem(slug);
  if (!sys) return {};
  const c = systemText(sys, locale);
  return buildMetadata({ locale: locale as Locale, path: `${paths.systeme}/${slug}`, title: c.seoTitle, description: c.seoDescription });
}

export default async function SystemDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = raw as Locale;
  const sys = getSystem(slug);
  if (!sys) notFound();
  const t = getDictionary(locale);
  const c = systemText(sys, locale);
  const related = systems.filter((s) => s.slug !== slug).slice(0, 4);
  const books = getBooksForSystem(sys.slug);
  const pageUrl = `${siteUrl}/${locale}${paths.systeme}/${slug}/`;
  const imageUrl = `${siteUrl}/images/art/${sys.art}`;
  const dataNeed =
    sys.slug === "big-five" ||
    sys.slug === "riasec" ||
    sys.slug === "chronotyp" ||
    sys.slug === "tcm-konstitution" ||
    sys.slug === "via-staerken" ||
    sys.slug === "spiral-dynamics" ||
    sys.slug === "sixteen-types"
      ? "Dieses System braucht ausdrückliche Selbstauskunft. Astrakey nutzt dafür eigene, lizenzsaubere Fragen oder bewusst bereitgestellte Werte. Ohne aktive Antwort wird daraus kein heimliches Profil abgeleitet."
      : sys.slug === "numerologie" || sys.slug === "lo-shu-grid" || sys.slug === "tarot-geburtskarten" || sys.slug === "cards-of-destiny"
        ? "Dieses System arbeitet vor allem mit Geburtsdatum und, wenn sinnvoll, mit dem Geburtsnamen. Astrakey erklärt, welche Angaben nötig sind und welche Aussagen auch ohne Namensdaten möglich bleiben."
        : "Dieses System nutzt vor allem Geburtsdatum, Geburtsort und, je nach Detailtiefe, die Geburtszeit. Astrakey kennzeichnet, welche Aussagen ohne exakte Uhrzeit stabil bleiben und welche vorsichtiger gelesen werden sollten.";
  const extendedFaq = [
    ...c.faq,
    {
      q: `Warum nutzt Astrakey ${c.name} nicht isoliert?`,
      a: `${c.name} ist eine wertvolle Perspektive, aber Astrakey liest Systeme nicht als einzelne Wahrheiten. Erst im Zusammenspiel mit anderen Quellen wird sichtbar, ob ein Thema mehrfach getragen wird oder nur eine Nuance bleibt.`,
    },
    {
      q: `Ist die Deutung von ${c.name} rechtlich geschützter Originaltext?`,
      a: "Nein. Astrakey verwendet eigene Erklärungen und eigene Deutungssprache. Geschützte Originaltexte, fremde Reportpassagen und proprietäre Fragebogenitems werden nicht übernommen.",
    },
    {
      q: `Kann ${c.name} eine Diagnose oder Beratung ersetzen?`,
      a: "Nein. Astrakey ist Inspiration zur Selbstreflexion. Die Inhalte ersetzen keine medizinische, psychologische, therapeutische, rechtliche oder finanzielle Beratung.",
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          faqSchema(extendedFaq),
          articleSchema({ headline: c.seoTitle, description: c.seoDescription, locale, url: pageUrl, about: c.name, image: imageUrl }),
          breadcrumbSchema([
            { name: "Astrakey", url: `${siteUrl}/${locale}/` },
            { name: t.nav.systeme, url: `${siteUrl}/${locale}${paths.systeme}/` },
            { name: c.name, url: pageUrl },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Bücher zu ${c.name}`,
            itemListElement: books.map((book, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Book",
                name: book.title,
                author: book.authors,
                inLanguage: book.languages.join(", "),
                url: bookSearchUrl(book, locale),
              },
            })),
          },
        ]}
      />
      <Header locale={locale} current="systeme" />

      {/* Header-Band mit Brand-Art */}
      <section className="relative">
        <div className="relative h-[260px] w-full overflow-hidden">
          <img src={`/images/art/${sys.art}`} alt={`${c.name} – Astrakey`} width={1400} height={520} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-aubergine/85 via-aubergine/45 to-aubergine/25" />
          <div className="absolute inset-0 flex items-end">
            <div className="wrap pb-7">
              <Link href={localePath(locale, paths.systeme)} className="text-[13px] text-gold-weich/80 no-underline hover:text-white">
                ← {t.nav.systeme}
              </Link>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-[34px] text-gold-weich" aria-hidden>{sys.glyph}</span>
                <div>
                  <h1 className="text-[clamp(28px,4vw,40px)] text-white">{c.name}</h1>
                  <p className="text-gold-weich/90">{c.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="wrap max-w-[800px]">
          <p className="lead">{c.intro}</p>

          <div className="mt-8 rounded-card border border-gold/30 bg-gold-weich/25 p-6">
            <span className="kicker">Kurz gesagt</span>
            <p className="mt-2 text-[18px] leading-relaxed text-aubergine">
              {c.name} ist bei Astrakey ein Baustein deiner Seelenkarte. Das System wird berechnet oder über einen Fragebogen erfasst, anschließend mit anderen Perspektiven verglichen und erst dann in eine warme, verständliche Deutung übersetzt.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-9">
            <div>
              <h2 className="text-[24px]">{c.whatTitle}</h2>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">{c.what}</p>
            </div>
            <div className="rounded-card border border-sand bg-creme-tief p-6">
              <span className="kicker">{c.howTitle}</span>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">{c.how}</p>
            </div>
            <div className="rounded-card border border-sand bg-white p-6 shadow-soft">
              <span className="kicker">Datenbasis</span>
              <h2 className="mt-2 text-[24px]">Welche Angaben Astrakey für {c.name} braucht</h2>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">{dataNeed}</p>
              <p className="muted mt-3 text-[16.5px] leading-relaxed">
                Wichtig ist die Trennung zwischen Berechnung und Deutung: Aus den Eingaben entstehen zuerst strukturierte Signale. Erst danach werden sie mit anderen Systemen verglichen und in verständliche Reflexionssprache übersetzt.
              </p>
            </div>
            <div>
              <h2 className="text-[24px]">{c.revealsTitle}</h2>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">{c.reveals}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="card">
                <span className="kicker">Stärken</span>
                <h2 className="mt-2 text-[23px]">Wofür {c.name} besonders nützlich ist</h2>
                <p className="muted mt-2 text-[16.5px] leading-relaxed">
                  Dieses System gibt deinem Profil eine eigene Blickrichtung. Es kann Muster sichtbar machen, die in anderen Systemen weniger deutlich erscheinen, und liefert dadurch wertvolle Signale für Astrakeys Konvergenz-Engine. Besonders hilfreich ist es, wenn seine Aussagen mit anderen unabhängigen Perspektiven zusammenfallen.
                </p>
              </div>
              <div className="card">
                <span className="kicker">Grenzen</span>
                <h2 className="mt-2 text-[23px]">Was {c.name} nicht leisten soll</h2>
                <p className="muted mt-2 text-[16.5px] leading-relaxed">
                  Kein einzelnes System sollte dich festlegen. Astrakey verwendet {c.name} nicht als Diagnose, Schicksalsurteil oder alleinige Wahrheit. Die Deutung bleibt eine Einladung zur Selbstreflexion und wird bewusst mit Datenschutz-, AI- und IP-Leitplanken formuliert.
                </p>
              </div>
            </div>
            <div className="rounded-card border border-sand bg-white p-6 shadow-soft">
              <span className="kicker">Konvergenz</span>
              <h2 className="mt-2 text-[24px]">Wie {c.name} mit anderen Systemen zusammenwirkt</h2>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">
                Astrakey fragt nicht nur, was {c.name} allein sagt. Die relevantere Frage ist, ob dieselben Themen auch in anderen Familien auftauchen: etwa in astrologischen Systemen, Zahlensystemen, Fragebögen oder körpernahen Typologien. Wenn mehrere unabhängige Quellen dasselbe Thema stützen, wird daraus ein stärkeres Kernthema deiner Seelenkarte.
              </p>
            </div>
            <div className="rounded-card border border-sand bg-white p-6 shadow-soft">
              <span className="kicker">Literatur</span>
              <h2 className="mt-2 text-[24px]">
                Bücher zu {c.name}
              </h2>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">
                Diese Empfehlungen helfen dir, die Tradition hinter diesem System besser zu verstehen. Die Links öffnen neutrale Buchsuchen, damit du Ausgaben und Anbieter selbst vergleichen kannst.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {books.map((book) => {
                  const text = bookText(book, locale);
                  return (
                    <article key={book.id} className="rounded-card border border-sand bg-creme-tief p-5">
                      <span className="chip chip-gold">{text.level}</span>
                      <h3 className="mt-4 text-[19px]">{book.title}</h3>
                      <p className="note mt-1">{book.authors} · {book.languages.join(", ")}</p>
                      <p className="muted mt-3 text-[14.5px] leading-relaxed">{text.description}</p>
                      <a className="note mt-4 inline-block font-semibold text-gold" href={bookSearchUrl(book, locale)} rel="nofollow noopener noreferrer" target="_blank">
                        Buch suchen →
                      </a>
                    </article>
                  );
                })}
              </div>
              <p className="note mt-4">
                Astrakey zeigt hier keine Preise oder Verfügbarkeit, weil sie sich ändern können. Bitte prüfe den verlinkten Anbieter vor dem Kauf.
              </p>
            </div>
            <div className="rounded-card border border-sand bg-creme-tief p-6">
              <span className="kicker">Beispiel, fiktiv</span>
              <h2 className="mt-2 text-[24px]">Wie eine Deutung klingen könnte</h2>
              <p className="muted mt-2 text-[16.5px] leading-relaxed">
                Eine fiktive Person sieht in {c.name} ein deutliches Motiv für innere Ausrichtung, zugleich zeigen andere Systeme mehr Ruhe, Erdung oder Beziehungssensibilität. Astrakey würde daraus nicht ableiten, wer diese Person wirklich ist. Stattdessen würde die App fragen: Wo hilft dir dieses Motiv im Alltag, wo wird es zu eng, und welche anderen Signale gleichen es aus?
              </p>
            </div>
            <div>
              <span className="kicker">Pro und Contra</span>
              <h2 className="mt-2 text-[24px]">{c.name} verantwortungsvoll lesen</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-card border border-sand bg-white p-5 shadow-soft">
                  <h3 className="text-[19px]">Pro</h3>
                  <ul className="mt-3 flex list-none flex-col gap-2 text-[15.5px] leading-relaxed text-pflaume/90">
                    <li>Hilft, eine spezifische Perspektive auf Profilthemen zu öffnen.</li>
                    <li>Wird stärker, wenn unabhängige Systeme ähnliche Motive zeigen.</li>
                    <li>Kann konkrete Reflexionsfragen für Seelenkarte, Journaling und Companion liefern.</li>
                  </ul>
                </div>
                <div className="rounded-card border border-sand bg-white p-5 shadow-soft">
                  <h3 className="text-[19px]">Contra</h3>
                  <ul className="mt-3 flex list-none flex-col gap-2 text-[15.5px] leading-relaxed text-pflaume/90">
                    <li>Kann missverständlich werden, wenn es isoliert oder absolut gelesen wird.</li>
                    <li>Braucht klare Grenzen bei Gesundheit, Beziehung, Therapie und Vorhersage.</li>
                    <li>Darf keine geschützten Originaltexte, fremden Fragebogenitems oder fremden Reportpassagen übernehmen.</li>
                  </ul>
                </div>
              </div>
            </div>
            <AppCta
              locale={locale}
              title={`Sieh, ob ${c.name} bei dir ein Kernthema stützt.`}
              text="Starte dein Profil kostenlos und entdecke, welche Systeme bei dir wirklich zusammenlaufen."
              source={`system-${sys.slug}-midpage`}
            />
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="mb-2 text-[24px]">{t.home.faq.kicker}</h2>
            <Faq items={extendedFaq} />
          </div>

          {/* CTA */}
          <div className="mt-12">
            <AppCta locale={locale} title={t.systeme.cta.title} text={t.systeme.cta.lead} source={`system-${sys.slug}-final`} />
          </div>
        </div>
      </section>

      {/* Verwandte Systeme */}
      <section className="bg-creme-tief py-16">
        <div className="wrap">
          <h2 className="mb-6 text-center text-[24px]">{t.systeme.moreKicker}</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {related.map((r) => {
              const rc = systemText(r, locale);
              return (
                <Link key={r.slug} href={localePath(locale, `${paths.systeme}/${r.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
                  <div className="ic" aria-hidden>{r.glyph}</div>
                  <h3 className="text-[18px]">{rc.name}</h3>
                  <p className="note mt-1">{rc.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}

