import { pricing } from "@/content/pricing";

export function PricingComparison() {
  return (
    <section className="mt-12 rounded-card border border-sand bg-white p-5 shadow-soft">
      <span className="kicker">Tarifvergleich</span>
      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-[14.5px]">
          <caption className="sr-only">Vergleich der Astrakey Tarife</caption>
          <thead>
            <tr className="bg-creme-tief text-aubergine">
              <th className="p-3">Funktion</th>
              {pricing.tiers.map((tier) => <th key={tier.key} className="p-3">{tier.name}<br /><span className="font-normal text-pflaume/80">{tier.price} {tier.cadence}</span></th>)}
            </tr>
          </thead>
          <tbody>
            {pricing.features.map((row) => (
              <tr key={row[0]} className="border-t border-sand">
                {row.map((cell, index) => <td key={index} className={index === 0 ? "p-3 font-semibold text-aubergine" : "p-3 text-pflaume/90"}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-4">
        {pricing.tiers.map((tier) => (
          <div key={tier.key} className="rounded-[8px] border border-sand bg-creme/60 p-4">
            <h3 className="text-[18px]">{tier.name}</h3>
            <p className="mt-1 font-serif text-[28px] text-aubergine">{tier.price}<span className="font-sans text-[14px] text-pflaume/75"> {tier.cadence}</span></p>
            <p className="muted mt-2 text-[14px] leading-relaxed">{tier.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
