import { getPublishedSeoPages } from '@/lib/seo-registry-mock';

/**
 * Generates a dynamic XML sitemap for SEO landing pages.
 * Only includes published and indexable pages.
 */
export async function GET() {
  const pages = getPublishedSeoPages();
  const baseUrl = 'https://drone.entirefm.com';
  
  // Static pages (could be moved to a central config)
  const staticPages = [
    '',
    '/services',
    '/brief',
    '/bundles',
    '/sectors',
    '/sample-deliverables',
    '/client-portal-demos',
    '/choose-your-output',
    '/pricing-guidance',
    '/project-brief-assistant'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.fullUrl}</loc>
    <lastmod>${page.lastUpdatedDate.split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}
