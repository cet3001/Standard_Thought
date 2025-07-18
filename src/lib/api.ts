
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
  display_tag: string | null;
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
  if (!Array.isArray(data)) return [];
  
  return data.filter(post => {
    return post && 
           typeof post.id === 'string' && 
           typeof post.title === 'string' && 
           typeof post.slug === 'string';
  });
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    console.log('Fetching blog posts from Supabase...');
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('getBlogPosts error:', error);
      throw error;
    }

    console.log('Blog posts fetched successfully:', data?.length || 0);
    return validatePostData(data || []);
  } catch (error) {
    console.error('getBlogPosts caught error:', error);
    throw error;
  }
};

export const getPosts = async (): Promise<Post[]> => {
  try {
    console.log('Fetching posts from Supabase...');
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('getPosts error:', error);
      throw error;
    }

    const validatedData = validatePostData(data || []);

    const transformedData = validatedData.map(post => ({
      ...post,
      theme_tags: Array.isArray(post.tags) ? post.tags : [],
      is_editors_pick: Boolean(post.featured),
      is_popular: false,
      view_count: 0
    }));

    console.log('Posts transformed successfully:', transformedData.length);
    return transformedData;
  } catch (error) {
    console.error('getPosts caught error:', error);
    throw error;
  }
};

export const getCategories = async (): Promise<string[]> => {
  try {
    console.log('Fetching categories from Supabase...');
    const { data, error } = await supabase
      .from('blog_posts')
      .select('category')
      .eq('published', true);

    if (error) {
      console.error('getCategories error:', error);
      throw error;
    }

    if (!Array.isArray(data)) return [];

    const categories = data
      .map(post => post?.category)
      .filter(category => typeof category === 'string' && category.length > 0);
    
    const uniqueCategories = [...new Set(categories)];
    console.log('Categories fetched successfully:', uniqueCategories);
    return uniqueCategories;
  } catch (error) {
    console.error('getCategories caught error:', error);
    throw error;
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  try {
    if (!slug || typeof slug !== 'string') return null;

    console.log('Fetching blog post by slug:', slug);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        console.log('Blog post not found:', slug);
        return null;
      }
      console.error('getBlogPost error:', error);
      throw error;
    }

    // Validate the returned data
    if (!data || typeof data.id !== 'string' || typeof data.title !== 'string') {
      return null;
    }

    console.log('Blog post fetched successfully:', data.title);
    return data;
  } catch (error) {
    console.error('getBlogPost caught error:', error);
    throw error;
  }
};

export const createBlogPost = async (postData: CreateBlogPostData): Promise<BlogPost> => {
  console.log('Creating blog post:', postData.title);
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

  console.log('Blog post created successfully:', data.title);
  return data;
};

export const updateBlogPost = async (id: string, updates: Partial<BlogPost>): Promise<BlogPost> => {
  console.log('Updating blog post:', id);
  const { data, error } = await supabase
    .from('blog_posts')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }

  console.log('Blog post updated successfully:', data.title);
  return data;
};

export const deleteBlogPost = async (id: string): Promise<void> => {
  console.log('Deleting blog post:', id);
  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }

  console.log('Blog post deleted successfully');
};

// Subscriber functions
export const getSubscribers = async () => {
  try {
    console.log('Fetching subscribers from Supabase...');
    const { data, error } = await supabase
      .from('Subscribers')
      .select('*')
      .eq('unsubscribed', false)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('getSubscribers error:', error);
      throw error;
    }

    console.log('Subscribers fetched successfully:', data?.length || 0);
    return data || [];
  } catch (error) {
    console.error('getSubscribers caught error:', error);
    throw error;
  }
};

export const addSubscriber = async (email: string, name?: string) => {
  try {
    console.log('Adding subscriber:', email);
    const { data, error } = await supabase
      .from('Subscribers')
      .insert({
        email,
        name: name || null,
        unsubscribe_token: crypto.randomUUID()
      })
      .select()
      .single();

    if (error) {
      console.error('addSubscriber error:', error);
      throw error;
    }

    console.log('Subscriber added successfully:', email);
    return data;
  } catch (error) {
    console.error('addSubscriber caught error:', error);
    throw error;
  }
};

// Comments functions
export const getComments = async (blogPostId: string) => {
  try {
    console.log('Fetching comments for post:', blogPostId);
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('blog_post_id', blogPostId)
      .eq('approved', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('getComments error:', error);
      throw error;
    }

    console.log('Comments fetched successfully:', data?.length || 0);
    return data || [];
  } catch (error) {
    console.error('getComments caught error:', error);
    throw error;
  }
};

export const addComment = async (commentData: {
  blog_post_id: string;
  author_name: string;
  author_email: string;
  content: string;
}) => {
  try {
    console.log('Adding comment to post:', commentData.blog_post_id);
    const { data, error } = await supabase
      .from('comments')
      .insert({
        blog_post_id: commentData.blog_post_id,
        author_name: commentData.author_name,
        author_email: commentData.author_email,
        content: commentData.content,
        approved: false // Comments need approval by default
      })
      .select()
      .single();

    if (error) {
      console.error('addComment error:', error);
      throw error;
    }

    console.log('Comment added successfully');
    return data;
  } catch (error) {
    console.error('addComment caught error:', error);
    throw error;
  }
};
