import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { localizeCopy } from "@/i18n/localized-content";
import { buildMetadata } from "@/lib/seo";
import { paths, startUrl, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const dataTypes = [
  {
    title: "Kontodaten",
    text: "Zum Beispiel E-Mail, Passwort-Hash, Spracheinstellung und technische Sitzungsinformationen. Diese Daten machen Konto und Login nutzbar.",
  },
  {
    title: "Geburts- und Profildaten",
    text: "Geburtsdatum, optionale Geburtszeit, Geburtsort und daraus berechnete Systemsignale. Diese Daten sind der Kern der Seelenkarte.",
  },
  {
    title: "Abgeleitete Deutungen",
    text: "Texte, Ebenen, Kernthemen und Reflexionsinhalte können weltanschauliche oder spirituelle Aussagen berühren und werden deshalb besonders vorsichtig behandelt.",
  },
  {
    title: "Nutzungs- und Zahlungsdaten",
    text: "Journaling, Feedback, Tarifstatus und Zahlungsabwicklung. Vollständige Kartendaten liegen beim spezialisierten Zahlungsdienstleister, nicht in der Profilauswertung.",
  },
];

const safeguards = [
  "ausdrückliche Einwilligung für sensible Profilverarbeitung",
  "Datenminimierung: nur verarbeiten, was für Profil und Funktionen nötig ist",
  "EU-Hosting und technische Schutzmaßnahmen als Produktanforderung",
  "Export und Löschung als erwartete App-Funktionen",
  "AI-Transparenz: AI formuliert, ersetzt aber keine menschliche Entscheidung",
  "keine Weitergabe zu Werbezwecken als Produktprinzip",
];

const trustQuestions = [
  {
    title: "Warum sind spirituelle Profile besonders sensibel?",
    text: "Geburtsdaten wirken zunächst neutral. In Verbindung mit Deutungssystemen können daraus aber Aussagen über Weltbild, Identität, Beziehung, Berufung, innere Konflikte oder spirituelle Orientierung entstehen. Astrakey behandelt solche Ableitungen deshalb nicht wie harmlose Marketingdaten.",
  },
  {
    title: "Welche Rolle spielt Einwilligung?",
    text: "Der Profilstart braucht eine verständliche Zustimmung zur Verarbeitung sensibler Profilinformationen. Bei Beziehungsauswertungen reicht die Zustimmung einer Person nicht aus, weil auch über eine zweite Person Aussagen entstehen können.",
  },
  {
    title: "Was macht AI mit meinen Daten?",
    text: "AI spekuliert bei Astrakey nicht frei über rohe Identitätsdaten. Die Produktlogik trennt Berechnung, Konvergenz und Formulierung. AI nutzt nur notwendige, freigegebene Kontexte, um berechnete Ergebnisse verständlicher zu machen.",
  },
];

const lifecycle = [
  {
    step: "1",
    title: "Erheben",
    text: "Nur Daten abfragen, die für Konto, Profil, Sicherheit, Zahlung oder gewählte Funktionen notwendig sind.",
  },
  {
    step: "2",
    title: "Berechnen",
    text: "Geburts- und Profildaten in reproduzierbare Signale übersetzen, bevor daraus verständliche Deutungstexte entstehen.",
  },
  {
    step: "3",
    title: "Formulieren",
    text: "AI und redaktionelle Logik dürfen erklären, aber nicht diagnostizieren, entscheiden oder fremde geschützte Texte übernehmen.",
  },
  {
    step: "4",
    title: "Kontrollieren",
    text: "Du brauchst Export, Löschung, Widerruf, Tarifkontrolle und klare Grenzen für Journal- und Beziehungskontexte.",
  },
];

const riskControls = [
  {
    title: "Beziehungsdaten",
    text: "Profile anderer Menschen sind besonders schutzbedürftig. Beziehungsauswertungen brauchen deshalb Consent-Flows, getrennte Einwilligung und klare Sichtbarkeit der geteilten Daten.",
  },
  {
    title: "Journaltexte",
    text: "Journaling kann intime Erlebnisse enthalten. AI-Zusammenfassungen dürfen nur transparent, zweckgebunden und mit Datenminimierung erfolgen.",
  },
  {
    title: "Zahlungen",
    text: "Tarifstatus und Rechnungsdaten müssen sauber verarbeitet werden. Vollständige Zahlungsdaten gehören zu spezialisierten Zahlungsdienstleistern, nicht in die Profilauswertung.",
  },
  {
    title: "Launch und Indexierung",
    text: "Die öffentliche Marketingseite ist für den Public Launch indexierbar. Die App bleibt getrennt kontrolliert, damit persönliche Onboarding- und Profilbereiche nicht als Marketingseiten erscheinen.",
  },
];

const faq = [
  {
    q: "Warum spricht Astrakey von sensiblen Daten?",
    a: "Astrakey kann aus Geburtsdaten und Systemen spirituell-weltanschauliche Profilinhalte ableiten. Solche Aussagen können sehr persönlich sein und werden deshalb besonders vorsichtig erklärt und verarbeitet.",
  },
  {
    q: "Braucht Astrakey meine genaue Geburtszeit?",
    a: "Nicht zwingend. Eine genaue Geburtszeit verbessert bestimmte Systeme. Ohne exakte Zeit kennzeichnet Astrakey, welche Aussagen weniger sicher sind.",
  },
  {
    q: "Sieht die AI mein rohes Geburtsdatum?",
    a: "Astrakey trennt Rechenkern, Konvergenz und AI-Formulierung. AI arbeitet mit abgeleiteten Signalen und tritt nicht als Autorität über rohe Identitätsdaten auf.",
  },
  {
    q: "Kann ich meine Daten löschen?",
    a: "Ja, Löschung und Export sind als Kernrechte vorgesehen. Die formale Datenschutzerklärung beschreibt die Rechte auf Auskunft, Berichtigung, Löschung, Datenübertragbarkeit und Widerruf.",
  },
  {
    q: "Ist diese Seite Rechtsberatung?",
    a: "Nein. Diese Seite erklärt die Produktlogik verständlich. Die formalen Rechtstexte und externe Datenschutz-/Rechtsprüfung bleiben für den finalen Launch maßgeblich.",
  },
  {
    q: "Werden meine Daten für Werbung verkauft?",
    a: "Nein. Astrakey rahmt keine Weitergabe zu Werbezwecken als Produktprinzip. Für den finalen Launch bilden die formalen Rechtstexte diese Linie verbindlich ab.",
  },
  {
    q: "Warum sind Beziehungsauswertungen anders geregelt?",
    a: "Weil dabei Daten und Ableitungen über mindestens zwei Personen entstehen können. Deshalb braucht Astrakey klare Einwilligung der betroffenen Person und darf keine heimliche Auswertung normalisieren.",
  },
  {
    q: "Warum ist die Marketingseite indexierbar, die App aber kontrolliert?",
    a: "Die Website soll Methode, Grenzen und Beta-Zugang öffentlich erklären. Persönliche App-Flows, Onboarding und Profilbereiche bleiben getrennt geschützt und werden nicht als Marketinginhalte behandelt.",
  },
];

const dataSecurityCopy = {
  de: {
    seoTitle: "Astrakey Daten und Sicherheit — sensible Profile, Einwilligung und AI",
    seoDescription:
      "Wie Astrakey Geburtsdaten, sensible Profilinhalte, Einwilligung, Export, Löschung, Zahlung und AI-Transparenz verständlich erklärt.",
    articleHeadline: "Astrakey Daten und Sicherheit",
    articleDescription: "Verständliche Erklärung zu sensiblen Profildaten, Einwilligung, AI und Nutzerrechten.",
    breadcrumb: "Daten und Sicherheit",
    heroKicker: "Daten und Sicherheit",
    heroTitle: "Persönliche Tiefe braucht verständlichen Datenschutz.",
    heroLead:
      "Astrakey arbeitet mit Geburtsdaten und abgeleiteten Profilinhalten. Das kann sehr persönlich werden. Deshalb werden Einwilligung, Datenminimierung, Export, Löschung, Zahlung und AI-Transparenz vor dem Profilstart klar erklärt.",
    startCta: "Profil kostenlos starten",
    privacyCta: "Datenschutzerklärung lesen",
    heroAlt: "Abstrakte Datentopografie als Bild für Astrakey Datenschutz und Sicherheit",
    heroCaption: "Datenschutz ist hier kein Pflichttext, sondern Teil der Produktverantwortung.",
    dataKicker: "Welche Daten?",
    dataTitle: "Vier Datenbereiche, klar getrennt.",
    dataText:
      "Du siehst, welche Informationen wofür gebraucht werden. So entsteht Vertrauen vor der Anmeldung und vor jedem bezahlten Modell.",
    trustKicker: "Trust-Fragen",
    trustTitle: "Die drei wichtigsten Sicherheitsfragen vor dem Profilstart.",
    trustText:
      "Astrakey macht neugierig, ohne dich zu unüberlegter Dateneingabe zu drängen. Deshalb beantwortet die Seite früh, warum die Daten besonders sind, wofür Einwilligung gebraucht wird und wie AI begrenzt bleibt.",
    safeguardsKicker: "Schutzprinzipien",
    safeguardsTitle: "Was vor dem Onboarding klar ist.",
    safeguardsText:
      "Astrakey weckt Neugier, aber keine blinde Dateneingabe. Die folgenden Prinzipien zeigen, worauf du dich vor dem Profilstart verlassen kannst.",
    approvalsCta: "Launch-Freigaben ansehen",
    lifecycleKicker: "Daten-Lebenszyklus",
    lifecycleTitle: "Von der Eingabe bis zur Kontrolle.",
    lifecycleText:
      "Datenschutz wird verständlicher, wenn du siehst, an welcher Stelle welche Verarbeitung passiert: von der Eingabe über Berechnung und Formulierung bis zu Export, Löschung und Widerruf.",
    risksKicker: "Risikobereiche",
    risksTitle: "Wo Astrakey besonders vorsichtig ist.",
    risksText:
      "Nicht alle Daten haben dasselbe Risiko. Beziehungsauswertungen, Journaltexte, Zahlungsstatus und öffentliche Indexierung brauchen besonders klare Regeln, weil hier Vertrauen schnell gewonnen oder verloren wird.",
    pipelineAlt: "Pipeline-Grafik für Verarbeitung und Einordnung von Astrakey-Daten",
    pipelineCaption: "Die Pipeline macht sichtbar, dass Rohdaten, Einordnung, Konvergenz und Sprache getrennte Schritte sind.",
    funnelAlt: "Algorithmus-Funnel von Daten zu Kernthemen und verständlicher Sprache",
    funnelCaption: "Der Funnel unterstützt die AI-Transparenz: Erst rechnen und prüfen, dann vorsichtig formulieren.",
    finalKicker: "Vertrauensschritt",
    finalTitle: "Starte erst, wenn die Datenlogik für dich stimmig ist.",
    finalText:
      "Der kostenlose Einstieg ist dafür da, Methode und Sprache zu prüfen. Wenn Datenschutz, Einwilligung und Grenzen für dich klar sind, kannst du deine Seelenkarte erstellen und danach bewusst entscheiden, ob mehr Tiefe passt.",
    aiCta: "AI-Transparenz lesen",
    importantTitle: "Wichtig",
    importantText:
      "Diese Seite ist bewusst verständlich formuliert. Maßgeblich bleiben vor finalem Launch die juristisch geprüften Datenschutz-, AGB-, Widerrufs- und Verbraucherrechtsinformationen.",
    faqKicker: "FAQ",
    faqTitle: "Häufige Fragen zu Daten und Sicherheit",
    dataTypes,
    safeguards,
    trustQuestions,
    lifecycle,
    riskControls,
    faq,
  },
  en: {
    seoTitle: "Astrakey data and security — sensitive profiles, consent and AI",
    seoDescription:
      "How Astrakey explains birth data, sensitive profile content, consent, export, deletion, payment and AI transparency in understandable language.",
    articleHeadline: "Astrakey data and security",
    articleDescription: "Clear explanation of sensitive profile data, consent, AI and user rights.",
    breadcrumb: "Data and security",
    heroKicker: "Data and security",
    heroTitle: "Personal depth needs understandable data protection.",
    heroLead:
      "Astrakey works with birth data and derived profile content. That can become very personal. Consent, data minimization, export, deletion, payment and AI transparency are therefore clear before profile start, not hidden somewhere else.",
    startCta: "Start profile for free",
    privacyCta: "Read privacy policy",
    heroAlt: "Abstract data topography as an image for Astrakey data protection and security",
    heroCaption: "Data protection is not just mandatory text here; it is part of product responsibility.",
    dataKicker: "Which data?",
    dataTitle: "Four data areas, clearly separated.",
    dataText:
      "You can see which information is needed for which purpose. That creates trust before signup and before every paid model.",
    dataTypes: [
      { title: "Account data", text: "For example email, password hash, language setting and technical session information. These data make account and login usable." },
      { title: "Birth and profile data", text: "Date of birth, optional birth time, place of birth and calculated system signals. These data are the core of the soul map." },
      { title: "Derived interpretations", text: "Texts, levels, core themes and reflection content may touch worldview-related or spiritual statements and are therefore handled with special care." },
      { title: "Usage and payment data", text: "Journaling, feedback, plan status and payment processing. Full card data stays with the specialized payment provider, not in profile interpretation." },
    ],
    trustKicker: "Trust questions",
    trustTitle: "The three most important security questions before profile start.",
    trustText:
      "Astrakey makes you curious without pushing you into careless data entry. The page therefore explains early why the data is special, what consent is needed for and how AI remains limited.",
    trustQuestions: [
      { title: "Why are spiritual profiles especially sensitive?", text: "Birth data may look neutral at first. Combined with interpretation systems, it can produce statements about worldview, identity, relationships, calling, inner conflicts or spiritual orientation. Astrakey therefore does not treat these derivations like harmless marketing data." },
      { title: "What role does consent play?", text: "Profile start needs understandable consent for processing sensitive profile information. For relationship readings, the consent of one person is not enough because statements about a second person may also be created." },
      { title: "What does AI do with my data?", text: "AI in Astrakey does not freely speculate about raw identity data. Astrakey separates calculation, convergence and wording. AI uses only necessary, approved contexts to make calculated results easier to understand." },
    ],
    safeguardsKicker: "Protection principles",
    safeguardsTitle: "What is clear before onboarding.",
    safeguardsText:
      "Astrakey creates curiosity, but not blind data entry. The following principles show what you can rely on before profile start.",
    approvalsCta: "View launch approvals",
    safeguards: [
      "explicit consent for sensitive profile processing",
      "data minimization: process only what profile and features need",
      "EU hosting and technical safeguards as product requirements",
      "export and deletion as expected app functions",
      "AI transparency: AI phrases, but does not replace human decision-making",
      "no disclosure for advertising purposes as a product principle",
    ],
    lifecycleKicker: "Data lifecycle",
    lifecycleTitle: "From input to control.",
    lifecycleText:
      "Data protection becomes easier to understand when you can see where processing happens: from input through calculation and wording to export, deletion and withdrawal.",
    lifecycle: [
      { step: "1", title: "Collect", text: "Ask only for data needed for account, profile, security, payment or selected functions." },
      { step: "2", title: "Calculate", text: "Translate birth and profile data into reproducible signals before understandable interpretation texts are created." },
      { step: "3", title: "Phrase", text: "AI and editorial logic may explain, but not diagnose, decide or copy protected third-party texts." },
      { step: "4", title: "Control", text: "You need export, deletion, withdrawal, plan control and clear limits for journal and relationship contexts." },
    ],
    risksKicker: "Risk areas",
    risksTitle: "Where Astrakey is especially careful.",
    risksText:
      "Not all data has the same risk. Relationship readings, journal texts, payment status and public indexing need especially clear rules because trust can be won or lost quickly here.",
    riskControls: [
      { title: "Relationship data", text: "Profiles of other people need special protection. Relationship readings therefore require consent flows, separate permission and clear visibility of shared data." },
      { title: "Journal texts", text: "Journaling can contain intimate experiences. AI summaries may happen only transparently, purpose-bound and with data minimization." },
      { title: "Payments", text: "Plan status and invoice data are processed separately from profile interpretation. Full payment data belongs to specialized payment providers." },
      { title: "Launch and indexing", text: "The public marketing website is prepared for indexing. The app remains separately controlled so personal onboarding and profile areas do not appear as marketing pages." },
    ],
    pipelineAlt: "Pipeline graphic for processing and classifying Astrakey data",
    pipelineCaption: "The pipeline shows that raw data, classification, convergence and language are separate steps.",
    funnelAlt: "Algorithm funnel from data to core themes and understandable language",
    funnelCaption: "The funnel supports AI transparency: calculate and check first, then phrase carefully.",
    finalKicker: "Trust step",
    finalTitle: "Start only when the data logic feels coherent to you.",
    finalText:
      "The free start is there to test method and language. When data protection, consent and limits are clear to you, you can create your soul map and then consciously decide whether more depth fits.",
    aiCta: "Read AI transparency",
    importantTitle: "Important",
    importantText:
      "This page is intentionally written in understandable language. Before final launch, legally reviewed privacy, terms, withdrawal and consumer-rights information remains authoritative.",
    faqKicker: "FAQ",
    faqTitle: "Frequently asked questions about data and security",
    faq: [
      { q: "Why does Astrakey talk about sensitive data?", a: "Astrakey can derive spiritual or worldview-related profile content from birth data and systems. Such statements can be very personal and are therefore explained and processed with special care." },
      { q: "Does Astrakey need my exact birth time?", a: "Not necessarily. An exact birth time improves certain systems. Without exact time, Astrakey marks which statements are less certain." },
      { q: "Does AI see my raw birth date?", a: "Astrakey separates calculation core, convergence and AI wording. AI works with derived signals and does not appear as an authority over raw identity data." },
      { q: "Can I delete my data?", a: "Yes, deletion and export are intended as core rights. The formal privacy policy describes rights to access, rectification, deletion, portability and withdrawal." },
      { q: "Is this page legal advice?", a: "No. This page explains the data logic in understandable language. Formal legal texts and external data-protection/legal review remain decisive for final launch." },
      { q: "Will my data be sold for advertising?", a: "No. Astrakey frames no disclosure for advertising purposes as a product principle. For final launch, the formal legal texts make this binding." },
      { q: "Why are relationship readings regulated differently?", a: "Because they can create data and derivations about at least two people. Astrakey therefore needs clear consent from the affected person and does not normalize secret readings." },
      { q: "Why is the marketing website indexable while the app remains controlled?", a: "The website should publicly explain method, limits and beta access. Personal app flows, onboarding and profile areas remain separately protected and are not treated as marketing content." },
    ],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = localizeCopy(locale as Locale, dataSecurityCopy);
  return buildMetadata({
    locale: locale as Locale,
    path: paths.datenSicherheit,
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function DataSecurityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const copy = localizeCopy(locale, dataSecurityCopy);
  const localizedFaq = copy.faq.map(({ q, a }) => ({ q, a }));
  const pageUrl = `${siteUrl}/${locale}${paths.datenSicherheit}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: copy.articleHeadline,
            description: copy.articleDescription,
            locale,
            url: pageUrl,
            about: "Datenschutz und Sicherheit",
            image: `${siteUrl}/images/hermetia/atmospheric-data-topography.png`,
          }),
          faqSchema(localizedFaq),
          breadcrumbSchema([
            { name: "Astrakey", url: `${siteUrl}/${locale}/` },
            { name: copy.breadcrumb, url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="daten-sicherheit" />
      <main>
        <section className="pb-10 pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">{copy.heroKicker}</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">{copy.heroTitle}</h1>
              <p className="lead mt-5 max-w-[720px]">
                {copy.heroLead}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "data-security-hero" })}>{copy.startCta}</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.datenschutz)}>{copy.privacyCta}</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/atmospheric-data-topography.png" alt={copy.heroAlt} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                {copy.heroCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[760px]">
              <span className="kicker">{copy.dataKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.dataTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.dataText}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {copy.dataTypes.map((item) => (
                <article key={item.title} className="card">
                  <h3 className="text-[21px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[820px]">
              <span className="kicker">{copy.trustKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.trustTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.trustText}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {copy.trustQuestions.map((item) => (
                <article key={item.title} className="card">
                  <h3 className="text-[21px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15.5px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <span className="kicker">{copy.safeguardsKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.safeguardsTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.safeguardsText}
              </p>
              <a className="btn btn-ghost mt-6" href={localePath(locale, paths.freigaben)}>{copy.approvalsCta}</a>
            </div>
            <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {copy.safeguards.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[820px]">
              <span className="kicker">{copy.lifecycleKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.lifecycleTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.lifecycleText}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {copy.lifecycle.map((item) => (
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
          <div className="wrap grid gap-8 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">{copy.risksKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.risksTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.risksText}
              </p>
              <div className="mt-6 grid gap-4">
                {copy.riskControls.map((item) => (
                  <article key={item.title} className="rounded-card border border-sand bg-white p-5 shadow-soft">
                    <h3 className="text-[20px]">{item.title}</h3>
                    <p className="muted mt-2 text-[15px] leading-relaxed">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <figure className="m-0 rounded-card border border-sand bg-white p-4 shadow-soft">
                <img src="/graphics/convergence/abb4-pipeline-einordnung.svg" alt={copy.pipelineAlt} className="w-full rounded-[6px]" loading="lazy" />
                <figcaption className="muted mt-3 text-[14px] leading-relaxed">
                  {copy.pipelineCaption}
                </figcaption>
              </figure>
              <figure className="m-0 rounded-card border border-sand bg-white p-4 shadow-soft">
                <img src="/graphics/convergence/abb5-algorithmus-funnel.svg" alt={copy.funnelAlt} className="w-full rounded-[6px]" loading="lazy" />
                <figcaption className="muted mt-3 text-[14px] leading-relaxed">
                  {copy.funnelCaption}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-aubergine py-16 text-white">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker text-gold-weich">{copy.finalKicker}</span>
              <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">{copy.finalTitle}</h2>
              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.85] text-[#e9dcf2]">
                {copy.finalText}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "data-security-final" })}>{copy.startCta}</a>
                <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.ki)}>{copy.aiCta}</a>
              </div>
            </div>
            <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
              <h3 className="text-[24px] text-white">{copy.importantTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
                {copy.importantText}
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
