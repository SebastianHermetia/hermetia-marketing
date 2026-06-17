import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizeCopy } from "@/i18n/localized-content";
import { buildMetadata } from "@/lib/seo";
import { startUrl, paths, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, faqSchema, productSchema } from "@/components/JsonLd";

const pricingPageCopy = {
  de: {
    recommendation:
      "Empfehlung: Starte kostenlos, prüfe deine erste Seelenkarte und wähle ein bezahltes Modell erst, wenn du mehr Tiefe wirklich nutzen möchtest.",
    priceTruthKicker: "Preiswahrheit",
    priceTruthTitle: "Was bedeutet der Jahrespreis im Alltag?",
    priceTruthText:
      "Hermetia rechnet Jahrespreise offen herunter, ohne daraus ein künstlich kleines Versprechen zu machen. Vor dem Kauf zählt immer die Bestellübersicht in der App: Dort stehen Preis, Laufzeit, Zahlungsart, Leistungsbeginn und Kündigung verbindlich.",
    priceTruthCta: "Preis prüfen und starten",
    withdrawalCta: "Widerruf lesen",
    priceTruthRows: [
      ["Begleitung", "49 € / Jahr", "ca. 4,08 € / Monat", "rund 13 Cent am Tag"],
      ["Tiefe", "99 € / Jahr", "ca. 8,25 € / Monat", "rund 27 Cent am Tag"],
    ],
    decisionKicker: "Entscheidungshilfe",
    decisionTitle: "Welches Modell passt zu welchem Moment?",
    decisionText:
      "Du siehst zuerst, wann der kostenlose Einstieg genügt und ab welchem Moment ein bezahltes Modell echten Mehrwert schafft. So bleibt der Wechsel in die App nachvollziehbar und vertrauensvoll.",
    stepLabel: "Schritt",
    decisionPrimaryCta: "Kostenlos prüfen",
    decisionSecondaryCta: "Kostenlos vs. Premium",
    decisionSteps: [
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
    ],
    comparisonKicker: "Vergleich",
    comparisonTitle: "Was öffnet sich in welchem Tarif?",
    comparisonText:
      "Du musst nicht jedes Featuredetail auswendig kennen. Entscheidend ist die Logik: Kostenlos zeigt Resonanz, Begleitung öffnet die fortlaufende Praxis, Tiefe ergänzt sensible Zusatzmodule.",
    comparisonCta: "Mit meinem Profil starten",
    comparisonRows: [
      ["Funktion", "Entdecken", "Begleitung", "Tiefe"],
      ["Seelenkarte", "Enthalten", "Vollständig", "Vollständig"],
      ["Kernthemen und Ebenen", "Auszug und Vorschau", "Alle Ebenen", "Alle Ebenen plus Vertiefungen"],
      ["Tagesimpulse", "Schnupperphase", "Regelmäßig", "Regelmäßig plus erweiterte Deutung"],
      ["Journaling und Rückblick", "Basis oder Vorschau", "Enthalten", "Erweitert"],
      ["Vollprofil-Buch", "Nicht vollständig", "PDF enthalten", "PDF plus mehr Profile"],
      ["Beziehungsprofile", "Nicht enthalten", "Nicht enthalten oder begrenzt", "Enthalten mit Einwilligung"],
    ],
    valueBlocks: [
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
    ],
    fairnessKicker: "Fairness und Grenzen",
    fairnessTitle: "Ein guter Kaufgrund ist Klarheit, nicht Angst.",
    fairnessText:
      "Bezahlte Modelle stehen bei Hermetia für mehr Tiefe, Komfort und Begleitung, nicht für FOMO, Schicksalsdruck oder Heilsversprechen. Sie ersetzen keine Therapie, keine medizinische Beratung und keine sichere Zukunftsaussage.",
    fairnessCta: "Fair starten",
    dataCta: "Daten und Sicherheit",
    beforePurchaseTitle: "Vor dem Kauf wichtig",
    trustNotes: [
      "Keine Kreditkarte im kostenlosen Einstieg.",
      "Jahrespreis wird transparent vor dem Kauf gezeigt.",
      "Kündigung über das Profil, kein versteckter Prozess.",
      "Digitale Inhalte, Widerruf und Leistungsbeginn werden rechtlich sauber erklärt.",
    ],
  },
  en: {
    recommendation:
      "Recommendation: start free, test your first soul map and choose a paid plan only when you genuinely want more depth.",
    priceTruthKicker: "Price clarity",
    priceTruthTitle: "What does the yearly price mean day to day?",
    priceTruthText:
      "Hermetia breaks yearly prices down openly without turning them into an artificially tiny promise. Before purchase, the in-app order summary is binding: it shows price, term, payment method, service start and cancellation clearly.",
    priceTruthCta: "Check price and start",
    withdrawalCta: "Read withdrawal policy",
    priceTruthRows: [
      ["Companion", "€49 / year", "about €4.08 / month", "about 13 cents a day"],
      ["Depth", "€99 / year", "about €8.25 / month", "about 27 cents a day"],
    ],
    decisionKicker: "Decision help",
    decisionTitle: "Which plan fits which moment?",
    decisionText:
      "You first see when the free start is enough and when a paid plan creates real value. That keeps the move into the app understandable and trustworthy.",
    stepLabel: "Step",
    decisionPrimaryCta: "Test for free",
    decisionSecondaryCta: "Free vs. Premium",
    decisionSteps: [
      {
        label: "1",
        title: "First test resonance for free",
        text: "Hermetia is only valuable when the first soul map feels personally relevant. That is why the journey starts without a credit card: create a profile, see first core themes and test the language.",
      },
      {
        label: "2",
        title: "Then choose depth when needed",
        text: "If you want more levels, daily impulses, journaling and your full profile book, Companion is the natural next step. The reason to buy is depth, not artificial pressure.",
      },
      {
        label: "3",
        title: "Unlock sensitive modules consciously",
        text: "Depth makes sense when relationship profiles, multiple profiles or Companion dialogues become relevant. These modules especially need clear consent and transparent limits.",
      },
    ],
    comparisonKicker: "Comparison",
    comparisonTitle: "What opens up in each plan?",
    comparisonText:
      "You do not have to memorize every feature detail. The logic matters: Free shows resonance, Companion opens ongoing practice, Depth adds sensitive extra modules.",
    comparisonCta: "Start with my profile",
    comparisonRows: [
      ["Feature", "Discover", "Companion", "Depth"],
      ["Soul map", "Included", "Complete", "Complete"],
      ["Core themes and levels", "Extract and preview", "All levels", "All levels plus deeper modules"],
      ["Daily impulses", "Taster phase", "Regular", "Regular plus expanded interpretation"],
      ["Journaling and review", "Basic or preview", "Included", "Expanded"],
      ["Full profile book", "Not complete", "PDF included", "PDF plus more profiles"],
      ["Relationship profiles", "Not included", "Not included or limited", "Included with consent"],
    ],
    valueBlocks: [
      {
        title: "Why €49 per year is plausible",
        text: "Companion bundles the functions that turn a one-time profile into a recurring reflection space: all levels, daily impulses, journaling, monthly reflection, profile refinement and a readable full profile book.",
      },
      {
        title: "When free is enough",
        text: "Free is enough if you want to get to know Hermetia, see your first soul map and check whether the tone resonates. Nobody has to upgrade immediately to get a real impression.",
      },
      {
        title: "When Depth makes sense",
        text: "Depth is for users who want to use Hermetia not only for themselves, but also for relationship patterns, multiple profiles, Companion dialogues and deeper yearly or development questions.",
      },
    ],
    fairnessKicker: "Fairness and limits",
    fairnessTitle: "A good reason to buy is clarity, not fear.",
    fairnessText:
      "Paid plans at Hermetia stand for more depth, comfort and guidance, not FOMO, destiny pressure or healing promises. They do not replace therapy, medical advice or a guaranteed prediction.",
    fairnessCta: "Start fairly",
    dataCta: "Data and security",
    beforePurchaseTitle: "Important before purchase",
    trustNotes: [
      "No credit card is needed for the free start.",
      "The yearly price is shown transparently before purchase.",
      "Cancellation happens through the profile, with no hidden process.",
      "Digital content, withdrawal and service start are explained clearly.",
    ],
  },
} as const;

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
  const copy = localizeCopy(locale, pricingPageCopy);
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
          <p className="note mt-5 max-w-[620px]">{copy.recommendation}</p>
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
            <span className="kicker">{copy.priceTruthKicker}</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.priceTruthTitle}</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.priceTruthText}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-integrity" })}>{copy.priceTruthCta}</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.widerruf)}>{copy.withdrawalCta}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-sand bg-white shadow-soft">
            {copy.priceTruthRows.map(([plan, yearly, monthly, daily], index) => (
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
            <span className="kicker">{copy.decisionKicker}</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.decisionTitle}</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.decisionText}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {copy.decisionSteps.map((step) => (
              <article key={step.title} className="card">
                <span className="chip w-fit">{copy.stepLabel} {step.label}</span>
                <h3 className="mt-4 text-[23px]">{step.title}</h3>
                <p className="muted mt-3 text-[15.5px] leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-decision" })}>{copy.decisionPrimaryCta}</a>
            <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.freePremium)}>{copy.decisionSecondaryCta}</a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="kicker">{copy.comparisonKicker}</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.comparisonTitle}</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.comparisonText}</p>
            <div className="mt-7">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-comparison" })}>{copy.comparisonCta}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-sand bg-white shadow-soft">
            {copy.comparisonRows.map(([feature, free, guidance, depth], index) => (
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
          {copy.valueBlocks.map((block) => (
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
            <span className="kicker">{copy.fairnessKicker}</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.fairnessTitle}</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.fairnessText}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "pricing-fairness" })}>{copy.fairnessCta}</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.datenSicherheit)}>{copy.dataCta}</a>
            </div>
          </div>
          <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
            <h3 className="text-[23px]">{copy.beforePurchaseTitle}</h3>
            <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
              {copy.trustNotes.map((note) => <li key={note}>✓ {note}</li>)}
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
