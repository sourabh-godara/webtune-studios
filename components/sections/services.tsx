"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUpVariants } from "@/components/animations";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web design",
    description:
      "Clean, mobile-first designs built around your customers and your brand. We plan the page structure, visuals and calls to action so visitors know what to do next.",
  },
  {
    num: "02",
    title: "Web development",
    description:
      "Fast, search-friendly websites built with modern tools such as Next.js. We handle responsive layouts, performance, SEO basics, and integrations like forms, maps and payment gateways.",
  },
  {
    num: "03",
    title: "eCommerce solutions",
    description:
      "Online stores with product catalogues, secure checkout, order management and payment integrations. We built the ActiveWell Pharma store on Next.js and Supabase.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-b border-line py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-line md:grid-cols-3 md:divide-y-0 justify-center gap-y-12 md:gap-x-8 lg:gap-x-12">
          {services.map((item, i) => (
            <motion.div
              key={item.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
              custom={i}
              className="group flex flex-col items-center text-center py-6 px-4 sm:px-6"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none select-none font-display text-7xl sm:text-8xl lg:text-9xl font-bold leading-none tracking-tight text-transparent [-webkit-text-stroke:1px_var(--color-line-strong)] transition-transform duration-500 ease-out group-hover:scale-105"
              >
                {item.num}
              </div>

              <h3 className="relative -mt-6 z-10 font-display text-xl sm:text-2xl font-semibold text-ink">
                {item.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-ink-soft max-w-sm mx-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="mt-16 rounded-xl border border-line-strong bg-panel/70 p-6 sm:p-8 text-center"
        >
          <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-ink-soft max-w-3xl mx-auto">
            We build websites for real estate agencies (property listings, enquiry forms, WhatsApp contact buttons) and restaurants (menus, table booking, online ordering links).
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/real-estate-website-development-mohali"
              className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-paper px-4 py-2 font-mono text-[11.5px] font-semibold uppercase tracking-wider text-ink hover:border-ink hover:text-black transition-colors"
            >
              <span>Real Estate Websites</span>
              <ArrowUpRight className="size-3" />
            </Link>
            <Link
              href="/restaurant-website-design-mohali"
              className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-paper px-4 py-2 font-mono text-[11.5px] font-semibold uppercase tracking-wider text-ink hover:border-ink hover:text-black transition-colors"
            >
              <span>Restaurant Websites</span>
              <ArrowUpRight className="size-3" />
            </Link>
            <Link
              href="/web-development-company-mohali"
              className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-paper px-4 py-2 font-mono text-[11.5px] font-semibold uppercase tracking-wider text-ink hover:border-ink hover:text-black transition-colors"
            >
              <span>Mohali &amp; Tricity Overview</span>
              <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
