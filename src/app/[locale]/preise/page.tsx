import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildMetadata } from "@/lib/seo";
import { startUrl, paths, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, faqSchema, productSchema } from "@/components/JsonLd";

const decisionSteps = [
  {
    label: "1",
    title: "Erst kostenlos Resonanz prüfen",
    text: "Hermetia wirkt nur dann wertvoll, wenn die erste Seelenkarte persönlich anschließt. Deshalb beginnt die Reise ohne Kreditkarte: Profil starten, erste Kernthemen sehen, Sprache testen.",
  },
  {
    label: "2",
    title: "Dann Tiefe nach Bedarf wählen",
    text: "Wenn du mehr Ebenen, Tagesimpulse, Journaling und dein Vollprofil-Buch nutzen möchtest, ist Begleitung der natürliche nächste Schritt. Der Kaufgrund ist Tiefe, nicht künstlicher Druck.",
  },
  {
    label: "3",
    title: "Sensible Zusatzmodule bewusst freischalten",
    text: "Tiefe lohnt sich, wenn Beziehungsprofile, mehrere Profile oder Companion-Dialoge relevant werden. Gerade diese Module brauchen klare Einwilligung und transparente Grenzen.",
  },
];

const valueBlocks = [
  {
    title: "Warum 49 Euro pro Jahr plausibel sind",
    text: "Begleitung bündelt die Funktionen, die aus einem einmaligen Profil einen wiederkehrenden Reflexionsraum machen: alle Ebenen, tägliche Impulse, Journaling, Monatsreflexion, Profilverfeinerung und ein lesbares Vollprofil-Buch.",
  },
  {
    title: "Wann kostenlos reicht",
    text: "Kostenlos reicht, wenn du Hermetia kennenlernen, die erste Seelenkarte sehen und prüfen willst, ob die Tonalität resoniert. Niemand muss sofort upgraden, um einen echten Eindruck zu bekommen.",
  },
  {
    title: "Wann Tiefe sinnvoll wird",
    text: "Tiefe ist für Nutzer gedacht, die Hermetia nicht nur für sich selbst, sondern auch für Beziehungsmuster, mehrere Profile, Companion-Dialoge und vertiefte Jahres- oder Entwicklungsfragen nutzen möchten.",
  },
];

const comparisonRows = [
  ["Funktion", "Entdecken", "Begleitung", "Tiefe"],
  ["Seelenkarte", "Enthalten", "Vollständig", "Vollständig"],
  ["Kernthemen und Ebenen", "Auszug und Vorschau", "Alle Ebenen", "Alle Ebenen plus Vertiefungen"],
  ["Tagesimpulse", "Schnupperphase", "Regelmäßig", "Regelmäßig plus erweiterte Deutung"],
  ["Journaling und Rückblick", "Basis oder Vorschau", "Enthalten", "Erweitert"],
  ["Vollprofil-Buch", "Nicht vollständig", "PDF enthalten", "PDF plus mehr Profile"],
  ["Beziehungsprofile", "Nicht enthalten", "Nicht enthalten oder begrenzt", "Enthalten mit Einwilligung"],
];

const trustNotes = [
  "Keine Kreditkarte im kostenlosen Einstieg.",
  "Jahrespreis wird transparent vor dem Kauf gezeigt.",
  "Kündigung über das Profil, kein versteckter Prozess.",
  "Digitale Inhalte, Widerruf und Leistungsbeginn werden rechtlich sauber erklärt.",
];

const priceTruthRows = [
  ["Begleitung", "49 € / Jahr", "ca. 4,08 € / Monat", "rund 13 Cent am Tag"],
  ["Tiefe", "99 € / Jahr", "ca. 8,25 € / Monat", "rund 27 Cent am Tag"],
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return buildMetadata({ locale: locale as Locale, path: paths.preise, title: t.preise.seoTitle, description: t.preise.seoDescription });
}

