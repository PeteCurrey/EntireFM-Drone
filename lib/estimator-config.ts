export interface EstimatorOption {
  id: string;
  label: string;
  description?: string;
  score: number;
}

export interface EstimatorStep {
  id: string;
  question: string;
  options: EstimatorOption[];
  multiSelect?: boolean;
}

export interface CostBand {
  id: string;
  label: string;
  range?: string;
  description: string;
  minScore: number;
  maxScore: number;
}

export const estimatorConfig = {
  showMonetaryRanges: true,
  disclaimer: "This estimate is indicative only. Final pricing depends on site location, access, airspace, weather, safety requirements, deliverables, reporting level, processing, urgency and project scope.",
  steps: [
    {
      id: 'projectType',
      question: 'What type of drone project do you need?',
      options: [
        { id: 'roof-inspection', label: 'Roof / building inspection', score: 2 },
        { id: 'envelope-inspection', label: 'Building envelope / facade inspection', score: 3 },
        { id: 'thermal-survey', label: 'Thermal imaging survey', score: 4 },
        { id: 'solar-inspection', label: 'Solar panel inspection', score: 3 },
        { id: 'construction-progress', label: 'Construction progress monitoring', score: 2 },
        { id: 'surveying-mapping', label: 'Surveying / mapping', score: 5 },
        { id: 'stockpile-volume', label: 'Stockpile / volume measurement', score: 4 },
        { id: 'aerial-media', label: 'Aerial photography or video', score: 1 },
        { id: 'fpv-flythrough', label: 'FPV flythrough', score: 3 },
        { id: 'event-media', label: 'Event / venue media', score: 2 },
        { id: 'gaussian-splat', label: 'TFTS 3D / 3D capture', score: 5 },
        { id: 'insurance-evidence', label: 'Insurance / damage evidence', score: 3 },
        { id: 'emergency-response', label: 'Emergency / urgent response', score: 5 },
        { id: 'not-sure', label: 'Not sure yet', score: 2 }
      ]
    },
    {
      id: 'siteType',
      question: 'What type of site is involved?',
      options: [
        { id: 'small-commercial', label: 'Small commercial property', score: 1 },
        { id: 'medium-commercial', label: 'Medium commercial building', score: 2 },
        { id: 'large-industrial', label: 'Large commercial / industrial building', score: 3 },
        { id: 'construction-site', label: 'Construction site', score: 3 },
        { id: 'multi-building', label: 'Multi-building estate', score: 4 },
        { id: 'retail-park', label: 'Retail park', score: 3 },
        { id: 'residential-block', label: 'Managed residential block', score: 2 },
        { id: 'solar-site', label: 'Solar PV site', score: 4 },
        { id: 'rural-estate', label: 'Farm / rural estate', score: 2 },
        { id: 'heritage-building', label: 'Heritage building', score: 4 },
        { id: 'event-location', label: 'Venue / event location', score: 2 },
        { id: 'infrastructure', label: 'Infrastructure asset', score: 5 },
        { id: 'multiple-sites', label: 'Multiple sites', score: 5 },
        { id: 'not-sure', label: 'Not sure', score: 2 }
      ]
    },
    {
      id: 'locationComplexity',
      question: 'What best describes the location?',
      options: [
        { id: 'rural', label: 'Rural / open land', score: 1 },
        { id: 'industrial', label: 'Industrial estate', score: 2 },
        { id: 'commercial', label: 'Commercial estate', score: 2 },
        { id: 'suburban', label: 'Suburban area', score: 3 },
        { id: 'city-centre', label: 'City centre', score: 5 },
        { id: 'public-area', label: 'Busy public area', score: 4 },
        { id: 'near-airport', label: 'Near airport / controlled airspace', score: 5 },
        { id: 'near-infrastructure', label: 'Near railway / highway / utilities', score: 5 },
        { id: 'multiple-locations', label: 'Multiple locations', score: 4 },
        { id: 'not-sure', label: 'Not sure', score: 3 }
      ]
    },
    {
      id: 'siteScale',
      question: 'Roughly how large is the project area?',
      options: [
        { id: 'small', label: 'Small single asset or roof', score: 1 },
        { id: 'medium', label: 'Medium property or site', score: 3 },
        { id: 'large', label: 'Large building or estate', score: 4 },
        { id: 'large-construction', label: 'Large construction site', score: 5 },
        { id: 'large-land', label: 'Large land area', score: 5 },
        { id: 'multiple', label: 'Multiple sites', score: 5 },
        { id: 'unknown', label: 'Unknown', score: 3 }
      ]
    },
    {
      id: 'deliverables',
      question: 'What do you need to receive?',
      multiSelect: true,
      options: [
        { id: 'images', label: 'High-resolution image set', score: 1 },
        { id: 'annotated-images', label: 'Annotated inspection images', score: 2 },
        { id: 'pdf-summary', label: 'PDF inspection summary', score: 2 },
        { id: 'thermal-set', label: 'Thermal image set', score: 4 },
        { id: 'drone-video', label: 'Edited drone video', score: 3 },
        { id: 'social-clips', label: 'Social media clips', score: 2 },
        { id: 'raw-footage', label: 'Raw footage', score: 1 },
        { id: 'orthomosaic', label: 'Orthomosaic map', score: 4 },
        { id: 'point-cloud', label: 'Point cloud', score: 5 },
        { id: '3d-model', label: '3D model', score: 5 },
        { id: 'gaussian-splat', label: 'TFTS 3D', score: 5 },
        { id: 'digital-twin', label: 'Digital twin-style viewer', score: 6 },
        { id: 'panorama', label: '360 aerial panorama', score: 3 },
        { id: 'volume-report', label: 'Stockpile volume report', score: 4 },
        { id: 'cut-fill', label: 'Cut and fill calculation', score: 5 },
        { id: 'progress-report', label: 'Construction progress report', score: 2 },
        { id: 'insurance-pack', label: 'Insurance evidence pack', score: 3 },
        { id: 'briefing-pack', label: 'Contractor briefing pack', score: 2 },
        { id: 'not-sure', label: 'Not sure yet', score: 2 }
      ]
    },
    {
      id: 'reportingLevel',
      question: 'How much reporting or processing do you need?',
      options: [
        { id: 'basic', label: 'Basic capture', description: 'Files supplied with minimal processing.', score: 1 },
        { id: 'standard', label: 'Standard delivery', description: 'Organised files, selected images, basic summary or simple edit.', score: 2 },
        { id: 'annotated', label: 'Annotated report', description: 'Image annotations, PDF summary, evidence pack or contractor briefing.', score: 4 },
        { id: 'technical', label: 'Technical data processing', description: 'Mapping, point clouds, volumes, cut/fill, 3D model or CAD/GIS-ready exports where scoped.', score: 6 },
        { id: 'advanced', label: 'Advanced visualisation', description: 'TFTS 3D, immersive viewer, flythrough, digital twin-style output or combined visual pack.', score: 8 },
        { id: 'not-sure', label: 'Not sure yet', score: 3 }
      ]
    },
    {
      id: 'frequency',
      question: 'Is this a one-off or repeat requirement?',
      options: [
        { id: 'one-off', label: 'One-off', score: 1 },
        { id: 'before-after', label: 'Before and after', score: 2 },
        { id: 'weekly', label: 'Weekly', score: 6 },
        { id: 'fortnightly', label: 'Fortnightly', score: 5 },
        { id: 'monthly', label: 'Monthly', score: 4 },
        { id: 'quarterly', label: 'Quarterly', score: 3 },
        { id: 'programme', label: 'Multi-site programme', score: 8 },
        { id: 'not-sure', label: 'Not sure', score: 2 }
      ]
    },
    {
      id: 'urgency',
      question: 'How urgent is the project?',
      options: [
        { id: 'emergency', label: 'Emergency / incident-related', score: 5 },
        { id: 'this-week', label: 'Needed this week', score: 4 },
        { id: 'next-month', label: 'Needed within 2–4 weeks', score: 2 },
        { id: 'flexible', label: 'Flexible', score: 1 },
        { id: 'planning', label: 'Planning stage', score: 1 },
        { id: 'not-sure', label: 'Not sure', score: 2 }
      ]
    },
    {
      id: 'specialist',
      question: 'Does the project need specialist capture or accuracy?',
      options: [
        { id: 'visual', label: 'No, visual evidence is enough', score: 0 },
        { id: 'thermal', label: 'Thermal imaging required', score: 5 },
        { id: 'survey-accuracy', label: 'Survey / mapping accuracy matters', score: 6 },
        { id: 'volume-accuracy', label: 'Stockpile or volume accuracy matters', score: 6 },
        { id: 'lidar', label: 'LiDAR may be required', score: 8 },
        { id: '3d-viewer', label: 'TFTS 3D / 3D viewer required', score: 8 },
        { id: 'fpv', label: 'FPV indoor or close-proximity filming required', score: 6 },
        { id: 'not-sure', label: 'Not sure yet', score: 4 }
      ]
    }
  ] as EstimatorStep[],
  costBands: [
    {
      id: 'simple',
      label: 'Simple Capture',
      range: '£350–£750',
      description: 'Typical for basic aerial image sets, small roof visual inspections, and simple site photography.',
      minScore: 0,
      maxScore: 12
    },
    {
      id: 'standard',
      label: 'Standard Commercial Project',
      range: '£750–£1,500',
      description: 'Typical for commercial roof inspections, building condition sets, standard thermal capture, and basic construction progress visits.',
      minScore: 13,
      maxScore: 24
    },
    {
      id: 'reporting',
      label: 'Reporting / Evidence Project',
      range: '£1,500–£3,000',
      description: 'Typical for annotated inspection reports, insurance evidence packs, and solar inspection summaries.',
      minScore: 25,
      maxScore: 38
    },
    {
      id: 'technical',
      label: 'Technical Data Project',
      range: '£2,500–£5,000+',
      description: 'Typical for orthomosaic mapping, point clouds, stockpile volumes, and photogrammetry models.',
      minScore: 39,
      maxScore: 52
    },
    {
      id: 'advanced',
      label: 'Advanced / Specialist Project',
      range: '£3,500–£10,000+',
      description: 'Typical for TFTS 3D capture, LiDAR surveys, multi-site programmes, and complex urban operations.',
      minScore: 53,
      maxScore: 999
    }
  ] as CostBand[]
};
