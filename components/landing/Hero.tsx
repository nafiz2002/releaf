import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import DemoBadge from "@/components/ui/DemoBadge";
import DashboardScreenshot from "./DashboardScreenshot";
import { impact } from "@/lib/data";

export default function Hero() {
  const strip = impact.slice(0, 4);
  return (
    <section id="home" className="relative overflow-hidden bg-bg pt-16">
      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-[12.5px] font-medium text-muted shadow-[var(--shadow-sm)]">
            <span aria-hidden>🇧🇩</span> The operating system for Bangladesh&rsquo;s recycling economy
          </span>

          <h1 className="mt-7 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-[3.5rem] lg:text-[4rem]">
            The value was always there.
            <br />
            <span className="text-forest">We built the way to pay for it.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[16.5px] leading-[1.6] tracking-[-0.008em] text-muted sm:text-[18px]">
            ReLeaf connects households, businesses, schools and collectors to recycling
            factories — weighed, tracked, and paid the moment your waste is collected.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="https://webreleaf.vercel.app/login" size="lg" className="w-full sm:w-auto">Schedule a pickup</ButtonLink>
            <ButtonLink href="#how" variant="secondary" size="lg" className="w-full sm:w-auto">See how it works</ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="mt-16">
          <DashboardScreenshot />
        </Reveal>

        <Reveal delay={0.05} className="mt-16">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {strip.map((s) => (
              <div key={s.id} className="text-center">
                <p className={`font-mono text-[1.375rem] font-semibold tracking-[-0.03em] ${s.tone === "gold" ? "text-[#8a6d12]" : "text-ink"}`}>
                  <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[12.5px] text-muted">{s.label}</p>
              </div>
            ))}
            <DemoBadge />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
