"use client";

import { useState } from "react";
import Link from "next/link";

const nav = [
  { id: "dashboard", label: "Dashboard", glyph: "▦" },
  { id: "pickup", label: "Schedule Pickup", glyph: "◧" },
  { id: "rewards", label: "Rewards", glyph: "◆" },
  { id: "impact", label: "My Impact", glyph: "◉" },
  { id: "history", label: "History", glyph: "▤" },
  { id: "schools", label: "Schools", glyph: "◈" },
  { id: "notifications", label: "Notifications", glyph: "◌", badge: 3 },
  { id: "profile", label: "Profile", glyph: "◑" },
];

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <aside className="flex h-full flex-col border-r border-hairline bg-surface-2">
      <div className="flex h-16 items-center px-5">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.03em] text-ink">
          <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-lg bg-leaf text-[12px] leading-none text-white">
            ↻
          </span>
          ReLeaf
        </Link>
      </div>

      <nav aria-label="Dashboard" className="flex-1 px-3 py-2">
        <ul className="flex flex-col gap-0.5">
          {nav.map((item) => {
            const selected = item.id === active;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActive(item.id)}
                  aria-current={selected ? "page" : undefined}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-leaf ${
                    selected
                      ? "bg-surface text-ink shadow-[var(--shadow-sm)]"
                      : "text-muted hover:bg-surface/60 hover:text-ink"
                  }`}
                >
                  <span aria-hidden="true" className={`text-[13px] ${selected ? "text-leaf" : "text-faint"}`}>
                    {item.glyph}
                  </span>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge ? (
                    <span className="rounded-md bg-leaf-soft px-1.5 py-0.5 font-mono text-[10.5px] font-medium text-leaf">
                      {item.badge}
                    </span>
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-hairline p-3">
        <div className="flex items-center gap-2.5 rounded-lg px-2 py-2">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-leaf-soft font-mono text-[12px] font-semibold text-leaf">
            NB
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[13px] font-medium text-ink">Household</span>
            <span className="truncate text-[11.5px] text-faint">Dhanmondi</span>
          </span>
        </div>
      </div>
    </aside>
  );
}
