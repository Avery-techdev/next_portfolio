/**
 * Minimal SVG illustrations for each project card.
 * Colors are taken directly from each project's own design tokens.
 * Backgrounds are omitted — the card gradient acts as the backdrop.
 */

/** Sky·Catcher — mid-game scene: multiple falling objects at different heights */
export function SkyCatcherIllustration() {
  return (
    <svg
      viewBox="0 0 160 110"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      {/* Catch line */}
      <line
        x1="8"
        y1="88"
        x2="152"
        y2="88"
        stroke="#1a0a2e"
        strokeWidth="0.75"
        strokeOpacity="0.3"
      />
      {/* Falling objects — scattered, mid-fall */}
      {/* Far left, high up */}
      <rect
        x="12"
        y="10"
        width="18"
        height="18"
        rx="4"
        fill="#2d1b69"
        opacity="0.6"
      />
      {/* Center-left, mid height */}
      <rect
        x="50"
        y="34"
        width="22"
        height="22"
        rx="5"
        fill="#2d1b69"
        opacity="0.85"
      />
      {/* Far right, high */}
      <rect
        x="136"
        y="16"
        width="16"
        height="16"
        rx="4"
        fill="#2d1b69"
        opacity="0.5"
      />
      {/* Bonus object (star/bright) — center top */}
      <rect
        x="76"
        y="8"
        width="14"
        height="14"
        rx="3"
        fill="#fff9e6"
        opacity="0.9"
      />
      {/* Catcher pill — slightly off-center, chasing the right object */}
      <rect
        x="66"
        y="80"
        width="60"
        height="13"
        rx="6.5"
        fill="#1a0a2e"
      />
    </svg>
  );
}

/** Memo·World — scattered polaroid cards, two matched face-up with landmark line-art */
export function MemoWorldIllustration() {
  return (
    <svg
      viewBox="0 0 130 100"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      {/* Card 1 — face-down, back-left, rotated CCW */}
      <g transform="translate(22,52) rotate(-10)">
        <rect x="-18" y="-24" width="36" height="46" rx="1.5" fill="#e8e8e8" />
        <rect x="-16" y="-22" width="32" height="32" fill="#2b2b2b" />
        {/* Diagonal line pattern (card-back-pattern) */}
        <line x1="-16" y1="-6"  x2="-2" y2="-22" stroke="#6b6b6b" strokeWidth="0.8" />
        <line x1="-16" y1="4"   x2="8"  y2="-22" stroke="#6b6b6b" strokeWidth="0.8" />
        <line x1="-16" y1="10"  x2="16" y2="-18" stroke="#6b6b6b" strokeWidth="0.8" />
        <line x1="-8"  y1="10"  x2="16" y2="-8"  stroke="#6b6b6b" strokeWidth="0.8" />
        <line x1="2"   y1="10"  x2="16" y2="0"   stroke="#6b6b6b" strokeWidth="0.8" />
      </g>

      {/* Card 2 — face-up matched, arch landmark (Arc de Triomphe), slight CW tilt */}
      <g transform="translate(65,46) rotate(4)">
        <rect x="-20" y="-27" width="40" height="52" rx="1.5" fill="#fafafa" />
        <rect x="-18" y="-25" width="36" height="36" fill="#242424" />
        <line x1="-9"  y1="11"  x2="-9" y2="-2"  stroke="#fafafa" strokeWidth="1.2" />
        <path d="M -9 -2 Q 0 -16 9 -2" stroke="#fafafa" strokeWidth="1.2" />
        <line x1="9"   y1="-2"  x2="9"  y2="11"  stroke="#fafafa" strokeWidth="1.2" />
        <line x1="-13" y1="11"  x2="13" y2="11"  stroke="#fafafa" strokeWidth="1.2" />
      </g>

      {/* Card 3 — face-up matched, tower landmark (Eiffel-style), slight CCW tilt */}
      <g transform="translate(108,49) rotate(-6)">
        <rect x="-20" y="-27" width="40" height="52" rx="1.5" fill="#fafafa" />
        <rect x="-18" y="-25" width="36" height="36" fill="#242424" />
        <line x1="0"   y1="-22" x2="-11" y2="11"  stroke="#fafafa" strokeWidth="1.2" />
        <line x1="0"   y1="-22" x2="11"  y2="11"  stroke="#fafafa" strokeWidth="1.2" />
        <line x1="-6"  y1="-6"  x2="6"   y2="-6"  stroke="#fafafa" strokeWidth="1" />
        <line x1="-9"  y1="5"   x2="9"   y2="5"   stroke="#fafafa" strokeWidth="1" />
        <line x1="-1"  y1="-26" x2="1"   y2="-22" stroke="#fafafa" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
export function HiveWordsIllustration() {
  // Flat-top hexagon, circumradius r=17, spaced at r=18
  const hex =
    "17,0 8.5,14.7 -8.5,14.7 -17,0 -8.5,-14.7 8.5,-14.7";

  // Centers computed from axial grid (flat-top, size=18):
  //   x = 27q,  y = 15.6q + 31.2r  (offset to center in 160×122 viewBox)
  const outerCenters: [number, number][] = [
    [107, 75.6], // SE
    [107, 44.4], // NE
    [80, 28.8], // N
    [53, 44.4], // NW
    [53, 75.6], // SW
    [80, 91.2], // S
  ];

  return (
    <svg
      viewBox="0 0 160 122"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
    >
      {/* Outer tiles (--color-hex-fill + --color-hex-border) */}
      {outerCenters.map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y})`}>
          <polygon
            points={hex}
            fill="#4d2e00"
            stroke="#c17f24"
            strokeWidth="1.5"
          />
        </g>
      ))}
      {/* Center tile — golden, the required letter (--color-hex-center-start) */}
      <g transform="translate(80,60)">
        <polygon points={hex} fill="#e8a020" />
      </g>
    </svg>
  );
}
