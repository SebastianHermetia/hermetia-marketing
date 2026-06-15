import type { Locale } from "@/i18n/config";

export type FaqItem = { q: string; a: string };
export type ContentSection = { title: string; body: string };
export type ContentPage = {
  slug: string;
  navKey: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  lead: string;
  answer: string;
  image: string;
  imageAlt: string;
  sections: ContentSection[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaText: string;
};

type LocalizedPage = { de: ContentPage; en: ContentPage };

const dePages = {
  konvergenz: {
    slug: "konvergenz-engine",
    navKey: "konvergenz",
    title: "Die Konvergenz-Engine: Hermetias eigentliches Herz",
    seoTitle: "Hermetia Konvergenz-Engine — wie 31 Systeme zu Kernthemen werden",
    seoDescription:
      "Die Hermetia Konvergenz-Engine erklärt, wie spirituelle und psychologische Systeme gewichtet, entkoppelt und zu persönlichen Kernthemen verdichtet werden.",
    eyebrow: "Methode · USP",
    lead:
      "Viele Tools zeigen einzelne Systeme. Hermetia verbindet sie. Die Konvergenz-Engine prüft, welche unabhängigen Perspektiven auf dasselbe Thema zeigen und wo daraus echte Kernthemen entstehen.",
    answer:
      "Die Konvergenz-Engine ist eine erklärbare Verdichtungsschicht: Sie nimmt die Theme-Signale aus Astrologie, Human Design, Gene Keys, Numerologie, Fragebögen und weiteren Systemen, gruppiert verwandte Quellen in Familien und erkennt, wo mehrere unabhängige Perspektiven dasselbe Thema bestätigen.",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "Ein imaginäres Resonanzinstrument als Bild für die Hermetia Konvergenz-Engine",
    sections: [
      {
        title: "Warum Konvergenz wichtiger ist als Treffer",
        body:
          "Ein einzelnes System kann eine starke Aussage erzeugen, aber es bleibt eine Perspektive. Hermetia fragt deshalb nicht nur: Was sagt ein System? Sondern: Welche Themen tauchen über mehrere unabhängige Systeme hinweg auf? Erst wenn astrologische, numerologische, psychologische oder körperbezogene Perspektiven in dieselbe Richtung zeigen, entsteht ein Kernthema mit höherer Tragfähigkeit. Das verhindert, dass eine einzelne Symbolsprache überinterpretiert wird.",
      },
      {
        title: "Systemfamilien verhindern Doppelzählung",
        body:
          "Viele Systeme teilen dieselbe Rohquelle. Westliche Astrologie, Sabian-Grade, Fixsterne und Astrokartografie nutzen verwandte Himmelsdaten. Human Design und Gene Keys teilen das Tor-Rad. Numerologie, Kabbalah, Tarot-Geburtskarten und Lo-Shu arbeiten aus Datum oder Name. Die Konvergenz-Engine zählt solche Echos nicht naiv mehrfach, sondern bündelt sie in Familien. Dadurch wird ein Thema erst dann wirklich stark, wenn verschiedene Familien zustimmen.",
      },
      {
        title: "Stärke, Konvergenz, Sicherheit und Spannung",
        body:
          "Hermetia trennt bewusst mehrere Größen: Stärke zeigt, wie präsent ein Thema in deinem Profil ist. Konvergenz zeigt, wie viele unabhängige Familien dieses Thema tragen. Sicherheit beschreibt, wie belastbar die Eingaben und Berechnungen sind. Spannungsfelder zeigen, wo zwei Pole gleichzeitig aktiv sind. Aus dieser Trennung entsteht eine Deutung, die nicht nur beeindruckend klingt, sondern erklärbar bleibt.",
      },
      {
        title: "Was du als Nutzer davon siehst",
        body:
          "Du musst die Mathematik dahinter nicht verstehen. In der App erscheint daraus eine klare Sprache: deine Kernthemen, deine leisen Nebenthemen, deine produktiven Spannungen und die Systeme, die diese Aussagen tragen. Auf Wunsch kannst du tiefer schauen und nachvollziehen, warum Hermetia eine Aussage macht. Der Aha-Moment bleibt warm, die Grundlage bleibt überprüfbar.",
      },
    ],
    faq: [
      { q: "Ist die Konvergenz-Engine eine AI?", a: "Nein. Die Konvergenz-Engine ist eine deterministische Rechenschicht. AI formuliert später die Deutung, entscheidet aber nicht, welche Systeme übereinstimmen." },
      { q: "Warum zählt Hermetia Systeme nicht einfach zusammen?", a: "Weil viele Systeme verwandte Datenquellen nutzen. Eine naive Summe würde einzelne Perspektiven übergewichten. Hermetia gruppiert Systeme deshalb in Familien." },
      { q: "Kann ich sehen, woher ein Kernthema kommt?", a: "Ja. Hermetia kann zeigen, welche Systeme und Familien ein Thema tragen. Das ist wichtig für Vertrauen und Erklärbarkeit." },
    ],
    ctaTitle: "Sieh, welche Themen bei dir wirklich zusammenlaufen.",
    ctaText: "Starte dein Profil und entdecke deine ersten Kernthemen kostenlos.",
  },
  seelenkarte: {
    slug: "seelenkarte",
    navKey: "seelenkarte",
    title: "Deine Seelenkarte: ein verständliches Bild deiner inneren Muster",
    seoTitle: "Seelenkarte erstellen — Hermetia verbindet 31 Systeme zu deinem Profil",
    seoDescription:
      "Was eine Seelenkarte ist, wie Hermetia sie berechnet und warum sie mehr ist als ein Geburtshoroskop oder Persönlichkeitstest.",
    eyebrow: "Produkt · Profil",
    lead:
      "Die Seelenkarte ist der erste Aha-Moment in Hermetia: kein Datenblatt, sondern eine visuelle und sprachliche Verdichtung deiner wichtigsten Muster.",
    answer:
      "Eine Seelenkarte ist ein integriertes Persönlichkeitsbild. Hermetia berechnet verschiedene spirituelle und psychologische Systeme, erkennt gemeinsame Themen und übersetzt sie in eine klare, warme Darstellung, die dich nicht festlegt, sondern zur Selbstreflexion einlädt.",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Atmosphärische Datentopografie als visuelle Metapher für die Hermetia Seelenkarte",
    sections: [
      {
        title: "Warum die Seelenkarte kein klassisches Chart ist",
        body:
          "Ein klassisches Chart zeigt oft viele Symbole, Linien und Fachbegriffe. Das kann faszinieren, aber auch überfordern. Die Seelenkarte geht anders vor: Sie nimmt die berechneten Daten ernst, stellt aber zuerst die menschlich verständliche Synthese in den Mittelpunkt. Du siehst nicht nur Planeten, Zahlen oder Typen, sondern die Frage: Was wiederholt sich in mir über mehrere Perspektiven hinweg?",
      },
      {
        title: "Ebenen statt Informationswand",
        body:
          "Hermetia gliedert dein Profil in Ebenen: Wesenskern, Gaben, Schatten, Beziehung, Berufung, Rhythmus und Seelenweg. Jede Ebene kann für sich gelesen werden. Dadurch entsteht eine geführte Reise. Du musst nicht alles auf einmal verstehen, sondern kannst nach und nach tiefer gehen.",
      },
      {
        title: "Der persönliche Nutzen",
        body:
          "Die Seelenkarte soll dich neugierig machen, ohne dich zu vereinnahmen. Sie kann Worte für Muster geben, die du schon lange spürst, aber schwer greifen konntest. Gleichzeitig bleibt sie offen: Wenn etwas nicht resoniert, ist das ein wertvoller Hinweis. Hermetia ist Reflexion, keine Festlegung.",
      },
    ],
    faq: [
      { q: "Ist die Seelenkarte kostenlos?", a: "Der Einstieg ist kostenlos. Du siehst deine Seelenkarte und erste Kernthemen ohne Kreditkarte. Weitere Ebenen können über ein bezahltes Modell freigeschaltet werden." },
      { q: "Brauche ich eine genaue Geburtszeit?", a: "Eine genaue Geburtszeit verbessert manche Systeme. Hermetia funktioniert aber auch mit grober Tageszeit und kennzeichnet, was dadurch weniger sicher ist." },
      { q: "Ist das eine Diagnose?", a: "Nein. Die Seelenkarte ist Inspiration zur Selbstreflexion und keine medizinische, psychologische oder therapeutische Beratung." },
    ],
    ctaTitle: "Beginne mit deiner eigenen Seelenkarte.",
    ctaText: "In wenigen Minuten siehst du kostenlos, welche ersten Themen Hermetia bei dir erkennt.",
  },
  tagesimpulse: {
    slug: "tagesimpulse",
    navKey: "tagesimpulse",
    title: "Tagesimpulse: persönliche Reflexion statt lautes Tageshoroskop",
    seoTitle: "Persönliche Tagesimpulse — Hermetia verbindet Profil, Timing und Journaling",
    seoDescription:
      "Wie Hermetia aus deinem Profil und Tagesdaten ruhige Impulse, Journaling-Fragen und Monatsrückblicke erstellt.",
    eyebrow: "Alltag · Begleitung",
    lead:
      "Hermetia begleitet nicht mit Druck, sondern mit einem ruhigen Fokus: ein Satz, eine Frage, ein kleiner Blick auf das, was heute in dir anklingen könnte.",
    answer:
      "Ein Hermetia-Tagesimpuls ist kein allgemeines Horoskop. Er verbindet dein dauerhaftes Profil mit aktuellen Zyklen und formuliert daraus einen reflektierenden Tagesfokus. Der Impuls soll nicht vorhersagen, sondern Aufmerksamkeit bündeln.",
    image: "/images/hermetia/dawn-clock-of-becoming.png",
    imageAlt: "Ein abstrakter Tagesmechanismus als Symbol für Hermetia Tagesimpulse",
    sections: [
      {
        title: "Der Unterschied zum Tageshoroskop",
        body:
          "Ein Tageshoroskop spricht meist für ein Sternzeichen und damit für sehr viele Menschen gleichzeitig. Hermetia arbeitet enger: Dein persönliches Profil bleibt die Grundlage, Tagesdaten färben nur den Fokus. Dadurch entsteht kein lauter Anspruch, sondern ein persönlicher Reflexionsrahmen.",
      },
      {
        title: "Journaling als zweite Hälfte",
        body:
          "Der Impuls wird erst wertvoll, wenn du ihn mit deinem Alltag verbindest. Deshalb gehören Journaling-Fragen, Feedback und Monatsrückblicke zum Konzept. Hermetia fragt nicht nur „Was sagt das System?“, sondern auch: Hat das heute für dich gestimmt? Was hast du bemerkt? Was wiederholt sich?",
      },
      {
        title: "Bewusst anti-süchtig",
        body:
          "Hermetia soll keine FOMO-Schleife erzeugen. Tagesimpulse sind ruhig, pausierbar und nicht als Pflicht gedacht. Die App soll Begleitung sein, kein weiterer Strom aus Push-Reizen. Diese Haltung ist Teil der Produktethik.",
      },
    ],
    faq: [
      { q: "Bekomme ich jeden Tag einen Impuls?", a: "Je nach Einstellung ja. Hermetia ist aber bewusst so gedacht, dass du Frequenz und Pausen selbst bestimmen kannst." },
      { q: "Kann ein Tagesimpuls falsch sein?", a: "Ja, und das ist okay. Der Impuls ist eine Einladung zur Reflexion, kein Urteil. Dein Feedback hilft, wiederkehrende Themen besser einzuordnen." },
      { q: "Sind Tagesimpulse medizinische Empfehlungen?", a: "Nein. Sie sind keine medizinische, psychologische oder therapeutische Beratung." },
    ],
    ctaTitle: "Erlebe, wie dein Profil den Tag färbt.",
    ctaText: "Starte kostenlos und öffne deine ersten persönlichen Impulse.",
  },
  beziehungen: {
    slug: "beziehungen",
    navKey: "beziehungen",
    title: "Beziehungen verstehen: Resonanz, Reibung und Entwicklung",
    seoTitle: "Beziehungsauswertung mit Synastrie und Composite — Hermetia erklärt",
    seoDescription:
      "Wie Hermetia Beziehungsauswertungen denkt: Synastrie, Composite, Harmonie, Reibung, Entwicklung und klare Einwilligung.",
    eyebrow: "Beziehungen · Consent",
    lead:
      "Beziehungsprofile sind mächtig und sensibel. Hermetia behandelt sie deshalb nicht als Spielerei, sondern als zustimmungspflichtige Reflexion über zwei Menschen.",
    answer:
      "Eine Beziehungsauswertung verbindet zwei Profile und fragt: Wo entsteht Resonanz, wo Reibung, wo Entwicklung? Hermetia nutzt dafür berechnete Synastrie- und Composite-Logik, aber nur mit klarer Einwilligung der betroffenen Person.",
    image: "/images/hermetia/garden-of-agreements.png",
    imageAlt: "Zwei Gärten, die sich zu einem gemeinsamen Beziehungsraum überlagern",
    sections: [
      {
        title: "Synastrie und Composite einfach erklärt",
        body:
          "Synastrie vergleicht zwei Profile miteinander: Welche Punkte berühren sich, wo ergänzen sich Muster, wo entsteht Spannung? Composite betrachtet die Beziehung als eigenes drittes Feld. Beide Blickwinkel sind wertvoll, aber sie dürfen nicht als Urteil über richtig oder falsch missverstanden werden.",
      },
      {
        title: "Warum Einwilligung unverzichtbar ist",
        body:
          "Eine Beziehungsauswertung verarbeitet sensible Aussagen über eine zweite Person. Deshalb reicht es nicht, einfach Daten einzutragen. Vor echter Nutzung braucht die betroffene Person eine eigene, informierte Einwilligung oder einen rechtlich sauberen Guardian-Fall. Das ist kein Hindernis, sondern Respekt.",
      },
      {
        title: "Was Hermetia nicht verspricht",
        body:
          "Hermetia sagt nicht, ob eine Beziehung halten wird. Es bewertet keine Menschen und ersetzt keine Paarberatung. Die Auswertung soll Sprache für Dynamiken geben: Was fühlt sich leicht an? Wo entsteht Reibung? Welche Entwicklung lädt die Beziehung ein?",
      },
    ],
    faq: [
      { q: "Kann ich einfach die Daten meines Partners eingeben?", a: "Für echte Kundennutzung braucht die zweite Person eine eigene informierte Einwilligung. Hermetia ist hier bewusst streng." },
      { q: "Sagt Hermetia, ob wir zusammenpassen?", a: "Nein. Hermetia zeigt Resonanzen, Spannungen und Entwicklungsthemen, aber keine Beziehungsgarantie." },
      { q: "Ist das therapeutische Beratung?", a: "Nein. Beziehungsauswertungen sind Reflexionsimpulse und ersetzen keine professionelle Beratung." },
    ],
    ctaTitle: "Beginne zuerst mit deinem eigenen Profil.",
    ctaText: "Deine Beziehungsmuster werden verständlicher, wenn du deine eigene Seelenkarte kennst.",
  },
} satisfies Record<string, ContentPage>;

const enPages: Record<keyof typeof dePages, ContentPage> = Object.fromEntries(
  Object.entries(dePages).map(([key, page]) => [
    key,
    {
      ...page,
      title: page.title,
      seoTitle: page.seoTitle,
      seoDescription: page.seoDescription,
      eyebrow: page.eyebrow,
      lead: page.lead,
      answer: page.answer,
      ctaTitle: page.ctaTitle,
      ctaText: page.ctaText,
    },
  ]),
) as Record<keyof typeof dePages, ContentPage>;

export const pillarPages: Record<string, LocalizedPage> = Object.fromEntries(
  Object.entries(dePages).map(([key, de]) => [key, { de, en: enPages[key as keyof typeof dePages] }]),
) as Record<string, LocalizedPage>;

export const glossaryTerms = [
  {
    slug: "seelenkarte",
    term: "Seelenkarte",
    seoTitle: "Was ist eine Seelenkarte? Bedeutung bei Hermetia",
    definition:
      "Eine Seelenkarte ist ein integriertes Persönlichkeitsbild, das berechnete spirituelle und psychologische Systeme zu Kernthemen, Ebenen und Reflexionsimpulsen verbindet.",
    sections: [
      "Bei Hermetia ist die Seelenkarte kein einzelnes Horoskop. Sie entsteht aus mehreren Systemen und aus der Frage, welche Themen sich über unterschiedliche Perspektiven hinweg bestätigen.",
      "Die Seelenkarte ist bewusst als Einladung formuliert. Sie soll Worte und Bilder für innere Muster geben, ohne dich zu diagnostizieren oder festzulegen.",
    ],
  },
  {
    slug: "konvergenz",
    term: "Konvergenz",
    seoTitle: "Konvergenz erklärt — wenn mehrere Systeme dasselbe Thema zeigen",
    definition:
      "Konvergenz bedeutet bei Hermetia, dass mehrere unabhängige Systemfamilien auf dasselbe Thema hinweisen und daraus ein tragfähigeres Kernthema entsteht.",
    sections: [
      "Konvergenz unterscheidet sich von Stärke. Ein Thema kann in einem System stark sein, aber erst mehrere unabhängige Perspektiven machen es zu einem belastbaren Kernthema.",
      "Hermetia nutzt Konvergenz, um Widersprüche sichtbar zu machen und Übergewichtungen durch verwandte Systeme zu vermeiden.",
    ],
  },
  {
    slug: "synastrie",
    term: "Synastrie",
    seoTitle: "Was ist Synastrie? Beziehungsauswertung einfach erklärt",
    definition:
      "Synastrie ist der Vergleich zweier Profile oder Horoskope, um Resonanz, Reibung und Entwicklungsthemen zwischen zwei Menschen sichtbar zu machen.",
    sections: [
      "In Hermetia ist Synastrie kein Urteil über die Beziehung. Sie ist eine Reflexionshilfe, die berechnete Berührungspunkte in eine verständliche Sprache übersetzt.",
      "Weil dabei Daten einer zweiten Person verarbeitet werden können, braucht jede echte Beziehungsauswertung eine klare Einwilligung.",
    ],
  },
  {
    slug: "ai-deutung",
    term: "AI-Deutung",
    seoTitle: "AI-Deutung bei Hermetia — was AI tut und was nicht",
    definition:
      "AI-Deutung bedeutet, dass ein Sprachmodell berechnete Profilfakten in warme, verständliche Texte übersetzt. Die Berechnung selbst erfolgt nicht durch AI.",
    sections: [
      "Hermetia trennt Berechnung und Formulierung. Planetenpositionen, Zahlen, Fragebogenwerte und Theme-Signale werden deterministisch erzeugt.",
      "Die AI bekommt nur abgeleitete Fakten und formuliert daraus Reflexionsimpulse. Sie ersetzt keine medizinische, therapeutische oder rechtliche Beratung.",
    ],
  },
] as const;

export const articles = [
  {
    slug: "spirituelles-profiling",
    title: "Was ist spirituelles Profiling?",
    seoTitle: "Spirituelles Profiling erklärt — Chancen, Grenzen und Hermetias Ansatz",
    description: "Ein verantwortungsvoller Einstieg in spirituelle Profil-Systeme, AI-Deutung und Selbstreflexion.",
    body:
      "Spirituelles Profiling verbindet Symbolsysteme, Selbstauskunft und Reflexion. Es kann helfen, Worte für innere Muster zu finden, darf aber nicht als Diagnose oder Wahrheitssystem auftreten. Hermetia rahmt Profiling deshalb als Einladung: berechnet, erklärt, begrenzt und transparent. Der Wert liegt nicht darin, Menschen festzulegen, sondern Resonanzräume zu öffnen.",
  },
  {
    slug: "geburtszeit-unbekannt",
    title: "Geburtszeit unbekannt: Was ist trotzdem möglich?",
    seoTitle: "Geburtszeit unbekannt — welche Systeme bei Hermetia trotzdem funktionieren",
    description: "Welche Hermetia-Systeme eine genaue Uhrzeit brauchen und welche auch ohne funktionieren.",
    body:
      "Eine genaue Geburtszeit verbessert Systeme wie Aszendent, Häuser oder Human-Design-Details. Viele andere Perspektiven bleiben dennoch nutzbar: Numerologie, Tzolk'in, persönliche Jahreszyklen, Big Five, RIASEC, Ayurveda-Dosha oder Chronotyp. Hermetia kennzeichnet deshalb, welche Aussagen belastbar sind und welche mit mehr Vorsicht gelesen werden sollten.",
  },
  {
    slug: "ai-selbstreflexion",
    title: "AI in der Selbstreflexion: Chancen und Grenzen",
    seoTitle: "AI in der Selbstreflexion — wie Hermetia transparent mit KI arbeitet",
    description: "Warum AI Texte hilfreich formulieren kann, aber keine Autorität über Menschen haben sollte.",
    body:
      "AI kann komplexe Muster verständlich machen. Sie kann erklären, verdichten und Beispiele formulieren. Gleichzeitig darf sie nicht als unfehlbare Stimme auftreten. Hermetia trennt deshalb Berechnung, Konvergenz und AI-Deutung. Das Modell schreibt auf Grundlage berechneter Fakten, nicht aus freier Spekulation.",
  },
] as const;

export const comparisons = [
  {
    slug: "human-design-vs-gene-keys",
    title: "Human Design vs. Gene Keys",
    seoTitle: "Human Design vs. Gene Keys — Unterschiede, Gemeinsamkeiten und Hermetia",
    description: "Beide Systeme teilen eine Grundlage, lesen sie aber unterschiedlich.",
    body:
      "Human Design beschreibt Energie, Entscheidung und Zentren. Gene Keys beschreibt Archetypen, Reifung und Kontemplation. Beide teilen astronomische Grundlagen, aber nicht dieselbe Sprache. Hermetia nutzt beide nicht als doppelte Bestätigung, sondern als verwandte Perspektiven innerhalb einer Systemfamilie.",
  },
  {
    slug: "astrologie-vs-human-design",
    title: "Astrologie vs. Human Design",
    seoTitle: "Astrologie vs. Human Design — was zeigt welches System?",
    description: "Wie sich Horoskop und Bodygraph unterscheiden und warum Hermetia beide nutzt.",
    body:
      "Astrologie zeigt Himmelspositionen als Charakter-, Timing- und Beziehungssprache. Human Design übersetzt ähnliche Rohdaten in Typ, Autorität und Energiezentren. Hermetia nutzt beide Perspektiven, achtet aber darauf, gemeinsame Datenquellen nicht naiv doppelt zu zählen.",
  },
] as const;

export function getPillarPage(key: string, locale: Locale): ContentPage | undefined {
  const page = pillarPages[key];
  if (!page) return undefined;
  return locale === "en" ? page.en : page.de;
}

