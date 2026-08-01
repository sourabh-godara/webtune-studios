const stats = [
  { value: "50", suffix: "+", label: "Projects delivered" },
  { value: "100", suffix: "+", label: "Automations built" },
  { value: "98", suffix: "%", label: "Client satisfaction" },
  { value: "24", suffix: "/7", label: "Expert support" },
];

export function Stats() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-px bg-line lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center gap-1.5 bg-paper px-6 py-14 text-center"
          >
            <p className="font-[family-name:var(--font-display)] text-[38px] font-semibold tracking-tight text-ink sm:text-[44px]">
              {stat.value}
              <span className="text-signal">{stat.suffix}</span>
            </p>
            <p className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-soft">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
