export interface LeadMagnetAsset {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  type: 'Guide' | 'Checklist' | 'Template';
  audience: string[];
  description: string;
  relatedServices: { name: string; href: string }[];
  relatedBundles: { name: string; href: string; slug: string }[];
  contentsPreview: string[];
  sampleDeliverables?: string[];
  caveat?: string;
  status: 'available' | 'preview' | 'preparing' | 'requested';
  pdfStatus: 'ready' | 'pending';
  pdfUrl?: string;
  version: string;
  createdDate: string;
  lastReviewed: string;
  analyticsEvents: {
    pageViewed: string;
    formStarted: string;
    formSubmitted: string;
    assetUnlocked: string;
    pdfDownloaded: string;
    briefClicked: string;
  };
  downloadCount?: number;
  leadCount?: number;
  briefConversions?: number;
  adminStatus: 'draft' | 'preview_available' | 'pdf_ready' | 'live' | 'needs_update' | 'archived';
  targetSector: string;
  targetProjectType: string;
}

const makeEvents = () => ({
  pageViewed: 'download_asset_page_viewed',
  formStarted: 'download_asset_form_started',
  formSubmitted: 'download_asset_form_submitted',
  assetUnlocked: 'download_asset_unlocked',
  pdfDownloaded: 'download_asset_pdf_downloaded',
  briefClicked: 'download_asset_brief_clicked',
});

