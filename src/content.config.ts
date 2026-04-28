import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const concepts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/concepts' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().max(180),
    tag: z.enum(['Core', 'Protocol', 'Security', 'Reliability', 'Performance', 'Architecture', 'Operations']),
    level: z.enum(['Essential', 'Intermediate', 'Advanced']),
    icon: z.string(),
    accent: z.string().regex(/^#[0-9a-fA-F]{6}$/),
    methods: z.array(z.string()).optional(),
    order: z.number().int().positive()
  })
});

export const collections = { concepts };
