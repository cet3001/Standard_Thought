
import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.string(),
  image_url: z.string().optional(),
  image_meta_description: z.string().optional(),
  meta_description: z.string().optional(),
  meta_keywords: z.string().optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
  comments_enabled: z.boolean().default(true),
});

export type PostFormData = z.infer<typeof postSchema>;
