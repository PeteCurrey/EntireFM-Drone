# TFTS Drone — Keyword & URL Ownership Architecture

**Canonical Production Host:** `https://tfts.co.uk`  
**Brand:** TFTS Drone (Technical Flight & Thermal Surveys)  
**Strategy:** Topical Authority through Single Page Intent Ownership  

---

## 1. Core Commercial Money Pages (Primary Services)

| Target Search Intent | Primary Target Keyword | Canonical URL | Current Title | Current H1 | Page Type | Status | Action |
|---|---|---|---|---|---|---|---|
| **Commercial Drone Services Hub** | commercial drone services | `/services` | Commercial Drone Surveys & Inspections UK \| TFTS Drone | COMMERCIAL DRONE SURVEYS & INSPECTIONS | Commercial Hub | Index, Follow | **IMPROVE** (Consolidated semantic hub) |
| **Drone Roof Surveys** | drone roof surveys | `/services/roof-inspections` | Drone Roof Surveys & Commercial Roof Inspections \| TFTS Drone | DRONE ROOF INSPECTIONS | Core Service | Index, Follow | **IMPROVE** (Owns roof survey & commercial roof inspection intent) |
| **Commercial Drone Inspections** | commercial drone inspections | `/services/drone-inspection` | Commercial Drone Inspections & Building Audits \| TFTS Drone | DRONE INSPECTION | Core Service | Index, Follow | **IMPROVE** (Broad inspection hub linking to specialist disciplines) |
| **Thermal Drone Surveys** | thermal drone surveys | `/services/thermal-imaging` | Thermal Drone Surveys & Aerial Thermography \| TFTS Drone | THERMAL IMAGING | Core Service | Index, Follow | **IMPROVE** (Radiometric building envelope, moisture & heat loss) |
| **Solar PV Drone Inspections** | solar PV drone inspections | `/services/solar-panel-inspections` | Solar PV Drone Inspections & Thermography \| TFTS Drone | SOLAR PANEL INSPECTIONS | Core Service | Index, Follow | **IMPROVE** (Rooftop PV, solar farm thermography & hotspot audits) |
| **Façade & Cladding Inspections** | drone façade inspection | `/services/facade-inspections` | Façade & Cladding Drone Inspections \| TFTS Drone | FACADE INSPECTIONS | Core Service | Index, Follow | **IMPROVE** (High-level elevation, cladding & masonry audits) |
| **Drone Surveying & Mapping** | drone surveying and mapping | `/services/surveying-mapping` | Drone Surveying, Mapping & Photogrammetry \| TFTS Drone | SURVEYING & MAPPING | Core Service | Index, Follow | **IMPROVE** (Orthomosaics, photogrammetry, point clouds, volumetrics) |
| **Construction Progress Monitoring** | drone construction progress monitoring | `/services/construction-monitoring` | Drone Construction Progress Monitoring \| TFTS Drone | CONSTRUCTION MONITORING | Core Service | Index, Follow | **IMPROVE** (Scheduled progress flights, milestones & reporting) |
| **TFTS 3D Modelling & Capture** | 3D drone modelling | `/tfts-3d` | TFTS 3D — 3D Drone Modelling & Digital Site Capture \| TFTS 3D | TFTS 3D INTERACTIVE 3D MODELLING | Core Showcase | Index, Follow | **IMPROVE** (Real WebGL Gaussian Splat viewer + photogrammetry) |
| **Commercial Aerial Photography** | commercial aerial photography | `/services/aerial-photography-film` | Aerial Photography UK \| 4K Drone Filming \| TFTS Drone | AERIAL PHOTOGRAPHY & FILM | Media Service | Index, Follow | **KEEP** (Marketing & media visual asset delivery) |

---

## 2. Supporting Specialist Services

