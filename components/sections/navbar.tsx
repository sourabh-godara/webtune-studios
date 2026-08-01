"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-[5px] bg-signal text-white">
            <Code2 className="size-4" strokeWidth={2.5} />
          </span>
          <span className="font-[family-name:var(--font-display)] text-[17px] font-semibold tracking-tight text-ink">
            WebTune<span className="text-ink-faint"> Studios</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/work" ? pathname === "/work" : pathname === "/" && link.href === "/#home";
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "font-mono text-[12.5px] uppercase tracking-[0.08em] transition-colors hover:text-ink",
                  active ? "text-ink" : "text-ink-soft",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/work">View work</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/#contact">
              Get consultation
              <ArrowUpRight className="size-3.5" />
            </Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-[5px] border border-line-strong text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[13px] uppercase tracking-[0.08em] text-ink-soft"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-2.5">
            <Button variant="outline" asChild>
              <Link href="/work" onClick={() => setOpen(false)}>
                View work
              </Link>
            </Button>
            <Button asChild>
              <Link href="/#contact" onClick={() => setOpen(false)}>
                Get consultation
                <ArrowUpRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
