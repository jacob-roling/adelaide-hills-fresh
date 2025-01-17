
/**
 * @param {URL} sitemapURL 
 */
const getRobotsTxt = (sitemapURL) => `User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}`;

/**
 * @type {import("astro").APIRoute}
 */
export const GET = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site);
  return new Response(getRobotsTxt(sitemapURL));
};
