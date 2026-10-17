"use client";

import { motion } from "motion/react";
import { fadeUpVariants } from "@/components/animations";

const services = [
  {
    num: "01",
    title: "Web design",
    description:
      "We create compelling web designs, which are the right-fit for your target groups.",
  },
  {
    num: "02",
    title: "Web development",
    description:
      "We create compelling web designs, which are the right-fit for your target groups.",
  },
  {
    num: "03",
    title: "eCommerce solutions",
    description:
      "We create compelling web designs, which are the right-fit for your target groups.",
  },
  {
    num: "04",
    title: "Automation systems",
    description:
      "We build autonomous workflows that eliminate repetitive busywork and scale operations.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-b border-line py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        {/* 4-Column Services Grid matching the 4-Column Grid Lines */}
        <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {services.map((item, i) => (
            <motion.div
              key={item.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
              custom={i}
              className="group flex flex-col py-8 px-6 sm:px-6 lg:px-7 sm:py-4"
            >
              {/* Giant Outlined / Stroked Number with Hover Slide Animation */}
              <div
                aria-hidden="true"
                style={{
                  WebkitTextStroke: "1px #dedede",
                  color: "transparent",
                }}
                className="pointer-events-none select-none font-[family-name:var(--font-display)] text-[clamp(76px,6.5vw,94px)] font-bold leading-none tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-4 group-hover:scale-105"
              >
                {item.num}
              </div>

              {/* Title Overlapping Lower Half of Stroked Number */}
              <h3 className="relative -mt-6 z-10 font-[family-name:var(--font-display)] text-[19px] sm:text-[20px] font-semibold text-ink">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[15px] leading-[28px] text-ink-soft">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
