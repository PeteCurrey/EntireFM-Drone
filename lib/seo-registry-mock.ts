import { SeoLandingPage } from './seo-types';

// Mock empty analytics
const defaultAnalytics = {
  impressions: 0,
  clicks: 0,
  ctr: 0,
  averagePosition: 0,
  sessions: 0,
  engagedSessions: 0,
  engagementRate: 0,
  conversions: 0,
  conversionRate: 0,
  formSubmissions: 0,
  callClicks: 0,
  briefingFormStarts: 0,
  briefingFormCompletions: 0,
  topQueries: []
};

const defaultQuality = {
  thinContentWarning: false,
  duplicateRiskWarning: false,
  missingLocalRelevanceWarning: false,
  missingSectorRelevanceWarning: false,
  missingCtaWarning: false,
  missingFaqWarning: false,
  missingBundleLinkWarning: false,
  missingServiceLinkWarning: false,
  missingLocationLinkWarning: false,
  missingSchemaWarning: false,
  overclaimingRiskWarning: false,
  humanReviewRequired: false,
  qualityScore: 85
};

export const mockSeoPages: SeoLandingPage[] = [
  // TYPE 1: SERVICE + LOCATION
  {
    pageId: 'seo-1',
    pageType: 'service_location',
    urlSlug: 'drone-roof-inspections',
    fullUrl: '/drone-services/london/drone-roof-inspections',
    canonicalUrl: 'https://drone.entirefm.com/drone-services/london/drone-roof-inspections',
    parentService: 'roof-inspections',
    parentLocation: 'london',
    targetKeyword: 'drone roof inspection london',
    secondaryKeywords: ['commercial roof survey london', 'drone roof surveyor london'],
    searchIntent: 'Commercial intent - seeking local provider',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'Drone Roof Inspections London | EntireFM Drone',
    metaDescription: 'Commercial drone roof inspections in London. High-resolution condition evidence for facilities management, surveyors and property agents without scaffolding.',
    h1: 'Drone Roof Inspections in London',
    h2Outline: ['Why use drones for London roofs', 'What we capture', 'Deliverables', 'Local constraints and airspace', 'FAQs'],
    wordCount: 850,
    contentUniquenessScore: 92,
    internalLinksCount: 12,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: { ...defaultQuality, qualityScore: 92 },
    analytics: { ...defaultAnalytics, impressions: 1250, clicks: 45, ctr: 0.036, averagePosition: 8.4, sessions: 40, conversions: 2 }
  },
  {
    pageId: 'seo-2',
    pageType: 'service_location',
    urlSlug: 'stockpile-volume-surveys',
    fullUrl: '/drone-services/sheffield/stockpile-volume-surveys',
    canonicalUrl: 'https://drone.entirefm.com/drone-services/sheffield/stockpile-volume-surveys',
    parentService: 'volumetric-surveys',
    parentLocation: 'sheffield',
    targetKeyword: 'stockpile volume surveys sheffield',
    secondaryKeywords: ['drone volumetric survey sheffield', 'quarry stockpile measurement yorkshire'],
    searchIntent: 'Technical service intent - local delivery',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'Stockpile Volume Surveys Sheffield | Accurate Drone Data',
    metaDescription: 'Precise drone-based stockpile volume measurements in Sheffield and South Yorkshire. High-accuracy earthworks data for quarries and construction sites.',
    h1: 'Stockpile Volume Surveys in Sheffield',
    h2Outline: ['Precision Volumetrics in Sheffield', 'Methodology & Accuracy', 'What we measure', 'Data Deliverables', 'FAQs'],
    wordCount: 920,
    contentUniquenessScore: 89,
    internalLinksCount: 10,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: { ...defaultQuality, qualityScore: 89 },
    analytics: { ...defaultAnalytics, impressions: 310, clicks: 18, ctr: 0.058, averagePosition: 5.2, sessions: 15, conversions: 3 }
  },

  // TYPE 2: SERVICE + SECTOR
  {
    pageId: 'seo-3',
    pageType: 'service_sector',
    urlSlug: 'drone-roof-inspections',
    fullUrl: '/industries/facilities-management/drone-roof-inspections',
    canonicalUrl: 'https://drone.entirefm.com/industries/facilities-management/drone-roof-inspections',
    parentService: 'roof-inspections',
    parentSector: 'facilities-management',
    targetKeyword: 'drone roof inspections for facilities managers',
    secondaryKeywords: ['FM drone roof survey', 'drone property inspection for FM'],
    searchIntent: 'B2B service research',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'Drone Roof Inspections for Facilities Management | EntireFM Drone',
    metaDescription: 'Visual roof inspection data for facilities managers. Safer, faster condition reporting for planned maintenance and contractor scoping.',
    h1: 'Drone Roof Inspections for Facilities Management',
    h2Outline: ['FM Roof Inspection Workflows', 'What we capture', 'Reporting Deliverables', 'Recommended Packages', 'FAQs'],
    wordCount: 950,
    contentUniquenessScore: 88,
    internalLinksCount: 8,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: { ...defaultQuality, qualityScore: 88 },
    analytics: { ...defaultAnalytics, impressions: 420, clicks: 12, ctr: 0.028, averagePosition: 12.1, sessions: 10, conversions: 1 }
  },

  // TYPE 3: SERVICE + LOCATION + SECTOR
  {
    pageId: 'seo-4',
    pageType: 'service_location_sector',
    urlSlug: 'drone-roof-inspections',
    fullUrl: '/seo/london/facilities-management/drone-roof-inspections',
    canonicalUrl: 'https://drone.entirefm.com/seo/london/facilities-management/drone-roof-inspections',
    parentService: 'roof-inspections',
    parentLocation: 'london',
    parentSector: 'facilities-management',
    targetKeyword: 'drone roof inspections for facilities managers in london',
    secondaryKeywords: ['london fm drone survey', 'commercial property roof survey london fm'],
    searchIntent: 'Highly specific commercial B2B',
    status: 'Draft',
    indexabilityStatus: 'Noindex',
    seoTitle: 'Drone Roof Inspections for Facilities Managers in London',
    metaDescription: 'Specialist drone roof surveys for London facilities management teams.',
    h1: 'Drone Roof Inspections for Facilities Managers in London',
    h2Outline: ['London FM Context', 'Airspace challenges', 'Deliverables', 'FAQs'],
    wordCount: 300,
    contentUniquenessScore: 40,
    internalLinksCount: 3,
    outboundLinksCount: 0,
    hasSchema: false,
    hasFaq: false,
    sitemapInclusionStatus: false,
    lastUpdatedDate: new Date().toISOString(),
    quality: {
      ...defaultQuality,
      thinContentWarning: true,
      missingFaqWarning: true,
      missingBundleLinkWarning: true,
      humanReviewRequired: true,
      qualityScore: 45
    },
    analytics: defaultAnalytics
  },

  // TYPE 4: OUTCOME
  {
    pageId: 'seo-5',
    pageType: 'outcome',
    urlSlug: 'drone-evidence-for-insurance-claims',
    fullUrl: '/outcomes/drone-evidence-for-insurance-claims',
    canonicalUrl: 'https://drone.entirefm.com/outcomes/drone-evidence-for-insurance-claims',
    targetOutcome: 'Insurance Evidence',
    targetKeyword: 'drone evidence for insurance claims',
    secondaryKeywords: ['drone survey for storm damage', 'aerial roof damage evidence'],
    searchIntent: 'Problem-solving / urgent need',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'Drone Evidence for Insurance Claims | EntireFM Drone',
    metaDescription: 'Rapid aerial evidence capture for property insurance claims. Safe, high-resolution imagery for storm, fire or flood damage assessment.',
    h1: 'Drone Evidence for Property Insurance Claims',
    h2Outline: ['Why use drones for claims', 'Types of damage', 'Deliverables for loss adjusters', 'Response times', 'FAQs'],
    wordCount: 1100,
    contentUniquenessScore: 95,
    internalLinksCount: 15,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: { ...defaultQuality, qualityScore: 95 },
    analytics: { ...defaultAnalytics, impressions: 890, clicks: 65, ctr: 0.073, averagePosition: 4.2, sessions: 60, conversions: 5 }
  },

  // TYPE 5: COST
  {
    pageId: 'seo-6',
    pageType: 'cost',
    urlSlug: 'drone-roof-inspection-cost-uk',
    fullUrl: '/costs/drone-roof-inspection-cost-uk',
    canonicalUrl: 'https://drone.entirefm.com/costs/drone-roof-inspection-cost-uk',
    targetKeyword: 'drone roof inspection cost uk',
    secondaryKeywords: ['how much is a drone roof survey', 'drone inspection pricing factors'],
    searchIntent: 'Commercial research - price intent',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'Drone Roof Inspection Cost UK | Pricing Factors Explained',
    metaDescription: 'Understand the costs of commercial drone roof inspections in the UK. Key pricing factors: site size, airspace, risk and deliverables.',
    h1: 'Drone Roof Inspection Costs in the UK',
    h2Outline: ['Typical pricing factors', 'Site complexity & risk', 'Deliverable requirements', 'Airspace permissions', 'FAQs'],
    wordCount: 1250,
    contentUniquenessScore: 90,
    internalLinksCount: 10,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: { ...defaultQuality, qualityScore: 90 },
    analytics: { ...defaultAnalytics, impressions: 2100, clicks: 120, ctr: 0.057, averagePosition: 6.8, sessions: 110, conversions: 8 }
  },

  // TYPE 6: COMPARISON
  {
    pageId: 'seo-7',
    pageType: 'comparison',
    urlSlug: 'drone-inspection-vs-scaffolding',
    fullUrl: '/compare/drone-inspection-vs-scaffolding',
    canonicalUrl: 'https://drone.entirefm.com/compare/drone-inspection-vs-scaffolding',
    targetKeyword: 'drone inspection vs scaffolding',
    secondaryKeywords: ['drone survey vs traditional access', 'cost comparison scaffolding drone'],
    searchIntent: 'Evaluation - seeking efficiency',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'Drone Inspection vs Scaffolding | Cost & Risk Comparison',
    metaDescription: 'Compare drone roof inspections vs traditional scaffolding. Identify potential cost efficiencies and reduce the need for working-at-height during the initial inspection stage.',
    h1: 'Drone Inspection vs Scaffolding: A Commercial Comparison',
    h2Outline: ['Cost comparison', 'Speed of delivery', 'Risk and safety', 'Data quality differences', 'FAQs'],
    wordCount: 1400,
    contentUniquenessScore: 96,
    internalLinksCount: 18,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: { ...defaultQuality, qualityScore: 96 },
    analytics: { ...defaultAnalytics, impressions: 560, clicks: 48, ctr: 0.085, averagePosition: 3.1, sessions: 45, conversions: 6 }
  },

  // TYPE 7: SOLUTION
  {
    pageId: 'seo-8',
    pageType: 'problem',
    urlSlug: 'inspect-roof-without-scaffolding',
    fullUrl: '/solutions/inspect-roof-without-scaffolding',
    canonicalUrl: 'https://drone.entirefm.com/solutions/inspect-roof-without-scaffolding',
    targetKeyword: 'inspect roof without scaffolding',
    secondaryKeywords: ['non-access roof survey', 'safe building inspection methods'],
    searchIntent: 'Problem solving intent',
    status: 'Published',
    indexabilityStatus: 'Index',
    seoTitle: 'How to Inspect a Roof Without Scaffolding | EntireFM Drone',
    metaDescription: 'Identify the safest, fastest way to inspect commercial roofs without expensive scaffolding or rope access. High-resolution drone condition evidence.',
    h1: 'Inspect Your Commercial Roof Without Scaffolding',
    h2Outline: ['The problem with traditional access', 'The drone solution', 'Who needs this', 'Deliverables', 'FAQs'],
    wordCount: 1050,
    contentUniquenessScore: 91,
    internalLinksCount: 12,
    outboundLinksCount: 0,
    hasSchema: true,
    hasFaq: true,
    sitemapInclusionStatus: true,
    lastUpdatedDate: new Date().toISOString(),
    quality: { ...defaultQuality, qualityScore: 91 },
    analytics: { ...defaultAnalytics, impressions: 420, clicks: 32, ctr: 0.076, averagePosition: 5.5, sessions: 30, conversions: 4 }
  }
];

// Helper to filter/find
export const getSeoPageByUrl = (url: string) => {
  return mockSeoPages.find(p => p.fullUrl === url);
};

export const getSeoPageById = (id: string) => {
  return mockSeoPages.find(p => p.pageId === id);
};

export const getPublishedSeoPages = () => {
  return mockSeoPages.filter(p => p.status === 'Published' && p.indexabilityStatus === 'Index');
};

export const getPagesRequiringImprovement = () => {
  return mockSeoPages.filter(p => p.quality.qualityScore < 75 || p.quality.thinContentWarning);
};
