import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WorkHero } from "@/components/work/work-hero";
import { ProjectCard, projects } from "@/components/work/project-card";

export const metadata: Metadata = {
  title: "Our Work | WebTune Studios",
  description:
    "Selected web development and eCommerce projects from WebTune Studios: online stores, business websites, and creator portfolios built with Next.js and Supabase.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Our Work | WebTune Studios",
    description:
      "Selected web development and eCommerce projects from WebTune Studios: online stores, business websites, and creator portfolios.",
    url: "https://www.webtunestudios.in/work",
    siteName: "WebTune Studios",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | WebTune Studios",
    description:
      "Selected web development and eCommerce projects from WebTune Studios: online stores, business websites, and creator portfolios.",
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkHero />
        <section className="border-b border-line py-4 sm:py-6">
          <div className="mx-auto max-w-[1080px] px-6 lg:px-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>
        <Cta />
      </main>
      <Footer />
    </>
  );
}
