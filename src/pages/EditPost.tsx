
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowLeft, Save } from "lucide-react";
import { toast } from "sonner";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  category: z.string().min(1, "Category is required"),
  tags: z.string(),
  image_url: z.string().optional(),
  meta_description: z.string().optional(),
  meta_keywords: z.string().optional(),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
  comments_enabled: z.boolean().default(true),
});

type PostFormData = z.infer<typeof postSchema>;

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
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Title</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Excerpt */}
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Excerpt</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field}
                        rows={3}
                        className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Content */}
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Content</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field}
                        rows={20}
                        className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Category and Tags Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Category</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Tags (comma separated)</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="tag1, tag2, tag3"
                          className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Image URL */}
              <FormField
                control={form.control}
                name="image_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Image URL</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Meta Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="meta_description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Meta Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={3}
                          className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="meta_keywords"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Meta Keywords</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={3}
                          className="border-[#247EFF]/20 focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream bg-white dark:bg-brand-black"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Toggles */}
              <div className="flex flex-wrap gap-6">
                <FormField
                  control={form.control}
                  name="featured"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 text-[#247EFF] border-[#247EFF]/20 rounded focus:ring-[#247EFF]"
                        />
                      </FormControl>
                      <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Featured</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="published"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 text-[#247EFF] border-[#247EFF]/20 rounded focus:ring-[#247EFF]"
                        />
                      </FormControl>
                      <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Published</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="comments_enabled"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="w-4 h-4 text-[#247EFF] border-[#247EFF]/20 rounded focus:ring-[#247EFF]"
                        />
                      </FormControl>
                      <FormLabel className="text-[#0A0A0A] dark:text-brand-cream">Enable Comments</FormLabel>
                    </FormItem>
                  )}
                />
              </div>

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
