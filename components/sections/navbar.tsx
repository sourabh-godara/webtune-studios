"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Mohali", href: "/web-development-company-mohali" },
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
          scrolled ? "h-[76px]" : "h-[100px]"
        )}
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex size-10 items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="WebTune Studios Logo"
              width={40}
              height={40}
              priority
              className="size-full object-contain"
            />
          </div>
          <span className="font-sans text-[18px] font-bold tracking-tight text-ink sm:inline-block">
            WebTune<span className="text-ink-faint font-normal">Studios</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/work"
                ? pathname === "/work"
                : link.href === "/web-development-company-mohali"
                ? pathname === "/web-development-company-mohali"
                : pathname === "/" && link.href === "/#home";

            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-sans text-[16px] font-medium leading-[20px] tracking-[0px] text-start transition-colors hover:text-ink",
                  active
                    ? "text-ink font-semibold"
                    : "text-ink-soft"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-ink/80 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Get a quote</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

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

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
          open
            ? "max-h-[460px] border-t border-line bg-paper/98 backdrop-blur-xl shadow-xl"
            : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 pt-4 pb-2">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2.5 font-sans text-[17px] font-medium leading-[20px] tracking-[0px] text-start text-ink-soft transition-colors hover:text-ink"
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
            <span>Get a quote</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
