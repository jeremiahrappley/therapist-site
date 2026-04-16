import { defineCollection, z } from 'astro:content';

const techniques = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().optional().default(99),
  }),
});

export const collections = { techniques };
