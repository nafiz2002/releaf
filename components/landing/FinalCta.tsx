import { ButtonLink } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function FinalCta() {
  return (
    <section id="cta" className="w-full border-t border-hairline bg-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-18">
        <Reveal>
          <div className="rounded-3xl border border-line bg-surface px-8 py-12 text-center shadow-[var(--shadow-card)] sm:px-12 lg:py-16">
            <h2 className="mx-auto max-w-2xl text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.75rem]">
              Bangladesh throws away a fortune every day.
              <br className="hidden sm:block" />{" "}
              <span className="text-forest">Start collecting yours.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[16px] leading-[1.65] text-muted">
              Free to join, no minimum, paid at the door. Businesses and schools can enrol
              a whole site in one conversation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="https://webreleaf.vercel.app/login" size="lg" className="w-full sm:w-auto">Schedule a pickup</ButtonLink>
              <ButtonLink href="https://webreleaf.vercel.app/login" variant="secondary" size="lg" className="w-full sm:w-auto">Book a demo</ButtonLink>
              <ButtonLink href="https://webreleaf.vercel.app/login" variant="ghost" size="lg" className="w-full sm:w-auto">Become a partner</ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
