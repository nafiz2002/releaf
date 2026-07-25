import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const centred = align === "center";

  return (
    <Reveal className={centred ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-leaf">
        {label}
      </p>
      <h2 className="mt-5 text-[2rem] font-semibold leading-[1.1] tracking-[-0.04em] text-ink sm:text-[2.65rem]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-5 max-w-xl text-[16px] leading-[1.65] tracking-[-0.008em] text-muted sm:text-[17px] ${
            centred ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
