import { Globe, Zap, Bot, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: "01",
    icon: Globe,
    title: "Website development",
    description:
      "High-converting, lightning-fast business websites, landing pages, and ecommerce stores, built with modern frameworks and tuned for search.",
  },
  {
    id: "02",
    icon: Zap,
    title: "Business automation",
    description:
      "Automated lead capture, bulk WhatsApp messaging, CRM updates, and customer follow-ups. We remove the manual work from your daily operations.",
  },
  {
    id: "03",
    icon: Bot,
    title: "AI solutions",
    description:
      "Custom AI chatbots, intelligent customer support agents, and content generation pipelines, trained and tailored to your specific niche.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-line py-24 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="mx-auto max-w-[600px] text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-deep">
            What we build
          </span>
          <h2 className="mt-3 text-balance font-[family-name:var(--font-display)] text-[34px] font-semibold tracking-[-0.01em] text-ink sm:text-[42px]">
            Our services
          </h2>
          <p className="mt-4 text-balance text-[16px] leading-relaxed text-ink-soft">
            End-to-end digital solutions that transform how your business
            operates and shows up online.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col rounded-md border border-line-strong bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_16px_36px_-20px_rgba(20,20,15,0.25)]"
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="flex size-11 items-center justify-center rounded-[6px] bg-signal-soft text-signal-deep">
                  <service.icon className="size-5" strokeWidth={2} />
                </span>
                <span className="font-mono text-[11px] text-ink-faint">
                  MODULE / {service.id}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-[19px] font-semibold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-ink transition-colors group-hover:text-signal-deep"
              >
                Learn more
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
