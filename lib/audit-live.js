/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * audit-live.js
 * Fetches live production URLs and scans HTML for prohibited marketing claims.
 * Usage: node lib/audit-live.js
 */

const https = require('https');

const BASE_URL = 'https://tfts.co.uk';

const ROUTES = [
  '/',
  '/services/drone-inspection',
  '/services/roof-inspections',
  '/services/thermal-imaging',
  '/services/events-media',
  '/services/surveying-mapping',
  '/industries/construction',
  '/locations/london',
];

const PROHIBITED_PHRASES = [
  'Eliminate risk',
  'eliminate risk',
  'Eliminate scaffolding',
  'eliminate scaffolding',
  'Eliminate access risk',
  'eliminate access risk',
  '70% cost saving',
  '48H report turnaround',
  '48 Hours',
  '48 hours',
  '±2°C',
  'FLIR radiometric sensor',
  'RICS compatible',
  'Article 16 licensed aerial coverage',
  'Article 16',
  'CAA-approved for operations over crowds',
  'Licensed for crowds',
  '±1CM RTK horizontal accuracy',
  '200HA coverage per day',
  '5 DAY point cloud delivery',
  'Millimetre-accurate',
  'millimetre-accurate',
  'Reduce site walkdown time by 80%',
  'Real-time stakeholder site visibility',
  'CAA Approved',
  'accepted by insurers',
  'insurer acceptance',
];

function fetchUrl(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : require('http');
    mod.get(url, (res) => {
      // Follow redirects
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        if (redirects >= 5) return reject(new Error('Too many redirects'));
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        console.log(`  → Redirect ${res.statusCode}: ${url} → ${next}`);
        res.resume();
        fetchUrl(next, redirects + 1).then(resolve).catch(reject);
        return;
      }

      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data, finalUrl: url }));
    }).on('error', reject);
  });
}

async function main() {
  console.log('=== LIVE PRODUCTION CLAIM AUDIT ===');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Routes to check: ${ROUTES.length}`);
  console.log(`Prohibited phrases: ${PROHIBITED_PHRASES.length}`);
  console.log('');

  // First check headers for deployment info
  console.log('--- DEPLOYMENT HEADERS ---');
  try {
    const homeResp = await fetchUrl(BASE_URL + '/');
    const h = homeResp.headers;
    console.log(`HTTP Status: ${homeResp.statusCode}`);
    console.log(`x-vercel-id: ${h['x-vercel-id'] || 'NOT PRESENT'}`);
    console.log(`x-vercel-cache: ${h['x-vercel-cache'] || 'NOT PRESENT'}`);
    console.log(`x-vercel-deployment-url: ${h['x-vercel-deployment-url'] || 'NOT PRESENT'}`);
    console.log(`x-deployment-id: ${h['x-deployment-id'] || 'NOT PRESENT'}`);
    console.log(`server: ${h['server'] || 'NOT PRESENT'}`);
    console.log(`cache-control: ${h['cache-control'] || 'NOT PRESENT'}`);
    console.log(`age: ${h['age'] || 'NOT PRESENT'}`);
    console.log('');
  } catch(e) {
    console.error(`Failed to fetch headers: ${e.message}`);
  }

  // Now check each route
  console.log('--- ROUTE AUDIT ---');
  let totalFindings = 0;
  const routeResults = [];

  for (const route of ROUTES) {
    const url = BASE_URL + route;
    process.stdout.write(`Checking ${route} ... `);

    try {
      const resp = await fetchUrl(url);
      const body = resp.body;
      const findings = [];

      for (const phrase of PROHIBITED_PHRASES) {
        if (body.includes(phrase)) {
          findings.push(phrase);
        }
      }

      if (findings.length > 0) {
        console.log(`[FAIL] ${findings.length} violations`);
        findings.forEach(f => console.log(`    ✗ Found: "${f}"`));
        totalFindings += findings.length;
      } else {
        console.log(`[PASS] Clean (${body.length} bytes, HTTP ${resp.statusCode}, final: ${resp.finalUrl})`);
      }

      routeResults.push({ route, status: resp.statusCode, findings, bytes: resp.body.length });
    } catch (e) {
      console.log(`[ERROR] ${e.message}`);
      routeResults.push({ route, status: 0, findings: [], error: e.message });
    }
  }

  console.log('');
  console.log('--- SUMMARY ---');
  console.log(`Routes checked: ${ROUTES.length}`);
  console.log(`Total prohibited phrases found: ${totalFindings}`);

  if (totalFindings === 0) {
    console.log('[PASS] Live production HTML is CLEAN. No prohibited claims found.');
  } else {
    console.log('[FAIL] Prohibited claims FOUND in live production HTML.');
    process.exit(1);
  }
}

main().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
