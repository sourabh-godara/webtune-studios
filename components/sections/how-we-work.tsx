"use client";

import { motion } from "motion/react";
import { fadeUpVariants } from "@/components/animations";
import { ArrowUpRight } from "lucide-react";

const processSteps = [
  {
    step: "01",
    tag: "STAGE 01 · DISCUSS",
    title: "Discuss",
    description: "Learn about your business, target audience, and primary goals to define clear deliverables.",
    color: "from-zinc-100 to-zinc-200",
  },
  {
    step: "02",
    tag: "STAGE 02 · PLAN & DESIGN",
    title: "Plan and design",
    description: "Agree on page structure, site hierarchy, and visual direction before writing a line of code.",
    color: "from-zinc-200 to-zinc-300",
  },
  {
    step: "03",
    tag: "STAGE 03 · BUILD & TEST",
    title: "Build and test",
    description: "Develop with fast tools like Next.js, test layouts on mobile and desktop, and review with you.",
    color: "from-zinc-100 to-zinc-200",
  },
  {
    step: "04",
    tag: "STAGE 04 · LAUNCH & SUPPORT",
    title: "Launch and support",
    description: "Handle hosting, basic SEO configuration, and domain launch, staying available for updates.",
    color: "from-zinc-200 to-zinc-300",
  },
];

export function HowWeWork() {
  return (
    <section id="process" className="relative border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 pb-16 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-signal-deep">
              Our Process
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.03em] text-ink">
              How we work
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-[12.5px] font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-ink/80 hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Start a project</span>
            <ArrowUpRight className="size-4" strokeWidth={2.5} />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((item, i) => (
            <motion.article
              key={item.step}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
              custom={i}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-line-strong bg-panel shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md">
                <div className={`flex h-full w-full flex-col justify-between bg-gradient-to-br ${item.color} p-6 transition-transform duration-500 group-hover:scale-105`}>
                  <span className="font-mono text-[12px] font-bold text-zinc-500">
                    {item.step}
                  </span>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-700">
                    {item.title}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  {item.tag}
                </span>

                <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-black">
                  {item.title}
                </h3>

                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