| Service Slug | Canonical URL | Target Search Intent | Action | Ownership Notes |
|---|---|---|---|---|
| `building-envelope-inspections` | `/services/building-envelope-inspections` | building envelope drone inspection | **KEEP** | Subordinate to `/services/facade-inspections` & `/services/roof-inspections` |
| `dilapidation-drone-surveys` | `/services/dilapidation-drone-surveys` | drone dilapidation surveys | **KEEP** | Targets commercial lease & condition disputes |
| `volumetric-surveys` | `/services/volumetric-surveys` | drone volumetric surveys | **KEEP** | Stockpile & earthworks volume measurement |
| `orthomosaic-mapping` | `/services/orthomosaic-mapping` | orthomosaic drone mapping | **KEEP** | High-resolution 2D geo-referenced site maps |
| `photogrammetry` | `/services/photogrammetry` | drone photogrammetry UK | **KEEP** | 3D mesh & photogrammetric models |
| `lidar-point-cloud-surveys` | `/services/lidar-point-cloud-surveys` | drone LiDAR point clouds | **KEEP** | Laser scan terrain & structural geometry |
| `bridge-drone-inspections` | `/services/bridge-drone-inspections` | drone bridge inspections | **KEEP** | Transport infrastructure structural audits |
| `rail-corridor-surveys` | `/services/rail-corridor-surveys` | rail corridor drone surveys | **KEEP** | Linear infrastructure & track corridor capture |
| `pipeline-corridor-surveys` | `/services/pipeline-corridor-surveys` | pipeline drone surveys | **KEEP** | Utility corridor & pipeline inspection |
| `insurance-loss-adjuster-surveys` | `/services/insurance-loss-adjuster-surveys` | insurance drone surveys | **KEEP** | Post-incident damage & claims evidence |
| `emergency-response` | `/services/emergency-response` | emergency drone response | **KEEP** | Rapid deployment incident inspection |
| `digital-twin-capture` | `/services/digital-twin-capture` | digital twin drone capture | **KEEP** | Digital twin visual records for asset management |
| `360-aerial-panoramas` | `/services/360-aerial-panoramas` | 360 aerial panoramas | **KEEP** | Interactive aerial panorama context |
| `fpv-drone-filming` | `/services/fpv-drone-filming` | FPV drone filming UK | **KEEP** | High-speed indoor/outdoor cinematic flythroughs |
| `agricultural-surveys` | `/services/agricultural-surveys` | agricultural drone surveys | **KEEP** | Farmland, estate & crop context mapping |

---

## 3. Sector / Industry Architecture (Consolidated)

| Canonical Sector URL | Target Keyword / Intent | Redundant URLs Redirected | Index Status | Action |
|---|---|---|---|---|
| `/sectors/facilities-management` | drone surveys for facilities management | `/industries/facilities-management` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/commercial-property` | commercial property drone surveys | `/industries/commercial-property` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/construction` | drone services for construction | `/industries/construction` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/infrastructure` | infrastructure drone inspections | `/industries/infrastructure` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/utilities-energy` | utility & energy drone inspections | `/industries/utilities-energy` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/solar-renewable-energy` | solar farm drone inspections | `/industries/solar-renewable-energy` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/insurance-loss-adjusters` | drone surveys for loss adjusters | `/industries/insurance-loss-adjusters` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/surveyors` | drone support for surveyors | `/industries/surveyors` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/heritage-conservation` | heritage building drone surveys | `/industries/heritage-conservation` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/agriculture-rural-estates` | rural estate drone surveys | `/industries/agriculture-rural-estates` | Index, Follow | **KEEP / CONSOLIDATE** |
| `/sectors/events-venues-media` | drone filming for venues and events | `/industries/events-venues-media` | Index, Follow | **KEEP / CONSOLIDATE** |

---

## 4. Programmatic & Dynamic Page Safety Rules

| Route Pattern | Purpose | Indexability Policy | Sitemap Inclusion |
|---|---|---|---|
| `/[crosspage]` | Service × Location combinations | **Noindex, Follow** (Quality Gate) | Excluded from Sitemap |
| `/seo/[location]/[sector]/[service]` | Tri-fold programmatic landing pages | Conditional: `Index` only if curated, else `Noindex` | Excluded until reviewed |
| `/drone-services/[location]/[service]` | Dynamic local service pages | Conditional: `Index` only if curated, else `Noindex` | Excluded until reviewed |
| `/packages/[location]/[bundle]` | Dynamic localized packages | Conditional: `Index` only if curated, else `Noindex` | Excluded until reviewed |
| `/client-portal-demos/*` | Interactive client deliverable demos | **Noindex, Follow** | Excluded from Sitemap |
| `/admin/*` | Administrative & analytics backend | **Disallow via robots.txt + Noindex** | Excluded from Sitemap |
| `/api/*` | API endpoints | **Disallow via robots.txt** | Excluded from Sitemap |

