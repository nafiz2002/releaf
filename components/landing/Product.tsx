import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { product } from "@/lib/data";

export default function Product() {
  return (
    <section id="product" className="w-full border-t border-hairline bg-bg">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>The product</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] text-ink sm:text-[2.5rem]">
            Everything runs on one dashboard.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.65] text-muted">
            Scheduling, payments, rewards, analytics and reporting — the same system a
            household opens once a fortnight and an operations team lives in daily.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {product.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-card)]">
                <span aria-hidden className="h-1 w-6 rounded-full bg-forest/60" />
                <h3 className="mt-5 text-[15px] font-semibold tracking-[-0.02em] text-ink">{p.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-muted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
