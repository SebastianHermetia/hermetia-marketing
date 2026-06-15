import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { buildMetadata } from "@/lib/seo";
import { paths, startUrl, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { AppCta } from "@/components/AppCta";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const useCases = [
  {
    tag: "Selbstreflexion",
    title: "Wenn du dich besser verstehen willst",
    text: "Hermetia hilft, wiederkehrende Muster, Stärken, Schatten und innere Spannungen in eine Sprache zu bringen. Der Einstieg ist besonders stark, wenn du spürst, dass klassische Persönlichkeitsbeschreibungen zu flach bleiben.",
    cta: "Mit der Seelenkarte beginnen",
    href: paths.seelenkarte,
  },
  {
    tag: "Entscheidungen",
    title: "Wenn du Klarheit suchst, ohne eine Antwort abzugeben",
    text: "Hermetia entscheidet nicht für dich. Die Plattform zeigt innere Prioritäten, Timing-Qualitäten und wiederkehrende Fragen, damit du bewusster prüfen kannst, was stimmig ist.",
    cta: "Methode verstehen",
    href: paths.methodik,
  },
  {
    tag: "Alltag",
    title: "Wenn du eine ruhige tägliche Begleitung möchtest",
    text: "Tagesimpulse und Journaling geben einen kleinen Fokus, ohne Druck oder FOMO. Das passt für Menschen, die Reflexion in den Alltag bringen wollen, statt nur einmal ein großes Profil zu lesen.",
    cta: "Tagesimpulse ansehen",
    href: paths.tagesimpulse,
  },
  {
    tag: "Beziehungen",
    title: "Wenn du Resonanz und Reibung besser einordnen willst",
    text: "Hermetia kann Beziehungsdynamiken als Reflexionsraum sichtbar machen. Entscheidend bleibt klare Einwilligung, denn Profile anderer Menschen sind sensibel.",
    cta: "Beziehungen erkunden",
    href: paths.beziehungen,
  },
  {
    tag: "Berufung",
    title: "Wenn du Arbeit, Energie und Sinn sortieren willst",
    text: "Systemsignale aus Persönlichkeit, Rhythmus und archetypischer Sprache können helfen, Arbeitsweisen, Energiehaushalt und Sehnsucht nach Wirksamkeit neu zu betrachten.",
    cta: "Systeme erkunden",
    href: paths.systeme,
  },
  {
    tag: "Neugier",
    title: "Wenn du mehrere Systeme vergleichbar machen willst",
    text: "Statt Astrologie, Human Design, Gene Keys oder Numerologie isoliert zu lesen, zeigt Hermetia, wo Perspektiven zusammenlaufen und wo sie sich produktiv widersprechen.",
    cta: "Vergleiche lesen",
    href: paths.vergleiche,
  },
];

const searchQuestions = [
  {
    q: "Wofür kann ich Hermetia nutzen?",
    a: "Für Selbstreflexion, Entscheidungsfragen, Beziehungsdynamiken, berufliche Orientierung, tägliche Impulse und die verständliche Einordnung verschiedener Deutungssysteme.",
  },
  {
    q: "Hilft Hermetia bei Beziehungen?",
    a: "Hermetia kann Resonanz, Reibung und wiederkehrende Muster als Reflexionsraum sichtbar machen. Profile anderer Menschen gehören aber nur mit klarer Einwilligung in die Auswertung.",
  },
  {
    q: "Wann lohnt sich ein bezahltes Modell?",
    a: "Wenn aus dem kostenlosen Aha-Moment eine regelmäßige Praxis werden soll: mehr Ebenen, Journaling, Tagesimpulse, Profilbuch, Beziehungsebene oder längere Begleitung.",
  },
  {
    q: "Was darf Hermetia nicht ersetzen?",
    a: "Keine Therapie, keine Diagnose, keine medizinische, rechtliche oder finanzielle Beratung und keine sicheren Zukunftsversprechen.",
  },
];

const journey = [
  {
    step: "1",
    title: "Neugier",
    text: "Die Website beantwortet Grundfragen: Was ist Hermetia, welche Systeme werden betrachtet, welche Grenzen gelten und welche Anwendungsfälle passen wirklich?",
  },
  {
    step: "2",
    title: "Kostenloser Profilstart",
    text: "Im Onboarding entsteht die erste persönliche Seelenkarte. Nutzer prüfen Resonanz, Sprache, Datenschutzgefühl und die ersten Kernthemen ohne Kaufdruck.",
  },
  {
    step: "3",
    title: "Bewusste Vertiefung",
    text: "Premium wird sinnvoll, wenn die erste Resonanz tragfähig ist und die Person mehr Tiefe, Alltag, Journaling, Beziehungsauswertung oder ein Vollprofil-Buch nutzen möchte.",
  },
  {
    step: "4",
    title: "Fortlaufende Praxis",
    text: "Hermetia wird dann nicht nur gelesen, sondern als ruhige Reflexionsumgebung genutzt: beobachten, schreiben, vergleichen, nachjustieren und Verantwortung behalten.",
  },
];

const deepUseCases = [
  {
    title: "Identität und Selbstbild",
    image: "/images/hermetia/resonance-instrument.png",
    alt: "Ein fein abgestimmtes Resonanzinstrument als Symbol für Selbstbild und persönliche Muster",
    text: "Viele Nutzer kommen zu Hermetia, weil sie sich in gängigen Persönlichkeitstypen nur teilweise wiederfinden. Die Plattform betrachtet keine einzelne Schublade, sondern wiederkehrende Signale aus mehreren Systemfamilien. Dadurch entsteht eine Sprache für innere Spannungen: Was wirkt stabil? Was zeigt sich zyklisch? Welche Seite möchte gesehen werden, ohne sofort zur neuen Identität zu werden?",
    goodFor: ["Muster benennen", "Stärken und Schatten sortieren", "Selbstbeschreibung präzisieren"],
    cta: "use-cases-identity",
  },
  {
    title: "Entscheidungen und Übergänge",
    image: "/images/hermetia/dawn-clock-of-becoming.png",
    alt: "Eine helle Uhrlandschaft als Bild für Übergänge, Timing und bewusste Entscheidungen",
    text: "Bei Berufswechsel, Beziehungsklärung, Umzug, Kreativprojekten oder inneren Neuanfängen suchen Menschen häufig nicht nur Fakten, sondern Orientierung. Hermetia liefert keine Anweisung. Es zeigt, welche Themen, Rhythmen und archetypischen Spannungen im eigenen Profil wiederkehren, damit Entscheidungen bewusster geprüft werden können.",
    goodFor: ["Fragen strukturieren", "Timing reflektieren", "innere Prioritäten erkennen"],
    cta: "use-cases-decisions",
  },
  {
    title: "Beziehungen und Resonanz",
    image: "/images/hermetia/garden-of-agreements.png",
    alt: "Ein ruhiger Garten als Symbol für Beziehung, Grenzen und gegenseitige Einwilligung",
    text: "Beziehungsarbeit braucht Sorgfalt. Hermetia kann helfen, Unterschiedlichkeit nicht sofort als Fehler zu lesen: Nähe und Autonomie, Tempo und Tiefe, Sicherheit und Abenteuer. Der ethische Rahmen ist dabei klar: Beziehungsauswertungen setzen Einwilligung voraus und bleiben Reflexionshilfe, keine Bewertung eines Menschen.",
    goodFor: ["Resonanz verstehen", "Reibung entdramatisieren", "Einwilligung respektieren"],
    cta: "use-cases-relationships",
  },
  {
    title: "Alltag, Journaling und Integration",
    image: "/images/hermetia/alchemical-listening-room.png",
    alt: "Ein stiller Raum als Bild für Journaling, Integration und tägliche Reflexion",
    text: "Der größte Wert entsteht nicht immer im ersten großen Profil, sondern in der Wiederholung. Tagesimpulse, Journaling und Profilverfeinerung helfen, Erkenntnisse im Alltag zu prüfen: Was stimmt heute? Was verändert sich? Welche Sprache unterstützt, ohne Druck zu erzeugen?",
    goodFor: ["tägliche Reflexion", "Journaling-Routinen", "Erkenntnisse integrieren"],
    cta: "use-cases-journaling",
  },
];

const goodFit = [
  "Du möchtest dich selbst besser verstehen, ohne dich auf eine starre Identität festzulegen.",
  "Du magst spirituelle Systeme, willst aber Transparenz, Datenschutz und klare Grenzen.",
  "Du suchst einen ruhigen Einstieg und möchtest erst kostenlos prüfen, ob die Sprache resoniert.",
  "Du willst später bewusst entscheiden, ob tiefere Ebenen, Journaling oder Beziehungsauswertungen den Preis wert sind.",
];

const badFit = [
  "Du erwartest Diagnosen, Therapie, medizinische Einschätzungen oder psychologische Behandlung.",
  "Du möchtest sichere Vorhersagen über Zukunft, Liebe, Geld, Gesundheit oder Schicksal.",
  "Du suchst eine Autorität, die dir Entscheidungen abnimmt.",
  "Du möchtest Profile anderer Menschen ohne deren Einwilligung auswerten.",
];

const conversionPrinciples = [
  "Jede inhaltliche Seite soll einen passenden Weg zum Profilstart anbieten, aber nicht jede Seite muss hart verkaufen.",
  "Der kostenlose Einstieg ist der erste Vertrauensmoment: Nutzer sollen Resonanz prüfen, bevor sie ein bezahltes Modell wählen.",
  "Premium-CTAs gehören besonders dort hin, wo Tiefe, Alltag, Journaling, Beziehung oder Vollprofil-Buch erklärt werden.",
  "Rechtliche Grenzen, Datenschutz und IP-Sorgfalt bleiben sichtbar, damit Conversion nicht auf überzogenen Versprechen basiert.",
];

const legalFrames = [
  {
    title: "Keine Diagnose und keine Heilsversprechen",
    text: "Anwendungsfälle werden als Reflexionsräume formuliert. Hermetia macht keine medizinischen, psychotherapeutischen, rechtlichen oder finanziellen Aussagen und ersetzt keine professionelle Hilfe.",
  },
  {
    title: "Eigene Sprache statt geschützter Deutungstexte",
    text: "Die Seite beschreibt Systeme, Muster und Hermetias Methodik in eigener redaktioneller Sprache. Proprietäre Texte, Tabellen, Formulierungen oder geschützte Auszüge anderer Anbieter werden nicht übernommen.",
  },
  {
    title: "Einwilligung bei sensiblen Profilen",
    text: "Beziehungs- und Vergleichsanwendungen werden an klare Zustimmung gebunden. Das schützt Privatsphäre, Vertrauen und die spätere Produktlogik.",
  },
];

const faq = [
  {
    q: "Für wen ist Hermetia am besten geeignet?",
    a: "Hermetia passt zu Menschen, die spirituelle und psychologische Systeme als Reflexionssprache nutzen möchten und dabei Wert auf Transparenz, Datenschutz, klare Grenzen und eine ästhetische Nutzererfahrung legen.",
  },
  {
    q: "Kann Hermetia bei wichtigen Lebensentscheidungen helfen?",
    a: "Hermetia kann Fragen, Muster und innere Prioritäten sichtbar machen. Es entscheidet aber nicht für dich und ersetzt keine professionelle Beratung bei medizinischen, psychologischen, rechtlichen oder finanziellen Themen.",
  },
  {
    q: "Ist Hermetia eher für Anfänger oder Fortgeschrittene?",
    a: "Beides. Anfänger erhalten eine verständliche Synthese, ohne Fachwissen zu brauchen. Fortgeschrittene können tiefer in Systeme, Konvergenz und Vergleichsseiten einsteigen.",
  },
  {
    q: "Warum sollte ich mich anmelden?",
    a: "Die Website erklärt das Konzept allgemein. Erst im Onboarding entsteht deine persönliche Seelenkarte aus deinen Daten. Der kostenlose Einstieg zeigt erste Kernthemen, bevor du über ein bezahltes Modell entscheidest.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: paths.anwendungsfaelle,
    title: "Hermetia Anwendungsfälle — Selbstreflexion, Beziehungen, Berufung und Alltag",
    description:
      "Für wen Hermetia geeignet ist, welche Situationen besonders gut passen und wo die Grenzen liegen: Anwendungsfälle, Pro/Contra und FAQ.",
  });
}

