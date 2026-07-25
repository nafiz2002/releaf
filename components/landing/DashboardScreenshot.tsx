import Counter from "@/components/ui/Counter";

/**
 * The hero artifact: a large, believable product screenshot rendered in the DOM
 * (not an image) so it's crisp at any size and themes with the page. Gold is
 * used ONLY on the money row — value moving is the page's thesis.
 *
 * Server component. Floating cards animate via CSS.
 */
export default function DashboardScreenshot() {
  const series = [30, 42, 36, 55, 50, 68, 62, 80, 74, 92, 86, 100];
  const w = 560, h = 150, max = Math.max(...series);
  const pts = series.map((v, i) => [(i / (series.length - 1)) * w, h - (v / max) * (h - 12) - 6]);
  let path = `M ${pts[0][0]} ${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i], [x1, y1] = pts[i + 1], cx = (x0 + x1) / 2;
    path += ` C ${cx.toFixed(1)} ${y0.toFixed(1)}, ${cx.toFixed(1)} ${y1.toFixed(1)}, ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  }
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className="relative isolate mx-auto w-full max-w-[40rem]">
      <div aria-hidden className="pointer-events-none absolute inset-x-8 top-10 -z-10 h-72 rounded-[3rem] bg-forest-soft blur-2xl" />

      <div className="overflow-hidden rounded-[1.5rem] border border-line bg-surface shadow-[var(--shadow-float)]">
        {/* window bar */}
        <div className="flex items-center justify-between border-b border-hairline bg-surface-2/60 px-5 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <span className="font-mono text-[10.5px] text-faint">app.releaf.com.bd</span>
          <span className="w-12" />
        </div>

        <div className="grid grid-cols-[1fr] gap-0 sm:grid-cols-[168px_1fr]">
          {/* mini sidebar */}
          <div className="hidden flex-col gap-0.5 border-r border-hairline bg-surface-2/40 p-3 sm:flex">
            {["Dashboard", "Schedule", "Rewards", "Impact", "Reports"].map((s, i) => (
              <span key={s} className={`rounded-md px-2.5 py-1.5 text-[12px] font-medium ${i === 0 ? "bg-surface text-ink shadow-[var(--shadow-sm)]" : "text-muted"}`}>{s}</span>
            ))}
          </div>

          <div className="p-5">
            {/* money row — the only gold on the page */}
            <div className="flex items-center justify-between rounded-xl border border-[color:var(--leaf)]/25 bg-[#fbf7ea] px-4 py-3">
              <div>
                <p className="text-[10.5px] font-medium uppercase tracking-[0.1em] text-[#8a6d12]">Paid this month</p>
                <p className="mt-1 font-mono text-[19px] font-semibold tracking-[-0.02em] text-[#7a5f10]">৳3,480</p>
              </div>
              <span className="rounded-lg bg-[#f2e6c2] px-2.5 py-1 text-[11px] font-medium text-[#7a5f10]">Instant</span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[["Plastic", "42.6", "kg"], ["Paper", "31.2", "kg"], ["CO₂", "163", "kg"]].map(([l, v, u]) => (
                <div key={l} className="rounded-xl border border-line bg-surface p-3">
                  <p className="text-[9.5px] font-medium uppercase tracking-[0.1em] text-faint">{l}</p>
                  <p className="mt-1.5 font-mono text-[15px] font-semibold tracking-[-0.02em] text-ink">{v}<span className="ml-0.5 text-[10px] font-normal text-faint">{u}</span></p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-line bg-surface p-4">
              <div className="flex items-baseline justify-between">
                <p className="text-[10.5px] font-medium uppercase tracking-[0.1em] text-faint">Volume · 12 weeks</p>
                <p className="font-mono text-[11px] font-medium text-forest">+38%</p>
              </div>
              <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 h-auto w-full" preserveAspectRatio="none" aria-hidden>
                <defs><linearGradient id="ha" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--forest)" stopOpacity="0.18" /><stop offset="100%" stopColor="var(--forest)" stopOpacity="0" /></linearGradient></defs>
                <path d={area} fill="url(#ha)" />
                <path d={path} fill="none" stroke="var(--forest)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* floating proof cards */}
      <div className="float-slow absolute -left-4 top-32 hidden rounded-xl border border-line bg-surface px-4 py-3 shadow-[var(--shadow-lift)] sm:-left-8 sm:block">
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">Pickup</p>
        <p className="mt-1 flex items-center gap-1.5 font-mono text-[13.5px] font-semibold text-ink"><span className="h-1.5 w-1.5 rounded-full bg-leaf" />On the way</p>
      </div>
      <div className="float-slower absolute -right-3 bottom-24 hidden rounded-xl border border-line bg-surface px-4 py-3 shadow-[var(--shadow-lift)] sm:-right-7 sm:block">
        <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-faint">Verified</p>
        <p className="mt-1 font-mono text-[13.5px] font-semibold text-ink">
          <Counter value={11} suffix=" kg" /> logged
        </p>
      </div>
    </div>
  );
}
