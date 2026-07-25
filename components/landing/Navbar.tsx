"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#problem", label: "The problem" },
  { href: "#how", label: "How it works" },
  { href: "#network", label: "The network" },
  { href: "#platform", label: "Platform" },
  { href: "#esg", label: "ESG" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${scrolled || open ? "border-b border-hairline bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.03em] text-ink">
          <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-lg bg-forest text-[12px] leading-none text-white">↻</span>
          ReLeaf
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-md px-3 py-2 text-[13.5px] font-medium tracking-[-0.01em] text-muted transition-colors duration-200 hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden sm:block">
            <ButtonLink href="#cta" size="sm">Schedule pickup</ButtonLink>
          </div>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="m" aria-label={open ? "Close menu" : "Open menu"} className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink lg:hidden">
            <span aria-hidden="true" className="relative block h-3 w-4">
              <span className={`absolute left-0 block h-px w-4 bg-current transition-all duration-200 ${open ? "top-1.5 rotate-45" : "top-0.5"}`} />
              <span className={`absolute left-0 block h-px w-4 bg-current transition-all duration-200 ${open ? "top-1.5 -rotate-45" : "top-2.5"}`} />
            </span>
          </button>
        </div>
      </nav>

      <div id="m" hidden={!open} className="border-t border-hairline bg-bg px-6 pb-5 pt-3 lg:hidden">
        <div className="flex flex-col">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-md py-2.5 text-[15px] font-medium tracking-[-0.015em] text-ink">{l.label}</a>
          ))}
          <ButtonLink href="#cta" onClick={() => setOpen(false)} className="mt-3 w-full">Schedule pickup</ButtonLink>
        </div>
      </div>
    </header>
  );
}
