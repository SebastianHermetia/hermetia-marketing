export type ReviewGateStatus = "ready" | "open" | "external";

export type ReviewGate = {
  id: string;
  title: string;
  status: ReviewGateStatus;
  summary: string;
  evidence: string[];
};

export const reviewGates: ReviewGate[] = [
  {
    id: "own-content",
    title: "Eigene Texte und keine kopierten Deutungen",
    status: "ready",
    summary:
      "Marketing-, Glossar-, System- und Wissensinhalte sind als eigene Hermetia-Texte formuliert. Proprietäre Deutungstexte, Kartentexte oder Fragebogenitems werden nicht übernommen.",
    evidence: [
      "Systemseiten nutzen eigene Beschreibungen und rechtliche Grenzen.",
      "Gene-Keys-, Human-Design-, Tarot- und Oracle-Card-Inhalte verweisen auf eigene Sprache statt fremde Originaltexte.",
      "Resource-Seiten enthalten Diagnose-, Beratungs- und Vorhersagegrenzen.",
    ],
  },
  {
    id: "asset-rights",
    title: "Bild- und Grafikrechte",
    status: "external",
    summary:
      "Alle live referenzierten Assets sind im Inventar dokumentiert und technisch geprüft. Die finale Rechtefreigabe der Designordner bleibt vor dem Domain-Launch extern zu dokumentieren.",
    evidence: [
      "content/asset-inventory.md dokumentiert live genutzte Bilder und Grafiken.",
      "npm run check:assets prüft fehlende Bild- und Grafikreferenzen.",
      "Konvergenz-Grafiken sind eigene, abstrakte Hermetia-Diagramme.",
    ],
  },
  {
    id: "data-protection",
    title: "Datenschutz und Art. 9 DSGVO",
    status: "external",
    summary:
      "Die Website kommuniziert sensible spirituelle Profildaten, ausdrückliche Einwilligung, EU-Hosting, Verschlüsselung, Export und Löschung. Die anwaltliche Endprüfung bleibt vor Launch erforderlich.",
    evidence: [
      "Datenschutzerklärung enthält Art.-9-Logik und Rechtsgrundlagen.",
      "Beziehungsseiten betonen Einwilligung der zweiten Person.",
      "Glossar und Wissen erklären sensible Profildaten und Datenminimierung.",
    ],
  },
  {
    id: "ai-transparency",
    title: "AI-Transparenz",
    status: "ready",
    summary:
      "AI wird als Formulierungsschicht beschrieben, nicht als Rechenkern oder Autorität über Menschen. AI-Inhalte werden als unterstützte Reflexion und nicht als Beratung gerahmt.",
    evidence: [
      "KI-Transparenzseite beschreibt Rolle und Grenzen der AI.",
      "Footer kennzeichnet AI-gestützte Inhalte.",
      "Konvergenz-Engine wird als deterministische Schicht erklärt.",
    ],
  },
  {
    id: "no-diagnosis",
    title: "Keine Diagnose, Therapie oder Vorhersage",
    status: "ready",
    summary:
      "Alle sensiblen Bereiche rahmen Hermetia als Inspiration zur Selbstreflexion. Medizinische, psychologische, therapeutische, rechtliche und finanzielle Beratung werden ausgeschlossen.",
    evidence: [
      "Footer-Disclaimer auf allen Seiten.",
      "Systemdetailseiten enthalten Grenzen der Deutung.",
      "Wissen-, Glossar- und Vergleichsseiten enthalten FAQ-Grenzen.",
    ],
  },
  {
    id: "pricing-consumer",
    title: "Preise, Free/Paid-Grenzen und Conversion",
    status: "external",
    summary:
      "Die Website führt transparent in kostenlose und bezahlte Modelle. Vor echter Zahlung müssen Preisangaben, AGB, Widerruf und App-Onboarding final gegen Verbraucherrecht geprüft werden.",
    evidence: [
      "Preisseite zeigt Modelle und CTAs.",
      "AGB und Widerruf sind als Entwurf integriert.",
      "CTAs vermeiden Angstmarketing und aggressive Verknappung.",
    ],
  },
  {
    id: "language-rollout",
    title: "EU-Sprachen und Übersetzungsstatus",
    status: "open",
    summary:
      "Alle 24 offiziellen EU-Sprachrouten sind technisch live. Deutsch und Englisch sind redaktionell gepflegt; weitere Sprachen sind sichtbar als redaktionell in Vorbereitung markiert.",
    evidence: [
      "Sprachstatus-Seite zeigt 24 Live-Routen, 2 freigegebene und 22 vorbereitete Sprachen.",
      "Fallback-Sprachen zeigen einen sichtbaren Hinweis.",
      "Sitemap und hreflang enthalten alle Sprachrouten.",
    ],
  },
  {
    id: "indexing-launch",
    title: "Indexing und Domain-Launch",
    status: "ready",
    summary:
      "Die öffentliche Marketingseite ist für den Public Launch indexierbar vorbereitet. App- und Onboarding-Flows bleiben getrennt kontrolliert und werden nicht als Marketingseiten indexiert.",
    evidence: [
      "buildMetadata() setzt öffentliche Marketingseiten auf index/follow.",
      "Robots und Sitemap liefern alle öffentlichen Sprachrouten.",
      "Primäre Start-CTAs führen in der Beta-Phase auf /beta-zugang statt direkt in das App-Onboarding.",
    ],
  },
];

export function reviewSummary() {
  return {
    total: reviewGates.length,
    ready: reviewGates.filter((gate) => gate.status === "ready").length,
    open: reviewGates.filter((gate) => gate.status === "open").length,
    external: reviewGates.filter((gate) => gate.status === "external").length,
  };
}