export default async function UseCasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const pageUrl = `${siteUrl}/${locale}${paths.anwendungsfaelle}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "Hermetia Anwendungsfälle",
            description: "Selbstreflexion, Beziehungen, Berufung, Tagesimpulse und klare Grenzen.",
            locale,
            url: pageUrl,
            about: "Hermetia Anwendungsfälle",
            image: `${siteUrl}/images/hermetia/library-of-self-profile.png`,
          }),
          faqSchema(faq),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "Anwendungsfälle", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="anwendungsfaelle" />
      <main>
        <section className="pb-10 pt-16">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.95fr]">
            <div>
              <span className="kicker">Anwendungsfälle</span>
              <h1 className="mt-3 text-[clamp(34px,5.5vw,54px)] leading-[1.08]">Wofür Hermetia besonders gut geeignet ist.</h1>
              <p className="lead mt-5 max-w-[720px]">
                Hermetia ist kein Orakel, keine Diagnose und kein Ersatz für Beratung. Es ist ein Reflexionssystem für Menschen, die sich selbst, ihre Beziehungen und ihre inneren Muster tiefer verstehen wollen und dafür einen ruhigen, transparenten Einstieg suchen.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "use-cases-hero" })}>Profil kostenlos starten</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.preise)}>Modelle vergleichen</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/library-of-self-profile.png" alt="Eine ruhige Bibliothek als Bild für Selbstreflexion und Hermetia Anwendungsfälle" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                Die beste Anwendung beginnt nicht mit einem Versprechen, sondern mit einer guten Frage: Was erkenne ich wieder?
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 max-w-[780px]">
              <span className="kicker">Suchfragen</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Welche Anwendungsfragen beantwortet Hermetia?</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Diese Seite ist für Menschen gebaut, die noch nicht sicher sind, ob Hermetia nur interessant klingt oder im eigenen Leben wirklich nützlich werden kann. Die wichtigsten Antwortmaschinen-Fragen stehen deshalb direkt am Anfang.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {searchQuestions.map((item) => (
                <article key={item.q} className="card">
                  <h3 className="text-[21px]">{item.q}</h3>
                  <p className="muted mt-3 text-[15.5px] leading-relaxed">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[760px]">
              <span className="kicker">Situationen</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Sechs Wege, Hermetia sinnvoll zu nutzen.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Die Website ist als Ressource aufgebaut. Die App macht daraus persönliche Erfahrung: kostenlos starten, erste Kernthemen sehen und danach entscheiden, ob mehr Tiefe sinnvoll ist.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <article key={item.title} className="card flex flex-col">
                  <span className="chip w-fit">{item.tag}</span>
                  <h3 className="mt-4 text-[22px]">{item.title}</h3>
                  <p className="muted mt-3 flex-1 text-[15px] leading-relaxed">{item.text}</p>
                  <a className="note mt-5 font-semibold text-gold no-underline" href={localePath(locale, item.href)}>{item.cta} →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[780px]">
              <span className="kicker">Nutzerreise</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Vom ersten Interesse zur bezahlten Tiefe.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Das Ziel der Website ist nicht nur Information, sondern ein klarer, vertrauensvoller Weg in die Hermetia-App. Wer neugierig wird, soll jederzeit starten können. Wer tiefer einsteigen will, soll verstehen, warum ein bezahltes Modell sinnvoll ist.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {journey.map((item) => (
                <article key={item.title} className="rounded-card border border-sand bg-white p-6 shadow-soft">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aubergine text-[15px] font-bold text-white">{item.step}</span>
                  <h3 className="mt-5 text-[21px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-9">
              <AppCta
                locale={locale}
                title="Teste den wichtigsten Anwendungsfall zuerst: dein eigenes Profil."
                text="Die beste Erklärung bleibt allgemein. Der kostenlose Profilstart zeigt, ob Hermetia bei dir persönlich Resonanz erzeugt."
                source="use-cases-journey"
              />
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[820px]">
              <span className="kicker">Vertiefung</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Vier Anwendungsfelder, in denen Hermetia besonders stark wird.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Die einzelnen Bereiche können getrennt gelesen werden. In der App laufen sie zusammen: Seelenkarte, Systeme, Tagesimpulse, Journaling, Profilbuch und Beziehungsebene bilden eine fortlaufende Reflexionsumgebung.
              </p>
            </div>
            <div className="grid gap-6">
              {deepUseCases.map((item, idx) => (
                <article key={item.title} className="grid overflow-hidden rounded-card border border-sand bg-white shadow-soft lg:grid-cols-[.82fr_1fr]">
                  <img src={item.image} alt={item.alt} className="h-full min-h-[280px] w-full object-cover" loading={idx === 0 ? "eager" : "lazy"} />
                  <div className="p-7">
                    <span className="chip">Anwendungsfeld</span>
                    <h3 className="mt-4 text-[clamp(24px,3vw,32px)]">{item.title}</h3>
                    <p className="muted mt-4 text-[16.5px] leading-[1.85]">{item.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.goodFor.map((signal) => (
                        <span key={signal} className="rounded-full border border-salbei/45 bg-salbei/15 px-3 py-1 text-[13px] font-semibold text-pflaume">{signal}</span>
                      ))}
                    </div>
                    <a className="btn btn-primary mt-6" href={startUrl(locale, { source: item.cta })}>Diesen Fall mit meinem Profil prüfen</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-salbei/40 bg-white p-7 shadow-soft">
              <span className="chip">Gute Passung</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">Hermetia passt gut, wenn...</h2>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {goodFit.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
            <div className="rounded-card border border-altrosa/35 bg-altrosa/10 p-7">
              <span className="chip chip-rose">Grenzen</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">Hermetia passt nicht, wenn...</h2>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {badFit.map((item) => <li key={item}>× {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker">Conversion-Prinzip</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Neugier soll in Anmeldung übergehen, aber mit Vertrauen.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Hermetia verkauft am stärksten, wenn Nutzer die eigene Entscheidung als selbstbestimmt erleben. Deshalb verbinden die Inhalte klare Nutzenfelder mit sichtbaren Grenzen, Einwilligung und einem kostenlosen Einstieg.
              </p>
              <ul className="mt-6 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {conversionPrinciples.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
            <figure className="m-0 rounded-card border border-sand bg-white p-4 shadow-soft">
              <img src="/graphics/convergence/abb5-algorithmus-funnel.svg" alt="Grafik zum Weg von Daten über Einordnung zu verständlicher Hermetia-Sprache" className="w-full rounded-[6px]" loading="lazy" />
              <figcaption className="muted mt-3 text-[14px] leading-relaxed">
                Der Funnel zeigt, warum Hermetia nicht einfach Systemtexte addiert, sondern Signale prüft, dämpft und in eigene Sprache übersetzt.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 max-w-[780px]">
              <span className="kicker">Rechtlicher Rahmen</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">Was Anwendungsfälle versprechen dürfen und was nicht.</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                Für Reichweite, Vertrauen und spätere Paid-Conversion ist entscheidend, dass der Content rechtlich sauber bleibt. Hermetia formuliert Nutzen als Reflexion, nicht als Garantie.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {legalFrames.map((item) => (
                <article key={item.title} className="card">
                  <h3 className="text-[21px]">{item.title}</h3>
                  <p className="muted mt-3 text-[15.5px] leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-aubergine py-16 text-white">
          <div className="wrap grid items-center gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker text-gold-weich">Nächster Schritt</span>
              <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">Prüfe Hermetia an deinem eigenen Profil.</h2>
              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.85] text-[#e9dcf2]">
                Allgemeine Inhalte können Orientierung geben. Der Aha-Moment entsteht, wenn Hermetia deine eigenen Daten berechnet und die ersten Themen sichtbar macht. Der Einstieg bleibt kostenlos.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "use-cases-final" })}>Profil kostenlos starten</a>
                <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.about)}>Über Hermetia lesen</a>
              </div>
            </div>
            <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
              <h3 className="text-[24px] text-white">Vom Content zur App</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
                Diese Seite hilft bei der Entscheidung, ob Hermetia grundsätzlich passt. Das Onboarding macht daraus eine persönliche Seelenkarte. Bezahlte Modelle öffnen erst danach die tiefere Begleitung.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 text-center">
              <span className="kicker">FAQ</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">Häufige Fragen zu Anwendungsfällen</h2>
            </div>
            <Faq items={faq} />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
