// Begriffe, die die Übersetzungs-Pipeline unangetastet lassen muss.
//
// Hintergrund: `gtx` übersetzt Eigennamen wie jedes andere Wort — aus "Human Design"
// wurde im französischen Build "conception humaine", aus "Gene Keys" "clés génétiques".
// Das ist doppelt schädlich: inhaltlich falsch (die Systeme heißen international so)
// und für SEO wertlos, weil genau diese Begriffe die Suchbegriffe sind. Solange nur
// DE und EN indexiert waren, fiel es nicht auf; mit FR/ES/IT im Index ist es blockierend.
//
// Aufnahmekriterium: internationaler Eigenname, der in FR/ES/IT unübersetzt verwendet
// wird. Gattungsbegriffe (Astrologie, Numerologie, Enneagramm, Mondknoten, Seelenkarte)
// gehören NICHT hierher — die sollen lokalisiert werden.
//
// Reihenfolge egal, die Maskierung sortiert selbst nach Länge (längster Treffer zuerst),
// damit "Maya Tzolk'in" nicht von "Tzolk'in" zerteilt wird.
export const protectedTerms = [
  // Marke und Technik
  "Astrakey",
  "Skyfield",
  "All Access",
  // Systeme mit internationalem Eigennamen
  "Human Design",
  "Gene Keys",
  "Big Five",
  "I Ching",
  "BaZi",
  "Lo Shu Grid",
  "Lo Shu",
  "Cards of Destiny",
  "Nine Star Ki",
  "Spiral Dynamics",
  "RIASEC",
  "Maya Tzolk'in",
  "Tzolk'in",
  "Nakshatra",
  "Mahabote",
  "Sabian Symbols",
  "Bodygraph",
  "Kabbalah Tree",
  // Begriffe aus dem Human-Design-/Gene-Keys-Vokabular, die als Eigennamen zitiert werden
  "Gene Key",
  "Human-Design",
];

const byLength = [...protectedTerms].sort((a, b) => b.length - a.length);

// Platzhalter bewusst ohne Wörterbuch-Bedeutung und ohne Sonderzeichen: gtx lässt
// solche Token in aller Regel unverändert stehen und stellt sie nicht um.
function token(index) {
  return `ZQ${index}QZ`;
}

const tokenByTerm = new Map(byLength.map((term, index) => [term, token(index)]));

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Wortgrenzen nur dort erzwingen, wo der Begriff mit einem Wortzeichen beginnt bzw.
// endet — sonst greift \b bei "Tzolk'in" oder "16 Types" nicht.
const maskPattern = new RegExp(
  byLength
    .map((term) => {
      const body = escapeRegExp(term);
      const left = /^\w/.test(term) ? "\\b" : "";
      const right = /\w$/.test(term) ? "\\b" : "";
      return `${left}${body}${right}`;
    })
    .join("|"),
  "g",
);

export function maskProtectedTerms(text) {
  return text.replace(maskPattern, (match) => tokenByTerm.get(match) ?? match);
}

export function unmaskProtectedTerms(text) {
  let result = text;
  for (const [term, placeholder] of tokenByTerm) {
    // gtx setzt gelegentlich Leerzeichen um den Platzhalter oder ändert die Groß-
    // schreibung ("Zq3qz") — beides tolerieren, damit der Rücktausch nicht scheitert.
    result = result.replace(new RegExp(escapeRegExp(placeholder), "gi"), term);
  }
  return result;
}

export function containsProtectedTerm(text) {
  maskPattern.lastIndex = 0;
  return maskPattern.test(text);
}

// Prüft, ob die Übersetzung alle maskierten Token in derselben Reihenfolge
// zurückgeliefert hat. Fehlt eines, hat gtx den Platzhalter verschluckt. Sind zwei
// vertauscht, kippt die Aussage ("Human Design vs. Gene Keys" wird zu "Gene Keys vs.
// Human Design") — in beiden Fällen ist die Übersetzung unbrauchbar und der Aufrufer
// behält besser den deutschen Quelltext.
export function placeholdersIntact(maskedSource, translated) {
  const expected = maskedSource.match(/ZQ\d+QZ/g) ?? [];
  if (!expected.length) return true;
  const seen = (translated.match(/ZQ\d+QZ/gi) ?? []).map((value) => value.toUpperCase());
  return expected.length === seen.length && expected.every((placeholder, index) => seen[index] === placeholder);
}