export default async function PreisePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const p = t.preise;
  const pageUrl = `${siteUrl}/${locale}${paths.preise}/`;
  const offers = p.tiers.map((tier) => ({ name: tier.name, price: tier.price.match(/\d+/)?.[0] ?? "0" }));

  return (
    <>
      <JsonLd data={[faqSchema(p.faq), productSchema({ name: "Hermetia", description: p.seoDescription, url: pageUrl, offers })]} />
      <Header locale={locale} current="preise" />

      <section className="pb-7 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{p.kicker}</span>
          <h1 className="max-w-[680px] text-[clamp(32px,5vw,46px)]">{p.title}</h1>
          <p className="lead mt-4">{p.lead}</p>
          <div className="mt-6 inline-flex rounded-pill bg-creme-tief p-1.5 text-sm font-semibold">
            <span className="rounded-pill bg-white px-[18px] py-2 text-aubergine shadow-soft">{p.toggleYear}</span>
            <span className="px-[18px] py-2 text-[#8a7f93]">{p.toggleMonth}</span>
          </div>
          <p className="note mt-5 max-w-[620px]">
            Empfehlung: Starte kostenlos, prüfe deine erste Seelenkarte und wähle ein bezahltes Modell erst, wenn du mehr Tiefe wirklich nutzen möchtest.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="pt-6">
        <div className="wrap">
          <div className="grid items-start gap-5 md:grid-cols-3">
            {p.tiers.map((tier, i) => (
              <div key={i} className={`card relative ${tier.featured ? "border-2 border-gold md:-translate-y-2" : ""}`}>
                {tier.featured ? (
                  <span className="chip chip-gold absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">{p.popular}</span>
                ) : null}
                <span className="kicker">{tier.name}</span>
                <p className="my-1.5 font-serif text-[40px] leading-none">
                  {tier.price}
                  {tier.per ? <span className="muted font-sans text-base"> {tier.per}</span> : null}
                </p>
                <p className="note">{tier.note}</p>
                <a className={`btn ${tier.featured ? "btn-primary" : "btn-ghost"} my-5 w-full`} href={startUrl(locale, { source: `pricing-tier-${i + 1}` })}>{tier.cta}</a>
                <ul className="flex list-none flex-col gap-2.5 text-[14.5px]">
                  {tier.features.map((f, k) => <li key={k}>✓ {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="note mt-6 text-center">{p.smallprint}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="wrap grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="kicker">Preiswahrheit</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Was bedeutet der Jahrespreis im Alltag?</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Hermetia rechnet Jahrespreise offen herunter, ohne daraus ein künstlich kleines Versprechen zu machen. Vor dem Kauf zählt immer die Bestellübersicht in der App: Dort stehen Preis, Laufzeit, Zahlungsart, Leistungsbeginn und Kündigung verbindlich.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-integrity" })}>Preis prüfen und starten</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.widerruf)}>Widerruf lesen</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-sand bg-white shadow-soft">
            {priceTruthRows.map(([plan, yearly, monthly, daily], index) => (
              <div key={plan} className={`grid gap-3 p-4 text-[14.5px] md:grid-cols-4 ${index ? "border-t border-sand" : "bg-creme-tief font-semibold text-aubergine"}`}>
                <span>{plan}</span>
                <span>{yearly}</span>
                <span>{monthly}</span>
                <span>{daily}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap">
          <div className="mb-9 max-w-[760px]">
            <span className="kicker">Entscheidungshilfe</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Welches Modell passt zu welchem Moment?</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Die Preis-Seite soll nicht drängen. Sie soll erklären, wann der kostenlose Einstieg genügt und wann ein bezahltes Modell echten Mehrwert schafft. So wird der Wechsel in die App nachvollziehbar und vertrauensvoll.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {decisionSteps.map((step) => (
              <article key={step.title} className="card">
                <span className="chip w-fit">Schritt {step.label}</span>
                <h3 className="mt-4 text-[23px]">{step.title}</h3>
                <p className="muted mt-3 text-[15.5px] leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-decision" })}>Kostenlos prüfen</a>
            <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.freePremium)}>Kostenlos vs. Premium</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="kicker">Vergleich</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Was öffnet sich in welchem Tarif?</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Nutzer müssen nicht alle Featuredetails auswendig lesen. Entscheidend ist die Logik: kostenlos zeigt Resonanz, Begleitung öffnet die fortlaufende Praxis, Tiefe ergänzt sensible Zusatzmodule.
            </p>
            <div className="mt-7">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-comparison" })}>Mit meinem Profil starten</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-sand bg-white shadow-soft">
            {comparisonRows.map(([feature, free, guidance, depth], index) => (
              <div key={feature} className={`grid gap-3 p-4 text-[14.5px] md:grid-cols-[1.1fr_.9fr_.9fr_.9fr] ${index ? "border-t border-sand" : "bg-creme-tief font-semibold text-aubergine"}`}>
                <span>{feature}</span>
                <span>{free}</span>
                <span>{guidance}</span>
                <span>{depth}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-aubergine py-16 text-white">
        <div className="wrap grid gap-5 lg:grid-cols-3">
          {valueBlocks.map((block) => (
            <article key={block.title} className="rounded-card border border-white/15 bg-white/8 p-7">
              <h2 className="text-[24px] text-white">{block.title}</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-[#e9dcf2]">{block.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Vertrauen */}
      <section className="my-14 bg-creme-tief py-14">
        <div className="wrap grid gap-5 text-center md:grid-cols-3">
          {p.trust.map((tr, i) => (
            <div key={i}>
              <div className="ic mx-auto" aria-hidden>{tr.icon}</div>
              <h3 className="text-[19px]">{tr.title}</h3>
              <p className="muted">{tr.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
          <div>
            <span className="kicker">Fairness und Grenzen</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Ein guter Kaufgrund ist Klarheit, nicht Angst.</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">
              Hermetia soll bezahlte Modelle verkaufen, aber ohne FOMO, Schicksalsdruck oder Heilsversprechen. Die Tarife erklären Tiefe, Komfort und Begleitung. Sie ersetzen keine Therapie, keine medizinische Beratung und keine sichere Zukunftsaussage.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-fairness" })}>Fair starten</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.datenSicherheit)}>Daten und Sicherheit</a>
            </div>
          </div>
          <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
            <h3 className="text-[23px]">Vor dem Kauf wichtig</h3>
            <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
              {trustNotes.map((note) => <li key={note}>✓ {note}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12">
        <div className="wrap">
          <div className="mb-7 text-center">
            <span className="kicker">{p.faqKicker}</span>
            <h2 className="mt-2 text-[clamp(24px,3.5vw,32px)]">{p.faqTitle}</h2>
          </div>
          <Faq items={p.faq} />
        </div>
      </section>

      <section className="pb-20 text-center">
        <div className="wrap">
          <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-final" })}>{p.cta}</a>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
