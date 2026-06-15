import "server-only";
import type { Locale } from "./config";
import de from "../../messages/de.json";
import en from "../../messages/en.json";
import fr from "../../messages/fr.json";
import es from "../../messages/es.json";
import it from "../../messages/it.json";
import nl from "../../messages/nl.json";
import pl from "../../messages/pl.json";
import pt from "../../messages/pt.json";
import bg from "../../messages/bg.json";
import hr from "../../messages/hr.json";
import cs from "../../messages/cs.json";
import da from "../../messages/da.json";
import et from "../../messages/et.json";
import fi from "../../messages/fi.json";
import el from "../../messages/el.json";
import hu from "../../messages/hu.json";
import ga from "../../messages/ga.json";
import lv from "../../messages/lv.json";
import lt from "../../messages/lt.json";
import mt from "../../messages/mt.json";
import ro from "../../messages/ro.json";
import sk from "../../messages/sk.json";
import sl from "../../messages/sl.json";
import sv from "../../messages/sv.json";

export type Dictionary = typeof de;
type PartialDictionary = {
  [K in keyof Dictionary]?: DeepPartial<Dictionary[K]>;
};
type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends Record<string, unknown>
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : T;

// en wird explizit gegen Dictionary typisiert → TypeScript bricht bei Struktur-Drift
// zwischen de.json und en.json (wichtig beim Hinzufügen weiterer Sprachen).
const enTyped: Dictionary = en;

const partialDictionaries: Partial<Record<Locale, PartialDictionary>> = {
  de,
  en: enTyped,
  fr,
  es,
  it,
  nl,
  pl,
  pt,
  bg,
  hr,
  cs,
  da,
  et,
  fi,
  el,
  hu,
  ga,
  lv,
  lt,
  mt,
  ro,
  sk,
  sl,
  sv,
};

export function getDictionary(locale: Locale): Dictionary {
  const dictionary = partialDictionaries[locale];
  if (!dictionary) return de;
  return deepMerge(de, dictionary);
}

function deepMerge<T extends Record<string, unknown>>(base: T, override: DeepPartial<T>): T {
  const result: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      base[key] &&
      typeof base[key] === "object" &&
      !Array.isArray(base[key])
    ) {
      result[key] = deepMerge(base[key] as Record<string, unknown>, value as Record<string, unknown>);
    } else if (value !== undefined) {
      result[key] = value;
    }
  }
  return result as T;
}
