# TFTS Drone — Permanent 301/308 Redirect Mapping

**Host:** `https://tfts.co.uk`  
**Purpose:** Consolidate redundant taxonomies, preserve legacy SEO equity, and eliminate keyword cannibalisation.  

---

## 1. Domain-Level Redirects (Configured in DNS / Vercel Edge)

| Source URL Pattern | Target Canonical URL | Status Code | Reason |
|---|---|---|---|
| `https://www.tfts.co.uk/*` | `https://tfts.co.uk/$1` | 301 Permanent | Apex canonical domain enforcement |
| `https://drone.entirefm.com/*` | `https://tfts.co.uk/$1` | 301 Permanent | Legacy brand migration |
| `https://www.altitude-hire.com/*` | `https://tfts.co.uk/$1` | 301 Permanent | Legacy brand migration |
| `https://altitude-hire.com/*` | `https://tfts.co.uk/$1` | 301 Permanent | Legacy brand migration |

---

## 2. Taxonomy Consolidation (`/industries` → `/sectors`)

| Redundant Source URL | Canonical Destination URL | Status Code | Strategy |
|---|---|---|---|
| `/industries` | `/sectors` | 308 Permanent | Consolidates redundant taxonomy index |
| `/industries/facilities-management` | `/sectors/facilities-management` | 308 Permanent | Eliminates duplicate FM sector page |
| `/industries/commercial-property` | `/sectors/commercial-property` | 308 Permanent | Eliminates duplicate Property sector page |
| `/industries/construction` | `/sectors/construction` | 308 Permanent | Eliminates duplicate Construction sector page |
| `/industries/infrastructure` | `/sectors/infrastructure` | 308 Permanent | Eliminates duplicate Infrastructure sector page |
| `/industries/utilities-energy` | `/sectors/utilities-energy` | 308 Permanent | Eliminates duplicate Utilities sector page |
| `/industries/solar-renewable-energy` | `/sectors/solar-renewable-energy` | 308 Permanent | Eliminates duplicate Solar sector page |
| `/industries/insurance-loss-adjusters` | `/sectors/insurance-loss-adjusters` | 308 Permanent | Eliminates duplicate Insurance sector page |
| `/industries/surveyors` | `/sectors/surveyors` | 308 Permanent | Eliminates duplicate Surveyors sector page |
| `/industries/heritage-conservation` | `/sectors/heritage-conservation` | 308 Permanent | Eliminates duplicate Heritage sector page |
| `/industries/agriculture-rural-estates` | `/sectors/agriculture-rural-estates` | 308 Permanent | Eliminates duplicate Agriculture sector page |
| `/industries/events-venues-media` | `/sectors/events-venues-media` | 308 Permanent | Eliminates duplicate Events sector page |
| `/industries/:slug/:service` | `/sectors/:slug` | 308 Permanent | Safely forwards dynamic deep links to sector hub |

---

## 3. Service Intent Consolidation & Legacy Renaming

| Source URL | Canonical Destination URL | Status Code | Strategy |
|---|---|---|---|
| `/gaussian-splat` | `/tfts-3d` | 308 Permanent | Rebrands 3D service showcase to TFTS 3D |
| `/services/gaussian-splat-capture` | `/tfts-3d` | 308 Permanent | Directs old service slug to canonical TFTS 3D showcase |
| `/services/drone-roof-surveys` | `/services/roof-inspections` | 308 Permanent | Consolidates roof survey intent onto primary roof page |
| `/services/commercial-drone-inspections` | `/services/drone-inspection` | 308 Permanent | Consolidates commercial inspection hub intent |
| `/services/thermal-drone-surveys` | `/services/thermal-imaging` | 308 Permanent | Consolidates thermal survey intent |
| `/services/solar-pv-drone-inspections` | `/services/solar-panel-inspections` | 308 Permanent | Consolidates solar inspection intent |
| `/services/facade-cladding-drone-inspections` | `/services/facade-inspections` | 308 Permanent | Consolidates façade and cladding inspection intent |
| `/services/drone-surveying-mapping` | `/services/surveying-mapping` | 308 Permanent | Consolidates surveying and mapping intent |

