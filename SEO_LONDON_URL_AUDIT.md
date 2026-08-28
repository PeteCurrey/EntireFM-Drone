# TFTS Drone — London URL Audit & Canonical Inventory

**Date**: August 2026  
**Brand**: TFTS Drone (Technical Flight & Thermal Surveys)  
**Domain**: `https://tfts.co.uk`  
**Primary Intent**: `Commercial Drone Services London`  
**Flagship URL**: `https://tfts.co.uk/locations/london`

---

## 1. Executive Summary

This audit catalogs all routes, programmatic patterns, and legacy endpoints in the repository related to **London**. 

In accordance with Phase 3 technical SEO principles, **all broad commercial search intent for London is consolidated under the single canonical flagship URL:**
`https://tfts.co.uk/locations/london`

No duplicate or competing doorway pages are permitted to index for broad London drone service queries.

---

## 2. Complete London URL Inventory

| URL | Search Intent | Index State | Canonical Owner | Action | Rationale / Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/locations/london` | **Commercial Drone Services London** (Broad Location) | **INDEX, FOLLOW** (200 OK) | `https://tfts.co.uk/locations/london` | **KEEP & IMPROVE (FLAGSHIP)** | Single primary commercial authority for London & Greater London. High-depth bespoke page. |
| `/[crosspage]` (e.g. `/drone-roof-inspections-london`) | Programmatic Service × Location combinations | **NOINDEX, FOLLOW** | Self / Redirect where appropriate | **NOINDEX** | Programmatic cross-pages kept unindexed to prevent thin doorway cannibalisation. |
| `/[crosspage]` (e.g. `/thermal-imaging-london`) | Programmatic Service × Location combinations | **NOINDEX, FOLLOW** | Self / Redirect where appropriate | **NOINDEX** | Excluded from XML sitemap; robots `noindex, follow` enforced. |
| `/drone-services/london/[service]` | 2-Tier Programmatic Matrix | **NOINDEX, FOLLOW** (Mock Registry) | `https://tfts.co.uk/drone-services/london/...` | **NOINDEX / CONSOLIDATE** | Unindexed until specific Phase 4 high-value sub-pages are individually approved. |
| `/seo/london/[sector]/[service]` | 3-Tier Programmatic Matrix | **NOINDEX, FOLLOW** (Mock Registry) | `https://tfts.co.uk/seo/london/...` | **NOINDEX / CONSOLIDATE** | Experimental programmatic route; kept unindexed. |
| `/packages/london/[bundle]` | Location-specific bundle pricing | **NOINDEX, FOLLOW** | Self | **NOINDEX** | Pricing bundles rendered internally; noindex to avoid thin content footprint. |
| Legacy EntireFM `/locations/london` | Old domain reference | Redirected | `https://tfts.co.uk/locations/london` | **301/308 REDIRECT** | DNS/Host-level canonical redirects from old domain to `https://tfts.co.uk/locations/london`. |

---

## 3. Consolidation & Ownership Rules

1. **Broad Intent Ownership**:
   All general queries (`commercial drone services london`, `drone surveys london`, `drone inspections london`, `drone company london`) are strictly owned by `/locations/london`.
2. **Internal Anchor Strategy**:
   Site-wide footers, hubs, and sector pages must link directly to `/locations/london` with descriptive commercial anchor text (e.g. *"Commercial Drone Services London"*).
3. **No Doorway Pages**:
   No individual borough sub-pages (e.g. `/locations/london/camden`, `/locations/london/westminster`) are to be auto-generated or indexed. Greater London coverage is articulated naturally within the flagship London page.

---

## 4. Phase 4 Candidate Service × Location Prioritisation

Below is the strategic ranking of potential future dedicated sub-pages (`/locations/london/[service]` or dedicated slug) for Phase 4 rollout. Each candidate is evaluated on commercial value, search volume, differentiation from the flagship page, and content potential:

| Candidate Sub-Page | Commercial Value | Search Intent Specificity | Differentiation Potential | Cannibalisation Risk with `/locations/london` | Phase 4 Priority | Strategic Recommendation |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Drone Roof Surveys London** | **VERY HIGH** | High (`drone roof survey london`, `commercial roof inspection london`) | **High** (Detailed flat-roof, cladding, leaks, thermal integration, dilapidations) | Low (Specific to roofing & building envelope) | **HIGH** | **Priority 1 for Phase 4**. Largest commercial query volume in London property management. |
| **Façade & Cladding Inspections London** | **VERY HIGH** | High (`facade inspection london`, `high-rise cladding drone survey`) | **High** (High-rise access, fire-safety / EWS1 visual evidence, close-range zoom) | Low (Specific vertical envelope scope) | **HIGH** | **Priority 2 for Phase 4**. Critical for post-Grenfell compliance and central London towers. |
| **Commercial Drone Inspections London** | **HIGH** | Medium (`commercial building drone inspection london`) | **Medium** (Broad commercial structures, bridges, FM assets) | Medium (Overlaps partially with main location hub) | **MEDIUM** | Evaluate after Roof & Façade pages are established. |
| **Thermal Drone Surveys London** | **HIGH** | Medium (`thermal drone survey london`, `aerial thermography london`) | **High** (Heat loss, flat roof water ingress, cold bridging, BREEAM/EPC audits) | Low (Specialist radiometric sensor workflow) | **HIGH** | **Priority 3 for Phase 4**. High ticket commercial building physics & FM audit service. |
| **Construction Progress Monitoring London** | **HIGH** | Medium (`construction drone london`, `site progress aerial photography london`) | **High** (Time-lapse, BIM, developer reporting, investor packs) | Low (Specific to active contractors & developers) | **MEDIUM** | Strong commercial value; target major London development corridors. |
| **Drone Surveying & Mapping London** | **MEDIUM** | Medium (`drone survey london`, `topographical drone survey london`) | **High** (RTK, CAD, GIS, orthomosaic, volumetric analysis) | Low (Specific to engineering & land surveyors) | **MEDIUM** | Valuable for brownfield regeneration & infrastructure schemes. |
| **Solar PV Drone Inspections London** | **MEDIUM** | Low-Medium (`commercial solar drone inspection london`) | **High** (IEC 62446-3 radiometric compliance, hotspot detection) | Low (Rooftop solar asset specific) | **LOW** | Niche search volume in central London; higher in logistics belts. |
| **TFTS 3D London** | **HIGH** | Emerging (`3d gaussian splat london`, `digital site capture london`) | **Very High** (Interactive WebGL 3D, spatial site intelligence) | Low (Cutting-edge visual capability) | **MEDIUM** | Showcase as proprietary innovation; promote via primary `/tfts-3d` showcase. |

---

## 5. Summary of Actions for Current Phase

- [x] Primary canonical `/locations/london` established with 100% bespoke high-depth architecture.
- [x] All programmatic crosspages set to `noindex, follow`.
- [x] All legacy domain signals purged.
- [x] XML Sitemap updated to include `/locations/london` at priority `0.85`.
