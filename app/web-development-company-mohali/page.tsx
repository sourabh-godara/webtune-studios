import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import {
  ArrowUpRight,
  MessageCircle,
  Building2,
  ShoppingBag,
  Laptop,
  Film,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Company in Mohali | WebTune Studios",
  description:
    "Web design, web development and eCommerce for businesses in Mohali, Chandigarh and Panchkula. Fast, mobile-friendly websites. Get a free quote from WebTune Studios.",
  alternates: {
    canonical: "/web-development-company-mohali",
  },
  openGraph: {
    title: "Web Development Company in Mohali | WebTune Studios",
    description:
      "Web design, web development and eCommerce for businesses in Mohali, Chandigarh and Panchkula. Fast, mobile-friendly websites. Get a free quote from WebTune Studios.",
    url: "https://www.webtunestudios.in/web-development-company-mohali",
    siteName: "WebTune Studios",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Mohali | WebTune Studios",
    description:
      "Web design, web development and eCommerce for businesses in Mohali, Chandigarh and Panchkula. Fast, mobile-friendly websites. Get a free quote from WebTune Studios.",
  },
};

const mohaliFaqs = [
  {
    q: "How much does a website cost in Mohali?",
    a: "It depends on the size and features. A simple business site costs less than an online store or a custom web application. Share what you need and we will give you a fixed quote.",
  },
  {
    q: "How long does it take to build a website?",
    a: "A typical business website takes 2 to 4 weeks from approval of the design. Larger stores and custom projects take longer, and we confirm the timeline in the quote.",
  },
  {
    q: "Do you work with clients outside Mohali?",
    a: "Yes. We work with businesses in Chandigarh, Panchkula and across India, as well as the UAE. Meetings can be in person locally or by video call.",
  },
  {
    q: "Will my website show up on Google?",
    a: "We set up the technical foundations: page titles, descriptions, mobile layout, fast loading and a sitemap. Rankings also depend on content, competition and time, so we can't guarantee a position, but we make sure the site is built properly for search.",
  },
  {
    q: "Who owns the website after it is built?",
    a: "You own the website, design and content once the final payment is made.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "WebTune Studios",
    "url": "https://www.webtunestudios.in/web-development-company-mohali",
    "telephone": "+91-9779043521",
    "email": "sourabh@webtunestudios.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 82, JLPL Industrial Area",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "addressCountry": "IN",
    },
    "areaServed": [
      "Mohali",
      "Chandigarh",
      "Panchkula",
      "India",
      "United Arab Emirates",
    ],
    "serviceType": [
      "Web design",
      "Web development",
      "eCommerce development",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.webtunestudios.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web Development Company in Mohali",
        "item": "https://www.webtunestudios.in/web-development-company-mohali",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mohaliFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  },
];

