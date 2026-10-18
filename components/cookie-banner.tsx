"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("webtune_cookie_consent");
      if (!consent) {
        setShowBanner(true);
      }
    } catch {
      // localStorage may be disabled in some private modes
    }
  }, []);

  const handleConsent = (status: "granted" | "denied") => {
    try {
      localStorage.setItem("webtune_cookie_consent", status);
      window.dispatchEvent(new Event("webtune_consent_change"));
    } catch {
      // Ignore
    }
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Cookie consent"
      role="region"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-lg border border-line-strong bg-paper/95 p-4 shadow-2xl backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md"
    >
      <div className="flex flex-col gap-3">
        <p className="text-[13px] leading-relaxed text-ink-soft">
          We use cookies to analyze site traffic and improve performance. No personal information is sold. See our{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-ink underline underline-offset-2 hover:text-[#7bb300]"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleConsent("granted")}
            className="rounded-full bg-ink px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-white transition-colors hover:bg-ink/80"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent("denied")}
            className="rounded-full border border-line-strong px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-panel"
          >
            Decline
          </button>
        </div>
      </div>
    </aside>
  );
}
