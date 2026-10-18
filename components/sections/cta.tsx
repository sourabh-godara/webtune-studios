"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { fadeUpVariants } from "@/components/animations";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function Cta() {
  const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919779043521";
  const whatsappNumber = rawWhatsApp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a quote for a website")}`;

  return (
    <section id="contact" className="relative overflow-hidden border-b border-line pt-24 pb-20 sm:pt-36 sm:pb-28">
      <div className="relative mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="relative select-none text-left"
        >
          <div className="relative inline-flex flex-wrap items-center font-[family-name:var(--font-display)] text-[clamp(68px,15vw,210px)] font-black leading-[0.88] tracking-[-0.05em]">
            <span className="text-ink">work</span>

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

        <div className="mt-14 pt-8 border-t border-line">
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(24px,4vw,38px)] font-bold tracking-tight text-ink">
            Planning a website or online store?{" "}
            <span className="underline decoration-ink decoration-2 underline-offset-8">
              Let&rsquo;s talk.
            </span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
              WebTune Studios — Mohali
            </p>
            <p className="mt-2 text-[14.5px] text-ink-soft">
              Sector 82, JLPL Industrial Area
            </p>
            <p className="font-mono text-[13px] text-ink-faint">
              Mohali, Punjab 140301, India
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
              Direct Inquiry
            </p>
            <a
              href="mailto:sourabh@webtunestudios.in"
              className="mt-2 block text-[14.5px] font-semibold text-ink transition-colors hover:text-[#7bb300]"
            >
              sourabh@webtunestudios.in
            </a>
            <p className="font-mono text-[13px] text-ink-faint">
              Direct response from our lead developer
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-start lg:col-span-4 lg:items-end">
            <div className="flex items-center gap-3">
              <div className="relative flex size-9 items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="WebTune Studios Logo"
                  width={36}
                  height={36}
                  className="size-full object-contain"
                />
              </div>
              <a
                href="tel:+919779043521"
                className="font-mono text-[17px] font-bold tracking-tight text-ink transition-colors hover:text-black"
              >
                +91 9779043521
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:sourabh@webtunestudios.in"
                className="inline-flex items-center gap-2 rounded-full bg-[#b5ff00] px-6 py-3 text-[13px] font-bold uppercase tracking-wider text-black shadow-sm transition-all duration-200 hover:bg-[#9ee000] hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Get a free quote</span>
                <ArrowUpRight className="size-4" strokeWidth={2.5} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-ink transition-all duration-200 hover:bg-paper hover:border-ink hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4 text-[#7bb300]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
