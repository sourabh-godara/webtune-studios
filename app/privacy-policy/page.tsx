import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | WebTune Studios",
  description:
    "Privacy policy and data handling practices of WebTune Studios, Sector 82, JLPL Industrial Area, Mohali, Punjab.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <header className="border-b border-line pb-8">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Legal &amp; Privacy
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-[36px] font-bold tracking-tight text-ink sm:text-[46px]">
              Privacy Policy
            </h1>
            <p className="mt-2 font-mono text-[13px] text-ink-faint">
              Last updated: October 19, 2026
            </p>
          </header>

          <article className="prose prose-neutral mt-10 space-y-8 text-[15px] leading-relaxed text-ink-soft">
            <section>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-ink">
                1. Overview
              </h2>
              <p className="mt-2">
                WebTune Studios (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a web design and development agency based in Sector 82, JLPL Industrial Area, Mohali, Punjab, India. This Privacy Policy explains how we collect, use, and protect information when you visit our website (https://www.webtunestudios.in).
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-ink">
                2. Information We Collect
              </h2>
              <p className="mt-2">
                We only collect information that you voluntarily choose to share with us:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  <strong className="text-ink">Direct Enquiries:</strong> When you contact us by email (sourabh@webtunestudios.in), phone (+91 9779043521), or WhatsApp, we receive the contact details and project details you provide.
                </li>
                <li>
                  <strong className="text-ink">Analytics Data:</strong> If you accept our cookie banner, Google Analytics 4 collects aggregated, anonymized metrics such as browser type, pages viewed, and approximate geographic region to help us improve website usability.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-ink">
                3. Cookies and Tracking
              </h2>
              <p className="mt-2">
                We respect your privacy choices. Cookies for Google Analytics are only loaded after you click &ldquo;Accept&rdquo; on our cookie banner. If you choose &ldquo;Decline&rdquo;, no analytics scripts are executed and no third-party tracking cookies are placed on your browser.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-ink">
                4. How We Use Your Information
              </h2>
              <p className="mt-2">
                Information you provide is strictly used to evaluate project requirements, provide estimates, and communicate about our web design, development, and eCommerce services. We do not sell, rent, or trade your personal data with any third parties.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-ink">
                5. Third-Party Links
              </h2>
              <p className="mt-2">
                Our site includes links to direct communication channels such as WhatsApp (wa.me). Interacting with WhatsApp is governed by Meta&rsquo;s privacy terms.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-display)] text-[20px] font-semibold text-ink">
                6. Contact Information
              </h2>
              <p className="mt-2">
                If you have any questions regarding this privacy policy or wish to request data deletion, please contact us:
              </p>
              <div className="mt-3 rounded-lg border border-line bg-panel p-4 font-mono text-[13px] text-ink">
                <p><strong>WebTune Studios</strong></p>
                <p>Sector 82, JLPL Industrial Area, Mohali, Punjab 140301, India</p>
                <p>Email: sourabh@webtunestudios.in</p>
                <p>Phone: +91 9779043521</p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
