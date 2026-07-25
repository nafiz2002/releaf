import { DEMO_MODE } from "@/lib/data";

export default function DemoBadge({ className = "" }: { className?: string }) {
  if (!DEMO_MODE) return null;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-medium text-faint ${className}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-faint" />
      Illustrative data
    </span>
  );
}
