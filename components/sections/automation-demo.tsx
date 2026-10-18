"use client";

import { useEffect, useState } from "react";
import { Globe, Users, MessageSquare, Bell, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = {
  icon: typeof Globe;
  label: string;
  meta: string;
  detail: string;
  timestamp: string;
};

const steps: Step[] = [
  {
    icon: Globe,
    label: "Lead captures form",
    meta: "webtunestudios.com",
    detail: "User submitted consultation request for E-commerce rebrand",
    timestamp: "0.0s",
  },
  {
    icon: Users,
    label: "CRM sync & qualification",
    meta: "HubSpot · new contact created",
    detail: "Assigned lead score 92, verified work email & domain",
    timestamp: "+0.8s",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp welcome sent",
    meta: "WhatsApp Cloud API · automated reply",
    detail: "Personalized brochure & Calendly invitation link delivered",
    timestamp: "+2.1s",
  },
  {
    icon: Bell,
    label: "Team notified in real-time",
    meta: "Slack #new-leads · notification bot",
    detail: "Lead summary card posted with direct CRM shortcuts",
    timestamp: "+3.4s",
  },
];

const clientLogos = [
  { name: "Walmart*", weight: "font-bold text-[22px] tracking-tight" },
  { name: "NETFLIX", weight: "font-black text-[20px] tracking-[0.14em]" },
  { name: "vimeo", weight: "font-bold text-[22px] italic tracking-tight" },
  { name: "YAHOO!", weight: "font-black text-[21px] tracking-tight" },
  { name: "amazon", weight: "font-bold text-[22px] tracking-tight" },
];

export function AutomationDemo() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-dark relative z-10 overflow-hidden bg-[var(--dark-bg)] py-24 text-white sm:py-32">
      <div className="relative mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16 pb-20 border-b border-white/10">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-3">
              <span className="font-[family-name:var(--font-display)] text-[56px] font-black tracking-tight text-white leading-none sm:text-[64px]">
                4.82
              </span>
              <div className="flex items-center gap-1 rounded bg-[#b5ff00] px-2 py-0.5 text-black">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3 fill-black text-black" />
                ))}
              </div>
            </div>

            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.14em] text-white/50">
              Clutch &amp; Google Reviews
            </p>

            <div className="mt-8 flex items-center gap-2.5">
              <button
                className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#b5ff00] hover:text-[#b5ff00]"
                aria-label="Previous quote"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-[#b5ff00] hover:text-[#b5ff00]"
                aria-label="Next quote"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <blockquote className="font-[family-name:var(--font-display)] text-[clamp(24px,3.5vw,36px)] font-medium leading-[1.28] tracking-tight text-white/95">
              &ldquo;The <span className="font-bold underline decoration-[#b5ff00] decoration-2 underline-offset-8">wonderful services</span> you offer locally are great for our community. People are relieved to have seamless web and automation systems that just work.&rdquo;
            </blockquote>
            <p className="mt-6 font-mono text-[13px] uppercase tracking-wider text-[#b5ff00]">
              webtunestudios.com
            </p>
          </div>
        </div>

        <div className="pt-20 pb-20 border-b border-white/10">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#b5ff00]/30 bg-[#b5ff00]/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-[#b5ff00]">
                <span>Signature Automation</span>
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-[26px] font-bold text-white sm:text-[32px]">
                Watch a new lead close in 4 seconds.
              </h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-[12px] text-white/60">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#b5ff00] opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[#b5ff00]" />
              </span>
              <span>Live Engine · Step {activeStep + 1} of 4</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;

              return (
                <div
                  key={step.label}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "cursor-pointer rounded-lg border p-5 transition-all duration-300",
                    isActive
                      ? "border-[#b5ff00] bg-[#b5ff00]/10 shadow-[0_0_30px_rgba(181,255,0,0.2)]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        "flex size-9 items-center justify-center rounded-md transition-colors",
                        isActive ? "bg-[#b5ff00] text-black" : "bg-white/10 text-white/60"
                      )}
                    >
                      <Icon className="size-4" strokeWidth={2} />
                    </div>
                    <span className="font-mono text-[10.5px] text-white/40">
                      {step.timestamp}
                    </span>
                  </div>

                  <h4
                    className={cn(
                      "mt-4 text-[15px] font-semibold transition-colors",
                      isActive ? "text-[#b5ff00]" : "text-white"
                    )}
                  >
                    {step.label}
                  </h4>
                  <p className="mt-1 font-mono text-[11px] text-white/50">
                    {step.meta}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="pt-16">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-white/40 mb-10">
            Trusted by modern enterprise brands
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 sm:justify-between sm:gap-8">
            {clientLogos.map((logo) => (
              <span
                key={logo.name}
                className={`${logo.weight} text-white/80 transition-colors hover:text-[#b5ff00] cursor-default`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
