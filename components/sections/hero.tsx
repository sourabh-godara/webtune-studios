import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PipelineStrip } from "@/components/pipeline-diagram";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-line bg-dot-grid">
      {/* fade the dot-grid toward the edges so it reads as texture, not wallpaper */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, transparent 0%, var(--paper) 78%)",
        }}
        aria-hidden
      />

      {/* corner schematic labels */}
      <div className="relative mx-auto hidden max-w-[1240px] px-6 pt-6 font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-faint sm:flex sm:justify-between lg:px-8">
        <span>Mohali, IN — 30.70°N 76.72°E</span>
        <span>Systems: Web / Automation / AI</span>
      </div>

      <div className="relative mx-auto flex max-w-[860px] flex-col items-center px-6 pb-20 pt-14 text-center sm:pb-24 sm:pt-16 lg:px-8">
        <div
          className="mb-7 flex items-center gap-2 rounded-full border border-line-strong bg-panel px-3.5 py-1.5 opacity-0 [animation:var(--animate-fade-up)]"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-soft">
            Accepting new projects — Q3 2026
          </span>
        </div>

        <h1
          className="text-balance font-[family-name:var(--font-display)] text-[42px] font-semibold leading-[1.08] tracking-[-0.02em] text-ink opacity-0 [animation:var(--animate-fade-up)] sm:text-[56px] lg:text-[66px]"
          style={{ animationDelay: "90ms" }}
        >
          Websites &amp; automation
          <br />
          that <span className="text-signal">grow your business</span>
        </h1>

        <p
          className="mt-6 max-w-[560px] text-balance text-[17px] leading-relaxed text-ink-soft opacity-0 [animation:var(--animate-fade-up)] sm:text-[18px]"
          style={{ animationDelay: "180ms" }}
        >
          We build premium websites and automate the repetitive parts of
          running a business — so your team can focus on the work that
          actually grows revenue.
        </p>

        <div
          className="mt-9 flex flex-col items-center gap-3 opacity-0 [animation:var(--animate-fade-up)] sm:flex-row"
          style={{ animationDelay: "270ms" }}
        >
          <Button size="lg" asChild>
            <a href="#contact">
              Get free consultation
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#services">
              Explore services
              <ChevronRight className="size-4" />
            </a>
          </Button>
        </div>

        <div
          className="mt-16 w-full opacity-0 [animation:var(--animate-fade-up)] sm:mt-20"
          style={{ animationDelay: "360ms" }}
        >
          <PipelineStrip />
        </div>
      </div>
    </section>
  );
}
