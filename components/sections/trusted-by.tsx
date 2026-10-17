"use client";

import { Code2, Globe2, Settings2, Zap, TrendingUp, Layers, Cpu, Sparkles } from "lucide-react";

const clients = [
  { name: "Acme Corp", icon: Code2 },
  { name: "GlobalNet", icon: Globe2 },
  { name: "TechFlow Systems", icon: Settings2 },
  { name: "ZapMedia", icon: Zap },
  { name: "GrowthInc", icon: TrendingUp },
  { name: "LayerCraft", icon: Layers },
  { name: "Nexus AI", icon: Cpu },
  { name: "Verve Digital", icon: Sparkles },
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-panel/60 py-12">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          Trusted by high-growth startups & businesses
        </p>
      </div>

      {/* Marquee with left/right fade masks */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div
          className="marquee-track flex items-center gap-12 sm:gap-16"
          style={{ "--marquee-duration": "28s" } as React.CSSProperties}
        >
          {/* First set of logos */}
          {clients.map(({ name, icon: Icon }, idx) => (
            <div
              key={`logo-1-${idx}`}
              className="group flex shrink-0 items-center gap-3 text-ink-faint transition-all duration-300 hover:text-ink cursor-default"
            >
              <div className="flex size-9 items-center justify-center rounded-md border border-line bg-paper transition-colors group-hover:border-signal/40 group-hover:bg-signal-soft/40">
                <Icon className="size-4 transition-colors group-hover:text-signal" strokeWidth={1.8} />
              </div>
              <span className="font-sans text-[14px] font-medium tracking-tight text-ink-soft transition-colors group-hover:text-ink">
                {name}
              </span>
            </div>
          ))}

          {/* Duplicate set for seamless infinite loop */}
          {clients.map(({ name, icon: Icon }, idx) => (
            <div
              key={`logo-2-${idx}`}
              className="group flex shrink-0 items-center gap-3 text-ink-faint transition-all duration-300 hover:text-ink cursor-default"
            >
              <div className="flex size-9 items-center justify-center rounded-md border border-line bg-paper transition-colors group-hover:border-signal/40 group-hover:bg-signal-soft/40">
                <Icon className="size-4 transition-colors group-hover:text-signal" strokeWidth={1.8} />
              </div>
              <span className="font-sans text-[14px] font-medium tracking-tight text-ink-soft transition-colors group-hover:text-ink">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
