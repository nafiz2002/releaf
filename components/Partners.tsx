import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * Anonymised partner marks.
 *
 * Real logos are trademarked and their presence asserts a relationship. Swap
 * these only when you hold both a signed agreement and written permission to
 * use the mark.
 */
const partners = [
  { mark: "AV", name: "Restaurant group" },
  { mark: "KR", name: "Cloud kitchen" },
  { mark: "NB", name: "Café chain" },
  { mark: "SD", name: "Girls' school" },
  { mark: "MH", name: "Model school" },
  { mark: "TQ", name: "English medium" },
  { mark: "OR", name: "Office tower" },
  { mark: "LP", name: "Apartment complex" },
  { mark: "GX", name: "Retail chain" },
  { mark: "ZN", name: "Hotel group" },
  { mark: "PW", name: "Pharma distributor" },
  { mark: "EC", name: "Logistics firm" },
];

export default function Partners() {
  return (
    <Section id="about" tone="surface-2">
      <Reveal className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-faint">
          Collecting for restaurants, schools, offices and buildings
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-10">
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-4 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.mark}
              className="group flex flex-col items-center justify-center gap-2 bg-surface px-4 py-8 transition-colors duration-300 hover:bg-surface-2"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-[13px] font-semibold tracking-tight text-faint transition-colors duration-300 group-hover:border-leaf/30 group-hover:text-leaf"
              >
                {partner.mark}
              </span>
              <span className="text-center text-[11px] leading-tight text-faint">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-6 text-center text-[11.5px] text-faint">
          Partner marks anonymised. We publish a name only with the partner&rsquo;s
          written permission.
        </p>
      </Reveal>
    </Section>
  );
}
