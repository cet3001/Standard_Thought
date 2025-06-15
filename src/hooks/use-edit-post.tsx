
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { postSchema, type PostFormData } from "@/components/edit-post/types";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  image_meta_description: string | null;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  comments_enabled: boolean;
  meta_description: string | null;
  meta_keywords: string | null;
  slug: string;
}

export const useEditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAdmin, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);

  const form = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      excerpt: "",
      content: "",
      category: "",
      tags: "",
      image_url: "",
      image_meta_description: "",
      meta_description: "",
      meta_keywords: "",
      featured: false,
      published: false,
      comments_enabled: true,
    },
  });

  // Watch form values for debugging
  const watchedValues = form.watch();
  console.log('useEditPost - Form values:', watchedValues);

  useEffect(() => {
    console.log('useEditPost - useEffect triggered', { id, isAdmin, authLoading });
    
    if (authLoading) return;

    if (!isAdmin) {
      console.log('useEditPost - User is not admin, redirecting');
      navigate("/");
      setLoading(false);
      return;
    }

    if (!id) {
      console.log('useEditPost - No ID parameter found');
      toast.error("No post ID provided");
      navigate("/blog");
      setLoading(false);
      return;
    }

    console.log('useEditPost - Fetching post for id:', id);
    fetchPost();
  }, [id, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (post) {
      console.log('useEditPost - Post data available, populating form:', post);
      
      const formData: PostFormData = {
        title: post.title || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        category: post.category || '',
        tags: Array.isArray(post.tags) ? post.tags.join(', ') : '',
        image_url: post.image_url || '',
        image_meta_description: post.image_meta_description || '',
        meta_description: post.meta_description || '',
        meta_keywords: post.meta_keywords || '',
        featured: Boolean(post.featured),
        published: Boolean(post.published),
        comments_enabled: post.comments_enabled !== false,
      };
      
      console.log('useEditPost - Resetting form with data:', formData);
      form.reset(formData);
      console.log('useEditPost - Form reset completed');
    }
  }, [post, form]);

  const fetchPost = async () => {
    if (!id) {
      setLoading(false);
      return;
    }

    console.log('useEditPost - fetchPost called for id:', id);
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      console.log('useEditPost - Supabase response:', { data, error });

      if (error || !data) {
        console.error('Error fetching post:', error);
        toast.error('Post not found');
        navigate("/blog");
        return;
      }

      console.log('useEditPost - Setting post data:', data);
      setPost(data);
      
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred');
      navigate("/blog");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: PostFormData) => {
    if (!post) return;

    console.log('useEditPost - onSubmit called with data:', data);
    setSaving(true);
    try {
      const tagsArray = data.tags 
        ? data.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
        : [];

      const updateData = {
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        category: data.category,
        tags: tagsArray,
        image_url: data.image_url || null,
        image_meta_description: data.image_meta_description || null,
        meta_description: data.meta_description || null,
        meta_keywords: data.meta_keywords || null,
        featured: data.featured,
        published: data.published,
        comments_enabled: data.comments_enabled,
        updated_at: new Date().toISOString(),
      };

      console.log('useEditPost - Updating post with data:', updateData);

      const { error } = await supabase
        .from('blog_posts')
        .update(updateData)
        .eq('id', post.id);

      if (error) {
        console.error('Error updating post:', error);
        toast.error('Failed to update post');
      } else {
        console.log('useEditPost - Post updated successfully');
        toast.success('Post updated successfully!');
        navigate(`/blog/${post.slug}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setSaving(false);
    }
  };

  return {
    form,
    loading: authLoading || loading,
    saving,
    post,
    onSubmit,
    isAdmin,
  };
};
