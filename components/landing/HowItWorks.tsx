import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { steps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section id="how" className="w-full border-t border-hairline bg-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
            The rails, end to end.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.65] text-muted">
            Six steps turn a full bin into verified feedstock and a paid account. The
            numbering is real — each step depends on the one before it.
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.k} delay={(i % 3) * 0.06} className="bg-surface">
              <li className="flex h-full flex-col p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[13px] font-semibold text-forest">{s.k}</span>
                  <span aria-hidden className="h-px flex-1 bg-hairline" />
                </div>
                <h3 className="mt-5 text-[1.0625rem] font-semibold tracking-[-0.025em] text-ink">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-[1.65] text-muted">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
