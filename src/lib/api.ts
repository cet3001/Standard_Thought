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
  console.log('API: Starting getBlogPosts request...');
  
  try {
    // First check if we can connect to Supabase at all
    console.log('API: Testing Supabase connection...');
    const { data: connectionTest, error: connectionError } = await supabase
      .from('blog_posts')
      .select('count(*)', { count: 'exact', head: true });
    
    console.log('API: Connection test result:', { connectionTest, connectionError });
    
    if (connectionError) {
      console.error('API: Connection test failed:', connectionError);
      throw new Error(`Database connection failed: ${connectionError.message}`);
    }

    console.log('API: Connection successful, querying blog posts...');
    
    const { data, error, count } = await supabase
      .from('blog_posts')
      .select('*', { count: 'exact' })
      .eq('published', true)
      .order('created_at', { ascending: false });

    console.log('API: Raw Supabase response:');
    console.log('API: - Data:', data);
    console.log('API: - Error:', error);
    console.log('API: - Count:', count);
    console.log('API: - Data type:', typeof data);
    console.log('API: - Data is array:', Array.isArray(data));
    console.log('API: - Data length:', data?.length || 'N/A');

    if (error) {
      console.error('API: Supabase error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      throw new Error(`Failed to fetch blog posts: ${error.message}`);
    }

    if (!data) {
      console.log('API: No data returned (null/undefined), returning empty array');
      return [];
    }

    if (!Array.isArray(data)) {
      console.error('API: Data is not an array:', data);
      throw new Error('Invalid data format received from database');
    }

    console.log('API: Successfully fetched blog posts:', data.length);
    if (data.length > 0) {
      console.log('API: Sample post structure:', {
        id: data[0].id,
        title: data[0].title,
        featured: data[0].featured,
        published: data[0].published,
        created_at: data[0].created_at
      });
    }
    
    return data;
  } catch (error) {
    console.error('API: Unexpected error in getBlogPosts:', error);
    console.error('API: Error type:', typeof error);
    console.error('API: Error constructor:', error?.constructor?.name);
    if (error instanceof Error) {
      console.error('API: Error message:', error.message);
      console.error('API: Error stack:', error.stack);
    }
    throw error;
  }
};

export const getPosts = async (): Promise<Post[]> => {
  console.log('API: Fetching posts...');
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('API: Error fetching posts:', error);
      throw new Error(`Failed to fetch posts: ${error.message}`);
    }

    console.log('API: Successfully fetched posts:', data?.length || 0);
    
    // Transform the data to include theme_tags and other optional fields
    const transformedData = (data || []).map(post => ({
      ...post,
      theme_tags: post.tags || [], // Use regular tags as theme_tags for now
      is_editors_pick: post.featured || false,
      is_popular: false,
      view_count: 0
    }));

    console.log('API: Transformed posts data:', transformedData.length);
    return transformedData;
  } catch (error) {
    console.error('API: Unexpected error in getPosts:', error);
    throw error;
  }
};

export const getCategories = async (): Promise<string[]> => {
  console.log('API: Fetching categories...');
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('category')
      .eq('published', true);

    if (error) {
      console.error('API: Error fetching categories:', error);
      throw new Error(`Failed to fetch categories: ${error.message}`);
    }

    const categories = [...new Set(data?.map(post => post.category) || [])];
    console.log('API: Successfully fetched categories:', categories.length);
    return categories;
  } catch (error) {
    console.error('API: Unexpected error in getCategories:', error);
    throw error;
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  console.log('API: Fetching blog post by slug:', slug);
  
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log('API: Blog post not found for slug:', slug);
        return null; // Post not found
      }
      console.error('API: Error fetching blog post:', error);
      throw new Error(`Failed to fetch blog post: ${error.message}`);
    }

    console.log('API: Successfully fetched blog post:', data?.title);
    return data;
  } catch (error) {
    console.error('API: Unexpected error in getBlogPost:', error);
    throw error;
  }
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
