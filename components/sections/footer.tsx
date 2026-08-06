import Link from "next/link";
import { Code2, Globe, MessageCircle, Mail, Share2, MapPin, Phone } from "lucide-react";

const serviceLinks = [
  "Website development",
  "Business automation",
  "AI solutions",
  "Ecommerce stores",
];

const companyLinks = [
  { label: "About us", href: "/#home" },
  { label: "Portfolio", href: "/work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  { icon: Globe, label: "Website", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
  { icon: Share2, label: "Share", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-panel">
      <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-[5px] bg-signal text-white">
                <Code2 className="size-4" strokeWidth={2.5} />
              </span>
              <span className="font-[family-name:var(--font-display)] text-[17px] font-semibold tracking-tight text-ink">
                WebTune
              </span>
            </Link>
            <p className="mt-4 max-w-[260px] text-[14px] leading-relaxed text-ink-soft">
              We build premium websites and automate repetitive business
              tasks, so you can focus on growing your business.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-8 items-center justify-center rounded-full border border-line-strong text-ink-soft transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon className="size-3.5" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
              Services
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="/#services"
                    className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
              Company
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
              Get in touch
            </p>
            <ul className="mt-4 flex flex-col gap-3.5 text-[14px] text-ink-soft">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-ink-faint" strokeWidth={1.75} />
                <a
                  href="mailto:webtunestudio360@gmail.com"
                  className="break-all transition-colors hover:text-ink"
                >
                  webtunestudio360@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-ink-faint" strokeWidth={1.75} />
                <a href="tel:+919779043521" className="transition-colors hover:text-ink">
                  +91 9779043521
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-ink-faint" strokeWidth={1.75} />
                <span>Mohali, Punjab</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-3 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <p className="font-mono text-[12px] text-ink-faint">
            © 2026 WebTune Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-[12px] text-ink-faint transition-colors hover:text-ink">
              Privacy policy
            </a>
            <a href="#" className="font-mono text-[12px] text-ink-faint transition-colors hover:text-ink">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
