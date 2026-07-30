import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { audiences } from "@/lib/data";

export default function Audiences() {
  return (
    <section id="who" className="w-full border-t border-hairline bg-surface-2">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>Who uses ReLeaf</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
            One network, priced for each side.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {audiences.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-7 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:shadow-[var(--shadow-lift)] motion-safe:hover:-translate-y-1.5 sm:p-8">
                <span className={`inline-flex w-fit items-center rounded-lg px-2.5 py-1 text-[11px] font-medium ${a.tone === "gold" ? "bg-[#f7f0dc] text-[#7a5f10]" : "bg-forest-soft text-forest"}`}>
                  {a.title}
                </span>
                <h3 className="mt-5 text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.03em] text-ink">{a.line}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-muted">{a.body}</p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-hairline pt-6">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-muted">
                      <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-forest" />{p}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex-1" />
                <ButtonLink href="https://webreleaf.vercel.app/login" variant={i === 0 ? "primary" : "secondary"} className="w-full">
                  {a.id === "households" ? "Schedule a pickup" : a.id === "businesses" ? "Book a demo" : "Enrol a school"}
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
