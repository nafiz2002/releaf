import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ReLeaf — The operating system for Bangladesh's recycling economy",
  description:
    "ReLeaf connects households, businesses, schools and collectors to recycling factories — weighed, tracked, and paid the moment waste is collected.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg font-sans text-ink antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
