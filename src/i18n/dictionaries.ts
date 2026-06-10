import "server-only";
import type { Locale } from "./config";
import de from "../../messages/de.json";
import en from "../../messages/en.json";

export type Dictionary = typeof de;

// en wird explizit gegen Dictionary typisiert → TypeScript bricht bei Struktur-Drift
// zwischen de.json und en.json (wichtig beim Hinzufügen weiterer Sprachen).
const enTyped: Dictionary = en;

const dictionaries: Record<Locale, Dictionary> = {
  de,
  en: enTyped,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.de;
}
