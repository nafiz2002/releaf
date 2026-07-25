import type { ReactNode } from "react";

/**
 * Standard page section: full-bleed background, constrained inner column,
 * consistent vertical rhythm.
 */
export default function Section({
  id,
  children,
  tone = "bg",
  divided = true,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "bg" | "surface-2";
  divided?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full ${tone === "surface-2" ? "bg-surface-2" : "bg-bg"} ${
        divided ? "border-t border-hairline" : ""
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        {children}
      </div>
    </section>
  );
}
