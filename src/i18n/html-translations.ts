import type { Locale } from "@/i18n/config";
import translations from "../../content/i18n-html-translations.json";

type TranslationCache = Record<string, Record<string, string>>;

const cache = translations as TranslationCache;

export function tr(locale: Locale, value: string): string {
  if (locale === "de") return value;
  return cache[locale]?.[normalize(value)] ?? value;
}

export function trItems<T extends Record<string, unknown>>(locale: Locale, items: T[]): T[] {
  return items.map((item) => trObject(locale, item));
}

export function trObject<T extends Record<string, unknown>>(locale: Locale, item: T): T {
  return Object.fromEntries(
    Object.entries(item).map(([key, value]) => [key, trValue(locale, value)]),
  ) as T;
}

function trValue(locale: Locale, value: unknown): unknown {
  if (typeof value === "string") return tr(locale, value);
  if (Array.isArray(value)) return value.map((entry) => trValue(locale, entry));
  if (value && typeof value === "object") return trObject(locale, value as Record<string, unknown>);
  return value;
}

function normalize(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}
