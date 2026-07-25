"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { ecosystems } from "@/lib/data";

/**
 * "One network. Three sides." — interactive: a segmented selector swaps the
 * detail panel. Keeps the page's language (hairline grid, mono figures, gold
 * only on the business/value side).
 */
export default function Ecosystems() {
  const [active, setActive] = useState(ecosystems[0].id);
  const eco = ecosystems.find((e) => e.id === active) ?? ecosystems[0];
  const reduce = useReducedMotion();
  const isGold = eco.tone === "gold";

  return (
    <section id="network" className="w-full border-t border-hairline bg-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10 lg:py-20">
        <Reveal className="max-w-2xl">
          <Eyebrow>The network</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
            One network. Three sides. Infinite impact.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.65] text-muted">
            The same collection rails serve whoever is standing over the bin — a family,
            a restaurant, a school. Pick a side to see how it works for them.
          </p>
        </Reveal>

        {/* Selector */}
        <Reveal delay={0.05} className="mt-10">
          <div role="tablist" aria-label="Ecosystems" className="inline-flex flex-wrap gap-1.5 rounded-xl border border-line bg-surface-2 p-1.5">
            {ecosystems.map((e) => {
              const selected = e.id === active;
              return (
                <button
                  key={e.id}
                  role="tab"
                  aria-selected={selected}
                  type="button"
                  onClick={() => setActive(e.id)}
                  className={`rounded-lg px-4 py-2 text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest ${
                    selected ? "bg-surface text-ink shadow-[var(--shadow-sm)]" : "text-muted hover:text-ink"
                  }`}
                >
                  {e.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Detail panel */}
        <Reveal delay={0.08} className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow-card)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={eco.id}
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="grid gap-px bg-line lg:grid-cols-[1.1fr_0.9fr]"
              >
                {/* Left: pitch + features */}
                <div className="bg-surface p-7 sm:p-9">
                  <span className={`inline-flex w-fit items-center rounded-lg px-2.5 py-1 text-[11px] font-medium ${isGold ? "bg-[#f7f0dc] text-[#7a5f10] dark:bg-[#2a220c] dark:text-[#e6b52a]" : "bg-forest-soft text-forest"}`}>
                    {eco.title}
                  </span>
                  <h3 className="mt-5 text-[1.5rem] font-semibold leading-[1.18] tracking-[-0.03em] text-ink sm:text-[1.75rem]">
                    {eco.line}
                  </h3>
                  <p className="mt-3 max-w-md text-[14.5px] leading-[1.65] text-muted">{eco.body}</p>

                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {eco.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-muted">
                        <span aria-hidden className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${isGold ? "bg-[#c99a1e]" : "bg-forest"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ButtonLink href="#cta" variant={isGold ? "secondary" : "primary"}>
                      {eco.cta}
                    </ButtonLink>
                  </div>
                </div>

                {/* Right: stat plate */}
                <div className="flex flex-col justify-center gap-px bg-line">
                  {eco.stats.map((st) => (
                    <div key={st.k} className="flex items-center justify-between bg-surface-2 px-7 py-6 sm:px-9">
                      <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-faint">{st.k}</span>
                      <span className={`font-mono text-[1.125rem] font-semibold tracking-[-0.02em] ${isGold ? "text-[#8a6d12] dark:text-[#e6b52a]" : "text-ink"}`}>
                        {st.v}
                      </span>
                    </div>
                  ))}
                  <div className="flex flex-1 items-end bg-surface-2 px-7 py-6 sm:px-9">
                    <p className="text-[12.5px] leading-snug text-faint">
                      Same rails, same records — priced for the {eco.title.toLowerCase()} side.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
