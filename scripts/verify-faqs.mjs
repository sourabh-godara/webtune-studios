#!/usr/bin/env node

/**
 * FAQ Verification Script
 * Extracts visible FAQ questions and answers from the built HTML of:
 * - /web-development-company-mohali
 * - /real-estate-website-development-mohali
 * - /restaurant-website-design-mohali
 * and compares them to the FAQPage JSON-LD.
 * Fails (exit code 1) on any mismatch.
 */

import fs from "fs";
import path from "path";

const pages = [
  "web-development-company-mohali",
  "real-estate-website-development-mohali",
  "restaurant-website-design-mohali",
];

function decodeHtmlEntities(str) {
  return str
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rsquo;/g, "’")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function normalize(str) {
  return decodeHtmlEntities(str)
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .trim();
}

let totalErrors = 0;

console.log("==================================================");
console.log("FAQ VERIFICATION: Built HTML vs. FAQPage JSON-LD");
console.log("==================================================\n");

for (const pageName of pages) {
  const filePath = path.join(".next/server/app", `${pageName}.html`);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Build file not found: ${filePath}`);
    totalErrors++;
    continue;
  }

  const html = fs.readFileSync(filePath, "utf8");

  // 1. Extract JSON-LD FAQPage
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
  if (!jsonLdMatch) {
    console.error(`❌ No JSON-LD script found in ${pageName}`);
    totalErrors++;
    continue;
  }

  let faqPageSchema = null;
  try {
    const parsed = JSON.parse(jsonLdMatch[1]);
    const items = Array.isArray(parsed) ? parsed : [parsed];
    faqPageSchema = items.find((item) => item["@type"] === "FAQPage");
  } catch (err) {
    console.error(`❌ Failed to parse JSON-LD in ${pageName}:`, err.message);
    totalErrors++;
    continue;
  }

  if (!faqPageSchema || !Array.isArray(faqPageSchema.mainEntity)) {
    console.error(`❌ No valid FAQPage schema found in ${pageName}`);
    totalErrors++;
    continue;
  }

  const jsonFaqs = faqPageSchema.mainEntity.map((item) => ({
    q: normalize(item.name || ""),
    a: normalize(item.acceptedAnswer?.text || ""),
  }));

  // 2. Extract visible FAQs from rendered DOM
  const sectionMatch = html.match(/divide-y divide-line border-y border-line max-w-4xl">([\s\S]*?)<\/div>\s*<\/section>/);
  if (!sectionMatch) {
    console.error(`❌ Could not find visible FAQ section container in ${pageName}`);
    totalErrors++;
    continue;
  }

  const itemMatches = [...sectionMatch[1].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)];
  const visibleFaqs = itemMatches.map((m) => ({
    q: normalize(m[1]),
    a: normalize(m[2]),
  }));

  console.log(`📄 Page: /${pageName}`);
  console.log(`   Visible FAQs: ${visibleFaqs.length} | JSON-LD FAQs: ${jsonFaqs.length}`);

  if (visibleFaqs.length !== jsonFaqs.length) {
    console.error(`   ❌ Count mismatch! Visible: ${visibleFaqs.length}, JSON-LD: ${jsonFaqs.length}`);
    totalErrors++;
  }

  const maxLen = Math.max(visibleFaqs.length, jsonFaqs.length);
  for (let i = 0; i < maxLen; i++) {
    const v = visibleFaqs[i];
    const j = jsonFaqs[i];

    if (!v) {
      console.error(`   ❌ Extra JSON-LD FAQ at index ${i}: "${j.q}"`);
      totalErrors++;
      continue;
    }
    if (!j) {
      console.error(`   ❌ Extra Visible FAQ at index ${i}: "${v.q}"`);
      totalErrors++;
      continue;
    }

    if (v.q !== j.q) {
      console.error(`   ❌ Question mismatch at index ${i}:`);
      console.error(`      Visible: "${v.q}"`);
      console.error(`      JSON-LD: "${j.q}"`);
      totalErrors++;
    }

    if (v.a !== j.a) {
      console.error(`   ❌ Answer mismatch at index ${i} for question "${v.q}":`);
      console.error(`      Visible: "${v.a}"`);
      console.error(`      JSON-LD: "${j.a}"`);
      totalErrors++;
    }
  }

  if (totalErrors === 0) {
    console.log(`   ✅ All ${visibleFaqs.length} FAQs match visible content and FAQPage JSON-LD perfectly!\n`);
  }
}

if (totalErrors > 0) {
  console.error(`\n❌ VERIFICATION FAILED with ${totalErrors} error(s).`);
  process.exit(1);
} else {
  console.log("==================================================");
  console.log("✅ ALL FAQS VERIFIED WITH 0 MISMATCHES!");
  console.log("==================================================");
  process.exit(0);
}
