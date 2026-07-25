"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-hairline bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-28 w-full max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/rlgpbd.png"
            alt="ReLeaf"
            width={900}
            height={225}
            priority
            className="h-24 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-[14px] font-medium tracking-[-0.01em] text-muted transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="hidden sm:block">
            <ButtonLink href="#cta" size="sm">
              Schedule Pickup
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-ink lg:hidden"
          >
            <span
              aria-hidden="true"
              className="relative block h-3 w-4"
            >
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-all duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0.5"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-all duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-2.5"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-hairline bg-bg px-6 pb-5 pt-3 lg:hidden"
      >
        <div className="flex flex-col">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md py-3 text-[15px] font-medium text-ink"
            >
              {link.label}
            </a>
          ))}

          <ButtonLink
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-4 w-full"
          >
            Schedule Pickup
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}