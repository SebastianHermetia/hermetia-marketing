import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { reviewGates, reviewSummary, type ReviewGateStatus } from "@/content/launch-review";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: paths.freigaben,
    title: "Hermetia Launch-Freigaben — Legal, IP, Datenschutz und Indexing",
    description:
      "Transparenter Status der Hermetia Launch-Freigaben für eigene Inhalte, Bildrechte, Datenschutz, AI-Transparenz, Verbraucherrecht, Sprachen und Indexing.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const summary = reviewSummary();

  return (
    <>
      <Header locale={locale} current="freigaben" />
      <main>
        <section className="py-16">
          <div className="wrap max-w-[1040px]">
            <span className="kicker">Launch-Governance</span>
            <h1 className="mt-3 text-[clamp(32px,5vw,50px)]">Legal-, IP- und Launch-Freigaben</h1>
            <p className="lead mt-5 max-w-[820px]">
              Hermetia soll Reichweite aufbauen, ohne rechtliche Grauzonen zu verstecken. Diese Seite zeigt, welche Leitplanken technisch und redaktionell bereits eingebaut sind und welche Punkte vor dem finalen Domain-Launch noch extern freigegeben werden müssen.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <Metric label="Gates gesamt" value={summary.total.toString()} />
              <Metric label="Umgesetzt" value={summary.ready.toString()} />
              <Metric label="Offen" value={summary.open.toString()} />
              <Metric label="Externe Prüfung" value={summary.external.toString()} />
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="wrap max-w-[1040px]">
            <div className="rounded-card border border-gold/30 bg-gold-weich/25 p-6">
              <h2 className="text-[clamp(24px,3vw,32px)]">Wichtig: keine anwaltliche Endfreigabe</h2>
              <p className="muted mt-3 text-[17px] leading-[1.85]">
                Diese Übersicht ist ein Produkt- und Content-Gate, keine Rechtsberatung. Sie macht transparent, welche Schutzmaßnahmen im Marketing umgesetzt sind. Vor Bezahlmodell, finalem Domain-Launch, Indexierung und produktiver App-Verknüpfung bleiben Datenschutz-, Verbraucherrechts- und IP-Freigaben extern zu bestätigen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="wrap max-w-[1040px]">
            <h2 className="text-[clamp(24px,3vw,32px)]">Freigabe-Gates</h2>
            <div className="mt-6 grid gap-5">
              {reviewGates.map((gate) => (
                <article key={gate.id} className="rounded-card border border-sand bg-white p-6 shadow-soft">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-[24px]">{gate.title}</h3>
                      <p className="muted mt-3 text-[16px] leading-[1.75]">{gate.summary}</p>
                    </div>
                    <StatusBadge status={gate.status} />
                  </div>
                  <ul className="mt-5 grid gap-2 text-[14.5px] text-[#6c6175]">
                    {gate.evidence.map((item) => (
                      <li key={item} className="rounded-[6px] bg-creme px-3 py-2">{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="wrap max-w-[1040px]">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-card border border-sand bg-white p-6 shadow-soft">
                <h2 className="text-[clamp(24px,3vw,32px)]">Vor finalem Launch</h2>
                <p className="muted mt-3 text-[17px] leading-[1.85]">
                  Noindex/nofollow bleibt in der Testphase korrekt. Zum Launch müssen Indexing-Header, finale Canonicals, App-URLs, Zahlungsfluss, Rechtstexte und Übersetzungsstatus gemeinsam freigegeben werden.
                </p>
              </div>
              <div className="rounded-card border border-altrosa/25 bg-altrosa/10 p-6">
                <h2 className="text-[clamp(24px,3vw,32px)]">Warum das conversion-relevant ist</h2>
                <p className="muted mt-3 text-[17px] leading-[1.85]">
                  Vertrauen ist Teil der Conversion. Nutzer sollen neugierig werden, sich anmelden und ein bezahltes Modell wählen können, ohne dass sensible Daten, AI-Deutung, Beziehungsprofile oder Preise unklar wirken.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="wrap max-w-[1040px]">
            <AppCta
              locale={locale}
              title="Teste Hermetia mit klaren Leitplanken."
              text="Starte dein Profil kostenlos und erlebe, wie Methode, Datenschutz und Selbstreflexion zusammenfinden."
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

function StatusBadge({ status }: { status: ReviewGateStatus }) {
  const label =
    status === "ready"
      ? "Umgesetzt"
      : status === "external"
        ? "Externe Prüfung"
        : "Offen vor Launch";
  const cls = status === "ready" ? "chip" : status === "external" ? "chip chip-gold" : "chip chip-rose";
  return <span className={cls}>{label}</span>;
}
