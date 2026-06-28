import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One blog post = one Markdown file in src/content/posts/
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    category: z.enum(['travel', 'stories']),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
