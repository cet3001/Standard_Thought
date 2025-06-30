
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
  is_editors_pick?: boolean; // New field for editor's pick
  is_popular?: boolean; // New field for popular stories
  view_count?: number; // For tracking popularity
  author_id: string;
  updated_at: string;
  meta_description?: string | null;
  meta_keywords?: string | null;
  comments_enabled?: boolean;
}
