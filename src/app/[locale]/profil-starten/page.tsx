import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { localizeCopy } from "@/i18n/localized-content";
import { buildMetadata } from "@/lib/seo";
import { paths, startUrl, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const steps = [
  {
    n: "01",
    title: "Sprache und Konto wählen",
    text: "Du startest mit deiner bevorzugten Sprache und einem Konto. Die Sprache wird als Hinweis an die App übergeben, damit der Einstieg nicht bei null beginnt.",
  },
  {
    n: "02",
    title: "Geburtsdaten eingeben",
    text: "Hermetia braucht Geburtsdatum, Geburtsort und, wenn vorhanden, die Geburtszeit. Wenn du die Uhrzeit nicht kennst, geht es trotzdem weiter.",
  },
  {
    n: "03",
    title: "Einwilligung verstehen",
    text: "Vor sensiblen Profilinhalten muss klar sein, welche Daten verarbeitet werden, warum Art. 9 DSGVO relevant ist und welche Rechte du hast.",
  },
  {
    n: "04",
    title: "Seelenkarte ansehen",
    text: "Der kostenlose Einstieg zeigt die erste Seelenkarte und Kernthemen. Erst danach entscheidest du, ob bezahlte Tiefe sinnvoll ist.",
  },
];

const prepare = [
  "Geburtsdatum",
  "Geburtsort",
  "Geburtszeit, falls bekannt",
  "eine E-Mail-Adresse für dein Konto",
  "ein paar Minuten Ruhe, um die ersten Themen wirklich zu lesen",
];

const trustBeforeStart = [
  {
    title: "Kostenlos vor Kauf",
    text: "Der erste Profilstart prüft Resonanz, bevor ein Tarif gewählt wird. Das reduziert Druck und macht spätere Premium-Entscheidungen bewusster.",
  },
  {
    title: "Datenlogik vor Eingabe",
    text: "Du verstehst vorab, warum Geburtsdaten, Einwilligung und abgeleitete Profilinhalte sensibel sind und welche Rechte du hast.",
  },
  {
    title: "Unsicherheit sichtbar",
    text: "Wenn eine Geburtszeit fehlt oder eine Angabe grob ist, muss Hermetia das kennzeichnen, statt jede Aussage gleich sicher wirken zu lassen.",
  },
];

const appHandoff = [
  {
    title: "Website erklärt",
    text: "Die Marketing-Seite beantwortet vor dem Absprung Fragen zu Methode, Daten, Grenzen, Kosten und Nutzen.",
  },
  {
    title: "App berechnet",
    text: "Das Onboarding sammelt die notwendigen Eingaben, verarbeitet Einwilligung und erzeugt daraus die erste persönliche Seelenkarte.",
  },
  {
    title: "Du entscheidest",
    text: "Nach dem kostenlosen Einstieg prüfst du bewusst, ob Vollprofil, Tagesimpulse, Journaling, Companion oder Beziehungen Sinn ergeben.",
  },
];

const afterStart = [
  "erste Seelenkarte und Kernthemen lesen",
  "Datenqualität und unsichere Bereiche verstehen",
  "kostenlos Resonanz prüfen, ohne Kreditkarte",
  "bei Bedarf Geburtszeit oder Feedback später ergänzen",
  "erst danach Premium-Modelle vergleichen",
];

const faq = [
  {
    q: "Kann ich ohne genaue Geburtszeit starten?",
    a: "Ja. Hermetia funktioniert auch ohne exakte Uhrzeit, kennzeichnet aber, welche Systeme dadurch weniger sicher sind. Du kannst die Geburtszeit später nachtragen.",
  },
  {
    q: "Brauche ich eine Kreditkarte für den Einstieg?",
    a: "Nein. Der erste Profilstart ist als kostenloser Einstieg ohne Kreditkarte gedacht. Bezahlte Modelle werden erst später bewusst gewählt.",
  },
  {
    q: "Warum muss ich einer sensiblen Verarbeitung zustimmen?",
    a: "Aus Geburtsdaten und Systemen können spirituell-weltanschauliche Profilinhalte entstehen. Hermetia behandelt diese Inhalte als sensibel und erklärt Einwilligung und Rechte vor der Verarbeitung.",
  },
  {
    q: "Was passiert nach der ersten Seelenkarte?",
    a: "Du kannst die ersten Themen lesen, die Methode prüfen und entscheiden, ob du weitere Ebenen, Tagesimpulse, Journaling oder Beziehungsauswertungen nutzen möchtest.",
  },
  {
    q: "Werde ich direkt zu einem Kauf gedrängt?",
    a: "Nein. Der Profilstart ist als kostenloser Resonanztest gedacht. Premium wird erst sinnvoll, wenn du nach der ersten Seelenkarte mehr Tiefe wirklich nutzen möchtest.",
  },
  {
    q: "Was passiert, wenn ich die App nach dem Start verlasse?",
    a: "Dein Konto bleibt der Wiederaufnahmeweg. Du kannst zurückkehren und dort weitermachen, wo dein Profilstand gespeichert ist.",
  },
  {
    q: "Kann ich meine Daten später korrigieren?",
    a: "Ja. Du kannst Geburtszeit, Feedback, Einstellungen und spätere Ergänzungen nachvollziehbar nachtragen, wenn du dein Profil verfeinern möchtest.",
  },
];

const onboardingCopy = {
  de: {
    seoTitle: "Hermetia Profil starten - Ablauf, Geburtsdaten, Einwilligung und Seelenkarte",
    seoDescription:
      "So funktioniert der kostenlose Profilstart bei Hermetia: Sprache, Konto, Geburtsdaten, Einwilligung, Seelenkarte und nächste Schritte.",
    articleHeadline: "Hermetia Profil starten",
    articleDescription: "Ablauf, benötigte Daten, Einwilligung und kostenlose Seelenkarte.",
    breadcrumb: "Profil starten",
    heroKicker: "Profil starten",
    heroTitle: "So kommst du von der Website in deine persönliche Seelenkarte.",
    heroLead:
      "Das Onboarding ist ruhig und verständlich: Du gibst nur ein, was für die Berechnung nötig ist, verstehst vorher die Datenlogik und siehst zuerst kostenlos, ob Hermetia für dich resoniert.",
    heroCta: "Jetzt Profil starten",
    dataCta: "Datenlogik prüfen",
    heroAlt: "Abstrakter Geburtsmoment als Bild für den Hermetia Profilstart",
    heroCaption: "Der Profilstart verbindet Sprache, Geburtsdaten, Einwilligung und die erste Seelenkarte.",
    beforeKicker: "Vor dem Start",
    beforeTitle: "Was vor dem App-Absprung klar sein sollte.",
    beforeText:
      "Vor dem App-Start bekommst du die wichtigsten Antworten zu Daten, Methode und Kosten. So gehst du nicht blind in ein Formular, sondern weißt, warum der nächste Schritt sinnvoll ist.",
    flowKicker: "Ablauf",
    flowTitle: "Vier Schritte, bevor du Tiefe freischaltest.",
    flowText:
      "Hermetia beginnt nicht mit einem überrumpelnden Formular. Der Ablauf erklärt, warum Daten gebraucht werden und was du schon kostenlos sehen kannst.",
    handoffKicker: "App-Handoff",
    handoffTitle: "Was die Website erklärt und was die App übernimmt.",
    handoffText:
      "Der Übergang von Website zur Hermetia-App folgt einem ruhigen Weg: Die Website bereitet vor, die App berechnet, du entscheidest.",
    handoffAlt: "Pipeline von Website-Fragen zu App-Onboarding und Profilberechnung",
    handoffCaption: "Der App-Handoff folgt derselben Logik wie die Methode: Eingaben verstehen, sauber einordnen, erst dann deuten.",
    prepareKicker: "Vorbereitung",
    prepareTitle: "Was du bereithalten kannst.",
    prepareText:
      "Du kannst auch spontan starten. Wenn du die folgenden Informationen griffbereit hast, wird deine erste Seelenkarte genauer und der Einstieg ruhiger.",
    afterKicker: "Nach dem Start",
    afterTitle: "Was du nach der ersten Seelenkarte tun kannst.",
    afterText:
      "Der wichtigste Conversion-Moment kommt nicht vor dem Profil, sondern danach: Wenn die ersten Themen Resonanz haben, wird bezahlte Tiefe erklärbar.",
    freePremiumCta: "Kostenlos vs Premium verstehen",
    finalKicker: "Kostenloser Einstieg",
    finalTitle: "Starte mit der Seelenkarte, nicht mit einer Kaufentscheidung.",
    finalText:
      "Der erste Schritt zeigt, ob Hermetia für dich stimmt. Bezahlte Modelle sind für spätere Tiefe gedacht: Ebenen, Tagesimpulse, Journaling, Buch und Beziehungsauswertungen.",
    finalCta: "Profil kostenlos starten",
    finalSecondaryCta: "Kostenlos vs Premium",
    uncertaintyTitle: "Wenn etwas unsicher ist",
    uncertaintyText:
      "Keine genaue Uhrzeit? Kein Problem. Hermetia kennzeichnet Sicherheit und Unsicherheit, statt so zu tun, als wäre jede Aussage gleich belastbar.",
    faqKicker: "FAQ",
    faqTitle: "Häufige Fragen zum Profilstart",
    checkLabel: "Check",
    steps,
    prepare,
    trustBeforeStart,
    appHandoff,
    afterStart,
    faq,
  },
  en: {
    seoTitle: "Start your Hermetia profile - flow, birth data, consent and soul map",
    seoDescription:
      "How the free Hermetia profile start works: language, account, birth data, consent, soul map and next steps.",
    articleHeadline: "Start your Hermetia profile",
    articleDescription: "Flow, required data, consent and free soul map.",
    breadcrumb: "Start profile",
    heroKicker: "Start profile",
    heroTitle: "How you move from the website into your personal soul map.",
    heroLead:
      "Onboarding is calm and understandable: you enter only what is needed for calculation, understand the data logic first and see for free whether Hermetia resonates with you.",
    heroCta: "Start profile now",
    dataCta: "Check data logic",
    heroAlt: "Abstract birth moment as an image for starting a Hermetia profile",
    heroCaption: "The profile start connects language, birth data, consent and the first soul map.",
    beforeKicker: "Before you start",
    beforeTitle: "What should be clear before entering the app.",
    beforeText:
      "Before entering the app, you get the key answers about data, method and cost. You do not fall blindly into a form; you understand why the next step makes sense.",
    flowKicker: "Flow",
    flowTitle: "Four steps before you unlock depth.",
    flowText:
      "Hermetia does not start with an overwhelming form. The flow explains why data is needed and what you can already see for free.",
    handoffKicker: "App handoff",
    handoffTitle: "What the website explains and what the app takes over.",
    handoffText:
      "The move from the website to the Hermetia app follows one calm path: the website prepares, the app calculates, you decide.",
    handoffAlt: "Pipeline from website questions to app onboarding and profile calculation",
    handoffCaption: "The app handoff follows the same logic as the method: understand inputs, classify them carefully, then interpret.",
    prepareKicker: "Preparation",
    prepareTitle: "What you can have ready.",
    prepareText:
      "You can also start spontaneously. If you have the following information ready, your first soul map becomes more precise and the entry feels calmer.",
    afterKicker: "After the start",
    afterTitle: "What you can do after your first soul map.",
    afterText:
      "The most important conversion moment does not happen before the profile, but afterwards: when the first themes resonate, paid depth becomes explainable.",
    freePremiumCta: "Understand Free vs Premium",
    finalKicker: "Free start",
    finalTitle: "Start with the soul map, not with a purchase decision.",
    finalText:
      "The first step shows whether Hermetia fits you. Paid models are for later depth: levels, daily impulses, journaling, book and relationship readings.",
    finalCta: "Start profile for free",
    finalSecondaryCta: "Free vs Premium",
    uncertaintyTitle: "If something is uncertain",
    uncertaintyText:
      "No exact birth time? No problem. Hermetia marks certainty and uncertainty instead of pretending every statement is equally reliable.",
    faqKicker: "FAQ",
    faqTitle: "Frequently asked questions about starting a profile",
    checkLabel: "Check",
    steps: [
      { n: "01", title: "Choose language and account", text: "You start with your preferred language and an account. The language is passed to the app so the entry does not begin from zero." },
      { n: "02", title: "Enter birth data", text: "Hermetia needs date of birth, place of birth and, if available, birth time. If you do not know the exact time, you can still continue." },
      { n: "03", title: "Understand consent", text: "Before sensitive profile content is created, it must be clear which data is processed, why GDPR Art. 9 is relevant and which rights you have." },
      { n: "04", title: "View your soul map", text: "The free start shows the first soul map and core themes. Only afterwards do you decide whether paid depth makes sense." },
    ],
    prepare: ["date of birth", "place of birth", "birth time, if known", "an email address for your account", "a few quiet minutes to actually read the first themes"],
    trustBeforeStart: [
      { title: "Free before purchase", text: "The first profile start tests resonance before a plan is chosen. That reduces pressure and makes later Premium decisions more conscious." },
      { title: "Data logic before input", text: "You understand in advance why birth data, consent and derived profile content are sensitive and which rights you have." },
      { title: "Uncertainty stays visible", text: "If birth time is missing or an input is approximate, Hermetia must mark that instead of making every statement feel equally certain." },
    ],
    appHandoff: [
      { title: "Website explains", text: "The marketing page answers questions about method, data, limits, costs and value before the handoff." },
      { title: "App calculates", text: "Onboarding collects the necessary inputs, handles consent and creates the first personal soul map from them." },
      { title: "You decide", text: "After the free start, you consciously check whether full profile, daily impulses, journaling, Companion or relationships make sense." },
    ],
    afterStart: [
      "read first soul map and core themes",
      "understand data quality and uncertain areas",
      "test resonance for free, without a credit card",
      "add birth time or feedback later if needed",
      "compare Premium models only afterwards",
    ],
    faq: [
      { q: "Can I start without an exact birth time?", a: "Yes. Hermetia works without an exact time, but marks which systems become less certain. You can add the birth time later." },
      { q: "Do I need a credit card to start?", a: "No. The first profile start is designed as a free entry without a credit card. Paid models are chosen consciously later." },
      { q: "Why do I need to consent to sensitive processing?", a: "Birth data and systems can create spiritual or worldview-related profile content. Hermetia treats this content as sensitive and explains consent and rights before processing." },
      { q: "What happens after the first soul map?", a: "You can read the first themes, review the method and decide whether you want to use further levels, daily impulses, journaling or relationship readings." },
      { q: "Will I be pushed directly into a purchase?", a: "No. The profile start is designed as a free resonance test. Premium becomes useful only if you truly want more depth after the first soul map." },
      { q: "What happens if I leave the app after starting?", a: "Your account is the return path. You can come back and continue from the profile state that has been saved." },
      { q: "Can I correct my data later?", a: "Yes. You can add birth time, feedback, settings and later additions traceably when you want to refine your profile." },
    ],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = localizeCopy(locale as Locale, onboardingCopy);
  return buildMetadata({
    locale: locale as Locale,
    path: paths.onboarding,
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function OnboardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const copy = localizeCopy(locale, onboardingCopy);
  const localizedFaq = copy.faq.map(({ q, a }) => ({ q, a }));
  const pageUrl = `${siteUrl}/${locale}${paths.onboarding}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: copy.articleHeadline,
            description: copy.articleDescription,
            locale,
            url: pageUrl,
            about: "Hermetia Onboarding",
            image: `${siteUrl}/images/hermetia/birth-moment-meridian.png`,
          }),
          faqSchema(localizedFaq),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: copy.breadcrumb, url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="onboarding" />
      <main>
        <section className="pb-10 pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">{copy.heroKicker}</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">{copy.heroTitle}</h1>
              <p className="lead mt-5 max-w-[720px]">{copy.heroLead}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "onboarding-guide-hero" })}>{copy.heroCta}</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.datenSicherheit)}>{copy.dataCta}</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/birth-moment-meridian.png" alt={copy.heroAlt} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                {copy.heroCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[820px]">
              <span className="kicker">{copy.beforeKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.beforeTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.beforeText}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {copy.trustBeforeStart.map((item) => (
                <article key={item.title} className="card">
                  <h3 className="text-[21px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15.5px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[760px]">
              <span className="kicker">{copy.flowKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.flowTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.flowText}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {copy.steps.map((step) => (
                <article key={step.n} className="card">
                  <span className="kicker">{step.n}</span>
                  <h3 className="mt-2 text-[21px]">{step.title}</h3>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">{copy.handoffKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.handoffTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.handoffText}</p>
              <div className="mt-6 grid gap-4">
                {copy.appHandoff.map((item) => (
                  <article key={item.title} className="rounded-card border border-sand bg-white p-5 shadow-soft">
                    <h3 className="text-[20px]">{item.title}</h3>
                    <p className="muted mt-2 text-[15px] leading-relaxed">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
            <figure className="m-0 rounded-card border border-sand bg-white p-4 shadow-soft">
              <img src="/graphics/convergence/abb4-pipeline-einordnung.svg" alt={copy.handoffAlt} className="w-full rounded-[6px]" loading="lazy" />
              <figcaption className="muted mt-3 text-[14px] leading-relaxed">
                {copy.handoffCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <span className="kicker">{copy.prepareKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.prepareTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.prepareText}</p>
            </div>
            <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {copy.prepare.map((item) => <li key={item}>{copy.checkLabel}: {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <span className="kicker">{copy.afterKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.afterTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.afterText}</p>
              <a className="btn btn-ghost mt-6" href={localePath(locale, paths.freePremium)}>{copy.freePremiumCta}</a>
            </div>
            <div className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <ul className="flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {copy.afterStart.map((item) => <li key={item}>{copy.checkLabel}: {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-aubergine py-16 text-white">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker text-gold-weich">{copy.finalKicker}</span>
              <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">{copy.finalTitle}</h2>
              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.85] text-[#e9dcf2]">{copy.finalText}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "onboarding-guide-final" })}>{copy.finalCta}</a>
                <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.freePremium)}>{copy.finalSecondaryCta}</a>
              </div>
            </div>
            <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
              <h3 className="text-[24px] text-white">{copy.uncertaintyTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
                {copy.uncertaintyText}
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
