import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { localizeCopy } from "@/i18n/localized-content";
import { reviewGates, reviewSummary, type ReviewGateStatus } from "@/content/launch-review";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";

const launchReviewCopy = {
  de: {
    seoTitle: "Hermetia Launch-Freigaben — Legal, IP, Datenschutz und Indexing",
    seoDescription:
      "Transparenter Status der Hermetia Launch-Freigaben für eigene Inhalte, Bildrechte, Datenschutz, AI-Transparenz, Verbraucherrecht, Sprachen und Indexing.",
    kicker: "Launch-Governance",
    title: "Legal-, IP- und Launch-Freigaben",
    lead:
      "Hermetia baut Reichweite mit sichtbaren Leitplanken auf. Diese Seite zeigt, welche Schutzmaßnahmen technisch und redaktionell bereits eingebaut sind und welche Punkte vor dem finalen Domain-Launch noch extern freigegeben werden.",
    metrics: {
      total: "Gates gesamt",
      ready: "Umgesetzt",
      open: "Offen",
      external: "Externe Prüfung",
    },
    warningTitle: "Wichtig: keine anwaltliche Endfreigabe",
    warningText:
      "Diese Übersicht ist ein Produkt- und Content-Gate, keine Rechtsberatung. Sie macht transparent, welche Schutzmaßnahmen im Marketing umgesetzt sind. Vor Bezahlmodell, finalem Domain-Launch, Indexierung und produktiver App-Verknüpfung bleiben Datenschutz-, Verbraucherrechts- und IP-Freigaben extern zu bestätigen.",
    gatesTitle: "Freigabe-Gates",
    beforeTitle: "Vor finalem Launch",
    beforeText:
      "Noindex/nofollow bleibt in der Testphase korrekt. Zum Launch müssen Indexing-Header, finale Canonicals, App-URLs, Zahlungsfluss, Rechtstexte und Übersetzungsstatus gemeinsam freigegeben werden.",
    conversionTitle: "Warum das conversion-relevant ist",
    conversionText:
      "Vertrauen ist Teil der Conversion. Besucher sollen neugierig werden, sich anmelden und ein bezahltes Modell wählen können, ohne dass sensible Daten, AI-Deutung, Beziehungsprofile oder Preise unklar wirken.",
    ctaTitle: "Teste Hermetia mit klaren Leitplanken.",
    ctaText:
      "Starte dein Profil kostenlos und erlebe, wie Methode, Datenschutz und Selbstreflexion zusammenfinden.",
    status: {
      ready: "Umgesetzt",
      external: "Externe Prüfung",
      open: "Offen vor Launch",
    },
  },
  en: {
    seoTitle: "Hermetia launch approvals — legal, IP, data protection and indexing",
    seoDescription:
      "Transparent status of Hermetia launch approvals for original content, image rights, data protection, AI transparency, consumer law, languages and indexing.",
    kicker: "Launch governance",
    title: "Legal, IP and launch approvals",
    lead:
      "Hermetia builds reach with visible guardrails. This page shows which technical and editorial safeguards are already in place and which points still need external approval before the final domain launch.",
    metrics: {
      total: "Total gates",
      ready: "Implemented",
      open: "Open",
      external: "External review",
    },
    warningTitle: "Important: no final legal sign-off",
    warningText:
      "This overview is a product and content gate, not legal advice. It makes transparent which safeguards are implemented in marketing. Before paid plans, final domain launch, indexing and productive app linking, data protection, consumer-law and IP approvals still need external confirmation.",
    gatesTitle: "Approval gates",
    beforeTitle: "Before final launch",
    beforeText:
      "Noindex/nofollow remains correct during the test phase. At launch, indexing headers, final canonicals, app URLs, payment flow, legal texts and translation status must be approved together.",
    conversionTitle: "Why this matters for conversion",
    conversionText:
      "Trust is part of conversion. Visitors should become curious, sign up and choose a paid plan without sensitive data, AI interpretation, relationship profiles or pricing feeling unclear.",
    ctaTitle: "Test Hermetia with clear guardrails.",
    ctaText:
      "Start your profile for free and experience how method, data protection and self-reflection work together.",
    status: {
      ready: "Implemented",
      external: "External review",
      open: "Open before launch",
    },
  },
} as const;

