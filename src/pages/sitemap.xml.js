// Sitemap for all published pages. Not in the original plan, but the
// published branch has a sitemap.xml that robots.txt points at, so we keep
// producing it (Jekyll previously generated it).
import { getCollection } from 'astro:content';

const SITE = new URL('https://www.lockhartnuke.watch');

function entry(path, lastmod) {
  return `  <url>\n    <loc>${new URL(path, SITE).href}</loc>\n    <lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>\n  </url>`;
}

export async function GET() {
  const updates = await getCollection('updates');
  const topics = await getCollection('topics');
  const archive = await getCollection('archive');
  const now = new Date();

  const urls = [
    entry('/', now),
    entry('/about/', now),
    entry('/archive/', now),
    ...archive.map((e) => entry(`/archive/${e.id}/`, e.data.date ?? now)),
    ...topics.map((e) => entry(`/topics/${e.id}/`, e.data.date ?? now)),
    ...updates.map((e) => entry(`/updates/${e.id}/`, e.data.date ?? now)),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join(
    '\n',
  )}\n</urlset>\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
