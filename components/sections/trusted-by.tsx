import { Code2, Globe2, Settings2, Zap, TrendingUp } from "lucide-react";

const logos = [
  { name: "Acme Corp", icon: Code2 },
  { name: "GlobalNet", icon: Globe2 },
  { name: "TechFlow", icon: Settings2 },
  { name: "ZapMedia", icon: Zap },
  { name: "GrowthInc", icon: TrendingUp },
];

export function TrustedBy() {
  return (
    <section className="border-b border-line bg-panel/50">
      <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-8">
        <p className="mb-7 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
          Trusted by forward-thinking companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
          {logos.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-ink-faint transition-colors hover:text-ink-soft"
            >
              <Icon className="size-4" strokeWidth={1.75} />
              <span className="text-[14.5px] font-semibold tracking-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
