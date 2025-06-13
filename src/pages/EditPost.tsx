import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Form } from "@/components/ui/form";
import EditPostFormFields from "@/components/edit-post/edit-post-form-fields";
import EditPostMetaFields from "@/components/edit-post/edit-post-meta-fields";
import EditPostToggles from "@/components/edit-post/edit-post-toggles";
import { postSchema, type PostFormData } from "@/components/edit-post/types";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string | null;
  category: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  comments_enabled: boolean;
  meta_description: string | null;
  meta_keywords: string | null;
  slug: string;
}

const EditPost = () => {
  const { slug } = useParams();
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
      meta_description: "",
      meta_keywords: "",
      featured: false,
      published: false,
      comments_enabled: true,
    },
  });

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      navigate("/");
      return;
    }

    if (slug && isAdmin) {
      fetchPost();
    }
  }, [slug, isAdmin, authLoading, navigate]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
        toast.error('Failed to load post');
        navigate("/blog");
        return;
      }

      setPost(data);
      
      // Populate form with existing data
      form.reset({
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        category: data.category,
        tags: data.tags?.join(', ') || '',
        image_url: data.image_url || '',
        meta_description: data.meta_description || '',
        meta_keywords: data.meta_keywords || '',
        featured: data.featured || false,
        published: data.published || false,
        comments_enabled: data.comments_enabled ?? true,
      });
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

    setSaving(true);
    try {
      const tagsArray = data.tags 
        ? data.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
        : [];

      const { error } = await supabase
        .from('blog_posts')
        .update({
          title: data.title,
          excerpt: data.excerpt,
          content: data.content,
          category: data.category,
          tags: tagsArray,
          image_url: data.image_url || null,
          meta_description: data.meta_description || null,
          meta_keywords: data.meta_keywords || null,
          featured: data.featured,
          published: data.published,
          comments_enabled: data.comments_enabled,
          updated_at: new Date().toISOString(),
        })
        .eq('id', post.id);

      if (error) {
        console.error('Error updating post:', error);
        toast.error('Failed to update post');
      } else {
        toast.success('Post updated successfully!');
        navigate(`/blog/${slug}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An unexpected error occurred');
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="animate-pulse">
              <div className="h-8 bg-[#247EFF]/20 rounded w-1/3 mb-8"></div>
              <div className="space-y-6">
                <div className="h-12 bg-[#247EFF]/20 rounded"></div>
                <div className="h-32 bg-[#247EFF]/20 rounded"></div>
                <div className="h-64 bg-[#247EFF]/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/blog")}
                className="text-[#247EFF] hover:text-[#0057FF] p-0"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Stories
              </Button>
            </div>
            <Badge className="bg-[#247EFF] text-white px-4 py-2">
              Edit Story
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-8">
            Edit Story
          </h1>

          {/* Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <EditPostFormFields form={form} />
              <EditPostMetaFields form={form} />
              <EditPostToggles form={form} />

              {/* Submit Button */}
              <div className="flex justify-end gap-4 pt-8 border-t border-[#247EFF]/20">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/blog")}
                  className="border-[#247EFF]/20 text-[#0A0A0A] dark:text-brand-cream"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={saving}
                  className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
                >
                  <Save className="mr-2 h-4 w-4" />
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EditPost;
