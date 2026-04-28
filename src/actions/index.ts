import { defineAction } from 'astro:actions';
import { z } from 'zod';

export const server = {
  subscribe: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email()
    }),
    handler: async ({ email }) => {
      return {
        ok: true,
        message: `Subscribed ${email} to Astro Concepts Weekly.`
      };
    }
  })
};
