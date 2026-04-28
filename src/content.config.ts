import { defineCollection, z } from 'astro:content';

const concepts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().max(180),
    tag: z.enum(['Architecture', 'Data', 'Integration', 'Security', 'UX']),
    level: z.enum(['Core', 'Advanced']),
    icon: z.string(),
    order: z.number().int().positive()
  })
});

export const collections = { concepts };
