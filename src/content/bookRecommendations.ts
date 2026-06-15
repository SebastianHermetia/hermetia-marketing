import { type Locale } from "@/i18n/config";

type Localized = {
  de: string;
  en: string;
};

export type BookRecommendation = {
  id: string;
  title: string;
  authors: string;
  languages: string[];
  level: Localized;
  description: Localized;
  systems: string[];
  searchQuery: string;
};

const books: BookRecommendation[] = [
  {
    id: "inner-sky",
    title: "The Inner Sky",
    authors: "Steven Forrest",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein gut zugänglicher Klassiker der psychologischen Astrologie. Forrest erklärt Planeten, Zeichen und Häuser als Sprache für Entwicklung, Entscheidungen und Lebensmuster.",
      en: "An accessible classic of psychological astrology. Forrest explains planets, signs and houses as a language for growth, choices and life patterns.",
    },
    systems: ["astrologie", "drakonisches-horoskop"],
    searchQuery: "The Inner Sky Steven Forrest",
  },
  {
    id: "understanding-human-design",
    title: "Understanding Human Design",
    authors: "Karen Curry Parker",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Eine nutzerfreundliche Einführung in Typ, Strategie, Autorität und Energiezentren. Gut geeignet, um Hermetias Human-Design-Ergebnisse besser einzuordnen.",
      en: "A user-friendly introduction to type, strategy, authority and energy centres. Useful for understanding Hermetia’s Human Design layer.",
    },
    systems: ["human-design"],
    searchQuery: "Understanding Human Design Karen Curry Parker",
  },
  {
    id: "gene-keys",
    title: "The Gene Keys",
    authors: "Richard Rudd",
    languages: ["EN"],
    level: { de: "Quellenwerk", en: "Core text" },
    description: {
      de: "Das zentrale Werk zum Gene-Keys-System mit 64 Archetypen und dem Weg von Schatten über Gabe zu Siddhi. Als externe Vertiefung geeignet, nicht als Textquelle für Hermetia.",
      en: "The central work of the Gene Keys system, with 64 archetypes and the path from shadow through gift to siddhi. Useful as external reading, not as a source text for Hermetia.",
    },
    systems: ["gene-keys"],
    searchQuery: "The Gene Keys Richard Rudd",
  },
  {
    id: "complete-book-numerology",
    title: "The Complete Book of Numerology",
    authors: "David A. Phillips",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Eine verständliche Einführung in Geburtsdatum, Namenszahlen und persönliche Muster. Passend zu Lebenszahl, Ausdruckszahl und persönlichen Zyklen.",
      en: "A clear introduction to birth date, name numbers and personal patterns. Fits life path, expression numbers and personal cycles.",
    },
    systems: ["numerologie", "persoenliches-jahr", "lo-shu-grid"],
    searchQuery: "The Complete Book of Numerology David Phillips",
  },
  {
    id: "four-pillars-raymond-lo",
    title: "Four Pillars of Destiny",
    authors: "Raymond Lo",
    languages: ["EN"],
    level: { de: "Vertiefung", en: "Depth" },
    description: {
      de: "Ein bekannter Einstieg in BaZi mit Himmelsstämmen, Erdzweigen, Elementen und Deutungslogik der vier Säulen.",
      en: "A well-known introduction to BaZi, heavenly stems, earthly branches, elements and the interpretation logic of the Four Pillars.",
    },
    systems: ["bazi-vier-saeulen"],
    searchQuery: "Four Pillars of Destiny Raymond Lo",
  },
  {
    id: "wisdom-enneagram",
    title: "The Wisdom of the Enneagram",
    authors: "Don Richard Riso, Russ Hudson",
    languages: ["EN", "DE", "ES"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein moderner Klassiker zu den neun Enneagramm-Typen, ihren Entwicklungslinien und typischen Wachstumsfeldern.",
      en: "A modern classic on the nine Enneagram types, their development lines and typical growth fields.",
    },
    systems: ["enneagramm"],
    searchQuery: "The Wisdom of the Enneagram Riso Hudson",
  },
  {
    id: "i-ging-wilhelm",
    title: "I Ging",
    authors: "Richard Wilhelm",
    languages: ["DE", "EN", "FR", "ES", "IT"],
    level: { de: "Klassiker", en: "Classic" },
    description: {
      de: "Eine der einflussreichsten westlichen Ausgaben des Buchs der Wandlungen. Hilfreich, um die 64 Hexagramme als Reflexionssprache zu verstehen.",
      en: "One of the most influential Western editions of the Book of Changes. Helpful for understanding the 64 hexagrams as a language of reflection.",
    },
    systems: ["oracle-cards", "gene-keys"],
    searchQuery: "I Ging Richard Wilhelm",
  },
  {
    id: "seventy-eight-degrees",
    title: "78 Degrees of Wisdom",
    authors: "Rachel Pollack",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein moderner Tarot-Klassiker, der psychologische, symbolische und narrative Deutungen verbindet.",
      en: "A modern Tarot classic that combines psychological, symbolic and narrative interpretation.",
    },
    systems: ["tarot-geburtskarten", "oracle-cards"],
    searchQuery: "78 Degrees of Wisdom Rachel Pollack",
  },
  {
    id: "ayurveda-lad",
    title: "Ayurveda: The Science of Self-Healing",
    authors: "Vasant Lad",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein klassischer Einstieg in Doshas und ayurvedische Grundbegriffe. Bei Hermetia nur als Selbstreflexion, nicht als medizinischer Rat.",
      en: "A classic introduction to doshas and Ayurvedic foundations. In Hermetia this is framed as self-reflection, not medical advice.",
    },
    systems: ["ayurveda-dosha"],
    searchQuery: "Ayurveda The Science of Self-Healing Vasant Lad",
  },
  {
    id: "personality-nettle",
    title: "Personality: What Makes You the Way You Are",
    authors: "Daniel Nettle",
    languages: ["EN"],
    level: { de: "Wissenschaftsnah", en: "Research-based" },
    description: {
      de: "Ein gut lesbarer Einstieg in die Big Five und ihre Bedeutung für Verhalten, Beziehungen und Lebensentscheidungen.",
      en: "A readable introduction to the Big Five and their relevance for behaviour, relationships and life choices.",
    },
    systems: ["big-five", "sixteen-types"],
    searchQuery: "Personality What Makes You the Way You Are Daniel Nettle",
  },
  {
    id: "web-no-weaver",
    title: "The Web That Has No Weaver",
    authors: "Ted J. Kaptchuk",
    languages: ["EN", "DE", "FR"],
    level: { de: "Hintergrund", en: "Background" },
    description: {
      de: "Ein Klassiker zum Denkmodell der chinesischen Medizin. Für Hermetia nur mit klarem Hinweis: Reflexionsmodell, keine Diagnose.",
      en: "A classic on the thinking model of Chinese medicine. In Hermetia this requires a clear frame: reflection model, not diagnosis.",
    },
    systems: ["tcm-konstitution", "ayurveda-dosha"],
    searchQuery: "The Web That Has No Weaver Ted Kaptchuk",
  },
  {
    id: "power-character-strengths",
    title: "The Power of Character Strengths",
    authors: "Ryan M. Niemiec, Robert E. McGrath",
    languages: ["EN"],
    level: { de: "Praxis", en: "Practice" },
    description: {
      de: "Ein praxisnahes Buch zur Anwendung von Charakterstärken im Alltag. Passend zur ressourcenorientierten Seite von Hermetia.",
      en: "A practical book on applying character strengths in everyday life. A good fit for Hermetia’s resource-oriented layer.",
    },
    systems: ["via-staerken"],
    searchQuery: "The Power of Character Strengths Niemiec McGrath",
  },
  {
    id: "spiral-dynamics",
    title: "Spiral Dynamics",
    authors: "Don Edward Beck, Christopher C. Cowan",
    languages: ["EN", "DE"],
    level: { de: "Quellenkontext", en: "Source context" },
    description: {
      de: "Der Ursprungstext zum modernen Spiral-Dynamics-Modell. In Hermetia nur als externer Kontext, nicht als starre Einstufung von Menschen.",
      en: "The source text for the modern Spiral Dynamics model. In Hermetia it is external context, not a rigid ranking of people.",
    },
    systems: ["spiral-dynamics"],
    searchQuery: "Spiral Dynamics Beck Cowan",
  },
  {
    id: "book-of-symbols",
    title: "The Book of Symbols",
    authors: "ARAS / Taschen",
    languages: ["EN", "DE", "FR", "ES", "IT"],
    level: { de: "Symbolkunde", en: "Symbol reference" },
    description: {
      de: "Ein reiches Kompendium archetypischer Symbole. Sehr passend als Hintergrund für Orakel-, Tarot- und Symbolmodule.",
      en: "A rich compendium of archetypal symbols. Especially useful as background for oracle, Tarot and symbolic modules.",
    },
    systems: ["oracle-cards", "tarot-geburtskarten", "kabbalah-tree"],
    searchQuery: "The Book of Symbols Taschen ARAS",
  },
];

const fallbackIds = ["inner-sky", "wisdom-enneagram", "book-of-symbols"];

function localize<T extends Localized>(value: T, locale: Locale | string) {
  return locale === "en" ? value.en : value.de;
}

export function bookText(book: BookRecommendation, locale: Locale | string) {
  return {
    level: localize(book.level, locale),
    description: localize(book.description, locale),
  };
}

export function getBooksForSystem(slug: string, limit = 3) {
  const exact = books.filter((book) => book.systems.includes(slug));
  if (exact.length >= limit) return exact.slice(0, limit);
  const fallback = books.filter((book) => fallbackIds.includes(book.id) && !exact.some((item) => item.id === book.id));
  return [...exact, ...fallback].slice(0, limit);
}

export function featuredBooks(limit = 6) {
  return books.slice(0, limit);
}

export function bookSearchUrl(book: BookRecommendation, locale: Locale | string) {
  const q = encodeURIComponent(book.searchQuery);
  if (locale === "en") return `https://www.amazon.co.uk/s?k=${q}`;
  return `https://www.amazon.de/s?k=${q}`;
}
