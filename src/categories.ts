// The tabs that show up in the top navigation.
// To add a new category later: add it here AND in the `category` list
// inside src/content.config.ts and public/admin/config.yml.
export const categories = [
  { slug: 'travel', name: 'Travel' },
  { slug: 'stories', name: 'Short Stories' },
] as const;

export function categoryName(slug: string): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}