const reviewGateCopy = {
  en: {
    "own-content": {
      title: "Original texts and no copied interpretations",
      summary:
        "Marketing, glossary, system and knowledge content is written as original Hermetia language. Proprietary interpretations, card texts or questionnaire items are not copied.",
      evidence: [
        "System pages use original descriptions and legal boundaries.",
        "Gene Keys, Human Design, Tarot and oracle-card content refers to original language instead of third-party source text.",
        "Resource pages include diagnosis, advice and prediction limits.",
      ],
    },
    "asset-rights": {
      title: "Image and graphic rights",
      summary:
        "All live referenced assets are documented in the inventory and technically checked. Final rights approval for design folders still needs external documentation before domain launch.",
      evidence: [
        "content/asset-inventory.md documents live images and graphics.",
        "npm run check:assets checks missing image and graphic references.",
        "Convergence graphics are original abstract Hermetia diagrams.",
      ],
    },
    "data-protection": {
      title: "Data protection and GDPR Art. 9",
      summary:
        "The website communicates sensitive spiritual profile data, explicit consent, EU hosting, encryption, export and deletion. Final legal review remains required before launch.",
      evidence: [
        "The privacy policy contains Art. 9 logic and legal bases.",
        "Relationship pages emphasize consent from the second person.",
        "Glossary and knowledge pages explain sensitive profile data and data minimization.",
      ],
    },
    "ai-transparency": {
      title: "AI transparency",
      summary:
        "AI is described as a wording layer, not as the calculation core or an authority over people. AI content is framed as supported reflection and not as advice.",
      evidence: [
        "The AI transparency page describes AI's role and limits.",
        "The footer labels AI-assisted content.",
        "The convergence engine is explained as a deterministic layer.",
      ],
    },
    "no-diagnosis": {
      title: "No diagnosis, therapy or prediction",
      summary:
        "All sensitive areas frame Hermetia as inspiration for self-reflection. Medical, psychological, therapeutic, legal and financial advice is excluded.",
      evidence: [
        "Footer disclaimer on all pages.",
        "System detail pages contain interpretation limits.",
        "Knowledge, glossary and comparison pages include FAQ boundaries.",
      ],
    },
    "pricing-consumer": {
      title: "Pricing, free/paid boundaries and conversion",
      summary:
        "The website leads transparently into free and paid models. Before real payment, prices, terms, withdrawal and app onboarding must be checked finally against consumer law.",
      evidence: [
        "Pricing page shows plans and CTAs.",
        "Terms and withdrawal policy are integrated as drafts.",
        "CTAs avoid fear marketing and aggressive scarcity.",
      ],
    },
    "language-rollout": {
      title: "EU languages and translation status",
      summary:
        "All 24 official EU language routes are technically live. German and English are editorially maintained; further languages are visibly marked as editorially in preparation.",
      evidence: [
        "Language status page shows 24 live routes, 2 approved and 22 prepared languages.",
        "Fallback languages show a visible notice.",
        "Sitemap and hreflang include all language routes.",
      ],
    },
    "indexing-launch": {
      title: "Indexing and domain launch",
      summary:
        "The test phase deliberately remains on noindex/nofollow. For final domain launch, nginx headers, public/_headers, canonical URL and app URL must be switched finally.",
      evidence: [
        "deploy/README.md documents noindex in the test phase.",
        "public/_headers sets noindex/nofollow for Cloudflare Pages.",
        "Robots allows crawling so noindex headers can be seen.",
      ],
    },
  },
} as const;

function localizeGate(gate: (typeof reviewGates)[number], locale: Locale) {
  void locale;
  return gate;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = localizeCopy(locale as Locale, launchReviewCopy);
  return buildMetadata({
    locale: locale as Locale,
    path: paths.freigaben,
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const summary = reviewSummary();
  const copy = localizeCopy(locale, launchReviewCopy);

  return (
    <>
      <Header locale={locale} current="freigaben" />
      <main>
        <section className="py-16">
          <div className="wrap max-w-[1040px]">
            <span className="kicker">{copy.kicker}</span>
            <h1 className="mt-3 text-[clamp(32px,5vw,50px)]">{copy.title}</h1>
            <p className="lead mt-5 max-w-[820px]">
              {copy.lead}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <Metric label={copy.metrics.total} value={summary.total.toString()} />
              <Metric label={copy.metrics.ready} value={summary.ready.toString()} />
              <Metric label={copy.metrics.open} value={summary.open.toString()} />
              <Metric label={copy.metrics.external} value={summary.external.toString()} />
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="wrap max-w-[1040px]">
            <div className="rounded-card border border-gold/30 bg-gold-weich/25 p-6">
              <h2 className="text-[clamp(24px,3vw,32px)]">{copy.warningTitle}</h2>
              <p className="muted mt-3 text-[17px] leading-[1.85]">
                {copy.warningText}
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="wrap max-w-[1040px]">
            <h2 className="text-[clamp(24px,3vw,32px)]">{copy.gatesTitle}</h2>
            <div className="mt-6 grid gap-5">
              {reviewGates.map((sourceGate) => {
                const gate = localizeGate(sourceGate, locale);
                return (
                <article key={gate.id} className="rounded-card border border-sand bg-white p-6 shadow-soft">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-[24px]">{gate.title}</h3>
                      <p className="muted mt-3 text-[16px] leading-[1.75]">{gate.summary}</p>
                    </div>
                    <StatusBadge status={gate.status} labels={copy.status} />
                  </div>
                  <ul className="mt-5 grid gap-2 text-[14.5px] text-[#6c6175]">
                    {gate.evidence.map((item) => (
                      <li key={item} className="rounded-[6px] bg-creme px-3 py-2">{item}</li>
                    ))}
                  </ul>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="wrap max-w-[1040px]">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-card border border-sand bg-white p-6 shadow-soft">
                <h2 className="text-[clamp(24px,3vw,32px)]">{copy.beforeTitle}</h2>
                <p className="muted mt-3 text-[17px] leading-[1.85]">
                  {copy.beforeText}
                </p>
              </div>
              <div className="rounded-card border border-altrosa/25 bg-altrosa/10 p-6">
                <h2 className="text-[clamp(24px,3vw,32px)]">{copy.conversionTitle}</h2>
                <p className="muted mt-3 text-[17px] leading-[1.85]">
                  {copy.conversionText}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="wrap max-w-[1040px]">
            <AppCta
              locale={locale}
              title={copy.ctaTitle}
              text={copy.ctaText}
              source="launch-review"
            />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-card border border-sand bg-white p-5 shadow-soft">
      <p className="text-[34px] font-semibold text-aubergine">{value}</p>
      <p className="note mt-1">{label}</p>
    </div>
  );
}

function StatusBadge({ status, labels }: { status: ReviewGateStatus; labels: { ready: string; external: string; open: string } }) {
  const label = status === "ready" ? labels.ready : status === "external" ? labels.external : labels.open;
  const cls = status === "ready" ? "chip" : status === "external" ? "chip chip-gold" : "chip chip-rose";
  return <span className={cls}>{label}</span>;
}
