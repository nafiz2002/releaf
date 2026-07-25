import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Counter from "@/components/ui/Counter";
import DemoBadge from "@/components/ui/DemoBadge";
import { impact } from "@/lib/data";

export default function LiveImpact() {
  return (
    <section id="impact" className="w-full border-t border-hairline bg-surface-2">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <Eyebrow>Live impact</Eyebrow>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
              Three months, measured.
            </h2>
          </div>
          <DemoBadge />
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.06} className="bg-surface">
              <div className="flex h-full flex-col p-7 sm:p-8">
                <span aria-hidden className={`h-1 w-6 rounded-full ${s.tone === "gold" ? "bg-[#c99a1e]" : "bg-forest/60"}`} />
                <p className={`mt-5 font-mono text-[2rem] font-semibold leading-none tracking-[-0.04em] ${s.tone === "gold" ? "text-[#8a6d12]" : "text-ink"}`}>
                  <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-3.5 text-[13.5px] font-medium tracking-[-0.015em] text-ink">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
