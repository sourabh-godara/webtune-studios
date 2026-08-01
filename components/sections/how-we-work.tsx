import { AutomationFlowCard } from "@/components/pipeline-diagram";

const steps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "We analyze your business, identify bottlenecks, and map out a strategy built around your goals.",
  },
  {
    id: "02",
    title: "Design & architecture",
    description:
      "We create premium UI/UX designs and architect automation workflows that scale with you.",
  },
  {
    id: "03",
    title: "Development",
    description:
      "Our engineers build your website and wire up the automations, using modern, maintainable tech.",
  },
  {
    id: "04",
    title: "Launch & support",
    description:
      "We deploy the system, train your team, and stay on for ongoing support around the clock.",
  },
];

export function HowWeWork() {
  return (
    <section id="process" className="border-b border-line bg-panel/40 py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-16 px-6 lg:grid-cols-[1fr_0.85fr] lg:gap-12 lg:px-8">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-deep">
            The process
          </span>
          <h2 className="mt-3 text-balance font-[family-name:var(--font-display)] text-[34px] font-semibold tracking-[-0.01em] text-ink sm:text-[42px]">
            How we work
          </h2>
          <p className="mt-4 max-w-[440px] text-balance text-[16px] leading-relaxed text-ink-soft">
            A transparent, four-stage process built to deliver exceptional
            results quickly, without cutting corners on quality.
          </p>

          <ol className="mt-11 flex flex-col">
            {steps.map((step, i) => (
              <li key={step.id} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong bg-panel font-mono text-[12px] font-semibold text-ink">
                    {step.id}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="my-1 w-px flex-1 bg-line-strong" aria-hidden />
                  )}
                </div>
                <div className={i < steps.length - 1 ? "pb-9" : ""}>
                  <h3 className="text-[16.5px] font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-[380px] text-[14.5px] leading-relaxed text-ink-soft">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lg:pt-2">
          <div className="lg:sticky lg:top-28">
            <p className="mb-3 px-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
              Example: new-lead automation
            </p>
            <AutomationFlowCard />
          </div>
        </div>
      </div>
    </section>
  );
}
