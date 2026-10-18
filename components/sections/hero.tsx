"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { SunburstLines } from "@/components/sunburst-lines";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const sunburstX = useTransform(smoothMouseX, [-0.5, 0.5], [-25, 25]);
  const sunburstY = useTransform(smoothMouseY, [-0.5, 0.5], [-25, 25]);

  const wordX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const wordY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

  const headlineX = useTransform(smoothMouseX, [-0.5, 0.5], [8, -8]);
  const headlineY = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);

  const dotsX = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
  const dotsY = useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const accentColor = "#b5ff00";
  const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919779043521";
  const whatsappNumber = rawWhatsApp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a quote for a website")}`;

  return (
    <section id="home" className="relative overflow-hidden pt-0">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex min-h-[92vh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:min-h-screen"
      >
        <motion.div
          style={{ x: sunburstX, y: sunburstY }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0"
          aria-hidden
        >
          <SunburstLines color={accentColor} />
        </motion.div>

        <motion.div
          style={{ x: dotsX, y: dotsY }}
          className="pointer-events-none absolute inset-0 select-none z-10"
          aria-hidden
        >
          <motion.span
            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[40%] top-[20%] size-2 rounded-full bg-ink"
          />
          <motion.span
            animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute left-[14%] top-[30%] size-2.5 rounded-full bg-[#b5ff00]"
          />
          <motion.span
            animate={{ y: [0, -6, 0], x: [0, -3, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute right-[17%] top-[58%] size-2 rounded-full bg-[#b5ff00]"
          />
        </motion.div>

        <motion.div
          style={{ x: wordX, y: wordY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[120vw] select-none text-center z-1"
          aria-hidden
        >
          <div className="relative inline-flex items-center justify-center">
            <span className="font-[family-name:var(--font-display)] text-[clamp(240px,46vw,600px)] font-black tracking-[-0.03em] leading-none text-[#b5ff00]">
              creative
            </span>
          </div>
        </motion.div>

        <motion.div
          style={{ x: headlineX, y: headlineY }}
          className="relative z-20 mx-auto max-w-[1100px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="mb-4 inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink sm:text-[12px]">
              Web design and development agency
            </span>

            <h1 className="font-[family-name:var(--font-display)] text-[clamp(42px,6.8vw,88px)] font-bold leading-[1.05] tracking-[-0.035em] text-ink text-balance">
              Websites for growing businesses
            </h1>

            <p className="mt-6 max-w-[680px] text-[16px] leading-relaxed text-ink-soft sm:text-[18px] text-balance">
              We design and build fast, mobile-friendly websites and online stores. Based in Mohali, working with clients across India and the UAE.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-ink/80 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Get a free quote</span>
                <ArrowUpRight className="size-4" strokeWidth={2.5} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-ink shadow-sm transition-all duration-200 hover:bg-paper hover:border-ink hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4 text-[#7bb300]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative py-12 lg:py-16 border-y border-line">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap items-center justify-between gap-y-4 px-6 lg:px-8">
          <div className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-[13px] font-semibold uppercase tracking-[0.04em] text-ink lg:text-[14px]">
            <svg className="size-4 shrink-0 fill-current text-ink" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
            <span>Web design and development</span>
          </div>

          <div className="hidden sm:block h-px w-[40px] lg:w-[60px] xl:w-[80px] bg-ink/40" aria-hidden="true" />

          <div className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-[13px] font-semibold uppercase tracking-[0.04em] text-ink lg:text-[14px]">
            <svg className="size-4 shrink-0 fill-current text-ink" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <span>Based in Mohali, Punjab</span>
          </div>

          <div className="hidden sm:block h-px w-[40px] lg:w-[60px] xl:w-[80px] bg-ink/40" aria-hidden="true" />

          <div className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-[13px] font-semibold uppercase tracking-[0.04em] text-ink lg:text-[14px]">
            <svg className="size-4 shrink-0 fill-current text-ink" viewBox="0 0 16 16" aria-hidden="true">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
            <span>Clients in India and the UAE</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden py-20 lg:py-28">
        <div
          className="pointer-events-none absolute -bottom-10 right-0 select-none whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(120px,22vw,300px)] font-bold leading-none tracking-[-0.05em] text-[#b5ff00] z-0"
          aria-hidden
        >
          about
        </div>

        <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            {/* TODO: Supply real about image to replace about-placeholder.webp */}
            <Image
              src="/images/about-placeholder.webp"
              alt="WebTune Studios - Web design and development agency in Mohali"
              width={945}
              height={785}
              priority
              className="w-full h-auto object-cover grayscale select-none"
            />
          </div>

          <div className="w-full lg:w-1/2 px-6 pt-10 sm:px-10 lg:pl-12 lg:pr-16 lg:pt-0">
            <h2 className="relative z-10 font-[family-name:var(--font-display)] font-semibold text-[clamp(34px,4.8vw,68px)] leading-[1.08] tracking-[-0.035em] text-ink lg:-ml-[10vw] xl:-ml-[12vw]">
              We build websites that turn visitors into enquiries.
            </h2>

            <p className="mt-8 font-sans text-[16px] font-normal leading-[30px] tracking-[0px] text-ink-soft max-w-[560px]">
              WebTune Studios is a small web design and development agency in Mohali. We build business websites and online stores, and we work closely with each client so the result fits how their business actually runs. Recent projects include an eCommerce platform for ActiveWell Pharma built with Next.js and Supabase, and a cinematic portfolio site for a VFX artist. We focus on fast loading, clear structure and easy ways for customers to contact you.
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/work"
                className="group relative inline-flex items-center overflow-hidden rounded-full py-3.5 pl-5 pr-7 text-[13px] font-bold uppercase tracking-[0.08em] text-ink transition-all duration-300 hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 -translate-y-1/2 size-12 rounded-full bg-[#b5ff00] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full group-hover:rounded-full"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <span>See our work</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
