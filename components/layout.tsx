import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "ReLeaf — The operating system for Bangladesh's recycling economy",
  description:
    "ReLeaf connects households, businesses, schools and collectors to recycling factories — weighed, tracked, and paid the moment waste is collected.",
};

const themeScript = `(function(){try{var s=localStorage.getItem('releaf-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
