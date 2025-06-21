
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  tags: string[];
  theme_tags?: string[]; // New field for theme-based tags
  featured: boolean;
  published: boolean;
  created_at: string;
  slug: string;
}
