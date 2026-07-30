import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

type Accent = "green" | "blue" | "gold";

type Ecosystem = {
  id: string;
  anchor?: string;
  glyph: string;
  title: string;
  tagline: string;
  body: string;
  points: string[];
  cta: string;
  accent: Accent;
};

const ecosystems: Ecosystem[] = [
  {
    id: "households",
    glyph: "◱",
    title: "Households",
    tagline: "Get paid for what you already discard",
    body: "Book a pickup or drop at a Point. Weighed in front of you, settled to bKash or cash on the spot.",
    points: ["No minimum on drop-off", "Same-day slots before 2pm", "Rates published daily"],
    cta: "Schedule pickup",
    accent: "green",
  },
  {
    id: "businesses",
    glyph: "▤",
    title: "Businesses",
    tagline: "Turn a disposal cost into a line item",
    body: "Scheduled back-of-house collection for restaurants, offices and retail, with monthly reconciliation and a diversion certificate.",
    points: ["Daily or weekly routes", "Monthly statement and invoice", "Audit-ready diversion reporting"],
    cta: "Talk to sales",
    accent: "blue",
  },
  {
    id: "schools",
    anchor: "schools",
    glyph: "◈",
    title: "Schools",
    tagline: "A programme, not a poster campaign",
    body: "Monthly drives with our scale and crates, a national ranking, and six lesson plans mapped to the syllabus.",
    points: ["School keeps 100% of earnings", "Monthly national ranking", "Curriculum pack included"],
    cta: "Enrol a school",
    accent: "gold",
  },
];

const tile: Record<Accent, string> = {
  green: "bg-leaf-soft text-leaf",
  blue: "bg-[#2563EB]/10 text-[#2563EB]",
  gold: "bg-gold/10 text-gold",
};

const dot: Record<Accent, string> = {
  green: "bg-leaf",
  blue: "bg-[#2563EB]",
  gold: "bg-gold",
};

const tag: Record<Accent, string> = {
  green: "text-leaf",
  blue: "text-[#2563EB]",
  gold: "text-gold",
};

export default function Ecosystems() {
  return (
    <Section id="businesses" tone="bg">
      <SectionHeading
        label="Ecosystems"
        title="One platform, three sides."
        subtitle="The same collection network, priced and packaged for whoever is standing over the bin."
      />

      <div className="mt-10 grid gap-6 lg:mt-16 lg:grid-cols-3">
        {ecosystems.map((eco, index) => (
          <Reveal key={eco.id} delay={index * 0.08}>
            <article
              id={eco.anchor}
              className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-[var(--shadow-card)] transition-[transform,box-shadow] duration-300 hover:shadow-[var(--shadow-lift)] motion-safe:hover:-translate-y-1.5 sm:p-8"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[22px] leading-none ${tile[eco.accent]}`}
              >
                <span aria-hidden="true">{eco.glyph}</span>
              </span>

              <h3 className="mt-6 text-[1.375rem] font-semibold tracking-[-0.03em] text-ink">
                {eco.title}
              </h3>
              <p className={`mt-1.5 text-[13px] font-medium ${tag[eco.accent]}`}>
                {eco.tagline}
              </p>

              <p className="mt-4 text-[14px] leading-[1.65] text-muted">{eco.body}</p>

              <ul className="mt-6 flex flex-col gap-2.5 border-t border-hairline pt-6">
                {eco.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-[13.5px] text-muted"
                  >
                    <span
                      aria-hidden="true"
                      className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${dot[eco.accent]}`}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex-1" />

              <ButtonLink
                href="https://webreleaf.vercel.app/login"
                variant={index === 0 ? "primary" : "secondary"}
                className="w-full"
              >
                {eco.cta}
              </ButtonLink>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
