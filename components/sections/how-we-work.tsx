"use client";

import { motion } from "motion/react";
import { fadeUpVariants } from "@/components/animations";
import { ArrowUpRight } from "lucide-react";

const blogSteps = [
  {
    tag: "DISCOVERY · STAGE 01",
    title: "Discovery & systems audit for rapid growth.",
    description: "Everything you need to know about auditing existing workflows and finding high-leverage bottlenecks.",
    color: "from-zinc-100 to-zinc-200",
  },
  {
    tag: "DESIGN · STAGE 02",
    title: "Designing high-converting web architectures.",
    description: "How thoughtful UI/UX and micro-interactions elevate agency conversions and client trust.",
    color: "from-zinc-200 to-zinc-300",
  },
  {
    tag: "AUTOMATION · STAGE 03",
    title: "Autonomous pipelines that eliminate busywork.",
    description: "Connecting WhatsApp Cloud API, HubSpot, and n8n to close deals in under four seconds flat.",
    color: "from-zinc-100 to-zinc-200",
  },
  {
    tag: "SCALE · STAGE 04",
    title: "Continuous optimization and 24/7 uptime.",
    description: "Maintaining peak Core Web Vitals, serverless resilience, and continuous client revenue growth.",
    color: "from-zinc-200 to-zinc-300",
  },
];

export function HowWeWork() {
  return (
    <section id="process" className="relative border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        {/* Header Bar matching Reference Screenshot */}
        <div className="flex flex-col justify-between gap-6 pb-16 sm:flex-row sm:items-end">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.03em] text-ink">
            Latest blogs
          </h2>

          {/* Lime Pill Button matching screenshot */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#b5ff00] px-7 py-3 text-[12.5px] font-bold uppercase tracking-wider text-black shadow-sm transition-all duration-200 hover:bg-[#9ee000] hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Explore all blogs</span>
            <ArrowUpRight className="size-4" strokeWidth={2.5} />
          </a>
        </div>

        {/* 4-Column Card Grid (Matches Reference Section 8 Exactly) */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {blogSteps.map((item, i) => (
            <motion.article
              key={item.tag}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
              custom={i}
              className="group flex flex-col cursor-pointer lg:px-3.5 lg:py-2"
            >
              {/* Card Thumbnail */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-line-strong bg-panel shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md">
                <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${item.color} p-6 transition-transform duration-500 group-hover:scale-105`}>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-600">
                    {item.tag.split(" · ")[0]}
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="mt-4">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-faint">
                  {item.tag}
                </span>

                <h3 className="mt-2 font-[family-name:var(--font-display)] text-[17px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-black">
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
