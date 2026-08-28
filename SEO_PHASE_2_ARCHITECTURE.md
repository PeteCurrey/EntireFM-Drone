# TFTS Drone — Phase 2 SEO Architecture & Core Commercial Money Pages Report

**Brand:** TFTS Drone  
**Full Trading Name:** Technical Flight & Thermal Surveys  
**Canonical Host:** `https://tfts.co.uk`  
**Phase:** Phase 2 (Keyword Architecture, Service/Sector Consolidation & Money Pages)  

---

## 1. Executive Overview & Search Positioning Strategy

In Phase 2, we have transitioned the organic search architecture of TFTS Drone from a fragmented multi-domain model to a structured commercial search engine hierarchy.

### Strategic Positioning:
- **Primary Category:** Commercial Drone Surveys & Inspections across the UK.
- **Brand Identity:** Specialist technical aviation & commercial property intelligence (property intelligence from the air).
- **Core Pillars:** Roof surveys, building inspections, thermal imaging, solar PV audits, façade/cladding inspections, surveying & mapping, construction monitoring, and TFTS 3D digital capture.
- **Differentiation:** Facilities Management is treated as a strategic **client sector**, not as the limiting service definition of the company.

---

## 2. Issues Audited & Resolutions Applied

| Previous Issue | Root Cause | Phase 2 Resolution |
|---|---|---|
| **Dual Taxonomy (`/industries` vs `/sectors`)** | Parallel directories existed for the same 11 verticals | Retired `/industries` entirely; made `/sectors` the single canonical taxonomy; added 308 permanent redirects in `next.config.ts`. |
| **Search Intent Cannibalisation** | Competing URLs existed for "roof survey" vs "roof inspection" | Assigned single authoritative canonical URLs to each search intent; established permanent redirect aliases. |
| **Exposure of Raw Tech Terms** | "Gaussian Splat" was used as the customer-facing service name | Branded service as **TFTS 3D** (*3D Drone Modelling & Digital Site Capture*); preserved technical Gaussian Splat WebGL engine on `/tfts-3d`. |
| **Unsubstantiated Claims** | "Leading provider" & "unrivalled" claims in programmatic templates | Removed superlatives in favor of factual, technical positioning. |
| **Missing Semantic Breadcrumbs** | Service and sector pages lacked hierarchical navigation | Added visual breadcrumbs and `BreadcrumbList` JSON-LD schema across service and sector templates. |

---

## 3. Definitive Core Commercial Money Pages

| Core Service | Canonical URL | Primary Search Intent | Target Heading (H1) | Refined SEO Title |
|---|---|---|---|---|
| **1. Commercial Drone Hub** | `/services` | commercial drone services | COMMERCIAL DRONE SURVEYS & INSPECTIONS | Commercial Drone Surveys & Inspections UK \| TFTS Drone |
| **2. Drone Roof Surveys** | `/services/roof-inspections` | drone roof surveys / commercial roof inspection | DRONE ROOF INSPECTIONS | Drone Roof Surveys & Commercial Roof Inspections \| TFTS Drone |
| **3. Commercial Inspections** | `/services/drone-inspection` | commercial drone building inspection | DRONE INSPECTION | Commercial Drone Inspections & Building Audits \| TFTS Drone |
| **4. Thermal Drone Surveys** | `/services/thermal-imaging` | thermal drone survey / aerial thermography | THERMAL IMAGING | Thermal Drone Surveys & Aerial Thermography \| TFTS Drone |
| **5. Solar PV Inspections** | `/services/solar-panel-inspections` | solar panel drone inspection | SOLAR PANEL INSPECTIONS | Solar PV Drone Inspections & Thermography \| TFTS Drone |
| **6. Façade & Cladding** | `/services/facade-inspections` | drone façade & cladding inspection | FACADE INSPECTIONS | Façade & Cladding Drone Inspections \| TFTS Drone |
| **7. Surveying & Mapping** | `/services/surveying-mapping` | drone surveying and mapping | SURVEYING & MAPPING | Drone Surveying, Mapping & Photogrammetry \| TFTS Drone |
| **8. Construction Monitoring** | `/services/construction-monitoring` | drone construction progress monitoring | CONSTRUCTION MONITORING | Drone Construction Progress Monitoring \| TFTS Drone |
| **9. TFTS 3D Modelling** | `/tfts-3d` | 3D drone modelling / digital twin capture | TFTS 3D INTERACTIVE 3D MODELLING | 3D Drone Modelling & Digital Site Capture \| TFTS 3D |
| **10. Commercial Media** | `/services/aerial-photography-film` | commercial aerial photography | AERIAL PHOTOGRAPHY & FILM | Aerial Photography UK \| 4K Drone Filming \| TFTS Drone |

