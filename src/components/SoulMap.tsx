// Signature-Visual: Chart-Wheel + abstrahierter Energiekörper + Mond im Zentrum.
export function SoulMap({ size = 260 }: { size?: number }) {
  return (
    <svg viewBox="0 0 320 320" width={size} height={size} role="img" aria-label="Seelenkarte" className="mx-auto block">
      <circle cx="160" cy="160" r="150" fill="none" stroke="#E3D6C2" strokeWidth="1" />
      <circle cx="160" cy="160" r="118" fill="none" stroke="#BE9A53" strokeWidth="1" opacity="0.8" />
      <g stroke="#BE9A53" strokeWidth="1" opacity="0.55">
        <line x1="160" y1="42" x2="160" y2="278" />
        <line x1="42" y1="160" x2="278" y2="160" />
        <line x1="76" y1="76" x2="244" y2="244" />
        <line x1="244" y1="76" x2="76" y2="244" />
      </g>
      <g fill="#BE9A53">
        <circle cx="160" cy="42" r="2.5" /><circle cx="278" cy="160" r="2.5" />
        <circle cx="160" cy="278" r="2.5" /><circle cx="42" cy="160" r="2.5" />
        <circle cx="244" cy="76" r="2.5" /><circle cx="244" cy="244" r="2.5" />
        <circle cx="76" cy="244" r="2.5" /><circle cx="76" cy="76" r="2.5" />
      </g>
      <polygon points="160,95 205,150 185,215 135,215 115,150" fill="none" stroke="#C98B9B" strokeWidth="1.4" />
      <g fill="#9CAE8B">
        <circle cx="160" cy="95" r="4" /><circle cx="205" cy="150" r="4" />
        <circle cx="185" cy="215" r="4" /><circle cx="135" cy="215" r="4" /><circle cx="115" cy="150" r="4" />
      </g>
      <circle cx="160" cy="160" r="13" fill="#3A2E4D" />
      <path d="M160 150 a10 10 0 1 0 6 18 a8 8 0 1 1 -6 -18" fill="#E7D6AE" />
    </svg>
  );
}
