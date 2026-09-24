/**
 * Inline SVG art set (no photos, no external assets):
 * - ChartLineArt: layered market-chart silhouettes (filled under the
 *   curve), used at the dark band edges and the footer top.
 */

export function ChartLineArt({ className }) {
  return (
    <svg className={className} viewBox="0 0 1440 150" preserveAspectRatio="none" role="img" aria-hidden="true">
      {/* back line */}
      <path
        d="M0 118 C 90 108, 150 128, 240 96 S 420 62, 510 78 S 700 112, 790 56 S 950 26, 1050 46 S 1240 92, 1330 42 S 1420 22, 1440 30 L1440 150 L0 150 Z"
        fill="currentColor"
        opacity="0.3"
      />
      {/* mid line */}
      <path
        d="M0 132 C 110 124, 190 140, 280 112 S 450 84, 550 98 S 730 130, 820 84 S 980 50, 1090 66 S 1270 110, 1360 64 S 1430 46, 1440 54 L1440 150 L0 150 Z"
        fill="currentColor"
        opacity="0.55"
      />
      {/* front line */}
      <path
        d="M0 142 C 100 138, 180 148, 270 126 S 440 104, 540 114 S 720 144, 810 106 S 970 76, 1080 88 S 1260 126, 1350 86 S 1420 68, 1440 74 L1440 150 L0 150 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MiniMarketArt({ className }) {
  const candles = [
    { x: 30, o: 86, c: 66, hi: 58, lo: 92, up: true },
    { x: 75, o: 68, c: 88, hi: 60, lo: 96, up: false },
    { x: 120, o: 86, c: 58, hi: 50, lo: 92, up: true },
    { x: 165, o: 60, c: 74, hi: 52, lo: 82, up: false },
    { x: 210, o: 72, c: 46, hi: 40, lo: 78, up: true },
    { x: 255, o: 48, c: 62, hi: 42, lo: 70, up: false },
    { x: 300, o: 60, c: 36, hi: 30, lo: 66, up: true },
    { x: 345, o: 38, c: 50, hi: 32, lo: 58, up: false },
    { x: 390, o: 48, c: 24, hi: 18, lo: 54, up: true },
    { x: 435, o: 26, c: 14, hi: 10, lo: 32, up: true },
  ]
  return (
    <svg className={className} viewBox="0 0 520 120" role="img" aria-hidden="true">
      <line x1="0" y1="104" x2="520" y2="104" stroke="#e3e9e1" strokeWidth="1.5" />
      {candles.map((c) => {
        const bodyTop = Math.min(c.o, c.c)
        const bodyHeight = Math.max(6, Math.abs(c.o - c.c))
        const color = c.up ? '#156344' : '#b5472f'
        return (
          <g key={c.x}>
            <line x1={c.x} y1={c.hi} x2={c.x} y2={c.lo} stroke={color} strokeWidth="2" />
            <rect
              x={c.x - 8}
              y={bodyTop}
              width="16"
              height={bodyHeight}
              rx="2.5"
              fill={color}
              opacity={c.up ? 0.95 : 0.8}
            />
          </g>
        )
      })}
      {/* trend line */}
      <path
        d="M30 66 C 120 60, 160 52, 255 62 S 400 20, 435 14"
        fill="none"
        stroke="#c9a24a"
        strokeWidth="2.5"
        strokeDasharray="6 4"
        strokeLinecap="round"
      />
    </svg>
  )
}
