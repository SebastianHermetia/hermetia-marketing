import { comparisons } from "@/content/marketing";
import { systemSlugs } from "@/content/systems";

/**
 * Querverbindungen zwischen Systemseiten und Vergleichsseiten.
 *
 * Vergleichs-Slugs folgen dem Muster "<a>-vs-<b>". Wo eine Haelfte exakt einem
 * System-Slug entspricht, ist die Zuordnung eindeutig — daraus laesst sich die
 * Verlinkung ableiten, ohne eine zweite Liste zu pflegen, die auseinanderlaeuft.
 * Vergleiche gegen Nicht-Systeme ("kostenloses-horoskop-vs-astrakey") liefern
 * entsprechend weniger oder keine Treffer, das ist gewollt.
 */
const SLUG_ALIASES: Record<string, string> = {
  // Kurzform im Vergleichs-Slug, Langform beim System.
  bazi: "bazi-vier-saeulen",
};

export function systemsInComparison(comparisonSlug: string): string[] {
  return comparisonSlug
    .split("-vs-")
    .map((part) => SLUG_ALIASES[part] ?? part)
    .filter((slug) => systemSlugs.includes(slug));
}

export function comparisonsForSystem(systemSlug: string) {
  return comparisons.filter((comparison) => systemsInComparison(comparison.slug).includes(systemSlug));
}