---

## 4. Sector Architecture (Canonical: `/sectors/*`)

Each sector page addresses industry-specific operational challenges, compliance standards, and required deliverables:

1. **Facilities Management** (`/sectors/facilities-management`): Roof condition baselines, gutter audits, thermal energy loss, CAFM integration.
2. **Commercial Property** (`/sectors/commercial-property`): Pre-acquisition surveys, dilapidations evidence, façade audits, lease handover records.
3. **Construction** (`/sectors/construction`): Progress monitoring cycles, orthomosaics, cut & fill volumetrics, contractor verification.
4. **Infrastructure & Transport** (`/sectors/infrastructure`): Bridge inspections, highways, rail corridors, structural access.
5. **Utilities & Energy** (`/sectors/utilities-energy`): Pipeline corridors, transmission towers, substation visual audits.
6. **Solar & Renewable Energy** (`/sectors/solar-renewable-energy`): PV string diagnostics, thermal hotspot detection, IEC-compliant thermography.
7. **Insurance & Loss Adjusters** (`/sectors/insurance-loss-adjusters`): Storm/fire damage documentation, rapid claims evidence, inaccessible site review.
8. **Surveyors & Engineers** (`/sectors/surveyors`): GCP-controlled photogrammetry, point clouds, topographic mapping.
9. **Heritage & Conservation** (`/sectors/heritage-conservation`): Non-contact masonry inspection, listed building condition records.
10. **Agriculture & Rural Estates** (`/sectors/agriculture-rural-estates`): Estate mapping, boundary visualization, land assets.
11. **Events, Venues & Media** (`/sectors/events-venues-media`): High-end 4K/6K visual assets, venue overviews, marketing flythroughs.

---

## 5. Programmatic & Dynamic URL Policy (Noindex Controls)

To safeguard the domain from thin doorway penalties:
- **`/[crosspage]` combinations**: Set to `robots: { index: false, follow: true }` and excluded from `sitemap.xml`.
- **Dynamic localized packages (`/packages/[location]/[bundle]`)**: Governed by the SEO registry quality gate (`indexabilityStatus === 'Index'`).
- **Client Portal Demos (`/client-portal-demos/*`)**: Set to `noindex` (sandbox presentation tools).
- **Admin & Command Centre (`/admin/*`)**: Disallowed via `robots.txt` + `noindex` header.

---

## 6. Phase 3 Recommended Next Steps (Controlled Local Expansion)

Once the core domain achieves initial organic crawl authority on its 10 primary money pages and 11 sector hubs:
1. **Curate Tier 1 City Hubs:** Hand-craft 6–8 high-intent commercial location pages (London, Birmingham, Manchester, Leeds, Sheffield, Bristol) with unique case studies and real project photos.
2. **Case Study Internal Linking:** Connect genuine completed missions in `/portfolio/*` to corresponding service pages (e.g., Bridge Inspection Case Study → Bridge Drone Inspections).
3. **Schema Expansion:** Add `hasPart` / `isPartOf` hierarchy connecting `/services` to individual service sub-entities.
