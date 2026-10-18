import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { FeaturedWork } from "@/components/sections/featured-work";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "WebTune Studios",
  "url": "https://www.webtunestudios.in",
  "telephone": "+91-9779043521",
  "email": "sourabh@webtunestudios.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sector 82, JLPL Industrial Area",
    "addressLocality": "Mohali",
    "addressRegion": "Punjab",
    "addressCountry": "IN",
  },
  "areaServed": [
    "Mohali",
    "Chandigarh",
    "Panchkula",
    "India",
    "United Arab Emirates",
  ],
  "serviceType": [
    "Web design",
    "Web development",
    "eCommerce development",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <FeaturedWork />
        <HowWeWork />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
