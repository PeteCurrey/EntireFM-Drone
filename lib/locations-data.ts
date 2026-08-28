// lib/locations-data.ts

export interface LocationData {
  slug: string
  name: string
  region: string
  description: string
  heroIntro: string
  localRelevance: string
  sectors: string[]
  keyAssetTypes: string[]
  useCases: string[]
  deliverables: string[]
  operationalConsiderations: string
  popularBundles: string[]
  nearbyLocations: { name: string; slug: string }[]
  faqs: { q: string; a: string }[]
}

export const locationsData: LocationData[] = [
  {
    slug: "london",
    name: "London",
    region: "Greater London",
    description: "Commercial drone surveys, inspections and 3D capture across all 32 London boroughs — serving the capital's property, construction and infrastructure sectors.",
    heroIntro: "Serving commercial sites across London — from high-rise City towers to sprawling East End logistics parks and heritage buildings along the South Bank.",
    localRelevance: "London drone projects involve some of the UK's most complex operational environments: dense commercial rooftop portfolios, high-rise façade assessments, restricted airspace over Central London, and high-value development sites where data quality directly informs capital decisions. Operations require systematic airspace planning, frequent stakeholder coordination, and output capable of supporting RICS-standard reporting, insurance underwriting, and investment appraisal.",
    sectors: ["Commercial Property", "Construction", "Facilities Management", "Insurance & Claims", "Events & Media", "Public Sector", "Heritage & Conservation", "Investment & Finance"],
    keyAssetTypes: [
      "High-rise commercial towers (City & Canary Wharf)",
      "Portland stone and terracotta heritage façades",
      "Large-scale flat roofscapes across industrial boroughs",
      "Active construction sites and tall structure monitoring",
      "Solar PV arrays on commercial and public-sector roofs",
      "Railway infrastructure and station roofing",
    ],
    useCases: [
      "Pre-acquisition building condition surveys for investment property",
      "Post-event damage assessment for insurance claims",
      "Façade and cladding defect mapping on mid and high-rise buildings",
      "Construction progress monitoring for developers and investors",
      "Solar PV thermal inspections on rooftop arrays",
      "TFTS 3D digital capture for property marketing and planning submissions",
    ],
    deliverables: [
      "Orthorectified roof condition imagery with annotated defect reports",
      "Radiometric thermal imagery for building envelope and solar inspections",
      "Photogrammetric point clouds and digital terrain models",
      "TFTS 3D interactive 3D models for site visualisation",
      "Timestamped progress photo libraries with GPS metadata",
      "CAA-compliant operations documentation",
    ],
    operationalConsiderations: "Central London drone operations require airspace authorisation from NATS and, for some zones, direct coordination with air traffic control. We plan all flights around the specific site geometry, surrounding environment, public presence, and output requirements. FRZ and CTR constraints are assessed on a site-by-site basis. Lead times for heavily restricted locations are typically longer.",
    popularBundles: ["building-envelope-asset-condition-pack", "visual-sales-pack", "construction-progress-pack", "immersive-digital-capture-pack", "insurance-incident-evidence-pack"],
    nearbyLocations: [
      { name: "UK-wide", slug: "uk" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "Bristol", slug: "bristol" },
      { name: "Manchester", slug: "manchester" },
    ],
    faqs: [
      {
        q: "Can you carry out drone surveys in Central London and the City?",
        a: "Yes. We plan and coordinate commercial drone flights across Central London, including the City of London and Westminster, managing the necessary CAA and NATS airspace permissions on your behalf. Flight complexity and lead times vary by site, and some locations require direct ATC coordination.",
      },
      {
        q: "Do you offer high-rise façade inspections in London?",
        a: "Yes. Façade and cladding inspections are one of our core London services. We provide high-resolution close-range imagery for defect mapping, cladding condition assessments, and building envelope surveys — particularly relevant for post-Grenfell compliance monitoring on mid and high-rise commercial buildings.",
      },
      {
        q: "Can drone surveys support London property transactions?",
        a: "Yes. Pre-acquisition roof and building condition surveys help buyers, investors and their surveyors understand the physical condition of an asset before completion. Our imagery and reporting can be used alongside traditional surveys to identify condition risk.",
      },
      {
        q: "How do you handle the tight operational constraints of London sites?",
        a: "Every London project starts with a site-specific planning phase covering airspace, ground environment, access, neighbouring properties and the intended output. We do not assume any flight is straightforward — each is planned individually based on real site data.",
      },
    ],
  },
  {
    slug: "manchester",
    name: "Manchester",
    region: "Greater Manchester",
    description: "Commercial drone inspections, surveys and TFTS 3D capture for Greater Manchester's expanding commercial property portfolio, industrial estates and major regeneration projects.",
    heroIntro: "Supporting commercial projects across Greater Manchester — from NOMA and Spinningfields to Trafford Park's industrial estates and the Salford Quays creative and media quarter.",
    localRelevance: "Manchester's built environment is in an extended period of structural change. A significant volume of new-build commercial development, Permitted Development conversions, and major infrastructure investment runs alongside an existing industrial stock that still requires regular inspection and condition monitoring. The combination of active new-build sites and aging commercial roofscapes creates consistent demand for structured drone survey programmes.",
    sectors: ["Commercial Property", "Industrial Estates", "Construction & Development", "Media & Creative", "Infrastructure", "Logistics & Warehousing"],
    keyAssetTypes: [
      "New-build commercial towers under active construction",
      "Large industrial and warehousing units across Trafford Park",
      "Canal-side and heritage mill conversions",
      "Retail parks and out-of-town commercial centres",
      "Transport and logistics hubs including Manchester Airport environs",
      "Mixed-use regeneration sites across the Northern Quarter, Ancoats and NOMA",
    ],
    useCases: [
      "Construction milestone photography and video for investor and planning reporting",
      "Roof and gutter condition audits on aging industrial and warehouse stock",
      "Façade condition surveys for PD-converted and heritage mill buildings",
      "Solar thermal inspections on commercial rooftop PV arrays",
      "TFTS 3D digital capture for planning applications and site marketing",
      "Pre-lease condition documentation for large industrial and logistics assets",
    ],
    deliverables: [
      "Annotated roof condition reports with georeferenced imagery",
      "Radiometric thermal datasets for PV and building envelope analysis",
      "Construction progress time-series photo libraries",
      "TFTS 3D interactive models for development and planning applications",
      "HD video and stills for property marketing and leasing packs",
    ],
    operationalConsiderations: "Manchester city centre operations require standard CAA compliance. Flight planning considers urban density, the proximity of Manchester Airport's outer control zone in some southern locations, nearby rail and tram corridors, and the pace of active development sites. Industrial locations across Trafford Park and East Manchester typically offer more accessible operational environments.",
    popularBundles: ["construction-progress-pack", "roof-intelligence-pack", "building-envelope-asset-condition-pack", "survey-data-pack", "visual-sales-pack"],
    nearbyLocations: [
      { name: "Liverpool", slug: "liverpool" },
      { name: "Leeds", slug: "leeds" },
      { name: "Sheffield", slug: "sheffield" },
      { name: "Derby", slug: "derby" },
    ],
    faqs: [
      {
        q: "Do you cover construction sites in Manchester city centre?",
        a: "Yes. We provide regular progress monitoring flights for development sites across Manchester city centre, capturing milestone imagery and video for reporting to investors, planning authorities and senior stakeholders.",
      },
      {
        q: "Can you survey warehouses and industrial units across Trafford Park?",
        a: "Yes. Large flat-roof and pitched-roof surveys on industrial and logistics properties are a core part of our Greater Manchester service. We can survey multiple units within a portfolio on a single mobilisation.",
      },
      {
        q: "Do you work on canal-side and heritage mill buildings?",
        a: "Yes. Many of Greater Manchester's most significant commercial assets are in converted or adapted mill buildings. We provide detailed roof, parapet and fabric inspections on these structures, which often have complex rooflines and restricted access.",
      },
      {
        q: "What is your coverage across Greater Manchester's ten boroughs?",
        a: "We provide commercial drone services across all ten Greater Manchester boroughs — from Wigan in the west to Tameside and Stockport in the east. Operational constraints vary by location and are assessed individually for each project.",
      },
    ],
  },
  {
    slug: "sheffield",
    name: "Sheffield",
    region: "South Yorkshire",
    description: "Specialist drone inspection and surveying for Sheffield's industrial assets, commercial buildings and construction projects across South Yorkshire.",
    heroIntro: "Serving industrial, commercial and construction sites across Sheffield and South Yorkshire — from the Don Valley to the upper Sheaf corridor and the Ring Road industrial belt.",
    localRelevance: "Sheffield's commercial property stock reflects its industrial heritage: large-footprint factory units, multi-bay industrial sheds, engineering facilities, and a significant volume of older roofscapes that require regular condition monitoring. The city also hosts an expanding commercial core and a notable university quarter with complex multi-building campus estates.",
    sectors: ["Industrial Property", "Facilities Management", "Construction", "Surveying & Mapping", "Infrastructure", "Insurance"],
    keyAssetTypes: [
      "Large industrial units and manufacturing sheds",
      "Commercial warehousing and distribution centres",
      "Multi-bay engineering and production facilities",
      "City-centre mixed-use commercial and retail buildings",
      "University campus buildings and sports facilities",
      "Rail and road infrastructure corridors",
    ],
    useCases: [
      "Roof condition assessments on large industrial and warehouse properties",
      "Thermal imaging for energy loss mapping on industrial buildings",
      "Pre-dilapidations inspection and condition recording",
      "Topographic survey of brownfield redevelopment sites",
      "Construction progress monitoring for commercial schemes",
      "Building envelope inspection on city-centre commercial stock",
    ],
    deliverables: [
      "Annotated roof imagery with photographic condition reports",
      "Thermal radiation maps for building envelope assessment",
      "Topographic point clouds and digital surface models",
      "Progress photo libraries for construction contracts",
    ],
    operationalConsiderations: "Sheffield's varied topography — with significant elevation changes between the valley floor and the surrounding hills — affects both drone performance and safe operational planning. Industrial sites typically present manageable constraints, while city-centre flights require standard urban CAA compliance.",
    popularBundles: ["roof-intelligence-pack", "survey-data-pack", "construction-progress-pack", "building-envelope-asset-condition-pack", "insurance-incident-evidence-pack"],
    nearbyLocations: [
      { name: "Chesterfield", slug: "chesterfield" },
      { name: "Derby", slug: "derby" },
      { name: "Nottingham", slug: "nottingham" },
      { name: "Leeds", slug: "leeds" },
    ],
    faqs: [
      {
        q: "Do you offer industrial roof inspections across Sheffield and South Yorkshire?",
        a: "Yes. Drone roof surveys on industrial and manufacturing buildings are one of our most frequent South Yorkshire services, providing high-resolution condition evidence without the cost and disruption of early-stage scaffolding.",
      },
      {
        q: "Can you fly drones on sites near the Peak District boundary?",
        a: "Yes. Many commercial sites in the western Sheffield area border or are close to the Peak District National Park. We plan flights to comply with national park guidelines and applicable airspace constraints.",
      },
    ],
  },
  {
    slug: "chesterfield",
    name: "Chesterfield",
    region: "Derbyshire",
    description: "Drone roof surveys, mapping and inspection services for Chesterfield's industrial estates, commercial warehouses and Derbyshire business parks.",
    heroIntro: "Covering industrial parks, commercial warehousing and construction sites across Chesterfield and North Derbyshire.",
    localRelevance: "Chesterfield commercial property is dominated by industrial estates, warehousing, and business parks clustered along the M1 corridor. The town also hosts a significant volume of commercial and retail roofscapes requiring periodic inspection, and a growing volume of commercial construction.",
    sectors: ["Industrial Property", "Warehousing", "Facilities Management", "Construction", "Surveying & Mapping", "Agriculture & Estates"],
    keyAssetTypes: [
      "M1-corridor industrial parks and warehouse units",
      "Business park commercial buildings",
      "Agricultural and rural estate buildings",
      "Retail and commercial properties in the town centre",
    ],
    useCases: [
      "Roof condition surveys on large warehouse and industrial units",
      "Topographic surveys for brownfield and greenfield development sites",
      "Agricultural land and estate surveys",
      "Construction progress monitoring",
    ],
    deliverables: [
      "Annotated roof imagery and condition reports",
      "RTK topographic point clouds and maps",
      "Progress photo records for construction contracts",
    ],
    operationalConsiderations: "Operations in Chesterfield are planned around industrial access requirements, the M1 noise environment, and the specific needs of Derbyshire's varied commercial and rural environments.",
    popularBundles: ["roof-intelligence-pack", "survey-data-pack", "construction-progress-pack", "building-envelope-asset-condition-pack", "insurance-incident-evidence-pack"],
    nearbyLocations: [
      { name: "Sheffield", slug: "sheffield" },
      { name: "Derby", slug: "derby" },
      { name: "Nottingham", slug: "nottingham" },
      { name: "Birmingham", slug: "birmingham" },
    ],
    faqs: [
      {
        q: "Do you offer warehouse roof surveys across Chesterfield's industrial estates?",
        a: "Yes. We specialise in large-scale roof and gutter inspections for warehouses and industrial units across Chesterfield and North Derbyshire, often covering multiple units within a portfolio on a single visit.",
      },
      {
        q: "Can you provide high-accuracy topographic surveys in Chesterfield?",
        a: "Yes. We use RTK-enabled drones to provide high-accuracy mapping, contour surveys and stockpile volume calculations for construction and industrial sites across North Derbyshire.",
      },
    ],
  },
  {
    slug: "derby",
    name: "Derby",
    region: "Derbyshire",
    description: "Commercial drone surveys and inspections for Derby's manufacturing, industrial and construction sectors — covering aerospace parks, logistics estates and city commercial property.",
    heroIntro: "Supporting aerospace, industrial and commercial sites across Derby — from the Rolls-Royce Sinfin complex to Pride Park's commercial estate and the Raynesway logistics corridor.",
    localRelevance: "Derby is one of the UK's most significant manufacturing and engineering cities, home to Rolls-Royce's global aerospace headquarters and a dense cluster of precision engineering, advanced manufacturing and logistics businesses. This creates specific demand for high-detail inspection and condition-monitoring services on large industrial buildings, where access to roofscapes via traditional means is costly and time-consuming.",
    sectors: ["Aerospace & Advanced Manufacturing", "Industrial Property", "Logistics & Distribution", "Facilities Management", "Construction", "Infrastructure & Utilities"],
    keyAssetTypes: [
      "Large-footprint aerospace and advanced manufacturing facilities",
      "Logistics and distribution centres along the A52 and Raynesway",
      "Pride Park commercial office and retail units",
      "Legacy industrial sheds across Sinfin and Wilmorton",
      "City-centre commercial buildings and mixed-use developments",
      "Railway infrastructure — Derby is a major Midland Main Line node",
    ],
    useCases: [
      "Roof condition surveys on large manufacturing and logistics buildings",
      "Thermal imaging for energy loss analysis on industrial structures",
      "Pre-lease and pre-purchase building condition records",
      "Construction progress monitoring for commercial and industrial development",
      "Topographic survey of brownfield and former industrial sites",
      "TFTS 3D digital capture for industrial asset documentation",
    ],
    deliverables: [
      "High-resolution annotated roof condition reports",
      "Radiometric thermal datasets for energy and envelope analysis",
      "Georeferenced survey maps and point clouds",
      "Construction progress photo libraries with GPS and timestamping",
      "TFTS 3D interactive models for large building and site documentation",
    ],
    operationalConsiderations: "Derby operations require careful planning around the East Midlands Airport FRZ (which extends into parts of south Derby), active railway infrastructure and the operational sensitivity of advanced manufacturing sites. We coordinate directly with site operations teams where access or security protocols apply.",
    popularBundles: ["roof-intelligence-pack", "survey-data-pack", "construction-progress-pack", "building-envelope-asset-condition-pack", "insurance-incident-evidence-pack"],
    nearbyLocations: [
      { name: "Nottingham", slug: "nottingham" },
      { name: "Leicester", slug: "leicester" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "Sheffield", slug: "sheffield" },
    ],
    faqs: [
      {
        q: "Can you carry out drone surveys on large industrial and aerospace sites in Derby?",
        a: "Yes. We plan and execute commercial drone surveys within complex industrial environments, including sites with operational security requirements. All flights are planned site-specifically, and we coordinate with estates and facilities teams prior to mobilisation.",
      },
      {
        q: "Do you cover drone surveys near East Midlands Airport?",
        a: "Yes. For sites within the East Midlands Airport FRZ or its associated airspace zones, we coordinate the necessary permissions with the relevant authorities before commencing any flight. This is standard procedure for Derby and Nottingham area projects.",
      },
      {
        q: "Can you survey Pride Park office and commercial buildings?",
        a: "Yes. Pride Park is well within our operational area. We carry out roof condition surveys, façade inspections and building envelope assessments on commercial office and retail buildings throughout the estate.",
      },
      {
        q: "What types of deliverables do you provide for manufacturing and logistics sites?",
        a: "Our standard deliverables for large industrial buildings include annotated high-resolution roof imagery, thermal radiation maps, georeferenced photography and, where needed, TFTS 3D digital models for use in asset management, maintenance planning and insurance documentation.",
      },
    ],
  },
  {
    slug: "nottingham",
    name: "Nottingham",
    region: "East Midlands",
    description: "Commercial drone surveys, thermal inspections and 3D capture for Nottingham's commercial property, retail parks, industrial estates and development sites.",
    heroIntro: "Covering commercial property, retail parks and active development sites across Nottingham and Nottinghamshire — from the city centre and Lace Market to the Boots campus at Beeston and Nottingham Business Park.",
    localRelevance: "Nottingham supports a broad mix of commercial property types — a significant retail and leisure sector, substantial industrial and logistics estates, an active office market around the city centre and business parks, and a growing development pipeline. Proximity to East Midlands Airport makes airspace awareness a routine part of operational planning for many sites.",
    sectors: ["Commercial Property", "Industrial Estates", "Retail Parks & Leisure", "Facilities Management", "Construction & Development", "Education & Healthcare"],
    keyAssetTypes: [
      "Large retail parks and out-of-town commercial centres",
      "City-centre office buildings and mixed-use development",
      "Nottingham Science Park and business park commercial stock",
      "Industrial estates across Colwick, Netherfield and the Trent valley",
      "Large-footprint campus buildings (Boots, QMC, university campuses)",
      "Residential-to-commercial conversion schemes in the Lace Market",
    ],
    useCases: [
      "Roof and gutter surveys on large retail and commercial buildings",
      "Thermal imaging for energy loss on industrial and campus buildings",
      "Construction monitoring for city-centre development schemes",
      "Pre-acquisition building condition records",
      "TFTS 3D capture for large campus and science park assets",
      "Marketing imagery and video for commercial property disposal",
    ],
    deliverables: [
      "Annotated photographic roof condition reports",
      "Radiometric thermal surveys for energy and building fabric analysis",
      "HD construction progress records",
      "TFTS 3D models for campus and large-scale building documentation",
      "Aerial photography and video for property marketing",
    ],
    operationalConsiderations: "Operations in central Nottingham require standard urban CAA compliance. Sites to the south and east of the city — particularly near East Midlands Airport — require airspace coordination as a routine part of pre-flight planning. We assess FRZ and ATZ constraints for every Nottinghamshire project and manage the necessary notifications or permissions before mobilising.",
    popularBundles: ["roof-intelligence-pack", "survey-data-pack", "construction-progress-pack", "building-envelope-asset-condition-pack", "insurance-incident-evidence-pack"],
    nearbyLocations: [
      { name: "Derby", slug: "derby" },
      { name: "Leicester", slug: "leicester" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "Sheffield", slug: "sheffield" },
    ],
    faqs: [
      {
        q: "Do you carry out drone surveys on retail parks and large commercial properties in Nottingham?",
        a: "Yes. Retail park roof surveys are one of our most common Nottingham service types. A single drone mobilisation can cover multiple units within a retail or commercial park, providing condition photography and thermal analysis in a fraction of the time required by traditional access methods.",
      },
      {
        q: "Can you survey near East Midlands Airport?",
        a: "Yes. We routinely work on projects in and around the East Midlands Airport FRZ and ATZ. The necessary notifications and permissions are managed as part of our standard pre-flight planning process — no additional action is required from clients.",
      },
      {
        q: "Do you work on university and campus buildings in Nottingham?",
        a: "Yes. Large campus buildings — including healthcare, university and science park assets — are a regular part of our Nottingham workload. We can provide roof condition surveys, thermal building fabric analysis and, where relevant, TFTS 3D capture for large complex structures.",
      },
      {
        q: "Can you support commercial property marketing in Nottingham?",
        a: "Yes. We provide aerial photography and video for commercial property disposals, planning applications and development marketing. Projects can be combined with condition survey services for a comprehensive single-visit output.",
      },
    ],
  },
  {
    slug: "birmingham",
    name: "Birmingham",
    region: "West Midlands",
    description: "Commercial drone surveys, thermal inspections and digital 3D capture for Birmingham and the West Midlands — covering logistics parks, development sites and the UK's second city commercial property portfolio.",
    heroIntro: "Serving commercial and industrial sites across Birmingham and the wider West Midlands — from the Jewellery Quarter and the emerging WEST side of the city centre to Aston, Solihull and the M6 logistics corridor.",
    localRelevance: "Birmingham is the UK's second largest commercial property market and the economic engine of the West Midlands. It combines a rapidly redeveloping city centre — accelerated by the Commonwealth Games legacy infrastructure — with a dense and widespread logistics and industrial base across the M6, M42 and M5 corridors. This scale and variety creates consistent demand for structured aerial inspection, mapping and condition-monitoring programmes.",
    sectors: ["Commercial Property", "Logistics & Industrial", "Construction & Development", "Facilities Management", "Infrastructure & Transport", "Public Sector & Regeneration"],
    keyAssetTypes: [
      "Large logistics and distribution centres across the M6/M42 corridor",
      "Major city-centre commercial developments (WEST, Centenary Square)",
      "Industrial estates across Aston, Witton, Smethwick and Tyseley",
      "Retail parks and large-format commercial buildings across the suburbs",
      "Stadium and large-span roof structures",
      "Infrastructure assets including motorway junctions and rail yards",
    ],
    useCases: [
      "Portfolio roof surveys across multi-site logistics or industrial estates",
      "Thermal imaging for solar PV inspections and energy loss analysis",
      "Construction milestone monitoring for major development schemes",
      "Pre-acquisition condition surveys on commercial investment assets",
      "Façade and cladding inspections on mid and high-rise city-centre buildings",
      "TFTS 3D digital capture for development and planning applications",
    ],
    deliverables: [
      "High-resolution annotated roof condition reports across portfolios",
      "Radiometric thermal datasets for PV and building envelope analysis",
      "Construction progress photo and video libraries",
      "TFTS 3D interactive models for development applications and asset management",
      "Georeferenced aerial photography for planning and marketing",
    ],
    operationalConsiderations: "Birmingham International Airport (BHX) creates a large FRZ covering a significant portion of the south-east of the city and the Solihull borough. All projects in these zones require formal airspace coordination before any flight. The density of Birmingham city centre requires standard urban operational planning. The M6 logistics corridor and outer industrial areas present more accessible operational environments.",
    popularBundles: ["construction-progress-pack", "roof-intelligence-pack", "building-envelope-asset-condition-pack", "survey-data-pack", "visual-sales-pack"],
    nearbyLocations: [
      { name: "Nottingham", slug: "nottingham" },
      { name: "Leicester", slug: "leicester" },
      { name: "Manchester", slug: "manchester" },
      { name: "London", slug: "london" },
    ],
    faqs: [
      {
        q: "Can you carry out portfolio-wide drone surveys across multiple Birmingham sites?",
        a: "Yes. Multi-site portfolio surveys are one of our most efficient service models for Birmingham clients. We schedule across multiple properties within a geographic cluster, reducing per-site mobilisation costs and providing a consistent reporting standard across the portfolio.",
      },
      {
        q: "Do you cover the M6 and M42 logistics corridor?",
        a: "Yes. The logistics and distribution parks along the M6, M42 and M5 corridors are a significant part of our West Midlands workload. Large-format flat-roof warehouse surveys — often covering tens of thousands of square metres — can be completed in a fraction of the time required by access platforms.",
      },
      {
        q: "Can you work near Birmingham Airport (BHX) and Solihull?",
        a: "Yes, but these locations require advance airspace coordination with Birmingham ATC. This is standard practice for any site within the BHX FRZ or CTR. We manage the necessary notifications and permissions as part of pre-flight planning, with no additional burden on the client.",
      },
      {
        q: "Do you support city-centre construction monitoring in Birmingham?",
        a: "Yes. We provide regular construction progress monitoring flights for major development schemes across Birmingham city centre, capturing milestone imagery and video for investor, planning and contractor reporting.",
      },
    ],
  },
  {
    slug: "leicester",
    name: "Leicester",
    region: "East Midlands",
    description: "Commercial drone surveys, building inspections and thermal imaging across Leicester and Leicestershire — covering the city's industrial estates, logistics parks and growing commercial property portfolio.",
    heroIntro: "Supporting commercial and industrial sites across Leicester and Leicestershire — from the Waterside regeneration zone and the city's inner industrial ring to the M1 logistics corridor at Magna Park and the Golden Triangle.",
    localRelevance: "Leicester is an important East Midlands commercial and industrial centre, with a substantial logistics and distribution sector anchored by the Magna Park complex and the wider M1/A14 interchange. The city also hosts a significant industrial heritage — textiles, manufacturing and food production — alongside a redeveloping city core and an active university and healthcare estate. This mixed property landscape creates demand for a broad range of aerial inspection, survey and documentation services.",
    sectors: ["Logistics & Distribution", "Industrial Property", "Commercial Property & Development", "Facilities Management", "Education & Healthcare", "Retail & Leisure"],
    keyAssetTypes: [
      "Large logistics and distribution sheds at Magna Park and surrounding zones",
      "City-centre commercial buildings and the Waterside development area",
      "Industrial estates across Thurmaston, Syston, Oadby and Braunstone",
      "University of Leicester and De Montfort University campus buildings",
      "Retail parks and large-format commercial properties",
      "Warehousing and food production facilities in the wider Leicestershire belt",
    ],
    useCases: [
      "Roof condition surveys on large logistics and distribution sheds",
      "Solar PV thermal inspections on commercial and industrial rooftop arrays",
      "Pre-acquisition building condition records for investment transactions",
      "Construction progress monitoring for city-centre and residential development",
      "Thermal building fabric surveys on university and healthcare campuses",
      "TFTS 3D capture for planning applications and estate management",
    ],
    deliverables: [
      "Annotated high-resolution roof condition reports",
      "Radiometric thermal datasets for solar PV and building envelope analysis",
      "Georeferenced construction progress photography",
      "TFTS 3D interactive models for campus and large asset documentation",
      "Aerial photography and video for commercial property marketing",
    ],
    operationalConsiderations: "Leicester operations are generally well-served for access and airspace. East Midlands Airport's FRZ extends into parts of north Leicestershire and the Loughborough area — these zones require standard airspace coordination. The Magna Park area and wider M1 logistics belt present accessible operational environments for large-site surveys.",
    popularBundles: ["roof-intelligence-pack", "building-envelope-asset-condition-pack", "survey-data-pack", "construction-progress-pack", "immersive-digital-capture-pack"],
    nearbyLocations: [
      { name: "Nottingham", slug: "nottingham" },
      { name: "Derby", slug: "derby" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "Chesterfield", slug: "chesterfield" },
    ],
    faqs: [
      {
        q: "Can you survey large logistics sheds at Magna Park and the Golden Triangle?",
        a: "Yes. Large-format warehouse roof surveys are a core service for the Leicester area. A single drone survey deployment can cover a complete logistics unit — including roof condition photography, thermal imaging and, if required, point cloud data — in a fraction of the time needed by access platforms.",
      },
      {
        q: "Do you offer solar PV drone inspections for Leicester commercial properties?",
        a: "Yes. Solar thermal inspections using radiometric cameras are available for commercial and industrial rooftop PV arrays across Leicestershire. Reports identify underperforming strings, cell faults and hotspot conditions with non-contact efficiency.",
      },
      {
        q: "Can you carry out surveys near East Midlands Airport from a Leicester base?",
        a: "Yes. For projects in zones affected by the East Midlands Airport FRZ — including parts of north Leicestershire — we coordinate the necessary airspace permissions as a standard part of pre-flight planning.",
      },
      {
        q: "Do you work on university and healthcare campus buildings in Leicester?",
        a: "Yes. We provide roof condition surveys, thermal building fabric analysis and TFTS 3D digital capture for large campus buildings, including university and NHS Trust properties. We coordinate directly with estates teams for access and scheduling.",
      },
    ],
  },
  {
    slug: "leeds",
    name: "Leeds",
    region: "West Yorkshire",
    description: "Expert drone inspection and surveying across West Yorkshire and the M62 corridor, supporting retail, commercial and logistics development.",
    heroIntro: "Covering commercial property, retail parks and industrial sites across Leeds and West Yorkshire — from Leeds city centre to the White Rose park, Thorpe Park and the M62 logistics belt.",
    localRelevance: "Leeds is the dominant commercial property market in Yorkshire, with a strong office core, a substantial retail and mixed-use sector, and a significant logistics and industrial base along the M62 and M1. We provide roof inspection, survey and monitoring services for commercial portfolios across the region.",
    sectors: ["Commercial Property", "Retail & Mixed-Use", "Construction", "Logistics", "Facilities Management"],
    keyAssetTypes: [
      "City-centre commercial office buildings",
      "Retail parks and out-of-town commercial centres",
      "M62-corridor logistics and distribution buildings",
      "Industrial estates across Morley, Beeston and Kirkstall",
    ],
    useCases: [
      "Roof and gutter condition surveys on retail and commercial buildings",
      "Thermal imaging on large-format commercial roofscapes",
      "Construction progress monitoring for commercial development",
      "Aerial marketing imagery for commercial property disposals",
    ],
    deliverables: [
      "Annotated roof imagery and condition reports",
      "Thermal building fabric datasets",
      "Progress photography and video for construction contracts",
    ],
    operationalConsiderations: "Leeds operations are planned around the city's significant topographical variation, Leeds Bradford Airport's FRZ in the north-west of the city, and nearby transport corridors including the M62 and M621.",
    popularBundles: ["construction-progress-pack", "roof-intelligence-pack", "building-envelope-asset-condition-pack", "survey-data-pack", "visual-sales-pack"],
    nearbyLocations: [
      { name: "Sheffield", slug: "sheffield" },
      { name: "Manchester", slug: "manchester" },
      { name: "Nottingham", slug: "nottingham" },
    ],
    faqs: [
      {
        q: "Do you provide retail roof audits in Leeds?",
        a: "Yes. Retail centres and large commercial properties are a regular part of our Leeds workload. We provide efficient roof condition surveys across multi-unit retail parks, covering inspection evidence and thermal analysis in a single visit.",
      },
      {
        q: "Can you support M62 corridor logistics projects?",
        a: "Yes. We provide mapping and inspection services for industrial and logistics sites along the M62 and M1 corridors throughout West Yorkshire.",
      },
    ],
  },
  {
    slug: "bristol",
    name: "Bristol",
    region: "South West",
    description: "UAV surveying and media production for the South West, supporting property development, heritage buildings and infrastructure across Bristol and the wider region.",
    heroIntro: "Covering commercial development, heritage buildings and infrastructure across Bristol — from the Harbourside and Temple Quarter to Avonmouth's port and logistics facilities.",
    localRelevance: "Bristol commercial projects span a wide range of asset types: active new development around Temple Quarter and St Philips Marsh, heritage conservation in Clifton and the city centre, port and logistics infrastructure at Avonmouth, and commercial roofscapes across the suburban business parks.",
    sectors: ["Property Development", "Heritage & Conservation", "Construction", "Infrastructure", "Events & Media"],
    keyAssetTypes: [
      "Harbourside commercial and mixed-use buildings",
      "Temple Quarter regeneration sites",
      "Heritage listed buildings in Clifton and the city centre",
      "Avonmouth port and logistics facilities",
      "Suburban business parks and commercial estates",
    ],
    useCases: [
      "Pre-acquisition and condition surveys for commercial property",
      "Heritage building fabric inspection and TFTS 3D capture",
      "Construction progress monitoring",
      "Aerial photography for property marketing and planning",
    ],
    deliverables: [
      "Annotated building condition imagery and reports",
      "TFTS 3D models for heritage and complex building documentation",
      "Construction progress libraries",
      "Marketing photography and video",
    ],
    operationalConsiderations: "Bristol operations consider harbourside and waterway constraints, heritage site protection, the Bristol Airport FRZ for south Bristol locations, and the city's unique dense urban character.",
    popularBundles: ["building-envelope-asset-condition-pack", "roof-intelligence-pack", "construction-progress-pack", "visual-sales-pack", "immersive-digital-capture-pack"],
    nearbyLocations: [
      { name: "London", slug: "london" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "UK-wide", slug: "uk" },
    ],
    faqs: [
      {
        q: "Do you offer heritage building surveys in Bristol?",
        a: "Yes. We provide high-detail visual and TFTS 3D capture for heritage and conservation projects across the South West, including listed buildings in Clifton and the city centre.",
      },
      {
        q: "Can you fly drones near Bristol Harbourside?",
        a: "Yes. We plan and coordinate safe drone operations in waterfront and urban environments, managing all relevant access and airspace considerations.",
      },
    ],
  },
  {
    slug: "liverpool",
    name: "Liverpool",
    region: "Merseyside",
    description: "UAV solutions for maritime, logistics and regeneration projects across Merseyside — covering waterfront developments, commercial property and construction monitoring.",
    heroIntro: "Serving commercial, maritime and regeneration projects across Liverpool and Merseyside — from the World Heritage waterfront to the Northern Docks and the Atlantic Gateway industrial corridor.",
    localRelevance: "Liverpool commercial property ranges from waterfront heritage buildings in the buffer zone to large-scale industrial and logistics assets in the Northern Docks and Merseyside industrial belt. Regeneration activity across Baltic Triangle, Ten Streets and the Northshore district also creates consistent demand for construction monitoring and marketing services.",
    sectors: ["Commercial Property", "Maritime & Logistics", "Heritage", "Construction", "Events & Media"],
    keyAssetTypes: [
      "World Heritage waterfront buildings and dock conversions",
      "Northern Docks industrial and logistics estate",
      "Baltic Triangle creative and commercial buildings",
      "Large port and maritime infrastructure",
    ],
    useCases: [
      "Construction progress monitoring for regeneration schemes",
      "Heritage building condition and fabric surveys",
      "Logistics warehouse roof inspections",
      "Aerial photography for property marketing and planning",
    ],
    deliverables: [
      "Annotated building condition reports",
      "Construction progress libraries",
      "Heritage TFTS 3D documentation",
      "Marketing photography and video",
    ],
    operationalConsiderations: "Liverpool operations account for coastal and estuary weather patterns, Liverpool Airport FRZ to the south, heritage building constraints, and maritime activity along the Mersey.",
    popularBundles: ["building-envelope-asset-condition-pack", "roof-intelligence-pack", "construction-progress-pack", "visual-sales-pack", "immersive-digital-capture-pack"],
    nearbyLocations: [
      { name: "Manchester", slug: "manchester" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "UK-wide", slug: "uk" },
    ],
    faqs: [
      {
        q: "Do you support waterfront development projects in Liverpool?",
        a: "Yes. We provide construction progress monitoring and building condition surveys for major regeneration projects along the Mersey waterfront and across the Northern Docks area.",
      },
      {
        q: "Can you fly in high-wind coastal environments?",
        a: "We use enterprise-grade equipment with strong wind tolerance, but all operations are subject to individual weather assessments. Coastal conditions are factored into every flight plan.",
      },
    ],
  },
  {
    slug: "glasgow",
    name: "Glasgow",
    region: "Scotland",
    description: "Industrial, commercial and infrastructure drone services for the West of Scotland — supporting energy assets, heritage buildings and construction projects across the Clyde Valley.",
    heroIntro: "Covering industrial, commercial and infrastructure assets across Glasgow and the West of Scotland — from the Clyde waterfront to the AMIDS manufacturing corridor and the Clyde Valley energy assets.",
    localRelevance: "Glasgow commercial drone work spans industrial facilities, energy infrastructure, heritage buildings and a significant commercial property market. The city's ongoing regeneration — particularly along the Clyde and in the East End — also creates demand for construction monitoring and planning-related aerial capture.",
    sectors: ["Industrial Property", "Infrastructure", "Energy & Utilities", "Heritage", "Construction"],
    keyAssetTypes: [
      "Clyde-side industrial and shipbuilding heritage structures",
      "Energy and utilities infrastructure across the Clyde Valley",
      "City-centre commercial and mixed-use buildings",
      "Construction sites along the Clyde and East End",
    ],
    useCases: [
      "Industrial and manufacturing site roof inspections",
      "Energy infrastructure condition monitoring",
      "Heritage building surveys and TFTS 3D capture",
      "Construction progress monitoring",
    ],
    deliverables: [
      "Annotated condition imagery and reports",
      "TFTS 3D models for heritage and complex structures",
      "Progress photo libraries",
      "Thermal energy surveys",
    ],
    operationalConsiderations: "Glasgow operations account for Scottish weather variability, Scottish airspace regulations (which mirror CAA regulations), and the specific operational requirements of industrial and heritage sites.",
    popularBundles: ["building-envelope-asset-condition-pack", "roof-intelligence-pack", "construction-progress-pack", "visual-sales-pack", "immersive-digital-capture-pack"],
    nearbyLocations: [
      { name: "UK-wide", slug: "uk" },
      { name: "Manchester", slug: "manchester" },
      { name: "Leeds", slug: "leeds" },
    ],
    faqs: [
      {
        q: "Do you offer industrial drone inspections in Glasgow?",
        a: "Yes. We provide high-detail drone surveys for industrial and commercial assets across Glasgow and the West of Scotland.",
      },
      {
        q: "How do you handle Scottish weather conditions for drone operations?",
        a: "We monitor weather conditions carefully and use equipment capable of operating in variable conditions. Safety remains the primary consideration for all Scottish flight planning.",
      },
    ],
  },
  {
    slug: "uk",
    name: "UK-wide",
    region: "United Kingdom",
    description: "Nationwide commercial drone services for multi-site portfolios, national asset estates and large-scale infrastructure — centrally planned with consistent delivery standards across the UK.",
    heroIntro: "Supporting multi-site property portfolios, national infrastructure clients and national FM programmes from a single centrally-managed drone survey service.",
    localRelevance: "TFTS Drone provides structured nationwide project support for clients with assets distributed across multiple UK locations. Multi-site portfolio surveys, repeat inspection programmes, and national rollouts are all delivered through a centralised planning model with consistent data and reporting standards.",
    sectors: ["Multi-site Portfolio Management", "National Construction Projects", "Infrastructure Networks", "Utilities", "National FM Portfolios"],
    keyAssetTypes: [
      "Commercial property investment portfolios across multiple cities",
      "National retail and logistics estate networks",
      "Infrastructure and utilities assets across the UK",
    ],
    useCases: [
      "Annual or periodic portfolio-wide roof condition surveys",
      "Multi-site solar PV thermal inspection programmes",
      "National FM pre-planned inspection schedules",
      "Infrastructure corridor monitoring",
    ],
    deliverables: [
      "Standardised portfolio condition reports across all sites",
      "Thermal inspection datasets with portfolio-level analysis",
      "Consistent progress and condition photography libraries",
    ],
    operationalConsiderations: "UK-wide programmes are managed through centralised planning and scheduling, ensuring consistent CAA compliance, RAMS documentation and reporting standards across every regional location.",
    popularBundles: ["roof-intelligence-pack", "survey-data-pack", "construction-progress-pack", "building-envelope-asset-condition-pack", "insurance-incident-evidence-pack", "immersive-digital-capture-pack", "solar-energy-asset-pack", "visual-sales-pack"],
    nearbyLocations: [
      { name: "London", slug: "london" },
      { name: "Manchester", slug: "manchester" },
      { name: "Birmingham", slug: "birmingham" },
      { name: "Sheffield", slug: "sheffield" },
    ],
    faqs: [
      {
        q: "Can you manage multi-site drone inspection programmes across the UK?",
        a: "Yes. We plan and execute multi-site inspection programmes for clients with distributed portfolios, providing consistent data standards, safety documentation and reporting across every location.",
      },
      {
        q: "Do you provide standardised reporting across all UK sites?",
        a: "Yes. All data and reporting is produced to a consistent standard, allowing straightforward portfolio-wide comparison and asset management.",
      },
    ],
  },
]
