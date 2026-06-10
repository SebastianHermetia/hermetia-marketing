// Native <details> – kein JS nötig, voll statisch, AEO-freundlich.
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto max-w-[760px]">
      {items.map((it, i) => (
        <details key={i} open={i === 0} className="border-b border-sand py-[18px]">
          <summary className="cursor-pointer font-serif text-[19px] text-aubergine marker:text-gold">
            {it.q}
          </summary>
          <p className="muted mt-2.5">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
