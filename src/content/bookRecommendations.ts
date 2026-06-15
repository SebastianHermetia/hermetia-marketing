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
  // ── Westliche Astrologie ───────────────────────────────────────────────────
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
    id: "hellenistic-astrology-brennan",
    title: "Hellenistic Astrology",
    authors: "Chris Brennan",
    languages: ["EN"],
    level: { de: "Quellenwerk", en: "Source text" },
    description: {
      de: "Umfassende Einführung in die antike westliche Astrologie: historische Grundlagen, Häuserlogik, Planetenwürden und Schicksalskonzepte. Für Leser, die die methodische Herkunft astrologischer Regeln verstehen wollen.",
      en: "A comprehensive introduction to ancient Western astrology: historical foundations, house logic, planetary dignities and fate concepts. For readers who want to understand the methodical origins of astrological rules.",
    },
    systems: ["hellenistische-astrologie", "astrologie"],
    searchQuery: "Hellenistic Astrology Chris Brennan",
  },
  // ── Human Design ──────────────────────────────────────────────────────────
  {
    id: "understanding-human-design",
    title: "Understanding Human Design",
    authors: "Karen Curry Parker",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Eine nutzerfreundliche Einführung in Typ, Strategie, Autorität und Energiezentren. Gut geeignet, um Hermetias Human-Design-Ergebnisse besser einzuordnen.",
      en: "A user-friendly introduction to type, strategy, authority and energy centres. Useful for understanding Hermetia's Human Design layer.",
    },
    systems: ["human-design"],
    searchQuery: "Understanding Human Design Karen Curry Parker",
  },
  // ── Gene Keys ─────────────────────────────────────────────────────────────
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
    id: "art-of-contemplation",
    title: "The Art of Contemplation",
    authors: "Richard Rudd",
    languages: ["EN"],
    level: { de: "Praxis", en: "Practice" },
    description: {
      de: "Ein kürzeres Praxisbuch zur kontemplativen Methode hinter den Gene Keys. Gibt Lesern einen konkreten Zugang zur Selbstreflexion und eignet sich gut als Einstieg vor dem Hauptwerk.",
      en: "A shorter practice book on the contemplative method behind the Gene Keys. Gives readers a tangible approach to self-reflection — a good entry point before the main work.",
    },
    systems: ["gene-keys"],
    searchQuery: "The Art of Contemplation Richard Rudd",
  },
  // ── Numerologie ───────────────────────────────────────────────────────────
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
    id: "numerologie-banzhaf",
    title: "Numerologie",
    authors: "Hajo Banzhaf",
    languages: ["DE"],
    level: { de: "Einstieg (DE)", en: "Introduction (DE)" },
    description: {
      de: "Deutschsprachige Einführung in Zahlenqualitäten und persönliche Zahlenbilder. Besonders für DACH-Nutzer, die einen direkten Einstieg in die eigene Sprache suchen.",
      en: "A German-language introduction to number qualities and personal number images. Especially useful for German-speaking readers looking for a direct start.",
    },
    systems: ["numerologie"],
    searchQuery: "Numerologie Hajo Banzhaf",
  },
  // ── BaZi ──────────────────────────────────────────────────────────────────
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
  // ── Enneagramm ────────────────────────────────────────────────────────────
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
    id: "enneagramm-rohr-ebert",
    title: "Das Enneagramm",
    authors: "Richard Rohr, Andreas Ebert",
    languages: ["DE"],
    level: { de: "Einstieg (DE)", en: "Introduction (DE)" },
    description: {
      de: "Deutschsprachiger Klassiker mit spirituell-christlicher Perspektive auf die neun Enneagramm-Muster. In DACH sehr bekannt und leicht zugänglich.",
      en: "A German-language classic on the nine Enneagram patterns with a spiritual-Christian perspective. Widely known and accessible in German-speaking countries.",
    },
    systems: ["enneagramm"],
    searchQuery: "Das Enneagramm Richard Rohr Andreas Ebert",
  },
  // ── Maya Tzolk'in ─────────────────────────────────────────────────────────
  {
    id: "book-of-destiny-barrios",
    title: "The Book of Destiny",
    authors: "Carlos Barrios",
    languages: ["EN", "ES"],
    level: { de: "Traditionskontext", en: "Traditional context" },
    description: {
      de: "Maya-Zeitkonzepte und spirituelle Deutungen in narrativer Form, vermittelt von einem guatemaltekischen Daykeeper. Als kulturell sensibler Kontext zur Tzolk'in-Tradition geeignet.",
      en: "Maya time concepts and spiritual interpretations in narrative form, conveyed by a Guatemalan Daykeeper. Suitable as a culturally sensitive context for the Tzolk'in tradition.",
    },
    systems: ["maya-tzolkin"],
    searchQuery: "The Book of Destiny Carlos Barrios",
  },
  // ── Vedische Nakshatra ────────────────────────────────────────────────────
  {
    id: "light-on-life",
    title: "Light on Life",
    authors: "Hart de Fouw, Robert Svoboda",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein gut lesbares Einführungswerk in die vedische Astrologie mit philosophischem und praktischem Kontext. Ideal, um Nakshatras und Jyotish als Hintergrund zu verstehen.",
      en: "A readable introduction to Vedic astrology with philosophical and practical context. Ideal for understanding Nakshatras and Jyotish as a background.",
    },
    systems: ["vedische-nakshatra"],
    searchQuery: "Light on Life Hart de Fouw Robert Svoboda",
  },
  // ── I Ching ───────────────────────────────────────────────────────────────
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
    systems: ["i-ching", "oracle-cards", "gene-keys"],
    searchQuery: "I Ging Richard Wilhelm",
  },
  // ── Ayurveda ──────────────────────────────────────────────────────────────
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
  // ── Mondknoten ────────────────────────────────────────────────────────────
  {
    id: "astrology-soul-spiller",
    title: "Astrology for the Soul",
    authors: "Jan Spiller",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein populäres Werk zu Nord- und Südknoten als Entwicklungsachse. Geeignet für Nutzer, die den Seelenweg-Aspekt ihres Profils vertiefen wollen.",
      en: "A popular book on north and south node as a development axis. Suitable for readers who want to deepen the soul-path dimension of their profile.",
    },
    systems: ["mondknoten"],
    searchQuery: "Astrology for the Soul Jan Spiller",
  },
  // ── Nine Star Ki ──────────────────────────────────────────────────────────
  {
    id: "nine-star-ki-kushi",
    title: "Nine Star Ki",
    authors: "Michio Kushi",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Einführung in Nine Star Ki als System zyklischer Energien und Charaktertendenzen aus der japanisch-chinesischen Tradition. Verfügbarkeit vorab prüfen.",
      en: "An introduction to Nine Star Ki as a system of cyclical energies and character tendencies from the Japanese-Chinese tradition. Check availability in advance.",
    },
    systems: ["nine-star-ki"],
    searchQuery: "Nine Star Ki Michio Kushi",
  },
  // ── Cards of Destiny ──────────────────────────────────────────────────────
  {
    id: "secret-language-birthdays",
    title: "The Secret Language of Birthdays",
    authors: "Gary Goldschneider, Joost Elffers",
    languages: ["EN", "DE", "FR", "ES", "IT"],
    level: { de: "Geburtstagsbuch", en: "Birthday archetypes" },
    description: {
      de: "Ein populärer Klassiker mit täglichen Geburtstagsarchetypen. Nicht deckungsgleich mit Cards of Destiny, aber als ergänzender Geburtstagskontext geeignet.",
      en: "A popular classic featuring daily birthday archetypes. Not identical to Cards of Destiny, but useful as a complementary birthday context.",
    },
    systems: ["cards-of-destiny"],
    searchQuery: "The Secret Language of Birthdays Gary Goldschneider",
  },
  // ── Tarot ─────────────────────────────────────────────────────────────────
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
  // ── Sabian Symbols ────────────────────────────────────────────────────────
  {
    id: "astrological-mandala",
    title: "An Astrological Mandala",
    authors: "Dane Rudhyar",
    languages: ["EN"],
    level: { de: "Quellenkontext", en: "Source context" },
    description: {
      de: "Ein bekanntes Werk zu den 360 Sabischen Symbolen. Als externe Lektüre empfohlen; keine Symboltexte in Hermetia übernommen.",
      en: "A well-known work on the 360 Sabian symbols. Recommended as external reading; no symbol texts are adopted into Hermetia.",
    },
    systems: ["sabian-symbols"],
    searchQuery: "An Astrological Mandala Dane Rudhyar",
  },
  // ── Astrokartografie ──────────────────────────────────────────────────────
  {
    id: "where-in-the-world",
    title: "Where in the World",
    authors: "Erin Sullivan",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Eine Einführung in Ortsastrologie und die Bedeutung von Orten und planetaren Linien. Gute Alternative zu streng markengebundenem Material im Bereich Astrokartografie.",
      en: "An introduction to locational astrology and the significance of places and planetary lines. A good alternative to strictly trademarked material in the field of astrocartography.",
    },
    systems: ["astrokartografie"],
    searchQuery: "Where in the World Erin Sullivan",
  },
  // ── Fixsterne, Chiron, Lilith ─────────────────────────────────────────────
  {
    id: "chiron-healing-journey",
    title: "Chiron and the Healing Journey",
    authors: "Melanie Reinhart",
    languages: ["EN"],
    level: { de: "Vertiefung", en: "Depth" },
    description: {
      de: "Ein bekanntes Werk zu Chiron als Symbol für Verwundung, Heilung und Integration. Gut für Nutzer, die den Wund-Heilungs-Aspekt ihres Profils vertiefen wollen.",
      en: "A well-known work on Chiron as a symbol of wound, healing and integration. Useful for readers who want to explore the wound-healing dimension of their profile.",
    },
    systems: ["fixsterne-chiron-lilith"],
    searchQuery: "Chiron and the Healing Journey Melanie Reinhart",
  },
  // ── Big Five / Persönlichkeitspsychologie ──────────────────────────────────
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
  // ── 16 Types ──────────────────────────────────────────────────────────────
  {
    id: "gifts-differing",
    title: "Gifts Differing",
    authors: "Isabel Briggs Myers, Peter B. Myers",
    languages: ["EN"],
    level: { de: "Kontext", en: "Context" },
    description: {
      de: "Historischer Klassiker zur Myers-Briggs-Typologie. Für Hermetia als Kontext zu kognitiven Präferenzen geeignet — keine Markenbezeichnung wird direkt übernommen.",
      en: "A historical classic on Myers-Briggs typology. Useful in Hermetia as context for cognitive preferences — no trademark designations are adopted directly.",
    },
    systems: ["sixteen-types"],
    searchQuery: "Gifts Differing Isabel Briggs Myers",
  },
  // ── TCM ────────────────────────────────────────────────────────────────────
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
  // ── VIA-Stärken ────────────────────────────────────────────────────────────
  {
    id: "power-character-strengths",
    title: "The Power of Character Strengths",
    authors: "Ryan M. Niemiec, Robert E. McGrath",
    languages: ["EN"],
    level: { de: "Praxis", en: "Practice" },
    description: {
      de: "Ein praxisnahes Buch zur Anwendung von Charakterstärken im Alltag. Passend zur ressourcenorientierten Seite von Hermetia.",
      en: "A practical book on applying character strengths in everyday life. A good fit for Hermetia's resource-oriented layer.",
    },
    systems: ["via-staerken"],
    searchQuery: "The Power of Character Strengths Niemiec McGrath",
  },
  // ── Spiral Dynamics ────────────────────────────────────────────────────────
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
  // ── Kabbala ────────────────────────────────────────────────────────────────
  {
    id: "mystical-qabalah",
    title: "The Mystical Qabalah",
    authors: "Dion Fortune",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Eine gut lesbare Einführung in den Lebensbaum als psychologisch-spirituelles Symbolsystem der westlichen Esoterik.",
      en: "A readable introduction to the Tree of Life as a psychological-spiritual symbol system in the Western esoteric tradition.",
    },
    systems: ["kabbalah-tree"],
    searchQuery: "The Mystical Qabalah Dion Fortune",
  },
  // ── Symbolkunde / Oracle ────────────────────────────────────────────────────
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

// Curated selection spanning all major system families — explicit IDs so array order doesn't matter.
const featuredBookIds = [
  "inner-sky",
  "understanding-human-design",
  "gene-keys",
  "wisdom-enneagram",
  "four-pillars-raymond-lo",
  "complete-book-numerology",
];

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
  const featured = featuredBookIds
    .map((id) => books.find((b) => b.id === id))
    .filter((b): b is BookRecommendation => b !== undefined);
  return featured.slice(0, limit);
}

export function bookSearchUrl(book: BookRecommendation, locale: Locale | string) {
  const q = encodeURIComponent(book.searchQuery);
  if (locale === "en") return `https://www.amazon.co.uk/s?k=${q}`;
  return `https://www.amazon.de/s?k=${q}`;
}
