import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared schema: everything keeps a `title` (used for <h1>, <title>, sidebar
// links); `date` is only used by `updates`; `external_url` survives from the
// Jekyll sidebar-collection include (links open in a new tab when present).
const docSchema = z.object({
  title: z.string(),
  date: z.date().optional(),
  external_url: z.string().url().optional(),
  // Draft entries are still built and served at their real URL (so the link
  // can be shared privately for review), but are hidden from the sidebar,
  // feeds, RSS, and sitemap.
  draft: z.boolean().default(false),
});

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: docSchema,
});

const topics = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/topics' }),
  schema: docSchema,
});

const archive = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/archive' }),
  schema: docSchema,
});

export const collections = { updates, topics, archive };
