import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Manrope, IBM_Plex_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { GridLines } from "@/components/grid-lines";
import { CookieBanner } from "@/components/cookie-banner";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
  metadataBase: new URL("https://www.webtunestudios.in"),
  title: "Web Development Company in Mohali | WebTune Studios",
  description:
    "WebTune Studios designs and builds fast business websites and online stores for businesses in Mohali, Chandigarh, India and the UAE.",
  authors: [{ name: "WebTune Studios" }],
  creator: "WebTune Studios",
  publisher: "WebTune Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "WebTune Studios: Web Design & Development, Mohali",
    description:
      "Business websites and online stores for growing companies. Book a free consultation.",
    url: "https://www.webtunestudios.in",
    siteName: "WebTune Studios",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebTune Studios: Web Design & Development, Mohali",
    description:
      "Business websites and online stores for growing companies. Book a free consultation.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "640x640", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "/",
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
        className={`${inter.variable} ${bricolage.variable} ${manrope.variable} ${plexMono.variable} bg-paper text-ink antialiased font-sans`}
      >
        <GoogleAnalytics />
        <SmoothScroll>
          <div className="relative min-h-screen w-full">
            <GridLines />
            <div className="relative z-10">
              {children}
            </div>
          </div>
        </SmoothScroll>
        <CookieBanner />
      </body>
    </html>
  );
}
