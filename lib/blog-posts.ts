// lib/blog-posts.ts

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  category: 'Drone Inspections' | 'Roof & Building Surveys' | 'Surveying & Mapping' | 'Thermal Imaging' | 'Construction Monitoring' | 'Insurance Evidence' | 'TFTS 3D & 3D Capture' | 'Aerial Photography & Film' | 'Facilities Management' | 'Solar & Energy' | 'Regulations & Planning' | 'Buyer Guides'
  excerpt: string
  content: string
  image: string
  readTime: string
  relatedServices: string[]
  relatedBundle?: { name: string; slug: string }
  faqs: { q: string; a: string }[]
  metaDescription: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'drone-roof-inspections-commercial-property-guide',
    title: 'Drone Roof Inspections: What Commercial Property Teams Need to Know',
    date: '2024-05-01',
    author: 'Operations Team',
    category: 'Roof & Building Surveys',
    excerpt: 'Learn how drone roof inspections support landlords, facilities managers, insurers and commercial property teams with detailed condition evidence.',
    metaDescription: 'Comprehensive guide to commercial drone roof inspections in the UK. Discover what can be inspected, common defects identified, and how drones reduce scaffolding needs.',
    readTime: '8 min',
    image: '/images/blog/roof-inspection-guide.jpg',
    relatedServices: ['roof-inspections', 'building-envelope-inspections', 'thermal-imaging'],
    relatedBundle: { name: 'Roof Intelligence Pack', slug: 'roof-intelligence-pack' },
    content: `
## What is a drone roof inspection?
A drone roof inspection is a non-destructive visual and/or thermal assessment of a building's roof using high-resolution UAV sensors. It provides property teams with a safe, rapid, and cost-effective way to identify defects, leaks, and condition issues without the immediate need for scaffolding or mobile platforms.

## What can be inspected?
Our drone systems can capture high-detail imagery of:
- Flat and pitched roof coverings (slate, tile, membrane, felt)
- Gutters, downpipes, and drainage systems
- Chimneys, parapets, and coping stones
- Roof plant, HVAC units, and solar arrays
- Skylights, flashings, and valleys

## What defects can drone imagery help identify?
Detailed 45MP+ imagery and radiometric thermal data can reveal:
- Slipped or broken tiles and slates
- Blocked gutters and vegetation growth
- Cracks in flashings or mortar joints
- Standing water and drainage failures
- Thermal anomalies indicating moisture ingress or heat loss

## When drones reduce the need for scaffolding
Drones are ideal for initial condition audits, PPM (Planned Preventative Maintenance) checks, and insurance evidence capture. By using drones first, property teams can often reduce the disruption and high cost of scaffolding for the "finding the problem" stage.

## When physical access may still be needed
While drones are exceptional for inspection, they cannot carry out repairs. Once a defect is identified and scoped via drone, targeted access (such as a cherry picker or localized scaffolding) can be deployed specifically where work is required, rather than scaffolding the entire building.

## What deliverables do clients receive?
- High-resolution visual image sets
- Annotated defect maps and reports
- Thermal moisture ingress maps (where requested)
- Digital twin-style 3D visual models for estate records

## Typical project considerations
Drone operations are subject to airspace, weather, site access, permissions, nearby people and property, and operational safety requirements. Our team manages all planning and permissions to ensure a compliant deployment.
    `,
    faqs: [
      { q: 'Can a drone see through the roof?', a: 'No, but a thermal drone can detect temperature differences that indicate moisture trapped beneath a membrane, which often suggests a leak.' },
      { q: 'How high can the drone fly?', a: 'Standard commercial drone flights are limited to 400ft (120m), which is more than enough for even the tallest commercial properties in the UK.' },
      { q: 'Do you need to go inside the building?', a: 'Generally no. All capture is external, although we may require access to the roof for ground-based verification if safe to do so.' }
    ]
  },
  {
    slug: 'can-drone-inspections-replace-scaffolding',
    title: 'Can Drone Inspections Replace Scaffolding or MEWPs?',
    date: '2024-04-25',
    author: 'Compliance Lead',
    category: 'Buyer Guides',
    excerpt: 'Discover how drones can reduce the need for expensive access equipment during initial building inspections and condition audits.',
    metaDescription: 'Learn where drones can replace scaffolding for inspections, the cost benefits, and when physical access is still required for commercial property maintenance.',
    readTime: '6 min',
    image: '/images/blog/drone-vs-scaffolding.jpg',
    relatedServices: ['drone-inspection', 'roof-inspections'],
    relatedBundle: { name: 'Roof Intelligence Pack', slug: 'roof-intelligence-pack' },
    content: `
## Where drones can reduce access requirements
For traditional building inspections, the most significant cost is often the access equipment—scaffolding, MEWPs (cherry pickers), or rope access teams. Drones can replace these requirements for the entire inspection phase, providing high-resolution evidence for:
- Five-year condition audits
- Post-storm damage assessments
- Periodic gutter and drainage checks
- Scoping repair work for contractors

## What drones can capture safely
Modern industrial drones can hover inches from a building envelope, capturing details that a surveyor on a ladder might miss. With high-zoom lenses and thermal sensors, we can document every bolt, crack, and tile from the safety of the ground.

## When scaffolding or MEWPs may still be required
It is important to distinguish between **inspection** and **repair**. Drones can identify a defect, but they cannot fix it. Scaffolding is still necessary for carrying out physical repairs, structural testing that requires "hands-on" contact, or where internal access is the only route.

## Cost and disruption benefits
By using a drone first:
- **Cost**: Save £3,000–£10,000+ on initial scaffolding costs.
- **Disruption**: No street permits, no pavement closures, and no intrusive equipment around the building for weeks.
- **Speed**: An inspection that takes a week to scaffold can be completed in hours by a drone.

## Insurance and contractor evidence
Drone data provides an indisputable record of condition. This is invaluable when briefing contractors (so they know exactly what they are fixing) and when submitting insurance claims for storm or fire damage.
    `,
    faqs: [
      { q: 'Can drones always replace scaffolding?', a: 'No. Drones are for inspection. If you need to physically repair the roof or facade, you will still need safe access equipment.' },
      { q: 'Is drone inspection safer than scaffolding?', a: 'Yes, because it removes the need for people to work at height during the risk-assessment phase.' }
    ]
  },
  {
    slug: 'drone-survey-cost-uk',
    title: 'How Much Does a Drone Survey Cost in the UK?',
    date: '2024-04-20',
    author: 'Operations Team',
    category: 'Buyer Guides',
    excerpt: 'A commercial guide to drone survey pricing, covering location, airspace, risk and deliverable factors.',
    metaDescription: 'Understand the factors that influence drone survey costs in the UK. From day rates to complex urban permissions and high-end 3D deliverables.',
    readTime: '7 min',
    image: '/images/blog/pricing-guide.jpg',
    relatedServices: ['surveying-mapping', 'orthomosaic-mapping', 'volumetric-surveys'],
    relatedBundle: { name: 'Survey Data Pack', slug: 'survey-data-pack' },
    content: `
## Why pricing varies
Drone survey pricing is not a single "off-the-shelf" figure. It is based on the complexity of the operation, the risk profile of the site, and the technical value of the output. A simple "drone photo" is very different from a high-accuracy, RTK-corrected point cloud.

## Key cost factors
- **Location & Airspace**: Operations in Central London or near major airports involve significant planning and permit costs.
- **Site Size**: A 1-acre site vs a 100-acre infrastructure corridor impacts flight time and processing.
- **Risk Profile**: Flying over busy public areas requires additional safety personnel and planning.
- **Deliverables**: Raw photos are included; 3D meshes, CAD drawings, and volume reports require professional post-processing.
- **Accuracy**: High-accuracy results using Ground Control Points (GCPs) and RTK systems increases the technical requirement.

## Inspection vs Mapping vs Media vs 3D Capture
Each service uses different hardware and software. A TFTS 3D or a Digital Twin requires significantly more processing time and data than a standard roof inspection set.

## Why cheap drone flights are not the same as usable deliverables
The UK market has many hobbyist operators. For commercial clients, the value is in the **data reliability, insurance, and compliance**. A "cheap" flight often lacks the technical metadata, accuracy, and professional reporting required for engineering or legal use.

## When to request a quote
We recommend requesting a quote as soon as you have a site location and a clear idea of the required outcome. We can then calculate the logistical requirements and provide a fixed-price proposal.
    `,
    faqs: [
      { q: 'Do you charge by the hour or by the project?', a: 'We typically provide fixed-price project quotes to give our clients budget certainty.' },
      { q: 'Is there a discount for multi-site portfolios?', a: 'Yes, we offer portfolio rates for clients with assets across multiple UK locations.' }
    ]
  },
  {
    slug: 'drone-thermal-imaging-surveys-guide',
    title: 'Drone Thermal Imaging Surveys: Uses, Limits and Best Practice',
    date: '2024-04-15',
    author: 'Renewables Lead',
    category: 'Thermal Imaging',
    excerpt: 'Understand how radiometric thermal capture identifies moisture, heat loss and electrical anomalies.',
    metaDescription: 'Expert guide to drone thermal surveys in the UK. Learn about uses in FM, solar inspections, and roof leak detection, along with technical limitations.',
    readTime: '9 min',
    image: '/images/blog/thermal-guide.jpg',
    relatedServices: ['thermal-imaging', 'solar-panel-inspections'],
    relatedBundle: { name: 'Solar & Energy Asset Pack', slug: 'solar-energy-asset-pack' },
    content: `
## What thermal drone imaging is
Thermal drone capture uses radiometric sensors to detect heat signatures (Infrared) instead of visible light. Each pixel in a radiometric image contains a temperature value, allowing for precise thermal analysis of building envelopes and industrial assets.

## Common commercial uses
- **Heat Loss**: Identifying thermal anomalies in large commercial warehouses.
- **Roof Anomalies**: Finding moisture trapped under membrane roofs (which retains heat differently than dry areas).
- **Solar Panels**: Identifying failing cells, strings, or bypass diodes that impact generation.
- **Electrical Assets**: Monitoring transformers, substations, and high-voltage lines for hotspots.

## What thermal imaging can indicate
Thermal data identifies temperature anomalies. These anomalies "point" to potential problems—such as a leak, a short circuit, or a missing insulation panel—that are invisible to the naked eye.

## What it cannot prove alone
Thermal imaging is a powerful diagnostic tool, but it should be interpreted in context. A "hotspot" on a roof might be a leak, or it could be an internal heat source like a boiler vent. Professional interpretation is essential.

## Conditions required for useful thermal capture
Thermal surveys are highly sensitive to weather. For roof moisture surveys, we typically fly at night or in the evening during a "thermal crossover" when the roof surface is cooling but trapped water is still warm.

## Deliverables
Clients receive high-resolution radiometric JPEGs or TIFFs, annotated thermal reports, and often a "side-by-side" comparison with visual 4K imagery for context.
    `,
    faqs: [
      { q: 'Can you do thermal surveys in the rain?', a: 'No. Rain and moisture on the surface "wash out" the thermal signature, making the data useless.' },
      { q: 'Is it better to fly at night?', a: 'For building heat loss and roof moisture, night or twilight is often best to avoid solar loading (heat from the sun).' }
    ]
  },
  {
    slug: 'drone-insurance-evidence-damage-surveys',
    title: 'Using Drones for Insurance Evidence and Damage Surveys',
    date: '2024-04-10',
    author: 'Operations Team',
    category: 'Insurance Evidence',
    excerpt: 'Learn how drone capture provides indisputable evidence for insurance claims and loss adjustment.',
    metaDescription: 'Discover how drones support insurance claims for storm, fire, and flood damage. Professional evidence packs for loss adjusters and property owners.',
    readTime: '6 min',
    image: '/images/blog/insurance-damage.jpg',
    relatedServices: ['insurance-loss-adjuster-surveys'],
    relatedBundle: { name: 'Insurance & Incident Evidence Pack', slug: 'insurance-incident-evidence-pack' },
    content: `
## Why drone evidence is useful
Following an incident—whether a storm, fire, or flood—the primary challenge is safely documenting the damage. Drones allow for immediate, high-resolution visual records of areas that are too dangerous or inaccessible for manual inspection.

## Common use cases
- **Storm Damage**: Documenting dislodged tiles, failed flashings, or structural impact after high winds.
- **Fire Damage**: Safely inspecting roof structures and upper floors without entering an unstable building.
- **Flood Evidence**: Documenting the extent of water ingress and site impact.
- **Liability Support**: Providing visual context for third-party damage or site incidents.

## What images can show
Our 45MP+ imagery can zoom in to see individual screws, cracks, and material failures. This level of detail is critical for loss adjusters to accurately value a claim.

## Annotated evidence packs
We don't just provide photos. We provide a structured "Evidence Pack" with annotated images, GPS-tagged locations, and a clear breakdown of the identified damage.

## Urgent response limitations
While we aim for rapid deployment, all flights are subject to Pilot availability, safe weather conditions, and CAA airspace clearance. Safety remains the priority in post-incident environments.

## Working with contractors and insurers
Drone data can be shared directly with your insurer and your chosen repair contractor, ensuring everyone is looking at the same evidence. This speeds up the scoping and approval process.
    `,
    faqs: [
      { q: 'Will my insurer accept drone photos?', a: 'Most major insurers now accept and even prefer drone evidence for high-level damage as it is safer and more detailed than traditional methods.' },
      { q: 'Can you fly in high winds after a storm?', a: 'Drones have specific wind limits. We monitor conditions to ensure we fly at the first safe opportunity.' }
    ]
  },
  {
    slug: 'gaussian-splat-vs-photogrammetry',
    title: 'TFTS 3D vs Photogrammetry: Which 3D Capture Output Do You Need?',
    date: '2024-04-05',
    author: 'Digital Construction',
    category: 'TFTS 3D & 3D Capture',
    excerpt: 'A comparison of the two leading 3D drone capture technologies for commercial sites.',
    metaDescription: 'Compare TFTS 3D modelling and Photogrammetry for 3D site visualisation. Learn the strengths, weaknesses, and commercial use cases for each.',
    readTime: '8 min',
    image: '/images/blog/splat-vs-photo.jpg',
    relatedServices: ['tfts-3d', 'photogrammetry'],
    relatedBundle: { name: 'Immersive Digital Capture Pack', slug: 'immersive-digital-capture-pack' },
    content: `
## What is a TFTS 3D?
A TFTS 3D is a photorealistic 3D scene reconstructed from images. Unlike a mesh, it preserves lighting, transparency, and complex material properties, making it feel like you are "walking through" a real photo.

## What is photogrammetry?
Photogrammetry is the science of making measurements from photographs. It produces 3D meshes, point clouds, and orthomosaic maps that are geometrically accurate and measurable.

## Strengths of TFTS 3D
- **Visual Realism**: Unmatched photorealistic quality.
- **Immersive**: Best for stakeholder engagement and marketing.
- **Speed**: Often faster to process into a viewable scene than a complex high-res mesh.

## Strengths of photogrammetry
- **Measurable**: Ideal for volume calculations, distances, and survey work.
- **Structured**: Can be exported to CAD, BIM, and GIS software.
- **Established**: A proven workflow for engineering and construction.

## Visualisation vs Measurement
If your goal is to show a client a site and make them "feel" the space, choose a TFTS 3D. If your goal is to measure the site or integrate it into a design workflow, choose photogrammetry.

## Commercial use cases
- **TFTS 3D**: Property marketing, public consultation, heritage records.
- **Photogrammetry**: Topographical surveys, earthworks monitoring, as-built records.
    `,
    faqs: [
      { q: 'Can you have both?', a: 'Yes! We often capture for both workflows in a single flight to provide the best of both worlds—visual impact and technical data.' },
      { q: 'Is a TFTS 3D suitable for professional surveying?', a: 'Not by default. It is a visualisation asset. For measurements, we use high-accuracy photogrammetry or LiDAR where scoped.' }
    ]
  },
  {
    slug: 'what-is-an-orthomosaic-map',
    title: 'What Is an Orthomosaic Map and When Do You Need One?',
    date: '2024-03-30',
    author: 'Survey Department',
    category: 'Surveying & Mapping',
    excerpt: 'Understand the power of high-resolution, measurable aerial site maps for construction and land management.',
    metaDescription: 'Learn what an orthomosaic map is, how it differs from standard aerial photography, and its uses in construction, surveying, and estate management.',
    readTime: '5 min',
    image: '/images/blog/ortho-map-guide.jpg',
    relatedServices: ['orthomosaic-mapping', 'surveying-mapping'],
    relatedBundle: { name: 'Survey Data Pack', slug: 'survey-data-pack' },
    content: `
## What an orthomosaic is
An orthomosaic is a geometrically corrected "super-photo" created from hundreds of overlapping drone images. It has been processed to remove perspective distortion, meaning the scale is uniform across the entire map—allowing you to measure distances and areas directly from the image.

## How it differs from a normal aerial photo
A normal photo has perspective; the further something is from the centre, the more distorted it becomes. An orthomosaic is "orthorectified," making it act like a map where every pixel is correctly positioned in space.

## When clients use orthomosaics
- **Construction**: Planning site logistics, tracking progress, and communicating with stakeholders.
- **Land Management**: Mapping large estates, forestries, or agricultural land.
- **Utilities**: Mapping pipeline or cable corridors with high visual context.
- **Infrastructure**: Documenting the "as-built" state of a site at the end of a project.

## Accuracy and control considerations
For simple visual planning, a standard drone GPS map is often enough. For engineering-grade accuracy, we use RTK (Real-Time Kinematic) drones and Ground Control Points (GCPs) to tie the map to the real-world coordinate system.

## Deliverables and formats
Orthomosaics are typically delivered as GeoTIFF files for use in GIS/CAD software, or as high-resolution JPEGs/PDFs for general site meetings and digital records.
    `,
    faqs: [
      { q: 'Can I measure a building roof from an orthomosaic?', a: 'Yes, provided the map was captured and processed with suitable accuracy and overlap.' },
      { q: 'How often should I map my site?', a: 'For active construction, we recommend monthly or fortnightly mapping to keep your site records current.' }
    ]
  },
  {
    slug: 'drone-photogrammetry-commercial-sites',
    title: 'Drone Photogrammetry Explained for Commercial Sites',
    date: '2024-03-25',
    author: 'Digital Construction',
    category: 'TFTS 3D & 3D Capture',
    excerpt: 'Discover how 3D drone models are built and why they are becoming essential for modern project management.',
    metaDescription: 'Explore the world of drone photogrammetry for commercial sites. Learn about 3D meshes, point clouds, and how this data integrates into BIM and CAD workflows.',
    readTime: '7 min',
    image: '/images/blog/photogrammetry-guide.jpg',
    relatedServices: ['photogrammetry', 'surveying-mapping'],
    relatedBundle: { name: 'Survey Data Pack', slug: 'survey-data-pack' },
    content: `
## What photogrammetry is
Photogrammetry is the process of extracting 3D information from 2D photographs. By capturing a site from hundreds of different angles, software can triangulate the position of millions of points to build a "Digital Twin" of the environment.

## Typical outputs
- **3D Mesh**: A photorealistic textured model of the site or building.
- **Point Cloud**: A set of millions of X,Y,Z coordinates used by surveyors and engineers.
- **DSM/DTM**: Digital Surface and Terrain Models showing the topography of the land.
- **Orthomosaic**: A measurable high-resolution aerial map.

## Accuracy considerations
Professional photogrammetry is far more than just "flying a drone." It requires careful flight path planning, high-overlap capture, and the use of RTK or GCPs to ensure the resulting model matches the real world to within centimetres.

## Uses in construction, property and heritage
- **Construction**: As-built vs As-designed comparisons.
- **Property**: Creating immersive 3D records of assets for management and marketing.
- **Heritage**: Digitally preserving listed structures in high detail for future generations.

## Integration into BIM and CAD
Our outputs are compatible with major industry software including Autodesk Revit, Civil 3D, Navisworks, and ArcGIS, allowing for seamless integration into your existing technical workflows.
    `,
    faqs: [
      { q: 'Is photogrammetry better than LiDAR?', a: 'It depends on the site. Photogrammetry is often better for visual detail; LiDAR is better for penetrating vegetation to see the ground.' },
      { q: 'Can you provide a 3D model of my building?', a: 'Yes, we specialise in building envelope and roof photogrammetry for commercial property.' }
    ]
  },
  {
    slug: 'drone-surveys-for-facilities-managers',
    title: 'Drone Surveys for Facilities Managers',
    date: '2024-03-20',
    author: 'Operations Team',
    category: 'Facilities Management',
    excerpt: 'Why FM teams are using drone intelligence to manage large estates, roofs and facades safely.',
    metaDescription: 'Learn how drone surveys support facilities management teams with PPM, roof audits, contractor scoping, and insurance compliance across commercial portfolios.',
    readTime: '6 min',
    image: '/images/blog/fm-drone-guide.jpg',
    relatedServices: ['facilities-management-inspections', 'roof-inspections', 'building-envelope-inspections'],
    relatedBundle: { name: 'Roof Intelligence Pack', slug: 'roof-intelligence-pack' },
    content: `
## Why FM teams use drones
Facilities Management is about risk and efficiency. Drones address both by removing the need for people to work at height for simple inspections and providing data much faster than traditional methods.

## Key FM applications
- **PPM (Planned Preventative Maintenance)**: Regular roof and gutter checks to catch issues before they become leaks.
- **Facade Inspections**: Checking the condition of cladding, glazing, and seals on high-rise buildings.
- **Contractor Scoping**: Getting clear photos of a defect so you can get an accurate quote for repair.
- **Insurance Compliance**: Maintaining a visual record of asset condition for your insurance policy.

## Portfolio inspections
For FM companies managing multiple sites, drones allow for a consistent, centralized record of all assets. Instead of different surveyors sending different reports, you get standardized high-res imagery and data across the whole portfolio.

## Deliverables for FM
We provide PDF inspection summaries, annotated image sets showing prioritized defects (Red/Amber/Green), and access to a digital portal where you can view and share the findings with your team.
    `,
    faqs: [
      { q: 'Can drones inspect the inside of our warehouse?', a: 'Yes, we have specialist indoor drone systems designed to fly in internal environments without GPS.' },
      { q: 'How much notice do you need for a survey?', a: 'While we can often respond rapidly, 1–2 weeks is ideal for full airspace and site planning.' }
    ]
  },
  {
    slug: 'construction-drone-monitoring-guide',
    title: 'Construction Drone Monitoring: What Developers and Contractors Receive',
    date: '2024-03-15',
    author: 'Digital Construction',
    category: 'Construction Monitoring',
    excerpt: 'A guide to repeat drone monitoring for construction sites, from progress photos to as-built mapping.',
    metaDescription: 'Discover the value of repeat construction drone monitoring. Learn about progress archives, stakeholder reporting, and site logistics mapping for developers.',
    readTime: '7 min',
    image: '/images/blog/construction-monitoring.jpg',
    relatedServices: ['construction-monitoring', 'surveying-mapping'],
    relatedBundle: { name: 'Construction Progress Pack', slug: 'construction-progress-pack' },
    content: `
## What construction drone monitoring is
It is the process of capturing a site at regular intervals (monthly, fortnightly, or weekly) to create a visual and technical archive of progress. This is used for reporting, site management, and stakeholder communication.

## What you receive
- **High-res Progress Photos**: Consistent shots from the same aerial viewpoints every visit.
- **360 Site Views**: Interactive panoramas showing the whole site from the air.
- **Site Maps (Orthomosaics)**: Measurable maps for logistics and planning.
- **Video Overviews**: Short, edited clips for stakeholder and investor updates.

## Stakeholder reporting and investor updates
Drones provide a level of context that ground-based photos cannot match. Showing an investor the "big picture" of a project's progress builds confidence and provides a professional record of delivery.

## Site logistics mapping
Drones are excellent for planning where cabins, cranes, and material stores should go. By having a current, accurate aerial map, site managers can avoid logistics errors and improve site safety.

## Dispute and variation support
Having a dated, high-resolution archive of every stage of a build is the best defense against disputes over "when a certain work was completed" or "what the site looked like" at a specific point in time.
    `,
    faqs: [
      { q: 'Do you fly on active construction sites?', a: 'Yes, our pilots are CSCS site certified and follow strict safety protocols for operating on active sites.' },
      { q: 'Can the data be integrated into Procore?', a: 'Yes, we provide standard image and map formats that integrate directly into most project management software.' }
    ]
  }
]
