// RSS feed for the updates collection.
// Served at /feed.xml to match jekyll-feed's published URL (design decision 3).
// Note: the old feed.xml was actually empty — jekyll-feed only covers posts,
// and this site uses a custom `updates` collection, so no entries ever made
// it in. This feed is strictly an improvement; nothing on the site links to
// it (same as before).
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const updates = (await getCollection('updates'))
    .filter((e) => !e.data.draft)
    .sort(
    (a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0),
  );

  return rss({
    title: 'Lockhart Nuke Watch',
    description:
      '"Lockhart Nuke Watch" was started to try and gather information about the Groves Isotope nuclear reactor being built in Lockhart, Texas by Oklo. Find us at on Facebook at https://www.facebook.com/groups/987252890512778.',
    site: context.site,
    items: updates.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      link: `/updates/${entry.id}/`,
      content: entry.body,
    })),
  });
}
