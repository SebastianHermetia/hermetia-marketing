import { tr } from "@/i18n/html-translations";
import type { Locale } from "@/i18n/config";
import type { ComparisonRow } from "@/content/comparisons";

// Strukturierter Systemvergleich.
//
// Zwei Gründe für eine echte <table> statt gestapelter Karten: Google zieht
// Tabellen in Snippets, und Antwortmaschinen lesen Zeile-Spalte-Beziehungen
// zuverlässiger als visuell gruppierte Divs.
//
// Auf schmalen Viewports wird die Tabelle nicht gequetscht, sondern zu Blöcken
// umgebrochen — jede Zeile wird zu einer kleinen Karte mit beiden Werten
// untereinander. Deshalb steht der Spaltenname auch in jedem Wertfeld als
// data-label, sonst verliert die mobile Ansicht die Zuordnung.
export function ComparisonTable({
  locale,
  columns,
  rows,
  caption,
}: {
  locale: Locale;
  columns: [string, string];
  rows: ComparisonRow[];
  caption: string;
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-card border border-sand bg-white shadow-soft">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="hidden md:table-header-group">
          <tr className="bg-creme-tief">
            <th scope="col" className="w-[22%] px-5 py-4 text-[14px] font-semibold uppercase tracking-wide text-aubergine/70">
              {tr(locale, "Aspekt")}
            </th>
            <th scope="col" className="w-[39%] px-5 py-4 text-[16px] font-semibold text-aubergine">
              {tr(locale, columns[0])}
            </th>
            <th scope="col" className="w-[39%] px-5 py-4 text-[16px] font-semibold text-aubergine">
              {tr(locale, columns[1])}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.aspect} className="block border-t border-sand first:border-t-0 md:table-row md:border-t">
              <th
                scope="row"
                className="block px-5 pt-4 text-left text-[14px] font-semibold uppercase tracking-wide text-aubergine/70 md:table-cell md:py-4 md:align-top"
              >
                {row.aspect}
              </th>
              <td className="block px-5 pt-3 text-[15.5px] leading-relaxed text-tinte md:table-cell md:py-4 md:align-top">
                <span className="mb-1 block text-[13px] font-semibold text-gold md:hidden">{tr(locale, columns[0])}</span>
                {row.a}
              </td>
              <td className="block px-5 pb-4 pt-3 text-[15.5px] leading-relaxed text-tinte md:table-cell md:py-4 md:align-top">
                <span className="mb-1 block text-[13px] font-semibold text-gold md:hidden">{tr(locale, columns[1])}</span>
                {row.b}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
