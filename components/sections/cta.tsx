"use client";

import { motion } from "motion/react";
import { fadeUpVariants } from "@/components/animations";
import { ArrowUpRight } from "lucide-react";

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-line pt-24 pb-20 sm:pt-36 sm:pb-28">
      <div className="relative mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        {/* ==============================================================
            GIANT SPLIT TEXT: "work together" (Matches Reference Screenshot)
            "work" in black ink + circular floating badge + "together" in lime #b5ff00
           ============================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="relative select-none text-left"
        >
          <div className="relative inline-flex flex-wrap items-center font-[family-name:var(--font-display)] text-[clamp(68px,15vw,210px)] font-black leading-[0.88] tracking-[-0.05em]">
            <span className="text-ink">work</span>

            {/* Circular Floating Badge with rotating text + lime center '1' */}
            <div className="relative mx-4 inline-flex size-14 sm:size-20 lg:size-24 items-center justify-center rounded-full border border-line-strong bg-paper shadow-lg">
              <span className="flex size-7 sm:size-10 items-center justify-center rounded-full bg-[#b5ff00] font-mono text-[14px] sm:text-[18px] font-bold text-black">
                1
              </span>
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 size-full animate-[spin_25s_linear_infinite]"
              >
                <path
                  id="ctaCirclePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                />
                <text className="font-mono text-[7px] uppercase tracking-[0.18em] fill-ink">
                  <textPath href="#ctaCirclePath">
                    LET&rsquo;S TALK ABOUT YOUR PROJECT •
                  </textPath>
                </text>
              </svg>
            </div>

            <span className="text-[#b5ff00]">together</span>
          </div>
        </motion.div>

        {/* Sub-headline: "Let's make something great work together?" with underline */}
        <div className="mt-14 pt-8 border-t border-line">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,4vw,38px)] font-bold tracking-tight text-ink">
            Let&rsquo;s make something great{" "}
            <span className="underline decoration-ink decoration-2 underline-offset-8">
              work together?
            </span>
          </h2>
        </div>

        {/* Editorial Contact Columns (Matches Screenshot Section 9 Exactly) */}
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-end lg:gap-8">
          {/* Studio Location 1 */}
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
              WebTune — Mohali
            </p>
            <p className="mt-2 text-[14.5px] text-ink-soft">
              Sector 82, JLPL Industrial Area
            </p>
            <p className="font-mono text-[13px] text-ink-faint">
              Mohali, Punjab, India
            </p>
          </div>

          {/* Studio Location 2 / Direct Inquiry */}
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
              Direct Inquiry
            </p>
            <a
              href="mailto:webtunestudio360@gmail.com"
              className="mt-2 block text-[14.5px] font-semibold text-ink transition-colors hover:text-[#9ee000]"
            >
              webtunestudio360@gmail.com
            </a>
            <p className="font-mono text-[13px] text-ink-faint">
              Response within 2 hours
            </p>
          </div>

          {/* Right Logo Badge + Phone Number + Book Consultation */}
          <div className="flex flex-col gap-4 sm:items-start lg:col-span-4 lg:items-end">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-full bg-ink text-white shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#15140f" />
                  <path d="M7 16L10 8H14L17 16M9 13.5H15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="15.5" cy="8.5" r="2" fill="#b5ff00" />
                </svg>
              </span>
              <a
                href="tel:+919779043521"
                className="font-mono text-[17px] font-bold tracking-tight text-ink transition-colors hover:text-black"
              >
                +91 9779043521
              </a>
            </div>

            <a
              href="mailto:webtunestudio360@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#b5ff00] px-7 py-3 text-[13px] font-bold uppercase tracking-wider text-black shadow-sm transition-all duration-200 hover:bg-[#9ee000] hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Book consultation</span>
              <ArrowUpRight className="size-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
