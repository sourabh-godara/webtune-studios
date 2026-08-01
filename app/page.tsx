import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Services } from "@/components/sections/services";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Stats } from "@/components/sections/stats";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <HowWeWork />
        <Stats />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
