import { DEMO_MODE } from "@/lib/data";

/**
 * "Demonstration data" disclosure, controlled by DEMO_MODE in lib/data.ts.
 * Renders nothing when DEMO_MODE is false.
 *
 * NOTE: this imports { DEMO_MODE } from "@/lib/data". Your kept lib/data.ts
 * must export it:   export const DEMO_MODE = true;
 * If your data file doesn't have that export, see the note below the code.
 */
export default function DemoBadge({ className = "" }: { className?: string }) {
  if (!DEMO_MODE) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-faint ${className}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-faint" />
      Demonstration data
    </span>
  );
}
