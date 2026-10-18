#!/usr/bin/env node

/**
 * Rendered Output & Production HTML Scanner
 * Checks built HTML and JSON-LD blocks in .next/server/app/*.html
 * for forbidden terms, unresolved placeholders, and postalCode.
 */

import fs from "fs";
import path from "path";

const builtPages = [
  "index.html",
  "web-development-company-mohali.html",
  "real-estate-website-development-mohali.html",
  "restaurant-website-design-mohali.html",
  "work.html",
  "privacy-policy.html",
  "_not-found.html",
];

const forbiddenTerms = [
  "TODO",
  "PLACEHOLDER",
  "automation",
  "n8n",
  "crm",
  "walmart",
  "netflix",
  "award winning",
  "12 years",
  "4.82",
  "gmail.com",
  "awwwards",
  "cssda",
  "located at chandigarh",
];

let totalViolations = 0;

console.log("==================================================");
console.log("RENDERED HTML & JSON-LD AUDIT SCAN");
console.log("==================================================\n");

for (const page of builtPages) {
  const filePath = path.join(".next/server/app", page);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Built file missing: ${filePath}`);
    totalViolations++;
    continue;
  }

  const html = fs.readFileSync(filePath, "utf8");
  const lines = html.split("\n");

  // Check 1: Forbidden terms
  for (let lineNum = 1; lineNum <= lines.length; lineNum++) {
    const line = lines[lineNum - 1];
    const lower = line.toLowerCase();

    for (const term of forbiddenTerms) {
      if (lower.includes(term)) {
        console.error(`❌ [${page}:${lineNum}] Found forbidden term "${term}":`);
        console.error(`   ${line.trim().slice(0, 100)}...`);
        totalViolations++;
      }
    }

    // Check 2: Unresolved brackets like [STARTING PRICE] or [2 TO 4 WEEKS]
    const bracketMatch = line.match(/\[([A-Z0-9_\s]{2,})\]/);
    if (bracketMatch) {
      console.error(`❌ [${page}:${lineNum}] Found unresolved placeholder "${bracketMatch[0]}":`);
      console.error(`   ${line.trim().slice(0, 100)}...`);
      totalViolations++;
    }
  }

  // Check 3: JSON-LD postalCode
  const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const match of jsonLdMatches) {
    const jsonStr = match[1];
    if (jsonStr.includes("postalCode")) {
      console.error(`❌ [${page}] JSON-LD contains postalCode:`);
      console.error(`   ${jsonStr.trim().slice(0, 100)}...`);
      totalViolations++;
    }
  }

  if (totalViolations === 0) {
    console.log(`✅ ${page}: 0 violations (no placeholders, no forbidden terms, no postalCode)`);
  }
}

console.log("\n==================================================");
if (totalViolations > 0) {
  console.error(`❌ SCAN FAILED with ${totalViolations} violation(s).`);
  process.exit(1);
} else {
  console.log("✅ ALL 7 PRODUCTION HTML PAGES PASSED WITH 0 VIOLATIONS!");
  console.log("==================================================");
  process.exit(0);
}
