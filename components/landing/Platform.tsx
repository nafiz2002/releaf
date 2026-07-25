import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { capabilities, type Capability } from "@/lib/data";

/**
 * "More than recycling." — ten capability cards on the hairline grid. The
 * status pill (Live / Rolling out / On the roadmap) is the honest, load-bearing
 * detail: it lets the page show ambition without claiming everything ships
 * today. Hover lift is CSS; the section stays a server component.
 */

const statusMeta: Record<Capability["status"], { label: string; className: string }> = {
  live: { label: "Live", className: "bg-forest-soft text-forest" },
  rolling: { label: "Rolling out", className: "bg-surface-2 text-muted" },
  soon: { label: "On the roadmap", className: "bg-surface-2 text-faint" },
};

export default function Platform() {
  return (
    <section id="platform" className="w-full border-t border-hairline bg-surface-2">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-20">
        <Reveal className="max-w-2xl">
          <Eyebrow>The platform</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
            More than recycling.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.65] text-muted">
            Collection is the first primitive. On top of it sits the software that prices,
            tracks, pays, reports, and — before long — recognises and trades material.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {capabilities.map((c, i) => {
            const meta = statusMeta[c.status];
            return (
              <Reveal key={c.id} delay={(i % 5) * 0.05} className="bg-surface">
                <div className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-forest-soft/40">
                  <div className="flex items-center justify-between">
                    <span aria-hidden className="h-1 w-6 rounded-full bg-forest/60 transition-[width] duration-300 group-hover:w-9" />
                    <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium tracking-[-0.005em] ${meta.className}`}>
                      {meta.label}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[14.5px] font-semibold tracking-[-0.02em] text-ink">{c.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-[1.6] text-muted">{c.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[12px] text-faint">
            &ldquo;Rolling out&rdquo; and &ldquo;On the roadmap&rdquo; mark capabilities not yet live for every user.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
