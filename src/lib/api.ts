import { supabase } from "@/integrations/supabase/client";

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

  // Add mock theme tags for existing posts until database is updated
  const postsWithThemeTags = (data || []).map(post => ({
    ...post,
    theme_tags: generateThemeTagsFromContent(post)
  }));

  return postsWithThemeTags;
};

// Helper function to generate theme tags based on content until database is updated
const generateThemeTagsFromContent = (post: any): string[] => {
  const title = post.title.toLowerCase();
  const excerpt = post.excerpt.toLowerCase();
  const content = `${title} ${excerpt}`.toLowerCase();
  
  const themeTags: string[] = [];
  
  // AI-related content
  if (content.includes('ai') || content.includes('artificial intelligence') || content.includes('automation')) {
    themeTags.push('AI');
  }
  
  // Credit-related content
  if (content.includes('credit') || content.includes('score') || content.includes('loan')) {
    themeTags.push('Credit');
  }
  
  // Mindset-related content
  if (content.includes('mindset') || content.includes('mental') || content.includes('psychology') || content.includes('motivation')) {
    themeTags.push('Mindset');
  }
  
  // Investing-related content
  if (content.includes('invest') || content.includes('stock') || content.includes('portfolio') || content.includes('wealth')) {
    themeTags.push('Investing');
  }
  
  // Side hustle content
  if (content.includes('side hustle') || content.includes('freelance') || content.includes('gig') || content.includes('extra income')) {
    themeTags.push('Side Hustle');
  }
  
  // Entrepreneurship content
  if (content.includes('business') || content.includes('startup') || content.includes('entrepreneur')) {
    themeTags.push('Business');
  }
  
  // Return up to 3 tags to keep it focused
  return themeTags.slice(0, 3);
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