export default function MohaliWebDevelopmentPage() {
  const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919779043521";
  const whatsappNumber = rawWhatsApp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a quote for a website")}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />

      <main className="relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 mb-8">
          <ol className="flex items-center gap-2 font-mono text-[11.5px] uppercase tracking-wider text-ink-faint">
            <li>
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="size-3 text-line-strong" />
            <li className="text-ink font-semibold" aria-current="page">
              Mohali
            </li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 pb-16 sm:pb-20 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-signal-deep">
              Local Web Development · Mohali &amp; Tricity
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5.5vw,72px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink text-balance">
              Web development company in Mohali
            </h1>
            <p className="mt-6 text-[17px] sm:text-[19px] leading-relaxed text-ink-soft max-w-3xl">
              WebTune Studios is a web design and development agency based in Sector 82, JLPL Industrial Area, Mohali. We build business websites and online stores for companies in Mohali, Chandigarh and Panchkula, and we also work with clients in the rest of India and the UAE. A good website does three things: it loads quickly on a phone, it explains what you offer in a few seconds, and it makes it easy for a customer to contact you. That is what we build for.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-ink/80 hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Get a free quote</span>
                <ArrowUpRight className="size-4" strokeWidth={2.5} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-ink transition-all duration-200 hover:bg-paper hover:border-ink hover:-translate-y-0.5"
              >
                <MessageCircle className="size-4 text-[#7bb300]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </header>

        {/* Section 1: What We Build */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Core Capabilities
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              What we build
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                  <Building2 className="size-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[19px] font-bold text-ink">
                  Business websites
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  A clear, mobile-first site presenting your services, work and contact details; suitable for clinics, consultants, manufacturers, schools and local service businesses.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                  <ShoppingBag className="size-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[19px] font-bold text-ink">
                  eCommerce stores
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  Product catalogues, secure checkout, payment gateway integration and order management; we built the ActiveWell Pharma store on Next.js and Supabase.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                  <Laptop className="size-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[19px] font-bold text-ink">
                  Custom web development
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  Fast, search-friendly sites built with Next.js, including forms, maps, dashboards and third-party integrations.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col justify-between">
              <div>
                <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                  <Film className="size-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-[19px] font-bold text-ink">
                  Portfolio &amp; brand sites
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                  Visual-first sites for creators and studios, such as the cinematic portfolio built for Jaysal VFX.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Real Estate & Restaurants */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Industry Focus
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink text-balance">
              Websites for real estate agencies and restaurants
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              Two industries where a website directly brings in customers are real estate and food. Real estate: property listing pages with filters, photo galleries, map and virtual-tour embeds, enquiry forms and a WhatsApp contact button, so a buyer can reach the agent from any listing. Restaurants and cafes: a mobile-friendly menu, table booking, online ordering links, Google Maps and opening hours, so people nearby can find you and visit.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/real-estate-website-development-mohali"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel px-5 py-2.5 font-mono text-[12px] font-semibold uppercase tracking-wider text-ink transition-colors hover:border-ink hover:bg-paper"
              >
                <span>Real Estate Websites in Mohali</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href="/restaurant-website-design-mohali"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-panel px-5 py-2.5 font-mono text-[12px] font-semibold uppercase tracking-wider text-ink transition-colors hover:border-ink hover:bg-paper"
              >
                <span>Restaurant Websites in Mohali</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 3: How We Work */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Simple &amp; Predictable Delivery
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              How we work
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">01</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                1 Discuss
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                Learn about your business, customers and goals to determine exactly what the site must achieve.
              </p>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">02</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                2 Plan and design
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                Agree pages, structure and visual direction before building so there are no surprises.
              </p>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">03</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                3 Build and test
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                Develop, check on phones and desktops, and review with you before going live.
              </p>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">04</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                4 Launch and support
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                Configure hosting, basic SEO, publish to the web, and stay available for ongoing changes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Why Work With a Local Agency */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Local Advantage
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              Why work with a local agency
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              Being in Mohali means we can meet you in person, visit your business if needed, and respond during your working hours. Many local businesses in Mohali and Chandigarh start with a Google search, so we set up the technical basics, such as page titles, speed and mobile layout, so people can find you.
            </p>
          </div>
        </section>

        {/* Section 5: Pricing */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Transparent Estimates
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              Pricing
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              Cost depends on the number of pages, features and integrations. A simple business website starts from ₹14,999; online stores and custom builds are quoted after a short discussion.
            </p>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Clear Answers
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 divide-y divide-line border-y border-line max-w-4xl">
            {mohaliFaqs.map((faq, idx) => (
              <div key={idx} className="py-7">
                <h3 className="font-[family-name:var(--font-display)] text-[18px] sm:text-[20px] font-bold text-ink">
                  {faq.q}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: CTA & NAP Block */}
        <section id="quote" className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 pt-20 sm:pt-24">
          <div className="rounded-2xl border border-line-strong bg-panel/70 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-signal-deep">
                Get Started
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(28px,4.5vw,46px)] font-bold tracking-tight text-ink text-balance">
                Planning a website or online store? Tell us about your business and get a free quote.
              </h2>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:sourabh@webtunestudios.in"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-ink/80 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Get a free quote</span>
                  <ArrowUpRight className="size-4" strokeWidth={2.5} />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper px-7 py-3.5 text-[13px] font-bold uppercase tracking-wider text-ink transition-all duration-200 hover:border-ink hover:-translate-y-0.5"
                >
                  <MessageCircle className="size-4 text-[#7bb300]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* NAP Block */}
            <div className="mt-14 pt-10 border-t border-line grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 shrink-0 text-ink-soft mt-0.5" />
                <div className="text-[13.5px] leading-relaxed text-ink-soft">
                  <strong className="block text-ink">WebTune Studios</strong>
                  <span>Sector 82, JLPL Industrial Area</span>
                  <br />
                  <span>Mohali, Punjab, India</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="size-5 shrink-0 text-ink-soft mt-0.5" />
                <div className="text-[13.5px] leading-relaxed text-ink-soft">
                  <strong className="block text-ink">Phone</strong>
                  <a
                    href="tel:+919779043521"
                    className="font-mono text-ink hover:text-[#7bb300] transition-colors"
                  >
                    +91 9779043521
                  </a>
                  <p className="text-[12px] text-ink-faint">Direct line</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="size-5 shrink-0 text-ink-soft mt-0.5" />
                <div className="text-[13.5px] leading-relaxed text-ink-soft">
                  <strong className="block text-ink">Email</strong>
                  <a
                    href="mailto:sourabh@webtunestudios.in"
                    className="font-mono text-ink hover:text-[#7bb300] transition-colors"
                  >
                    sourabh@webtunestudios.in
                  </a>
                  <p className="text-[12px] text-ink-faint">Response within 24h</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
