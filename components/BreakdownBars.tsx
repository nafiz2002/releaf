const tone = {
  green: "bg-leaf",
  blue: "bg-blue",
  gold: "bg-gold",
} as const;

export default function BreakdownBars({
  items,
}: {
  items: readonly { label: string; value: number; accent: "green" | "blue" | "gold" }[];
}) {
  const max = Math.max(...items.map((i) => i.value));

  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.label}>
          <div className="flex items-baseline justify-between">
            <span className="text-[13px] font-medium tracking-[-0.01em] text-ink">
              {item.label}
            </span>
            <span className="font-mono text-[12.5px] tabular-nums text-muted">
              {item.value} kg
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-hairline">
            <div
              className={`h-full rounded-full ${tone[item.accent]}`}
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
