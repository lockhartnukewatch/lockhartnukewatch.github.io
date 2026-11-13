// Jekyll-style date formatting. %B %d, %Y -> "May 25, 2026" (zero-padded day,
// matching Jekyll's %d).
export function formatDate(date: Date, locale = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(date);
}
