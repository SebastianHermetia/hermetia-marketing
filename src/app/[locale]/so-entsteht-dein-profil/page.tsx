import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, paths, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const methodFaq = [
  {
    q: "Wie entsteht mein Astrakey-Profil?",
    a: "Astrakey berechnet zuerst die technischen Grundlagen aus Geburtsdaten, Ort, Zeit und optionalen Selbstauskünften. Danach werden Systemsignale in Themen übersetzt, in Familien gruppiert und über die Konvergenz-Engine verdichtet.",
  },
  {
    q: "Was macht die Konvergenz-Engine anders als eine normale Auswertung?",
    a: "Sie zählt Systeme nicht einfach zusammen. Verwandte Quellen werden gebündelt, damit ähnliche Daten nicht doppelt als unabhängige Bestätigung erscheinen. Stark wird ein Thema erst, wenn mehrere unterschiedliche Perspektiven darauf zeigen.",
  },
  {
    q: "Welche Rolle spielt AI in Astrakey?",
    a: "AI formuliert verständliche Deutungstexte auf Grundlage berechneter Fakten und Themen. Sie entscheidet nicht frei, welche Themen wichtig sind, und ersetzt keine medizinische, psychologische oder therapeutische Beratung.",
  },
  {
    q: "Warum fragt Astrakey nach Selbstauskunft?",
    a: "Geburtsbasierte Systeme kennen den Alltag eines Menschen nicht. Selbstauskünfte erden die Deutung und helfen, Symbolsprache mit erlebtem Verhalten, Interessen, Energie und Rhythmus zu verbinden.",
  },
  {
    q: "Kann ich nachvollziehen, woher eine Aussage kommt?",
    a: "Ja. Astrakey zeigt, welche Systemfamilien und Datenarten ein Kernthema tragen und wo Unsicherheit besteht.",
  },
];

const methodDeepDives = [
  {
    title: "Datenbasis: Was Astrakey wirklich verwendet",
    text: "Ein Profil beginnt nicht mit einer fertigen Deutung, sondern mit Eingaben: Geburtsdatum, Geburtsort, optional Geburtszeit, Spracheinstellung und ergänzende Selbstauskunft. Daraus entstehen technische Berechnungen und vorsichtige Themenmarker. Rohdaten, abgeleitete spirituelle Inhalte und Journalnotizen bleiben klar getrennte Datenbereiche.",
  },
  {
    title: "Systemfamilien: Warum nicht alles gleich zählt",
    text: "Westliche Astrologie, Fixsterne und Astrokartografie nutzen verwandte Himmelsdaten. Human Design und Gene Keys teilen Grundlagen. Numerologie, Tarot-Geburtskarten und Kabbalah arbeiten mit Datum oder Name. Astrakey gruppiert solche Nähe, damit eine Aussage nicht stärker wirkt, nur weil dieselbe Quelle mehrfach übersetzt wurde.",
  },
  {
    title: "Deutung: Von Signal zu verständlicher Sprache",
    text: "Aus einzelnen Signalen werden keine absoluten Behauptungen. Astrakey formuliert vorsichtig: als Tendenz, Frage, Muster oder Einladung zur Reflexion. So bleibt die Erfahrung persönlich und warm, ohne Menschen festzulegen oder professionelle Beratung zu ersetzen.",
  },
];

const qualityGates = [
  "Reproduzierbare Berechnung statt zufälliger Deutung.",
  "Trennung von Systemfamilien statt Doppelzählung.",
  "Kennzeichnung von Unsicherheit bei fehlender Geburtszeit.",
  "Eigene Sprache statt kopierter geschützter Systemtexte.",
  "AI-Transparenz und klare Grenze zu Diagnose, Therapie und Vorhersage.",
];