export const leadMagnets: LeadMagnetAsset[] = [
  {
    id: 'inspection-buyers-guide',
    slug: 'commercial-drone-inspection-buyers-guide',
    title: "Commercial Drone Inspection Buyer's Guide",
    subtitle: 'How to plan, scope and evaluate commercial drone inspection work for roofs, buildings, assets and access-restricted environments.',
    type: 'Guide',
    audience: ['Commercial property owners', 'Facilities managers', 'Managing agents', 'Contractors', 'Insurers', 'Asset managers'],
    description: 'A practical guide to planning commercial drone inspections, understanding deliverables, avoiding poor-quality outputs and preparing a better project brief.',
    relatedServices: [
      { name: 'Drone Inspection', href: '/services/drone-inspection' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Building Envelope Inspections', href: '/services/building-envelope-inspections' },
      { name: 'Commercial Property Drone Surveys', href: '/services/commercial-property-drone-surveys' },
    ],
    relatedBundles: [
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack', slug: 'roof-intelligence-pack' },
      { name: 'Building Envelope & Asset Condition Pack', href: '/bundles#building-envelope-asset-condition-pack', slug: 'building-envelope-asset-condition-pack' },
      { name: 'Insurance & Incident Evidence Pack', href: '/bundles#insurance-incident-evidence-pack', slug: 'insurance-incident-evidence-pack' },
    ],
    contentsPreview: [
      'When drone inspections make sense',
      'What drones can and cannot inspect',
      'Typical deliverables explained',
      'Questions to ask before booking',
      'Planning checklist',
      'Recommended service routes',
      'CTA to project brief',
    ],
    sampleDeliverables: ['High-resolution image set', 'Annotated defect images', 'PDF inspection summary', 'Contractor briefing pack'],
    status: 'preparing',
    pdfStatus: 'pending',
    version: '1.0',
    createdDate: '2026-05-01',
    lastReviewed: '2026-05-05',
    analyticsEvents: makeEvents(),
    adminStatus: 'preview_available',
    targetSector: 'Facilities Management',
    targetProjectType: 'Roof / building inspection',
  },
  {
    id: 'roof-inspection-checklist',
    slug: 'drone-roof-inspection-checklist',
    title: 'Drone Roof Inspection Checklist',
    subtitle: 'A practical checklist for planning roof, gutter, drainage and high-level building inspections using drone capture.',
    type: 'Checklist',
    audience: ['Facilities managers', 'Landlords', 'Managing agents', 'Commercial property teams', 'Contractors'],
    description: 'A practical checklist for planning a roof, gutter, drainage or high-level building inspection using drone capture.',
    relatedServices: [
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Thermal Imaging', href: '/services/thermal-imaging' },
      { name: 'Building Envelope Inspections', href: '/services/building-envelope-inspections' },
    ],
    relatedBundles: [
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack', slug: 'roof-intelligence-pack' },
    ],
    contentsPreview: [
      'Site information to collect',
      'Roof areas to capture',
      'Gutter and drainage checks',
      'Common defects to document',
      'Thermal add-on considerations',
      'Deliverables to request',
      'Contractor briefing notes',
    ],
    sampleDeliverables: ['High-resolution roof image pack', 'Annotated defect image schedule', 'PDF inspection summary', 'Thermal anomaly map (if scoped)'],
    status: 'preparing',
    pdfStatus: 'pending',
    version: '1.0',
    createdDate: '2026-05-01',
    lastReviewed: '2026-05-05',
    analyticsEvents: makeEvents(),
    adminStatus: 'preview_available',
    targetSector: 'Facilities Management',
    targetProjectType: 'Roof / building inspection',
  },
  {
    id: 'fm-survey-guide',
    slug: 'facilities-manager-drone-survey-guide',
    title: "Facilities Manager's Drone Survey Guide",
    subtitle: 'How FM teams can use drone inspections, thermal imagery and aerial evidence for planned maintenance, contractor scoping and portfolio records.',
    type: 'Guide',
    audience: ['FM teams', 'Facilities managers', 'Property managers', 'Portfolio managers', 'Maintenance teams'],
    description: 'A guide for FM teams using drone inspections, thermal imaging and aerial evidence to support planned maintenance, contractor scoping and portfolio records.',
    relatedServices: [
      { name: 'Facilities Management Inspections', href: '/services/facilities-management-inspections' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Building Envelope Inspections', href: '/services/building-envelope-inspections' },
      { name: 'Thermal Imaging', href: '/services/thermal-imaging' },
    ],
    relatedBundles: [
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack', slug: 'roof-intelligence-pack' },
      { name: 'Building Envelope & Asset Condition Pack', href: '/bundles#building-envelope-asset-condition-pack', slug: 'building-envelope-asset-condition-pack' },
      { name: 'Solar & Energy Asset Pack', href: '/bundles#solar-energy-asset-pack', slug: 'solar-energy-asset-pack' },
    ],
    contentsPreview: [
      'How drones support FM workflows',
      'Roof and gutter inspection use cases',
      'Building envelope capture',
      'Thermal imaging considerations',
      'Repeat inspection programme planning',
      'Multi-site portfolio records',
      'FM project brief template',
    ],
    sampleDeliverables: ['Roof image set', 'Annotated defect pack', 'Building envelope condition pack', 'Thermal image set', 'Contractor briefing pack'],
    status: 'preparing',
    pdfStatus: 'pending',
    version: '1.0',
    createdDate: '2026-05-01',
    lastReviewed: '2026-05-05',
    analyticsEvents: makeEvents(),
    adminStatus: 'preview_available',
    targetSector: 'Facilities Management',
    targetProjectType: 'Facilities management inspections',
  },
  {
    id: 'construction-monitoring-template',
    slug: 'construction-progress-monitoring-template',
    title: 'Construction Progress Monitoring Template',
    subtitle: 'A planning template for repeat drone capture, milestone records and stakeholder-ready construction progress updates.',
    type: 'Template',
    audience: ['Contractors', 'Developers', 'Project managers', 'Quantity surveyors', 'Client-side teams'],
    description: 'A template for planning repeat drone progress captures, reporting intervals, milestone records and stakeholder updates on construction sites.',
    relatedServices: [
      { name: 'Construction Monitoring', href: '/services/construction-monitoring' },
      { name: 'Construction Progress Photography', href: '/services/construction-progress-photography' },
      { name: 'Drone Time-Lapse Monitoring', href: '/services/drone-time-lapse-monitoring' },
      { name: 'Surveying & Mapping', href: '/services/surveying-mapping' },
    ],
    relatedBundles: [
      { name: 'Construction Progress Pack', href: '/bundles#construction-progress-pack', slug: 'construction-progress-pack' },
      { name: 'Survey Data Pack', href: '/bundles#survey-data-pack', slug: 'survey-data-pack' },
    ],
    contentsPreview: [
      'Project setup fields',
      'Capture frequency planner',
      'Repeat viewpoint checklist',
      'Progress report template',
      'Deliverables planner',
      'Stakeholder pack structure',
      'Briefing information checklist',
    ],
    sampleDeliverables: ['Dated image archive', 'Monthly PDF progress report', 'Orthomosaic site map', 'Stakeholder update video', 'Stockpile volume report'],
    status: 'preparing',
    pdfStatus: 'pending',
    version: '1.0',
    createdDate: '2026-05-01',
    lastReviewed: '2026-05-05',
    analyticsEvents: makeEvents(),
    adminStatus: 'preview_available',
    targetSector: 'Contractor / Construction',
    targetProjectType: 'Construction progress monitoring',
  },
  {
    id: 'insurance-evidence-checklist',
    slug: 'insurance-evidence-drone-capture-checklist',
    title: 'Insurance Evidence Drone Capture Checklist',
    subtitle: 'A practical checklist for planning drone evidence capture after storm damage, roof damage, fire damage, flood impact or access-restricted property incidents.',
    type: 'Checklist',
    audience: ['Property owners', 'Landlords', 'Insurers', 'Loss adjusters', 'Contractors', 'FM teams'],
    description: 'A checklist for planning drone evidence capture after storm damage, roof damage, fire damage, flood impact or access-restricted property incidents.',
    relatedServices: [
      { name: 'Insurance & Loss Adjuster Surveys', href: '/services/insurance-loss-adjuster-surveys' },
      { name: 'Emergency Response', href: '/services/emergency-response' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Thermal Imaging', href: '/services/thermal-imaging' },
    ],
    relatedBundles: [
      { name: 'Insurance & Incident Evidence Pack', href: '/bundles#insurance-incident-evidence-pack', slug: 'insurance-incident-evidence-pack' },
    ],
    contentsPreview: [
      'Incident information to record',
      'Damage areas to capture',
      'Evidence output checklist',
      'Thermal add-on guidance',
      'Important evidence caveats',
      'Questions to confirm before capture',
      'Recommended service route',
    ],
    sampleDeliverables: ['High-resolution damage evidence images', 'Annotated defect and impact points', 'Emergency condition summary PDF', 'Contractor briefing pack'],
    caveat: 'Drone evidence can support insurance documentation, but acceptance depends on the insurer, policy, claim context and required evidence.',
    status: 'preparing',
    pdfStatus: 'pending',
    version: '1.0',
    createdDate: '2026-05-01',
    lastReviewed: '2026-05-05',
    analyticsEvents: makeEvents(),
    adminStatus: 'preview_available',
    targetSector: 'Insurer / Loss Adjuster',
    targetProjectType: 'Insurance or incident evidence',
  },
  {
    id: 'gaussian-splat-guide',
    slug: 'gaussian-splat-vs-photogrammetry-guide',
    title: 'TFTS 3D vs Photogrammetry Guide',
    subtitle: 'A plain-English guide to choosing between TFTS 3Ds, photogrammetry, LiDAR, 360 panoramas and drone video for commercial site capture.',
    type: 'Guide',
    audience: ['Developers', 'Architects', 'Heritage teams', 'Construction teams', 'Property marketers', 'Surveyors', 'Stakeholder engagement teams'],
    description: 'A plain-English guide comparing TFTS 3Ds, photogrammetry, LiDAR, 360 panoramas and drone video for commercial site visualisation and measurement workflows.',
    relatedServices: [
      { name: 'TFTS 3D Capture', href: '/services/tfts-3d' },
      { name: 'Drone Photogrammetry', href: '/services/photogrammetry' },
      { name: 'Digital Twin Capture', href: '/services/digital-twin-capture' },
      { name: '360 Aerial Panoramas', href: '/services/360-aerial-panoramas' },
      { name: 'Surveying & Mapping', href: '/services/surveying-mapping' },
    ],
    relatedBundles: [
      { name: 'Immersive Digital Capture Pack', href: '/bundles#immersive-digital-capture-pack', slug: 'immersive-digital-capture-pack' },
    ],
    contentsPreview: [
      'What TFTS 3Ds are best for',
      'What photogrammetry is best for',
      'When LiDAR is a better fit',
      'When 360 panoramas are enough',
      'Comparison table across all outputs',
      'Visualisation vs measurement guidance',
      'Choosing the right output for your project',
    ],
    sampleDeliverables: ['Photorealistic TFTS 3D', 'Web-ready immersive viewer', 'Flythrough video', 'Orthomosaic map', 'Point cloud (LAS/LAZ)'],
    caveat: 'TFTS 3Ds are visualisation-first assets. Measurement-critical outputs should be planned with photogrammetry, LiDAR or survey-control workflows where required.',
    status: 'preparing',
    pdfStatus: 'pending',
    version: '1.0',
    createdDate: '2026-05-01',
    lastReviewed: '2026-05-05',
    analyticsEvents: makeEvents(),
    adminStatus: 'preview_available',
    targetSector: 'Developer / Property Owner',
    targetProjectType: 'TFTS 3D / 3D capture',
  },
  {
    id: 'survey-cost-guide',
    slug: 'drone-survey-cost-guide',
    title: 'Drone Survey Cost Guide',
    subtitle: 'A practical guide to the factors that affect drone survey, mapping, inspection and aerial data capture costs.',
    type: 'Guide',
    audience: ['Surveyors', 'Contractors', 'Developers', 'Landowners', 'Commercial property teams', 'FM teams'],
    description: 'A guide explaining the factors that affect drone survey, mapping, inspection and aerial data capture costs.',
    relatedServices: [
      { name: 'Surveying & Mapping', href: '/services/surveying-mapping' },
      { name: 'Roof Inspections', href: '/services/roof-inspections' },
      { name: 'Construction Monitoring', href: '/services/construction-monitoring' },
      { name: 'Orthomosaic Mapping', href: '/services/orthomosaic-mapping' },
      { name: 'Stockpile Volume Surveys', href: '/services/stockpile-volume-surveys' },
    ],
    relatedBundles: [
      { name: 'Survey Data Pack', href: '/bundles#survey-data-pack', slug: 'survey-data-pack' },
      { name: 'Roof Intelligence Pack', href: '/bundles#roof-intelligence-pack', slug: 'roof-intelligence-pack' },
      { name: 'Construction Progress Pack', href: '/bundles#construction-progress-pack', slug: 'construction-progress-pack' },
    ],
    contentsPreview: [
      'Why drone project costs vary',
      'Main cost drivers explained',
      'Project complexity levels',
      'How to reduce quoting uncertainty',
      'Questions to ask before comparing prices',
      'Use the Cost Estimator tool',
      'Route to project brief',
    ],
    sampleDeliverables: ['Stockpile volume report', 'Orthomosaic map', '3D Point cloud', 'Digital Surface Model', 'PDF inspection summary'],
    status: 'preparing',
    pdfStatus: 'pending',
    version: '1.0',
    createdDate: '2026-05-01',
    lastReviewed: '2026-05-05',
    analyticsEvents: makeEvents(),
    adminStatus: 'preview_available',
    targetSector: 'Surveyor / Consultant',
    targetProjectType: 'Drone surveying / mapping',
  },
];

export const sectors = [
  'Facilities Management',
  'Contractor / Construction',
  'Developer / Property Owner',
  'Commercial Property / Managing Agent',
  'Surveyor / Consultant',
  'Insurer / Loss Adjuster',
  'Solar / Energy',
  'Infrastructure / Utilities',
  'Heritage / Conservation',
  'Events / Media',
  'Agriculture / Rural Estates',
  'Other',
];

export const projectTypes = [
  'Roof / building inspection',
  'Construction progress monitoring',
  'Drone surveying / mapping',
  'Thermal imaging',
  'Solar panel inspection',
  'Insurance or incident evidence',
  'Aerial photography / video',
  'TFTS 3D / 3D capture',
  'Facilities management inspections',
  'Stockpile / volume measurement',
  'Not sure yet',
];

export const getAutomationRoute = (sector: string, projectType: string) => {
  if (sector === 'Facilities Management' || projectType === 'Roof / building inspection' || projectType === 'Facilities management inspections') {
    return {
      name: 'FM Roof Inspection Nurture',
      category: 'FM / Property Inspection',
      recommendedBundle: 'Roof Intelligence Pack',
      secondaryBundle: 'Building Envelope & Asset Condition Pack',
      sectorSlug: 'facilities-management',
    };
  }
  if (sector === 'Contractor / Construction' || projectType === 'Construction progress monitoring' || projectType === 'Drone surveying / mapping' || projectType === 'Stockpile / volume measurement') {
    return {
      name: 'Construction Progress Monitoring Nurture',
      category: 'Construction / Progress',
      recommendedBundle: 'Construction Progress Pack',
      secondaryBundle: 'Survey Data Pack',
      sectorSlug: 'construction',
    };
  }
  if (sector === 'Insurer / Loss Adjuster' || projectType === 'Insurance or incident evidence') {
    return {
      name: 'Insurance Evidence Capture Nurture',
      category: 'Insurance / Incident',
      recommendedBundle: 'Insurance & Incident Evidence Pack',
      secondaryBundle: 'Roof Intelligence Pack',
      sectorSlug: 'insurance-loss-adjusters',
    };
  }
  if (sector === 'Developer / Property Owner' || sector === 'Commercial Property / Managing Agent') {
    return {
      name: 'Property Visualisation and Media Nurture',
      category: 'Commercial Property / Visualisation',
      recommendedBundle: 'Visual Sales Pack',
      secondaryBundle: 'Immersive Digital Capture Pack',
      sectorSlug: 'commercial-property',
    };
  }
  if (sector === 'Surveyor / Consultant') {
    return {
      name: 'Survey Data Pack Nurture',
      category: 'Survey / Mapping',
      recommendedBundle: 'Survey Data Pack',
      secondaryBundle: 'Immersive Digital Capture Pack',
      sectorSlug: 'surveyors',
    };
  }
  if (projectType === 'TFTS 3D / 3D capture') {
    return {
      name: 'TFTS 3D / 3D Nurture',
      category: 'Immersive / 3D',
      recommendedBundle: 'Immersive Digital Capture Pack',
      secondaryBundle: 'Visual Sales Pack',
      sectorSlug: 'developers-property-marketing',
    };
  }
  return {
    name: 'General Drone Service Nurture',
    category: 'General Inquiry',
    recommendedBundle: 'Commercial Bundle',
    secondaryBundle: 'Survey Data Pack',
    sectorSlug: 'sectors',
  };
};
