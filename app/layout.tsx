import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const heading = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], display: "swap", variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", variable: "--font-mono" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Virgi Atha Raditya — Data, AI & Web Engineer", template: "%s | Virgi Atha Raditya" },
  description: "Computer Science graduate in Banjarbaru, Indonesia. Builds data, AI, web, and IoT systems, including a published NLP study and an inventory system for a national weather station.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Virgi Atha Raditya — Data, AI & Web Engineer",
    description: "Data, AI, web, and IoT work, with case studies, dates, and outcomes.",
    type: "website",
    locale: "en_US",
    siteName: "Virgi Atha Raditya",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`}>
      <body style={{ fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif" }}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius)] focus:bg-[var(--ink)] focus:px-4 focus:py-2 focus:text-[var(--surface)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
