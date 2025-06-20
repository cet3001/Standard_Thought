
import { supabase } from "@/integrations/supabase/client";

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  created_at: string;
  slug: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts');
  }

  return data || [];
};

export const getCategories = async (): Promise<string[]> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('category')
    .eq('published', true);

  if (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }

  const categories = [...new Set(data?.map(post => post.category) || [])];
  return ['All', ...categories];
};

export const generateImage = async (prompt: string): Promise<string> => {
  const { data, error } = await supabase.functions.invoke('generate-image', {
    body: { prompt }
  });

  if (error) {
    console.error('Error generating image:', error);
    throw new Error('Failed to generate image');
  }

  return data.imageUrl;
};
