import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import DemoBadge from "@/components/ui/DemoBadge";
import { testimonials, partners } from "@/lib/data";

export default function Voices() {
  return (
    <section id="voices" className="w-full border-t border-hairline bg-surface-2">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>From the network</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
            A student, a building, a collector.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-[var(--shadow-card)] sm:p-8">
                <blockquote className="flex-1 text-[14.5px] leading-[1.7] tracking-[-0.005em] text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-hairline pt-5">
                  <p className="text-[13.5px] font-medium text-ink">{t.role}</p>
                  <p className="mt-0.5 text-[12.5px] text-faint">{t.place}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
            Collecting for restaurants, schools, offices and buildings
          </p>
          <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4 lg:grid-cols-6">
            {partners.map((mark) => (
              <div key={mark} className="flex items-center justify-center bg-surface px-4 py-7">
                <span aria-hidden className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-2 font-mono text-[12px] font-semibold text-faint">{mark}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <p className="text-center text-[11.5px] text-faint">Quotes and partner marks illustrative — published only with consent.</p>
            <DemoBadge />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
