import Link from "next/link";
import Image from "next/image";
import { impact } from "@/lib/data";

const groups = [
  { h: "Product", l: ["Scheduling", "Rewards", "Analytics", "ESG reports"] },
  { h: "Who it's for", l: ["Households", "Businesses", "Schools", "Collectors"] },
  { h: "Company", l: ["About", "Careers", "Contact", "Privacy"] },
];

export default function Footer() {
  const ticker = [
    `Paid to collectors · ৳${impact[1].value.toLocaleString("en-US")}`,
    `Plastic recovered · ${impact[0].value} t`,
    `Households · ${impact[2].value.toLocaleString("en-US")}`,
    `CO₂e avoided · ${impact[3].value} t`,
  ];

  return (
    <footer className="w-full border-t border-hairline bg-surface-2">
      <div className="overflow-hidden border-b border-hairline py-3">
        <div className="ticker flex w-max gap-10 whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 text-[12.5px] text-faint">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-forest" />{t}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center">
              <Image
                src="/rlgpbd.png"
                alt="ReLeaf"
                width={900}
                height={225}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-4 text-[13.5px] leading-[1.65] text-muted">
              The operating system for Bangladesh&rsquo;s recycling economy. Built in Dhaka.
            </p>
          </div>
          {groups.map((g) => (
            <div key={g.h}>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.12em] text-faint">{g.h}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {g.l.map((x) => (
                  <li key={x}><a href="#" className="text-[13.5px] text-muted transition-colors duration-200 hover:text-ink">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-hairline pt-8 text-[12.5px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ReLeaf. All rights reserved.</p>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
