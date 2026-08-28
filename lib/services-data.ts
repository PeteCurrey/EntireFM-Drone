// lib/services-data-v2.ts

export interface ServiceData {
  slug: string
  title: string
  headline: string[]
  intro: string
  metaTitle: string
  metaDescription: string
  heroStat: { value: string; label: string }[]
  problemStatement: string
  whatWeCapture: string[]
  deliverables: string[]
  useCases: { title: string; description: string }[]
  capabilities: { title: string; description: string }[]
  industries: string[]
  faqs: { q: string; a: string }[]
  relatedServices: string[]
  cta: { label: string; href: string }
  category: 'Infrastructure & Energy' | 'Construction & Surveying' | 'Property & Assets' | 'Specialist & Response'
  recommendedBundles?: string[]
}

export const servicesData: ServiceData[] = [
  // PROPERTY & ASSETS
  {
    slug: 'drone-inspection',
    title: 'Drone Inspection Services UK',
    headline: ['DRONE', 'INSPECTION'],
    category: 'Property & Assets',
    intro: 'Drone-based visual inspection for roofs, facades, assets and hard-to-access areas, helping teams gather clear evidence without defaulting to scaffolding or MEWPs at the first inspection stage.',
    metaTitle: 'Drone Inspection Services UK | CAA-Compliant | TFTS Drone',
    metaDescription: 'Commercial drone inspections for roofs, facades and hard-to-access assets, supporting visual evidence, contractor scoping, maintenance planning and reporting workflows.',
    heroStat: [
      { value: 'PRO', label: 'Visual evidence' },
      { value: '4K', label: 'Ultra HD capture' },
      { value: 'DATA', label: 'Structured reporting' },
    ],
    problemStatement: 'Working at height remains the single largest cause of workplace fatalities in the UK. Traditional asset inspection methods — scaffolding, rope access, cherry pickers — are slow, expensive, and place operatives in danger. Drone inspection can help property, FM and contractor teams gather early-stage visual evidence without defaulting to scaffolding or MEWPs immediately. Physical access may still be required for repairs, intrusive checks or professional sign-off.',
    whatWeCapture: [
      'High-resolution visual defect imagery',
      'Radiometric thermal signatures',
      'Close-up asset condition shots',
      'Structural integrity evidence',
      'Annotated defect locations'
    ],
    deliverables: [
      'Comprehensive inspection report (PDF)',
      'High-resolution image archive',
      'Defect schedule with severity levels',
      'Interactive client portal access'
    ],
    useCases: [
      { title: 'Structural Audits', description: 'Detailed inspection of bridges, towers, and industrial plant.' },
      { title: 'Safe Access', description: 'Replacing rope access for high-level building inspections.' }
    ],
    capabilities: [
      { title: 'Close-Proximity Flight', description: 'Safely navigating complex structures for detail.' },
      { title: 'High-Resolution Zoom', description: 'Identifying high-detail defects from a safe standoff.' }
    ],
    industries: ['Facilities Management', 'Civil Engineering', 'Insurance', 'Utilities'],
    faqs: [
      { q: 'How close can the drone fly?', a: 'Typically 2-5 metres, depending on the asset and wind conditions.' },
      { q: 'Is the data accepted by engineers?', a: 'Our high-resolution visual evidence is designed to support engineering assessments and reporting workflows.' }
    ],
    relatedServices: ['roof-inspections', 'facade-inspections', 'thermal-imaging'],
    cta: { label: 'GET AN INSPECTION QUOTE', href: '/contact' }
  },
  {
    slug: 'roof-inspections',
    title: 'Drone Roof Inspections UK',
    headline: ['DRONE', 'ROOF', 'INSPECTIONS'],
    category: 'Property & Assets',
    intro: 'Commercial roof, gutter, drainage and roof plant inspection using drone imagery, with optional annotated evidence and reporting outputs for maintenance, contractor and property workflows.',
    metaTitle: 'Drone Roof Inspections UK | Commercial Roof Surveys | TFTS Drone',
    metaDescription: 'Drone roof inspections for maintenance planning, contractor scoping, FM records and insurance documentation where clear visual evidence is required.',
    heroStat: [
      { value: 'Visual', label: 'Roof insight' },
      { value: '4K', label: 'Imaging quality' },
      { value: 'Digital', label: 'Evidence logs' },
    ],
    problemStatement: 'Commercial roof inspections are often delayed due to the complexity of access. Drone inspection allows property teams to capture fast, high-resolution evidence of roof coverings, gutters, drainage, flashing, plant areas and high-level defects, supporting planning and contractor briefing without requiring immediate physical access.',
    whatWeCapture: [
      'Roof coverings (Flat, Pitched, Cladding)',
      'Gutters and drainage systems',
      'Flashings, penetrations and upstands',
      'Parapets and coping stones',
      'Plant rooms and roof-mounted equipment',
      'Evidence of ponding water or blockage',
      'Storm damage and slipped materials',
      'Access-restricted or high-level areas'
    ],
    deliverables: [
      'High-resolution image set',
      'Annotated defect images',
      'PDF inspection summary',
      'Maintenance priority notes',
      'Contractor briefing pack',
      'Insurance evidence pack'
    ],
    useCases: [
      { title: 'Planned Maintenance', description: 'Annual or bi-annual audits to ensure roof longevity and identify issues early.' },
      { title: 'Pre-Acquisition', description: 'Objective aerial evidence for property purchase or lease negotiations.' },
      { title: 'Insurance Claims', description: 'Fast capture of storm or fire damage to support claim documentation.' },
      { title: 'Post-Repair Audit', description: 'Verifying contractor works have been completed to the required standard.' }
    ],
    capabilities: [
      { title: 'Visual Defect Audits', description: 'Clear imagery of slips, cracks, blockages, and structural condition.' },
      { title: 'Thermal Review', description: 'Optional thermal imaging to identify temperature anomalies for further review.' },
      { title: 'Reporting Outputs', description: 'Annotated PDF summaries for contractor scoping and property records.' }
    ],
    industries: ['Facilities Management', 'Commercial Property', 'Insurance', 'Public Sector', 'Education Estates'],
    faqs: [
      { q: 'Can a drone roof inspection replace scaffolding?', a: 'Drone inspection can help property, FM and contractor teams gather early-stage visual evidence without defaulting to scaffolding or MEWPs immediately. Physical access may still be required for repairs, intrusive checks, hands-on inspection or professional sign-off.' },
      { q: 'What roof defects can a drone identify?', a: 'Drones can identify cracks, slips, blockages, ponding, corrosion, and damaged flashing with high detail.' },
      { q: 'Can you inspect gutters and roof plant?', a: 'Yes, drones are ideal for checking gutter levels, blockages, and the condition of HVAC or solar assets.' },
      { q: 'Can you provide a report for contractors or insurers?', a: 'Yes, we provide annotated PDF reports that can support insurance documentation, contractor scoping and internal reporting workflows.' }
    ],
    relatedServices: ['thermal-imaging', 'building-envelope-inspections', 'facilities-management-inspections'],
    cta: { label: 'REQUEST INSPECTION QUOTE', href: '/contact' }
  },
  {
    slug: 'facade-inspections',
    title: 'Facade Drone Inspections UK',
    headline: ['FACADE', 'INSPECTIONS'],
    category: 'Property & Assets',
    intro: 'High-resolution vertical imaging for commercial and residential facades — documenting cladding, masonry, and glazing condition at scale.',
    metaTitle: 'Facade Drone Inspections UK | Vertical Building Surveys | TFTS Drone',
    metaDescription: 'Professional drone facade inspections. Vertical building surveys for cladding, glazing and masonry. CAA-compliant, detailed defect reporting.',
    heroStat: [
      { value: 'CLOSE', label: 'Visual capture' },
      { value: '4K', label: 'Detail' },
      { value: 'FAST', label: 'Audit speed' }
    ],
    problemStatement: 'Vertical facade inspection is often neglected due to the complexity and cost of access. This leads to unidentified issues with cladding, seals, and masonry. Drones provide a fast, safe, and cost-effective method to audit every square metre of a building facade.',
    whatWeCapture: [
      'Vertical elevation imagery',
      'Cladding panels and fixings',
      'Window seals and fenestration',
      'Masonry and concrete condition',
      'High-level signage and assets'
    ],
    deliverables: [
      'Elevation image archive',
      'Annotated defect schedule',
      'Facade condition report',
      'Contractor briefing imagery'
    ],
    useCases: [
      { title: 'Safety Audits', description: 'Regular checks for loose cladding or deteriorating masonry.' },
      { title: 'Project Handover', description: 'Verifying the quality of new facade installations.' }
    ],
    capabilities: [
      { title: 'Vertical Mapping', description: 'Systematic capture of every facade section for total coverage.' },
      { title: 'Precision Zoom', description: 'Inspecting small details without flying dangerously close to the building.' }
    ],
    industries: ['Property Owners', 'Facilities Management', 'Cladding Contractors', 'Surveyors'],
    faqs: [
      { q: 'Can drones detect loose cladding?', a: 'They can provide visual evidence of gaps, warping, or failed fixings.' },
      { q: 'How long does a facade survey take?', a: 'Most commercial elevations can be fully imaged in a few hours.' },
      { q: 'Can you provide images for defect reporting?', a: 'Yes, we specialise in annotated images that highlight specific issues.' }
    ],
    relatedServices: ['building-envelope-inspections', 'roof-inspections', 'commercial-property-drone-surveys'],
    cta: { label: 'INSPECT BUILDING FACADE', href: '/contact' }
  },
  {
    slug: 'building-envelope-inspections',
    title: 'Building Envelope Drone Inspections UK',
    headline: ['BUILDING ENVELOPE', 'INSPECTIONS'],
    category: 'Property & Assets',
    intro: 'External condition capture for facades, cladding, parapets, and high-level plant — providing a complete visual record of building health.',
    metaTitle: 'Building Envelope Drone Inspections UK | Facade & Cladding | TFTS Drone',
    metaDescription: 'Professional drone inspections for building envelopes. Facade, cladding, and asset condition surveys. CAA-compliant, detailed defect reporting.',
    heroStat: [
      { value: '360°', label: 'Asset visibility' },
      { value: '4K', label: 'Visual evidence' },
      { value: 'SAFE', label: 'Reduced access risk' }
    ],
    problemStatement: 'Inspecting building elevations and cladding traditionally requires expensive MEWPs or cradle access. Drones can inspect every face of a building in hours, capturing high-resolution evidence of masonry, cladding joints, glazing, and parapets without any ground-level disruption.',
    whatWeCapture: [
      'Facade and elevation condition',
      'Cladding and glazing joints',
      'Parapets, chimneys and rooflines',
      'High-level plant and access points',
      'Masonry and structural integrity',
      'Moisture signatures (thermal)'
    ],
    deliverables: [
      'Building elevation image set',
      'Annotated defect images',
      'Condition summary report',
      'Maintenance scoping pack',
      'Asset condition archive'
    ],
    useCases: [
      { title: 'Dilapidation Surveys', description: 'Objective evidence of building condition for lease negotiations.' },
      { title: 'Cladding Audits', description: 'Visual inspection of cladding systems and fire-stopping evidence.' },
      { title: 'Reactive Maintenance', description: 'Fast inspection of reported defects at high level.' }
    ],
    capabilities: [
      { title: 'High-Detail Facades', description: 'Capturing clear imagery of every building face at close range.' },
      { title: 'Asset Archiving', description: 'Providing a permanent visual record of the entire building exterior.' }
    ],
    industries: ['Managing Agents', 'Surveyors', 'FM Providers', 'Housing Associations'],
    faqs: [
      { q: 'What parts of the building can be inspected?', a: 'We can inspect facades, windows, cladding, parapets, rooflines and high-level plant.' },
      { q: 'Can you inspect cladding and facades?', a: 'Yes, drones are perfect for checking cladding joints and surface condition.' },
      { q: 'Do you work with surveyors?', a: 'Yes, we provide the visual data for surveyors to use in their formal assessments.' }
    ],
    relatedServices: ['facade-inspections', 'roof-inspections', 'facilities-management-inspections'],
    cta: { label: 'REQUEST ELEVATION SURVEY', href: '/contact' }
  },
  {
    slug: 'facilities-management-inspections',
    title: 'Facilities Management Drone Services UK',
    headline: ['FACILITIES', 'MANAGEMENT'],
    category: 'Property & Assets',
    intro: 'Outcome-led drone services for FM teams — providing the visual evidence needed for planned maintenance, asset audits, and emergency response.',
    metaTitle: 'Facilities Management Drone Services UK | Asset Condition | TFTS Drone',
    metaDescription: 'Professional drone services for facilities management. Roof, asset and condition surveys to support maintenance and FM reporting. CAA-compliant.',
    heroStat: [
      { value: 'PRO', label: 'Active reporting' },
      { value: 'EVIDENCE', label: 'Led decision making' },
      { value: 'SAFE', label: 'Audit workflow' }
    ],
    problemStatement: 'Facilities managers are responsible for vast property portfolios but often lack current, clear visibility of high-level assets. Drones bridge this gap, providing the evidence needed to justify maintenance budgets, brief contractors, and verify completed works — all while keeping boots on the ground.',
    whatWeCapture: [
      'Roof and gutter condition',
      'High-level plant and assets',
      'Site boundaries and security',
      'Building envelope integrity',
      'Maintenance priority areas'
    ],
    deliverables: [
      'FM condition report',
      'Maintenance evidence pack',
      'Asset image archive',
      'Annotated defect summary'
    ],
    useCases: [
      { title: 'Budget Justification', description: 'Providing visual proof of required repairs for financial approval.' },
      { title: 'Contractor Management', description: 'Clearly briefing contractors on work scope before they arrive on site.' }
    ],
    capabilities: [
      { title: 'Portfolio Audits', description: 'Systematic visual records across multiple property sites.' },
      { title: 'Emergency Response', description: 'Urgent drone capture after storm or incident damage.' }
    ],
    industries: ['Facilities Managers', 'Managing Agents', 'Property Owners', 'Site Managers'],
    faqs: [
      { q: 'Do you work with FM companies?', a: 'Yes, we are integrated into the workflow of several major UK facilities management providers.' },
      { q: 'Can you support planned maintenance?', a: 'Yes, we provide the aerial baseline for PPM schedules.' },
      { q: 'Can you respond to emergency issues?', a: 'We offer rapid deployment for urgent roof or asset damage assessment.' }
    ],
    relatedServices: ['roof-inspections', 'building-envelope-inspections', 'insurance-loss-adjuster-surveys'],
    cta: { label: 'START FM BRIEFING', href: '/contact' }
  },
  {
    slug: 'commercial-property-drone-surveys',
    title: 'Commercial Property Drone Surveys UK',
    headline: ['COMMERCIAL', 'PROPERTY', 'SURVEYS'],
    category: 'Property & Assets',
    intro: 'High-resolution aerial surveys for commercial landlords, investors, and asset managers — providing objective evidence for lease negotiations and condition audits.',
    metaTitle: 'Commercial Property Drone Surveys UK | Asset Condition | TFTS Drone',
    metaDescription: 'Professional commercial property drone surveys. Aerial condition audits for landlords, investors and asset managers. CAA-compliant, detailed reporting.',
    heroStat: [
      { value: 'PRO', label: 'Asset visibility' },
      { value: '4K', label: 'Visual evidence' },
      { value: 'REPORTS', label: 'Detailed condition' }
    ],
    problemStatement: 'Managing large commercial portfolios requires accurate, current visibility of asset condition — especially at high level where defects go unnoticed. Drone surveys provide a rapid, site-wide audit of roofs, facades, and plant, delivering the evidence needed for lease renewals, pre-acquisition due diligence, and planned maintenance.',
    whatWeCapture: [
      'Complete building envelope (Roof & Facades)',
      'High-level plant and equipment condition',
      'Site boundaries and hardstanding',
      'Evidence of tenant modifications',
      'Storm or incident damage'
    ],
    deliverables: [
      'Portfolio condition report',
      'High-resolution image archive',
      'Annotated defect schedule',
      'Maintenance priority summary'
    ],
    useCases: [
      { title: 'Lease Negotiations', description: 'Objective evidence of building condition at start or end of lease.' },
      { title: 'Pre-Acquisition', description: 'Rapid aerial audit for investors during the due diligence process.' }
    ],
    capabilities: [
      { title: 'Portfolio Audits', description: 'Consistent reporting across multiple commercial sites.' },
      { title: 'High-Detail Capture', description: 'Capturing clear imagery of every building element at close range.' }
    ],
    industries: ['Commercial Landlords', 'Property Investors', 'Asset Managers', 'Managing Agents'],
    faqs: [
      { q: 'How long does a commercial survey take?', a: 'Most commercial sites can be fully surveyed in 2-4 hours depending on size.' },
      { q: 'Is the data accepted for insurance documentation?', a: 'Drone imagery can support insurance records, but acceptance depends on the insurer, policy, claim context and required evidence.' },
      { q: 'Can you survey multiple sites?', a: 'Yes, we specialise in portfolio-wide audits across the UK.' }
    ],
    relatedServices: ['dilapidation-drone-surveys', 'roof-inspections', 'building-envelope-inspections'],
    cta: { label: 'REQUEST PORTFOLIO AUDIT', href: '/contact' }
  },
  {
    slug: 'dilapidation-drone-surveys',
    title: 'Dilapidation Drone Surveys UK',
    headline: ['DILAPIDATION', 'SURVEYS'],
    category: 'Property & Assets',
    intro: 'Objective aerial evidence for Section 18(1) valuations and terminal dilapidation claims — documenting building condition with high-detail visual documentation.',
    metaTitle: 'Dilapidation Drone Surveys UK | Lease End Evidence | TFTS Drone',
    metaDescription: 'Professional drone surveys for dilapidations. Objective aerial evidence for lease end claims and schedule of condition. CAA-compliant.',
    heroStat: [
      { value: 'LEGAL', label: 'Defensible data' },
      { value: '4K', label: 'High-detail evidence' },
      { value: 'FAST', label: 'Site-wide audit' }
    ],
    problemStatement: 'Dilapidation claims often hinge on the condition of roofs and high-level elements that are difficult to inspect. Drone surveys provide a complete, timestamped visual record of the building envelope, providing both landlords and tenants with objective evidence to settle claims fairly and quickly.',
    whatWeCapture: [
      'Current state of all roof coverings',
      'Gutter and drainage condition evidence',
      'Facade and cladding panel condition',
      'Boundary and hardstanding record',
      'High-level asset inventory'
    ],
    deliverables: [
      'Dilapidations evidence pack',
      'Timestamped image archive',
      'Annotated schedule of condition',
      'Comparison with previous surveys'
    ],
    useCases: [
      { title: 'Terminal Dilapidations', description: 'Documenting building condition at the end of a lease term.' },
      { title: 'Schedule of Condition', description: 'Creating a baseline record at the start of a new tenancy.' }
    ],
    capabilities: [
      { title: 'Objective Evidence', description: 'Unbiased, high-resolution imagery that settles disputes.' },
      { title: 'Timestamped Record', description: 'Providing a definitive record of site condition at a specific date.' }
    ],
    industries: ['Commercial Tenants', 'Landlords', 'Building Surveyors', 'Legal Professionals'],
    faqs: [
      { q: 'Is drone data legally defensible?', a: 'Yes, our timestamped, GPS-referenced imagery provides objective evidence for use in legal and commercial disputes.' },
      { q: 'Can you compare current state with previous records?', a: 'Yes, we can replicate previous flight paths to show change over time.' },
      { q: 'Do you work with surveyors?', a: 'Yes, we provide the visual evidence to support their formal schedules of dilapidations.' }
    ],
    relatedServices: ['commercial-property-drone-surveys', 'roof-inspections', 'facade-inspections'],
    cta: { label: 'BOOK DILAPIDATION SURVEY', href: '/contact' }
  },

  // CONSTRUCTION & SURVEYING
  {
    slug: 'surveying-mapping',
    title: 'Drone Surveying & Mapping UK',
    headline: ['SURVEYING', '& MAPPING'],
    category: 'Construction & Surveying',
    intro: 'high-detail precision topographic surveys, orthomosaic maps, and LiDAR point clouds — delivered faster and at a fraction of the cost of traditional ground survey methods.',
    metaTitle: 'Drone Surveying & Mapping UK | LiDAR & Orthomosaic | TFTS Drone',
    metaDescription: 'Professional drone surveying and mapping services across the UK. Topographic surveys, orthomosaic maps, LiDAR point clouds and 3D models. CAA-compliant, GCP accuracy.',
    heroStat: [
      { value: 'HIGH', label: 'RTK relative accuracy' },
      { value: 'HIGH', label: 'Coverage capability' },
      { value: 'PRO', label: 'Point cloud delivery' },
    ],
    problemStatement: 'Traditional topographic survey is labour-intensive, slow across large areas, and places operatives on potentially hazardous terrain. Drone mapping can support orthomosaics, point clouds, site records, volumetric outputs and planning data. Accuracy depends on capture methodology, control, site conditions and processing workflow.',
    whatWeCapture: [
      'High-overlap aerial photogrammetry',
      'Dense LiDAR point clouds',
      'Ground Control Point (GCP) data',
      'Digital Terrain Models (DTM)',
      'Digital Surface Models (DSM)',
      'Site topographic features',
      'Stockpile and earthworks volumes'
    ],
    deliverables: [
      'Orthomosaic map (GeoTIFF)',
      'Point cloud (LAS/LAZ)',
      '3D Mesh model',
      'Contour data (DXF/DWG)',
      'Stockpile volume report',
      'Topographic site plan'
    ],
    useCases: [
      { title: 'Site Appraisal', description: 'Fast, accurate baseline data for architects and planning consultants.' },
      { title: 'Earthworks Monitoring', description: 'Tracking cut-and-fill progress and volumetric changes over time.' },
      { title: 'Flood Risk Analysis', description: 'High-resolution elevation models for water flow and drainage studies.' },
      { title: 'BIM Integration', description: 'Providing accurate as-built records for building information modelling.' }
    ],
    capabilities: [
      { title: 'LiDAR Capture', description: 'Capturing ground returns through vegetation canopy for true terrain modelling.' },
      { title: 'Photogrammetry', description: 'High-resolution 2D and 3D mapping from overlapping aerial imagery.' },
      { title: 'RTK Correction', description: 'Higher-accuracy mapping outputs available where RTK, ground control and suitable processing are scoped.' }
    ],
    industries: ['Civil Engineering', 'Construction', 'Planning & Architecture', 'Quarrying', 'Agriculture'],
    faqs: [
      { q: 'Are drone surveys high-accuracy survey data outputs?', a: 'High-accuracy survey documentation is available where the project is scoped with appropriate methodology, RTK workflow, ground control, processing and accuracy verification.' },
      { q: 'What accuracy can be achieved?', a: 'Accuracy depends on methodology, site conditions, control points, equipment and processing workflow.' },
      { q: 'What file formats are available?', a: 'Deliverables include GeoTIFF, LAS, LAZ, DXF, DWG, and CSV, compatible with CAD and GIS software.' },
      { q: 'Do you use ground control points?', a: 'Yes, we use GCPs to verify and ensure absolute global accuracy across the entire survey area.' }
    ],
    relatedServices: ['orthomosaic-mapping', 'photogrammetry', 'volumetric-surveys'],
    cta: { label: 'REQUEST A SURVEY QUOTE', href: '/contact' }
  },
  {
    slug: 'construction-monitoring',
    title: 'Construction Drone Monitoring UK',
    headline: ['CONSTRUCTION', 'MONITORING'],
    category: 'Construction & Surveying',
    intro: 'Scheduled drone flights that keep stakeholders informed from groundworks to handover — progress reports, volumetric earthworks, and time-lapse documentation.',
    metaTitle: 'Construction Drone Monitoring UK | Progress Surveys | TFTS Drone',
    metaDescription: 'Professional construction drone monitoring. Scheduled progress flights, earthworks volumetrics, and stakeholder updates. CAA-compliant.',
    heroStat: [
      { value: '4D', label: 'Time-lapse documentation' },
      { value: 'HIGH', label: 'Earthworks tracking' },
      { value: 'WEEKLY', label: 'Flight frequency' },
    ],
    problemStatement: 'Construction projects generate enormous volumes of decisions daily — and the best decisions are made with the most current site intelligence. A weekly drone survey flight delivers something no site walkdown or static CCTV can: a complete, georeferenced record of the site from every angle, updated on a fixed schedule.',
    whatWeCapture: [
      'Weekly/Fortnightly site overviews',
      'Consistent aerial viewpoints',
      'Earthworks and stockpile volumes',
      'Site logistics and layout',
      'Milestone construction stages',
      'As-built vs Design overlays'
    ],
    deliverables: [
      'Construction progress report',
      'Updated orthomosaic plan',
      'Progress image archive',
      'Investor update video',
      'Volumetric change report'
    ],
    useCases: [
      { title: 'Stakeholder Updates', description: 'Clear visual evidence for investors and project board meetings.' },
      { title: 'Logistics Planning', description: 'Reviewing site access, crane locations, and material storage.' },
      { title: 'Dispute Prevention', description: 'A timestamped aerial record of site condition at every stage.' }
    ],
    capabilities: [
      { title: 'Scheduled Flights', description: 'Regular visits aligned to your project reporting cycle.' },
      { title: 'BIM Integration', description: 'Overlaying drone data on design models for as-built verification.' }
    ],
    industries: ['Main Contractors', 'Developers', 'Project Managers', 'Quantity Surveyors'],
    faqs: [
      { q: 'How often can you fly a construction site?', a: 'Most clients choose weekly or fortnightly visits, though we can accommodate any schedule.' },
      { q: 'Can you fly over an active site?', a: 'Yes, with appropriate planning and coordination with the site safety team.' },
      { q: 'Can outputs be used in progress meetings?', a: 'Yes, our reports and visuals are designed specifically for project reviews.' }
    ],
    relatedServices: ['surveying-mapping', 'volumetric-surveys', 'orthomosaic-mapping'],
    cta: { label: 'PLAN CONSTRUCTION MONITORING', href: '/contact' }
  },
  {
    slug: 'volumetric-surveys',
    title: 'Volumetric Drone Surveys UK',
    headline: ['VOLUMETRIC', 'SURVEYS'],
    category: 'Construction & Surveying',
    intro: 'Stockpile and earthworks volume measurements for construction, quarries, and aggregate sites — delivered with repeatable visual records.',
    metaTitle: 'Volumetric Drone Surveys UK | Stockpile & Earthworks | TFTS Drone',
    metaDescription: 'Professional volumetric drone surveys for quarries, construction and aggregate sites. Accurate stockpile measurements and cut/fill analysis. CAA-compliant.',
    heroStat: [
      { value: 'SCOPED', label: 'Typical accuracy' },
      { value: '24H', label: 'Report delivery' },
      { value: 'SAFE', label: 'No stockpiling climbing' }
    ],
    problemStatement: 'Traditional stockpile measurement is slow, often inaccurate, and requires personnel to climb hazardous material piles. Drone-based volumetrics use high-density 3D mapping to calculate volumes across an entire site in minutes, providing commercial teams with accurate stock data without the risk.',
    whatWeCapture: [
      'High-density 3D site mapping',
      'Individual stockpile profiles',
      'Base-level surface data',
      'Cut and fill earthworks progress',
      'Site topographic baseline'
    ],
    deliverables: [
      'Stockpile volume report',
      'Cut and fill calculation',
      '3D site mesh model',
      'Orthomosaic site plan',
      'CSV volume data export'
    ],
    useCases: [
      { title: 'Quarry Management', description: 'Monthly stock audits for financial reporting and planning.' },
      { title: 'Earthworks Progress', description: 'Tracking material movement on large construction or infrastructure projects.' },
      { title: 'Aggregate Stock Audits', description: 'Verifying physical stock against commercial records for developers and contractors.' }
    ],
    capabilities: [
      { title: 'Precision Volumetrics', description: 'Calculating volumes using high-density 3D point cloud data.' },
      { title: 'Comparative Analysis', description: 'Comparing site state across multiple visits to track material change.' }
    ],
    industries: ['Quarrying & Mining', 'Main Contractors', 'Earthworks Contractors', 'Aggregate Suppliers'],
    faqs: [
      { q: 'How accurate are drone volume surveys?', a: 'Earthworks and volume outputs can be scoped where suitable capture, control and processing methodology are applied. Accuracy is dependent on site conditions and methodology.' },
      { q: 'What materials can be measured?', a: 'Any bulk material including gravel, sand, topsoil, aggregates, and waste.' },
      { q: 'How often can you provide measurements?', a: 'Many clients choose monthly or quarterly audits to align with commercial cycles.' }
    ],
    relatedServices: ['stockpile-volume-surveys', 'cut-fill-analysis', 'surveying-mapping'],
    cta: { label: 'REQUEST VOLUME AUDIT', href: '/contact' }
  },
  {
    slug: 'orthomosaic-mapping',
    title: 'Orthomosaic Mapping UK',
    headline: ['ORTHOMOSAIC', 'MAPPING'],
    category: 'Construction & Surveying',
    intro: 'High-resolution, georeferenced aerial maps with 1-3cm per pixel detail — perfect for site management, progress tracking, and as-built verification.',
    metaTitle: 'Orthomosaic Mapping UK | High-Resolution Aerial Maps | TFTS Drone',
    metaDescription: 'Professional drone orthomosaic mapping services. High-resolution georeferenced maps for site management and GIS. CAA-compliant, 1-3cm GSD.',
    heroStat: [
      { value: 'HIGH', label: 'Resolution' },
      { value: 'GEO', label: 'Referenced data' },
      { value: 'GIS', label: 'Ready outputs' }
    ],
    problemStatement: 'Standard aerial imagery is distorted by perspective and camera tilt, making it unsuitable for measurement. Orthomosaic mapping combines hundreds of images into a single, top-down map where every pixel is geometrically corrected, allowing for accurate distance and area measurements.',
    whatWeCapture: [
      'High-overlap NADIR imagery',
      'Ground Control Point (GCP) data',
      'Full site coverage images',
      'Precise GPS positioning'
    ],
    deliverables: [
      'GeoTIFF orthomosaic map',
      'High-resolution PDF site plan',
      'GIS-compatible datasets',
      'Web-viewable interactive map'
    ],
    useCases: [
      { title: 'Site Management', description: 'Providing a clear, current site plan for logistics and safety briefings.' },
      { title: 'As-Built Verification', description: 'Comparing completed works against design plans with overlay accuracy.' },
      { title: 'Environmental Surveys', description: 'Large-scale mapping of habitats, drainage, and land use.' }
    ],
    capabilities: [
      { title: 'GSD Precision', description: 'Achieving high ground sampling distances suitable for site management.' },
      { title: 'Coordinate Alignment', description: 'Aligning maps to OSGB36 or custom site grids for total compatibility.' }
    ],
    industries: ['Construction', 'Planning', 'Agriculture', 'Environmental Agencies'],
    faqs: [
      { q: 'What is an orthomosaic map?', a: 'It is a geometrically corrected aerial map made from stitched images, suitable for measurement like a map.' },
      { q: 'Can I use the data in my GIS software?', a: 'Yes, we deliver in GeoTIFF format which is the standard for GIS and CAD platforms.' },
      { q: 'How current is the mapping data?', a: 'As current as the flight — it provides a perfect snapshot of the site at that exact time.' }
    ],
    relatedServices: ['surveying-mapping', 'photogrammetry', 'construction-monitoring'],
    cta: { label: 'REQUEST MAPPING QUOTE', href: '/contact' }
  },
  {
    slug: 'lidar-point-cloud-surveys',
    title: 'LiDAR Point Cloud Surveys UK',
    headline: ['LIDAR POINT CLOUD', 'SURVEYS'],
    category: 'Construction & Surveying',
    intro: 'High-precision laser scanning from altitude — capturing dense 3D point clouds that penetrate vegetation to reveal true ground terrain.',
    metaTitle: 'LiDAR Point Cloud Surveys UK | Drone Laser Scanning | TFTS Drone',
    metaDescription: 'Professional drone LiDAR surveying services. High-density 3D point clouds, vegetation penetration and DTM generation. CAA-compliant.',
    heroStat: [
      { value: 'DENSE', label: 'Points per m²' },
      { value: 'VEG', label: 'Penetration' },
      { value: 'LAZ', label: 'Standard output' }
    ],
    problemStatement: 'Standard photogrammetry cannot see through trees or thick vegetation, making it difficult to map true ground levels in forested or overgrown areas. LiDAR (Light Detection and Ranging) uses laser pulses to penetrate the canopy, delivering accurate terrain data where other sensors fail.',
    whatWeCapture: [
      'Million-point laser scans',
      'Vegetation and ground returns',
      'High-density 3D geometry',
      'Inertial measurement data (IMU)'
    ],
    deliverables: [
      'Classified point cloud (LAS/LAZ)',
      'Digital Terrain Model (DTM)',
      'Digital Surface Model (DSM)',
      'Contour mapping data'
    ],
    useCases: [
      { title: 'Forestry Mapping', description: 'Mapping ground terrain and tree metrics through dense canopy.' },
      { title: 'Infrastructure Corridors', description: 'Detailed mapping of powerlines and rail where vegetation is a factor.' },
      { title: 'Flood Modelling', description: 'Capturing accurate bare-earth models for hydraulic studies.' }
    ],
    capabilities: [
      { title: 'Laser Precision', description: 'Capturing dense point cloud data for detailed site modelling.' },
      { title: 'Bare Earth Extraction', description: 'Filtering non-ground points to reveal the true site topography.' }
    ],
    industries: ['Forestry', 'Civil Engineering', 'Utilities', 'Environmental Planning'],
    faqs: [
      { q: 'What is the advantage of LiDAR?', a: 'It can capture ground levels through vegetation and is highly accurate over complex geometry.' },
      { q: 'How dense is the point cloud?', a: 'We can achieve high densities suitable for professional terrain modelling.' },
      { q: 'Is it better than photogrammetry?', a: 'For mapping terrain under trees, yes. For visual realism, photogrammetry is often preferred.' }
    ],
    relatedServices: ['surveying-mapping', 'orthomosaic-mapping', 'volumetric-surveys'],
    cta: { label: 'REQUEST LIDAR SURVEY', href: '/contact' }
  },
  {
    slug: 'photogrammetry',
    title: 'Drone Photogrammetry UK',
    headline: ['DRONE', 'PHOTOGRAMMETRY'],
    category: 'Construction & Surveying',
    intro: 'Turning aerial imagery into accurate 3D models, point clouds, and maps — the science of extracting precise measurements from drone data.',
    metaTitle: 'Drone Photogrammetry UK | 3D Mapping & Models | TFTS Drone',
    metaDescription: 'Professional drone photogrammetry services. High-accuracy 3D models, maps and point clouds from aerial data. CAA-compliant documentation.',
    heroStat: [
      { value: '3D', label: 'Site modelling' },
      { value: 'GCP', label: 'Controlled accuracy' },
      { value: 'LAS', label: 'Standard formats' }
    ],
    problemStatement: 'Traditional site modeling requires significant time and ground-based measurement. Photogrammetry allows us to reconstruct large sites in 3D using overlapping drone imagery, producing accurate models that can be used for engineering, heritage recording, and stakeholder engagement.',
    whatWeCapture: [
      'Multi-angle aerial photography',
      'GCP and RTK positioning data',
      '3D geometry of structures and terrain',
      'High-resolution texture data'
    ],
    deliverables: [
      '3D mesh model (OBJ/FBX)',
      'Dense point cloud (LAS)',
      'Orthomosaic site map',
      'Digital Surface Model (DSM)'
    ],
    useCases: [
      { title: 'Heritage Recording', description: 'Creating detailed 3D replicas of historic structures for preservation.' },
      { title: 'Infrastructure Monitoring', description: 'Monitoring structural changes over time through periodic 3D modeling.' },
      { title: 'Visualisation', description: 'Providing stakeholders with a realistic 3D representation of a site or project.' }
    ],
    capabilities: [
      { title: '3D Reconstruction', description: 'Processing thousands of images into high-fidelity 3D assets.' },
      { title: 'Scale Accuracy', description: 'Ensuring models are correctly scaled and georeferenced for measurement.' }
    ],
    industries: ['Heritage', 'Construction', 'Architecture', 'Media'],
    faqs: [
      { q: 'How accurate is drone photogrammetry?', a: 'Accuracy depends on capture methodology, RTK/GCP use, site conditions and processing workflow.' },
      { q: 'What is the difference between photogrammetry and LiDAR?', a: 'Photogrammetry uses images to build models, while LiDAR uses laser pulses. Photogrammetry is often better for visual texture.' },
      { q: 'Can it be used for BIM?', a: 'Yes, our point clouds and meshes are compatible with major BIM software.' }
    ],
    relatedServices: ['surveying-mapping', 'orthomosaic-mapping', 'digital-twin-capture'],
    cta: { label: 'DISCUSS 3D CAPTURE', href: '/contact' }
  },
  {
    slug: 'agricultural-surveys',
    title: 'Agricultural Drone Surveys UK',
    headline: ['AGRICULTURAL', 'SURVEYS'],
    category: 'Construction & Surveying',
    intro: 'NDVI crop health analysis, multispectral field mapping, and drainage assessment — giving landowners the aerial intelligence to improve yield.',
    metaTitle: 'Agricultural Drone Surveys UK | NDVI & Multispectral | TFTS Drone',
    metaDescription: 'Professional agricultural drone surveys. NDVI crop health mapping, multispectral analysis and drainage assessment. CAA-compliant.',
    heroStat: [
      { value: 'NDVI', label: 'Crop analysis' },
      { value: 'FAST', label: 'Coverage at scale' },
      { value: 'PRO', label: 'Agronomy support' },
    ],
    problemStatement: 'UK agriculture operates under intense margin pressure. Farmers need accurate, timely data to replace blanket input application with precision intervention. Satellite imagery is often too low-resolution or obscured by cloud; drones deliver high-detail multispectral data exactly when you need it.',
    whatWeCapture: [
      'NDVI / multispectral health maps',
      'High-resolution RGB field overviews',
      'Drainage and waterlogging patterns',
      'Field boundary verification',
      'Crop emergence and stand counts'
    ],
    deliverables: [
      'Crop health index report',
      'Georeferenced prescription maps',
      'Drainage anomaly summary',
      'Seasonal monitoring archive'
    ],
    useCases: [
      { title: 'Precision Ag', description: 'Identifying underperforming zones for targeted input application.' },
      { title: 'Drainage Mapping', description: 'Planning land drainage works based on visible soil moisture patterns.' }
    ],
    capabilities: [
      { title: 'Multispectral Sensors', description: 'Seeing beyond the visible spectrum for plant health.' },
      { title: 'Prescription Ready', description: 'Exporting data for direct use in farm management software.' }
    ],
    industries: ['Arable Farmers', 'Agronomists', 'Estate Managers', 'Land Agents'],
    faqs: [
      { q: 'How does it help yield?', a: 'By identifying stress early, you can intervene precisely rather than waiting for visual symptoms.' },
      { q: 'Can the data go into my tractor?', a: 'Yes, we export georeferenced maps ready for most variable rate systems.' }
    ],
    relatedServices: ['surveying-mapping', 'thermal-imaging', 'orthomosaic-mapping'],
    cta: { label: 'ENQUIRE ABOUT AG SURVEYS', href: '/contact' }
  },

  // INFRASTRUCTURE & ENERGY
  {
    slug: 'infrastructure-inspections',
    title: 'Infrastructure Drone Inspections UK',
    headline: ['INFRASTRUCTURE', 'INSPECTIONS'],
    category: 'Infrastructure & Energy',
    intro: 'High-detail aerial inspections for bridges, masts, rail, and highways — providing critical asset visibility while eliminating the need for high-risk manual access.',
    metaTitle: 'Infrastructure Drone Inspections UK | Bridge & Mast Surveys | TFTS Drone',
    metaDescription: 'Professional drone inspections for infrastructure assets. Bridge, rail, telecom and highway corridor surveys. CAA-compliant, high-detail reporting.',
    heroStat: [
      { value: 'LOW', label: 'Access risk' },
      { value: '4K', label: 'Ultra HD detail' },
      { value: 'GVC', label: 'Certified pilots' }
    ],
    problemStatement: 'Infrastructure assets often require inspection in high-risk environments — over water, near live rail, or at extreme height. Traditional methods involving rope access or under-bridge units are costly and disruptive. Drone inspection delivers high-resolution visual and thermal evidence without the need for line-of-route closures or operative risk.',
    whatWeCapture: [
      'Deck soffit and pier condition',
      'Expansion joint detail',
      'Telecom mast and antenna arrays',
      'Rail corridor condition',
      'Highway surface and drainage',
      'High-level masonry and structural joints'
    ],
    deliverables: [
      'High-resolution visual record',
      'Annotated defect images',
      'Asset condition summary',
      'Thermal inspection data',
      'Bridge/structure detail pack'
    ],
    useCases: [
      { title: 'Bridge Inspection', description: 'Detailed visual checks of soffits, bearings, and piers without lane closures.' },
      { title: 'Telecom Masts', description: 'Inspecting antenna condition and alignment from a safe distance.' },
      { title: 'Rail & Highway', description: 'Monitoring corridor condition and vegetation encroachment at scale.' }
    ],
    capabilities: [
      { title: 'Zoom Payloads', description: '23x optical zoom for detailed inspection from safe standoff distances.' },
      { title: 'Thermal Assessment', description: 'Identifying moisture or structural anomalies in concrete and masonry.' }
    ],
    industries: ['Infrastructure Owners', 'Local Authorities', 'Rail Operators', 'Highways Maintenance'],
    faqs: [
      { q: 'Can drones inspect bridge soffits?', a: 'Yes, using upward-facing gimbals, we can capture high-detail imagery of deck undersides.' },
      { q: 'What is the risk to live rail or roads?', a: 'We operate under strict risk assessments and coordinate with stakeholders to ensure zero disruption.' },
      { q: 'Can you provide timestamped evidence for claims?', a: 'Yes, every image is metadata-rich with GPS and time synchronisation.' }
    ],
    relatedServices: ['utilities-energy-inspections', 'surveying-mapping', 'thermal-imaging'],
    cta: { label: 'DISCUSS INFRASTRUCTURE CAPTURE', href: '/contact' }
  },
  {
    slug: 'utilities-energy-inspections',
    title: 'Utilities & Energy Drone Inspections UK',
    headline: ['UTILITIES', '& ENERGY'],
    category: 'Infrastructure & Energy',
    intro: 'Specialist aerial inspection for powerlines, pylons, substations, and energy assets — improving grid reliability and safety through advanced sensor technology.',
    metaTitle: 'Utilities & Energy Drone Inspections UK | Powerline & Pylon Surveys',
    metaDescription: 'Professional drone inspections for utilities and energy infrastructure. Powerline, pylon and substation surveys. CAA-compliant, radiometric thermal data.',
    heroStat: [
      { value: 'NO', label: 'Outage required' },
      { value: 'HIGH', label: 'Thermal accuracy' },
      { value: '23X', label: 'Optical zoom' }
    ],
    problemStatement: 'Inspecting high-voltage energy assets traditionally requires expensive outages and puts personnel at risk. Drones allow for the inspection of pylons, conductors, and insulators while the grid remains live, identifying hotspots and mechanical failures before they lead to service interruption.',
    whatWeCapture: [
      'Insulator condition and contamination',
      'Conductor surface integrity',
      'Tower structural condition',
      'Substation asset thermal signatures',
      'Vegetation clearance along corridors',
      'Pipeline surface condition'
    ],
    deliverables: [
      'High-detail pylon inspection pack',
      'Radiometric thermal data',
      'Anomaly detection report',
      'Corridor vegetation map',
      'Substation condition summary'
    ],
    useCases: [
      { title: 'Powerline Inspection', description: 'Monitoring pylon and line condition without requiring circuit outages.' },
      { title: 'Substation Monitoring', description: 'Thermal audits of transformers and switches to detect overheating components.' },
      { title: 'Corridor Mapping', description: 'Ensuring safe distances between infrastructure and surrounding vegetation.' }
    ],
    capabilities: [
      { title: 'Thermal Radiometry', description: 'Detecting resistive heating in electrical components with radiometric sensors.' },
      { title: 'Multi-Sensor Payloads', description: 'Simultaneous visual and thermal capture for comprehensive assessment.' }
    ],
    industries: ['Energy Networks', 'Utility Providers', 'Renewable Energy Developers', 'Asset Managers'],
    faqs: [
      { q: 'Can drones fly near high-voltage lines?', a: 'Yes, our enterprise drones are shielded and we maintain safe standoff distances using zoom sensors.' },
      { q: 'Is an outage required for the inspection?', a: 'Typically no, drone inspections are designed to be completed while assets are live.' },
      { q: 'How do you detect hotspots?', a: 'We use high-resolution radiometric thermal sensors that measure absolute temperature differentials.' }
    ],
    relatedServices: ['solar-panel-inspections', 'infrastructure-inspections', 'thermal-imaging'],
    cta: { label: 'INSPECT ENERGY ASSETS', href: '/contact' }
  },
  {
    slug: 'solar-panel-inspections',
    title: 'Solar Panel Drone Inspections UK',
    headline: ['SOLAR PANEL', 'INSPECTIONS'],
    category: 'Infrastructure & Energy',
    intro: 'Efficiency-focused thermal audits for commercial PV arrays and solar farms — identifying cell-level faults and underperforming strings at scale.',
    metaTitle: 'Solar Panel Drone Inspections UK | Thermal PV Audits | TFTS Drone',
    metaDescription: 'Professional solar panel drone inspections. Thermal cell-level fault detection, string audits and anomaly reporting. CAA-compliant, IEC compliant reporting.',
    heroStat: [
      { value: '100%', label: 'Array coverage' },
      { value: 'CELL', label: 'Level detail' },
      { value: 'FAST', label: 'Large-scale audit' }
    ],
    problemStatement: 'Manual solar inspection is slow, incomplete, and often only covers a fraction of the array. Drone thermal imaging allows for the rapid inspection of thousands of panels in a single flight, identifying cell-level hotspots, bypass diode failures, and string anomalies that are invisible to the naked eye.',
    whatWeCapture: [
      'Radiometric thermal imagery of every panel',
      'String-level temperature variations',
      'Cell-level hotspots and hotspots',
      'Mechanical damage and soiling',
      'Inverter and transformer thermal data',
      'Mounting structure condition'
    ],
    deliverables: [
      'IEC-compliant thermal report',
      'Interactive fault map',
      'Prioritised maintenance list',
      'Radiometric dataset',
      'High-resolution visual record'
    ],
    useCases: [
      { title: 'Commissioning Audits', description: 'Ensuring new arrays are performing to specification before handover.' },
      { title: 'Annual Performance Review', description: 'Maintaining peak efficiency across large commercial solar portfolios.' },
      { title: 'Warranty Claims', description: 'Providing objective evidence of panel failure for manufacturer claims.' }
    ],
    capabilities: [
      { title: 'Thermal Mapping', description: 'Creating a georeferenced thermal map of the entire solar farm.' },
      { title: 'AI Fault Detection', description: 'Automated identification of common PV anomalies across large datasets.' }
    ],
    industries: ['Solar Farm Operators', 'Asset Managers', 'Commercial Landlords', 'O&M Providers'],
    faqs: [
      { q: 'How many panels can you inspect in a day?', a: 'We can typically cover 5-10MW of solar capacity per day depending on site layout.' },
      { q: 'What conditions are needed for solar inspection?', a: 'Ideally clear skies and high solar irradiance (minimum 600W/m²) for accurate thermal signatures.' },
      { q: 'Can you identify cell-level faults?', a: 'Yes, our high-resolution thermal sensors can detect individual failing cells within a panel.' }
    ],
    relatedServices: ['utilities-energy-inspections', 'thermal-imaging', 'infrastructure-inspections'],
    cta: { label: 'AUDIT SOLAR PERFORMANCE', href: '/contact' }
  },

  // SPECIALIST & RESPONSE
  {
    slug: 'thermal-imaging',
    title: 'Thermal Drone Imaging UK',
    headline: ['THERMAL', 'IMAGING'],
    category: 'Specialist & Response',
    intro: 'Thermal drone capture for buildings, roofs, solar panels and assets, helping identify temperature anomalies that may support further investigation, maintenance planning or energy-related review.',
    metaTitle: 'Thermal Drone Imaging UK | Radiometric Building Surveys | TFTS Drone',
    metaDescription: 'Professional thermal drone imaging surveys. Radiometric surveys for building envelopes, solar farms, and electrical inspection. CAA-compliant.',
    heroStat: [
      { value: 'HIGH', label: 'Radiometric resolution' },
      { value: 'PRO', label: 'Thermal sensor' },
      { value: 'PRO', label: 'Professional reporting' },
    ],
    problemStatement: 'Thermal imaging from altitude transforms building assessment. Thermal drone capture can highlight temperature anomalies that may indicate heat loss, solar panel issues, roof concerns or asset condition questions, subject to suitable conditions and interpretation.',
    whatWeCapture: [
      'Radiometric thermal imagery',
      'Building envelope heat signatures',
      'Roof moisture signatures',
      'Solar array anomalies',
      'Electrical asset hotspots'
    ],
    deliverables: [
      'Thermal image set',
      'Radiometric temperature data',
      'Defect priority summary',
      'Annotated thermal report',
      'Maintenance planning notes'
    ],
    useCases: [
      { title: 'Flat Roof Surveys', description: 'Detecting trapped moisture and insulation defects in flat roof systems.' },
      { title: 'Energy Audits', description: 'Identifying areas of significant heat loss for MEES/EPC compliance.' },
      { title: 'Solar Inspection', description: 'Finding cell-level faults and underperforming strings in PV arrays.' }
    ],
    capabilities: [
      { title: 'Radiometric Capture', description: 'Capturing temperature data in every pixel for detailed interrogation.' },
      { title: 'Building Physics', description: 'Understanding how heat and moisture move through structures.' }
    ],
    industries: ['Facilities Management', 'Insurance', 'Solar Energy', 'Building Consultancy'],
    faqs: [
      { q: 'What conditions are required for a thermal survey?', a: 'Ideally a 10°C differential between internal and external temperatures, often requiring dawn or night flights.' },
      { q: 'What can thermal imaging detect?', a: 'It identifies temperature anomalies that may indicate moisture, insulation concerns, air leaks, or hotspots for further investigation.' },
      { q: 'Is thermal data radiometric?', a: 'Yes, we only use radiometric sensors where each pixel contains a temperature value.' }
    ],
    relatedServices: ['roof-inspections', 'solar-panel-inspections', 'facilities-management-inspections'],
    cta: { label: 'BOOK A THERMAL SURVEY', href: '/contact' }
  },
  {
    slug: 'aerial-photography-film',
    title: 'Aerial Photography & Film UK',
    headline: ['AERIAL', 'PHOTOGRAPHY', '& FILM'],
    category: 'Specialist & Response',
    intro: 'Cinematic 4K drone footage and ultra-high-resolution stills for property, commercial, and broadcast clients. Every flight is managed by a CAA GVC certified pilot.',
    metaTitle: 'Aerial Photography UK | 4K Drone Filming | TFTS Drone',
    metaDescription: 'Professional aerial photography and drone filming services across the UK. 4K/6K video, 45MP stills for real estate, commercial, and broadcast. CAA-compliant.',
    heroStat: [
      { value: '4K', label: 'Cinematic video' },
      { value: '45MP', label: 'Full-frame stills' },
      { value: '24H', label: 'Highlight delivery' },
    ],
    problemStatement: 'Standard ground-level photography often fails to capture the true scale and context of a project or property. Low-quality drone footage from hobbyist operators lacks the stability, composition, and legal compliance required by professional brands. We deliver cinematic, broadcast-grade aerial content that performs.',
    whatWeCapture: [
      'Cinematic 4K/6K video sequences',
      'Ultra-high-resolution 45MP stills',
      'Dynamic tracking and reveal shots',
      '360° site overviews',
      'Night-time aerial content'
    ],
    deliverables: [
      'Edited highlight film',
      'Raw footage archive (Log profile)',
      'High-res image gallery',
      'Social-first video edits'
    ],
    useCases: [
      { title: 'Property Marketing', description: 'Showcasing luxury estates and commercial developments.' },
      { title: 'Brand Campaigns', description: 'Adding high-production value to marketing films.' }
    ],
    capabilities: [
      { title: 'Cinematic Movement', description: 'Smooth, choreographed flights for high-end results.' },
      { title: 'Advanced Post-Processing', description: 'Professional colour grading and editing services.' }
    ],
    industries: ['Marketing Agencies', 'Luxury Real Estate', 'Film Production', 'Tourism'],
    faqs: [
      { q: 'What is the video resolution?', a: 'We capture in 4K or 6K resolution as standard.' },
      { q: 'Do you provide edited videos?', a: 'Yes, we offer full post-production services or raw footage delivery.' }
    ],
    relatedServices: ['fpv-drone-filming', '360-aerial-panoramas', 'events-media'],
    cta: { label: 'DISCUSS YOUR SHOOT', href: '/contact' }
  },
  {
    slug: 'events-media',
    title: 'Events Drone Coverage UK',
    headline: ['EVENTS', '& MEDIA'],
    category: 'Specialist & Response',
    intro: 'Aerial photography, drone video, FPV-style visual content and venue media assets for commercial campaigns, property, events and brand storytelling, subject to safe operating conditions.',
    metaTitle: 'Events Drone Coverage UK | Festivals & Sports | TFTS Drone',
    metaDescription: 'Aerial media for venues, events and commercial campaigns, planned around site constraints, permissions, airspace and operational safety requirements.',
    heroStat: [
      { value: 'PRO', label: 'Event media' },
      { value: 'LIVE', label: 'FPV feed available' },
      { value: '24H', label: 'Rapid delivery' },
    ],
    problemStatement: 'Aerial photography, drone video and FPV-style content can support venues, property, events and brand campaigns where operations can be safely and lawfully planned. Event drone operations are subject to site-specific risk assessment, separation distances, permissions, airspace constraints and CAA operational requirements.',
    whatWeCapture: [
      'Dynamic crowd overviews',
      'Stage and performance highlights',
      'Sporting action tracking',
      'Event setup and breakdown',
      'Site atmosphere and scale'
    ],
    deliverables: [
      'Event highlight video',
      'Social media content pack',
      'Raw footage archive',
      'Live video downlink'
    ],
    useCases: [
      { title: 'Festivals', description: 'Capturing the full scale of major music and cultural events.' },
      { title: 'Sporting Events', description: 'Tracking fast-moving action with precision.' }
    ],
    capabilities: [
      { title: 'Crowd Safety', description: 'Rigorous risk management for operations over people.' },
      { title: 'Safe Operations', description: 'Project planning focused on safety and compliance.' }
    ],
    industries: ['Event Organisers', 'Sponsors', 'Broadcasters', 'Local Authorities'],
    faqs: [
      { q: 'Is it safe for events?', a: 'Yes, we follow strict safety protocols and separation requirements for event-related filming.' },
      { q: 'Can you provide a live feed?', a: 'Yes, we can stream HD video to your production desk in real-time.' }
    ],
    relatedServices: ['fpv-drone-filming', 'aerial-photography-film', '360-aerial-panoramas'],
    cta: { label: 'BOOK EVENT COVERAGE', href: '/contact' }
  },
  {
    slug: 'heritage-conservation-archaeology',
    title: 'Heritage & Conservation Drone Surveys UK',
    headline: ['HERITAGE', '& CONSERVATION'],
    category: 'Specialist & Response',
    intro: 'Non-invasive aerial surveys and 3D modelling for historic buildings, listed structures, and archaeological sites — preserving the past with modern technology.',
    metaTitle: 'Heritage & Conservation Drone Surveys UK | 3D Site Models | TFTS Drone',
    metaDescription: 'Professional drone surveys for heritage and conservation. 3D site modelling, condition monitoring and digital preservation. CAA-compliant.',
    heroStat: [
      { value: 'NON', label: 'Invasive capture' },
      { value: '3D', label: 'Site modelling' },
      { value: 'PRE', label: 'Acquisition record' }
    ],
    problemStatement: 'Historic structures are fragile and often difficult to access without risking damage. Drones provide a completely non-contact method to inspect roofs, spires, and masonry, while creating high-fidelity digital replicas that can be used for conservation planning and public engagement.',
    whatWeCapture: [
      'High-detail structural geometry',
      'Historic roof and spire condition',
      'Archaeological site mapping',
      'Digital terrain of historic estates',
      'Texture and material condition'
    ],
    deliverables: [
      'High-fidelity 3D model',
      'Digital preservation archive',
      'Heritage condition report',
      'Public engagement visuals',
      'Orthomosaic site map'
    ],
    useCases: [
      { title: 'Listed Building Audit', description: 'Detailed inspection of roofs and spires for Grant application evidence.' },
      { title: 'Archaeological Mapping', description: 'Capturing site features from the air that are invisible from the ground.' },
      { title: 'Digital Twins', description: 'Creating permanent digital records of historic assets for future reference.' }
    ],
    capabilities: [
      { title: 'Photorealistic Modelling', description: 'Creating stunning 3D models of historic structures using photogrammetry.' },
      { title: 'Detailed Spire Inspection', description: 'Inspecting inaccessible heights with zero physical contact.' }
    ],
    industries: ['Conservation Groups', 'Heritage Organisations', 'Archaeologists', 'Listed Building Owners'],
    faqs: [
      { q: 'Is drone capture safe for fragile structures?', a: 'Yes, it is entirely non-contact and we maintain safe distances using zoom sensors.' },
      { q: 'Can you produce 3D models for public use?', a: 'Yes, we create web-viewable models perfect for museums and online engagement.' },
      { q: 'Do you work with conservation officers?', a: 'Yes, we provide the data they need to approve restoration works.' }
    ],
    relatedServices: ['digital-twin-capture', 'tfts-3d', 'drone-photogrammetry'],
    cta: { label: 'DISCUSS HERITAGE CAPTURE', href: '/contact' }
  },
  {
    slug: 'insurance-loss-adjuster-surveys',
    title: 'Insurance & Loss Adjuster Drone Surveys UK',
    headline: ['INSURANCE', '& LOSS ADJUSTER'],
    category: 'Specialist & Response',
    intro: 'Rapid aerial damage assessment for loss adjusters and insurers — providing immediate visibility after fire, flood, or storm incidents.',
    metaTitle: 'Insurance & Loss Adjuster Drone Surveys UK | Damage Assessment | TFTS Drone',
    metaDescription: 'Professional drone surveys for loss adjusters. Rapid damage assessment after fire, flood or storm. CAA-compliant, rapid deployment.',
    heroStat: [
      { value: 'RAPID', label: 'Incident response' },
      { value: 'SAFE', label: 'Remote assessment' },
      { value: '4K', label: 'Detailed evidence' }
    ],
    problemStatement: 'Assessing damage after a major incident is often delayed by safety concerns and access restrictions. Drones can be deployed immediately to capture high-resolution evidence of fire-damaged roofs, flood-affected sites, or storm-damaged assets, allowing loss adjusters to start the claim process without waiting for safe manual access.',
    whatWeCapture: [
      'Fire damage extent (Visual & Thermal)',
      'Storm damage to roofs and structures',
      'Flood extent and impact mapping',
      'High-level incident evidence',
      'Post-incident site safety audit'
    ],
    deliverables: [
      'Incident damage report',
      'High-resolution evidence pack',
      'Thermal damage assessment',
      'Site safety overview',
      'Timeline of site change'
    ],
    useCases: [
      { title: 'Post-Fire Audit', description: 'Safe inspection of collapsed or unstable roof structures.' },
      { title: 'Storm Damage', description: 'Rapid assessment of wind damage to large industrial estates.' },
      { title: 'Flood Mapping', description: 'Documenting the extent of water ingress and site impact.' }
    ],
    capabilities: [
      { title: 'Rapid Deployment', description: 'Priority scheduling for urgent insurance assessments.' },
      { title: 'Thermal Damage Detection', description: 'Identifying hidden hotspots or moisture pockets after an incident.' }
    ],
    industries: ['Loss Adjusters', 'Insurers', 'Risk Managers', 'Property Owners'],
    faqs: [
      { q: 'How quickly can you deploy?', a: 'We offer 24-48 hour response times for urgent insurance assessments.' },
      { q: 'Is drone data accepted by underwriters?', a: 'Yes, it is considered primary evidence for claim adjustment.' },
      { q: 'Can you fly over damaged buildings?', a: 'Yes, we can safely inspect unstable structures from the air.' }
    ],
    relatedServices: ['emergency-response', 'thermal-imaging', 'roof-inspections'],
    cta: { label: 'REQUEST INCIDENT SURVEY', href: '/contact' }
  },
  {
    slug: 'emergency-response',
    title: 'Emergency Incident Response Drone Services UK',
    headline: ['EMERGENCY', 'RESPONSE'],
    category: 'Specialist & Response',
    intro: 'Immediate aerial intelligence for incident commanders and emergency teams — providing real-time visibility in critical situations.',
    metaTitle: 'Emergency Incident Response Drone Services UK | Rapid Deployment | TFTS Drone',
    metaDescription: 'Professional drone services for emergency response. Real-time aerial intelligence for fire, flood and structural incidents. CAA-compliant, rapid response.',
    heroStat: [
      { value: 'FAST', label: 'Deployment' },
      { value: 'LIVE', label: 'Intelligence' },
      { value: 'SAFE', label: 'Remote viewing' }
    ],
    problemStatement: 'In the first hour of an emergency, information is the most valuable asset. Drones provide incident commanders with a "God\'s-eye view" of fire spread, structural failure, or hazardous spills, allowing for safer and more effective response decisions without placing personnel in the line of fire.',
    whatWeCapture: [
      'Real-time fire spread (Thermal)',
      'Structural stability overviews',
      'Hazardous material extent',
      'Search and rescue support',
      'Access and egress monitoring'
    ],
    deliverables: [
      'Live video feed to command',
      'Post-incident evidence pack',
      'Thermal hotspot mapping',
      'High-resolution incident archive'
    ],
    useCases: [
      { title: 'Fire Monitoring', description: 'Tracking thermal signatures through smoke and at night.' },
      { title: 'Structural Collapse', description: 'Assessing stability and searching for casualties remotely.' }
    ],
    capabilities: [
      { title: 'Real-Time Streaming', description: 'Broadcasting live aerial video to off-site command centres.' },
      { title: 'Advanced Thermal', description: 'Seeing through smoke and darkness to identify heat sources.' }
    ],
    industries: ['Emergency Services', 'Site Safety Teams', 'Industrial Operators', 'Local Authorities'],
    faqs: [
      { q: 'Can you fly in active emergency zones?', a: 'Yes, we coordinate with incident commanders and have permissions for emergency operations.' },
      { q: 'How fast is the live feed?', a: 'We provide low-latency HD streaming to any web-enabled device.' },
      { q: 'Can you fly at night?', a: 'Yes, all our pilots and platforms are fully equipped for night operations.' }
    ],
    relatedServices: ['insurance-loss-adjuster-surveys', 'thermal-imaging', 'infrastructure-inspections'],
    cta: { label: 'DISCUSS RESPONSE PROTOCOLS', href: '/contact' }
  },
  {
    slug: 'fpv-drone-filming',
    title: 'FPV Drone Filming UK',
    headline: ['FPV DRONE', 'FILMING'],
    category: 'Specialist & Response',
    intro: 'High-speed, immersive, and dynamic aerial cinematography for brands, events, and property — taking viewers where traditional drones cannot go.',
    metaTitle: 'FPV Drone Filming UK | Immersive Cinematography | TFTS Drone',
    metaDescription: 'Professional FPV drone filming services. High-speed, immersive cinematography for property, events and marketing. CAA-compliant, 4K/6K video.',
    heroStat: [
      { value: '60FPS', label: 'High-speed 4K' },
      { value: 'PRO', label: 'Immersive flow' },
      { value: 'A16', label: 'Licensed operations' }
    ],
    problemStatement: 'Standard drone footage can feel static and detached. FPV (First Person View) drones deliver a visceral, "fly-on-the-wall" experience, diving through tight spaces, chasing fast subjects, and providing a level of immersion that matches the energy of modern brands and high-end property tours.',
    whatWeCapture: [
      'Dynamic indoor flythroughs',
      'High-speed chase sequences',
      'One-take property reveals',
      'Immersive event atmosphere',
      'Acrobatic brand content'
    ],
    deliverables: [
      'High-bitrate 4K/6K video',
      'Cinematic social media cuts',
      'Immersive property tour film',
      'Action-packed brand asset'
    ],
    useCases: [
      { title: 'One-Take Tours', description: 'Flying from outside, through the front door, and around a property in a single shot.' },
      { title: 'Automotive & Action', description: 'Chasing vehicles or athletes with high-speed precision.' }
    ],
    capabilities: [
      { title: 'Precision Indoor Flight', description: 'Navigating tight spaces and sensitive environments with prop-guarded drones.' },
      { title: 'High-G Manoeuvres', description: 'Delivering dynamic, high-energy shots that traditional drones cannot achieve.' }
    ],
    industries: ['Marketing Agencies', 'Luxury Property', 'Automotive Brands', 'Event Organisers'],
    faqs: [
      { q: 'Can you fly FPV indoors?', a: 'Yes, we use specialised "cinewhoop" drones with guarded propellers for safe indoor flight.' },
      { q: 'What is the video quality?', a: 'We capture in 4K or 6K at high bitrates, ready for professional grading.' },
      { q: 'Is it safe for events?', a: 'Yes, we follow strict safety protocols and operational authorisations for event filming.' }
    ],
    relatedServices: ['aerial-photography-film', 'events-media', 'digital-twin-capture'],
    cta: { label: 'REQUEST FPV FILMING', href: '/contact' }
  },
  {
    slug: '360-aerial-panoramas',
    title: '360° Aerial Panoramas UK',
    headline: ['360° AERIAL', 'PANORAMAS'],
    category: 'Specialist & Response',
    intro: 'Interactive, high-resolution 360° aerial spheres for website integration — providing a complete view of a site, development, or landscape.',
    metaTitle: '360° Aerial Panoramas UK | Interactive Site Views | TFTS Drone',
    metaDescription: 'Professional 360 degree aerial panoramas. Interactive site views for developers, property and tourism. CAA-compliant, web-ready integration.',
    heroStat: [
      { value: '360°', label: 'Total visibility' },
      { value: '8K', label: 'Resolution' },
      { value: 'WEB', label: 'Ready integration' }
    ],
    problemStatement: 'Static images only tell part of the story. A 360° aerial panorama allows stakeholders to "look around" from a fixed point in the sky, providing context, scale, and a sense of place that standard photography cannot achieve. Perfect for embedding on property websites and planning portals.',
    whatWeCapture: [
      'High-resolution 360° image spheres',
      'Multi-point aerial tours',
      'Contextual site markers',
      'Interactive hotspot data'
    ],
    deliverables: [
      'Interactive 360° web viewer',
      'High-resolution panorama file',
      'Branded virtual tour',
      'Embedded code for sites'
    ],
    useCases: [
      { title: 'Development Marketing', description: 'Showcasing the surrounding area and views from a new development.' },
      { title: 'Tourism & Leisure', description: 'Providing an interactive "God\'s-eye view" of venues and landscapes.' }
    ],
    capabilities: [
      { title: 'High-Res Stitching', description: 'Combining multiple images into a seamless 8K+ panorama.' },
      { title: 'Interactive Hotspots', description: 'Adding labels and links within the 360° view for deeper engagement.' }
    ],
    industries: ['Developers', 'Estate Agents', 'Tourism Boards', 'Planning Consultants'],
    faqs: [
      { q: 'Can I embed this on my website?', a: 'Yes, we provide a standard embed code that works with all modern websites.' },
      { q: 'What is the resolution?', a: 'Our panoramas are typically delivered in 8K resolution for crystal-clear detail.' },
      { q: 'Can you link multiple 360s together?', a: 'Yes, we can create a virtual tour with multiple aerial and ground-based points.' }
    ],
    relatedServices: ['aerial-photography-film', 'digital-twin-capture', 'tfts-3d'],
    cta: { label: 'CREATE 360 TOUR', href: '/contact' }
  },
  {
    slug: 'digital-twin-capture',
    title: 'Digital Twin Drone Capture UK',
    headline: ['DIGITAL TWIN', 'CAPTURE'],
    category: 'Specialist & Response',
    intro: 'High-fidelity 3D site replicas for BIM integration and virtual management — the foundation of the modern smart building.',
    metaTitle: 'Digital Twin Drone Capture UK | 3D Site Replicas | TFTS Drone',
    metaDescription: 'Professional drone capture for digital twins. High-fidelity 3D models and site replicas for BIM and management. CAA-compliant.',
    heroStat: [
      { value: 'BIM', label: 'Ready data' },
      { value: '3D', label: 'Site replica' },
      { value: 'PRO', label: 'Management tool' }
    ],
    problemStatement: 'A digital twin is only as good as the data it is built on. Drone capture provides the external high-fidelity 3D geometry needed to ground-truth your digital models, ensuring your twin matches the "as-built" reality of the site with high-accuracy documentation.',
    whatWeCapture: [
      'Full-site 3D geometry',
      'High-resolution texture maps',
      'As-built structural data',
      'Site context and surroundings',
      'Internal/External scan alignment'
    ],
    deliverables: [
      'Digital twin asset (OBJ/FBX)',
      'High-density point cloud',
      'BIM-compatible dataset',
      'Interactive 3D viewer'
    ],
    useCases: [
      { title: 'Asset Management', description: 'Managing complex sites remotely using a high-fidelity 3D replica.' },
      { title: 'Design Verification', description: 'Comparing new designs against the current as-built environment.' }
    ],
    capabilities: [
      { title: 'Multi-Sensor Fusion', description: 'Combining photogrammetry and LiDAR for the ultimate digital twin.' },
      { title: 'Software Compatibility', description: 'Delivering data ready for Matterport, Autodesk, and major twin platforms.' }
    ],
    industries: ['Asset Owners', 'Smart Building Tech', 'FM Providers', 'Developers'],
    faqs: [
      { q: 'What software is the data compatible with?', a: 'We deliver in formats ready for Matterport, Autodesk, and custom twin platforms.' },
      { q: 'Can you update the twin periodically?', a: 'Yes, we offer scheduled rescans to keep your digital twin current.' },
      { q: 'How accurate is the twin?', a: 'With survey control, we can achieve high-accuracy documentation for engineering-grade twins.' }
    ],
    relatedServices: ['tfts-3d', 'drone-photogrammetry', 'lidar-point-cloud-surveys'],
    cta: { label: 'BUILD YOUR DIGITAL TWIN', href: '/contact' }
  },
  {
    slug: 'tfts-3d',
    title: 'TFTS 3D Capture Service',
    headline: ['TFTS 3D', 'CAPTURE'],
    category: 'Specialist & Response',
    intro: 'Drone and ground-level image capture for photorealistic 3D visualisation, immersive site walkthroughs and digital twin-style visual records.',
    metaTitle: 'TFTS 3D Capture Service | Drone 3D Visualisation | TFTS Drone',
    metaDescription: 'TFTS Drone provides TFTS 3D capture services using drone and ground-level imagery for immersive site visualisation, stakeholder engagement, property, construction and heritage applications.',
    heroStat: [
      { value: 'PHOTO', label: 'Realistic 3D' },
      { value: 'WEB', label: 'Ready Viewer' },
      { value: 'STAKE', label: 'Holder engagement' }
    ],
    problemStatement: 'Static photos and fixed-angle videos often fail to communicate the true scale, context and material feel of a complex commercial site. TFTS 3D modelling bridges the gap between 2D media and 3D models, providing an immersive visual experience that allows stakeholders to explore a site from multiple perspectives with lifelike realism.',
    whatWeCapture: [
      'High-overlap aerial imagery',
      'Ground-level viewpoint capture',
      'Volumetric radiance fields',
      'Material and lighting data',
      'Site context and connectivity'
    ],
    deliverables: [
      'Interactive Splat Viewer',
      'Flythrough Video Pack',
      'High-Res Screenshot Set',
      'Source Model Files (.ply)',
      'Digital Twin-Style Visuals'
    ],
    useCases: [
      { title: 'Stakeholder Engagement', description: 'Enable non-technical stakeholders to virtually walk through a site before or during project phases.' },
      { title: 'Property Presentation', description: 'Showcase commercial assets, estates and developments with photorealistic immersion.' },
      { title: 'Site Records', description: 'Preserve high-fidelity visual documentation of site conditions for archives and reporting.' }
    ],
    capabilities: [
      { title: 'Multi-Sensor Capture', description: 'Integrating drone and ground-level data for total site coverage.' },
      { title: 'Web-Ready Visualisation', description: 'Preparing heavy 3D data for smooth, browser-based stakeholder review.' },
      { title: 'Flythrough Production', description: 'Creating guided cinematic tours through the reconstructed 3D scene.' }
    ],
    industries: ['Facilities Management', 'Construction', 'Commercial Property', 'Insurance', 'Heritage', 'Events'],
    faqs: [
      { q: 'Is a TFTS 3D model suitable for professional surveying?', a: 'TFTS 3D models are primarily visualisation assets. For measurement-critical work, we pair capture with photogrammetry or LiDAR workflows.' },
      { q: 'What sites are suitable?', a: 'Almost any commercial site, building or estate can be captured, provided we have suitable access and lighting conditions.' },
      { q: 'Can it be embedded on my site?', a: 'Yes, we can provide a web-ready viewer that can be embedded or shared via a secure link.' }
    ],
    relatedServices: ['digital-twin-capture', 'drone-photogrammetry', '360-aerial-panoramas', 'aerial-photography-film'],
    cta: { label: 'EXPLORE 3D SHOWCASE', href: '/tfts-3d' }
  },
  {
    slug: 'bridge-drone-inspections',
    title: 'Bridge Drone Inspections UK',
    headline: ['BRIDGE', 'INSPECTIONS'],
    category: 'Infrastructure & Energy',
    intro: 'Specialised aerial inspections for road, rail, and pedestrian bridges — capturing high-resolution evidence of deck soffits, piers, and bearings.',
    metaTitle: 'Bridge Drone Inspections UK | Structural Surveys | TFTS Drone',
    metaDescription: 'Professional drone bridge inspections. High-detail surveys for soffits, piers and abutments. CAA-compliant, zero disruption to traffic.',
    heroStat: [
      { value: 'MINIMAL', label: 'Traffic disruption' },
      { value: 'UP', label: 'Facing gimbal' },
      { value: '4K', label: 'Visual audit' }
    ],
    problemStatement: 'Inspecting bridge soffits and piers traditionally requires under-bridge units or expensive scaffolding, often necessitating lane closures and significant public disruption. Drones with upward-facing gimbals and high-resolution zoom sensors can audit these "hidden" areas in hours with zero impact on traffic flow.',
    whatWeCapture: [
      'Deck soffit and expansion joints',
      'Pier and abutment condition',
      'Bearing and seat detail',
      'Masonry and concrete integrity',
      'Waterproofing and drainage outlets'
    ],
    deliverables: [
      'Bridge condition report',
      'Annotated defect images',
      'Elevation visual archive',
      'Thermal moisture assessment'
    ],
    useCases: [
      { title: 'General Inspection (GI)', description: 'Routine biennial visual checks of all bridge elements.' },
      { title: 'Principal Inspection (PI)', description: 'Close-up detailed audits of structural components.' }
    ],
    capabilities: [
      { title: 'Upward Gimbal', description: 'Capturing clear imagery of deck undersides and bearings.' },
      { title: 'Precision Standoff', description: 'Inspecting live-load structures from a safe, non-disruptive distance.' }
    ],
    industries: ['Local Authorities', 'Rail Operators', 'Highways Agencies', 'Structural Engineers'],
    faqs: [
      { q: 'Can you fly under bridges?', a: 'Yes, our drones use advanced positioning and upward gimbals for soffit inspection.' },
      { q: 'Is a road closure needed?', a: 'Typically no, drone inspections can be completed from the side or below without affecting traffic.' }
    ],
    relatedServices: ['infrastructure-inspections', 'rail-corridor-surveys', 'thermal-imaging'],
    cta: { label: 'REQUEST BRIDGE AUDIT', href: '/contact' }
  },
  {
    slug: 'rail-corridor-surveys',
    title: 'Rail Corridor Drone Surveys UK',
    headline: ['RAIL CORRIDOR', 'SURVEYS'],
    category: 'Infrastructure & Energy',
    intro: 'Safe, rapid aerial surveys for rail infrastructure — monitoring track condition, embankment stability, and vegetation encroachment without line-of-route closures.',
    metaTitle: 'Rail Corridor Drone Surveys UK | Network Rail Standard | TFTS Drone',
    metaDescription: 'Professional drone surveys for rail corridors. Track condition, embankment stability and vegetation monitoring. CAA-compliant, zero-closure surveys.',
    heroStat: [
      { value: 'MINIMAL', label: 'Line closures' },
      { value: 'PRO', label: 'Safe systems' },
      { value: 'FAST', label: 'Corridor audit' }
    ],
    problemStatement: 'Working on or near live rail is high-risk and requires complex "Safe Systems of Work" and often expensive line closures. Drones can audit miles of rail corridor from a position of safety, identifying vegetation risks, drainage issues, and embankment failures before they affect operations.',
    whatWeCapture: [
      'Track and sleeper condition',
      'Embankment and cutting stability',
      'Vegetation encroachment zones',
      'Overhead line equipment (OLE)',
      'Lineside asset inventory'
    ],
    deliverables: [
      'Rail corridor condition report',
      'Vegetation management plan',
      'High-res orthomosaic map',
      'Embankment stability audit'
    ],
    useCases: [
      { title: 'Vegetation Audits', description: 'Identifying trees and scrub that pose a risk to line safety.' },
      { title: 'Embankment Monitoring', description: 'Tracking movement or erosion in high-risk cuttings.' }
    ],
    capabilities: [
      { title: 'Corridor Mapping', description: 'Automated flights for consistent auditing of long linear assets.' },
      { title: 'Remote Assessment', description: 'Gathering data from outside the boundary fence where possible.' }
    ],
    industries: ['Rail Network Operators', 'Maintenance Contractors', 'Geotechnical Engineers'],
    faqs: [
      { q: 'Do you need a possession to fly?', a: 'In many cases, no. Drones can operate near the line without requiring a full possession.' },
      { q: 'Can you identify rail defects?', a: 'We focus on lineside, embankment, and vegetation risks rather than internal rail metallurgy.' }
    ],
    relatedServices: ['infrastructure-inspections', 'bridge-drone-inspections', 'lidar-point-cloud-surveys'],
    cta: { label: 'DISCUSS RAIL CAPTURE', href: '/contact' }
  },
  {
    slug: 'pipeline-corridor-surveys',
    title: 'Pipeline Corridor Drone Surveys UK',
    headline: ['PIPELINE', 'SURVEYS'],
    category: 'Infrastructure & Energy',
    intro: 'Aerial monitoring for gas, water, and oil pipelines — detecting leaks, third-party interference, and land movement along critical infrastructure routes.',
    metaTitle: 'Pipeline Corridor Drone Surveys UK | Leak Detection | TFTS Drone',
    metaDescription: 'Professional drone surveys for pipeline corridors. Leak detection, land movement and third-party interference monitoring. CAA-compliant.',
    heroStat: [
      { value: 'PRO', label: 'Leak detection' },
      { value: 'PRO', label: 'Safety audit' },
      { value: 'GEO', label: 'Referenced data' }
    ],
    problemStatement: 'Pipeline corridors are often remote and difficult to patrol manually. Third-party interference (unauthorised digging) and slow land movement are major risks to pipeline integrity. Drones provide a fast, repeatable way to audit corridors, using thermal and visual sensors to spot issues early.',
    whatWeCapture: [
      'Surface vegetation anomalies (Leak indicators)',
      'Thermal moisture signatures',
      'Third-party plant and activity',
      'Erosion and land slip evidence',
      'Marker post and asset condition'
    ],
    deliverables: [
      'Pipeline integrity report',
      'Interference alert summary',
      'High-res corridor map',
      'Thermal anomaly data'
    ],
    useCases: [
      { title: 'Encroachment Monitoring', description: 'Identifying unauthorised construction or digging near pipelines.' },
      { title: 'Leak Detection', description: 'Spotting vegetation die-back or thermal signatures of fluid leaks.' }
    ],
    capabilities: [
      { title: 'Long-Range Flight', description: 'Efficiently auditing miles of corridor in a single deployment.' },
      { title: 'Thermal Radiometry', description: 'Detecting temperature changes associated with pipeline leaks.' }
    ],
    industries: ['Oil & Gas Operators', 'Water Utilities', 'Environmental Agencies'],
    faqs: [
      { q: 'Can drones detect gas leaks?', a: 'Indirectly through vegetation health (NDVI) or directly with specialised gas sensors if required.' },
      { q: 'How often should corridors be flown?', a: 'Depending on risk, monthly or quarterly audits are common.' }
    ],
    relatedServices: ['utilities-energy-inspections', 'thermal-imaging', 'agricultural-surveys'],
    cta: { label: 'AUDIT PIPELINE ROUTES', href: '/contact' }
  },
  {
    slug: 'cut-fill-analysis',
    title: 'Drone Cut & Fill Analysis UK',
    headline: ['CUT & FILL', 'ANALYSIS'],
    category: 'Construction & Surveying',
    intro: 'Precise earthworks earthworks tracking — comparing as-built site levels against design surfaces to calculate net volume changes.',
    metaTitle: 'Drone Cut & Fill Analysis UK | Earthworks Tracking | TFTS Drone',
    metaDescription: 'Professional drone cut and fill analysis. Accurately compare site levels against design models for earthworks tracking. CAA-compliant.',
    heroStat: [
      { value: 'HIGH', label: 'Volumetric accuracy' },
      { value: 'CAD', label: 'Design overlay' },
      { value: 'FAST', label: 'Reporting speed' }
    ],
    problemStatement: 'Earthworks represent a massive commercial variable in construction. If your "cut" doesn\'t match your "fill", costs escalate. Drone analysis allows you to compare the current site state against the original design CAD, providing immediate evidence of material movement and progress.',
    whatWeCapture: [
      'High-density topographic scans',
      'Current surface elevation data',
      'Base-level site survey',
      'Design surface overlays'
    ],
    deliverables: [
      'Net cut/fill volume report',
      'Heatmap of elevation change',
      'Cross-section analysis',
      'Updated site topographic plan'
    ],
    useCases: [
      { title: 'Quantity Surveying', description: 'Verifying earthworks subcontractor claims with objective data.' },
      { title: 'Site Balancing', description: 'Ensuring material is moved efficiently to achieve design levels.' }
    ],
    capabilities: [
      { title: 'Volume Comparison', description: 'Subtracting design surfaces from current site scans.' },
      { title: 'Grid Analysis', description: 'Detailed volume breakdown across specific site zones.' }
    ],
    industries: ['Earthworks Contractors', 'Quantity Surveyors', 'Main Contractors', 'Developers'],
    faqs: [
      { q: 'Can you compare against my CAD files?', a: 'Yes, we overlay our drone data directly onto your design surfaces (DXF/DWG).' },
      { q: 'How accurate is the volume data?', a: 'Typically within professional tolerances on well-controlled sites.' }
    ],
    relatedServices: ['volumetric-surveys', 'surveying-mapping', 'stockpile-volume-surveys'],
    cta: { label: 'START EARTHWORKS AUDIT', href: '/contact' }
  },
  {
    slug: 'stockpile-volume-surveys',
    title: 'Stockpile Volume Drone Surveys UK',
    headline: ['STOCKPILE', 'VOLUME', 'SURVEYS'],
    category: 'Construction & Surveying',
    intro: 'Rapid, safe, and accurate stockpile measurements for quarries, aggregate sites, and construction projects — delivered within 24 hours.',
    metaTitle: 'Stockpile Volume Drone Surveys UK | Accurate Audits | TFTS Drone',
    metaDescription: 'Professional drone stockpile volume surveys. Accurate measurements for aggregates, minerals and earthworks. CAA-compliant, 24h reporting.',
    heroStat: [
      { value: 'SAFE', label: 'No climbing' },
      { value: 'HIGH', label: 'Volume accuracy' },
      { value: '24H', label: 'Data delivery' }
    ],
    problemStatement: 'Inventory audits of bulk materials are traditionally slow and dangerous. Walking on stockpiles with a GPS pole is inaccurate and poses a significant fall risk. Drone-based volumetrics capture millions of points across every pile, delivering accurate commercial stock data in a fraction of the time.',
    whatWeCapture: [
      'Complete stockpile 3D geometry',
      'Material surface detail',
      'Toe-of-pile boundary data',
      'Site context and layout'
    ],
    deliverables: [
      'Individual stockpile volume report',
      'Total site inventory summary',
      '3D mesh model of piles',
      'Orthomosaic site plan'
    ],
    useCases: [
      { title: 'Financial Audits', description: 'Verifying physical stock levels against commercial balance sheets.' },
      { title: 'Production Tracking', description: 'Monitoring output and consumption in quarries and batching plants.' }
    ],
    capabilities: [
      { title: 'Automated Volumetrics', description: 'Extracting precise volumes from high-density point clouds.' },
      { title: 'Terrain Subtraction', description: 'Correctly identifying the "base" of piles for verified accuracy.' }
    ],
    industries: ['Quarry Operators', 'Aggregate Suppliers', 'Construction Teams', 'Waste Management'],
    faqs: [
      { q: 'How long does a survey take?', a: 'A typical 10-acre site can be flown and all stockpiles measured in under an hour.' },
      { q: 'Is it safer than manual survey?', a: 'Significantly. It removes the need for personnel to climb unstable material piles.' }
    ],
    relatedServices: ['volumetric-surveys', 'cut-fill-analysis', 'surveying-mapping'],
    cta: { label: 'AUDIT STOCK LEVELS', href: '/contact' }
  },
  {
    slug: 'construction-progress-photography',
    title: 'Construction Progress Photography UK',
    headline: ['CONSTRUCTION', 'PROGRESS', 'PHOTOGRAPHY'],
    category: 'Construction & Surveying',
    intro: 'High-resolution aerial progress records that keep projects on track — providing consistent, timestamped evidence for stakeholders and project teams.',
    metaTitle: 'Construction Progress Photography UK | Site Monitoring | TFTS Drone',
    metaDescription: 'Professional construction progress photography. Scheduled drone flights for site monitoring and stakeholder updates. CAA-compliant.',
    heroStat: [
      { value: 'TIME', label: 'Stamped evidence' },
      { value: 'CONS', label: 'Viewpoints' },
      { value: 'WEEK', label: 'Updates' }
    ],
    problemStatement: 'Project managers and investors need clear, consistent visibility of site progress. Ground-level photos lack scale, and ad-hoc drone shots lack the consistency needed to show true change. We deliver systematic, repeatable aerial photography that provides a definitive record of the build.',
    whatWeCapture: [
      'Standardised site overview angles',
      'Milestone construction phases',
      'Site logistics and plant locations',
      'As-built vs Stage evidence'
    ],
    deliverables: [
      'Progress image gallery',
      'Stakeholder update pack',
      'Annotated site overviews',
      'Timeline comparison archive'
    ],
    useCases: [
      { title: 'Monthly Reports', description: 'Visual evidence for formal project board and investor reports.' },
      { title: 'Social & Marketing', description: 'High-quality content to show build progress to the public and buyers.' }
    ],
    capabilities: [
      { title: 'Waypointed Flights', description: 'Replicating the exact same camera positions every visit.' },
      { title: 'Rapid Delivery', description: 'Issuing images within hours of the flight for immediate use.' }
    ],
    industries: ['Developers', 'Project Managers', 'Main Contractors', 'Marketing Teams'],
    faqs: [
      { q: 'How often do you fly?', a: 'Weekly or monthly are most common, but we can align to any project milestone.' },
      { q: 'Can we use the photos for marketing?', a: 'Yes, they are high-resolution 45MP images suitable for print and digital.' }
    ],
    relatedServices: ['construction-monitoring', 'drone-time-lapse-monitoring', 'orthomosaic-mapping'],
    cta: { label: 'BOOK PROGRESS SHOOT', href: '/contact' }
  },
  {
    slug: 'drone-time-lapse-monitoring',
    title: 'Drone Time-Lapse Monitoring UK',
    headline: ['DRONE TIME-LAPSE', 'MONITORING'],
    category: 'Construction & Surveying',
    intro: 'Compelling 4D visual stories of your project — combining scheduled aerial capture into cinematic time-lapse sequences that show months of work in seconds.',
    metaTitle: 'Drone Time-Lapse Monitoring UK | Project Evolution | TFTS Drone',
    metaDescription: 'Professional drone time-lapse site monitoring. Cinematic 4D project records from groundworks to completion. CAA-compliant.',
    heroStat: [
      { value: '4D', label: 'Project flow' },
      { value: '6K', label: 'Master files' },
      { value: 'CIN', label: 'ematic quality' }
    ],
    problemStatement: 'Static progress images are useful for data, but they lack the impact needed for high-level marketing and project legacy. Drone time-lapse takes a project from groundworks to handover, providing a powerful visual narrative of the engineering and effort involved.',
    whatWeCapture: [
      'Precise, repeatable flight paths',
      'Seasonal site transitions',
      'Structural assembly sequences',
      'Final project reveals'
    ],
    deliverables: [
      'Cinematic time-lapse film',
      'Progress milestone edits',
      'High-resolution raw sequence',
      'Marketing highlight reel'
    ],
    useCases: [
      { title: 'Project Legacy', description: 'Creating a definitive visual history of a landmark project.' },
      { title: 'Investor Engagement', description: 'Showing the speed and efficiency of the build in a compelling format.' }
    ],
    capabilities: [
      { title: 'Waypointed Precision', description: 'Using GPS to ensure every shot aligns perfectly for the time-lapse.' },
      { title: 'Post-Production', description: 'Professional editing and colour grading to create a cinematic finish.' }
    ],
    industries: ['Developers', 'Main Contractors', 'Industrial Clients', 'Infrastructure Projects'],
    faqs: [
      { q: 'How long does a time-lapse take to create?', a: 'It covers the duration of the build, from weeks to years.' },
      { q: 'Is it different from a fixed camera?', a: 'Yes, it provides a dynamic, moving viewpoint that a static pole camera cannot match.' }
    ],
    relatedServices: ['construction-progress-photography', 'construction-monitoring', 'aerial-photography-film'],
    cta: { label: 'START TIME-LAPSE PROJECT', href: '/contact' }
  },
  {
    slug: 'rail-corridor-surveys',
    title: 'Rail & Highway Corridor Drone Surveys UK',
    headline: ['RAIL & HIGHWAY', 'CORRIDOR SURVEYS'],
    category: 'Infrastructure & Energy',
    intro: 'Precision aerial mapping and inspection for linear transport assets — delivering high-resolution corridor data for vegetation management, drainage audits, and structural monitoring.',
    metaTitle: 'Rail & Highway Corridor Drone Surveys UK | Transport Infrastructure | TFTS Drone',
    metaDescription: 'Specialist drone surveys for rail and highway corridors. High-resolution mapping, vegetation audits and structural inspections. CAA-compliant.',
    heroStat: [
      { value: 'LIN', label: 'ear assets' },
      { value: '100+', label: 'km/day' },
      { value: 'PREC', label: 'ision data' }
    ],
    problemStatement: 'Monitoring long linear assets like rail and highways is traditionally slow, expensive, and dangerous for ground crews. Drones provide a non-disruptive, rapid method to capture high-resolution imagery and LiDAR data across kilometres of corridor, identifying encroachment, drainage issues, and structural defects without track or lane closures.',
    whatWeCapture: [
      'High-resolution corridor orthomosaics',
      'Vegetation encroachment mapping',
      'Drainage and culvert inspections',
      'Embankment stability data',
      'OHT and gantry structural audits'
    ],
    deliverables: [
      'Georeferenced corridor maps',
      'Vegetation health/encroachment reports',
      'Digital Terrain Models (DTM)',
      'Condition inspection galleries'
    ],
    useCases: [
      { title: 'Vegetation Management', description: 'Identifying trees and scrub posing a risk to transport infrastructure.' },
      { title: 'Asset Inventory', description: 'Creating a digital record of all furniture and assets along a corridor.' }
    ],
    capabilities: [
      { title: 'BVLoS Ready', description: 'Equipped to operate beyond visual line of sight where permissions allow.' },
      { title: 'High-Density LiDAR', description: 'Penetrating canopy to map true ground levels in corridor environments.' }
    ],
    industries: ['Network Rail Suppliers', 'Highways & Infrastructure Providers', 'Local Authorities', 'Logistics Providers'],
    faqs: [
      { q: 'Do you need track access?', a: 'No, our operations are typically conducted from land adjacent to the corridor, removing the need for possessions.' },
      { q: 'How much distance can you cover?', a: 'Depending on location and airspace, we can map several kilometres per deployment.' }
    ],
    relatedServices: ['infrastructure-inspections', 'pipeline-corridor-surveys', 'lidar-point-cloud-surveys'],
    cta: { label: 'REQUEST CORRIDOR BRIEF', href: '/contact' }
  },
  {
    slug: 'pipeline-corridor-surveys',
    title: 'Pipeline & Utility Corridor Drone Surveys UK',
    headline: ['PIPELINE & UTILITY', 'CORRIDOR SURVEYS'],
    category: 'Infrastructure & Energy',
    intro: 'Non-disruptive monitoring for oil, gas, and water pipelines — using aerial intelligence to identify encroachment, leaks, and environmental changes along utility routes.',
    metaTitle: 'Pipeline & Utility Corridor Drone Surveys UK | Remote Monitoring | TFTS Drone',
    metaDescription: 'Professional drone surveys for pipeline and utility corridors. Remote monitoring, encroachment detection and environmental audits. CAA-compliant.',
    heroStat: [
      { value: 'REM', label: 'ote access' },
      { value: 'LEAK', label: 'detection' },
      { value: 'ENCR', label: 'oachment' }
    ],
    problemStatement: 'Pipeline integrity is threatened by third-party encroachment, environmental shifts, and material fatigue. Ground-based line walking is slow and inconsistent. Our drone-based corridor surveys provide a rapid, repeatable method to audit hundreds of miles of pipeline, providing high-resolution evidence of site conditions and potential risks.',
    whatWeCapture: [
      'Multi-spectral encroachment data',
      'Thermal leak detection (radiometric)',
      'High-resolution corridor imagery',
      'Environmental impact evidence',
      'River and road crossing audits'
    ],
    deliverables: [
      'Anomaly and encroachment report',
      'Radiometric thermal signatures',
      'High-res corridor orthomosaic',
      '360-degree crossing panoramas'
    ],
    useCases: [
      { title: 'Encroachment Audits', description: 'Identifying illegal building or excavation work over pipeline easements.' },
      { title: 'Environmental Compliance', description: 'Monitoring land use and environmental changes along sensitive utility routes.' }
    ],
    capabilities: [
      { title: 'Thermal Signatures', description: 'Detecting temperature differentials that may indicate fluid or gas leaks.' },
      { title: 'Rapid Deployment', description: 'Mobilising to remote sections of the network for urgent inspection.' }
    ],
    industries: ['Gas Networks', 'Water Utilities', 'Oil & Fuel Providers', 'Environmental Agencies'],
    faqs: [
      { q: 'Can you detect leaks?', a: 'Yes, thermal sensors can identify cool or hot spots associated with escaping pressurized fluids or gases.' },
      { q: 'Do you work in remote locations?', a: 'Yes, our teams are self-sufficient and equipped for off-road access and remote operation.' }
    ],
    relatedServices: ['rail-corridor-surveys', 'utilities-energy-inspections', 'thermal-imaging'],
    cta: { label: 'START UTILITY BRIEF', href: '/contact' }
  },
  {
    slug: 'events-media',
    title: 'Drone Filming for Events & Media UK',
    headline: ['EVENTS', '& MEDIA', 'FILMING'],
    category: 'Specialist & Response',
    intro: 'Cinematic aerial content for high-impact brand campaigns, large-scale events, and production media — delivering 6K resolution and dynamic FPV perspectives.',
    metaTitle: 'Drone Filming for Events & Media UK | Cinematic Aerials | TFTS Drone',
    metaDescription: 'Premium drone filming for events, media and brand campaigns. High-resolution 6K aerials and cinematic FPV. CAA-compliant pilots.',
    heroStat: [
      { value: '6K', label: 'Resolution' },
      { value: 'FPV', label: 'Cinematic' },
      { value: 'LIVE', label: 'Streaming' }
    ],
    problemStatement: 'Static ground-level cameras cannot capture the scale and energy of large events or the ambition of high-end brand content. Our media-grade drone operations provide cinematic motion, unique perspectives, and breathtaking scale that elevates project value and audience engagement.',
    whatWeCapture: [
      '6K ProRes cinematic footage',
      'High-speed FPV chase sequences',
      'Event scale and crowd overviews',
      'Dynamic product/asset reveals',
      '45MP high-resolution photography'
    ],
    deliverables: [
      'Raw cinematic master files',
      'Social media highlight edits',
      'High-res photography gallery',
      'Optional live-stream aerial feed'
    ],
    useCases: [
      { title: 'Brand Campaigns', description: 'Creating hero visual content for commercial advertisements and product launches.' },
      { title: 'Mass Events', description: 'Capturing the scale of festivals, sporting events, and public displays.' }
    ],
    capabilities: [
      { title: 'Stabilized 3-Axis', description: 'Ultra-smooth cinematic motion even in challenging weather.' },
      { title: 'Dual Operator', description: 'Separate pilot and camera operator for complex precision filming.' }
    ],
    industries: ['Creative Agencies', 'Event Organisers', 'Production Houses', 'Tourism Boards'],
    faqs: [
      { q: 'Can you fly near people?', a: 'Yes, with the appropriate operational authorisation and safety mitigation in place.' },
      { q: 'Do you provide edited content?', a: 'Yes, we can provide anything from raw logs to fully color-graded social edits.' }
    ],
    relatedServices: ['fpv-drone-filming', '360-aerial-panoramas', 'aerial-photography-film'],
    cta: { label: 'BOOK MEDIA BRIEF', href: '/contact' }
  },
  {
    slug: 'fpv-drone-filming',
    title: 'Cinematic FPV Drone Filming UK',
    headline: ['CINEMATIC', 'FPV FILMING'],
    category: 'Specialist & Response',
    intro: 'Immersive, high-speed flythroughs that take viewers inside the action — providing a dynamic perspective that traditional drones cannot achieve.',
    metaTitle: 'Cinematic FPV Drone Filming UK | Dynamic Aerials | TFTS Drone',
    metaDescription: 'Professional FPV drone filming. High-speed indoor and outdoor flythroughs for property, events and media. GVC qualified pilots.',
    heroStat: [
      { value: 'IMM', label: 'ersive flow' },
      { value: '100', label: 'mph capable' },
      { value: 'IN', label: 'door safe' }
    ],
    problemStatement: 'Traditional drones are stable but lack the agility to move through tight spaces, follow fast action, or create the "one-shot" immersive flythroughs that capture audience attention. FPV (First Person View) drones are smaller, faster, and more agile, allowing us to fly through buildings, under structures, and close to the action.',
    whatWeCapture: [
      'High-speed indoor flythroughs',
      'Close-proximity industrial action',
      'Continuous "One-Shot" sequences',
      'Dynamic athlete/vehicle tracking',
      'Unique architectural transitions'
    ],
    deliverables: [
      'Stabilized 4K/6K FPV footage',
      'Social media "One-Shot" edits',
      'Immersive brand content',
      'Uncut raw flight data'
    ],
    useCases: [
      { title: 'Property Previews', description: 'Flying through a warehouse or hotel to show the layout in a single take.' },
      { title: 'Action Sports', description: 'Following fast-moving subjects with precision and proximity.' }
    ],
    capabilities: [
      { title: 'Cine-Whoop Safe', description: 'Guarded propellers for safe flight inside occupied buildings.' },
      { title: 'Gyro-Stabilization', description: 'Post-capture stabilization for buttery-smooth immersive motion.' }
    ],
    industries: ['Real Estate', 'Manufacturing', 'Automotive', 'Tourism'],
    faqs: [
      { q: 'Is it safe to fly FPV indoors?', a: 'Yes, we use "Cine-whoop" drones with ducted propellers designed for indoor environments.' },
      { q: 'What is the benefit of FPV?', a: 'It provides a "cockpit" view that feels visceral and immersive, unlike standard drone shots.' }
    ],
    relatedServices: ['events-media', 'aerial-photography-film', 'tfts-3d'],
    cta: { label: 'START FPV BRIEF', href: '/contact' }
  },
  {
    slug: 'digital-twin-capture',
    title: 'Drone Digital Twin Capture UK',
    headline: ['DIGITAL TWIN', 'CAPTURE'],
    category: 'Specialist & Response',
    intro: 'Precise 3D digital replicas of physical assets — providing a foundational data layer for asset management, design review, and virtual walkthroughs.',
    metaTitle: 'Drone Digital Twin Capture UK | Asset Digitalization | TFTS Drone',
    metaDescription: 'Professional drone digital twin capture. Accurate 3D replicas for asset management, construction and FM. High-fidelity visual data.',
    heroStat: [
      { value: '1:1', label: 'Digital replica' },
      { value: '4D', label: 'Timeline data' },
      { value: 'INT', label: 'egration ready' }
    ],
    problemStatement: 'Asset managers often work with outdated 2D plans that do not reflect the current reality of the site. A Digital Twin provides a living 3D record of the asset, allowing stakeholders to measure, inspect, and simulate from their desktop with high-accuracy data outputs.',
    whatWeCapture: [
      'Complete structural geometry',
      'High-resolution surface textures',
      'Geospatial site context',
      'Thermal data overlays (optional)',
      'Time-stamped condition records'
    ],
    deliverables: [
      '3D Mesh & Point Cloud',
      'Web-based 3D viewer access',
      'BIM-compatible data sets',
      'Annotated condition model'
    ],
    useCases: [
      { title: 'Asset Management', description: 'Managing complex portfolios with a centralized digital record.' },
      { title: 'Design Review', description: 'Overlaying proposed designs onto a 1:1 digital replica of the site.' }
    ],
    capabilities: [
      { title: 'BIM Integration', description: 'Outputs compatible with Revit, ArchiCAD, and other BIM platforms.' },
      { title: 'LiDAR-Backed', description: 'Using laser scanning to ensure high-fidelity geometric data of the twin.' }
    ],
    industries: ['Facilities Management', 'Asset Owners', 'Developers', 'Infrastructure'],
    faqs: [
      { q: 'What is a digital twin?', a: 'It is a virtual representation of an object or system that bridges the physical and digital worlds.' },
      { q: 'Can I measure from it?', a: 'Yes, our digital twins are georeferenced and georectified for accurate 3D measurement.' }
    ],
    relatedServices: ['tfts-3d', 'photogrammetry', 'lidar-point-cloud-surveys'],
    cta: { label: 'DIGITIZE YOUR ASSET', href: '/contact' }
  },
  {
    slug: '360-aerial-panoramas',
    title: '360° Aerial Panorama Drone Services UK',
    headline: ['360° AERIAL', 'PANORAMAS'],
    category: 'Specialist & Response',
    intro: 'Interactive, high-resolution panoramic tours from the air — providing total site context and immersive viewing for stakeholders and the public.',
    metaTitle: '360 Aerial Panorama Drone Services UK | Site Context | TFTS Drone',
    metaDescription: 'Professional 360 aerial drone panoramas. Interactive site tours and context capture for development and tourism. High-res imagery.',
    heroStat: [
      { value: '360°', label: 'Full view' },
      { value: '8K+', label: 'Resolution' },
      { value: 'INT', label: 'eractive' }
    ],
    problemStatement: 'Traditional drone photos only show one direction at a time. A 360-degree aerial panorama allows the viewer to look in any direction from a fixed point in space, providing essential context of the site, surroundings, and elevation that standard photography cannot capture.',
    whatWeCapture: [
      'Stitched 8K+ panoramas',
      'Multi-altitude vantage points',
      'Surrounding infrastructure context',
      'Key site boundaries',
      'Branded hotspots/annotations'
    ],
    deliverables: [
      'Interactive web-viewer link',
      'High-res equirectangular files',
      'Social-ready 360 imagery',
      'Embedded site tour nodes'
    ],
    useCases: [
      { title: 'Site Selection', description: 'Showing investors the proximity of a site to local transport and amenities.' },
      { title: 'Public Consultation', description: 'Engaging the public with an immersive view of proposed developments.' }
    ],
    capabilities: [
      { title: 'Hotspot Interaction', description: 'Adding clickable labels and links within the 360 environment.' },
      { title: 'Night Capture', description: 'High-ISO panoramas showing city lights and evening site context.' }
    ],
    industries: ['Real Estate', 'Tourism', 'Public Sector', 'Developers'],
    faqs: [
      { q: 'Can these be embedded on my site?', a: 'Yes, we provide standard iframe code to embed the interactive viewer anywhere.' },
      { q: 'What altitude do you fly at?', a: 'Typically between 30m and 120m to get the best balance of detail and context.' }
    ],
    relatedServices: ['aerial-photography-film', 'events-media', 'visual-sales-pack'],
    cta: { label: 'START 360 BRIEF', href: '/contact' }
  }
];
