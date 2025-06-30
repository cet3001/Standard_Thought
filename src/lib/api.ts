import { supabase } from '@/integrations/supabase/client'

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  tags: string[];
  featured: boolean;
  created_at: string;
  meta_description: string | null;
  meta_keywords: string | null;
  slug: string;
  comments_enabled: boolean;
  published: boolean;
  author_id: string;
  updated_at: string;
}

export interface Post extends BlogPost {
  theme_tags?: string[];
  is_editors_pick?: boolean;
  is_popular?: boolean;
  view_count?: number;
}

// Type for creating a new blog post - all required fields must be present
export interface CreateBlogPostData {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author_id: string;
  tags?: string[];
  image_url?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
  featured?: boolean;
  published?: boolean;
  comments_enabled?: boolean;
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('getBlogPosts error:', error);
      throw new Error(`Failed to fetch blog posts: ${error.message}`);
    }

    return data || [];
  } catch (error) {
    console.error('getBlogPosts caught error:', error);
    return []; // Return empty array instead of throwing
  }
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('getPosts error:', error);
      throw new Error(`Failed to fetch posts: ${error.message}`);
    }

    const transformedData = (data || []).map(post => ({
      ...post,
      theme_tags: post.tags || [],
      is_editors_pick: post.featured || false,
      is_popular: false,
      view_count: 0
    }));

    return transformedData;
  } catch (error) {
    console.error('getPosts caught error:', error);
    return []; // Return empty array instead of throwing
  }
};

export const getCategories = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('category')
      .eq('published', true);

    if (error) {
      console.error('getCategories error:', error);
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }

    const categories = [...new Set(data?.map(post => post.category) || [])];
    return categories;
  } catch (error) {
    console.error('getCategories caught error:', error);
    return []; // Return empty array instead of throwing
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null;
    }
    console.error('Error fetching blog post:', error);
    throw new Error(`Failed to fetch blog post: ${error.message}`);
  }

  return data;
};

export const createBlogPost = async (postData: CreateBlogPostData): Promise<BlogPost> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert({
      title: postData.title,
      excerpt: postData.excerpt,
      content: postData.content,
      category: postData.category,
      author_id: postData.author_id,
      tags: postData.tags || [],
      image_url: postData.image_url || null,
      meta_description: postData.meta_description || null,
      meta_keywords: postData.meta_keywords || null,
      featured: postData.featured || false,
      published: postData.published || false,
      comments_enabled: postData.comments_enabled !== false,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }

  return data;
};

export const updateBlogPost = async (id: string, updates: Partial<BlogPost>): Promise<BlogPost> => {
  const { data, error } = await supabase
    .from('blog_posts')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }

  return data;
};
