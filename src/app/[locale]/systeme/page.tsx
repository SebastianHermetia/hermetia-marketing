import type { Metadata } from "next";
import Link from "next/link";
import { type Locale, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, localePath, paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/components/JsonLd";
import { systems, systemText } from "@/content/systems";
import { bookSearchUrl, bookText, featuredBooks } from "@/content/bookRecommendations";

type SystemSlug = (typeof systems)[number]["slug"];

const systemFamilies: { title: string; text: string; slugs: SystemSlug[] }[] = [
  {
    title: "Geburtsdaten und Himmelsrhythmus",
    text: "Systeme, die Zeit, Ort und Himmelspositionen als Symbolsprache nutzen. Sie sind präzise berechenbar, aber nicht als Vorhersage gedacht.",
    slugs: ["astrologie", "human-design", "gene-keys", "bazi-vier-saeulen", "drakonisches-horoskop", "astrokartografie"],
  },
  {
    title: "Zahlen, Karten und Archetypen",
    text: "Systeme, die Geburtsdatum, Name oder Symbolkarten in wiederkehrende Motive übersetzen. Hermetia nutzt dafür eigene Deutungssprache.",
    slugs: ["numerologie", "lo-shu-grid", "tarot-geburtskarten", "cards-of-destiny", "oracle-cards", "sabian-symbols"],
  },
  {
    title: "Selbstauskunft und psychologische Erdung",
    text: "Modelle, die Alltag, Verhalten, Interessen und Werte einbeziehen. Sie helfen, spirituelle Aussagen praktischer und weniger schwebend zu machen.",
    slugs: ["big-five", "riasec", "via-staerken", "sixteen-types", "spiral-dynamics", "enneagramm"],
  },
  {
    title: "Rhythmus, Körpernähe und Alltag",
    text: "Perspektiven für Energie, Tagesrhythmus, Konstitution und persönliche Begleitung. Sie bleiben Reflexionsmodelle, nicht medizinische Diagnostik.",
    slugs: ["chronotyp", "tcm-konstitution", "ayurveda-dosha", "persoenliches-jahr", "nine-star-ki", "mahabote"],
  },
];

const systemQuestions = [
  "Welche 31 Systeme nutzt Hermetia?",
  "Warum reicht ein einzelnes System selten aus?",
  "Welche Systeme brauchen eine genaue Geburtszeit?",
  "Wie verhindert Hermetia Doppelzählung verwandter Quellen?",
  "Welche Systeme basieren auf Selbstauskunft statt Geburtsdaten?",
];

const systemPrinciples = [
  "Berechnung und Deutung bleiben getrennt.",
  "Verwandte Systeme werden in Familien gruppiert.",
  "Fehlende Geburtszeit wird transparent markiert.",
  "Fragebögen erden spirituelle Aussagen mit Selbstauskunft.",
  "Hermetia verwendet eigene Texte, keine geschützten Deutungspassagen.",
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return buildMetadata({ locale: locale as Locale, path: paths.systeme, title: t.systeme.seoTitle, description: t.systeme.seoDescription });
}

export default async function SystemePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const p = t.systeme;
  const core = systems.filter((s) => s.core);
  const more = systems.filter((s) => !s.core);
  const books = featuredBooks();
  const pageUrl = `${siteUrl}/${locale}${paths.systeme}/`;
  const bySlug = new Map(systems.map((system) => [system.slug, system]));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: p.seoTitle,
            description: p.seoDescription,
            locale,
            url: pageUrl,
            about: "Hermetia Systeme",
            image: `${siteUrl}/graphics/convergence/abb1-familien-modell.svg`,
          }),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "Systeme", url: pageUrl },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: locale === "de" ? "Bücher zu den Hermetia-Systemen" : "Books about Hermetia systems",
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

      <section className="pb-8 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{p.kicker}</span>
          <h1 className="max-w-[720px] text-[clamp(32px,5vw,46px)]">{p.title}</h1>
          <p className="lead mt-4">{p.lead}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "systems-hero" })}>{t.cta.startFree}</a>
            <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.methodik)}>Methode verstehen</a>
          </div>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="kicker">Suchfragen</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Welche Systemfragen beantwortet Hermetia?</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Viele Menschen suchen zunächst nach einzelnen Systemen: Astrologie, Human Design, Gene Keys, Numerologie oder Enneagramm. Hermetia beantwortet diese Fragen, zeigt aber gleichzeitig, warum erst die Verbindung mehrerer Perspektiven wirklich interessant wird.
            </p>
          </div>
          <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
            <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
              {systemQuestions.map((question) => <li key={question}>✓ {question}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Konvergenz-Engine */}
      <section className="pt-4">
        <div className="wrap">
          <div className="rounded-card bg-gradient-to-br from-aubergine to-pflaume p-11 text-gold-weich">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="chip chip-gold">{p.convergence.tag}</span>
                <h2 className="my-3 text-[clamp(24px,3.5vw,32px)] text-white">{p.convergence.title}</h2>
                <p className="text-[17px] text-[#e9dcf2]">{p.convergence.text}</p>
              </div>
              <div className="flex justify-center">
                <svg viewBox="0 0 200 160" width="220" height="176" role="img" aria-label="Konvergenz">
                  <circle cx="80" cy="60" r="46" fill="rgba(201,139,155,.4)" stroke="#C98B9B" />
                  <circle cx="120" cy="60" r="46" fill="rgba(156,174,139,.4)" stroke="#9CAE8B" />
                  <circle cx="100" cy="98" r="46" fill="rgba(190,154,83,.4)" stroke="#BE9A53" />
                  <circle cx="100" cy="76" r="8" fill="#fff" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap">
          <div className="mb-9 max-w-[760px]">
            <span className="kicker">Systemfamilien</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">31 Systeme, aber nicht 31 Stimmen durcheinander.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Hermetia ordnet Systeme in Familien. So bleibt sichtbar, welche Systeme dieselbe Datenquelle teilen und welche Perspektiven wirklich unabhängig auf ein ähnliches Thema zeigen.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {systemFamilies.map((family) => (
              <article key={family.title} className="card">
                <h3 className="text-[24px]">{family.title}</h3>
                <p className="muted mt-3 text-[15.5px] leading-relaxed">{family.text}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {family.slugs.map((slug) => {
                    const system = bySlug.get(slug);
                    if (!system) return null;
                    const c = systemText(system, locale);
                    return (
                      <Link key={slug} href={localePath(locale, `${paths.systeme}/${slug}`)} className="chip no-underline">
                        {c.name}
                      </Link>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Kernsysteme */}
      <section className="py-20">
        <div className="wrap">
          <div className="mb-10 text-center">
            <span className="kicker">{p.coreKicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,34px)]">{p.coreTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {core.map((s) => {
              const c = systemText(s, locale);
              return (
                <Link key={s.slug} href={localePath(locale, `${paths.systeme}/${s.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
                  <div className="ic" aria-hidden>{s.glyph}</div>
                  <h3 className="mb-2 text-xl">{c.name}</h3>
                  <p className="muted">{c.tagline}.</p>
                  <span className="note mt-3 inline-block font-semibold text-gold">{t.cta.more} →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap grid items-start gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <span className="kicker">Erklärbarkeit</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">So bleibt Vielfalt verständlich.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Hermetia nutzt viele Systeme, aber nicht als Überwältigung. Jedes System liefert ein Signal. Erst Konvergenz, Datenqualität und vorsichtige Sprache entscheiden, ob daraus ein Kernthema, ein Nebenthema oder nur eine offene Frage wird.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "systems-explainability" })}>Meine Systeme berechnen</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.konvergenz)}>Konvergenz ansehen</a>
            </div>
          </div>
          <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
            <h3 className="text-[23px]">System-Gates</h3>
            <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
              {systemPrinciples.map((principle) => <li key={principle}>✓ {principle}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Weitere Systeme */}
      <section className="bg-creme-tief py-20">
        <div className="wrap">
          <div className="mb-9 text-center">
            <span className="kicker">{p.moreKicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,34px)]">{p.moreTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {more.map((s) => {
              const c = systemText(s, locale);
              return (
                <Link key={s.slug} href={localePath(locale, `${paths.systeme}/${s.slug}`)} className="card no-underline transition-transform hover:-translate-y-1">
                  <h3 className="text-[19px]">{c.name}</h3>
                  <p className="muted">{c.tagline}.</p>
                </Link>
              );
            })}
          </div>
          <p className="note mt-6 text-center">{p.note}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap grid gap-6 lg:grid-cols-2">
          <figure className="m-0 rounded-card border border-sand bg-white p-4 shadow-soft">
            <img src="/graphics/convergence/abb1-familien-modell.svg" alt="Systemfamilien der Hermetia Konvergenz-Engine" className="w-full rounded-[6px]" loading="lazy" />
            <figcaption className="muted mt-3 text-[14px] leading-relaxed">
              Systemfamilien verhindern, dass verwandte Quellen als unabhängige Bestätigung missverstanden werden.
            </figcaption>
          </figure>
          <figure className="m-0 rounded-card border border-sand bg-white p-4 shadow-soft">
            <img src="/graphics/convergence/abb5-algorithmus-funnel.svg" alt="Funnel von Systemsignalen zu Kernthemen" className="w-full rounded-[6px]" loading="lazy" />
            <figcaption className="muted mt-3 text-[14px] leading-relaxed">
              Aus Einzelsignalen entstehen erst vergleichbare Themenmarker und dann verständliche Kernthemen.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-creme-tief py-20">
        <div className="wrap">
          <div className="mb-9 max-w-[780px]">
            <span className="kicker">{locale === "de" ? "Weiterlesen" : "Further reading"}</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">
              {locale === "de" ? "Bücher, die die Systeme verständlicher machen." : "Books that help you understand the systems."}
            </h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              {locale === "de"
                ? "Diese Empfehlungen sind redaktionell ausgewählt, damit du Quellen, Traditionen und Perspektiven hinter den Hermetia-Systemen besser einordnen kannst."
                : "These recommendations are editorially selected to help you understand the sources, traditions and perspectives behind Hermetia's systems."}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => {
              const text = bookText(book, locale);
              return (
                <article key={book.id} className="card">
                  <span className="chip chip-gold">{text.level}</span>
                  <h3 className="mt-4 text-[21px]">{book.title}</h3>
                  <p className="note mt-1">{book.authors} · {book.languages.join(", ")}</p>
                  <p className="muted mt-3 text-[15.5px] leading-relaxed">{text.description}</p>
                  <a className="note mt-4 inline-block font-semibold text-gold" href={bookSearchUrl(book, locale)} rel="nofollow noopener noreferrer" target="_blank">
                    {locale === "de" ? "Buch suchen" : "Search book"} →
                  </a>
                </article>
              );
            })}
          </div>
          <p className="note mt-6 text-center">
            {locale === "de"
              ? "Preise und Verfügbarkeit werden hier nicht angezeigt, weil sie sich ändern können. Die Links öffnen eine neutrale Buchsuche."
              : "Prices and availability are not shown here because they can change. The links open a neutral book search."}
          </p>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap">
          <AppCta
            locale={locale}
            title="Die Systeme sind der Anfang. Deine Konvergenz ist der Aha-Moment."
            text="Starte kostenlos und sieh, welche Perspektiven bei dir wirklich zusammenlaufen."
            source="systems-convergence"
          />
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="wrap">
          <h2 className="text-[clamp(26px,3.5vw,34px)]">{p.cta.title}</h2>
          <p className="lead mx-auto my-4 max-w-[520px]">{p.cta.lead}</p>
          <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "systems-final" })}>{t.cta.startFree}</a>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
