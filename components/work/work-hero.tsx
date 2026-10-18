import { Fragment } from "react";

const categories = [
  { label: "E-commerce", count: "01" },
  { label: "Portfolio", count: "01" },
];

export function WorkHero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-dot-grid">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 20%, transparent 0%, var(--paper) 78%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[860px] px-6 pb-16 pt-24 text-center sm:pb-20 sm:pt-32 lg:px-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-deep">
          Selected work
        </span>
        <h1 className="mt-3 text-balance font-[family-name:var(--font-display)] text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[52px]">
          Websites and stores we&rsquo;ve built
        </h1>
        <p className="mx-auto mt-4 max-w-[540px] text-balance text-[16.5px] leading-relaxed text-ink-soft">
          A closer look at recent builds — from online stores to creator portfolios and fast, search-friendly business websites.
        </p>

        <div className="mt-9 flex items-center justify-center gap-6 sm:gap-10">
          {categories.map((cat, i) => (
            <Fragment key={cat.label}>
              {i > 0 && <span className="h-8 w-px bg-line-strong" aria-hidden />}
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-ink">
                  {cat.count}
                </p>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-faint">
                  {cat.label}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
