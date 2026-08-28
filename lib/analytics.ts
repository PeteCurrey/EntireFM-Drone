/**
 * TFTS Drone Analytics Engine
 * Provides first-party attribution, session management, and event tracking.
 */

export interface AnalyticsEvent {
  event_name: string;
  visitor_id: string;
  session_id: string;
  timestamp: string;
  page_url: string;
  page_title: string;
  page_type?: string;
  source_page?: string;
  source_cta?: string;
  service?: string;
  location?: string;
  sector?: string;
  bundle?: string;
  output_family?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  device_type?: string;
  browser?: string;
  score?: number;
  asset_name?: string;
  asset_slug?: string;
  source_asset?: string;
  properties_json?: Record<string, unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface AttributionData {
  first_touch_url: string;
  first_touch_source: string;
  first_touch_medium: string;
  first_touch_campaign: string;
  last_touch_url: string;
  last_touch_source: string;
  last_touch_medium: string;
  last_touch_campaign: string;
  journey_summary: string[];
}

const STORAGE_KEYS = {
  VISITOR_ID: 'ah_visitor_id',
  SESSION_ID: 'ah_session_id',
  FIRST_TOUCH: 'ah_first_touch',
  SESSION_START: 'ah_session_start',
  JOURNEY: 'ah_journey_timeline',
  UTMS: 'ah_active_utms',
};

/**
 * Generate a unique ID
 */
function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Get or create visitor ID
 */
export function getVisitorId() {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem(STORAGE_KEYS.VISITOR_ID);
  if (!id) {
    id = `v_${generateId()}`;
    localStorage.setItem(STORAGE_KEYS.VISITOR_ID, id);
  }
  return id;
}

/**
 * Get or create session ID
 */
export function getSessionId() {
  if (typeof window === 'undefined') return '';
  let id = sessionStorage.getItem(STORAGE_KEYS.SESSION_ID);
  if (!id) {
    id = `s_${generateId()}`;
    sessionStorage.setItem(STORAGE_KEYS.SESSION_ID, id);
    sessionStorage.setItem(STORAGE_KEYS.SESSION_START, new Date().toISOString());
  }
  return id;
}

/**
 * Capture and store UTM parameters from the URL
 */
export function captureUtms() {
  if (typeof window === 'undefined') return null;
  const urlParams = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};
  
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(param => {
    const value = urlParams.get(param);
    if (value) utms[param] = value;
  });

  if (Object.keys(utms).length > 0) {
    localStorage.setItem(STORAGE_KEYS.UTMS, JSON.stringify(utms));
    
    // If it's the first time we see UTMs, it's the first touch
    if (!localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH)) {
      localStorage.setItem(STORAGE_KEYS.FIRST_TOUCH, JSON.stringify({
        url: window.location.href,
        utms,
        timestamp: new Date().toISOString()
      }));
    }
  }
  
  return utms;
}

/**
 * Get current attribution context
 */
export function getAttributionContext(): AttributionData {
  if (typeof window === 'undefined') return {} as AttributionData;

  const firstTouchRaw = localStorage.getItem(STORAGE_KEYS.FIRST_TOUCH);
  const firstTouch = firstTouchRaw ? JSON.parse(firstTouchRaw) : null;
  
  const currentUtmsRaw = localStorage.getItem(STORAGE_KEYS.UTMS);
  const currentUtms = currentUtmsRaw ? JSON.parse(currentUtmsRaw) : {};

  const journey = JSON.parse(localStorage.getItem(STORAGE_KEYS.JOURNEY) || '[]');

  return {
    first_touch_url: firstTouch?.url || '',
    first_touch_source: firstTouch?.utms?.utm_source || 'direct',
    first_touch_medium: firstTouch?.utms?.utm_medium || 'none',
    first_touch_campaign: firstTouch?.utms?.utm_campaign || 'none',
    last_touch_url: window.location.href,
    last_touch_source: currentUtms.utm_source || document.referrer || 'direct',
    last_touch_medium: currentUtms.utm_medium || 'referral',
    last_touch_campaign: currentUtms.utm_campaign || 'none',
    journey_summary: journey
  };
}

/**
 * Add a step to the user journey timeline
 */
export function recordJourneyStep(label: string) {
  if (typeof window === 'undefined') return;
  const journey = JSON.parse(localStorage.getItem(STORAGE_KEYS.JOURNEY) || '[]');
  const entry = `${new Date().toLocaleTimeString()} - ${label}`;
  if (journey[journey.length - 1] !== entry) {
    journey.push(entry);
    localStorage.setItem(STORAGE_KEYS.JOURNEY, JSON.stringify(journey.slice(-20))); // Keep last 20 steps
  }
}

/**
 * Primary event tracking function
 */
export async function trackEvent(eventName: string, properties: Partial<AnalyticsEvent> = {}) {
  if (typeof window === 'undefined') return;

  const event: AnalyticsEvent = {
    event_name: eventName,
    visitor_id: getVisitorId(),
    session_id: getSessionId(),
    timestamp: new Date().toISOString(),
    page_url: window.location.href,
    page_title: document.title,
    referrer: document.referrer,
    ...properties
  };

  // 1. Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event: ${eventName}]`, event);
  }

  // 2. Mirror to GA4 if present
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((window as any).gtag) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag('event', eventName, properties);
  }

  // 3. Save to first-party internal database
  try {
    await fetch('/api/analytics/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });
  } catch (err) {
    // Fail silently in public UI to avoid disruption
    console.error('Analytics Capture Failed:', err);
  }
}
