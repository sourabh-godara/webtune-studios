"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Agency", href: "/#services" },
  { label: "Expertise", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-line py-10">
      <div className="mx-auto flex max-w-[var(--container-max)] flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        {/* Navigation links matching bottom of reference screenshot */}
        <nav className="flex flex-wrap items-center gap-7 sm:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright & Scroll to top */}
        <div className="flex items-center gap-6">
          <p className="font-mono text-[12px] text-ink-faint">
            &copy; 2026 WebTune Studios is Proudly Powered by WebTune
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-mono text-[11px] text-ink-soft transition-colors hover:text-black"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="size-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