const graphics = [
  {
    src: "/graphics/convergence/abb1-familien-modell.svg",
    alt: "Systemfamilien im Astrakey Profilprozess",
    caption: "Systemfamilien helfen, verwandte Quellen zu bündeln und echte unabhängige Bestätigung sichtbar zu machen.",
  },
  {
    src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
    alt: "Algorithmus-Funnel von Rohdaten zu Kernthemen",
    caption: "Aus Eingaben werden berechnete Signale, daraus Themenmarker, Familienbelege und schließlich lesbare Kernthemen.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return buildMetadata({ locale: locale as Locale, path: paths.methodik, title: t.methodik.seoTitle, description: t.methodik.seoDescription });
}

export default async function MethodikPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const p = t.methodik;
  const pageUrl = `${siteUrl}/${locale}${paths.methodik}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: p.seoTitle,
            description: p.seoDescription,
            locale,
            url: pageUrl,
            about: "Astrakey Methodik",
            image: `${siteUrl}/graphics/convergence/abb5-algorithmus-funnel.svg`,
          }),
          faqSchema(methodFaq),
          breadcrumbSchema([
            { name: "Astrakey", url: `${siteUrl}/${locale}/` },
            { name: "So entsteht dein Profil", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="methodik" />

      <section className="pb-7 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{p.kicker}</span>
          <h1 className="max-w-[720px] text-[clamp(32px,5vw,46px)]">{p.title}</h1>
          <p className="lead mt-4 max-w-[640px]">{p.lead}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "method-hero" })}>{t.cta.startFree}</a>
            <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.konvergenz)}>Konvergenz-Engine ansehen</a>
          </div>
        </div>
      </section>

      <section className="bg-creme-tief py-14">
        <div className="wrap grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="kicker">Kurzantwort</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Wie wird aus Daten ein persönliches Profil?</h2>
          </div>
          <p className="muted text-[17px] leading-[1.85]">
            Astrakey erstellt dein Profil in drei Schichten: Zuerst werden berechenbare Grundlagen erzeugt, dann erkennt die Konvergenz-Engine wiederkehrende Themen über Systemfamilien hinweg, anschließend werden diese Themen in verständliche Reflexionssprache übersetzt. Die Methode macht neugierig und bleibt nachvollziehbar.
          </p>
        </div>
      </section>

      {/* 3 Schritte */}
      <section className="pt-6">
        <div className="wrap max-w-[840px]">
          {p.steps.map((s, i) => (
            <div key={i} className={`card mb-5 ${i === 1 ? "border-gold" : ""}`}>
              <div className="grid items-center gap-4 md:grid-cols-[120px_1fr]">
                <div className="text-center font-serif text-[56px] text-gold">{s.n}</div>
                <div>
                  {s.tag ? <span className="chip chip-gold mb-2">{s.tag}</span> : null}
                  <h2 className="text-[26px]">{s.title}</h2>
                  <p className="muted mt-2">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="wrap">
          <div className="mb-9 max-w-[760px]">
            <span className="kicker">Methodik im Detail</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Drei Fragen, die Vertrauen schaffen.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Gute Methodik beantwortet nicht nur, was am Ende sichtbar wird. Sie erklärt, welche Daten genutzt werden, wie Signale gewichtet werden und welche Grenzen bewusst eingebaut sind.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {methodDeepDives.map((item) => (
              <article key={item.title} className="card">
                <h3 className="text-[23px]">{item.title}</h3>
                <p className="muted mt-3 text-[15.5px] leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Schichten */}
      <section className="bg-creme-tief py-20">
        <div className="wrap">
          <div className="mb-9 text-center">
            <span className="kicker">{p.layersKicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,32px)]">{p.layersTitle}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {p.layers.map((l, i) => (
              <div key={i} className="card">
                <span className="kicker">{l.label}</span>
                <h3 className="mt-1.5 text-xl">{l.title}</h3>
                <p className="muted">{l.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap">
          <div className="mb-8 text-center">
            <span className="kicker">Grafiken</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">So wird Konvergenz sichtbar.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {graphics.map((graphic) => (
              <figure key={graphic.src} className="m-0 rounded-card border border-sand bg-white p-4 shadow-soft">
                <img src={graphic.src} alt={graphic.alt} className="w-full rounded-[6px]" loading="lazy" />
                <figcaption className="muted mt-3 text-[14px] leading-relaxed">{graphic.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "method-graphics" })}>Meine Konvergenz sehen</a>
          </div>
        </div>
      </section>

      {/* KI tut / tut nicht */}
      <section className="py-20">
        <div className="wrap grid gap-5 md:grid-cols-2">
          <div className="card">
            <h3 className="text-[22px]"><span className="text-salbei-tief">✓</span> {p.aiDoTitle}</h3>
            <ul className="mt-3.5 flex list-none flex-col gap-2.5 text-[15px] text-pflaume/90">
              {p.aiDo.map((x, i) => <li key={i}>– {x}</li>)}
            </ul>
          </div>
          <div className="card">
            <h3 className="text-[22px]"><span className="text-altrosa-tief">✕</span> {p.aiDontTitle}</h3>
            <ul className="mt-3.5 flex list-none flex-col gap-2.5 text-[15px] text-pflaume/90">
              {p.aiDont.map((x, i) => <li key={i}>– {x}</li>)}
            </ul>
          </div>
        </div>
        <div className="wrap mt-8 text-center">
          <p className="note mx-auto max-w-[640px]">{p.privacyNote}</p>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <span className="kicker">Qualität und Grenzen</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Astrakey wirkt tief, ohne absolut zu sprechen.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Die Methode ist auf Vertrauen ausgelegt: nachvollziehbare Berechnung, vorsichtige Sprache, Datenschutz und eine klare Trennung zwischen Reflexion und Beratung. Genau diese Grenzen machen das Produkt glaubwürdiger.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "method-quality" })}>Profil nachvollziehbar starten</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.datenSicherheit)}>Daten und Sicherheit</a>
            </div>
          </div>
          <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
            <h3 className="text-[23px]">Qualitäts-Gates</h3>
            <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
              {qualityGates.map((gate) => <li key={gate}>✓ {gate}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap">
          <div className="mb-8 text-center">
            <span className="kicker">FAQ</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Häufige Fragen zur Astrakey Methodik</h2>
          </div>
          <Faq items={methodFaq} />
        </div>
      </section>

      <section className="bg-gradient-to-br from-aubergine to-pflaume py-20 text-center text-white">
        <div className="wrap">
          <h2 className="text-[clamp(26px,3.5vw,34px)] text-white">{p.cta.title}</h2>
          <p className="mx-auto my-4 max-w-[480px] text-[#e9dcf2]">{p.cta.lead}</p>
          <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "method-final" })}>{t.cta.startFree}</a>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
