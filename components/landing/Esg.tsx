import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { esg } from "@/lib/data";

export default function Esg() {
  return (
    <section id="esg" className="w-full border-t border-hairline bg-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <Reveal>
            <Eyebrow>ESG &amp; carbon</Eyebrow>
            <h2 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
              Why businesses pay for the demand side.
            </h2>
            <p className="mt-5 text-[16.5px] leading-[1.65] text-muted">
              A household recycles to earn. A company recycles to report. ReLeaf turns
              every weighed collection into a verified diversion and carbon figure — the
              evidence a sustainability team can put in front of an auditor.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {esg.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08} className="bg-surface">
                <div className="flex items-start gap-4 p-7">
                  <span className="mt-0.5 font-mono text-[12px] font-semibold text-forest">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-ink">{e.title}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-[1.65] text-muted">{e.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
