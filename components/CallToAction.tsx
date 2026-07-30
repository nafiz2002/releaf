import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export default function CallToAction() {
  return (
    <section id="rewards" className="w-full border-t border-hairline bg-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-18">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface-2 px-8 py-12 text-center sm:px-12 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[-40%] h-[26rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--leaf-soft),transparent)]"
            />

            <div className="relative">
              <h2 className="mx-auto max-w-xl text-[1.875rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
                Ready to join Bangladesh&rsquo;s
                <br className="hidden sm:block" />{" "}
                <span className="text-leaf">circular economy?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-md text-[16px] leading-[1.65] text-muted">
                Free to join, no minimum, and you&rsquo;re paid at the door. Schools
                and buildings can enrol a whole community in one form.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="https://webreleaf.vercel.app/login" size="lg" className="w-full sm:w-auto">
                  Get Started
                </ButtonLink>
                <ButtonLink
                  href="#how"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  See How It Works
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
