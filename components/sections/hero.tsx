"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, MapPin, Award, Sparkles } from "lucide-react";

export function Hero() {
  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax layers
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

  return (
    <section id="home" className="relative overflow-hidden pt-0">
      {/* =================================================================
          PART 1: EXACT LANDING VIEWPORT (Matches Reference Top Screen)
         ================================================================= */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative flex min-h-[92vh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12 sm:min-h-screen"
      >
        {/* Rotating Radial Sunburst in Electric Lime */}
        <motion.div
          style={{ x: sunburstX, y: sunburstY }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none z-0"
          aria-hidden
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-center"
          >
            <svg
              width="680"
              height="680"
              viewBox="0 0 680 680"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-95"
            >
              {Array.from({ length: 72 }).map((_, i) => {
                const angle = (i * 5 * Math.PI) / 180;
                const innerRadius = 75;
                const outerRadius = 310;
                const x1 = 340 + innerRadius * Math.cos(angle);
                const y1 = 340 + innerRadius * Math.sin(angle);
                const x2 = 340 + outerRadius * Math.cos(angle);
                const y2 = 340 + outerRadius * Math.sin(angle);

                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={accentColor}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>
          </motion.div>
        </motion.div>

        {/* Floating Satellite Micro-Dots */}
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

        {/* Giant Solid "creative" in Electric Lime */}
        <motion.div
          style={{ x: wordX, y: wordY }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-none absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[120vw] select-none text-center z-1"
          aria-hidden
        >
          <div className="relative inline-flex items-center justify-center">
            <span className="font-[family-name:var(--font-display)] text-[clamp(260px,49vw,630px)] font-black tracking-[-0.03em] leading-none text-[#b5ff00]">
              creative
            </span>
            {/* Giant Circular Dot for the 'i' */}

          </div>
        </motion.div>

        {/* Centered Headline */}
        <motion.div
          style={{ x: headlineX, y: headlineY }}
          className="relative z-20 mx-auto max-w-[1100px] text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(44px,7.2vw,92px)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
              We&rsquo;re a creative
              <br />
              digital agency
            </h1>
          </motion.div>
        </motion.div>
      </div>

      {/* =================================================================
          TAGLINE METADATA STRIP (Matches Reference Image)
         ================================================================= */}
      <div className="relative py-12 lg:py-16">
        <div className="mx-auto flex max-w-[var(--container-max)] flex-wrap items-center justify-between gap-y-4 px-6 lg:px-8">
          {/* Item 1: Full service web design agency */}
          <div className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-[13px] font-semibold uppercase tracking-[0.04em] text-ink lg:text-[14px]">
            <svg className="size-4 shrink-0 fill-current text-ink" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
            <span>Full service web design agency</span>
          </div>

          {/* Separator Line 1 */}
          <div className="hidden sm:block h-px w-[40px] lg:w-[60px] xl:w-[80px] bg-ink/40" aria-hidden="true" />

          {/* Item 2: Located at Chandigarh */}
          <div className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-[13px] font-semibold uppercase tracking-[0.04em] text-ink lg:text-[14px]">
            <svg className="size-4 shrink-0 fill-current text-ink" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <span>Located at Chandigarh</span>
          </div>

          {/* Separator Line 2 */}
          <div className="hidden sm:block h-px w-[40px] lg:w-[60px] xl:w-[80px] bg-ink/40" aria-hidden="true" />

          {/* Item 3: Award winning agency */}
          <div className="flex items-center gap-2.5 font-[family-name:var(--font-display)] text-[13px] font-semibold uppercase tracking-[0.04em] text-ink lg:text-[14px]">
            <svg className="size-4 shrink-0 fill-current text-ink" viewBox="0 0 16 16" aria-hidden="true">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
            </svg>
            <span>Award winning agency</span>
          </div>
        </div>
      </div>

      {/* =================================================================
          PART 2: ABOUT AGENCY SECTION (Matches Reference Section 3)
          Left: Grayscale Editorial Visual | Right: "We create unique..." + "ABOUT AGENCY" + giant "about" watermark
         ================================================================= */}
      <div className="relative overflow-hidden py-20 lg:py-28">
        {/* Giant "about" watermark in Electric Lime (Matches Reference Screenshot) */}
        <div
          className="pointer-events-none absolute -bottom-10 right-0 select-none whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(120px,22vw,300px)] font-bold leading-none tracking-[-0.05em] text-[#b5ff00] z-0"
          aria-hidden
        >
          about
        </div>

        <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center">
          {/* Left: Editorial Photography */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://crafto.themezaa.com/web-agency/wp-content/uploads/sites/32/2024/03/demo-web-agency-01.jpg.webp"
              alt="WebTune Studios - We create unique digital experiences"
              width={945}
              height={785}
              decoding="async"
              loading="lazy"
              className="w-full h-auto object-cover grayscale select-none"
            />
          </div>

          {/* Right: Story + Editorial Overlapping Title */}
          <div className="w-full lg:w-1/2 px-6 pt-10 sm:px-10 lg:pl-12 lg:pr-16 lg:pt-0">
            {/* Title overlaps photo on desktop (-ml-[12vw] to -ml-[15vw]) */}
            <h2 className="relative z-10 font-[family-name:var(--font-display)] font-semibold text-[clamp(38px,5.2vw,78px)] leading-[1.04] tracking-[-0.038em] text-ink lg:-ml-[12vw] xl:-ml-[15vw]">
              We create unique
              <br />
              digital experiences.
            </h2>

            <p className="mt-8 font-sans text-[17px] font-normal leading-[32px] tracking-[0px] text-ink-soft max-w-[540px]">
              We are excited for our work and how it positively impacts clients. With over{" "}
              <span className="font-semibold text-ink underline underline-offset-4 decoration-ink decoration-1">
                12 years of experience
              </span>{" "}
              we have been constantly providing excellent web solutions which is best in-class experience for our clients. We mainly focus on clients and their requirements.
            </p>

            {/* Expandable LTR Button with Lime Accent Circle */}
            <div className="mt-8 sm:mt-10">
              <a
                href="#services"
                className="group relative inline-flex items-center overflow-hidden rounded-full py-3.5 pl-5 pr-7 text-[13px] font-bold uppercase tracking-[0.08em] text-ink transition-all duration-300 hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-1/2 -translate-y-1/2 size-12 rounded-full bg-[#b5ff00] transition-all duration-300 ease-out group-hover:w-full group-hover:h-full group-hover:rounded-full"
                />
                <span className="relative z-10 flex items-center gap-2">
                  <span>About agency</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
