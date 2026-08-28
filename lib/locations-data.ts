// lib/locations-data.ts

export interface LocationData {
  slug: string
  name: string
  region: string
  description: string
  localRelevance: string
  sectors: string[]
  operationalConsiderations: string
  popularBundles: string[]
  nearbyLocations: { name: string; slug: string }[]
  faqs: { q: string; a: string }[]
}

export const locationsData: LocationData[] = [
  { 
    slug: 'london', 
    name: 'London', 
    region: 'Greater London', 
    description: 'Professional commercial drone services across all 32 boroughs, supporting the capital’s property, construction and infrastructure sectors.',
    localRelevance: 'London drone projects often involve commercial rooftops, complex airspace, dense property environments, high-rise facades, development sites, venue media and stakeholder-facing visual assets. Every operation must be planned around airspace, people, property, permissions and the required output.',
    sectors: ['Commercial Property', 'Construction', 'Facilities Management', 'Insurance', 'Events & Media', 'Public Sector', 'Heritage & Conservation'],
    operationalConsiderations: 'Drone operations in London are planned around the site, the surrounding environment, complex airspace restrictions (including restricted zones over Central London), nearby people and property, weather conditions and the intended deliverable. Some projects may require additional permissions from the CAA or NATS.',
    popularBundles: ['building-envelope-asset-condition-pack', 'visual-sales-pack', 'construction-progress-pack', 'immersive-digital-capture-pack', 'insurance-incident-evidence-pack'],
    nearbyLocations: [
      { name: 'UK-wide', slug: 'uk' },
      { name: 'Birmingham', slug: 'birmingham' },
      { name: 'Bristol', slug: 'bristol' },
      { name: 'Manchester', slug: 'manchester' }
    ],
    faqs: [
      { q: 'Can you fly drones in Central London?', a: 'Yes, but it requires extensive planning. We manage the necessary permissions for flight in restricted zones like the City and Westminster, ensuring full compliance with CAA and NATS regulations.' },
      { q: 'Do you offer facade inspections in London?', a: 'Yes, we specialise in high-rise facade and building envelope inspections, providing high-resolution imagery and defect reporting for London real estate assets.' },
      { q: 'What is the response time for London projects?', a: 'While we aim for rapid deployment, London projects often require longer lead times for airspace clearances and site-specific risk assessments.' }
    ]
  },
  { 
    slug: 'manchester', 
    name: 'Manchester', 
    region: 'Greater Manchester', 
    description: 'Expert UAV solutions for the North West industrial and commercial hub, supporting redevelopment and infrastructure projects.',
    localRelevance: 'Manchester drone projects focus on commercial redevelopment, industrial estates, city-centre property, construction progress, and infrastructure corridors. We support everything from MediaCityUK media flights to large-scale roof audits across Greater Manchester.',
    sectors: ['Commercial Property', 'Industrial Estates', 'Construction', 'Media & Creative', 'Infrastructure'],
    operationalConsiderations: 'Operations in Manchester consider urban density, nearby transport networks, and the varying requirements of redevelopment sites and active industrial zones.',
    popularBundles: ['construction-progress-pack', 'roof-intelligence-pack', 'building-envelope-asset-condition-pack', 'survey-data-pack', 'visual-sales-pack'],
    nearbyLocations: [
      { name: 'Liverpool', slug: 'liverpool' },
      { name: 'Leeds', slug: 'leeds' },
      { name: 'Sheffield', slug: 'sheffield' }
    ],
    faqs: [
      { q: 'Can you support MediaCityUK projects?', a: 'Yes, we have experience in media-focused drone capture and can coordinate flights in and around the MediaCityUK and Salford Quays area.' },
      { q: 'Do you cover the whole of Greater Manchester?', a: 'Yes, our team covers all ten boroughs of Greater Manchester, providing inspection, surveying, and media services.' }
    ]
  },
  { 
    slug: 'sheffield', 
    name: 'Sheffield', 
    region: 'South Yorkshire', 
    description: 'Specialist aerial intelligence for the Steel City, focusing on industrial sites, commercial roofs and engineering environments.',
    localRelevance: 'Sheffield drone projects typically involve industrial sites, commercial roofs, engineering and manufacturing environments, and construction projects. We also support FM inspections and nearby rural estate requirements where relevant.',
    sectors: ['Industrial Property', 'Facilities Management', 'Construction', 'Surveying & Mapping', 'Infrastructure', 'Insurance'],
    operationalConsiderations: 'Sheffield operations often involve complex industrial topography, nearby highways, and specific constraints related to active manufacturing or engineering sites.',
    popularBundles: ['roof-intelligence-pack', 'survey-data-pack', 'construction-progress-pack', 'building-envelope-asset-condition-pack', 'insurance-incident-evidence-pack'],
    nearbyLocations: [
      { name: 'Chesterfield', slug: 'chesterfield' },
      { name: 'Derby', slug: 'derby' },
      { name: 'Nottingham', slug: 'nottingham' },
      { name: 'Leeds', slug: 'leeds' }
    ],
    faqs: [
      { q: 'Do you offer industrial roof inspections in Sheffield?', a: 'Yes, we provide high-resolution drone roof audits for Sheffield’s industrial and manufacturing sectors, eliminating the need for early-stage scaffolding.' },
      { q: 'Can you fly drones near the Peak District?', a: 'Yes, we can support projects on the edge of the Peak District, ensuring all flights comply with national park guidelines and local land access requirements.' }
    ]
  },
  { 
    slug: 'chesterfield', 
    name: 'Chesterfield', 
    region: 'Derbyshire', 
    description: 'Drone roof inspections, surveying and mapping for Chesterfield industrial estates, commercial property and warehousing.',
    localRelevance: 'Chesterfield projects often focus on industrial estates, commercial property, warehousing, and construction projects. We also support nearby quarry/aggregate sites and rural land surveys across Derbyshire.',
    sectors: ['Industrial Property', 'Warehousing', 'Facilities Management', 'Construction', 'Surveying & Mapping', 'Agriculture & Estates'],
    operationalConsiderations: 'Operations in Chesterfield are planned around industrial access, nearby major roads (like the M1), and the specific requirements of Derbyshire’s mix of commercial and rural environments.',
    popularBundles: ['roof-intelligence-pack', 'survey-data-pack', 'construction-progress-pack', 'building-envelope-asset-condition-pack', 'insurance-incident-evidence-pack'],
    nearbyLocations: [
      { name: 'Sheffield', slug: 'sheffield' },
      { name: 'Derby', slug: 'derby' },
      { name: 'Nottingham', slug: 'nottingham' },
      { name: 'Birmingham', slug: 'birmingham' }
    ],
    faqs: [
      { q: 'Do you offer warehouse roof surveys in Chesterfield?', a: 'Yes, we specialise in large-scale roof and gutter inspections for warehouses and industrial units across Chesterfield and North Derbyshire.' },
      { q: 'Can you provide high-accuracy mapping in Chesterfield?', a: 'Yes, we use RTK-enabled drones to provide high-accuracy mapping and stockpile volume calculations for construction and industrial sites.' }
    ]
  },
  { 
    slug: 'derby', 
    name: 'Derby', 
    region: 'Derbyshire', 
    description: 'Aerial intelligence for the Derby manufacturing hub, supporting industrial, construction and infrastructure assets.',
    localRelevance: 'Derby drone projects typically involve industrial and engineering sites, commercial property, construction, infrastructure, and utilities. We provide specialized roof inspections and surveying for the area’s technical sectors.',
    sectors: ['Manufacturing', 'Industrial Property', 'Facilities Management', 'Construction', 'Infrastructure', 'Utilities'],
    operationalConsiderations: 'Derby operations consider proximity to major manufacturing hubs, railway infrastructure, and the specific safety requirements of engineering environments.',
    popularBundles: ['roof-intelligence-pack', 'survey-data-pack', 'construction-progress-pack', 'building-envelope-asset-condition-pack', 'insurance-incident-evidence-pack'],
    nearbyLocations: [
      { name: 'Nottingham', slug: 'nottingham' },
      { name: 'Chesterfield', slug: 'chesterfield' },
      { name: 'Birmingham', slug: 'birmingham' },
      { name: 'Sheffield', slug: 'sheffield' }
    ],
    faqs: [
      { q: 'Do you support engineering sites in Derby?', a: 'Yes, our team is experienced in operating within complex industrial and engineering environments, providing high-detail asset inspection and documentation.' },
      { q: 'Can you provide drone surveys for new developments in Derby?', a: 'Yes, we support construction progress monitoring and topographical mapping for new commercial and residential developments across Derby.' }
    ]
  },
  { 
    slug: 'nottingham', 
    name: 'Nottingham', 
    region: 'East Midlands', 
    description: 'Commercial drone services for Nottingham property, industrial estates and development sites across the Trent Valley.',
    localRelevance: 'Nottingham projects involve commercial property, industrial estates, retail parks, development sites, and FM inspections. We also support construction progress monitoring and property marketing assets.',
    sectors: ['Commercial Property', 'Industrial Estates', 'Retail Parks', 'Facilities Management', 'Construction'],
    operationalConsiderations: 'Operations in Nottingham are planned around city-centre density, nearby airspace (including East Midlands Airport proximity for some areas), and river-side constraints.',
    popularBundles: ['roof-intelligence-pack', 'survey-data-pack', 'construction-progress-pack', 'building-envelope-asset-condition-pack', 'insurance-incident-evidence-pack'],
    nearbyLocations: [
      { name: 'Derby', slug: 'derby' },
      { name: 'Chesterfield', slug: 'chesterfield' },
      { name: 'Sheffield', slug: 'sheffield' },
      { name: 'Birmingham', slug: 'birmingham' }
    ],
    faqs: [
      { q: 'Do you offer retail park inspections in Nottingham?', a: 'Yes, we provide efficient roof and gutter auditing for retail parks and commercial estates throughout Nottinghamshire.' },
      { q: 'Can you fly near East Midlands Airport?', a: 'Yes, for sites within the airport’s Flight Restriction Zone (FRZ), we coordinate with Air Traffic Control to secure the necessary flight permissions.' }
    ]
  },
  { 
    slug: 'birmingham', 
    name: 'Birmingham', 
    region: 'West Midlands', 
    description: 'Commercial drone services for the West Midlands heartland, supporting infrastructure, transport, and commercial development.',
    localRelevance: 'Birmingham drone projects focus on commercial property, industrial estates, logistics sites, development projects, and infrastructure links. We provide specialized roof inspections and construction monitoring for the UK’s second city.',
    sectors: ['Commercial Property', 'Construction', 'Facilities Management', 'Logistics', 'Infrastructure'],
    operationalConsiderations: 'Operations in Birmingham consider dense urban environments, major transport hubs, and the rapid pace of city-centre redevelopment.',
    popularBundles: ['construction-progress-pack', 'roof-intelligence-pack', 'building-envelope-asset-condition-pack', 'survey-data-pack', 'visual-sales-pack'],
    nearbyLocations: [
      { name: 'Nottingham', slug: 'nottingham' },
      { name: 'London', slug: 'london' },
      { name: 'Manchester', slug: 'manchester' }
    ],
    faqs: [
      { q: 'Do you offer drone surveys for logistics hubs in Birmingham?', a: 'Yes, we support large-scale logistics and warehousing sites with roof inspections, mapping, and thermal audits.' },
      { q: 'Can you support city-centre construction in Birmingham?', a: 'Yes, we provide regular progress monitoring and site records for major redevelopment projects across the city centre.' }
    ]
  },
  { 
    slug: 'leeds', 
    name: 'Leeds', 
    region: 'West Yorkshire', 
    description: 'Expert drone inspection and surveying across West Yorkshire and the M62 corridor, supporting retail and commercial development.',
    localRelevance: 'Leeds projects involve commercial property, retail and mixed-use developments, industrial and logistics sites, and construction monitoring. We provide high-quality roof and building inspections across the region.',
    sectors: ['Commercial Property', 'Retail & Mixed-Use', 'Construction', 'Logistics', 'Facilities Management'],
    operationalConsiderations: 'Operations in Leeds are planned around the city’s hilly topography, nearby transport corridors, and the specific needs of retail and commercial assets.',
    popularBundles: ['construction-progress-pack', 'roof-intelligence-pack', 'building-envelope-asset-condition-pack', 'survey-data-pack', 'visual-sales-pack'],
    nearbyLocations: [
      { name: 'Sheffield', slug: 'sheffield' },
      { name: 'Manchester', slug: 'manchester' },
      { name: 'Nottingham', slug: 'nottingham' }
    ],
    faqs: [
      { q: 'Do you provide retail roof audits in Leeds?', a: 'Yes, we offer fast and detailed roof inspections for retail centres and commercial property across West Yorkshire.' },
      { q: 'Can you support M62 corridor logistics projects?', a: 'Yes, we provide mapping and inspection services for industrial and logistics sites along the M62 and M1 corridors.' }
    ]
  },
  { 
    slug: 'bristol', 
    name: 'Bristol', 
    region: 'South West', 
    description: 'UAV surveying and media production for the South West, supporting property development, heritage and infrastructure.',
    localRelevance: 'Bristol drone projects often involve property development, heritage buildings, infrastructure, and commercial rooftops. We also support media and venue projects across the city’s harbourside and urban areas.',
    sectors: ['Property Development', 'Heritage & Conservation', 'Construction', 'Infrastructure', 'Events & Media'],
    operationalConsiderations: 'Bristol operations consider harbourside constraints, heritage site protection, and the city’s unique urban layout.',
    popularBundles: ['building-envelope-asset-condition-pack', 'roof-intelligence-pack', 'construction-progress-pack', 'visual-sales-pack', 'immersive-digital-capture-pack'],
    nearbyLocations: [
      { name: 'London', slug: 'london' },
      { name: 'Birmingham', slug: 'birmingham' },
      { name: 'UK-wide', slug: 'uk' }
    ],
    faqs: [
      { q: 'Do you offer heritage building surveys in Bristol?', a: 'Yes, we provide high-detail visual and 3D capture for heritage and conservation projects across the South West.' },
      { q: 'Can you fly drones near Bristol Harbourside?', a: 'Yes, we manage the necessary planning and permissions for safe operations in urban and waterfront environments.' }
    ]
  },
  { 
    slug: 'liverpool', 
    name: 'Liverpool', 
    region: 'Merseyside', 
    description: 'UAV solutions for maritime, logistics, and regeneration projects across Merseyside and the waterfront.',
    localRelevance: 'Liverpool projects focus on commercial property, heritage and waterfront sites, venues and events, and construction monitoring. We provide high-quality roof and facade inspections for the region’s regeneration projects.',
    sectors: ['Commercial Property', 'Maritime & Logistics', 'Heritage', 'Construction', 'Events & Media'],
    operationalConsiderations: 'Operations in Liverpool consider coastal weather conditions, maritime activity, and the constraints of heritage-protected areas.',
    popularBundles: ['building-envelope-asset-condition-pack', 'roof-intelligence-pack', 'construction-progress-pack', 'visual-sales-pack', 'immersive-digital-capture-pack'],
    nearbyLocations: [
      { name: 'Manchester', slug: 'manchester' },
      { name: 'Birmingham', slug: 'birmingham' },
      { name: 'UK-wide', slug: 'uk' }
    ],
    faqs: [
      { q: 'Do you support waterfront development in Liverpool?', a: 'Yes, we provide progress monitoring and site records for major regeneration projects along the Mersey.' },
      { q: 'Can you fly in high-wind coastal environments?', a: 'We use enterprise-grade drones with high wind resistance, but all operations are subject to safety-first weather assessments.' }
    ]
  },
  { 
    slug: 'glasgow', 
    name: 'Glasgow', 
    region: 'Scotland', 
    description: 'Industrial and commercial drone services for the West of Scotland, supporting infrastructure, energy and heritage assets.',
    localRelevance: 'Glasgow drone projects involve commercial and industrial property, infrastructure, energy and utilities, and heritage buildings. We provide robust construction monitoring and roof/building inspections across the Clyde Valley.',
    sectors: ['Industrial Property', 'Infrastructure', 'Energy & Utilities', 'Heritage', 'Construction'],
    operationalConsiderations: 'Glasgow operations account for Scottish weather patterns, industrial topography, and the specific needs of heritage and infrastructure assets.',
    popularBundles: ['building-envelope-asset-condition-pack', 'roof-intelligence-pack', 'construction-progress-pack', 'visual-sales-pack', 'immersive-digital-capture-pack'],
    nearbyLocations: [
      { name: 'UK-wide', slug: 'uk' },
      { name: 'Manchester', slug: 'manchester' },
      { name: 'Leeds', slug: 'leeds' }
    ],
    faqs: [
      { q: 'Do you offer industrial inspections in Glasgow?', a: 'Yes, we provide high-detail drone audits for industrial and commercial assets across the West of Scotland.' },
      { q: 'How do you handle Scottish weather for drone flights?', a: 'We monitor weather closely and use equipment capable of operating in varied conditions, but safety remains the priority for all flight planning.' }
    ]
  },
  { 
    slug: 'uk', 
    name: 'UK-wide', 
    region: 'United Kingdom', 
    description: 'Nationwide commercial drone service support for multi-site portfolios, large-scale infrastructure and national asset estates.',
    localRelevance: 'EntireFM Drone provides nationwide project support, multi-site portfolio inspections, and repeat monitoring for national clients. We manage operations across property, construction, and FM portfolios with centralized planning and consistent delivery.',
    sectors: ['Multi-site Portfolio Management', 'National Construction Projects', 'Infrastructure Networks', 'Utilities', 'National FM Portfolios'],
    operationalConsiderations: 'UK-wide operations are managed through a centralized planning hub, ensuring consistent safety standards, risk assessments, and deliverable quality across all regions.',
    popularBundles: ['roof-intelligence-pack', 'survey-data-pack', 'construction-progress-pack', 'building-envelope-asset-condition-pack', 'insurance-incident-evidence-pack', 'immersive-digital-capture-pack', 'solar-energy-asset-pack', 'visual-sales-pack'],
    nearbyLocations: [
      { name: 'London', slug: 'london' },
      { name: 'Manchester', slug: 'manchester' },
      { name: 'Birmingham', slug: 'birmingham' },
      { name: 'Sheffield', slug: 'sheffield' }
    ],
    faqs: [
      { q: 'Can you handle multi-site drone inspections across the UK?', a: 'Yes, we specialize in consistent, centralized delivery for clients with assets distributed across multiple UK locations.' },
      { q: 'Do you have a consistent reporting format for all UK sites?', a: 'Yes, we ensure all data and reporting is standardized, allowing for easy comparison and portfolio-wide asset management.' }
    ]
  }
]
