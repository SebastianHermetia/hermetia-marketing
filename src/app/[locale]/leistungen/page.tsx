import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localizeCopy } from "@/i18n/localized-content";
import { buildMetadata } from "@/lib/seo";
import { startUrl, paths, localePath } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SoulMap } from "@/components/SoulMap";
import { Faq } from "@/components/Faq";
import { JsonLd, articleSchema, breadcrumbSchema, faqSchema } from "@/components/JsonLd";

const servicesPageCopy = {
  de: {
    comparePricesCta: "Preise vergleichen",
    soulmapExtra:
      "Die Seelenkarte ist der Moment, in dem Website-Content zur persönlichen Erfahrung wird. Sie verbindet berechnete Systemsignale, Konvergenz und verständliche Sprache zu einem Einstieg, der neugierig macht, ohne eine Identität festzuschreiben.",
    offerKicker: "Leistungsbereiche",
    offerTitle: "Vom ersten Profil bis zur bezahlten Tiefe.",
    offerText:
      "Hermetia führt von Orientierung zu persönlicher Resonanz und erst danach zu einer bewussten Entscheidung für mehr Tiefe. Jede Leistung macht entweder den Einstieg verständlicher oder den Wert eines bezahlten Modells greifbar.",
    offerBlocks: [
      {
        tag: "Kostenloser Einstieg",
        title: "Seelenkarte und erste Kernthemen",
        text: "Der Einstieg macht direkt erlebbar, ob die Sprache resoniert. Deshalb beginnt Hermetia mit deiner Seelenkarte, ersten Kernthemen und einer verständlichen Einordnung der Systeme, ohne Kreditkarte und ohne Druck zum Upgrade.",
        href: paths.seelenkarte,
        cta: "Seelenkarte verstehen",
      },
      {
        tag: "Bezahlte Tiefe",
        title: "Ebenen, Vollprofil-Buch und langfristige Begleitung",
        text: "Premium wird dort sinnvoll, wo aus einem Aha-Moment ein wiederkehrender Reflexionsraum wird. Zusätzliche Ebenen, das Vollprofil-Buch, Tagesimpulse, Journaling, Monatsrückblicke und Profilverfeinerung schaffen Tiefe, weil sie dein Profil nicht nur anzeigen, sondern über Zeit lesbar machen.",
        href: paths.freePremium,
        cta: "Kostenlos vs. Premium",
      },
      {
        tag: "Sensible Module",
        title: "Beziehungen, Companion und persönliche Daten",
        text: "Beziehungsprofile, Companion-Dialoge und Journal-Zusammenfassungen brauchen besondere Sorgfalt. Hermetia erklärt deshalb Einwilligung, AI-Transparenz, Löschung, Export und Grenzen klar. Die Leistung ist nicht nur Inhalt, sondern auch verantwortungsvolle Rahmung.",
        href: paths.datenSicherheit,
        cta: "Daten und Sicherheit",
      },
    ],
    levelsExtra:
      "Die Ebenen sind bewusst nicht als endlose Textwand gedacht. Sie ordnen persönliche Themen in lesbare Räume: Kern, Gaben, Schatten, Beziehung, Arbeit, Rhythmus und Entwicklung. Dadurch entsteht ein natürlicher Grund, nach dem kostenlosen Einstieg tieferzugehen.",
    depthKicker: "Wertlogik",
    depthTitle: "Welche Tiefe entsteht in welchem Schritt?",
    depthText:
      "Die Leistungen bauen aufeinander auf. Ein einzelnes Feature ist hilfreich, aber der eigentliche Wert entsteht, wenn Profil, Methode, Alltag und Rückblick zusammenkommen.",
    depthCta: "Profil kostenlos starten",
    depthRows: [
      ["Profil-Grundlage", "Geburtsdaten, Ort, Zeitqualität, Selbstauskunft und Systemfamilien werden getrennt berechnet.", "Kostenlos erlebbar"],
      ["Konvergenz", "Hermetia erkennt, welche Themen über unabhängige Perspektiven hinweg wiederkehren.", "Kern der Methode"],
      ["Ebenen", "Wesenskern, Gaben, Schatten, Beziehung, Berufung, Rhythmus und Entwicklung werden einzeln lesbar.", "Premium-Tiefe"],
      ["Alltag", "Tagesimpulse, Journaling und Rückblicke verbinden Profilwissen mit gelebter Erfahrung.", "Begleitung"],
      ["Ausgabe", "Das Vollprofil-Buch bündelt die wichtigsten Aussagen in einer ruhigen, wiederlesbaren Form.", "Premium-Asset"],
    ],
    decisionCards: [
      {
        title: "Warum kostenlos starten?",
        text: "Weil Hermetia sehr persönlich wirkt und niemand vorab wissen kann, ob die Sprache passt. Der kostenlose Einstieg senkt die Schwelle, zeigt erste Resonanz und macht die spätere Kaufentscheidung bewusster.",
      },
      {
        title: "Wann lohnt sich Premium?",
        text: "Wenn du nicht nur ein Ergebnis sehen willst, sondern deine Themen über mehrere Ebenen, Tage und Reflexionsfragen hinweg vertiefen möchtest. Premium verkauft keine Gewissheit, sondern mehr Struktur, Lesbarkeit und Begleitung.",
      },
      {
        title: "Was bleibt bewusst begrenzt?",
        text: "Hermetia stellt keine Diagnosen, trifft keine Entscheidungen und verspricht keine Zukunft. Die Inhalte sind eigene, rechtlich vorsichtig formulierte Reflexionstexte und keine kopierten Systemauszüge Dritter.",
      },
    ],
    imageAlt: "Eine ruhige Profilbibliothek als Bild für Hermetia Leistungen",
    imageCaption:
      "Leistung bedeutet bei Hermetia: persönliche Tiefe, rechtliche Vorsicht und klare Wege vom Content in die App.",
    legalKicker: "Rechtliche und redaktionelle Leitplanken",
    legalTitle: "Eigene Inhalte, klare Grenzen, keine versteckten Versprechen.",
    legalText:
      "Nutzen und Grenzen gehören bei Hermetia zusammen: keine Therapie, keine medizinische Beratung, keine Schicksalsversprechen, keine Profile anderer Personen ohne Einwilligung und keine übernommenen proprietären Deutungstexte. Diese Klarheit stärkt Vertrauen.",
    legalCta: "Sicher starten",
    aiCta: "AI-Transparenz lesen",
    faqKicker: "FAQ",
    faqTitle: "Häufige Fragen zu Hermetia Leistungen",
    servicesFaq: [
      {
        q: "Welche Leistung bekomme ich direkt nach der Anmeldung?",
        a: "Nach dem Onboarding entsteht deine persönliche Seelenkarte mit ersten Kernthemen. Der kostenlose Einstieg zeigt, ob die Deutungssprache resoniert, bevor du ein bezahltes Modell auswählst.",
      },
      {
        q: "Was unterscheidet Hermetia von einem normalen Persönlichkeitstest?",
        a: "Ein Persönlichkeitstest basiert meist auf Antworten. Hermetia verbindet Selbstauskunft mit berechneten Systemen, Konvergenz, AI-gestützter Formulierung und klaren Grenzen. Es bleibt Reflexion, nicht Diagnose.",
      },
      {
        q: "Sind Beziehungsprofile ohne Einwilligung möglich?",
        a: "Nein. Beziehungsprofile betreffen immer auch eine zweite Person. Hermetia beschreibt sie deshalb als sensibles Modul, das informierte Einwilligung, transparente Zwecke und respektvolle Grenzen braucht.",
      },
      {
        q: "Warum gibt es mehrere bezahlte Modelle?",
        a: "Nicht jeder braucht dieselbe Tiefe. Manche Nutzer wollen nur die Seelenkarte, andere zusätzlich Tagesimpulse, Journaling, Vollprofil-Buch, Companion oder Beziehungsprofile. Die Website erklärt diese Entscheidung offen.",
      },
      {
        q: "Nutzt Hermetia geschützte Texte aus Astrologie, Human Design oder Gene Keys?",
        a: "Hermetia verwendet eigene Sprache und keine proprietären Deutungstexte, Kartentexte oder Fragebogenitems Dritter. Systembezüge werden beschreibend, transformativ und vorsichtig formuliert.",
      },
    ],
  },
  en: {
    comparePricesCta: "Compare pricing",
    soulmapExtra:
      "The soul map is the moment when website content becomes a personal experience. It connects calculated system signals, convergence and understandable language into an entry point that creates curiosity without locking anyone into an identity.",
    offerKicker: "Feature areas",
    offerTitle: "From the first profile to paid depth.",
    offerText:
      "Hermetia leads from orientation to personal resonance and only then to a conscious decision for more depth. Each feature either makes the start clearer or makes the value of a paid model tangible.",
    offerBlocks: [
      {
        tag: "Free start",
        title: "Soul map and first core themes",
        text: "The entry point lets you feel directly whether the language resonates. That is why Hermetia starts with your soul map, first core themes and an understandable framing of the systems, without a credit card and without upgrade pressure.",
        href: paths.seelenkarte,
        cta: "Understand the soul map",
      },
      {
        tag: "Paid depth",
        title: "Levels, full profile book and long-term guidance",
        text: "Premium becomes meaningful when an aha moment turns into a recurring reflection space. Additional levels, the full profile book, daily impulses, journaling, monthly reviews and profile refinement create depth because they make your profile readable over time.",
        href: paths.freePremium,
        cta: "Free vs. Premium",
      },
      {
        tag: "Sensitive modules",
        title: "Relationships, Companion and personal data",
        text: "Relationship profiles, Companion dialogues and journal summaries need special care. Hermetia therefore explains consent, AI transparency, deletion, export and limits clearly. The feature is not just content, but also responsible framing.",
        href: paths.datenSicherheit,
        cta: "Data and security",
      },
    ],
    levelsExtra:
      "The levels are deliberately not an endless wall of text. They organize personal themes into readable spaces: core, gifts, shadows, relationships, work, rhythm and development. That creates a natural reason to go deeper after the free start.",
    depthKicker: "Value logic",
    depthTitle: "Which depth emerges at which step?",
    depthText:
      "The features build on one another. A single feature can be useful, but the real value appears when profile, method, daily life and review come together.",
    depthCta: "Start profile for free",
    depthRows: [
      ["Profile basis", "Birth data, place, time quality, self-report and system families are calculated separately.", "Available for free"],
      ["Convergence", "Hermetia recognizes which themes repeat across independent perspectives.", "Core method"],
      ["Levels", "Essence, gifts, shadow, relationships, calling, rhythm and development become individually readable.", "Premium depth"],
      ["Daily life", "Daily impulses, journaling and reviews connect profile knowledge with lived experience.", "Companion"],
      ["Output", "The full profile book gathers the most important statements in a calm, rereadable form.", "Premium asset"],
    ],
    decisionCards: [
      {
        title: "Why start free?",
        text: "Because Hermetia can feel very personal and nobody can know in advance whether the language fits. The free start lowers the threshold, shows first resonance and makes a later purchase decision more conscious.",
      },
      {
        title: "When is Premium worth it?",
        text: "When you do not only want to see a result, but want to deepen your themes across levels, days and reflection questions. Premium does not sell certainty, but more structure, readability and guidance.",
      },
      {
        title: "What remains deliberately limited?",
        text: "Hermetia does not diagnose, make decisions or promise the future. The content is original, legally careful reflection language and not copied excerpts from third-party systems.",
      },
    ],
    imageAlt: "A calm profile library as an image for Hermetia features",
    imageCaption:
      "In Hermetia, a feature means personal depth, legal care and clear paths from content into the app.",
    legalKicker: "Legal and editorial guardrails",
    legalTitle: "Original content, clear limits, no hidden promises.",
    legalText:
      "Value and limits belong together at Hermetia: no therapy, no medical advice, no destiny promises, no profiles of other people without consent and no copied proprietary interpretation texts. This clarity builds trust.",
    legalCta: "Start safely",
    aiCta: "Read AI transparency",
    faqKicker: "FAQ",
    faqTitle: "Frequently asked questions about Hermetia features",
    servicesFaq: [
      {
        q: "Which feature do I get right after signup?",
        a: "After onboarding, your personal soul map with first core themes is created. The free start shows whether the interpretation language resonates before you choose a paid model.",
      },
      {
        q: "How is Hermetia different from a normal personality test?",
        a: "A personality test is usually based on answers. Hermetia connects self-report with calculated systems, convergence, AI-assisted wording and clear limits. It remains reflection, not diagnosis.",
      },
      {
        q: "Are relationship profiles possible without consent?",
        a: "No. Relationship profiles always affect a second person as well. Hermetia therefore frames them as a sensitive module that needs informed consent, transparent purposes and respectful limits.",
      },
      {
        q: "Why are there several paid models?",
        a: "Not everyone needs the same depth. Some users only want the soul map, while others want daily impulses, journaling, the full profile book, Companion or relationship profiles. The website explains that decision openly.",
      },
      {
        q: "Does Hermetia use protected texts from astrology, Human Design or Gene Keys?",
        a: "The marketing website uses original language and no proprietary interpretation texts, card texts or questionnaire items from third parties. System references are descriptive, transformative and carefully framed.",
      },
    ],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale as Locale);
  return buildMetadata({ locale: locale as Locale, path: paths.leistungen, title: t.leistungen.seoTitle, description: t.leistungen.seoDescription });
}

