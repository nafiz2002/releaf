import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { problem } from "@/lib/data";

export default function Problem() {
  return (
    <section id="problem" className="w-full border-t border-hairline bg-surface-2">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>The problem</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
            It was never a waste problem. It was a pricing problem.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.65] text-muted">
            Recyclable material leaves Bangladeshi homes every day with real value — and no
            system to weigh it, price it, or pay for it. So it burns, buries, or clogs a
            drain. The material was never worthless. It was just illegible.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {problem.map((p, i) => (
            <Reveal key={p.stat} delay={i * 0.08} className="bg-surface">
              <div className="flex h-full flex-col p-7 sm:p-8">
                <p className="font-mono text-[2.25rem] font-semibold leading-none tracking-[-0.04em] text-ink">{p.stat}</p>
                <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.1em] text-forest">{p.unit}</p>
                <p className="mt-4 text-[14px] leading-[1.65] text-muted">{p.line}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[12px] text-faint">
            Figures reflect widely reported ranges for Dhaka municipal waste; cite your own
            sources before publishing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
