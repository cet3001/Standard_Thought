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

// Safe data validation helper
const validatePostData = (data: any[]): BlogPost[] => {
  if (!Array.isArray(data)) {
    console.error('validatePostData: data is not an array:', data);
    return [];
  }
  
  const validPosts = data.filter(post => {
    const isValid = post && 
           typeof post.id === 'string' && 
           typeof post.title === 'string' && 
           typeof post.slug === 'string';
    
    if (!isValid) {
      console.warn('Invalid post data:', post);
    }
    
    return isValid;
  });

  console.log(`validatePostData: ${validPosts.length} valid posts out of ${data.length} total`);
  return validPosts;
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('getBlogPosts: Starting fetch...');
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('getBlogPosts error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log('getBlogPosts: Raw data received:', data);

    if (!data) {
      console.log('getBlogPosts: No data returned');
      return [];
    }

    const validatedPosts = validatePostData(data);
    console.log('getBlogPosts: Returning', validatedPosts.length, 'posts');
    
    return validatedPosts;
  } catch (error) {
    console.error('getBlogPosts caught error:', error);
    throw error; // Re-throw to let React Query handle it
  }
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    console.log('getPosts: Starting fetch...');
    
    // Test connection first
    const { data: testData, error: testError } = await supabase.from('blog_posts').select('count').single();
    console.log('Connection test:', { testData, testError });
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('getPosts error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log('getPosts: Raw data received:', data);

    if (!data) {
      console.log('getPosts: No data returned');
      return [];
    }

    const validatedData = validatePostData(data);

    const transformedData = validatedData.map(post => ({
      ...post,
      theme_tags: Array.isArray(post.tags) ? post.tags : [],
      is_editors_pick: Boolean(post.featured),
      is_popular: false,
      view_count: 0
    }));

    console.log('getPosts: Returning', transformedData.length, 'transformed posts');
    return transformedData;
  } catch (error) {
    console.error('getPosts caught error:', error);
    throw error; // Re-throw to let React Query handle it
  }
};

export const getCategories = async (): Promise<string[]> => {
  try {
    console.log('getCategories: Starting fetch...');
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('category')
      .eq('published', true);

    if (error) {
      console.error('getCategories error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    console.log('getCategories: Raw data received:', data);

    if (!Array.isArray(data)) {
      console.log('getCategories: Invalid data format');
      return [];
    }

    const categories = data
      .map(post => post?.category)
      .filter(category => typeof category === 'string' && category.length > 0);
    
    const uniqueCategories = [...new Set(categories)];
    console.log('getCategories: Returning', uniqueCategories.length, 'unique categories:', uniqueCategories);
    
    return uniqueCategories;
  } catch (error) {
    console.error('getCategories caught error:', error);
    throw error; // Re-throw to let React Query handle it
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    if (!slug || typeof slug !== 'string') return null;

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
      console.error('getBlogPost error:', error);
      return null;
    }

    // Validate the returned data
    if (!data || typeof data.id !== 'string' || typeof data.title !== 'string') {
      return null;
    }

    return data;
  } catch (error) {
    console.error('getBlogPost caught error:', error);
    return null;
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
