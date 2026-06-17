import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getLocaleStatuses, translationBacklog, translationBacklogSummary, translationQaGates, translationQaSummary, translationSummary } from "@/i18n/translation-status";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths, startUrl } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: paths.sprachen,
    title: "Hermetia Sprachen — Übersetzungsstatus und EU-Rollout",
    description: "Welche Hermetia-Sprachen redaktionell freigegeben sind, welche technisch live sind und wie der mehrsprachige EU-Rollout umgesetzt wird.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const statuses = getLocaleStatuses();
  const summary = translationSummary();
  const backlog = translationBacklogSummary();
  const qa = translationQaSummary();

  return (
    <>
      <Header locale={locale} current="sprachen" />
      <main>
        <section className="py-16">
          <div className="wrap max-w-[980px]">
            <span className="kicker">Mehrsprachigkeit</span>
            <h1 className="mt-3 text-[clamp(32px,5vw,50px)]">Hermetia in europäischen Sprachen</h1>
            <p className="lead mt-5 max-w-[760px]">
              Hermetia ist für alle offiziellen EU-Sprachen live. Jede Sprachroute erhält eine versionierte redaktionelle Fassung ohne stillen DE/EN-Fallback; Terminologie, Tonalität und rechtliche Präzision bleiben Teil der laufenden Review-Schleife.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Metric label="Sprachrouten live" value={summary.total.toString()} />
              <Metric label="Redaktionell freigegeben" value={summary.editorial.toString()} />
              <Metric label="Fallback-Routen" value={summary.fallback.toString()} />
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="wrap max-w-[980px]">
            <div className="rounded-card border border-gold/30 bg-gold-weich/25 p-6">
              <h2 className="text-[clamp(24px,3vw,32px)]">Warum alle Sprachrouten jetzt live sind</h2>
              <p className="muted mt-3 text-[17px] leading-[1.85]">
                URL-Struktur, hreflang, Sitemap, Sprachwahl und App-Weiterleitung sind für alle 24 Sprachen stabil. Für nicht-DE/EN-Sprachen wird eine lokale redaktionelle Fassung ausgespielt, damit Nutzer keine gemischten deutschen oder englischen Longform-Inhalte sehen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="wrap max-w-[980px]">
            <h2 className="text-[clamp(24px,3vw,32px)]">Aktueller Übersetzungsstatus</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {statuses.map((entry) => (
                <a
                  key={entry.locale}
                  href={localePath(entry.locale)}
                  hrefLang={entry.locale}
                  className="rounded-card border border-sand bg-white p-5 no-underline shadow-soft transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-aubergine">{entry.name}</p>
                      <p className="note mt-1 uppercase">{entry.locale}</p>
                    </div>
                    <span className="chip">{entry.label}</span>
                  </div>
                  <p className="muted mt-4 text-[14.5px] leading-relaxed">{entry.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="wrap max-w-[980px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
              <div className="rounded-card border border-sand bg-white p-6 shadow-soft">
                <h2 className="text-[clamp(24px,3vw,32px)]">Rollout-Prinzip</h2>
                <p className="muted mt-3 text-[17px] leading-[1.85]">
                  Deutsch und Englisch bleiben die ausführlichen Masterfassungen. Die weiteren EU-Sprachen erhalten eine lokale, versionierte Seitenfassung und werden über QA-Gates kontinuierlich verbessert. Rechtliche Seiten, Datenschutz, AI-Transparenz und Beziehungsinhalte bleiben dabei besonders reviewpflichtig.
                </p>
              </div>
              <div className="rounded-card border border-altrosa/25 bg-altrosa/10 p-6">
                <h2 className="text-[clamp(24px,3vw,32px)]">Was Nutzer wissen sollen</h2>
                <p className="muted mt-3 text-[17px] leading-[1.85]">
                  Die Sprachwahl ist vollständig nutzbar. Für Anmeldung und Profilstart wird die gewählte Sprache an die App übergeben; die Website vermeidet dabei sichtbare deutsche oder englische Fallback-Longform in anderen Locales.
                </p>
                <a className="btn btn-primary mt-5" href={startUrl(locale, { source: "language-status-inline" })}>Profil kostenlos starten</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="wrap max-w-[980px]">
            <span className="kicker">Review-Pipeline</span>
            <h2 className="mt-3 text-[clamp(24px,3vw,32px)]">Was laufend geprüft wird</h2>
            <p className="muted mt-3 max-w-[760px] text-[17px] leading-[1.85]">
              Alle 24 EU-Sprachen sind live. Die weitere Arbeit liegt nicht mehr im sichtbaren Fallback, sondern in Native Review, Terminologiepflege und rechtlicher Qualitätssicherung.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Metric label="Review-Gruppen" value={backlog.pageTypes.toString()} />
              <Metric label="Offene Seiten-Fallbacks" value={backlog.pages.toString()} />
              <Metric label="P0-Review-Gruppen" value={backlog.p0.toString()} />
            </div>
            <div className="mt-6 grid gap-4">
              {translationBacklog.map((item) => (
                <article key={item.key} className="rounded-card border border-sand bg-white p-5 shadow-soft">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-[22px]">{item.label}</h3>
                      <p className="muted mt-2 text-[15px] leading-relaxed">{item.status}</p>
                    </div>
                    <span className={item.priority === "P0" ? "chip chip-rose" : item.priority === "P1" ? "chip chip-gold" : "chip"}>{item.priority}</span>
                  </div>
                  <p className="note mt-4">
                    {item.pages} offene Fallback-Seiten · Zielumfang: {item.wordsPerPage}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="wrap max-w-[980px]">
            <span className="kicker">Translation QA</span>
            <h2 className="mt-3 text-[clamp(24px,3vw,32px)]">Freigabe-Gates für lokale Longform-Inhalte</h2>
            <p className="muted mt-3 max-w-[760px] text-[17px] leading-[1.85]">
              Die Sprachfassungen sind live; diese Gates sichern die weitere redaktionelle Qualität. Dadurch bleiben rechtliche Aussagen, Terminologie, AI-Grenzen und Conversion-Versprechen auch in lokalen Fassungen konsistent.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Metric label="QA-Gates" value={qa.gates.toString()} />
              <Metric label="Legal/Safety-kritisch" value={qa.legalCritical.toString()} />
            </div>
            <div className="mt-6 grid gap-4">
              {translationQaGates.map((gate) => (
                <article key={gate.id} className="rounded-card border border-sand bg-white p-5 shadow-soft">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-[22px]">{gate.title}</h3>
                    <span className="chip chip-gold">{gate.appliesTo}</span>
                  </div>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{gate.requirement}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="wrap max-w-[980px]">
            <AppCta
              locale={locale}
              title="Starte in deiner bevorzugten Sprache."
              text="Hermetia merkt sich deine Sprachwahl für den Profilstart und führt dich transparent durch den aktuellen Übersetzungsstand."
              source="language-status"
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
