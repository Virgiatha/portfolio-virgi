import type { Metadata } from "next";
import "./globals.css";

const deploymentUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),
  title: { default: "VAR | Portfolio", template: "%s | Virgi Atha Raditya" },
  description: "Computer Science graduate building data, AI, web, IoT, and connected systems from Banjarbaru, Indonesia.",
  openGraph: {
    title: "VAR | Portfolio",
    description: "Selected work across data analytics, artificial intelligence, web development, IoT, and systems engineering.",
    type: "website",
    locale: "en_US",
    siteName: "VAR | Portfolio",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="noise">{children}</body></html>;
}
