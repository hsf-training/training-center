import { existsSync } from "node:fs";
import { defineCollection, reference } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";
import { parse } from "yaml";

// URL, or an empty string when there is nothing to link to
const optionalUrl = z.union([z.url(), z.literal("")]).default("");

// Each entry in data/data.yaml is validated against this schema at build time
const tutorials = defineCollection({
  // Record each entry's position, so that the file order can be kept
  loader: file("data/data.yaml", {
    parser: (text) => parse(text).map((tut, order) => ({ ...tut, order })),
  }),
  schema: z.strictObject({
    id: z.string(),
    order: z.number(),
    name: z.string(),
    description: z.string(),
    webpage: z.url(),
    repository: optionalUrl,
    videos: optionalUrl,
    status: z.enum(["stable", "beta", "alpha"]),
    image: z
      .string()
      .refine((name) => existsSync(`src/images/${name}`), {
        error: (issue) => `Image not found in src/images: ${issue.input}`,
      })
      .optional(),
    language: z.array(z.string()).optional(),
    level: z.array(z.enum(["beginner", "advanced"])).optional(),
  }),
});

// Each module id must match the id of an entry in data/data.yaml
const curricula = defineCollection({
  loader: file("data/curricula.yaml"),
  schema: z.strictObject({
    id: z.string(),
    title: z.string(),
    groups: z.array(
      z.strictObject({
        name: z.string(),
        description: z.string(),
        modules: z.array(z.strictObject({ id: reference("tutorials") })),
      }),
    ),
  }),
});

export const collections = { tutorials, curricula };
