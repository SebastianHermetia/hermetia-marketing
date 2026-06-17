import type { Metadata } from "next";
import { type Locale, siteUrl } from "@/i18n/config";
import { localizeCopy } from "@/i18n/localized-content";
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
  "Jede inhaltliche Seite bietet einen passenden Weg zum Profilstart, ohne hart verkaufen zu müssen.",
  "Der kostenlose Einstieg ist der erste Vertrauensmoment: Du prüfst Resonanz, bevor du ein bezahltes Modell wählst.",
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
    text: "Beziehungs- und Vergleichsanwendungen werden an klare Zustimmung gebunden. Das schützt Privatsphäre, Vertrauen und die rechtliche Grundlage.",
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

const useCasesCopy = {
  de: {
    seoTitle: "Hermetia Anwendungsfälle — Selbstreflexion, Beziehungen, Berufung und Alltag",
    seoDescription:
      "Für wen Hermetia geeignet ist, welche Situationen besonders gut passen und wo die Grenzen liegen: Anwendungsfälle, Pro/Contra und FAQ.",
    articleHeadline: "Hermetia Anwendungsfälle",
    articleDescription: "Selbstreflexion, Beziehungen, Berufung, Tagesimpulse und klare Grenzen.",
    articleAbout: "Hermetia Anwendungsfälle",
    breadcrumb: "Anwendungsfälle",
    heroKicker: "Anwendungsfälle",
    heroTitle: "Wofür Hermetia besonders gut geeignet ist.",
    heroLead:
      "Hermetia ist kein Orakel, keine Diagnose und kein Ersatz für Beratung. Es ist ein Reflexionssystem für Menschen, die sich selbst, ihre Beziehungen und ihre inneren Muster tiefer verstehen wollen und dafür einen ruhigen, transparenten Einstieg suchen.",
    startCta: "Profil kostenlos starten",
    compareCta: "Modelle vergleichen",
    heroAlt: "Eine ruhige Bibliothek als Bild für Selbstreflexion und Hermetia Anwendungsfälle",
    heroCaption:
      "Die beste Anwendung beginnt nicht mit einem Versprechen, sondern mit einer guten Frage: Was erkenne ich wieder?",
    searchKicker: "Suchfragen",
    searchTitle: "Welche Anwendungsfragen beantwortet Hermetia?",
    searchText:
      "Diese Seite ist für Menschen gebaut, die noch nicht sicher sind, ob Hermetia nur interessant klingt oder im eigenen Leben wirklich nützlich werden kann. Die wichtigsten Antwortmaschinen-Fragen stehen deshalb direkt am Anfang.",
    situationsKicker: "Situationen",
    situationsTitle: "Sechs Wege, Hermetia sinnvoll zu nutzen.",
    situationsText:
      "Die Website ist als Ressource aufgebaut. Die App macht daraus persönliche Erfahrung: kostenlos starten, erste Kernthemen sehen und danach entscheiden, ob mehr Tiefe sinnvoll ist.",
    journeyKicker: "Nutzerreise",
    journeyTitle: "Vom ersten Interesse zur bezahlten Tiefe.",
    journeyText:
      "Die Website ist nicht nur Information, sondern ein klarer, vertrauensvoller Weg in die Hermetia-App. Wer neugierig wird, kann jederzeit starten. Wer tiefer einsteigen will, versteht, warum ein bezahltes Modell sinnvoll ist.",
    journeyCtaTitle: "Teste den wichtigsten Anwendungsfall zuerst: dein eigenes Profil.",
    journeyCtaText:
      "Die beste Erklärung bleibt allgemein. Der kostenlose Profilstart zeigt, ob Hermetia bei dir persönlich Resonanz erzeugt.",
    depthKicker: "Vertiefung",
    depthTitle: "Vier Anwendungsfelder, in denen Hermetia besonders stark wird.",
    depthText:
      "Die einzelnen Bereiche können getrennt gelesen werden. In der App laufen sie zusammen: Seelenkarte, Systeme, Tagesimpulse, Journaling, Profilbuch und Beziehungsebene bilden eine fortlaufende Reflexionsumgebung.",
    fieldChip: "Anwendungsfeld",
    profileCheckCta: "Diesen Fall mit meinem Profil prüfen",
    goodFitKicker: "Gute Passung",
    goodFitTitle: "Hermetia passt gut, wenn...",
    badFitKicker: "Grenzen",
    badFitTitle: "Hermetia passt nicht, wenn...",
    conversionKicker: "Conversion-Prinzip",
    conversionTitle: "Neugier führt zur Anmeldung, aber mit Vertrauen.",
    conversionText:
      "Hermetia wirkt am stärksten, wenn deine Entscheidung selbstbestimmt bleibt. Deshalb verbinden die Inhalte klare Nutzenfelder mit sichtbaren Grenzen, Einwilligung und einem kostenlosen Einstieg.",
    funnelAlt: "Grafik zum Weg von Daten über Einordnung zu verständlicher Hermetia-Sprache",
    funnelCaption:
      "Der Funnel zeigt, warum Hermetia nicht einfach Systemtexte addiert, sondern Signale prüft, dämpft und in eigene Sprache übersetzt.",
    legalKicker: "Rechtlicher Rahmen",
    legalTitle: "Was Anwendungsfälle versprechen dürfen und was nicht.",
    legalText:
      "Hermetia formuliert Nutzen als Reflexion, nicht als Garantie. So bleiben die Anwendungsfälle hilfreich, klar und ohne überzogene Versprechen.",
    finalKicker: "Nächster Schritt",
    finalTitle: "Prüfe Hermetia an deinem eigenen Profil.",
    finalText:
      "Allgemeine Inhalte können Orientierung geben. Der Aha-Moment entsteht, wenn Hermetia deine eigenen Daten berechnet und die ersten Themen sichtbar macht. Der Einstieg bleibt kostenlos.",
    aboutCta: "Über Hermetia lesen",
    finalBoxTitle: "Vom Content zur App",
    finalBoxText:
      "Diese Seite hilft bei der Entscheidung, ob Hermetia grundsätzlich passt. Das Onboarding macht daraus eine persönliche Seelenkarte. Bezahlte Modelle öffnen erst danach die tiefere Begleitung.",
    faqKicker: "FAQ",
    faqTitle: "Häufige Fragen zu Anwendungsfällen",
    useCases,
    searchQuestions,
    journey,
    deepUseCases,
    goodFit,
    badFit,
    conversionPrinciples,
    legalFrames,
    faq,
  },
  en: {
    seoTitle: "Hermetia use cases — self-reflection, relationships, calling and daily practice",
    seoDescription:
      "Who Hermetia is for, which situations fit especially well and where the limits are: use cases, fit checks, legal framing and FAQ.",
    articleHeadline: "Hermetia use cases",
    articleDescription: "Self-reflection, relationships, calling, daily impulses and clear limits.",
    articleAbout: "Hermetia use cases",
    breadcrumb: "Use cases",
    heroKicker: "Use cases",
    heroTitle: "Where Hermetia is especially useful.",
    heroLead:
      "Hermetia is not an oracle, not a diagnosis and not a substitute for professional advice. It is a reflection system for people who want to understand themselves, their relationships and their inner patterns more deeply, with a calm and transparent way to start.",
    startCta: "Start profile for free",
    compareCta: "Compare plans",
    heroAlt: "A quiet library as an image for self-reflection and Hermetia use cases",
    heroCaption:
      "The best use case does not start with a promise, but with a good question: what do I recognize in myself?",
    searchKicker: "Search questions",
    searchTitle: "Which use-case questions does Hermetia answer?",
    searchText:
      "This page is built for people who are not yet sure whether Hermetia only sounds interesting or can become genuinely useful in their own life. The key answer-engine questions therefore come first.",
    searchQuestions: [
      {
        q: "What can I use Hermetia for?",
        a: "For self-reflection, decision questions, relationship dynamics, professional orientation, daily impulses and a clear understanding of different interpretation systems.",
      },
      {
        q: "Can Hermetia help with relationships?",
        a: "Hermetia can make resonance, friction and recurring patterns visible as a reflection space. Profiles of other people belong in a reading only with clear consent.",
      },
      {
        q: "When is a paid model worth it?",
        a: "When the free aha moment should become a regular practice: more levels, journaling, daily impulses, a profile book, relationship depth or longer-term companionship.",
      },
      {
        q: "What must Hermetia not replace?",
        a: "No therapy, no diagnosis, no medical, legal or financial advice and no certain promises about the future.",
      },
    ],
    situationsKicker: "Situations",
    situationsTitle: "Six meaningful ways to use Hermetia.",
    situationsText:
      "The website is built as a resource. The app turns it into personal experience: start free, see the first core themes and then decide whether more depth makes sense.",
    useCases: [
      {
        tag: "Self-reflection",
        title: "When you want to understand yourself better",
        text: "Hermetia helps put recurring patterns, strengths, shadows and inner tensions into language. The start is especially strong when classic personality descriptions feel too flat.",
        cta: "Begin with the soul map",
        href: paths.seelenkarte,
      },
      {
        tag: "Decisions",
        title: "When you seek clarity without handing over the answer",
        text: "Hermetia does not decide for you. The platform shows inner priorities, timing qualities and recurring questions so you can test more consciously what feels coherent.",
        cta: "Understand the method",
        href: paths.methodik,
      },
      {
        tag: "Daily life",
        title: "When you want calm daily companionship",
        text: "Daily impulses and journaling give a small focus without pressure or FOMO. This fits people who want to bring reflection into everyday life, not only read one large profile once.",
        cta: "View daily impulses",
        href: paths.tagesimpulse,
      },
      {
        tag: "Relationships",
        title: "When you want to understand resonance and friction",
        text: "Hermetia can make relationship dynamics visible as a reflection space. Clear consent remains essential because profiles of other people are sensitive.",
        cta: "Explore relationships",
        href: paths.beziehungen,
      },
      {
        tag: "Calling",
        title: "When you want to sort work, energy and meaning",
        text: "System signals from personality, rhythm and archetypal language can help look again at working style, energy balance and the wish to make an impact.",
        cta: "Explore systems",
        href: paths.systeme,
      },
      {
        tag: "Curiosity",
        title: "When you want to make several systems comparable",
        text: "Instead of reading astrology, Human Design, Gene Keys or numerology in isolation, Hermetia shows where perspectives converge and where they productively contradict one another.",
        cta: "Read comparisons",
        href: paths.vergleiche,
      },
    ],
    journeyKicker: "User journey",
    journeyTitle: "From first interest to paid depth.",
    journeyText:
      "The website is not only information, but a clear and trustworthy route into the Hermetia app. People who become curious can start at any time. People who want to go deeper understand why a paid model is useful.",
    journey: [
      {
        step: "1",
        title: "Curiosity",
        text: "The website answers basic questions: what Hermetia is, which systems are considered, which limits apply and which use cases really fit.",
      },
      {
        step: "2",
        title: "Free profile start",
        text: "The onboarding creates the first personal soul map. Users test resonance, language, data-protection comfort and the first core themes without buying pressure.",
      },
      {
        step: "3",
        title: "Conscious deepening",
        text: "Premium becomes useful when the first resonance is strong and the person wants more depth, daily practice, journaling, relationship analysis or a full profile book.",
      },
      {
        step: "4",
        title: "Ongoing practice",
        text: "Hermetia is then not only read, but used as a calm reflection environment: observe, write, compare, refine and keep responsibility.",
      },
    ],
    journeyCtaTitle: "Test the most important use case first: your own profile.",
    journeyCtaText:
      "The best explanation remains general. The free profile start shows whether Hermetia creates resonance for you personally.",
    depthKicker: "Deep dive",
    depthTitle: "Four fields where Hermetia becomes especially strong.",
    depthText:
      "Each area can be read separately. In the app they come together: soul map, systems, daily impulses, journaling, profile book and relationship layer form one ongoing reflection environment.",
    fieldChip: "Use field",
    profileCheckCta: "Check this case with my profile",
    deepUseCases: [
      {
        title: "Identity and self-image",
        image: "/images/hermetia/resonance-instrument.png",
        alt: "A finely tuned resonance instrument as a symbol for self-image and personal patterns",
        text: "Many users come to Hermetia because they only partly recognize themselves in common personality types. The platform does not look at one category, but at recurring signals from several system families. This creates language for inner tensions: what seems stable, what appears cyclically and which side wants to be seen without becoming a new fixed identity?",
        goodFor: ["name patterns", "sort strengths and shadows", "sharpen self-description"],
        cta: "use-cases-identity",
      },
      {
        title: "Decisions and transitions",
        image: "/images/hermetia/dawn-clock-of-becoming.png",
        alt: "A bright clock landscape as an image for transitions, timing and conscious decisions",
        text: "In career changes, relationship clarification, moving, creative projects or inner new beginnings, people often seek not only facts but orientation. Hermetia does not give instructions. It shows which themes, rhythms and archetypal tensions recur in the profile so decisions can be tested more consciously.",
        goodFor: ["structure questions", "reflect timing", "recognize inner priorities"],
        cta: "use-cases-decisions",
      },
      {
        title: "Relationships and resonance",
        image: "/images/hermetia/garden-of-agreements.png",
        alt: "A calm garden as a symbol for relationships, boundaries and mutual consent",
        text: "Relationship work needs care. Hermetia can help read difference not immediately as failure: closeness and autonomy, tempo and depth, safety and adventure. The ethical frame is clear: relationship readings require consent and remain reflection help, not a judgment of a person.",
        goodFor: ["understand resonance", "de-dramatize friction", "respect consent"],
        cta: "use-cases-relationships",
      },
      {
        title: "Daily life, journaling and integration",
        image: "/images/hermetia/alchemical-listening-room.png",
        alt: "A quiet room as an image for journaling, integration and daily reflection",
        text: "The greatest value does not always arise in the first large profile, but in repetition. Daily impulses, journaling and profile refinement help test insights in everyday life: what is true today, what changes and which language supports without pressure?",
        goodFor: ["daily reflection", "journaling routines", "integrate insights"],
        cta: "use-cases-journaling",
      },
    ],
    goodFitKicker: "Good fit",
    goodFitTitle: "Hermetia fits well if...",
    goodFit: [
      "You want to understand yourself better without locking yourself into a rigid identity.",
      "You like spiritual systems but want transparency, data protection and clear limits.",
      "You are looking for a calm start and want to test resonance for free first.",
      "You want to decide later whether deeper levels, journaling or relationship readings are worth the price.",
    ],
    badFitKicker: "Limits",
    badFitTitle: "Hermetia does not fit if...",
    badFit: [
      "You expect diagnoses, therapy, medical assessment or psychological treatment.",
      "You want certain predictions about future, love, money, health or fate.",
      "You are looking for an authority that takes decisions away from you.",
      "You want to evaluate profiles of other people without their consent.",
    ],
    conversionKicker: "Conversion principle",
    conversionTitle: "Curiosity leads to signup, but through trust.",
    conversionText:
      "Hermetia is strongest when your decision remains self-determined. The content therefore connects clear fields of value with visible limits, consent and a free start.",
    conversionPrinciples: [
      "Every content page offers a fitting path to profile start without having to sell hard.",
      "The free start is the first trust moment: you test resonance before choosing a paid model.",
      "Premium CTAs belong especially where depth, daily practice, journaling, relationships or the full profile book are explained.",
      "Legal limits, data protection and IP care remain visible so conversion is not based on exaggerated promises.",
    ],
    funnelAlt: "Graphic showing the path from data through classification to understandable Hermetia language",
    funnelCaption:
      "The funnel shows why Hermetia does not simply add system texts, but checks signals, softens certainty and translates them into its own language.",
    legalKicker: "Legal frame",
    legalTitle: "What use cases may promise and what they may not.",
    legalText:
      "Hermetia describes value as reflection, not as guarantee. That keeps the use cases helpful, clear and free from exaggerated promises.",
    legalFrames: [
      {
        title: "No diagnosis and no healing promises",
        text: "Use cases are framed as reflection spaces. Hermetia makes no medical, psychotherapeutic, legal or financial statements and does not replace professional support.",
      },
      {
        title: "Original language instead of protected interpretation texts",
        text: "The page describes systems, patterns and Hermetia's method in original editorial language. Proprietary texts, tables, wordings or protected excerpts from other providers are not reused.",
      },
      {
        title: "Consent for sensitive profiles",
        text: "Relationship and comparison use cases are tied to clear consent. This protects privacy, trust and the legal foundation.",
      },
    ],
    finalKicker: "Next step",
    finalTitle: "Test Hermetia on your own profile.",
    finalText:
      "General content can provide orientation. The aha moment happens when Hermetia calculates your own data and the first themes become visible. The start remains free.",
    aboutCta: "Read about Hermetia",
    finalBoxTitle: "From content to app",
    finalBoxText:
      "This page helps decide whether Hermetia fits in principle. Onboarding turns it into a personal soul map. Paid models open deeper companionship only after that.",
    faqKicker: "FAQ",
    faqTitle: "Frequently asked questions about use cases",
    faq: [
      {
        q: "Who is Hermetia best suited for?",
        a: "Hermetia fits people who want to use spiritual and psychological systems as language for reflection while valuing transparency, data protection, clear limits and an aesthetic user experience.",
      },
      {
        q: "Can Hermetia help with important life decisions?",
        a: "Hermetia can make questions, patterns and inner priorities visible. It does not decide for you and does not replace professional advice on medical, psychological, legal or financial topics.",
      },
      {
        q: "Is Hermetia more for beginners or advanced users?",
        a: "Both. Beginners receive an understandable synthesis without needing specialist knowledge. Advanced users can go deeper into systems, convergence and comparison pages.",
      },
      {
        q: "Why should I sign up?",
        a: "The website explains the concept generally. Only onboarding creates your personal soul map from your data. The free start shows first core themes before you decide on a paid model.",
      },
    ],
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = localizeCopy(locale as Locale, useCasesCopy);
  return buildMetadata({
    locale: locale as Locale,
    path: paths.anwendungsfaelle,
    title: copy.seoTitle,
    description: copy.seoDescription,
  });
}

export default async function UseCasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const copy = localizeCopy(locale, useCasesCopy);
  const localizedFaq = copy.faq.map(({ q, a }) => ({ q, a }));
  const pageUrl = `${siteUrl}/${locale}${paths.anwendungsfaelle}/`;

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: copy.articleHeadline,
            description: copy.articleDescription,
            locale,
            url: pageUrl,
            about: copy.articleAbout,
            image: `${siteUrl}/images/hermetia/library-of-self-profile.png`,
          }),
          faqSchema(localizedFaq),
          breadcrumbSchema([
            { name: "Hermetia", url: `${siteUrl}/${locale}/` },
            { name: copy.breadcrumb, url: pageUrl },
          ]),
        ]}
      />
      <Header locale={locale} current="anwendungsfaelle" />
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
                <a className="btn btn-primary btn-lg" href={startUrl(locale, { source: "use-cases-hero" })}>{copy.startCta}</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.preise)}>{copy.compareCta}</a>
              </div>
            </div>
            <figure className="m-0 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src="/images/hermetia/library-of-self-profile.png" alt={copy.heroAlt} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="px-5 py-4 text-[14px] text-pflaume/80">
                {copy.heroCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 max-w-[780px]">
              <span className="kicker">{copy.searchKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.searchTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.searchText}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {copy.searchQuestions.map((item) => (
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
              <span className="kicker">{copy.situationsKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.situationsTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.situationsText}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {copy.useCases.map((item) => (
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
              <span className="kicker">{copy.journeyKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.journeyTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.journeyText}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {copy.journey.map((item) => (
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
                title={copy.journeyCtaTitle}
                text={copy.journeyCtaText}
                source="use-cases-journey"
              />
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap">
            <div className="mb-9 max-w-[820px]">
              <span className="kicker">{copy.depthKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.depthTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.depthText}
              </p>
            </div>
            <div className="grid gap-6">
              {copy.deepUseCases.map((item, idx) => (
                <article key={item.title} className="grid overflow-hidden rounded-card border border-sand bg-white shadow-soft lg:grid-cols-[.82fr_1fr]">
                  <img src={item.image} alt={item.alt} className="h-full min-h-[280px] w-full object-cover" loading={idx === 0 ? "eager" : "lazy"} />
                  <div className="p-7">
                    <span className="chip">{copy.fieldChip}</span>
                    <h3 className="mt-4 text-[clamp(24px,3vw,32px)]">{item.title}</h3>
                    <p className="muted mt-4 text-[16.5px] leading-[1.85]">{item.text}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.goodFor.map((signal) => (
                        <span key={signal} className="rounded-full border border-salbei/45 bg-salbei/15 px-3 py-1 text-[13px] font-semibold text-pflaume">{signal}</span>
                      ))}
                    </div>
                    <a className="btn btn-primary mt-6" href={startUrl(locale, { source: item.cta })}>{copy.profileCheckCta}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-salbei/40 bg-white p-7 shadow-soft">
              <span className="chip">{copy.goodFitKicker}</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">{copy.goodFitTitle}</h2>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {copy.goodFit.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
            <div className="rounded-card border border-altrosa/35 bg-altrosa/10 p-7">
              <span className="chip chip-rose">{copy.badFitKicker}</span>
              <h2 className="mt-4 text-[clamp(26px,3.5vw,34px)]">{copy.badFitTitle}</h2>
              <ul className="mt-5 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {copy.badFit.map((item) => <li key={item}>× {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-creme-tief py-16">
          <div className="wrap grid gap-8 lg:grid-cols-[1fr_.9fr]">
            <div>
              <span className="kicker">{copy.conversionKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.conversionTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.conversionText}
              </p>
              <ul className="mt-6 flex list-none flex-col gap-3 text-[15.5px] leading-relaxed text-pflaume/90">
                {copy.conversionPrinciples.map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
            </div>
            <figure className="m-0 rounded-card border border-sand bg-white p-4 shadow-soft">
              <img src="/graphics/convergence/abb5-algorithmus-funnel.svg" alt={copy.funnelAlt} className="w-full rounded-[6px]" loading="lazy" />
              <figcaption className="muted mt-3 text-[14px] leading-relaxed">
                {copy.funnelCaption}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16">
          <div className="wrap">
            <div className="mb-8 max-w-[780px]">
              <span className="kicker">{copy.legalKicker}</span>
              <h2 className="mt-3 text-[clamp(27px,4vw,38px)]">{copy.legalTitle}</h2>
              <p className="muted mt-4 text-[17px] leading-[1.85]">
                {copy.legalText}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {copy.legalFrames.map((item) => (
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
              <span className="kicker text-gold-weich">{copy.finalKicker}</span>
              <h2 className="mt-3 text-[clamp(28px,4vw,40px)] text-white">{copy.finalTitle}</h2>
              <p className="mt-4 max-w-[640px] text-[17px] leading-[1.85] text-[#e9dcf2]">
                {copy.finalText}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-on-dark btn-lg" href={startUrl(locale, { source: "use-cases-final" })}>{copy.startCta}</a>
                <a className="btn btn-ghost btn-lg border-white/30 text-white hover:bg-white/10" href={localePath(locale, paths.about)}>{copy.aboutCta}</a>
              </div>
            </div>
            <div className="rounded-card border border-gold-weich/20 bg-white/8 p-6">
              <h3 className="text-[24px] text-white">{copy.finalBoxTitle}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#e9dcf2]">
                {copy.finalBoxText}
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
