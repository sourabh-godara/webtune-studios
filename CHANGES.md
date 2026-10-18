# Summary of Site Changes (CHANGES.md)

This document lists every new or updated URL on WebTune Studios (`https://www.webtunestudios.in`), along with its primary target keyword, intent, and modified source files.

---

## 1. Landing Pages & Core URLs

### 1. `/` (Homepage)
- **Status:** Updated
- **Target Keywords:** `web design agency Mohali`, `web development company Mohali`, `business websites Mohali`
- **Primary Search Intent:** Brand discovery and commercial investigation for growing businesses seeking web design and development.
- **Key Changes:**
  - Removed all unverified claims ("Award winning", "12 years of experience", fake ratings, fake logos, automation demo).
  - Rewrote Hero, About, and 3 Core Services with exact approved copy.
  - Rewrote 4-step "How we work" process without automation, preserving the `#process` anchor.
  - Linked directly to the Mohali overview, Real Estate, and Restaurant landing pages.
  - Standardized NAP: Sector 82, JLPL Industrial Area, Mohali, Punjab, India (no postalCode in JSON-LD).
- **Files Changed:**
  - [`app/page.tsx`](file:///Users/sourabh/code/webtune-studios/app/page.tsx)
  - [`components/sections/hero.tsx`](file:///Users/sourabh/code/webtune-studios/components/sections/hero.tsx)
  - [`components/sections/services.tsx`](file:///Users/sourabh/code/webtune-studios/components/sections/services.tsx)
  - [`components/sections/featured-work.tsx`](file:///Users/sourabh/code/webtune-studios/components/sections/featured-work.tsx)
  - [`components/sections/how-we-work.tsx`](file:///Users/sourabh/code/webtune-studios/components/sections/how-we-work.tsx)
  - [`components/sections/cta.tsx`](file:///Users/sourabh/code/webtune-studios/components/sections/cta.tsx)
  - [`components/sections/footer.tsx`](file:///Users/sourabh/code/webtune-studios/components/sections/footer.tsx)
  - [`components/sections/navbar.tsx`](file:///Users/sourabh/code/webtune-studios/components/sections/navbar.tsx)

---

### 2. `/web-development-company-mohali`
- **Status:** Created & Updated
- **Target Keywords:** `Web Development Company in Mohali`, `web design Mohali`, `website developer Chandigarh Panchkula`
- **Primary Search Intent:** High-intent local search for businesses in the Tricity (Mohali, Chandigarh, Panchkula) looking to hire a regional web development partner.
- **Key Content & Structure:**
  - Semantic single `<h1>Web development company in Mohali</h1>`
  - H2 sections: "What we build", "Websites for real estate agencies and restaurants" (interlinked), "How we work", "Why work with a local agency", "Pricing", "Frequently asked questions", CTA & NAP block.
  - Real pricing ("starts from ₹14,999"), delivery timeline ("2 to 4 weeks"), and ownership terms ("You own the website, design and content once the final payment is made.").
  - Structured Data: `ProfessionalService` (no `postalCode`), `BreadcrumbList`, and `FAQPage` matching all 5 visible FAQs 1:1.
- **Files Changed:**
  - [`app/web-development-company-mohali/page.tsx`](file:///Users/sourabh/code/webtune-studios/app/web-development-company-mohali/page.tsx)

---

### 3. `/real-estate-website-development-mohali`
- **Status:** New Page Created
- **Target Keywords:** `Real Estate Website Development in Mohali`, `property website design Mohali`, `real estate builder websites UAE`
- **Primary Search Intent:** Real estate brokers, agencies, and builders seeking dedicated property listing portals, virtual tours, and WhatsApp lead capture.
- **Key Content & Structure:**
  - Semantic single `<h1>Real estate website development in Mohali</h1>`
  - H2 feature list with bold lead-ins: Property listings that are easy to browse, Search and filters, Photo galleries, maps and virtual tours, Enquiry forms and WhatsApp contact, Project and developer pages, Agent and team profiles, Fast and search-friendly.
  - H2 sections: "Built for how property buyers search", "Local requirements and details" (RERA & Dubai permit numbers), "Working with agencies in the UAE", "How we work", "Related work" (ActiveWell Pharma catalogue architecture), "Pricing" ("starts from ₹29,999... quoted in AED on request"), 6 FAQs, CTA & NAP.
  - Structured Data: `Service` with `ProfessionalService` provider (no `postalCode`), `BreadcrumbList`, and `FAQPage` matching all 6 visible FAQs 1:1.
- **Files Changed:**
  - [`app/real-estate-website-development-mohali/page.tsx`](file:///Users/sourabh/code/webtune-studios/app/real-estate-website-development-mohali/page.tsx)

---

### 4. `/restaurant-website-design-mohali`
- **Status:** New Page Created
- **Target Keywords:** `Restaurant Website Design in Mohali`, `cafe website design Mohali`, `restaurant menu website Chandigarh`
- **Primary Search Intent:** Restaurant owners, cafes, and food brands seeking mobile-first menus, table reservations, direct ordering links, and local Google search traffic.
- **Key Content & Structure:**
  - Semantic single `<h1>Restaurant website design in Mohali</h1>`
  - H2 feature list with bold lead-ins: A mobile-friendly menu, Table booking, Online ordering links, Location, hours and directions, Photos and atmosphere, Offers, events and updates, Contact on WhatsApp.
  - H2 sections: "Built for people searching nearby", "Why your own website still matters" (commission-free direct channel), "Restaurants and cafes in the UAE", "How we work", "Related work" (Jaysal VFX visual performance), "Pricing" ("starts from ₹19,999... quoted in AED on request"), 7 FAQs, CTA & NAP.
  - Structured Data: `Service` with `ProfessionalService` provider (no `postalCode`), `BreadcrumbList`, and `FAQPage` matching all 7 visible FAQs 1:1.
- **Files Changed:**
  - [`app/restaurant-website-design-mohali/page.tsx`](file:///Users/sourabh/code/webtune-studios/app/restaurant-website-design-mohali/page.tsx)

---

### 5. `/work`
- **Status:** Updated
- **Target Keywords:** `WebTune Studios portfolio`, `Next.js web development case studies`
- **Primary Search Intent:** Proof of capability and technical stack validation.
- **Key Content & Structure:**
  - Purged all n8n, automation, and bot mentions.
  - Featured projects restricted strictly to confirmed builds: ActiveWell Pharma (Next.js & Supabase eCommerce) and Jaysal VFX (Cinematic visual portfolio).
  - All bracketed placeholders removed.
- **Files Changed:**
  - [`app/work/page.tsx`](file:///Users/sourabh/code/webtune-studios/app/work/page.tsx)
  - [`components/work/project-card.tsx`](file:///Users/sourabh/code/webtune-studios/components/work/project-card.tsx)
  - [`components/work/work-hero.tsx`](file:///Users/sourabh/code/webtune-studios/components/work/work-hero.tsx)

---

### 6. `/privacy-policy`
- **Status:** Created
- **Target Keywords:** `Privacy Policy WebTune Studios`
- **Primary Search Intent:** Trust, transparency, and data protection compliance.
- **Files Changed:**
  - [`app/privacy-policy/page.tsx`](file:///Users/sourabh/code/webtune-studios/app/privacy-policy/page.tsx)

---

## 2. Global Infrastructure & SEO Files

| File | Purpose & Role |
| :--- | :--- |
| [`next.config.ts`](file:///Users/sourabh/code/webtune-studios/next.config.ts) | Added 301 permanent redirect from `webtunestudios.in` to `https://www.webtunestudios.in`. |
| [`app/layout.tsx`](file:///Users/sourabh/code/webtune-studios/app/layout.tsx) | Configured canonical `metadataBase`, target title/description, `en_IN` OpenGraph, and mounted CookieBanner / GoogleAnalytics. |
| [`app/opengraph-image.tsx`](file:///Users/sourabh/code/webtune-studios/app/opengraph-image.tsx) | Dynamic 1200x630 branded image generator for social graph scrapers. |
| [`app/sitemap.ts`](file:///Users/sourabh/code/webtune-studios/app/sitemap.ts) | Declares all 5 public pages with crawl frequency and priority. |
| [`app/robots.ts`](file:///Users/sourabh/code/webtune-studios/app/robots.ts) | Grants universal crawl permissions and references sitemap on www canonical host. |
| [`app/not-found.tsx`](file:///Users/sourabh/code/webtune-studios/app/not-found.tsx) | Branded 404 page providing recovery navigation to Home and Work. |
| [`components/cookie-banner.tsx`](file:///Users/sourabh/code/webtune-studios/components/cookie-banner.tsx) | Privacy banner with persistent Accept / Decline options. |
| [`components/google-analytics.tsx`](file:///Users/sourabh/code/webtune-studios/components/google-analytics.tsx) | Defers GA4 script execution strictly until explicit user consent. |
| [`public/images/about-placeholder.webp`](file:///Users/sourabh/code/webtune-studios/public/images/about-placeholder.webp) | Local asset replacing third-party hotlink. |
