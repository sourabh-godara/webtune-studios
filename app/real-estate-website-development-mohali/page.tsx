import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import {
  ArrowUpRight,
  MessageCircle,
  Building,
  Filter,
  MapPin,
  Send,
  FolderKanban,
  Users,
  Zap,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Website Development in Mohali | WebTune Studios",
  description:
    "Websites for real estate agencies and builders in Mohali, Chandigarh and the UAE: property listings, filters, galleries and enquiry forms. Get a free quote.",
  alternates: {
    canonical: "/real-estate-website-development-mohali",
  },
  openGraph: {
    title: "Real Estate Website Development in Mohali | WebTune Studios",
    description:
      "Websites for real estate agencies and builders in Mohali, Chandigarh and the UAE: property listings, filters, galleries and enquiry forms. Get a free quote.",
    url: "https://www.webtunestudios.in/real-estate-website-development-mohali",
    siteName: "WebTune Studios",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Website Development in Mohali | WebTune Studios",
    description:
      "Websites for real estate agencies and builders in Mohali, Chandigarh and the UAE: property listings, filters, galleries and enquiry forms. Get a free quote.",
  },
};

const realEstateFaqs = [
  {
    q: "How much does a real estate website cost in Mohali?",
    a: "It depends on the size of the site and the features, such as property search, map integration and brochure downloads. A real estate website starts from ₹29,999. Share what you need and we'll give you a fixed quote.",
  },
  {
    q: "Can buyers filter properties by location, price and type?",
    a: "Yes. We build search and filters for location, property type, budget, bedrooms and status, designed to work well on phones.",
  },
  {
    q: "Can I add and edit listings myself?",
    a: "Yes. We set up a simple admin area so you can add or edit listings and photos without a developer.",
  },
  {
    q: "Will buyers be able to contact me on WhatsApp?",
    a: "Yes. Every listing can have a 'Chat on WhatsApp' button that opens a chat with a prefilled message, along with a standard enquiry form.",
  },
  {
    q: "Do you build websites for agencies in Dubai?",
    a: "Yes, we work with businesses in the UAE. We hold meetings by video call and quote UAE projects in AED on request.",
  },
  {
    q: "How long does it take?",
    a: "A typical agency website takes 2 to 4 weeks after the design is approved. Larger portals with many listings take 3 to 5 weeks, and we confirm the timeline in your quote.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real estate website development",
    "serviceType": "Web development",
    "provider": {
      "@type": "ProfessionalService",
      "name": "WebTune Studios",
      "url": "https://www.webtunestudios.in",
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
    },
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
        "name": "Real Estate Website Development in Mohali",
        "item": "https://www.webtunestudios.in/real-estate-website-development-mohali",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": realEstateFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  },
];

export default function RealEstateWebDevelopmentPage() {
  const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919779043521";
  const whatsappNumber = rawWhatsApp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a quote for a real estate website")}`;

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
            <li>
              <Link href="/web-development-company-mohali" className="hover:text-ink transition-colors">
                Mohali
              </Link>
            </li>
            <ChevronRight className="size-3 text-line-strong" />
            <li className="text-ink font-semibold" aria-current="page">
              Real Estate
            </li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 pb-16 sm:pb-20 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-signal-deep">
              Property &amp; Builder Websites · Mohali, Chandigarh &amp; UAE
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5.5vw,72px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink text-balance">
              Real estate website development in Mohali
            </h1>
            <p className="mt-6 text-[17px] sm:text-[19px] leading-relaxed text-ink-soft max-w-3xl">
              A buyer usually looks at a property online long before they call an agent. Your website decides whether they call you or someone else. WebTune Studios designs and builds websites for real estate agencies, builders and property consultants in Mohali, Chandigarh and Panchkula, and for agencies serving the UAE. We focus on what helps a buyer move from browsing to enquiring: clear listings, good photos, fast pages on a phone, and an easy way to contact you.
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

        {/* Section 1: What a real estate website needs */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Listing Architecture
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              What a real estate website needs
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <Building className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Property listings that are easy to browse
                </strong>
                Listing pages with photos, price, area, location, amenities and status, so a buyer sees the key facts in seconds.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <Filter className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Search and filters
                </strong>
                Filter by location, property type, budget, bedrooms and status (ready to move, under construction), built to work smoothly on a phone.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <MapPin className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Photo galleries, maps and virtual tours
                </strong>
                Large image galleries, an embedded Google Map for each property, and room for video walkthroughs or 360-degree tour embeds.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <Send className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Enquiry forms and WhatsApp contact
                </strong>
                An enquiry form and a &lsquo;Chat on WhatsApp&rsquo; button on every listing, so a buyer can reach the right agent immediately.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <FolderKanban className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Project and developer pages
                </strong>
                A page for each project with floor plans, payment plan details, brochure download and location advantages.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <Users className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Agent and team profiles
                </strong>
                Clear profiles that show who the buyer will be speaking to.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col sm:col-span-2 lg:col-span-3">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <Zap className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Fast and search-friendly
                </strong>
                Property sites carry many images, so we build for quick loading and set up page titles, descriptions and structure so listings can be found on Google.
              </h3>
            </div>
          </div>
        </section>

        {/* Section 2: Built for how property buyers search */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Buyer Experience
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink text-balance">
              Built for how property buyers search
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              Most buyers search on mobile, compare several listings, and contact two or three agents at once. We design the listing page so the price, key facts, photos and contact button are visible without scrolling through clutter. Pages are kept light so they load quickly on mobile data.
            </p>
          </div>
        </section>

        {/* Section 3: Local requirements and details */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Compliance &amp; Disclosures
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink text-balance">
              Local requirements and details
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              Property advertising has rules that vary by market. In India, projects registered under RERA typically need the registration number shown in listings and advertising. In Dubai, property advertising generally requires a permit number on each listing. We leave space for these details in the listing layout. Please confirm exact requirements with your legal advisor or the relevant regulator.
            </p>
          </div>
        </section>

        {/* Section 4: Working with agencies in the UAE */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Cross-Border Collaboration
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink text-balance">
              Working with agencies in the UAE
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              We work with businesses in the UAE as well as India. Meetings are held by video call, and we agree working hours that suit both time zones. Pricing for UAE clients is quoted in AED on request.
            </p>
          </div>
        </section>

        {/* Section 5: How we work */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Delivery Process
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
                We learn about your listings, your buyers and how you handle enquiries today.
              </p>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">02</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                2 Plan and design
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                We agree on the page structure, listing layout and visual direction before building.
              </p>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">03</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                3 Build and test
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                We develop the site, add your listings, and test on phones and desktops.
              </p>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">04</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                4 Launch and support
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                We set up hosting and basic SEO, publish the site, and stay available for changes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Related work */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Proven Platforms
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              Related work
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              We built the ActiveWell Pharma online store on Next.js and Supabase, which shows the kind of catalogue, search and checkout work that carries over to property listings. See more on our work page.
            </p>
            <div className="mt-6">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold uppercase tracking-wider text-ink hover:text-[#7bb300] transition-colors"
              >
                <span>View our work portfolio</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 7: Pricing */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Transparent Investment
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              Pricing
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              The cost depends on the number of pages, the number of listings, and features such as search filters and map integration. A real estate website starts from ₹29,999. For the UAE, pricing is quoted in AED on request. Send your requirements and we&apos;ll reply with a fixed quote.
            </p>
          </div>
        </section>

        {/* Section 8: Frequently asked questions */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Questions &amp; Answers
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              Frequently asked questions
            </h2>
          </div>

          <div className="mt-12 divide-y divide-line border-y border-line max-w-4xl">
            {realEstateFaqs.map((faq, idx) => (
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

        {/* Section 9: CTA & NAP block */}
        <section id="quote" className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 pt-20 sm:pt-24">
          <div className="rounded-2xl border border-line-strong bg-panel/70 p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-signal-deep">
                Get Started
              </span>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(28px,4.5vw,46px)] font-bold tracking-tight text-ink text-balance">
                Planning a real estate website? Tell us about your listings and get a free quote.
              </h2>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
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
