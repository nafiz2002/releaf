/** Section eyebrow: a hairline tick + label. Encodes "new section", quietly. */
export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-forest">
      <span aria-hidden="true" className="h-px w-6 bg-forest/50" />
      {children}
    </span>
  );
}
