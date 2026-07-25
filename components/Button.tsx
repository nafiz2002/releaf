import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export type Variant = "primary" | "secondary" | "ghost";
export type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-lg font-medium tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-not-allowed disabled:opacity-55 motion-safe:active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-forest text-white shadow-[var(--shadow-sm)] hover:brightness-[1.07]",
  secondary: "border border-line bg-surface text-ink hover:border-forest/40 hover:bg-forest-soft",
  ghost: "text-muted hover:bg-forest-soft hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14.5px]",
  lg: "h-12 px-6 text-[15px]",
};

export function buttonStyles(v: Variant = "primary", s: Size = "md", c = "") {
  return `${base} ${variants[v]} ${sizes[s]} ${c}`.trim();
}

type BtnProps = ComponentPropsWithoutRef<"button"> & { variant?: Variant; size?: Size };
export function Button({ variant, size, className, type = "button", ...rest }: BtnProps) {
  return <button type={type} className={buttonStyles(variant, size, className)} {...rest} />;
}

type LinkProps = ComponentPropsWithoutRef<typeof Link> & { variant?: Variant; size?: Size };
export function ButtonLink({ variant, size, className, ...rest }: LinkProps) {
  return <Link className={buttonStyles(variant, size, className)} {...rest} />;
}

export default Button;
