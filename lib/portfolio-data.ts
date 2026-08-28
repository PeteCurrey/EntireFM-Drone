// lib/portfolio-data.ts

export type ProjectType = 'Case Study' | 'Anonymised Profile' | 'Mission Profile' | 'Example Workflow'

export interface PortfolioProject {
  slug: string
  title: string
  label: ProjectType
  sector: string
  services: string[]
  outputs: string[]
  intro: string
  scenario: string
  workflow: string[]
  deliverables: string[]
  commercialValue: string[]
  image: string
  relatedServices: string[]
  recommendedBundle: { name: string; slug: string }
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'major-bridge-inspection-workflow',
    title: 'Major Bridge Inspection Workflow',
    label: 'Mission Profile',
    sector: 'Infrastructure',
    services: ['Infrastructure Inspections', 'Surveying & Mapping'],
    outputs: ['High-resolution imagery', 'Annotated evidence', 'Asset condition record'],
    intro: 'How drone capture can support bridge inspection evidence, access planning and asset condition reporting.',
    scenario: 'Bridge inspections often require complex access planning, traffic management, rope access or specialist platforms. Drone capture can provide early-stage visual evidence to help asset teams understand condition, identify areas of interest and scope further inspection or works.',
    workflow: [
      'Define inspection areas, access constraints and safety requirements.',
      'Plan flight paths for maximum coverage of piers, abutments, bearings and deck undersides.',
      'Deploy enterprise drones with high-resolution zoom and thermal sensors.',
      'Capture overlapping imagery for 3D reconstruction and defect identification.',
      'Process imagery into annotated defect schedules and condition reports.'
    ],
    deliverables: [
      'High-resolution image set',
      'Annotated defect imagery',
      'PDF inspection summary',
      'Orthomosaic map of deck area',
      'Flythrough video of key structural elements'
    ],
    commercialValue: [
      'Reduced need for early-stage access equipment (scaffolding/MEWPs)',
      'Faster stakeholder understanding of structural condition',
      'Improved contractor scoping for repairs',
      'Better asset documentation for long-term monitoring'
    ],
    image: '/images/inspection_poster.png',
    relatedServices: ['infrastructure-inspections', 'drone-inspection', 'surveying-mapping', 'lidar-point-cloud-surveys'],
    recommendedBundle: { name: 'Building Envelope & Asset Condition Pack', slug: 'building-envelope-asset-condition-pack' }
  },
  {
    slug: 'commercial-roof-condition-survey-workflow',
    title: 'Commercial Roof Condition Survey Workflow',
    label: 'Mission Profile',
    sector: 'Property & Facilities Management',
    services: ['Drone Roof Inspections', 'Thermal Imaging'],
    outputs: ['High-resolution roof imagery', 'Thermal anomaly data', 'Annotated defect images'],
    intro: 'A structured workflow for auditing commercial roof assets, identifying defects, and planning maintenance without initial scaffolding.',
    scenario: 'Commercial landlords and FM teams often face high costs when auditing large roof areas. Scaffolding or cherry pickers for a simple visual check are often disproportionate. This mission profile demonstrates how drone capture provides a faster, safer, and more comprehensive evidence base.',
    workflow: [
      'Desktop review of roof areas, hazards and airspace permissions.',
      'Automated grid flight for consistent roof covering coverage.',
      'Manual close-up inspection of plant, gutters, flashings and suspected defects.',
      'Optional radiometric thermal capture for moisture or heat loss checks.',
      'Data cleanup and annotation of identified maintenance priorities.'
    ],
    deliverables: [
      'High-resolution roof image pack',
      'Gutter and drainage condition evidence',
      'Annotated defect image schedule',
      'PDF inspection summary with priority levels',
      'Thermal anomaly map (if scoped)'
    ],
    commercialValue: [
      'Significant cost reduction compared to traditional access methods',
      'Elimination of risk to personnel working at height',
      'Clear, shareable evidence for contractors and insurers',
      'Comprehensive view of roof areas often missed by ground-level inspection'
    ],
    image: '/images/nav/thermal.png',
    relatedServices: ['roof-inspections', 'drone-inspection', 'facilities-management-inspections', 'thermal-imaging'],
    recommendedBundle: { name: 'Roof Intelligence Pack', slug: 'roof-intelligence-pack' }
  },
  {
    slug: 'construction-progress-monitoring-workflow',
    title: 'Construction Progress Monitoring Workflow',
    label: 'Mission Profile',
    sector: 'Construction',
    services: ['Construction Monitoring', 'Surveying & Mapping'],
    outputs: ['Site overview imagery', 'Orthomosaic map', 'Progress update video'],
    intro: 'How regular aerial capture supports project management, stakeholder updates and visual site records throughout the build lifecycle.',
    scenario: 'Contractors and developers need to track site progress, manage logistics, and update stakeholders. Conventional site photos often lack context. This workflow shows how drone-based monitoring creates a consistent, high-impact record of project milestones.',
    workflow: [
      'Establish consistent take-off positions and automated flight paths.',
      'Perform regular site overflights (weekly, fortnightly or monthly).',
      'Capture high-resolution site overviews and logistics-focused imagery.',
      'Process data into 2D orthomosaic maps for site planning.',
      'Generate progress update videos and stakeholder reporting packs.'
    ],
    deliverables: [
      'Progress image archive',
      '2D Orthomosaic site map',
      'Before-and-after comparison imagery',
      'Edited stakeholder update video',
      'Monthly site condition summary'
    ],
    commercialValue: [
      'Improved stakeholder engagement through cinematic visual updates',
      'Better logistics management and site coordination',
      'Remote site visibility for off-site project teams',
      'Defensible visual record of site stages and milestones'
    ],
    image: '/images/construction_poster.png',
    relatedServices: ['construction-monitoring', 'surveying-mapping', 'construction-progress-photography', 'aerial-photography-film'],
    recommendedBundle: { name: 'Construction Progress Pack', slug: 'construction-progress-pack' }
  },
  {
    slug: 'stockpile-volume-survey-workflow',
    title: 'Stockpile Volume Survey Workflow',
    label: 'Mission Profile',
    sector: 'Construction & Earthworks',
    services: ['Stockpile Volume Surveys', 'Surveying & Mapping'],
    outputs: ['Volume calculations', 'Point cloud', 'Orthomosaic map'],
    intro: 'Precision measurement of site materials, earthworks and stockpiles using drone photogrammetry and survey-controlled capture.',
    scenario: 'Manual stockpile measurement is time-consuming, inconsistent and often dangerous. Drone photogrammetry allows for rapid, precise volume calculations across large areas with improved accuracy and safety for site staff.',
    workflow: [
      'Define site boundaries and material types for measurement.',
      'Set ground control points (GCPs) for high-accuracy mapping data where required.',
      'Perform high-overlap nadir and oblique mapping flights.',
      'Process imagery into a dense 3D point cloud and mesh.',
      'Calculate volumes based on site base-level data and current topography.'
    ],
    deliverables: [
      'Stockpile volume report (PDF/CSV)',
      '3D Point cloud (LAS/LAZ)',
      'Orthomosaic site map',
      'Digital Surface Model (DSM)',
      'Cross-section visualisations where required'
    ],
    commercialValue: [
      'Faster data turnaround for quantity surveying and material management',
      'Improved safety by removing the need to climb stockpiles',
      'Consistent, repeatable measurement methodology',
      'Visual evidence of material volumes for audit purposes'
    ],
    image: '/images/surveying_poster.png',
    relatedServices: ['stockpile-volume-surveys', 'surveying-mapping', 'volumetric-surveys', 'cut-fill-analysis'],
    recommendedBundle: { name: 'Survey Data Pack', slug: 'survey-data-pack' }
  },
  {
    slug: 'solar-panel-thermal-inspection-workflow',
    title: 'Solar Panel Thermal Inspection Workflow',
    label: 'Mission Profile',
    sector: 'Renewables & Utilities',
    services: ['Solar Panel Inspections', 'Thermal Imaging'],
    outputs: ['Thermal anomaly imagery', 'Hotspot identification', 'Asset condition report'],
    intro: 'How aerial thermal imaging identifies hotspots, string faults and panel defects in large-scale solar PV installations.',
    scenario: 'Manual inspection of commercial rooftop or ground-mount solar arrays is extremely slow. Radiometric thermal drones can audit thousands of panels per hour, identifying temperature anomalies that indicate faults, soiling or underperformance.',
    workflow: [
      'Plan flight during suitable solar irradiance conditions.',
      'Set radiometric thermal parameters and camera angles.',
      'Capture high-overlap thermal and visual imagery across the array.',
      'Process data to identify anomalies (hotspots, bypass diode faults, soiling).',
      'Generate an anomaly schedule for maintenance teams.'
    ],
    deliverables: [
      'Thermal anomaly image set',
      'Hotspot location map',
      'Solar asset condition summary',
      'Annotated defect images',
      'Maintenance priority report'
    ],
    commercialValue: [
      'Rapid auditing of large solar portfolios',
      'Early detection of faults to prevent energy generation loss',
      'Visual evidence for warranty claims and O&M planning',
      'Improved safety by reducing rooftop foot traffic'
    ],
    image: '/images/thermal_poster.jpg',
    relatedServices: ['solar-panel-inspections', 'thermal-imaging', 'utilities-energy-inspections', 'infrastructure-inspections'],
    recommendedBundle: { name: 'Solar & Energy Asset Pack', slug: 'solar-energy-asset-pack' }
  },
  {
    slug: 'high-rise-facade-inspection-workflow',
    title: 'High-Rise Facade Inspection Workflow',
    label: 'Mission Profile',
    sector: 'Property & Commercial Real Estate',
    services: ['Facade Inspections', 'Building Envelope Inspections'],
    outputs: ['High-detail facade imagery', 'Cladding condition record', 'Annotated defect schedule'],
    intro: 'Safe and rapid building envelope auditing for high-rise assets, cladding assessments and external condition documentation.',
    scenario: 'Inspecting the external envelope of high-rise buildings often requires expensive rope access or cradles. Drone inspection provides high-resolution visual evidence of cladding, glazing, masonry and seals from a safe standoff distance.',
    workflow: [
      'Define building elevations, hazards and standoff requirements.',
      'Plan vertical flight paths for consistent facade coverage.',
      'Capture high-detail imagery using zoom sensors for specific defect areas.',
      'Perform close-up inspection of cladding joints, seals and fixings.',
      'Organise data by elevation and floor for easy client review.'
    ],
    deliverables: [
      'High-detail elevation image set',
      'Annotated cladding/facade defect schedule',
      'Building envelope condition summary',
      'Maintenance scoping evidence',
      'Dilapidation or pre-acquisition evidence pack'
    ],
    commercialValue: [
      'Significant reduction in access costs for facade auditing',
      'Faster identification of high-level defects or safety concerns',
      'Comprehensive visual record for insurance and compliance',
      'Minimal disruption to building occupants and pedestrians'
    ],
    image: '/images/nav/construction.png',
    relatedServices: ['facade-inspections', 'building-envelope-inspections', 'commercial-property-drone-surveys', 'drone-inspection'],
    recommendedBundle: { name: 'Building Envelope & Asset Condition Pack', slug: 'building-envelope-asset-condition-pack' }
  },
  {
    slug: 'gaussian-splat-site-visualisation-workflow',
    title: 'TFTS 3D Site Visualisation Workflow',
    label: 'Mission Profile',
    sector: 'Property & Stakeholder Engagement',
    services: ['TFTS 3D Capture', 'Digital Twin Capture'],
    outputs: ['Photorealistic 3D visualisation', 'Immersive walkthrough', 'Flythrough video'],
    intro: 'Creating photorealistic, immersive 3D walkthroughs of site environments using advanced TFTS 3D drone capture.',
    scenario: 'Clients need to present a site to investors, planning boards or stakeholders in a way that feels real. Traditional photos lack immersion. TFTS 3D modelling provides a photorealistic 3D record that people can virtually explore.',
    workflow: [
      'Define the visualisation area and desired viewer experience.',
      'Perform high-overlap drone capture from multiple heights and angles.',
      'Combine with ground-level imagery for interior or close-range detail.',
      'Process imagery into a TFTS 3D volumetric radiance field.',
      'Refine the scene, clean artefacts and prepare the web-ready viewer.'
    ],
    deliverables: [
      'Photorealistic TFTS 3D scene',
      'Web-ready immersive viewer',
      'High-quality screenshot set from the model',
      'Cinematic flythrough video',
      'Master splat files for production integration'
    ],
    commercialValue: [
      'Unmatched visual impact for property marketing and investment',
      'Stronger stakeholder engagement through immersive site viewing',
      'Better remote understanding of site spatial feel and context',
      'High-fidelity visual record for heritage or project archives'
    ],
    image: '/images/gaussian-splat/casa-hotel.jpg',
    relatedServices: ['tfts-3d', 'digital-twin-capture', 'drone-photogrammetry', '360-aerial-panoramas'],
    recommendedBundle: { name: 'Immersive Digital Capture Pack', slug: 'immersive-digital-capture-pack' }
  },
  {
    slug: 'insurance-storm-damage-evidence-workflow',
    title: 'Insurance Storm Damage Evidence Workflow',
    label: 'Mission Profile',
    sector: 'Insurance & Emergency Response',
    services: ['Insurance & Loss Adjuster Surveys', 'Emergency Response'],
    outputs: ['Damage evidence imagery', 'Condition summary', 'Annotated defect images'],
    intro: 'Rapid aerial evidence capture for insurers, loss adjusters and landlords after storm, fire or flood damage.',
    scenario: 'After a major weather event, physical access to roofs or damaged areas is often unsafe or delayed by scaffolding lead times. Drone capture provides rapid, high-resolution evidence for claim assessment and contractor scoping.',
    workflow: [
      'Rapid deployment to the affected site following safety clearance.',
      'Capture broad site overviews and specific damage-focused imagery.',
      'Inspect roof coverings, gutters, chimneys and envelope for impact.',
      'Identify water ingress points or structural safety concerns.',
      'Issue raw and annotated evidence packs for loss adjusters.'
    ],
    deliverables: [
      'High-resolution damage evidence images',
      'Annotated defect and impact points',
      'Emergency condition summary (PDF)',
      'Before-and-after comparison imagery (where available)',
      'Contractor briefing pack for urgent repairs'
    ],
    commercialValue: [
      'Faster claim processing through immediate visual evidence',
      'Improved safety by reducing the need for early manual inspection',
      'Clear evidence for loss adjusters and repair contractors',
      'Better documentation of incident impact for future risk planning'
    ],
    image: '/images/contact_poster.png',
    relatedServices: ['insurance-loss-adjuster-surveys', 'emergency-response', 'roof-inspections', 'thermal-imaging'],
    recommendedBundle: { name: 'Insurance & Incident Evidence Pack', slug: 'insurance-incident-evidence-pack' }
  }
]
