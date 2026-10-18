"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { fadeUpVariants } from "@/components/animations";

const showcaseCards = [
  {
    id: "01",
    title: "ActiveWell Pharma",
    category: "E-commerce",
    tag: "Next.js & Supabase",
    color: "from-zinc-100 to-zinc-200",
  },
  {
    id: "02",
    title: "Jaysal VFX",
    category: "Portfolio",
    tag: "Cinematic Web",
    color: "from-zinc-200 to-zinc-300",
  },
];

export function FeaturedWork() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative overflow-hidden border-b border-line py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -top-8 left-0 select-none whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(110px,22vw,300px)] font-black leading-none tracking-[-0.05em] text-[#b5ff00] z-0"
        aria-hidden
      >
        projects
      </div>

      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 [writing-mode:vertical-rl] font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-faint transition-colors hover:text-ink"
          aria-label="Scroll to top"
        >
          <span>Scroll to top</span>
          <span className="h-6 w-px bg-line-strong" />
        </button>
      </div>

      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        <div className="flex flex-col items-end justify-end pb-12 sm:pb-16">
          <div className="flex flex-col items-end gap-6">
            <div className="relative flex size-24 items-center justify-center rounded-full bg-ink text-white shadow-xl">
              <Sparkles className="size-6 text-[#b5ff00]" />
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full animate-[spin_20s_linear_infinite]"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="font-mono text-[8px] uppercase tracking-[0.16em] fill-white/80">
                  <textPath href="#circlePath">
                    SELECTED DIGITAL WORK • WEBTUNE •
                  </textPath>
                </text>
              </svg>
            </div>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-[#b5ff00] px-7 py-3 text-[12.5px] font-bold uppercase tracking-wider text-black shadow-sm transition-all duration-200 hover:bg-[#9ee000] hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Explore all work</span>
              <ArrowUpRight className="size-4" strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {showcaseCards.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={fadeUpVariants}
              custom={i}
              className="group flex flex-col"
            >
              <Link
                href="/work"
                className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-line-strong bg-[#f2f2f2] p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md group-hover:border-ink/20"
              >
                <div className={`flex h-full w-full flex-col justify-between rounded bg-gradient-to-br ${project.color} p-5 transition-transform duration-500 group-hover:scale-105`}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-zinc-500">{project.id}</span>
                    <span className="rounded bg-black/5 px-2.5 py-1 font-mono text-[10px] font-semibold text-zinc-700">
                      {project.tag}
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="font-[family-name:var(--font-display)] text-[22px] font-bold text-zinc-800 text-center">
                      {project.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="flex size-7 items-center justify-center rounded-full bg-white/80 opacity-0 transition-opacity group-hover:opacity-100">
                      <ArrowUpRight className="size-3.5 text-black" />
                    </div>
                  </div>
                </div>
              </Link>

              <div className="mt-3.5 text-left">
                <p className="text-[15px] font-semibold tracking-tight text-ink">
                  {project.title}{" "}
                  <span className="text-ink-faint font-normal">—</span>{" "}
                  <span className="text-ink-soft font-normal">{project.category}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
