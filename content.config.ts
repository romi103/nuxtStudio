import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    emailTemplates: defineCollection({
      type: "data",
      source: "email-templates/**/*",
      schema: z.object({
        contentId: z.enum(["type1", "type2", "type3"]),
        brandColor: z.string(),
        brandFont: z.string(),
        pinType: z.string(),
        terms: z.string(),
        redemptions: z.string(),
        avatar: z.object({
          src: z.string().editor({ input: "media" }),
          alt: z.string(),
        }),
      }),
    }),
  },
});
