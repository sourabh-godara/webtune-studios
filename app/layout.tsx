import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebTune Studios — Websites & Automation That Grow Your Business",
  description:
    "WebTune Studios builds premium business websites and automates repetitive operations — lead capture, CRM sync, WhatsApp follow-ups, and AI support — so you can focus on scaling revenue.",
  keywords: [
    "web development agency",
    "business automation",
    "AI solutions",
    "WebTune Studios",
    "Mohali",
  ],
  openGraph: {
    title: "WebTune Studios — Websites & Automation That Grow Your Business",
    description:
      "Premium websites and business automation for modern companies. Book a free consultation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${manrope.variable} ${plexMono.variable} bg-paper text-ink antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
