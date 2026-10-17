import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Stats } from "@/components/sections/stats";
import { AutomationDemo } from "@/components/sections/automation-demo";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        {/* Section 1 & 2: Top Landing with rotating sunburst & About Agency with 'about' watermark */}
        <Hero />

        {/* Section 3: 3-Column Services */}
        <Services />

        {/* Section 4: Projects with giant 'projects' watermark & 8-card grid */}
        <FeaturedWork />

        {/* Section 6: Dark Contrast Section with 4.82 rating, quote, signature workflow demo & client logos */}
        <AutomationDemo />

        {/* Section 7: Latest Blogs 4-column cards */}
        <HowWeWork />

        {/* Section 8: Closing CTA with giant 'work together' & circular floating badge */}
        <Cta />
      </main>

      {/* Section 9: Minimal Footer */}
      <Footer />
    </>
  );
}
