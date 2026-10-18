"use client";

import { motion } from "motion/react";
import { fadeUpVariants } from "@/components/animations";

const awards = [
  { count: "9X", title: "Site of the day - Awwwards", year: "2021" },
  { count: "2X", title: "Site of the day - CSS Design Awards", year: "2021" },
  { count: "4X", title: "Special Kudos - CSS Winner", year: "2021" },
  { count: "3X", title: "Mobile Excellence - Awwwards", year: "2021" },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -bottom-10 left-0 select-none whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(110px,22vw,300px)] font-black leading-none tracking-[-0.05em] text-[#b5ff00] z-0"
        aria-hidden
      >
        awards
      </div>

      <div className="relative z-10 mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-0">
          <div className="lg:col-span-6 lg:pr-12">
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(34px,5vw,52px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink">
              Honorable
              <br />
              awards
            </h2>

            <div className="mt-6">
              <span className="inline-block rounded-full bg-ink px-5 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                Direct from the heart
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-12">
            <p className="max-w-[500px] text-[15.5px] leading-relaxed text-ink-soft">
              We are excited for our work and how it positively impacts clients. With our focus on digital craftsmanship, we have been constantly providing best in-class experience for our clients.
            </p>

            <div className="mt-10 divide-y divide-line border-y border-line">
              {awards.map((award, i) => (
                <motion.div
                  key={award.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUpVariants}
                  custom={i}
                  className="grid grid-cols-12 items-center py-5 transition-colors hover:bg-panel/60"
                >
                  <div className="col-span-3 sm:col-span-2">
                    <span className="font-mono text-[18px] font-bold text-ink sm:text-[20px]">
                      {award.count}
                    </span>
                  </div>
                  <div className="col-span-7 sm:col-span-8">
                    <p className="text-[14.5px] font-semibold text-ink sm:text-[15.5px]">
                      {award.title}
                    </p>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="font-mono text-[12px] text-ink-faint">
                      {award.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-10 sm:gap-14">
              <span className="font-[family-name:var(--font-display)] text-[19px] font-bold tracking-tight text-ink">
                awwwards.
              </span>
              <span className="font-mono text-[15px] font-semibold uppercase tracking-[0.2em] text-ink">
                cssda
              </span>
              <span className="font-sans text-[17px] font-bold lowercase tracking-tight text-ink">
                envato
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
