# TFTS Drone — Phase 1 Technical SEO, Crawlability & Indexing Foundation Audit

**Canonical Production Domain:** `https://tfts.co.uk`  
**Brand Identity:** TFTS Drone  
**Full Trading Name:** Technical Flight & Thermal Surveys  
**Legal Entity Relationship:** TFTS Drone is a trading brand of EntireFM Ltd  
**Date of Audit:** August 2026  
**Status:** Production Ready  

---

## 1. Executive Summary & Before vs After

### Before
- **Brand & Domain Fragmented:** Multiple competing hostnames across metadata (`drone.entirefm.com`, `altitude-hire.com`, `www.entirefm.com`).
- **Duplicate Sitemaps:** Both `app/sitemap.ts` and `app/sitemap.xml/route.ts` existed concurrently, generating inconsistent XML feeds.
- **Artificial Lastmod Signals:** Sitemap generated `new Date()` dynamically on every request, signaling false daily content updates to Googlebot.
- **Over-reaching Middleware:** Supabase authentication and session refreshing ran indiscriminately across public marketing HTML requests.
- **Service Name Inconsistency:** Visual 3D capability was branded purely as "Gaussian Splat", exposing raw rendering technology rather than a proprietary commercial capability.
- **Programmatic Doorway Risk:** Unfiltered cross-pages (`service × location`) were exposed to search engines without indexability safety gates.

### After
- **Single Authoritative Canonical Host:** `https://tfts.co.uk` enforced site-wide across `metadataBase`, canonical tags, Open Graph URLs, Twitter cards, and JSON-LD schemas.
- **Consolidated Sitemap Architecture:** Native App Router `app/sitemap.ts` is the single source of truth. Duplicate `app/sitemap.xml/route.ts` removed.
- **Clean Lastmod Handling:** Volatile `new Date()` removed; stable change frequencies and priority levels configured.
- **Protected Public Crawling:** `middleware.ts` scoped strictly to `/admin/:path*`. Public routes render directly without auth overhead.
- **Proprietary Service Brand:** "Gaussian Splat" transitioned to **TFTS 3D** across all customer-facing routes, headings, metadata, and navigation. Real interactive WebGL 3D Gaussian Splat viewer powered by 22.7 MB `.ksplat` asset (540,274 splats) integrated on `/tfts-3d`.
- **Programmatic SEO Safety Gate:** Cross-pages and dynamic candidate routes enforce `robots: { index: false, follow: true }` until passing quality thresholds.

---

## 2. Canonical Host Configuration
- **Apex Domain:** `https://tfts.co.uk`
- **Redirects:** `https://www.tfts.co.uk` → `https://tfts.co.uk` (301 permanent redirect)
- **Legacy Redirects:** `https://drone.entirefm.com/*` → `https://tfts.co.uk/*` (301 permanent redirect)
- **URL Cleanliness:** Query parameters from tracking/analytics (`?utm_*`, `?source=*`) do not create duplicate canonical tags. Canonical URLs are strictly self-referencing and clean.

---

## 3. Robots.txt (`https://tfts.co.uk/robots.txt`)
```text
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://tfts.co.uk/sitemap.xml
```
*Note: `/_next/` blocking removed to ensure Googlebot has full access to JavaScript and CSS assets for complete rendering.*

---

## 4. Sitemap Architecture (`https://tfts.co.uk/sitemap.xml`)
- **Total Indexable URLs in Sitemap:** Curated high-value pages only.
  - Core Static Landing Pages (Homepage, Services Hub, Sectors Hub, TFTS 3D Showcase, Fleet, Team, Pricing Guidance, Operations Standard, Showreel, Brief Assistant, Cost Estimator, Output Selector, Sample Deliverables, Portfolio, Resources, Contact).
  - 28 Core Service Pages (`/services/[slug]`).
  - 11 Core Sector Hubs (`/sectors/[slug]`).
  - High-intent Location Hubs (`/locations/[slug]`).
  - Substantive Knowledge Base & Resource Articles (`/resources/[slug]`).
- **Excluded Categories (Noindex / Not in Sitemap):**
  - `/admin/*` (All administrative & command centre tools)
  - `/api/*` (Backend endpoints)
  - `/client-portal-demos/*` (Non-indexable interactive demo sandboxes)
  - `/[crosspage]` (Uncurated programmatic combinations with `noindex, follow`)
  - Staging, preview, and Vercel branch deployments.

---

## 5. Structured Data & Schema Signals
1. **Organization Schema (`https://tfts.co.uk/#organization`):**
   - Name: `TFTS Drone`
   - Alternate Name: `Technical Flight & Thermal Surveys`
   - URL: `https://tfts.co.uk`
   - Parent Organization: `EntireFM Ltd` (`https://www.entirefm.com`)
   - Offer Catalog: Commercial drone roof surveys, thermal imaging, UAV surveying & mapping, construction monitoring, TFTS 3D interactive capture, solar PV inspections.
2. **WebSite Schema (`https://tfts.co.uk/#website`):**
   - Publisher: Reference to `#organization`
   - Name: `TFTS Drone`
3. **FAQ Schema:**
   - Accurate, unsubstantiated claims removed; questions and answers reflect actual flight constraints, insurance coverage (£10M Public Liability), NOTAM workflows, and turnarounds.

---

## 6. Service Migration: TFTS 3D
- **Service Route:** `/tfts-3d`
- **Legacy Route:** `/gaussian-splat` permanently redirected via `next.config.ts` (308/301) to `/tfts-3d`.
- **Underlying Engine:** `@mkkellogg/gaussian-splats-3d` WebGL viewer rendering `public/splats/site.ksplat` (22.7 MB, 540,274 splats, Y-down Polycam coordinate compensation).
- **Positioning:** Branded as **TFTS 3D** (Interactive 3D modelling & digital site capture). Technical term "Gaussian splatting" preserved only as a subordinate technology mention.

---

## 7. Vercel & Production Environment Verification Checklist

| Item | Status | Notes |
|---|---|---|
| Production Domain | `tfts.co.uk` | Target apex domain |
| WWW Redirect | `www.tfts.co.uk` → `tfts.co.uk` | Requires Vercel Dashboard Domain Setting |
| Production Branch | `main` | Continuous deployment from repository |
| Environment Variables | `NEXT_PUBLIC_SITE_URL=https://tfts.co.uk` | Configured in `lib/brand.ts` fallback |
| Vercel Auth / Password | Disabled on Production | Production must remain publicly crawlable |
| Preview Crawl Protection | Enabled on Vercel | Prevents `*.vercel.app` indexing |

---

## 8. Google Search Console Action Plan
1. **Property Setup:** Add Domain property for `tfts.co.uk` in Google Search Console.
2. **Sitemap Submission:** Submit `https://tfts.co.uk/sitemap.xml`.
3. **Legacy Address Change:** In the old `drone.entirefm.com` GSC property, initiate the *Change of Address* tool pointing to `tfts.co.uk`.
4. **URL Inspection:** Test live URL for homepage `https://tfts.co.uk` and `/tfts-3d` to confirm 200 HTTP response, rendered HTML, and schema detection.
