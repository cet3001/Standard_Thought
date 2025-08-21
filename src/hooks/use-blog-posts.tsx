import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';
import { useToast } from '@/hooks/use-toast';

export type BlogPost = Tables<'blog_posts'>;
export type BlogPostInsert = TablesInsert<'blog_posts'>;
export type BlogPostUpdate = TablesUpdate<'blog_posts'>;

export const useBlogPosts = (includeUnpublished = false) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (!includeUnpublished) {
        query = query.eq('published', true);
      }

      const { data, error } = await query;

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createBlogPost = async (post: BlogPostInsert) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([post])
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blog post created successfully",
      });

      await fetchBlogPosts();
      return data;
    } catch (error) {
      console.error('Error creating blog post:', error);
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive",
      });
      throw error;
    }
  };

  const updateBlogPost = async (id: string, updates: BlogPostUpdate) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blog post updated successfully",
      });

      await fetchBlogPosts();
      return data;
    } catch (error) {
      console.error('Error updating blog post:', error);
      toast({
        title: "Error",
        description: "Failed to update blog post",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteBlogPost = async (id: string) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });

      await fetchBlogPosts();
    } catch (error) {
      console.error('Error deleting blog post:', error);
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive",
      });
      throw error;
    }
  };

  const deleteBulkBlogPosts = async (ids: string[]) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .in('id', ids);

      if (error) throw error;

      toast({
        title: "Success",
        description: `${ids.length} blog posts deleted successfully`,
      });

      await fetchBlogPosts();
    } catch (error) {
      console.error('Error deleting blog posts:', error);
      toast({
        title: "Error", 
        description: "Failed to delete blog posts",
        variant: "destructive",
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, [includeUnpublished]);

  return {
    blogPosts,
    loading,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
    deleteBulkBlogPosts,
    refetch: fetchBlogPosts
  };
};