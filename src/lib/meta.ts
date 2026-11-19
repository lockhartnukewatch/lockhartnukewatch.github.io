// Meta-description fallback for pages without an explicit `description`
// frontmatter field: first ~160 chars of the article body with markdown
// syntax stripped.

export function excerpt(body: string | undefined, max = 160): string {
  if (!body) return '';
  const text = body
    .replace(/```[\s\S]*?(```|$)/g, ' ') // fenced code blocks
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> link text
    .replace(/^#{1,6}\s.*$/gm, ' ') // headings
    .replace(/^\[[^\]]+\]:\s.*$/gm, ' ') // link definitions
    .replace(/\[([^\]]+)\](?!\()/g, '$1') // reference-style links
    .replace(/[*_`~>|-]+/g, ' ') // emphasis, lists, blockquotes, hr
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, '')}…`;
}
