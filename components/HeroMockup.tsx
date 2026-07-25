/**
 * Floating product mockup for the hero.
 *
 * Deliberately NOT the real dashboard — it's a compressed, idealised view whose
 * job is to communicate "this is a product" in about a second. Two glass cards
 * hang off the frame corners so it reads as depth rather than a screenshot.
 *
 * Server component. All motion is CSS.
 */
export default function HeroMockup() {
  const series = [22, 34, 28, 45, 40, 58, 52, 70, 64, 82, 76, 96];
  const w = 320;
  const h = 84;
  const max = Math.max(...series);
  const pts = series.map((v, i) => [
    (i / (series.length - 1)) * w,
    h - (v / max) * h,
  ]);
  const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const area = `${line} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className="relative isolate mx-auto w-full max-w-[34rem]">
      {/* Glow behind the frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-8 -z-10 h-72 rounded-[2.5rem] bg-[radial-gradient(closest-side,var(--leaf-soft),transparent)] blur-2xl"
      />

      {/* Main frame */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[var(--shadow-float)]">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-hairline bg-surface-2/60 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <span className="font-mono text-[10.5px] tracking-tight text-faint">
            app.releaf.com.bd
          </span>
          <span className="w-12" />
        </div>

        <div className="p-5 sm:p-6">
          {/* Today's pickup */}
          <div className="flex items-center justify-between rounded-2xl border border-line bg-surface-2 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-leaf-soft text-[15px] leading-none text-leaf">
                ◱
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[13px] font-semibold tracking-[-0.015em] text-ink">
                  Today&rsquo;s pickup
                </span>
                <span className="mt-0.5 font-mono text-[11px] text-faint">
                  09:00 – 11:00
                </span>
              </span>
            </div>
            <span className="rounded-lg bg-leaf-soft px-2.5 py-1 text-[11px] font-medium text-leaf">
              On the way
            </span>
          </div>

          {/* Material cards */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              { label: "Plastic", value: "42.6", unit: "kg", tone: "text-leaf" },
              { label: "Paper", value: "31.2", unit: "kg", tone: "text-leaf" },
              { label: "Points", value: "3,480", unit: "", tone: "text-gold" },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl border border-line bg-surface p-3.5">
                <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">
                  {c.label}
                </p>
                <p className={`mt-2 font-mono text-[17px] font-semibold tracking-[-0.02em] ${c.tone}`}>
                  {c.value}
                  {c.unit ? (
                    <span className="ml-0.5 text-[11px] font-normal text-faint">{c.unit}</span>
                  ) : null}
                </p>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="mt-4 rounded-2xl border border-line bg-surface p-4">
            <div className="flex items-baseline justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-faint">
                Impact · 12 weeks
              </p>
              <p className="font-mono text-[11px] font-medium text-leaf">+38%</p>
            </div>

            <svg
              viewBox={`0 0 ${w} ${h}`}
              className="mt-3 h-auto w-full"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--emerald)" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="var(--emerald)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={area} fill="url(#heroArea)" />
              <path
                d={line}
                fill="none"
                stroke="var(--emerald)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating glass cards */}
      <div className="glass float-slow absolute -left-4 top-40 hidden rounded-2xl px-4 py-3 shadow-[var(--shadow-lift)] sm:-left-8 sm:block">
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">
          CO₂ reduced
        </p>
        <p className="mt-1.5 font-mono text-[16px] font-semibold tracking-[-0.02em] text-ink">
          163.2 <span className="text-[11px] font-normal text-faint">kg</span>
        </p>
      </div>

      <div className="glass float-slower absolute -right-3 bottom-16 hidden rounded-2xl px-4 py-3 shadow-[var(--shadow-lift)] sm:-right-7 sm:block">
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">
          Reward tier
        </p>
        <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[16px] font-semibold tracking-[-0.02em] text-gold">
          Emerald
        </p>
      </div>
    </div>
  );
}
