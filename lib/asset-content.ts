// lib/asset-content.ts
// Full structured content for all 7 gated lead magnet assets.
// TODO: PDF export pending for all assets — implement PDF generation from this data.

export interface ContentSection {
  heading: string;
  intro?: string;
  items?: { label: string; note?: string }[];
  checklist?: string[];
  table?: { col1: string; col2: string; col3: string; col4: string; rows: string[][] };
  paragraphs?: string[];
  warning?: string;
}

export interface AssetContent {
  slug: string;
  disclaimer: string;
  version: string;
  sections: ContentSection[];
}

export const assetContent: AssetContent[] = [
  {
    slug: 'commercial-drone-inspection-buyers-guide',
    disclaimer: 'This guide is intended for planning and scoping support only. Drone inspections can support commercial decision-making but do not replace professional surveyor, engineer or legal sign-off where required. Outputs depend on project scope, site conditions and methodology. Thermal findings should be interpreted in context.',
    version: 'Version 1.0 · EntireFM Drone · 2026',
    sections: [
      {
        heading: 'When Drone Inspections Make Sense',
        intro: 'Drone inspections can support commercial property and asset management workflows where direct access is impractical, expensive or unsafe.',
        checklist: [
          'Flat roofs, pitched roofs, gutters and drainage outlets',
          'High-level facades, cladding and glazing details',
          'Roof plant, plant rooms and rooftop equipment',
          'Chimneys, parapets and high-level architectural details',
          'Post-storm or post-fire damage evidence capture',
          'Pre-planned maintenance condition records',
          'Contractor scoping and defect evidence packs',
          'Insurance documentation support (subject to policy requirements)',
          'Access-restricted or unsafe areas where scaffold is not yet in place',
        ],
      },
      {
        heading: 'What Drone Inspections Can Capture',
        intro: 'High-resolution drone imagery can provide detailed visual evidence across a range of building elements.',
        checklist: [
          'Roof coverings — condition, splits, lifting, ponding and drainage',
          'Gutters and downpipes — blockages, overflows, condition',
          'Flashings, upstands and penetrations',
          'Parapets and edge details',
          'External cladding and glazing condition',
          'Chimney stacks and high-level brickwork',
          'Roof plant and mechanical equipment',
          'Thermal anomalies — heat loss, moisture, solar PV faults (where thermal sensor used)',
          'Building context and surrounding site conditions',
        ],
      },
      {
        heading: 'What Drone Inspections Cannot Replace',
        intro: 'Drone capture provides visual and thermal evidence. It is not a substitute for all forms of professional inspection.',
        warning: 'The following require qualified professional involvement and cannot be replaced by drone imagery alone.',
        checklist: [
          'Physical invasive testing of materials or membranes',
          'Structural engineering sign-off or certification',
          'Party wall or boundary assessments',
          'Full RICS-standard survey reports unless separately scoped with a qualified surveyor',
          'Legal or expert witness reports',
          'Hands-on inspection of components where physical access is required',
        ],
      },
      {
        heading: 'Typical Deliverables',
        checklist: [
          'High-resolution image set — organised by area or elevation',
          'Annotated defect images — priority markers and reference notes',
          'PDF inspection summary — condition overview with key findings',
          'Contractor briefing pack — scoping evidence for quotes',
          'Thermal image set — radiometric data where thermal sensor deployed',
          'Insurance evidence pack — incident-specific documentation',
          'Before-and-after record — for repair verification or monitoring',
        ],
      },
      {
        heading: 'Questions to Ask a Drone Provider',
        checklist: [
          'Are operations fully CAA-compliant for this type of site?',
          'Is the pilot GVC qualified or equivalent?',
          'Is appropriate public liability insurance in place?',
          'What deliverables are included in the quoted price?',
          'Are images organised, labelled and annotated?',
          'Is thermal imaging available if needed?',
          'How are site constraints, airspace and third-party access reviewed?',
          'Is the output format suitable for the intended use (contractor, insurer, client)?',
          'What is the typical turnaround time?',
        ],
      },
      {
        heading: 'Planning Checklist',
        items: [
          { label: 'Site address and postcode' },
          { label: 'Asset type (roof, facade, industrial, residential)' },
          { label: 'Areas to inspect' },
          { label: 'Known issues or defects to prioritise' },
          { label: 'Access restrictions or airspace considerations' },
          { label: 'Required deliverables (images, report, thermal)' },
          { label: 'Reporting level required (raw imagery, annotated, full report)' },
          { label: 'Urgency (planned maintenance vs. incident response)' },
          { label: 'Site contact and access arrangements' },
          { label: 'Supporting files (drawings, previous reports)' },
        ],
      },
    ],
  },
  {
    slug: 'drone-roof-inspection-checklist',
    disclaimer: 'This checklist is a planning and scoping tool. Drone roof inspection supports visual evidence gathering but does not replace specialist surveyor sign-off, invasive testing or structural assessment.',
    version: 'Version 1.0 · EntireFM Drone · 2026',
    sections: [
      {
        heading: 'Section 1: Project Details',
        items: [
          { label: 'Site name' },
          { label: 'Address and postcode' },
          { label: 'Site contact name and number' },
          { label: 'Building type (commercial, industrial, residential, mixed-use)' },
          { label: 'Number of buildings on site' },
          { label: 'Roof type if known (flat, pitched, standing seam, GRP)' },
          { label: 'Reason for inspection (PPM, damage, pre-acquisition, insurance)' },
          { label: 'Target inspection date' },
          { label: 'Urgency level (routine / urgent / emergency)' },
        ],
      },
      {
        heading: 'Section 2: Roof Areas to Capture',
        checklist: [
          'Main roof coverings (felt, membrane, GRP, slate, tile)',
          'Flat roof areas — full coverage',
          'Pitched roof areas — ridge, slopes, eaves',
          'Gutters — all accessible runs',
          'Downpipes and outlets',
          'Drainage outlets and hoppers',
          'Parapets and copings',
          'Flashings and upstands',
          'Penetrations (pipes, vents, cables)',
          'Roof plant and mechanical equipment',
          'Skylights and rooflights',
          'Chimney stacks and pots',
          'Access hatches and covers',
          'Edge details and drip edges',
        ],
      },
      {
        heading: 'Section 3: Common Issues to Look For',
        checklist: [
          'Ponding or standing water on flat roofs',
          'Blocked or overflowing gutters',
          'Cracked, split or lifting roof coverings',
          'Loose, failed or missing flashings',
          'Damaged or missing roof coverings',
          'Vegetation growth in gutters or on coverings',
          'Debris accumulation on roofs or in outlets',
          'Storm damage — impact, displacement, wind uplift',
          'Poor or blocked drainage routes',
          'Failed sealant or mastic around penetrations',
          'Roof plant condition and fixings',
          'Visible signs of water ingress at parapet junctions',
        ],
      },
      {
        heading: 'Section 4: Optional Thermal Add-On',
        intro: 'Thermal imaging can help identify temperature anomalies associated with moisture ingress or heat loss. Findings should be interpreted in context and may require further investigation.',
        checklist: [
          'Heat loss or insulation concerns flagged',
          'Possible moisture ingress suspected',
          'Solar PV array inspection required',
          'Electrical equipment inspection needed',
          'Survey timing suitable (ideally 8°C+ differential between inside and outside)',
          'Weather conditions appropriate (no rain in previous 24 hours)',
        ],
      },
      {
        heading: 'Section 5: Deliverables to Request',
        checklist: [
          'High-resolution image set — organised by roof area',
          'Annotated defect images — priority levels and reference notes',
          'PDF inspection summary — condition overview',
          'Contractor briefing pack — scoping images for repair quotes',
          'Thermal image set — where thermal sensor used',
          'Before-and-after repair record — for follow-up visits',
          'Insurance evidence pack — if damage-related',
        ],
      },
      {
        heading: 'Section 6: Contractor Briefing Notes',
        items: [
          { label: 'Areas requiring contractor quote' },
          { label: 'Key defect images to include in brief' },
          { label: 'Urgency level for repairs' },
          { label: 'Access considerations for repair teams' },
          { label: 'Notes on repair scope or specification' },
          { label: 'Follow-up inspection required after repair?' },
        ],
      },
    ],
  },
  {
    slug: 'facilities-manager-drone-survey-guide',
    disclaimer: 'This guide is a planning resource. Drone surveys support FM workflows but do not replace professional inspection, engineering assessment or compliance sign-off. Thermal findings should be interpreted alongside other evidence.',
    version: 'Version 1.0 · EntireFM Drone · 2026',
    sections: [
      {
        heading: 'Why FM Teams Use Drone Capture',
        checklist: [
          'Safe, rapid inspection of roofs and high-level areas without access equipment',
          'Gutter and drainage condition checks across multiple buildings in a single visit',
          'Building envelope records for planned maintenance programmes',
          'Contractor scoping evidence — reducing unnecessary site visits',
          'Consistent photographic records across portfolio assets',
          'Post-storm or incident damage documentation',
          'Before-and-after repair verification',
          'Insurance evidence support where required',
        ],
      },
      {
        heading: 'Common FM Drone Use Cases',
        items: [
          { label: 'PPM roof records', note: 'Annual or periodic visual condition records' },
          { label: 'Gutter and drainage checks', note: 'Blockage identification before autumn or following storms' },
          { label: 'Building envelope capture', note: 'Cladding, glazing and facade condition evidence' },
          { label: 'Roof plant imagery', note: 'Condition record for mechanical and electrical equipment' },
          { label: 'Thermal surveys', note: 'Heat loss, moisture and solar PV audits' },
          { label: 'Post-storm documentation', note: 'Rapid evidence capture for insurance and contractor briefing' },
          { label: 'Before-and-after records', note: 'Repair verification and liability protection' },
          { label: 'Portfolio inspections', note: 'Multi-site visits with consistent deliverables' },
        ],
      },
      {
        heading: 'FM Deliverables Overview',
        checklist: [
          'Roof image set — high-resolution, organised by building and area',
          'Annotated defect pack — priority findings with reference markers',
          'PDF inspection summary — suitable for client or stakeholder reporting',
          'Building envelope condition pack — facade, cladding and glazing evidence',
          'Thermal image set — moisture, heat loss and solar anomalies',
          'Contractor briefing pack — scoping evidence for quotes and works orders',
          'Insurance evidence pack — incident documentation and timeline records',
        ],
      },
      {
        heading: 'Building a Multi-Site Drone Inspection Programme',
        intro: 'Structured repeat programmes deliver consistent evidence across a portfolio and reduce reactive spend.',
        items: [
          { label: 'Asset list', note: 'Confirm all buildings within scope' },
          { label: 'Priority assets', note: 'Identify high-risk or high-value assets first' },
          { label: 'Inspection frequency', note: 'Annual, biannual or seasonal' },
          { label: 'Repeat visit planning', note: 'Consistent flight paths and camera positions' },
          { label: 'Consistent deliverables', note: 'Standard image format, annotation and reporting' },
          { label: 'Portfolio reporting', note: 'Consolidated condition summary across all sites' },
        ],
      },
      {
        heading: 'FM Project Brief Template',
        items: [
          { label: 'Site name and address' },
          { label: 'Asset type and number of buildings' },
          { label: 'Known issues or maintenance priorities' },
          { label: 'Required output (images, report, thermal)' },
          { label: 'Target inspection date or programme' },
          { label: 'Contractor involvement or handoff required?' },
          { label: 'Reporting level (raw imagery, annotated, full summary)' },
          { label: 'Follow-up inspection or repeat programme required?' },
        ],
      },
    ],
  },
  {
    slug: 'construction-progress-monitoring-template',
    disclaimer: 'This template is a planning and project management support tool. Drone capture provides visual and spatial evidence for construction monitoring but does not replace engineering, QS or contractual oversight.',
    version: 'Version 1.0 · EntireFM Drone · 2026',
    sections: [
      {
        heading: 'Section 1: Project Setup',
        items: [
          { label: 'Project name' },
          { label: 'Site address and postcode' },
          { label: 'Main site contact' },
          { label: 'Contractor or developer name' },
          { label: 'Current programme stage' },
          { label: 'Start date' },
          { label: 'Target completion date' },
          { label: 'Reporting frequency (weekly / fortnightly / monthly / milestone)' },
        ],
      },
      {
        heading: 'Section 2: Capture Frequency Planner',
        items: [
          { label: 'Weekly', note: 'Active build phases — structural frame, envelope, fit-out' },
          { label: 'Fortnightly', note: 'Steady-state progress phases' },
          { label: 'Monthly', note: 'Long-programme civil or infrastructure projects' },
          { label: 'Milestone-based', note: 'Key stage completions — groundworks, frame, topping out, handover' },
          { label: 'Before/after key works', note: 'Specific work packages or demolition events' },
          { label: 'Investor update cycle', note: 'Aligned to funding drawdown or reporting dates' },
        ],
      },
      {
        heading: 'Section 3: Repeat Viewpoint Checklist',
        intro: 'Consistent viewpoints allow direct progress comparison across visits.',
        checklist: [
          'Site entrance and gatehouse overview',
          'Full-site aerial — all four cardinal directions',
          'North, South, East, West elevation overviews',
          'Groundworks and foundations progress',
          'Structural frame progress and floor-by-floor',
          'Building envelope — roofing, cladding, glazing',
          'External works — hardstanding, drainage, landscaping',
          'Material storage and logistics areas',
          'Access routes and site traffic management',
          'Key risk areas or programme-critical zones',
        ],
      },
      {
        heading: 'Section 4: Progress Report Fields',
        items: [
          { label: 'Date captured' },
          { label: 'Weather conditions at capture' },
          { label: 'Current work stage or programme week' },
          { label: 'Key visible progress since last visit' },
          { label: 'Areas behind programme or delayed' },
          { label: 'Key milestones achieved' },
          { label: 'Notes for stakeholders or client report' },
          { label: 'Required follow-up or next capture date' },
        ],
      },
      {
        heading: 'Section 5: Deliverables Planner',
        checklist: [
          'Dated image archive — organised by visit and viewpoint',
          'Repeat viewpoint comparison images',
          'Monthly PDF progress report — stakeholder-ready',
          'Short progress video — edited for distribution',
          'Orthomosaic site map — updated periodically',
          'Stockpile volume report — where earthworks or materials are tracked',
          'Stakeholder pack — collated for investor or client reporting',
        ],
      },
    ],
  },
  {
    slug: 'insurance-evidence-drone-capture-checklist',
    disclaimer: 'Drone evidence can support insurance documentation, contractor scoping and internal property records. Acceptance of drone imagery as insurance evidence depends on the insurer, policy wording, claim context and required evidence standard. This checklist is a planning tool only.',
    version: 'Version 1.0 · EntireFM Drone · 2026',
    sections: [
      {
        heading: 'Section 1: Incident Information',
        items: [
          { label: 'Incident date' },
          { label: 'Incident type (storm / fire / flood / impact / other)' },
          { label: 'Property address' },
          { label: 'Areas affected' },
          { label: 'Insurance reference number (if available)' },
          { label: 'Contractor involved in emergency repairs?' },
          { label: 'Urgency level (immediate / within 24h / within 48h / planned)' },
          { label: 'Site access notes or restrictions' },
        ],
      },
      {
        heading: 'Section 2: Damage Areas to Capture',
        checklist: [
          'Roof coverings — extent of damage, displaced or missing areas',
          'Gutters and drainage — damage, displacement, blockage from incident',
          'Parapets, copings and high-level details',
          'Flashings and upstands — wind-lifted or failed',
          'External elevations — storm impact, fire or flood staining',
          'Cladding and glazing — cracking, displacement, impact damage',
          'Surrounding context — debris, access restrictions, adjacent structures',
          'Water pooling or flood extent',
          'Debris on roof or around building',
          'Access-restricted or unsafe areas requiring aerial evidence',
          'Fire-affected areas — extent of roof or structural damage',
        ],
      },
      {
        heading: 'Section 3: Evidence Output Checklist',
        checklist: [
          'High-resolution images — full site overview and detailed damage close-ups',
          'Annotated damage images — location markers and priority levels',
          'PDF evidence summary — condition at time of capture',
          'Thermal image set — where moisture or residual heat relevant',
          'Before-and-after record — if pre-incident imagery is available',
          'Contractor scoping image pack — for emergency repair briefing',
          'Access restriction evidence — documenting areas that cannot be physically inspected',
        ],
      },
      {
        heading: 'Section 4: Important Evidence Caveats',
        paragraphs: [
          'Drone imagery provides a visual and thermal record of site conditions at the time of capture. It can support loss adjuster assessment, contractor scoping and internal records.',
          'Acceptance of drone imagery as insurance evidence depends on the individual insurer, policy wording, claim type and evidence requirements. Confirm with your insurer or loss adjuster before relying on drone evidence as primary documentation.',
          'Thermal findings should be interpreted alongside other evidence. Drone thermal imaging identifies temperature differentials that may indicate moisture or heat — not confirmed damage.',
        ],
      },
      {
        heading: 'Section 5: Questions to Confirm Before Capture',
        checklist: [
          'What specifically needs to be evidenced?',
          'Who will review the evidence — insurer, loss adjuster, solicitor?',
          'Are there insurer-specific evidence format requirements?',
          'Is a contractor quote needed alongside the evidence pack?',
          'Are thermal images useful for this incident type?',
          'Is urgent deployment required?',
          'Are any areas of the site unsafe or access-restricted?',
        ],
      },
    ],
  },
  {
    slug: 'gaussian-splat-vs-photogrammetry-guide',
    disclaimer: 'Gaussian Splats are visualisation-first assets and are not professional mapping outputs. For measurement-critical work, we recommend photogrammetry, LiDAR or appropriate survey-control workflows. Output accuracy depends on methodology, control and verification.',
    version: 'Version 1.0 · EntireFM Drone · 2026',
    sections: [
      {
        heading: 'What Is a Gaussian Splat?',
        paragraphs: [
          'Gaussian Splatting is a technique for creating photorealistic 3D scenes from overlapping imagery. Unlike traditional 3D models, it represents the scene as millions of small transparent ellipsoids (splats) that together create an immersive, photo-realistic view.',
          'Gaussian Splats are best for: stakeholder engagement, property visualisation, immersive site walkthroughs, heritage capture and public consultation. They are not primarily designed for measurement or professional surveying outputs.',
        ],
      },
      {
        heading: 'What Is Photogrammetry?',
        paragraphs: [
          'Photogrammetry uses overlapping images to calculate 3D geometry. When combined with ground control points (GCPs) and proper methodology, it can produce high-accuracy orthomosaics, point clouds and digital terrain models.',
          'Photogrammetry is best for: site mapping, volumetric surveys, construction monitoring, orthomosaic production and measurement-critical outputs. Accuracy depends on methodology, control and verification.',
        ],
      },
      {
        heading: 'Where LiDAR Fits',
        paragraphs: [
          'LiDAR (Light Detection and Ranging) uses laser pulses to measure precise distances. It excels in environments where photogrammetry struggles — dense vegetation, complex geometry and low-light conditions.',
          'LiDAR is best for: below-canopy terrain mapping, high-density point clouds, infrastructure surveys and applications requiring geometric accuracy regardless of visual texture.',
        ],
      },
      {
        heading: 'Where 360 Panoramas Fit',
        paragraphs: [
          '360 aerial panoramas are lightweight interactive images stitched from multiple shots at a fixed altitude point. They allow viewers to look in any direction from that point but do not create a full 3D reconstruction.',
          '360 panoramas are best for: site context, property marketing, planning consultation and venue overviews where full 3D immersion is not required.',
        ],
      },
      {
        heading: 'Comparison Table',
        table: {
          col1: 'Output',
          col2: 'Best For',
          col3: 'Strengths',
          col4: 'Limitations',
          rows: [
            ['Gaussian Splat', 'Stakeholder engagement, marketing', 'Photorealistic, immersive, web-ready', 'Visualisation only — not measurement-grade'],
            ['Photogrammetry', 'Surveying, mapping, monitoring', 'High-accuracy when controlled, versatile', 'Accuracy requires GCPs and verification'],
            ['LiDAR', 'Infrastructure, terrain, forestry', 'Penetrates canopy, high-density geometry', 'Specialist workflow, higher cost'],
            ['360 Panorama', 'Context, marketing, consultation', 'Lightweight, interactive, web-embeddable', 'Fixed viewpoints — not full 3D'],
            ['Drone Video', 'Marketing, events, media', 'Cinematic, engaging, widely understood', 'No spatial data — visual only'],
          ],
        },
      },
      {
        heading: 'Visualisation vs Measurement — Key Rule',
        warning: 'Gaussian Splats are ideal for visualisation. If your project requires measurement, volume calculations, high-accuracy mapping or engineering data, use photogrammetry or LiDAR with appropriate methodology, control and verification.',
        paragraphs: [
          'The choice between output types depends on what the data needs to do. Immersive stakeholder presentations favour Gaussian Splats. Quantity surveying, engineering and spatial analysis favour photogrammetry or LiDAR.',
          'Many projects benefit from combining approaches — for example, a Gaussian Splat for the client presentation alongside an orthomosaic for the QS team.',
        ],
      },
    ],
  },
  {
    slug: 'drone-survey-cost-guide',
    disclaimer: 'This guide explains cost factors only. No pricing is quoted. Actual project costs depend on site-specific scope, methodology, deliverables, processing, reporting and operational requirements. Request a formal quote for your project.',
    version: 'Version 1.0 · EntireFM Drone · 2026',
    sections: [
      {
        heading: 'Why Drone Project Costs Vary',
        paragraphs: [
          'Flight time is only one element of a drone project. Planning, permissions, processing, reporting, deliverable production and logistics all contribute to the total cost.',
          'A simple aerial photo shoot and a high-accuracy orthomosaic with GCPs and volume analysis are both "drone projects" — but they involve very different workflows, specialist equipment and professional time.',
        ],
      },
      {
        heading: 'Main Cost Drivers',
        items: [
          { label: 'Site size', note: 'Larger sites require longer flights and more processing time' },
          { label: 'Location complexity', note: 'Urban airspace, controlled zones and congested areas add planning time' },
          { label: 'Airspace restrictions', note: 'Permissions, NOTAM filings and co-ordination with ATC where relevant' },
          { label: 'Access and logistics', note: 'Remote sites, difficult terrain and travel time affect mobilisation costs' },
          { label: 'People and property nearby', note: 'Operations over or near the public require additional risk management' },
          { label: 'Deliverables scope', note: 'Raw images cost less than annotated reports; point clouds cost more than orthomosaics' },
          { label: 'Reporting level', note: 'A basic image set is different from a full written inspection summary' },
          { label: 'Processing complexity', note: 'GCP-controlled photogrammetry and LiDAR require more processing time' },
          { label: 'Accuracy requirements', note: 'High-accuracy outputs require additional ground control and verification' },
          { label: 'Thermal or LiDAR sensors', note: 'Specialist payloads add equipment and expertise costs' },
          { label: 'Repeat visits', note: 'Contracted repeat programmes may benefit from pre-agreed pricing' },
          { label: 'Urgency', note: 'Emergency or same-day deployments carry a premium' },
          { label: 'Travel and logistics', note: 'Remote or multi-site projects affect mobilisation' },
        ],
      },
      {
        heading: 'Project Complexity Levels',
        items: [
          { label: 'Simple capture', note: 'Aerial photography, basic site overview imagery' },
          { label: 'Standard commercial project', note: 'Roof inspection, construction progress, basic mapping' },
          { label: 'Reporting / evidence project', note: 'Annotated inspection, insurance evidence, condition summary' },
          { label: 'Technical data project', note: 'GCP-controlled photogrammetry, volumetric survey, orthomosaic' },
          { label: 'Advanced / specialist project', note: 'LiDAR, Gaussian Splat, BVLoS, thermal with full radiometric analysis' },
        ],
      },
      {
        heading: 'How to Reduce Uncertainty Before Quoting',
        checklist: [
          'Provide the full site address and postcode',
          'Define the primary output needed (images, map, report, 3D model)',
          'Share existing drawings, site plans or previous reports',
          'Explain site access and any known restrictions',
          'Confirm deadline or programme constraints',
          'Clarify reporting requirements (who sees it and in what format)',
          'State accuracy requirements if high-accuracy data is needed',
          'Confirm which deliverables are essential vs. optional',
        ],
      },
      {
        heading: 'Questions to Ask Before Comparing Prices',
        checklist: [
          'What deliverables are included in this quote?',
          'Is data processing included or charged separately?',
          'Is a written report included or is it imagery only?',
          'Are images organised, labelled and annotated?',
          'Are accuracy requirements and GCPs scoped?',
          'Is the provider appropriately insured for this site?',
          'Have operational constraints and airspace been reviewed?',
          'Is the quote for the flight only — or for the final usable output?',
        ],
      },
    ],
  },
];

export const getAssetContent = (slug: string): AssetContent | undefined => {
  return assetContent.find(a => a.slug === slug);
};
