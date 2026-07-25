import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

type Stage = {
  step: string;
  title: string;
  body: string;
  glyph: string;
};

const stages: Stage[] = [
  { step: "01", glyph: "◱", title: "Household", body: "You fill a ReLeaf bag. About a fortnight for a family of four." },
  { step: "02", glyph: "◧", title: "Collection", body: "A rider weighs it at your door and settles payment before leaving." },
  { step: "03", glyph: "▤", title: "Warehouse", body: "Consolidated at the neighbourhood hub and logged against your account." },
  { step: "04", glyph: "▦", title: "Sorting", body: "Separated by polymer and grade. Contamination is priced out here, not later." },
  { step: "05", glyph: "▩", title: "Recycling factory", body: "Washed, shredded and pelletised by a licensed processor." },
  { step: "06", glyph: "◨", title: "New product", body: "Back on a shelf as fibre, crates, moulded furniture or packaging." },
  { step: "07", glyph: "◉", title: "Circular economy", body: "Material re-enters supply without another barrel of oil being opened." },
];

export default function Timeline() {
  return (
    <Section id="how" tone="bg">
      <SectionHeading
        label="How it works"
        title="From your bin to the next product."
        subtitle="Seven steps. Most people never see past the first one."
      />

      <div className="relative mx-auto mt-16 max-w-3xl lg:mt-20">
        {/* Rail. Fades at the tail because the loop does not terminate. */}
        <span
          aria-hidden="true"
          className="absolute left-[31px] top-10 h-[calc(100%-5rem)] w-px bg-gradient-to-b from-leaf via-leaf/40 to-transparent"
        />

        <ol className="relative flex flex-col gap-8">
          {stages.map((stage, index) => (
            <Reveal key={stage.step} delay={index * 0.06}>
              <li className="flex items-start gap-5 sm:gap-7">
                <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface text-[24px] text-leaf shadow-[var(--shadow-card)]">
                  <span aria-hidden="true">{stage.glyph}</span>
                </span>

                <div className="min-w-0 pt-2.5">
                  <p className="text-[11px] font-medium tracking-[0.1em] text-faint tabular-nums">
                    {stage.step}
                  </p>
                  <h3 className="mt-1.5 text-[1.1875rem] font-semibold tracking-[-0.028em] text-ink">
                    {stage.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-[14px] leading-[1.65] text-muted">
                    {stage.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
