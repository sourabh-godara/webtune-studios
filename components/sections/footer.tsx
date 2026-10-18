"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-line bg-panel/30 py-12 lg:py-16">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-line">
          {/* Col 1: Brand & NAP */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="WebTune Studios Logo"
                width={28}
                height={28}
                className="size-7 object-contain"
              />
              <span className="font-sans text-[18px] font-bold tracking-tight text-ink">
                WebTune<span className="text-ink-faint font-normal">Studios</span>
              </span>
            </Link>

            <p className="text-[14px] leading-relaxed text-ink-soft max-w-sm">
              Web design and development agency in Mohali. Building fast business websites and custom online stores.
            </p>

            <div className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
              <p className="font-medium text-ink">WebTune Studios</p>
              <p>Sector 82, JLPL Industrial Area</p>
              <p>Mohali, Punjab, India</p>
              <p className="mt-1">
                <a
                  href="tel:+919779043521"
                  className="font-mono text-ink hover:text-[#7bb300] transition-colors"
                >
                  +91 9779043521
                </a>
                {" · "}
                <a
                  href="mailto:sourabh@webtunestudios.in"
                  className="font-mono text-ink hover:text-[#7bb300] transition-colors"
                >
                  sourabh@webtunestudios.in
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/#home" className="text-[13.5px] text-ink-soft hover:text-ink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[13.5px] text-ink-soft hover:text-ink transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[13.5px] text-ink-soft hover:text-ink transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-[13.5px] text-ink-soft hover:text-ink transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-[13.5px] text-ink-soft hover:text-ink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Locations & Industry Services */}
          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
              Locations &amp; Solutions
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href="/web-development-company-mohali"
                  className="text-[13.5px] text-ink-soft hover:text-ink transition-colors"
                >
                  Web Development Company in Mohali
                </Link>
              </li>
              <li>
                <Link
                  href="/real-estate-website-development-mohali"
                  className="text-[13.5px] text-ink-soft hover:text-ink transition-colors"
                >
                  Real Estate Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurant-website-design-mohali"
                  className="text-[13.5px] text-ink-soft hover:text-ink transition-colors"
                >
                  Restaurant Website Design
                </Link>
              </li>
              <li>
                <Link
                  href="/web-development-company-mohali"
                  className="text-[13.5px] text-ink-soft hover:text-ink transition-colors"
                >
                  Chandigarh, Panchkula &amp; Tricity
                </Link>
              </li>
              <li>
                <span className="text-[13.5px] text-ink-faint">
                  Serving clients across India &amp; UAE
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/privacy-policy"
                className="text-[12.5px] text-ink-faint hover:text-ink transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-mono text-[12px] text-ink-faint">
            &copy; 2026 WebTune Studios. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-mono text-[11px] text-ink-soft transition-colors hover:text-black"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
