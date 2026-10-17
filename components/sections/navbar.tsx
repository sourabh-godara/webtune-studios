"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Expertise", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-paper/95 backdrop-blur-xl shadow-[0_1px_0_var(--line)]"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-[1470px] items-center justify-between px-6 transition-all duration-300 sm:px-10 lg:px-14 overflow-visible",
          scrolled ? "h-[80px]" : "h-[116px]"
        )}
      >
        {/* Logo matching circular black emblem in screenshot */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex size-11 items-center justify-center rounded-full bg-ink text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#15140f" />
              <path
                d="M7 16L10 8H14L17 16M9 13.5H15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="15.5" cy="8.5" r="2" fill="var(--signal)" />
            </svg>
          </span>
          <span className="hidden font-sans text-[19px] font-bold tracking-tight text-ink sm:inline-block">
            WebTune<span className="text-ink-faint font-normal">Studios</span>
          </span>
        </Link>

        {/* Centered nav links matching exact text properties: Inter, 17px, 400 normal, 32px line height, 0px letter spacing */}
        <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
          {links.map((link) => {
            const isAgency = link.label === "Agency";
            const active =
              link.href === "/work"
                ? pathname === "/work"
                : pathname === "/" && link.href === "/#home";

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-sans text-[18px] font-medium leading-[20px] tracking-[0px] text-start transition-colors hover:text-ink",
                  isAgency || active
                    ? "text-ink"
                    : "text-ink-soft"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA matching black pill button in screenshot */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-[14px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-ink/80 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Hire agency</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full bg-panel border border-line text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <div className="relative flex size-5 flex-col items-center justify-center">
            <span
              className={cn(
                "absolute h-[2px] w-5 rounded-full bg-ink transition-all duration-300",
                open ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "absolute h-[2px] w-5 rounded-full bg-ink transition-all duration-300",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute h-[2px] w-5 rounded-full bg-ink transition-all duration-300",
                open ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
          open
            ? "max-h-[420px] border-t border-line bg-paper/98 backdrop-blur-xl shadow-xl"
            : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 pt-4 pb-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 font-sans text-[18px] font-medium leading-[20px] tracking-[0px] text-start text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 pb-6 pt-2">
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 text-[14px] font-semibold text-white shadow-md"
          >
            <span>Hire agency</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
