import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { WorkHero } from "@/components/work/work-hero";
import { ProjectCard, projects } from "@/components/work/project-card";

export const metadata: Metadata = {
  title: "Our Work — WebTune Studios",
  description:
    "Selected projects from WebTune Studios: e-commerce platforms, portfolio sites, and business automation systems, built with Next.js, React, and n8n.",
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
