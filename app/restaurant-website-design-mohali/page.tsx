import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import {
  ArrowUpRight,
  MessageCircle,
  UtensilsCrossed,
  CalendarCheck,
  ShoppingBag,
  MapPin,
  Camera,
  Tag,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant Website Design in Mohali | WebTune Studios",
  description:
    "Websites for restaurants and cafes in Mohali, Chandigarh and the UAE: mobile menus, table booking, ordering links and Google Maps. Get a free quote.",
  alternates: {
    canonical: "/restaurant-website-design-mohali",
  },
  openGraph: {
    title: "Restaurant Website Design in Mohali | WebTune Studios",
    description:
      "Websites for restaurants and cafes in Mohali, Chandigarh and the UAE: mobile menus, table booking, ordering links and Google Maps. Get a free quote.",
    url: "https://www.webtunestudios.in/restaurant-website-design-mohali",
    siteName: "WebTune Studios",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restaurant Website Design in Mohali | WebTune Studios",
    description:
      "Websites for restaurants and cafes in Mohali, Chandigarh and the UAE: mobile menus, table booking, ordering links and Google Maps. Get a free quote.",
  },
};

const restaurantFaqs = [
  {
    q: "How much does a restaurant website cost in Mohali?",
    a: "It depends on the number of pages and features. A restaurant website starts from ₹19,999. A simple site with menu, photos, location and contact costs less than one with table booking and ordering links. Share what you need and we'll give you a fixed quote.",
  },
  {
    q: "Can customers book a table on the website?",
    a: "Yes. We can add a simple booking form or connect the reservation system you already use.",
  },
  {
    q: "Can I update the menu and prices myself?",
    a: "Yes. We set up a simple admin area so you can edit dishes, prices and offers without a developer.",
  },
  {
    q: "Do you replace Zomato or Swiggy?",
    a: "No. Your website works alongside delivery and review platforms. It gives customers a place to see your full menu, book and contact you directly, and you can link out to the apps you already use.",
  },
  {
    q: "Will my restaurant show up on Google?",
    a: "We set up the technical basics: page titles, descriptions, mobile layout, fast loading and a sitemap. We also recommend a Google Business Profile. Rankings depend on competition, reviews and time, so we can't guarantee a position.",
  },
  {
    q: "Do you work with restaurants in Dubai?",
    a: "Yes, we work with businesses in the UAE. We hold meetings by video call and quote UAE projects in AED on request.",
  },
  {
    q: "How long does it take?",
    a: "A typical restaurant website takes 2 to 4 weeks after the design is approved, and we confirm the timeline in your quote.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Restaurant website design",
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
        "name": "Restaurant Website Design in Mohali",
        "item": "https://www.webtunestudios.in/restaurant-website-design-mohali",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": restaurantFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  },
];

export default function RestaurantWebDesignPage() {
  const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919779043521";
  const whatsappNumber = rawWhatsApp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi, I'd like a quote for a restaurant website")}`;

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
              Restaurant
            </li>
          </ol>
        </nav>

        {/* Hero Header */}
        <header className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 pb-16 sm:pb-20 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-signal-deep">
              Restaurant &amp; Cafe Websites · Mohali, Chandigarh &amp; UAE
            </span>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5.5vw,72px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink text-balance">
              Restaurant website design in Mohali
            </h1>
            <p className="mt-6 text-[17px] sm:text-[19px] leading-relaxed text-ink-soft max-w-3xl">
              When someone is deciding where to eat, they search on their phone, look at the menu and photos, and check how to get there. If your site makes that hard, they pick another place. WebTune Studios designs and builds websites for restaurants, cafes and food businesses in Mohali, Chandigarh and Panchkula, and for food businesses in the UAE. We make the things customers look for easy to find: menu, location, opening hours, booking and a way to order or contact you.
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

        {/* Section 1: What a restaurant website needs */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Essential Features
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              What a restaurant website needs
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <UtensilsCrossed className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  A mobile-friendly menu
                </strong>
                Your menu as real, readable text on the page, not a PDF that&apos;s hard to read on a phone, organised by category with prices and dietary labels.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <CalendarCheck className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Table booking
                </strong>
                A simple booking form or a link to your reservation system, so customers can book without calling.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <ShoppingBag className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Online ordering links
                </strong>
                Buttons that send customers to your preferred ordering channel, whether that&apos;s your own ordering page or the delivery apps you already use.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <MapPin className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Location, hours and directions
                </strong>
                Embedded Google Maps, opening hours, parking information and a tap-to-call button.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <Camera className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Photos and atmosphere
                </strong>
                A gallery that shows your food and space, optimised so pages stay fast.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <Tag className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Offers, events and updates
                </strong>
                A section for specials, events and announcements that you can update easily.
              </h3>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/60 p-6 flex flex-col sm:col-span-2 lg:col-span-3">
              <div className="size-10 rounded-lg bg-ink flex items-center justify-center text-white mb-5">
                <MessageCircle className="size-5" />
              </div>
              <h3 className="text-[15.5px] leading-relaxed text-ink">
                <strong className="block font-[family-name:var(--font-display)] text-[18px] text-ink mb-1.5">
                  Contact on WhatsApp
                </strong>
                A &lsquo;Chat on WhatsApp&rsquo; button for enquiries, group bookings and events.
              </h3>
            </div>
          </div>
        </section>

        {/* Section 2: Built for people searching nearby */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Local Discovery
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink text-balance">
              Built for people searching nearby
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              Many diners search for &lsquo;restaurants near me&rsquo; or a cuisine plus a place name. We set up your page titles, descriptions and structure with your location in mind, and we recommend a Google Business Profile with matching name, address and hours, since that is a major source of local visits. A fast, clear website works together with it.
            </p>
          </div>
        </section>

        {/* Section 3: Why your own website still matters */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Direct Relationships
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink text-balance">
              Why your own website still matters
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              Delivery and review platforms bring customers, but they also control how you appear and take a commission. Your own site lets you present your menu and brand your way, collect bookings and enquiries directly, and give customers one place to find you. It complements those platforms rather than replacing them.
            </p>
          </div>
        </section>

        {/* Section 4: Restaurants and cafes in the UAE */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Cross-Border Collaboration
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink text-balance">
              Restaurants and cafes in the UAE
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              We also work with food businesses in the UAE. Meetings are held by video call, and we agree working hours that suit both time zones. Pricing for UAE clients is quoted in AED on request.
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
                We learn about your restaurant, menu, customers and how bookings work today.
              </p>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">02</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                2 Plan and design
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                We agree on pages, menu layout and visual direction before building.
              </p>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">03</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                3 Build and test
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                We develop the site, add your menu and photos, and test on phones and desktops.
              </p>
            </div>

            <div className="rounded-xl border border-line-strong bg-panel/40 p-6">
              <span className="font-mono text-[12px] font-bold text-signal-deep">04</span>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-[18px] font-bold text-ink">
                4 Launch and support
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                We set up hosting and basic SEO, publish the site, and stay available for menu and offer changes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Related work */}
        <section className="mx-auto max-w-[var(--container-max)] px-6 lg:px-8 py-20 sm:py-24 border-b border-line">
          <div className="max-w-4xl">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Visual Craftsmanship
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-bold tracking-tight text-ink">
              Related work
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-relaxed text-ink-soft">
              For visual-first work, see the cinematic portfolio site we built for Jaysal VFX, which shows how we handle strong imagery without slowing a site down.
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
              The cost depends on the number of pages, menu size and features such as booking and ordering links. A restaurant website starts from ₹19,999. For the UAE, pricing is quoted in AED on request. Send your requirements and we&apos;ll reply with a fixed quote.
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
            {restaurantFaqs.map((faq, idx) => (
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
                Planning a restaurant website? Tell us about your menu and location and get a free quote.
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
