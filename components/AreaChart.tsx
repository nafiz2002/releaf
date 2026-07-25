/**
 * Hand-rolled area chart. No charting dependency: for a single smoothed series
 * the whole thing is forty lines, and it inherits the theme tokens for free.
 */
export default function AreaChart({
  series,
  labels,
  height = 180,
}: {
  series: number[];
  labels?: string[];
  height?: number;
}) {
  const w = 640;
  const h = height;
  const pad = 8;
  const max = Math.max(...series) * 1.12;

  const pts = series.map((v, i) => [
    (i / (series.length - 1)) * w,
    h - pad - (v / max) * (h - pad * 2),
  ]);

  // Monotone-ish cubic smoothing.
  let d = `M ${pts[0][0]} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx.toFixed(1)} ${y0.toFixed(1)}, ${cx.toFixed(1)} ${y1.toFixed(1)}, ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  }
  const area = `${d} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full" role="img" aria-label="Collection volume over the last twelve weeks">
        <defs>
          <linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--emerald)" stopOpacity="0.24" />
            <stop offset="100%" stopColor="var(--emerald)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[0.25, 0.5, 0.75].map((g) => (
          <line
            key={g}
            x1="0"
            x2={w}
            y1={h * g}
            y2={h * g}
            stroke="var(--hairline)"
            strokeWidth="1"
          />
        ))}

        <path d={area} fill="url(#dashArea)" />
        <path
          d={d}
          fill="none"
          stroke="var(--emerald)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          cx={pts[pts.length - 1][0] - 2}
          cy={pts[pts.length - 1][1]}
          r="4"
          fill="var(--emerald)"
          stroke="var(--surface)"
          strokeWidth="2.5"
        />
      </svg>

      {labels ? (
        <div className="mt-3 flex justify-between font-mono text-[10.5px] text-faint">
          {labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
