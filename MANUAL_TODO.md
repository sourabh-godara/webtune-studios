# Pre-Deployment Action Items & Operational Checklist (MANUAL_TODO.md)

This document tracks all external setups, creative asset requirements, and compliance verifications for WebTune Studios.

---

## 1. Confirmed Production Values (Resolved)

The following values have been hardcoded across all landing pages and JSON-LD schemas per client approval. Zero placeholders remain in the rendered site:

| Item | Production Value | Implementation Status |
| :--- | :--- | :--- |
| **Simple business website** | Starts from ₹14,999 | Implemented on `/` and `/web-development-company-mohali` |
| **Real estate website** | Starts from ₹29,999 | Implemented on `/real-estate-website-development-mohali` |
| **Restaurant website** | Starts from ₹19,999 | Implemented on `/restaurant-website-design-mohali` |
| **Typical timeline** | 2 to 4 weeks (3 to 5 weeks for larger real estate portals) | Implemented across all pages and FAQ schemas |
| **Ownership policy** | "You own the website, design and content once the final payment is made." | Implemented across all pages and FAQ schemas |
| **Editing access** | "We set up a simple admin area so you can add or edit listings, menu items, prices and offers without a developer." | Implemented across all pages and FAQ schemas |
| **Table booking** | "We can add a simple booking form or connect the reservation system you already use." | Implemented across all pages and FAQ schemas |
| **UAE pricing** | Quoted in AED on request | Implemented across all pages and FAQ schemas |
| **Named projects** | ActiveWell Pharma and Jaysal VFX only | Implemented across `/` and `/work` |
| **Postal address** | Sector 82, JLPL Industrial Area, Mohali, Punjab, India (no postalCode in JSON-LD) | Standardized across all schemas & NAP blocks |

---

## 2. Creative & Asset Production Items

- [ ] **Supply Real About Photography:**
  - Replace local placeholder image (`/public/images/about-placeholder.webp`) with authentic photography of the Mohali studio workspace or founder before live marketing campaigns.
- [ ] **Real Project Screenshots for `/work`:**
  - Supply live screenshots of `activewellpharma.com` and `jaysalvfx.com` if desired to complement abstract browser chrome thumbnails.

---

## 3. Legal & Compliance Review

- [ ] **Privacy Policy Legal Review (`app/privacy-policy/page.tsx`):**
  > **Note:** The current Privacy Policy is a clean, minimal draft accurate to the site's technical implementation (Google Analytics 4 with opt-in cookie consent banner, contact inquiry form routing via email/WhatsApp). It should be reviewed by legal counsel for local Indian IT Act and international compliance before high-volume commercial campaigns.

---

## 4. Google Business Profile & Local Search Setup

- [ ] **Create and Verify Google Business Profile:**
  - **Business Name:** WebTune Studios
  - **Category:** Website Designer / Web Development Agency
  - **Address:** Sector 82, JLPL Industrial Area, Mohali, Punjab, India (must match website NAP exactly).
  - **Phone:** +91 9779043521
  - **Website:** https://www.webtunestudios.in
  - **Service Area:** Mohali, Chandigarh, Panchkula, India, United Arab Emirates.
- [ ] **Google Search Console (GSC):**
  - Verify property ownership for `https://www.webtunestudios.in`.
  - Submit XML sitemap: `https://www.webtunestudios.in/sitemap.xml` (includes all 5 public URLs).
  - Request indexing for:
    - `https://www.webtunestudios.in/`
    - `https://www.webtunestudios.in/web-development-company-mohali`
    - `https://www.webtunestudios.in/real-estate-website-development-mohali`
    - `https://www.webtunestudios.in/restaurant-website-design-mohali`
    - `https://www.webtunestudios.in/work`

---

## 5. Reviews & Testimonials Protocol

- [ ] **Collect Real Google & Clutch Reviews:**
  - Send direct review request links to verified clients (ActiveWell Pharma, Jaysal VFX).
  - **Strict Policy:** Only reintroduce a review badge or testimonial section once verifiable, authentic 5-star reviews exist on external platforms (Google Business Profile, Clutch).

---

## 6. Environment Variables (Vercel / Hosting Provider)

Ensure the following environment variables are set in your production hosting dashboard:
- `NEXT_PUBLIC_GA_ID`: Your Google Analytics 4 Measurement ID (e.g., `G-XXXXXXXXXX`).
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: `919779043521` (international format without `+` or spaces).
