import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { localizeCopy } from "@/i18n/localized-content";
import { buildMetadata } from "@/lib/seo";
import { paths, startUrl, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const freeItems = [
  "Seelenkarte als erster Aha-Moment",
  "erste Kernthemen und Grundresonanz",
  "keine Kreditkarte beim Start",
  "Gefühl für Sprache, Methode und Datenschutz",
  "Entscheidung, ob Hermetia überhaupt passt",
];

const premiumItems = [
  "alle Ebenen deiner Seelenkarte",
  "tägliche Impulse und Journaling",
  "dein Profil als gestaltetes Buch/PDF",
  "Beziehungs- und Kompatibilitätsprofile",
  "mehrere Profile, Rückblicke und tiefere Module",
];

const decisionSignals = [
  {
    title: "Kostenlos reicht, wenn...",
    text: "du erst prüfen willst, ob Hermetias Sprache dich berührt, ob die Seelenkarte resoniert und ob du Vertrauen in Methode, Datenschutz und Grenzen aufbaust.",
  },
  {
    title: "Premium lohnt sich, wenn...",
    text: "du regelmäßig mit deinem Profil arbeiten möchtest: Ebenen lesen, Tagesimpulse nutzen, Journaling vertiefen oder Beziehungsmuster bewusst reflektieren.",
  },
  {
    title: "Warten ist richtig, wenn...",
    text: "du gerade eine Diagnose, Therapie, akute Krisenhilfe oder eine Entscheidungsgarantie suchst. Dafür ist Hermetia nicht gedacht.",
  },
];

const valueLadder = [
  {
    step: "1",
    title: "Resonanz prüfen",
    text: "Der kostenlose Start beantwortet die erste Frage: Erkenne ich mich überhaupt in Sprache, Methode und Seelenkarte wieder?",
  },
  {
    step: "2",
    title: "Tiefe öffnen",
    text: "Premium wird sinnvoll, wenn du mehr Ebenen, längere Kapitel, Systembelege und eine wiederlesbare Profilstruktur wünschst.",
  },
  {
    step: "3",
    title: "Alltag begleiten",
    text: "Tagesimpulse, Journaling, Rückblicke und Companion machen aus einem Profil eine fortlaufende Reflexionspraxis.",
  },
  {
    step: "4",
    title: "Beziehungen und Verlauf",
    text: "Beziehungsprofile, Profilverfeinerung und längere Historien brauchen Consent, Sicherheit, Rechenlogik und mehr Kontext.",
  },
];

const premiumModules = [
  {
    title: "Vollprofil-Buch",
    text: "Für Nutzer, die ihre Seelenkarte in Ruhe lesen, wiederlesen und als langfristige Ressource nutzen möchten.",
  },
  {
    title: "Tagesimpulse und Journaling",
    text: "Für Menschen, die nicht nur ein Ergebnis sehen wollen, sondern im Alltag mit Fragen, Beobachtungen und Rückblicken arbeiten.",
  },
  {
    title: "Companion",
    text: "Für Rückfragen zur Seelenkarte, zu Kernthemen, Kapiteln, Tagesimpulsen oder Journaling, mit klarer AI-Transparenz.",
  },
  {
    title: "Beziehungsprofile",
    text: "Für bewusste Beziehungsauswertungen mit Einwilligung, Resonanz, Reibung, Gesprächsimpulsen und Datenschutzlogik.",
  },
];

const fairnessRules = [
  "Premium verzichtet auf Angst, Schicksalsdruck und künstliche Verknappung.",
  "Kostenlos zeigt genug, damit du Resonanz, Datenschutzgefühl und Ton prüfen kannst.",
  "Ein Upgrade ist sinnvoll, wenn Nutzung über Zeit entsteht: lesen, journaln, fragen, verfeinern, zurückkehren.",
  "Rechtstexte, Widerruf, Kündigung, Datenschutz und AI-Grenzen bleiben vor Kauf verständlich erreichbar.",
];

const faq = [
  {
    q: "Kann ich Hermetia wirklich kostenlos starten?",
    a: "Ja. Der Einstieg ist ohne Kreditkarte gedacht. Du siehst deine Seelenkarte und erste Kernthemen, bevor du entscheidest, ob ein bezahltes Modell sinnvoll ist.",
  },
  {
    q: "Warum gibt es überhaupt ein Premium-Modell?",
    a: "Tiefe Auswertungen, tägliche Begleitung, Journaling, Beziehungsauswertungen, Sicherheit, Infrastruktur und Redaktion brauchen laufende Entwicklung. Premium finanziert diese Tiefe.",
  },
  {
    q: "Wann sollte ich nicht upgraden?",
    a: "Wenn du nur aus Angst, Druck oder dem Wunsch nach sicheren Vorhersagen upgraden würdest. Hermetia erzeugt keine FOMO, sondern unterstützt bewusste Reflexion.",
  },
  {
    q: "Kann ich später kündigen?",
    a: "Ja. Laufende Abonnements sind transparent kündbar. Die Website verweist zusätzlich auf AGB, Widerruf und die rechtlichen Freigaben vor finalem Launch.",
  },
  {
    q: "Woran erkenne ich, dass Premium zu früh wäre?",
    a: "Wenn du noch keine Resonanz spürst, nur aus Angst upgraden würdest oder gerade eine Diagnose, Therapie oder Entscheidungsgarantie suchst. Dann ist Warten sinnvoller.",
  },
  {
    q: "Welche Premium-Funktion liefert den meisten Wert?",
    a: "Das hängt vom Nutzungsverhalten ab. Leser profitieren vom Vollprofil-Buch, Alltagsnutzer von Tagesimpulsen und Journaling, Fragende vom Companion und Beziehungsmenschen von Consent-basierten Beziehungsauswertungen.",
  },
  {
    q: "Warum ist der kostenlose Einstieg wichtig für Vertrauen?",
    a: "Weil Hermetia mit sensiblen Profilthemen arbeitet. Du erlebst Sprache, Grenzen, Datenschutz und erste Kernthemen, bevor du bezahlte Tiefe wählst.",
  },
];

const freePremiumCopy = {
  de: {
    seoTitle: "Hermetia kostenlos vs Premium — wann sich bezahlte Tiefe lohnt",
    seoDescription:
      "Was du kostenlos bei Hermetia bekommst, wann Premium sinnvoll ist und wann du bewusst nicht upgraden solltest. Klare Entscheidungshilfe mit FAQ.",
    articleHeadline: "Hermetia kostenlos vs Premium",
    articleDescription: "Klare Entscheidungshilfe für kostenlosen Einstieg und bezahlte Tiefe.",
    breadcrumb: "Kostenlos vs Premium",
    heroKicker: "Kostenlos vs Premium",
    heroTitle: "Erst Resonanz prüfen. Dann bewusst Tiefe wählen.",
    heroLead:
      "Hermetia verkauft nicht über Druck. Der kostenlose Einstieg zeigt dir, ob deine Seelenkarte, die Sprache und die Methode stimmig wirken. Premium wird erst dann sinnvoll, wenn du mehr Tiefe, Alltag und Beziehungsebene wirklich nutzen möchtest.",
    startCta: "Kostenlos starten",
    pricingCta: "Tarife ansehen",
    heroAlt: "Abstrakte Ebenen als Bild für kostenlosen Einstieg und Premium-Tiefe bei Hermetia",
    heroCaption: "Kostenlos zeigt den ersten Zusammenhang. Premium öffnet die fortlaufende Arbeit mit den Ebenen.",
    freeChip: "Kostenlos",
    freeTitle: "Was du ohne Zahlung prüfen kannst",
    freeText:
      "Der kostenlose Einstieg ist nicht als Köder gedacht, sondern als Vertrauensprobe: Passt die Sprache? Fühlt sich die Seelenkarte stimmig an? Sind Methode und Datenschutz nachvollziehbar?",
    premiumChip: "Premium",
    premiumTitle: "Was bezahlte Tiefe sinnvoll macht",
    premiumText:
      "Premium ist für Nutzer gedacht, die aus einem einmaligen Aha-Moment eine fortlaufende Reflexionspraxis machen möchten: lesen, beobachten, journaln, vertiefen.",
    valueKicker: "Werttreppe",
    valueTitle: "Von kostenloser Resonanz zu bezahlter Tiefe.",
    valueText:
      "Die Preislogik von Hermetia wirkt nicht wie eine harte Paywall. Sie zeigt, welche Art von Wert in welchem Nutzungsmoment entsteht und wann ein Upgrade wirklich Sinn ergibt.",
    decisionKicker: "Entscheidungshilfe",
    decisionTitle: "Nicht jeder sollte sofort upgraden.",
    decisionText:
      "Bei Hermetia geht es nicht darum, möglichst schnell Druck aufzubauen. Du sollst verstehen, welcher Schritt wirklich passt.",
    modulesKicker: "Premium-Module",
    modulesTitle: "Wofür bezahlte Modelle konkret stehen.",
    modulesText:
      "Premium ist kein einzelnes Geheimkapitel. Es bündelt die Funktionen, die über Zeit echten Nutzen erzeugen: mehr Kontext, mehr Wiederholung, mehr Sicherheit und mehr persönliche Begleitung.",
    moduleAlt: "Grafik für verankerte und feine Premium-Tiefe bei Hermetia",
    moduleCaption: "Bezahlte Tiefe bleibt verankert in Daten und zugleich fein genug für persönliche Reflexion.",
    fairnessKicker: "Fairness",
    fairnessTitle: "Ein gutes Upgrade fühlt sich nicht gedrängt an.",
    fairnessText:
      "Hermetia wächst über Vertrauen, nicht über Angstmarketing. Gerade weil spirituelle Profile sensibel sind, bleibt die Kaufentscheidung ruhig, transparent und widerrufbar.",
    approvalsCta: "Rechtliche Freigaben ansehen",
    nextKicker: "Nächster Schritt",
    nextTitle: "Beginne dort, wo Vertrauen entsteht: kostenlos.",
    nextText:
      "Öffne zuerst deine Seelenkarte. Wenn die ersten Themen Resonanz haben, kannst du die Tarife vergleichen und bewusst entscheiden, ob Premium zu deiner Nutzung passt.",
    useCasesCta: "Anwendungsfälle lesen",
    fairnessRuleTitle: "Fairness-Regel",
    fairnessRuleText:
      "Premium fühlt sich wie eine bewusste Vertiefung an, nicht wie eine Angstreaktion. Deshalb benennt Hermetia Grenzen, Kündigung, Widerruf und Datenschutz sichtbar.",
    faqKicker: "FAQ",
    faqTitle: "Häufige Fragen zu kostenlos und Premium",
    freeItems,
    premiumItems,
    decisionSignals,
    valueLadder,
    premiumModules,
    fairnessRules,
    faq,
  },
  en: {
    seoTitle: "Hermetia free vs Premium — when paid depth is worth it",
    seoDescription:
      "What you get for free in Hermetia, when Premium makes sense and when you should deliberately wait. Clear decision help with FAQ.",
    articleHeadline: "Hermetia free vs Premium",
    articleDescription: "Clear decision help for the free start and paid depth.",
    breadcrumb: "Free vs Premium",
    heroKicker: "Free vs Premium",
    heroTitle: "Test resonance first. Then choose depth consciously.",
    heroLead:
      "Hermetia does not sell through pressure. The free start shows whether your soul map, the language and the method feel coherent. Premium becomes useful only when you truly want more depth, daily practice and relationship layers.",
    startCta: "Start free",
    pricingCta: "View plans",
    heroAlt: "Abstract layers as an image for Hermetia's free start and Premium depth",
    heroCaption: "Free shows the first connection. Premium opens ongoing work with the levels.",
    freeChip: "Free",
    freeTitle: "What you can test without paying",
    freeText:
      "The free start is not meant as bait, but as a trust test: does the language fit, does the soul map resonate, and are method and data protection understandable?",
    premiumChip: "Premium",
    premiumTitle: "What makes paid depth meaningful",
    premiumText:
      "Premium is for users who want to turn a single aha moment into an ongoing reflection practice: reading, observing, journaling and going deeper.",
    valueKicker: "Value ladder",
    valueTitle: "From free resonance to paid depth.",
    valueText:
      "Hermetia's pricing logic does not feel like a hard paywall. It explains what kind of value emerges at which moment of use and when an upgrade genuinely makes sense.",
    decisionKicker: "Decision help",
    decisionTitle: "Not everyone should upgrade immediately.",
    decisionText:
      "Hermetia does not try to create pressure as quickly as possible. It helps you understand which step truly fits.",
    modulesKicker: "Premium modules",
    modulesTitle: "What paid models stand for in practice.",
    modulesText:
      "Premium is not a single secret chapter. It bundles the functions that create value over time: more context, more repetition, more safety and more personal guidance.",
    moduleAlt: "Graphic for grounded and subtle Premium depth in Hermetia",
    moduleCaption: "Paid depth remains grounded in data and subtle enough for personal reflection.",
    fairnessKicker: "Fairness",
    fairnessTitle: "A good upgrade does not feel forced.",
    fairnessText:
      "Hermetia grows through trust, not fear marketing. Precisely because spiritual profiles are sensitive, the purchase decision remains calm, transparent and withdrawable.",
    approvalsCta: "View legal approvals",
    nextKicker: "Next step",
    nextTitle: "Begin where trust starts: free.",
    nextText:
      "Open your soul map first. If the first themes resonate, you can compare plans and consciously decide whether Premium fits your use.",
    useCasesCta: "Read use cases",
    fairnessRuleTitle: "Fairness rule",
    fairnessRuleText:
      "Premium feels like conscious deepening, not a fear response. That is why Hermetia makes limits, cancellation, withdrawal and data protection visible.",
    faqKicker: "FAQ",
    faqTitle: "Frequently asked questions about Free and Premium",
    freeItems: [
      "soul map as the first aha moment",
      "first core themes and basic resonance",
      "no credit card at the start",
      "a feel for language, method and data protection",
      "a decision on whether Hermetia fits at all",
    ],
    premiumItems: [
      "all levels of your soul map",
      "daily impulses and journaling",
      "your profile as a designed book/PDF",
      "relationship and compatibility profiles",
      "multiple profiles, reviews and deeper modules",
    ],
    decisionSignals: [
      {
        title: "Free is enough if...",
        text: "you first want to check whether Hermetia's language touches you, whether the soul map resonates and whether you build trust in the method, data protection and limits.",
      },
      {
        title: "Premium is worth it if...",
        text: "you want to work with your profile regularly: read levels, use daily impulses, deepen journaling or consciously reflect on relationship patterns.",
      },
      {
        title: "Waiting is right if...",
        text: "you are currently looking for a diagnosis, therapy, acute crisis support or a guaranteed decision. Hermetia is not designed for that.",
      },
    ],
    valueLadder: [
      { step: "1", title: "Test resonance", text: "The free start answers the first question: do I recognize myself in the language, method and soul map at all?" },
      { step: "2", title: "Open depth", text: "Premium becomes useful when you want more levels, longer chapters, system references and a rereadable profile structure." },
      { step: "3", title: "Support daily life", text: "Daily impulses, journaling, reviews and Companion turn a profile into an ongoing reflection practice." },
      { step: "4", title: "Relationships and history", text: "Relationship profiles, profile refinement and longer histories need consent, safety, calculation logic and more context." },
    ],
    premiumModules: [
      { title: "Full profile book", text: "For users who want to read, reread and use their soul map as a long-term resource." },
      { title: "Daily impulses and journaling", text: "For people who do not only want a result, but want to work with questions, observations and reviews in everyday life." },
      { title: "Companion", text: "For follow-up questions about the soul map, core themes, chapters, daily impulses or journaling, with clear AI transparency." },
      { title: "Relationship profiles", text: "For conscious relationship readings with consent, resonance, friction, conversation prompts and data protection logic." },
    ],
    fairnessRules: [
      "Premium is not sold through fear, destiny pressure or artificial scarcity.",
      "Free shows enough for you to test resonance, data protection feeling and tone.",
      "An upgrade makes sense when use develops over time: reading, journaling, asking, refining and returning.",
      "Legal texts, withdrawal, cancellation, data protection and AI limits remain understandable before purchase.",
    ],
    faq: [
      {
        q: "Can I really start Hermetia for free?",
        a: "Yes. The entry is designed without a credit card. You see your soul map and first core themes before deciding whether a paid model makes sense.",
      },
      {
        q: "Why is there a Premium model at all?",
        a: "Deep readings, daily guidance, journaling, relationship readings, security, infrastructure and editorial quality need ongoing development. Premium funds that depth.",
      },
      {
        q: "When should I not upgrade?",
        a: "If you would upgrade only from fear, pressure or a wish for guaranteed predictions. Hermetia does not create FOMO, but supports conscious reflection.",
      },
      {
        q: "Can I cancel later?",
        a: "Yes. Running subscriptions are transparently cancellable. The website also links to terms, withdrawal information and legal approvals before final launch.",
      },
      {
        q: "How do I know Premium would be too early?",
        a: "If you do not feel resonance yet, would upgrade only from fear or are looking for diagnosis, therapy or a guaranteed decision. Then waiting is wiser.",
      },
      {
        q: "Which Premium function creates the most value?",
        a: "It depends on use. Readers benefit from the full profile book, daily users from impulses and journaling, question-driven users from Companion and relationship-focused users from consent-based relationship readings.",
      },
      {
        q: "Why is the free start important for trust?",
        a: "Because Hermetia works with sensitive profile themes. You experience language, limits, data protection and first core themes before choosing paid depth.",
      },
    ],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = localizeCopy(locale as Locale, freePremiumCopy);
  return buildMetadata({
    locale: locale as Locale,
    path: paths.freePremium,
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function FreePremiumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const copy = localizeCopy(locale, freePremiumCopy);
  const localizedFaq = copy.faq.map(({ q, a }) => ({ q, a }));
  const pageUrl = `${siteUrl}/${locale}${paths.freePremium}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: copy.articleHeadline,
            description: copy.articleDescription,
            locale,
            url: pageUrl,
            about: "Hermetia Preise und Premium-Modell",
            image: `${siteUrl}/images/hermetia/celestial-layer-orbits.png`,
          }),
          faqSchema(localizedFaq),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: copy.breadcrumb, url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="preise" />
      <main>
        <section className="pb-10 pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">{copy.heroKicker}</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">{copy.heroTitle}</h1>
              <p className="lead mt-5 max-w-[720px]">{copy.heroLead}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "free-premium-hero" })}>{copy.startCta}</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.preise)}>{copy.pricingCta}</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/celestial-layer-orbits.png" alt={copy.heroAlt} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                {copy.heroCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <span className="chip">{copy.freeChip}</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">{copy.freeTitle}</h2>
              <p className="muted mt-3 text-[16px] leading-relaxed">{copy.freeText}</p>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {copy.freeItems.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
            <div className="rounded-card border-2 border-gold bg-white p-7 shadow-soft">
              <span className="chip chip-gold">{copy.premiumChip}</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">{copy.premiumTitle}</h2>
              <p className="muted mt-3 text-[16px] leading-relaxed">{copy.premiumText}</p>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {copy.premiumItems.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[820px]">
              <span className="kicker">{copy.valueKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.valueTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.valueText}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {copy.valueLadder.map((item) => (
                <article key={item.title} className="rounded-card border border-sand bg-white p-6 shadow-soft">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aubergine text-[15px] font-bold text-white">{item.step}</span>
                  <h3 className="mt-5 text-[21px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 max-w-[760px]">
              <span className="kicker">{copy.decisionKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.decisionTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.decisionText}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {copy.decisionSignals.map((item) => (
                <article key={item.title} className="card">
                  <h3 className="text-[22px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">{copy.modulesKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.modulesTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.modulesText}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {copy.premiumModules.map((item) => (
                  <article key={item.title} className="rounded-card border border-sand bg-white p-5 shadow-soft">
                    <h3 className="text-[20px]">{item.title}</h3>
                    <p className="muted mt-2 text-[15px] leading-relaxed">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <figure className="m-0 rounded-card border border-sand bg-white p-4 shadow-soft">
              <img src="/graphics/convergence/abb10-verankert-und-fein.svg" alt={copy.moduleAlt} className="w-full rounded-[6px]" loading="lazy" />
              <figcaption className="muted mt-3 text-[14px] leading-relaxed">
                {copy.moduleCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <span className="kicker">{copy.fairnessKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.fairnessTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.fairnessText}</p>
              <a className="btn btn-ghost mt-6" href={localePath(locale, paths.freigaben)}>{copy.approvalsCta}</a>
            </div>
            <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {copy.fairnessRules.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-aubergine py-16 text-white">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker text-gold-weich">{copy.nextKicker}</span>
              <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">{copy.nextTitle}</h2>
              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.85] text-[#e9dcf2]">{copy.nextText}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "free-premium-final" })}>{copy.startCta}</a>
                <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.anwendungsfaelle)}>{copy.useCasesCta}</a>
              </div>
            </div>
            <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
              <h3 className="text-[24px] text-white">{copy.fairnessRuleTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
                {copy.fairnessRuleText}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 text-center">
              <span className="kicker">{copy.faqKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">{copy.faqTitle}</h2>
            </div>
            <Faq items={localizedFaq} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
