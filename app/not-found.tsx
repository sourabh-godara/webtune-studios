import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center lg:px-8">
        <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-signal-deep">
          404 Error
        </span>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(40px,7vw,72px)] font-bold tracking-tight text-ink">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-[16px] leading-relaxed text-ink-soft">
          The page you are looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[13px] font-semibold text-white shadow-md transition-all duration-200 hover:bg-ink/80"
          >
            <ArrowLeft className="size-4" />
            <span>Back to home</span>
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel px-6 py-3 text-[13px] font-semibold text-ink transition-colors hover:bg-paper"
          >
            <span>Explore our work</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
