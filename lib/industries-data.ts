// lib/industries-data.ts

export interface IndustryData {
  slug: string
  title: string
  headline: string[]
  description: string
  metaTitle: string
  metaDescription: string
  benefits: string[]
  missions: string[]
  relatedServices: string[]
  
  // Command Centre Fields
  hero: {
    title: string
    subheading: string
    badges: string[]
    ctaPrimary: string
  }
  challenge: {
    title: string
    text: string
  }
  outcomes: {
    title: string
    desc: string
    href: string
  }[]
  workflow: {
    title: string
    desc: string
  }[]
  serviceStack: {
    name: string
    benefit: string
    deliverables: string[]
    href: string
  }[]
  deliverables: {
    name: string
    desc: string
    href: string
  }[]
  recommendedBundles: {
    name: string
    fit: string
    outputs: string[]
    href: string
  }[]
  missionProfiles: {
    title: string
    href: string
  }[]
  resources: {
    title: string
    href: string
  }[]
  faqs: {
    q: string
    a: string
  }[]
  caveat?: string
}

export const industriesData: IndustryData[] = [
  {
    slug: 'facilities-management',
    title: 'Facilities Management',
    headline: ['FACILITIES', 'MANAGEMENT'],
    description: 'Non-disruptive envelope inspections and thermal audits that inform planned maintenance and protect property value.',
    metaTitle: 'Drone Services for Facilities Management | Roof & Asset Inspections | TFTS Drone',
    metaDescription: 'Roof inspections, building envelope capture, and thermal imaging for FM teams managing commercial buildings and estates. Professional reporting without scaffolding.',
    benefits: ['Reduced need for scaffolding', 'Budget-certain planned maintenance', 'Total building envelope data', 'Non-disruptive site operation'],
    missions: ['Annual roof inspections', 'Thermal air leakage surveys', 'Facade condition audits', 'Gutter and drainage checks'],
    relatedServices: ['roof-inspections', 'facade-inspections', 'thermal-imaging', 'drone-inspection'],
    
    hero: {
      title: 'Drone Services for Facilities Management',
      subheading: 'Roof inspections, gutter checks, building envelope capture, thermal imaging and asset condition evidence for FM teams managing commercial buildings, estates and property portfolios.',
      badges: ['Roof Evidence', 'Asset Records', 'PPM Support', 'Thermal Add-Ons', 'Contractor Packs'],
      ctaPrimary: 'Start FM Drone Brief'
    },
    challenge: {
      title: 'The Facilities Management Challenge',
      text: 'Facilities management teams often need fast visibility across roofs, gutters, facades, plant areas and access-restricted assets, but traditional access methods can be slow, disruptive and expensive. Drone capture helps create early-stage visual evidence for maintenance planning, contractor scoping, internal reporting and portfolio records.'
    },
    outcomes: [
      { title: 'Inspect roofs without scaffolding', desc: 'Reduce the need for expensive access costs for early-stage condition assessments.', href: '/services/roof-inspections' },
      { title: 'Check gutters and drainage', desc: 'Identify blockages and structural integrity of water management systems.', href: '/services/roof-inspections' },
      { title: 'Capture building envelope evidence', desc: 'High-resolution facade and structural condition documentation.', href: '/services/facade-inspections' },
      { title: 'Support planned maintenance', desc: 'Objective data to inform budget allocation and project priority.', href: '/pricing-guidance' },
      { title: 'Produce contractor briefing packs', desc: 'Provide contractors with clear visual scope before they quote.', href: '/brief' },
      { title: 'Add thermal imaging', desc: 'Identify energy loss, moisture ingress and insulation defects.', href: '/services/thermal-imaging' }
    ],
    workflow: [
      { title: 'Define the requirement', desc: 'Inspection, survey, evidence, monitoring, media or 3D capture.' },
      { title: 'Review site constraints', desc: 'Access, airspace, people, property, safety and operating windows.' },
      { title: 'Select capture workflow', desc: 'Visual inspection, thermal, mapping, media, TFTS 3D or photogrammetry.' },
      { title: 'Process deliverables', desc: 'Image sets, reports, maps, models, videos or evidence packs.' },
      { title: 'Deliver usable outputs', desc: 'Files, reports, portal records, sample deliverables and next-step guidance.' }
    ],
    serviceStack: [
      { name: 'Roof Inspections', benefit: 'High-resolution roof and plant area imagery for PPM planning.', deliverables: ['Roof image set', 'Annotated defect images', 'PDF inspection summary'], href: '/services/roof-inspections' },
      { name: 'Thermal Imaging', benefit: 'Energy loss and insulation audits for building efficiency.', deliverables: ['Thermal image set', 'Anomaly report', 'Temperature data'], href: '/services/thermal-imaging' },
      { name: 'Building Envelope Inspections', benefit: 'Comprehensive facade and structural condition surveys.', deliverables: ['Facade image archive', 'Condition report', '3D model preview'], href: '/services/facade-inspections' }
    ],
    deliverables: [
      { name: 'Roof Inspection Image Set', desc: 'Detailed 4K imagery of all roof sections and assets.', href: '/sample-deliverables' },
      { name: 'Annotated Defect Image Pack', desc: 'Key issues highlighted and categorised by severity.', href: '/sample-deliverables' },
      { name: 'PDF Roof Inspection Summary', desc: 'Professional overview for stakeholder reporting.', href: '/sample-deliverables' },
      { name: 'Thermal Image Set', desc: 'Radiometric data showing heat distribution and anomalies.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Roof Intelligence Pack', fit: 'Ideal for annual roof audits and contractor scoping.', outputs: ['High-res image set', 'Annotated defects', 'PDF summary'], href: '/bundles#roof-intelligence-pack' },
      { name: 'Building Envelope & Asset Condition Pack', fit: 'Total building exterior documentation.', outputs: ['Facade imagery', 'Condition report', 'Asset log'], href: '/bundles#building-envelope-and-asset-condition-pack' }
    ],
    missionProfiles: [
      { title: 'Commercial Roof Condition Survey Workflow', href: '/operations-standard' },
      { title: 'Facilities Management Asset Inspection Workflow', href: '/operations-standard' },
      { title: 'Retail Park Roof and Gutter Survey Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Drone Surveys for Facilities Managers', href: '/blog' },
      { title: 'Can Drone Inspections Replace Scaffolding?', href: '/blog' },
      { title: 'Drone Thermal Imaging Surveys', href: '/blog' }
    ],
    faqs: [
      { q: 'How can drones support facilities management?', a: 'Drones provide fast, safe, and cost-effective visual visibility of roofs, facades, and high-level assets that are otherwise difficult or expensive to inspect.' },
      { q: 'Can drones inspect roofs without scaffolding?', a: 'Yes. In most cases, drone inspection can replace the need for physical access during the initial assessment and scoping phases.' },
      { q: 'Can drone evidence support contractor quotes?', a: 'Absolutely. Providing contractors with high-resolution visual scope reduces "unknowns" and helps ensure more accurate, competitive pricing.' },
      { q: 'Can thermal imaging be added to FM inspections?', a: 'Yes, we can deploy radiometric thermal sensors to identify heat loss, moisture ingress, and electrical anomalies.' }
    ]
  },
  {
    slug: 'construction',
    title: 'Construction',
    headline: ['CONSTRUCTION', '& DEVELOPMENT'],
    description: 'From site appraisal to final handover, drone technology provides the aerial intelligence required to keep projects on track, on budget, and site-safe.',
    metaTitle: 'Drone Services for Construction | Progress Monitoring & Site Surveys | TFTS Drone',
    metaDescription: 'Construction monitoring, progress photography, stockpile volumes, and site surveying. High-accuracy data to keep projects on track and stakeholders informed.',
    benefits: ['Increase site visibility', 'High-accuracy earthworks tracking', 'Stakeholder communication support', 'Claim prevention with objective data'],
    missions: ['Weekly progress surveys', 'Stockpile volume calculations', 'Pre-construction site appraisal', 'Roof and facade inspections'],
    relatedServices: ['construction-monitoring', 'surveying-mapping', 'gaussian-splat'],
    
    hero: {
      title: 'Drone Services for Construction',
      subheading: 'Progress records, site surveying, stockpile volumes, time-lapse monitoring and immersive 3D visualisation for developers, contractors and project teams.',
      badges: ['Progress Records', 'Site Mapping', 'Volumetrics', 'Stakeholder Data', 'As-Built Evidence'],
      ctaPrimary: 'Start Construction Brief'
    },
    challenge: {
      title: 'The Construction Challenge',
      text: 'Managing complex construction projects requires constant visibility of site progress, safety, and inventory. Traditional methods for site monitoring and surveying are often slow, resource-heavy, and fail to provide the high-frequency data needed for modern project management.'
    },
    outcomes: [
      { title: 'Monitor site progress weekly', desc: 'Maintain objective records of project milestones and site activity.', href: '/services/construction-monitoring' },
      { title: 'Measure stockpile volumes', desc: 'Accurate earthworks tracking without manual site walkdowns.', href: '/services/stockpile-volume-surveys' },
      { title: 'Map site boundaries', desc: 'High-accuracy orthomosaic maps for site planning and management.', href: '/services/orthomosaic-mapping' },
      { title: 'Capture as-built evidence', desc: 'Objective visual records for dispute resolution and handover.', href: '/services/construction-monitoring' },
      { title: 'Support stakeholder updates', desc: 'High-quality media and 3D models for project reporting.', href: '/services/tfts-3d' }
    ],
    workflow: [
      { title: 'Define the requirement', desc: 'Progress, mapping, volumetrics or immersive visualisation.' },
      { title: 'Review site constraints', desc: 'Airspace, site safety, separation distances and permissions.' },
      { title: 'Select capture workflow', desc: 'Orthomosaic mapping, repeat viewpoints, thermal or LiDAR.' },
      { title: 'Process deliverables', desc: 'Maps, reports, point clouds, volume data or time-lapse video.' },
      { title: 'Deliver usable outputs', desc: 'Site data delivered via portal for instant stakeholder review.' }
    ],
    serviceStack: [
      { name: 'Construction Monitoring', benefit: 'Regular progress records and repeat-viewpoint photography.', deliverables: ['Progress image archive', 'Annotated site photos', 'Progress report'], href: '/services/construction-monitoring' },
      { name: 'Surveying & Mapping', benefit: 'High-accuracy site maps and topographic data.', deliverables: ['Orthomosaic map', 'Digital surface model', 'Point cloud data'], href: '/services/surveying-mapping' },
      { name: 'Volumetric Surveys', benefit: 'Fast, accurate earthworks and material volume calculations.', deliverables: ['Stockpile volume report', 'Cut and fill analysis', 'PDF summary'], href: '/services/volumetric-surveys' }
    ],
    deliverables: [
      { name: 'Construction Progress Image Archive', desc: 'Chronological record of site development.', href: '/sample-deliverables' },
      { name: 'Construction Progress Report', desc: 'Structured summary for project meetings.', href: '/sample-deliverables' },
      { name: 'Orthomosaic Map', desc: 'High-resolution, measurable top-down site map.', href: '/sample-deliverables' },
      { name: 'Stockpile Volume Report', desc: 'Material quantity calculations with accuracy verification.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Construction Progress Pack', fit: 'For teams needing regular site visibility and records.', outputs: ['Progress imagery', 'Monthly report', 'Repeat views'], href: '/bundles#construction-progress-pack' },
      { name: 'Survey Data Pack', fit: 'High-accuracy mapping and terrain modelling.', outputs: ['Orthomosaic map', 'Point cloud', 'DTM/DSM'], href: '/bundles#survey-data-pack' }
    ],
    missionProfiles: [
      { title: 'Construction Progress Monitoring Workflow', href: '/operations-standard' },
      { title: 'Stockpile Volume Survey Workflow', href: '/operations-standard' },
      { title: 'Orthomosaic Site Mapping Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Construction Drone Monitoring: What Developers Receive', href: '/blog' },
      { title: 'Drone Survey Cost UK', href: '/blog' },
      { title: 'What Is an Orthomosaic Map?', href: '/blog' }
    ],
    faqs: [
      { q: 'How often can a construction site be captured?', a: 'We can capture sites weekly, fortnightly, or monthly depending on the project pace and reporting requirements.' },
      { q: 'Can drone images support progress meetings?', a: 'Yes, our progress archives and reports are designed specifically for project stakeholder communication.' },
      { q: 'Can drones help with stockpile measurement?', a: 'Absolutely. We provide volumetric surveys with accuracy suitable for commercial inventory and earthworks tracking.' }
    ]
  },
  {
    slug: 'insurance-loss-adjusters',
    title: 'Insurance & Loss Adjusters',
    headline: ['INSURANCE', '& CLAIMS'],
    description: 'Objective, timestamped aerial evidence for loss adjustment, damage assessment, and asset verification.',
    metaTitle: 'Drone Evidence for Insurance & Loss Adjusters | TFTS Drone',
    metaDescription: 'Professional drone damage surveys for loss adjusters and insurers. High-resolution imagery, thermal audits, and objective evidence capture for claims.',
    benefits: ['Rapid response site evidence', 'Objective radiometric data', 'Safe access to damaged structures', 'Reduced loss adjustment timescales'],
    missions: ['Post-incident damage survey', 'Roof thermal audits', 'Fraud prevention verification', 'Large loss site recording'],
    relatedServices: ['thermal-imaging', 'drone-inspection', 'roof-inspections'],
    
    hero: {
      title: 'Drone Evidence for Insurance & Loss Adjusters',
      subheading: 'Rapid post-incident capture, high-resolution damage evidence and objective thermal auditing for loss adjusters, insurers and surveyors.',
      badges: ['Claim Evidence', 'Damage Audits', 'Loss Mitigation', 'Thermal Analysis', 'Site Context'],
      ctaPrimary: 'Start Insurance Brief'
    },
    challenge: {
      title: 'The Insurance Challenge',
      text: 'Loss adjusters and insurers often need to verify property damage in high-risk or access-restricted areas. Manual inspection of fire, flood or storm damage is slow and dangerous. Drone capture provides an objective, timestamped visual record that supports the claims workflow without placing operatives at risk.'
    },
    outcomes: [
      { title: 'Capture rapid damage evidence', desc: 'High-resolution imagery of storm, fire or flood damage.', href: '/outcomes/drone-evidence-for-insurance-claims' },
      { title: 'Add thermal damage analysis', desc: 'Identify moisture ingress and latent heat anomalies.', href: '/services/thermal-imaging' },
      { title: 'Support large-loss recording', desc: 'Total site context for complex or high-value claims.', href: '/services/drone-inspection' },
      { title: 'Reduce loss adjustment time', desc: 'Objective data allows for faster claim validation and closure.', href: '/brief' }
    ],
    workflow: [
      { title: 'Incident Notification', desc: 'Define required evidence: roof, facade, internal or structural.' },
      { title: 'Rapid Deployment', desc: 'Urgent site assessment, permissions and capture flight.' },
      { title: 'Evidence Processing', desc: 'High-res image sets, thermal data and annotated defect logs.' },
      { title: 'Report Generation', desc: 'Evidence packs formatted for loss adjuster review.' },
      { title: 'Final Delivery', desc: 'Timestamped records delivered via secure client portal.' }
    ],
    serviceStack: [
      { name: 'Insurance & Loss Adjuster Surveys', benefit: 'Specialist damage evidence capture for adjusters.', deliverables: ['Insurance evidence pack', 'Annotated photos', 'PDF summary'], href: '/services/insurance-loss-adjuster-surveys' },
      { name: 'Thermal Imaging', benefit: 'Non-contact damage and moisture detection.', deliverables: ['Radiometric thermal set', 'Anomaly report', 'Temperature data'], href: '/services/thermal-imaging' },
      { name: 'Roof Inspections', benefit: 'High-level storm damage and cladding assessments.', deliverables: ['Detailed roof imagery', 'Defect schedule', 'Inspection report'], href: '/services/roof-inspections' }
    ],
    deliverables: [
      { name: 'Insurance Evidence Pack', desc: 'Structured folder of timestamped damage imagery.', href: '/sample-deliverables' },
      { name: 'Annotated Defect Image Pack', desc: 'Specific issues highlighted with context metadata.', href: '/sample-deliverables' },
      { name: 'Roof Inspection Image Set', desc: 'Total coverage of roof coverings and structures.', href: '/sample-deliverables' },
      { name: 'Thermal Image Set', desc: 'Radiometric data showing anomalies and ingress.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Insurance & Incident Evidence Pack', fit: 'For rapid response and high-resolution claim records.', outputs: ['Evidence archive', 'Annotated photos', 'PDF summary'], href: '/bundles#insurance-and-incident-evidence-pack' }
    ],
    missionProfiles: [
      { title: 'Insurance Storm Damage Evidence Workflow', href: '/operations-standard' },
      { title: 'Commercial Roof Damage Evidence Workflow', href: '/operations-standard' },
      { title: 'Fire Damage Drone Survey Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Using Drones for Insurance Evidence and Damage Surveys', href: '/blog' },
      { title: 'Can Drone Inspections Replace Scaffolding?', href: '/blog' }
    ],
    faqs: [
      { q: 'Is drone evidence accepted for insurance documentation?', a: 'Yes, drone imagery is an accepted form of objective visual evidence in the insurance industry, subject to specific policy requirements.' },
      { q: 'How quickly can you respond to a claim?', a: 'We typically offer a 24-48 hour response for urgent insurance evidence capture.' },
      { q: 'Can you fly in high-risk areas after fire or flood?', a: 'Yes, drones are ideal for inspecting structures where internal or physical access is prohibited due to safety risks.' }
    ],
    caveat: 'Drone evidence can support insurance documentation, but acceptance depends on the insurer, policy, claim context and required evidence.'
  },
  {
    slug: 'infrastructure',
    title: 'Infrastructure & Transport',
    headline: ['INFRASTRUCTURE', '& TRANSPORT'],
    description: 'Precision mapping and structural assessment for railways, highways, bridges, and maritime assets.',
    metaTitle: 'Drone Services for Infrastructure & Transport | TFTS Drone',
    metaDescription: 'Specialist drone services for infrastructure. Bridge inspection, rail corridor mapping, and port surveys. CAA-compliant, high-accuracy LiDAR and photogrammetry.',
    benefits: ['Minimise asset downtime', 'Reduce operative trackside risk', 'Scalable mapping for long corridors', 'High-accuracy data'],
    missions: ['Bridge and pier inspection', 'Rail corridor LiDAR mapping', 'Highway as-built surveys', 'Port and maritime audits'],
    relatedServices: ['surveying-mapping', 'drone-inspection', 'lidar-point-cloud-surveys'],
    
    hero: {
      title: 'Drone Services for Infrastructure',
      subheading: 'Structural assessment, corridor mapping, bridge inspections and asset records for railways, highways, ports and civil infrastructure.',
      badges: ['Asset Audits', 'Corridor Mapping', 'Risk Reduction', 'LiDAR Ready', 'Structural Evidence'],
      ctaPrimary: 'Start Infrastructure Brief'
    },
    challenge: {
      title: 'The Infrastructure Challenge',
      text: 'Maintaining critical infrastructure requires frequent, high-detail inspection and mapping. Traditional methods often involve significant asset downtime, high costs for physical access, and increased risk to operatives working near live traffic or rail. Drones provide a safe, non-disruptive route to high-accuracy asset data.'
    },
    outcomes: [
      { title: 'Inspect bridges and structures', desc: 'Identify defects in soffits, piers and bearings without scaffolding.', href: '/services/infrastructure-inspections' },
      { title: 'Map rail and road corridors', desc: 'High-accuracy topographic data and vegetation encroachment surveys.', href: '/services/rail-corridor-surveys' },
      { title: 'Monitor port and maritime assets', desc: 'Condition audits for berths, cranes and coastal infrastructure.', href: '/services/infrastructure-inspections' },
      { title: 'Reduce operative risk', desc: 'Move people away from high-risk environments while maintaining data quality.', href: '/operations-standard' }
    ],
    workflow: [
      { title: 'Define requirement', desc: 'Inspection, mapping, LiDAR or monitoring.' },
      { title: 'Airspace & Access Review', desc: 'Coordination with NATS, Network Rail or highways agencies.' },
      { title: 'Sensor Selection', desc: 'High-res visual, thermal or LiDAR payload selection.' },
      { title: 'Precision Capture', desc: 'Safe standoff capture or automated corridor mapping.' },
      { title: 'Deliverable Processing', desc: 'Reports, point clouds, orthomosaics or inspection logs.' }
    ],
    serviceStack: [
      { name: 'Infrastructure Inspections', benefit: 'Detailed visual audits of structural elements.', deliverables: ['Structural report', 'Annotated defects', 'Visual archive'], href: '/services/infrastructure-inspections' },
      { name: 'Rail Corridor Surveys', benefit: 'Topographic and condition data for rail networks.', deliverables: ['Topographic map', 'Vegetation survey', 'Point cloud'], href: '/services/rail-corridor-surveys' },
      { name: 'LiDAR Mapping', benefit: 'High-accuracy terrain and asset geometry.', deliverables: ['Point cloud (.las/.laz)', 'Digital terrain model', 'Contour map'], href: '/services/lidar-point-cloud-surveys' }
    ],
    deliverables: [
      { name: 'Structural Inspection Report', desc: 'Categorised defect log with severity and location.', href: '/sample-deliverables' },
      { name: 'High-Accuracy Point Cloud', desc: 'High-detail 3D geometric site data.', href: '/sample-deliverables' },
      { name: 'Orthomosaic Corridor Map', desc: 'Measurable top-down map of rail or road assets.', href: '/sample-deliverables' },
      { name: 'Vegetation Encroachment Audit', desc: 'Risk-profile map of vegetation near critical assets.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Asset Integrity Pack', fit: 'For regular structural audits and condition monitoring.', outputs: ['Inspection reports', 'Visual archive', 'Defect schedule'], href: '/bundles#asset-integrity-pack' },
      { name: 'Infrastructure Mapping Pack', fit: 'Scalable data for corridor and network management.', outputs: ['Topographic map', 'Point cloud', 'Site context'], href: '/bundles#infrastructure-mapping-pack' }
    ],
    missionProfiles: [
      { title: 'Bridge Soffit and Pier Inspection Workflow', href: '/operations-standard' },
      { title: 'Rail Corridor LiDAR Mapping Workflow', href: '/operations-standard' },
      { title: 'Coastal Defense Condition Audit Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Drone Inspections for Civil Infrastructure', href: '/blog' },
      { title: 'LiDAR vs Photogrammetry for Mapping', href: '/blog' }
    ],
    faqs: [
      { q: 'Can you fly near live rail or highways?', a: 'Yes, we coordinate with the relevant agencies to ensure compliance and safe separation.' },
      { q: 'How accurate is the LiDAR data?', a: 'Accuracy depends on capture methodology, site conditions, control points and equipment.' },
      { q: 'Can you inspect bridge soffits?', a: 'Yes, using upward-facing gimbals and specialized sensors.' }
    ]
  },
  {
    slug: 'utilities-energy',
    title: 'Utilities & Energy',
    headline: ['UTILITIES', '& ENERGY'],
    description: 'Safely inspect high-voltage infrastructure, renewable energy assets, and pipeline corridors without service interruptions.',
    metaTitle: 'Drone Services for Utilities & Energy | Solar, Wind & Power | TFTS Drone',
    metaDescription: 'Specialist drone services for utilities. Solar farm audits, powerline inspection, and wind turbine assessment. CAA-compliant, thermal imaging specialist.',
    benefits: ['Inspect without service outages', 'Reduce risk to life for high-voltage inspections', 'Rapid assessment of remote assets', 'Early detection of thermal anomalies'],
    missions: ['Pylon and insulator checks', 'Solar farm radiometric auditing', 'Vegetation encroachment mapping', 'Pipeline corridor surveillance'],
    relatedServices: ['thermal-imaging', 'drone-inspection', 'solar-panel-inspections'],
    
    hero: {
      title: 'Drone Services for Utilities',
      subheading: 'Thermal solar auditing, pylon inspections, wind turbine assessment and pipeline monitoring for energy and utility providers.',
      badges: ['Thermal Audits', 'Asset Integrity', 'PPM Support', 'Zero Downtime', 'Radiometric Data'],
      ctaPrimary: 'Start Utilities Brief'
    },
    challenge: {
      title: 'The Utilities Challenge',
      text: 'Inspecting high-voltage assets, renewable arrays and remote pipeline networks is dangerous and logistically complex. Traditional methods often require service outages or high-risk manual climbing. Drones enable rapid, non-contact auditing of assets while they remain live, identifying defects before they cause failure.'
    },
    outcomes: [
      { title: 'Audit solar arrays thermally', desc: 'Identify cell-level defects, string failures and debris.', href: '/services/solar-panel-inspections' },
      { title: 'Inspect powerlines and pylons', desc: 'Check insulators, conductors and hardware without outages.', href: '/services/utilities-inspections' },
      { title: 'Monitor pipelines and corridors', desc: 'Detect leaks, ground movement or vegetation encroachment.', href: '/services/utilities-inspections' },
      { title: 'Assess wind turbine blades', desc: 'High-res visual audit of blade integrity and leading edges.', href: '/services/utilities-inspections' }
    ],
    workflow: [
      { title: 'Define requirement', desc: 'Thermal audit, visual inspection or monitoring.' },
      { title: 'Asset & Airspace Review', desc: 'Planning around electromagnetic interference and high-voltage zones.' },
      { title: 'Sensor Selection', desc: 'Radiometric thermal, high-res zoom or LiDAR.' },
      { title: 'Live Asset Capture', desc: 'Non-contact capture while infrastructure remains operational.' },
      { title: 'Data Interpretation', desc: 'Anomaly detection, heat-mapping and defect reporting.' }
    ],
    serviceStack: [
      { name: 'Solar PV Inspections', benefit: 'Radiometric thermal and visual audits for efficiency.', deliverables: ['Thermal anomaly report', 'Visual defect log', 'String failure map'], href: '/services/solar-panel-inspections' },
      { name: 'Utilities Inspections', benefit: 'Safe auditing of live high-voltage assets.', deliverables: ['Pylon condition log', 'Insulator check set', 'Vegetation report'], href: '/services/utilities-inspections' },
      { name: 'Thermal Imaging', benefit: 'Identifying heat loss and electrical anomalies.', deliverables: ['Radiometric image set', 'Temperature data', 'Anomaly summary'], href: '/services/thermal-imaging' }
    ],
    deliverables: [
      { name: 'Solar Radiometric Thermal Report', desc: 'Detailed heatmap of panel defects and string issues.', href: '/sample-deliverables' },
      { name: 'Powerline Condition Log', desc: 'Systematic visual record of insulators and hardware.', href: '/sample-deliverables' },
      { name: 'Pipeline Corridor Survey', desc: 'Visual and contextual map of remote asset routes.', href: '/sample-deliverables' },
      { name: 'Asset Anomaly Map', desc: 'Geo-located findings for maintenance planning.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Energy Integrity Pack', fit: 'For solar farms and renewable asset owners.', outputs: ['Thermal audit', 'Visual log', 'PPM guidance'], href: '/bundles#energy-integrity-pack' },
      { name: 'Utility Asset Audit Pack', fit: 'Strategic monitoring for pylon and pipeline networks.', outputs: ['Asset records', 'Anomaly report', 'Corridor data'], href: '/bundles#utility-asset-audit-pack' }
    ],
    missionProfiles: [
      { title: 'Commercial Solar Array Thermal Audit Workflow', href: '/operations-standard' },
      { title: 'High-Voltage Pylon Visual Inspection Workflow', href: '/operations-standard' },
      { title: 'Utility Pipeline Corridor Monitoring Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Drone Thermal Imaging for Solar Farms', href: '/blog' },
      { title: 'Inspecting Live High-Voltage Assets with Drones', href: '/blog' }
    ],
    faqs: [
      { q: 'Can drones inspect live solar farms?', a: 'Yes, we use radiometric thermal sensors to identify issues while the panels are under load.' },
      { q: 'Is there electromagnetic interference (EMI)?', a: 'We use specialized drones with hardened systems designed to work near high-voltage assets.' },
      { q: 'Can you detect pipeline leaks?', a: 'Drones can identify ground signatures, thermal anomalies or visual cues associated with pipeline issues.' }
    ]
  },
  {
    slug: 'commercial-property',
    title: 'Commercial Property',
    headline: ['COMMERCIAL', 'PROPERTY'],
    description: 'Cinematic reveals and high-accuracy context shots for industrial, commercial, and luxury residential property marketing.',
    metaTitle: 'Drone Services for Commercial Property | Marketing & Condition | TFTS Drone',
    metaDescription: 'Specialist drone services for commercial property. Cinematic sales footage, development reveals, context mapping and condition audits. Professional visual assets.',
    benefits: ['Unlock exclusive property perspectives', 'Show site context and connectivity', 'High-quality 4K/6K marketing assets', 'Fast turnaround for sales cycles'],
    missions: ['High-end property filming', 'Site reveal sequences', 'Viewpoint simulation', 'Boundary mapping'],
    relatedServices: ['aerial-photography-film', 'events-media', 'digital-twin-capture'],
    
    hero: {
      title: 'Drone Services for Commercial Property',
      subheading: 'Cinematic marketing media, development reveals, context mapping and immersive visual records for property owners, agents and developers.',
      badges: ['Sales Media', 'Site Context', 'Development Reveals', 'Condition Records', 'Investor Packs'],
      ctaPrimary: 'Start Property Brief'
    },
    challenge: {
      title: 'The Property Challenge',
      text: 'Marketing and managing commercial property requires high-impact visual content that communicates scale, location, and connectivity. Standard photography often fails to capture the "prestige" of a significant development or the strategic context of a site. Drones provide cinematic, high-resolution media that drives engagement and supports disposal or acquisition cycles.'
    },
    outcomes: [
      { title: 'Capture cinematic sales media', desc: '4K/6K aerial video and professional stills for property marketing.', href: '/services/aerial-photography-film' },
      { title: 'Show site context and connectivity', desc: 'Illustrate proximity to transport links, local landmarks and key infrastructure.', href: '/services/aerial-photography-film' },
      { title: 'Execute development reveals', desc: 'Record project milestones and "before/after" development sequences.', href: '/services/construction-monitoring' },
      { title: 'Simulate viewpoints', desc: 'Capture precise views from future floor levels for planning and pre-letting.', href: '/services/aerial-photography-film' }
    ],
    workflow: [
      { title: 'Define Objective', desc: 'Marketing, planning, condition or record-keeping.' },
      { title: 'Shot Design', desc: 'Planning key angles, movements, and lighting for maximum impact.' },
      { title: 'Site Permission Review', desc: 'Coordination with nearby property owners and local authorities.' },
      { title: 'Cinematic Capture', desc: 'Precision drone flight focusing on composition and lighting.' },
      { title: 'Media Delivery', desc: 'High-res image sets and edited video sequences delivered via portal.' }
    ],
    serviceStack: [
      { name: 'Aerial Photography & Film', benefit: 'Prestige visual content for marketing and brand use.', deliverables: ['4K/6K video clips', 'Edited highlights', 'Pro image set'], href: '/services/aerial-photography-film' },
      { name: 'Digital Twin Capture', benefit: 'Immersive visual records of estates and buildings.', deliverables: ['Interactive model', 'Site walkthrough', 'Condition archive'], href: '/services/digital-twin-capture' },
      { name: '360 Aerial Panoramas', benefit: 'Interactive context views from fixed aerial points.', deliverables: ['360 viewer', 'Embedded map', 'High-res stills'], href: '/services/360-aerial-panoramas' }
    ],
    deliverables: [
      { name: 'Edited Property Highlight Video', desc: 'Professional 60-90 second cinematic site tour.', href: '/sample-deliverables' },
      { name: 'Professional Aerial Image Archive', desc: 'Curated set of high-resolution site and asset shots.', href: '/sample-deliverables' },
      { name: 'Site Context Map', desc: 'Annotated aerial map showing connectivity and boundaries.', href: '/sample-deliverables' },
      { name: 'Viewpoint Simulation Pack', desc: 'Precise imagery from future floor levels.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Property Prestige Pack', fit: 'For high-value disposals and development reveals.', outputs: ['Cinematic film', 'Pro image set', '360 context'], href: '/bundles#property-prestige-pack' },
      { name: 'Estate Record Pack', fit: 'Systematic visual documentation of property portfolios.', outputs: ['Condition archive', 'Site maps', 'Asset logs'], href: '/bundles#estate-record-pack' }
    ],
    missionProfiles: [
      { title: 'Commercial Development Reveal Workflow', href: '/operations-standard' },
      { title: 'Luxury Residential Site Context Workflow', href: '/operations-standard' },
      { title: 'Industrial Estate Portfolio Audit Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Using Drones for Commercial Property Marketing', href: '/blog' },
      { title: 'Drone Photography for Property: What to Look For', href: '/blog' }
    ],
    faqs: [
      { q: 'Can you fly in city centres?', a: 'Yes, we hold the necessary operational authorisations for flight in congested urban areas.' },
      { q: 'How long does a property shoot take?', a: 'Most commercial sites can be captured in 2-4 hours on site, depending on the shot list.' },
      { q: 'Can you edit the final video?', a: 'Yes, we offer full post-production services including editing, colour grading and branding.' }
    ]
  },
  {
    slug: 'surveyors',
    title: 'Surveyors',
    headline: ['SURVEYORS', '& ENGINEERS'],
    description: 'High-accuracy aerial data to support topographic, engineering and condition survey workflows.',
    metaTitle: 'Drone Data for Surveyors & Engineers | RTK/LiDAR | TFTS Drone',
    metaDescription: 'Professional drone data for surveyors. Orthomosaic mapping, topographic surveys, LiDAR point clouds and as-built verification. High-accuracy data outputs.',
    benefits: ['Efficient site documentation', 'High-accuracy earthworks tracking', 'Scalable mapping for complex sites', 'Objective as-built documentation'],
    missions: ['Topographic site mapping', 'Stockpile volumetrics', 'Elevation and facade surveys', 'Point cloud generation'],
    relatedServices: ['surveying-mapping', 'lidar-point-cloud-surveys', 'drone-photogrammetry'],
    
    hero: {
      title: 'Drone Data for Surveyors',
      subheading: 'High-accuracy mapping, LiDAR point clouds, orthomosaics and topographic data for surveyors, engineers and contractors.',
      badges: ['RTK Accuracy', 'LiDAR Data', 'Topographic Maps', 'Point Clouds', 'Digital Models'],
      ctaPrimary: 'Start Surveyor Brief'
    },
    challenge: {
      title: 'The Surveyor Challenge',
      text: 'Traditional land surveying is time-intensive and can be dangerous on active construction sites or steep terrain. Capturing large-scale topographic data with GPS poles alone is slow. Drone mapping can support orthomosaics, point clouds, site records, volumetric outputs and planning data. Accuracy depends on capture methodology, control, site conditions and processing workflow.'
    },
    outcomes: [
      { title: 'Capture topographic site data', desc: 'Generate high-accuracy terrain and surface models.', href: '/services/surveying-mapping' },
      { title: 'Produce orthomosaic maps', desc: 'High-accuracy, measurable top-down site imagery.', href: '/services/surveying-mapping' },
      { title: 'Generate geometric point clouds', desc: 'Detailed 3D data for CAD and BIM integration.', href: '/services/drone-photogrammetry' },
      { title: 'Conduct volumetric analysis', desc: 'Accurate earthworks, stockpile and material volume tracking.', href: '/services/volumetric-surveys' }
    ],
    workflow: [
      { title: 'Define Requirement', desc: 'Accuracy level, output format and control requirements.' },
      { title: 'Control Planning', desc: 'Setting Ground Control Points (GCPs) or planning RTK/PPK workflow.' },
      { title: 'Precision Capture', desc: 'Automated nadir or oblique mapping patterns.' },
      { title: 'Data Processing', desc: 'Photogrammetric or LiDAR processing into coordinate systems.' },
      { title: 'Output Verification', desc: 'Checking data against control and reporting accuracy.' }
    ],
    serviceStack: [
      { name: 'Surveying & Mapping', benefit: 'High-accuracy site data for planning and engineering.', deliverables: ['Orthomosaic map', 'Topographic data', 'DSM/DTM'], href: '/services/surveying-mapping' },
      { name: 'LiDAR Point Cloud Surveys', benefit: 'Penetrating vegetation and capturing complex geometry.', deliverables: ['Point cloud (.las)', 'Contour map', 'Terrain model'], href: '/services/lidar-point-cloud-surveys' },
      { name: 'Volumetric Surveys', benefit: 'Fast, accurate material tracking for contractors.', deliverables: ['Volume report', 'Cut/fill analysis', 'PDF summary'], href: '/services/volumetric-surveys' }
    ],
    deliverables: [
      { name: 'High-Resolution Orthomosaic Map', desc: 'Geo-located, measurable top-down site composite.', href: '/sample-deliverables' },
      { name: 'Topographic Surface Model', desc: 'Digital representation of site terrain and features.', href: '/sample-deliverables' },
      { name: 'Classified Point Cloud', desc: '3D geometric data categorised by surface type.', href: '/sample-deliverables' },
      { name: 'Earthworks Volume Report', desc: 'Precise material quantity and accuracy verification.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Survey Data Pack', fit: 'For high-accuracy mapping and terrain modelling.', outputs: ['Orthomosaic', 'Point cloud', 'Topographic data'], href: '/bundles#survey-data-pack' },
      { name: 'Volumetric Tracking Pack', fit: 'For regular earthworks and stockpile monitoring.', outputs: ['Volume reports', 'Cut/fill analysis', 'Site maps'], href: '/bundles#volumetric-tracking-pack' }
    ],
    missionProfiles: [
      { title: 'Topographic Site Mapping Workflow', href: '/operations-standard' },
      { title: 'Stockpile Volumetric Survey Workflow', href: '/operations-standard' },
      { title: 'As-Built Verification Mapping Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Drones for Land Surveying: A Professional Guide', href: '/blog' },
      { title: 'LiDAR vs Photogrammetry for Surveyors', href: '/blog' }
    ],
    faqs: [
      { q: 'How accurate is drone survey data?', a: 'Accuracy depends on capture methodology, site conditions, control points and equipment.' },
      { q: 'What coordinate systems do you use?', a: 'We can deliver data in OSGB36 or any specified local coordinate system.' },
      { q: 'Can drone data be used in CAD/BIM?', a: 'Yes, our outputs are compatible with AutoCAD, Revit, Civil 3D and other industry-standard software.' }
    ]
  },
  {
    slug: 'heritage-conservation',
    title: 'Heritage & Conservation',
    headline: ['HERITAGE', '& CONSERVATION'],
    description: 'Sensitive documentation and digital preservation for listed buildings, monuments and historic assets.',
    metaTitle: 'Drone Surveys for Heritage & Conservation | Digital Preservation | TFTS Drone',
    metaDescription: 'Specialist drone services for heritage sites. High-resolution building documentation, listed structure audits and digital twin preservation. CAA-compliant, sensitive approach.',
    benefits: ['Zero-contact asset documentation', 'Safe access to fragile structures', 'High-fidelity digital preservation', 'Non-disruptive site operation'],
    missions: ['Listed building inspections', 'Monument condition audits', 'Digital twin reconstruction', 'Heritage site mapping'],
    relatedServices: ['drone-inspection', 'tfts-3d', 'digital-twin-capture'],
    
    hero: {
      title: 'Drone Services for Heritage',
      subheading: 'High-resolution documentation, digital preservation and condition auditing for listed buildings, monuments and historic estates.',
      badges: ['Digital Records', 'Condition Audits', 'Preservation', 'Zero-Contact', 'Splat Ready'],
      ctaPrimary: 'Start Heritage Brief'
    },
    challenge: {
      title: 'The Heritage Challenge',
      text: 'Managing historic buildings and monuments requires a highly sensitive approach to documentation. Traditional scaffolding or manual inspection can place fragile structures at risk and is often prohibitively expensive for routine checks. Drones provide a zero-contact route to high-fidelity visual evidence that supports conservation planning and asset preservation.'
    },
    outcomes: [
      { title: 'Capture high-detail condition records', desc: 'Objective visual documentation of masonry, timber and roofing.', href: '/services/heritage-conservation-archaeology' },
      { title: 'Preserve assets digitally', desc: 'Create immersive 3D models and TFTS 3Ds of historic sites.', href: '/services/tfts-3d' },
      { title: 'Inspect fragile structures safely', desc: 'Audit high-level areas without the need for physical contact or scaffolding.', href: '/services/drone-inspection' },
      { title: 'Support conservation planning', desc: 'Provide architects and conservators with clear evidence for grant applications and repair works.', href: '/brief' }
    ],
    workflow: [
      { title: 'Define Objective', desc: 'Audit, record-keeping or immersive visualisation.' },
      { title: 'Heritage Sensitivity Review', desc: 'Coordination with site managers and heritage authorities.' },
      { title: 'Sensor Selection', desc: 'High-res visual, multispectral or TFTS 3D capture.' },
      { title: 'Non-Contact Capture', desc: 'Safe standoff flight focusing on structural detail and texture.' },
      { title: 'Deliverable Processing', desc: 'Reports, 3D models or immersive archives.' }
    ],
    serviceStack: [
      { name: 'Heritage Inspections', benefit: 'Detailed condition auditing for listed structures.', deliverables: ['Heritage audit report', 'Condition archive', 'Defect log'], href: '/services/heritage-conservation-archaeology' },
      { name: 'TFTS 3D Capture', benefit: 'Photorealistic immersive records of historic sites.', deliverables: ['Interactive viewer', 'Flythrough video', 'PLY model'], href: '/services/tfts-3d' },
      { name: 'Digital Twin Capture', benefit: 'Total digital preservation for complex assets.', deliverables: ['3D mesh model', 'Orthomosaic facades', 'Point cloud'], href: '/services/digital-twin-capture' }
    ],
    deliverables: [
      { name: 'Heritage Condition Audit Report', desc: 'Structured summary of structural and material findings.', href: '/sample-deliverables' },
      { name: 'Photorealistic 3D Site Model', desc: 'Immersive visual reconstruction of the asset.', href: '/sample-deliverables' },
      { name: 'High-Resolution Facade Map', desc: 'Detailed, measurable elevations of listed structures.', href: '/sample-deliverables' },
      { name: 'Visual Integrity Archive', desc: 'Total photographic record of the asset at a point in time.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Digital Preservation Pack', fit: 'For total site documentation and immersive records.', outputs: ['3D model', 'Site maps', 'Full image archive'], href: '/bundles#digital-preservation-pack' },
      { name: 'Heritage Audit Pack', fit: 'Focused structural condition evidence for conservation.', outputs: ['Audit report', 'Defect logs', 'Condition media'], href: '/bundles#heritage-audit-pack' }
    ],
    missionProfiles: [
      { title: 'Listed Church Spire Condition Audit Workflow', href: '/operations-standard' },
      { title: 'Historic Estate Digital Preservation Workflow', href: '/operations-standard' },
      { title: 'Archaeological Site Topographic Mapping Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Drones for Heritage: Preserving the Past with Digital Twins', href: '/blog' },
      { title: 'Non-Contact Condition Auditing for Listed Buildings', href: '/blog' }
    ],
    faqs: [
      { q: 'Is drone capture safe for fragile structures?', a: 'Yes, our zero-contact approach ensures no physical risk to the asset.' },
      { q: 'Can you fly at sensitive heritage sites?', a: 'Yes, we coordinate with heritage bodies and site managers to ensure minimal disruption.' },
      { q: 'What is the level of detail?', a: 'We can achieve high-detail visual documentation for structural and material analysis.' }
    ]
  },
  {
    slug: 'agriculture-rural-estates',
    title: 'Agriculture & Rural Estates',
    headline: ['AGRICULTURE', '& RURAL ESTATES'],
    description: 'Drone mapping, land surveys, estate visual records, and agricultural aerial imagery for farms, estates and landowners.',
    metaTitle: 'Drone Services for Agriculture & Rural Estates | TFTS Drone',
    metaDescription: 'Drone mapping, land surveys, estate visual records, agricultural aerial imagery, drainage context, rural asset inspections and development site capture for farms, estates and landowners.',
    benefits: ['Estate boundary and land mapping', 'Rural asset and building inspections', 'Drainage and water management context', 'Agricultural land-use evidence'],
    missions: ['Estate boundary surveys', 'Drainage audits', 'Crop health context', 'Asset condition checks'],
    relatedServices: ['surveying-mapping', 'orthomosaic-mapping', 'roof-inspections'],
    
    hero: {
      title: 'Drone Services for Agriculture and Rural Estates',
      subheading: 'Drone mapping, land surveys, estate visual records, agricultural aerial imagery, drainage context, rural asset inspections and development site capture for farms, estates and landowners.',
      badges: ['Land Mapping', 'Estate Records', 'Crop Health Context', 'Asset Inspections', 'TFTS Flight Desk Workflow'],
      ctaPrimary: 'Start Agricultural Brief'
    },
    challenge: {
      title: 'The Agriculture Challenge',
      text: 'Managing large rural estates and agricultural land requires regular visibility of boundaries, drainage, asset condition and land use. Traditional ground-based surveys over hundreds of acres are time-consuming and labor-intensive. Drone capture provides high-resolution mapping, land-use evidence and asset inspection data that help estate managers and landowners make better decisions about drainage, boundary management, maintenance and potential development.'
    },
    outcomes: [
      { title: 'Estate boundary mapping', desc: 'Accurate top-down maps for boundary management and land records.', href: '/services/orthomosaic-mapping' },
      { title: 'Rural asset inspections', desc: 'High-resolution building and structure condition checks.', href: '/services/roof-inspections' },
      { title: 'Drainage context audits', desc: 'Identify water management issues and drainage patterns from the air.', href: '/services/surveying-mapping' },
      { title: 'Land-use evidence', desc: 'Chronological visual records of agricultural activity.', href: '/operations-standard' }
    ],
    workflow: [
      { title: 'Define requirement', desc: 'Mapping, inspection, monitoring or media.' },
      { title: 'Review site access', desc: 'Coordination with estate managers and review of rural airspace.' },
      { title: 'Select capture pattern', desc: 'Nadir mapping, oblique inspection or cinematic media flight.' },
      { title: 'Process land data', desc: 'Orthomosaics, image sets, reports or video summaries.' },
      { title: 'Final delivery', desc: 'Deliverables issued via secure portal with technical guidance.' }
    ],
    serviceStack: [
      { name: 'Agricultural Surveys', benefit: 'Drone mapping and land surveys for estates and agriculture.', deliverables: ['Estate map', 'Asset log', 'Boundary record'], href: '/services/agricultural-surveys-crops' },
      { name: 'Surveying & Mapping', benefit: 'High-accuracy site mapping and 3D data.', deliverables: ['Orthomosaic map', 'Topographic data', 'Point cloud'], href: '/services/surveying-mapping' },
      { name: 'Aerial Photography & Film', benefit: 'Premium marketing visuals for estates and venues.', deliverables: ['Edited film', 'Pro image set', '360 panorama'], href: '/services/aerial-photography-film' }
    ],
    deliverables: [
      { name: 'Estate Orthomosaic Map', desc: 'High-resolution top-down site map for planning and records.', href: '/sample-deliverables' },
      { name: 'Land-Use Image Archive', desc: 'Chronological record of land activity and condition.', href: '/sample-deliverables' },
      { name: 'Rural Asset Inspection Set', desc: 'Detailed visual evidence for building and asset maintenance.', href: '/sample-deliverables' },
      { name: '360 Estate Panorama', desc: 'Interactive aerial context view from a fixed site point.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Survey Data Pack', fit: 'For teams needing high-accuracy mapping and terrain modelling.', outputs: ['Orthomosaic', 'Point cloud', 'DTM/DSM'], href: '/bundles#survey-data-pack' },
      { name: 'Visual Sales Pack', fit: 'For estate marketing and prestige development reveals.', outputs: ['Edited film', 'Pro image set', 'Social clips'], href: '/bundles#visual-sales-pack' }
    ],
    missionProfiles: [
      { title: 'Large Estate Boundary Mapping Workflow', href: '/operations-standard' },
      { title: 'Rural Building Condition Audit Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Drone Surveys for Rural Estate Managers', href: '/blog' },
      { title: 'Mapping Estate Boundaries with Drones', href: '/blog' }
    ],
    faqs: [
      { q: 'How can drones help rural estate managers?', a: 'Drones provide fast, site-wide visibility of boundaries, drainage, and asset condition over large acreages.' },
      { q: 'Can drones map estate boundaries?', a: 'Yes. High-resolution orthomosaic mapping is an excellent tool for documenting estate boundaries and land use.' },
      { q: 'Can drones inspect estate buildings and roofs?', a: 'Drones provide a safe, efficient way to inspect high-level details on estate buildings without scaffolding.' }
    ]
  },
  {
    slug: 'events-venues-media',
    title: 'Events, Venues & Media',
    headline: ['EVENTS', '& VENUES'],
    description: 'Aerial photography, drone video, FPV flythroughs, and venue showcases for events, tourism and commercial media teams.',
    metaTitle: 'Drone Services for Events, Venues & Media | TFTS Drone',
    metaDescription: 'Aerial photography, drone video, FPV flythroughs, venue showcases, 360 panoramas and campaign-ready content for events, venues, tourism and commercial media teams.',
    benefits: ['Venue and estate showcases', 'Cinematic 4K event filming', 'Dynamic FPV drone flythroughs', '360 aerial site panoramas'],
    missions: ['Venue marketing reels', 'Event coverage', 'Indoor FPV tours', 'Brand campaigns'],
    relatedServices: ['events-media', 'aerial-photography-film', 'fpv-drone-filming'],
    
    hero: {
      title: 'Drone Services for Events, Venues and Media',
      subheading: 'Aerial photography, drone video, FPV flythroughs, venue showcases, 360 panoramas and campaign-ready content for events, venues, tourism and commercial media teams.',
      badges: ['Aerial Media', 'FPV Flythroughs', 'Venue Showcases', 'Campaign Content', 'TFTS Flight Desk Workflow'],
      ctaPrimary: 'Start Media Brief'
    },
    challenge: {
      title: 'The Media Challenge',
      text: 'Marketing and managing venues or events requires high-impact visual content that communicates scale, energy and location. Traditional photography often fails to capture the prestige of a site or the dynamism of an event. Drone services provide cinematic, high-resolution media that drives engagement and supports brand storytelling.'
    },
    outcomes: [
      { title: 'Cinematic venue showcases', desc: '4K aerial video and professional stills for venue marketing.', href: '/services/aerial-photography-film' },
      { title: 'Dynamic FPV flythroughs', desc: 'Immersive indoor and outdoor tours for venues and brands.', href: '/services/fpv-drone-filming' },
      { title: 'Event coverage and media', desc: 'High-energy aerial perspectives of events and venue activity.', href: '/services/events-media' },
      { title: 'Interactive 360 panoramas', desc: 'Immersive site context views for web and digital use.', href: '/services/360-aerial-panoramas' }
    ],
    workflow: [
      { title: 'Creative objective', desc: 'Define if you need cinematic film, dynamic FPV or 360 media.' },
      { title: 'Site & shot planning', desc: 'Coordinate on shot requirements, venue access and safety.' },
      { title: 'Cinematic capture', desc: 'Precision flight focusing on composition, lighting and movement.' },
      { title: 'Media processing', desc: 'High-res image editing and video post-production.' },
      { title: 'Final delivery', desc: 'Campaign-ready assets delivered via secure client portal.' }
    ],
    serviceStack: [
      { name: 'Events & Media', benefit: 'Aerial filming and photography for venues and campaigns.', deliverables: ['Edited highlights', 'Pro image set', 'Social clips'], href: '/services/events-media' },
      { name: 'FPV Drone Filming', benefit: 'Dynamic indoor and outdoor flythrough content.', deliverables: ['FPV flythrough video', 'Raw footage', 'Edited reel'], href: '/services/fpv-drone-filming' },
      { name: '360 Aerial Panoramas', benefit: 'Interactive context views for venues and tourism.', deliverables: ['360 viewer', 'Embedded map', 'High-res stills'], href: '/services/360-aerial-panoramas' }
    ],
    deliverables: [
      { name: 'High-Resolution Image Pack', desc: 'Curated set of professional aerial site and asset shots.', href: '/sample-deliverables' },
      { name: 'Edited Drone Video', desc: 'Professional cinematic site tour or event highlight reel.', href: '/sample-deliverables' },
      { name: 'FPV Flythrough Video', desc: 'Immersive, high-energy tour of venue or site spaces.', href: '/sample-deliverables' },
      { name: '360 Aerial Panorama', desc: 'Interactive context view from a fixed site point.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Visual Sales Pack', fit: 'For premium venue marketing and brand campaigns.', outputs: ['Edited film', 'Pro image set', 'Social clips'], href: '/bundles#visual-sales-pack' },
      { name: 'Immersive Digital Capture Pack', fit: 'For high-value asset visualisation and engagement.', outputs: ['TFTS 3D', '3D model', 'Web viewer'], href: '/bundles#immersive-digital-capture-pack' }
    ],
    missionProfiles: [
      { title: 'Prestige Venue Marketing Workflow', href: '/operations-standard' },
      { title: 'Dynamic Indoor FPV Flythrough Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Drone Photography for Venue Marketing', href: '/blog' },
      { title: 'The Impact of FPV Flythroughs', href: '/blog' }
    ],
    faqs: [
      { q: 'How can drones enhance venue marketing?', a: 'Drones provide unique cinematic perspectives that showcase the scale and context of venues and property.' },
      { q: 'What is an FPV drone flythrough?', a: 'FPV drones can fly dynamically through indoor and outdoor spaces, creating immersive, high-energy video content.' },
      { q: 'Can drones film at events?', a: 'Yes, subject to site-specific risk assessment and CAA safety requirements.' }
    ]
  },
  {
    slug: 'solar-renewable-energy',
    title: 'Solar & Renewable Energy',
    headline: ['SOLAR', '& RENEWABLES'],
    description: 'Visual and thermal drone inspections for rooftop solar arrays, commercial PV systems and solar farms.',
    metaTitle: 'Drone Services for Solar PV & Renewable Energy | TFTS Drone',
    metaDescription: 'Visual and thermal drone inspections for rooftop solar arrays, commercial PV systems and solar farms. Helping renewable energy teams identify anomalies and monitor asset health.',
    benefits: ['Inspect without service outages', 'Rapid assessment of solar farms', 'Identify thermal anomalies early', 'Warranty and claim documentation'],
    missions: ['Solar farm thermal audits', 'Rooftop PV inspections', 'Asset health monitoring', 'Claim evidence'],
    relatedServices: ['solar-panel-inspections', 'thermal-imaging', 'utilities-inspections'],
    
    hero: {
      title: 'Drone Services for Solar and Renewable Energy',
      subheading: 'Visual and thermal drone inspections for rooftop solar arrays, commercial PV systems and solar farms. Helping renewable energy teams identify anomalies and monitor asset health.',
      badges: ['Solar Audits', 'Thermal Anomaly Detection', 'Renewable Support', 'Asset Health Monitoring', 'TFTS Flight Desk Workflow'],
      ctaPrimary: 'Start Solar Brief'
    },
    challenge: {
      title: 'The Solar Challenge',
      text: 'Inspecting thousands of solar panels for visual damage or thermal hotspots is time-consuming and labor-intensive when done manually. Issues like string failures, diode issues, and cracked cells can significantly impact yield and ROI. Drone-supported visual and thermal audits provide a fast, efficient way to survey solar farms and commercial arrays.'
    },
    outcomes: [
      { title: 'Identify thermal anomalies', desc: 'Locate hotspots, string failures and panel defects from the air.', href: '/services/solar-panel-inspections' },
      { title: 'Audit large solar farms', desc: 'Rapid assessment of thousands of assets in a single flight.', href: '/services/solar-panel-inspections' },
      { title: 'Support warranty claims', desc: 'Objective visual and thermal evidence for maintenance and claims.', href: '/sectors/insurance-loss-adjusters' },
      { title: 'Map solar site context', desc: 'High-resolution site mapping for layout and land management.', href: '/services/orthomosaic-mapping' }
    ],
    workflow: [
      { title: 'Define requirement', desc: 'Thermal audit, visual inspection or site mapping.' },
      { title: 'Review conditions', desc: 'Planning for appropriate irradiance and weather windows.' },
      { title: 'Specialist capture', desc: 'Radiometric thermal and high-res visual capture flight.' },
      { title: 'Anomaly analysis', desc: 'Identifying hotspots and string issues in the data.' },
      { title: 'Final reporting', desc: 'Actionable anomaly reports and condition archives.' }
    ],
    serviceStack: [
      { name: 'Solar Panel Inspections', benefit: 'Visual and thermal audits for commercial PV efficiency.', deliverables: ['Thermal anomaly report', 'Visual defect log', 'String failure map'], href: '/services/solar-panel-inspections' },
      { name: 'Thermal Imaging', benefit: 'Identifying heat loss and electrical anomalies.', deliverables: ['Radiometric image set', 'Temperature data', 'Anomaly report'], href: '/services/thermal-imaging' },
      { name: 'Orthomosaic Mapping', benefit: 'High-resolution mapping for solar site context.', deliverables: ['Orthomosaic map', 'Topographic data', 'GIS ready data'], href: '/services/orthomosaic-mapping' }
    ],
    deliverables: [
      { name: 'Thermal Anomaly Evidence Pack', desc: 'Radiometric data showing heat distribution and hotspots.', href: '/sample-deliverables' },
      { name: 'Visual PV Condition Report', desc: 'Detailed imagery of physical panel condition and assets.', href: '/sample-deliverables' },
      { name: 'Solar Farm Orthomosaic', desc: 'High-resolution top-down site map for planning and records.', href: '/sample-deliverables' },
      { name: 'Annotated Defect Image Pack', desc: 'Specific issues highlighted and categorised by severity.', href: '/sample-deliverables' }
    ],
    recommendedBundles: [
      { name: 'Solar & Energy Asset Pack', fit: 'For renewable asset owners requiring technical auditing.', outputs: ['Thermal audit', 'Visual records', 'Anomaly report'], href: '/bundles#solar-energy-asset-pack' },
      { name: 'Insurance & Incident Evidence Pack', fit: 'For rapid damage assessment after storm or fire.', outputs: ['Damage imagery', 'Annotated photos', 'PDF summary'], href: '/bundles#insurance-incident-evidence-pack' }
    ],
    missionProfiles: [
      { title: 'Commercial Solar Farm Thermal Audit Workflow', href: '/operations-standard' },
      { title: 'Rooftop Solar PV Visual Audit Workflow', href: '/operations-standard' }
    ],
    resources: [
      { title: 'Thermal Drone Surveys for Solar PV', href: '/blog' },
      { title: 'Maximising Solar Yield with Drone Data', href: '/blog' }
    ],
    faqs: [
      { q: 'Can drones inspect solar panels efficiently?', a: 'Yes. Drones can survey hundreds of panels in minutes, identifying issues that are invisible to the naked eye.' },
      { q: 'What is the benefit of thermal surveys?', a: 'Thermal surveys identify yield-impacting anomalies like diode issues and hotspots.' },
      { q: 'When is the best time for a solar audit?', a: 'Thermal surveys require specific irradiance levels, usually during clear, sunny periods.' }
    ]
  }
];
