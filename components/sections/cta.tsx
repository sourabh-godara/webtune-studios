import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-line bg-dot-grid">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 50% 50%, transparent 0%, var(--paper) 80%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[640px] px-6 py-24 text-center sm:py-28 lg:px-8">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-deep">
          Let&rsquo;s talk
        </span>
        <h2 className="mt-3 text-balance font-[family-name:var(--font-display)] text-[34px] font-semibold leading-[1.12] tracking-[-0.01em] text-ink sm:text-[44px]">
          Ready to automate your business?
        </h2>
        <p className="mx-auto mt-4 max-w-[420px] text-balance text-[16px] leading-relaxed text-ink-soft">
          Let&rsquo;s build something amazing together. Book a free discovery
          call to walk through your goals.
        </p>
        <div className="mt-8 flex justify-center">
          <Button size="lg" asChild>
            <a href="mailto:webtunestudio360@gmail.com">
              Schedule your free consultation
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