export default async function LeistungenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const p = t.leistungen;
  const copy = localizeCopy(locale, servicesPageCopy);
  const localizedFaq = copy.servicesFaq.map(({ q, a }) => ({ q, a }));
  const pageUrl = `${siteUrl}/${locale}${paths.leistungen}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: p.seoTitle,
            description: p.seoDescription,
            locale,
            url: pageUrl,
            about: "Hermetia Leistungen",
            image: `${siteUrl}/images/hermetia/library-of-self-profile.png`,
          }),
          faqSchema(localizedFaq),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: "Leistungen", url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="leistungen" />

      <section className="pb-8 pt-16">
        <div className="wrap flex flex-col items-center text-center">
          <span className="kicker mb-3.5">{p.kicker}</span>
          <h1 className="max-w-[700px] text-[clamp(32px,5vw,46px)]">{p.title}</h1>
          <p className="lead mt-4">{p.lead}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "services-hero" })}>{t.cta.startFree}</a>
            <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.preise)}>{copy.comparePricesCta}</a>
          </div>
        </div>
      </section>

      {/* Seelenkarte */}
      <section className="py-11">
        <div className="wrap grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="chip chip-rose">{p.soulmap.tag}</span>
            <h2 className="my-3 text-[clamp(24px,3.5vw,32px)]">{p.soulmap.title}</h2>
            <p className="muted text-[16.5px]">{p.soulmap.text}</p>
            <p className="muted mt-4 text-[16px] leading-relaxed">{copy.soulmapExtra}</p>
          </div>
          <div className="card text-center"><SoulMap size={190} /></div>
        </div>
      </section>

      <section className="bg-creme-tief py-14">
        <div className="wrap">
          <div className="mb-9 max-w-[760px]">
            <span className="kicker">{copy.offerKicker}</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.offerTitle}</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.offerText}</p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {copy.offerBlocks.map((item) => (
              <article key={item.title} className="card flex flex-col">
                <span className="chip w-fit">{item.tag}</span>
                <h3 className="mt-4 text-[23px]">{item.title}</h3>
                <p className="muted mt-3 flex-1 text-[15.5px] leading-relaxed">{item.text}</p>
                <a className="note mt-5 font-semibold text-gold no-underline" href={localePath(locale, item.href)}>{item.cta} →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ebenen */}
      <section className="py-11">
        <div className="wrap grid items-center gap-8 md:grid-cols-2">
          <div className="card">
            <div className="flex flex-col gap-2.5">
              {p.levels.labels.map((label, i) => {
                const locked = i === 2;
                return (
                  <div key={i} className={`flex items-center gap-3 rounded-field border border-sand bg-creme px-4 py-3 ${locked ? "opacity-60 blur-[0.4px]" : ""}`}>
                    <span className={locked ? "text-[#bbb]" : "text-gold"}>{locked ? "○" : "●"}</span>
                    <span className="font-semibold">{label}</span>
                    <span className="flex-1" />
                    <span className="note">{locked ? `${p.levels.locked} ⟡` : p.levels.open}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <span className="chip">{p.levels.tag}</span>
            <h2 className="my-3 text-[clamp(24px,3.5vw,32px)]">{p.levels.title}</h2>
            <p className="muted text-[16.5px]">{p.levels.text}</p>
            <p className="muted mt-4 text-[16px] leading-relaxed">{copy.levelsExtra}</p>
          </div>
        </div>
      </section>

      <section className="bg-aubergine py-16 text-white">
        <div className="wrap grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="kicker text-gold-weich">{copy.depthKicker}</span>
            <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">{copy.depthTitle}</h2>
            <p className="mt-4 text-[17px] leading-[1.85] text-[#e9dcf2]">{copy.depthText}</p>
            <div className="mt-7">
              <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "services-depth-table" })}>{copy.depthCta}</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-card border border-white/15 bg-white/8">
            {copy.depthRows.map(([label, text, tier]) => (
              <div key={label} className="grid gap-3 border-b border-white/10 p-5 last:border-b-0 md:grid-cols-[160px_1fr_130px]">
                <strong className="text-white">{label}</strong>
                <span className="text-[15px] leading-relaxed text-[#e9dcf2]">{text}</span>
                <span className="note text-gold-weich">{tier}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tägliche Begleitung */}
      <section className="py-14">
        <div className="wrap">
          <div className="mb-9 text-center">
            <span className="kicker">{p.daily.kicker}</span>
            <h2 className="mt-2 text-[clamp(26px,3.5vw,32px)]">{p.daily.title}</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {p.daily.items.map((it, i) => (
              <div key={i} className="card">
                <div className="ic" aria-hidden>{it.icon}</div>
                <h3 className="mb-2 text-xl">{it.title}</h3>
                <p className="muted">{it.text}{it.tier ? <span className="note"> ({it.tier})</span> : null}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap grid gap-5 lg:grid-cols-3">
          {copy.decisionCards.map((item) => (
            <article key={item.title} className="rounded-card border border-sand bg-white p-7 shadow-soft">
              <h2 className="text-[24px]">{item.title}</h2>
              <p className="muted mt-3 text-[15.5px] leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="wrap grid items-center gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
            <img src="/images/hermetia/library-of-self-profile.png" alt={copy.imageAlt} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
              {copy.imageCaption}
            </figcaption>
          </figure>
          <div>
            <span className="kicker">{copy.legalKicker}</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.legalTitle}</h2>
            <p className="muted mt-4 text-[17px] leading-[1.85]">{copy.legalText}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "services-legal-cta" })}>{copy.legalCta}</a>
              <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.ki)}>{copy.aiCta}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-creme-tief py-16">
        <div className="wrap">
          <div className="mb-8 text-center">
            <span className="kicker">{copy.faqKicker}</span>
            <h2 className="mt-3 text-[clamp(27px,4vw,36px)]">{copy.faqTitle}</h2>
          </div>
          <Faq items={localizedFaq} />
        </div>
      </section>

      <section className="bg-creme-tief py-20 text-center">
        <div className="wrap">
          <h2 className="text-[clamp(26px,3.5vw,34px)]">{p.cta.title}</h2>
          <p className="lead mx-auto my-4 max-w-[520px]">{p.cta.lead}</p>
          <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "services-final" })}>{t.cta.startFree}</a>
        </div>
      </section>

      <Footer locale={locale} />
    </>
  );
}
