import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

/**
 * Shared button styling. Two exports: <Button> (native button) and
 * <ButtonLink> (next/link). Both accept variant + size.
 */

export type Variant = "primary" | "secondary" | "ghost";
export type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-xl font-medium tracking-[-0.01em] transition-[background-color,border-color,color,box-shadow,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf disabled:cursor-not-allowed disabled:opacity-55 motion-safe:active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-leaf text-white shadow-[0_1px_2px_rgba(10,15,13,0.14),0_8px_20px_-10px_var(--leaf)] hover:brightness-[1.06]",
  secondary:
    "border border-line bg-surface text-ink hover:border-leaf/40 hover:bg-leaf-soft",
  ghost: "text-muted hover:bg-leaf-soft hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-[14.5px]",
  lg: "h-12 px-6 text-[15px]",
};

export function buttonStyles(v: Variant = "primary", s: Size = "md", c = "") {
  return `${base} ${variants[v]} ${sizes[s]} ${c}`.trim();
}

type BtnProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Variant;
  size?: Size;
};

export function Button({ variant, size, className, type = "button", ...rest }: BtnProps) {
  return <button type={type} className={buttonStyles(variant, size, className)} {...rest} />;
}

type LinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({ variant, size, className, ...rest }: LinkProps) {
  return <Link className={buttonStyles(variant, size, className)} {...rest} />;
}

export default Button;
