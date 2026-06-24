export const pricing = {
  tiers: [
    { key: "free", name: "Kostenlos", price: "0 €", cadence: "", content: "Profil, Seelenkarte, Konvergenz-Übersicht, Journal und Tagesspruch ohne AI-Generierung" },
    { key: "readings", name: "Readings", price: "49 €", cadence: "/ Jahr", content: "Kern-Deutung, Reader-Blöcke, Systemporträts, Synthese, Tagesimpulse, Orakel, Journaling mit AI, Companion und Musik" },
    { key: "allAccess", name: "All-Access", price: "99 €", cadence: "/ Jahr", content: "Readings plus Seelenbuch und Beziehungsanalyse" },
    { key: "single", name: "Einzel", price: "49 €", cadence: "einmalig", content: "Seelenbuch oder eine Partner-Analyse einzeln kaufen und behalten" },
  ],
  features: [
    ["Profil", "Enthalten", "Enthalten", "Enthalten", "Nicht enthalten"],
    ["Seelenkarte", "Enthalten", "Enthalten", "Enthalten", "Nicht enthalten"],
    ["Konvergenz-Übersicht", "Enthalten", "Enthalten", "Enthalten", "Nicht enthalten"],
    ["Journal und Tagesspruch", "Ohne AI-Generierung", "Mit AI-Begleitung", "Mit AI-Begleitung", "Nicht enthalten"],
    ["Seelenbuch", "Nicht enthalten", "Nicht enthalten", "Enthalten", "49 € einmalig"],
    ["Beziehungsanalyse", "Nicht enthalten", "Nicht enthalten", "Enthalten", "49 € je Beziehung"],
  ],
} as const;
