import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { updateBlogPost, BlogPost } from "@/lib/api";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { PostForm } from "@/components/create-post/PostForm";
import { PageHeader } from "@/components/create-post/PageHeader";
import { toast } from "sonner";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import SEO from "@/components/seo";

const CreatePost = () => {
  useMobilePerformance();
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { textureImageUrl } = useUrbanTexture();
  const [submitting, setSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  // Check if we're editing an existing post
  const editPost = location.state?.editPost as BlogPost | undefined;
  const isEditing = !!editPost;
  
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    metaTitle: "",
    metaDescription: "",
    tags: "",
    metaTags: "",
    featured: false,
    uploadNow: true,
  });

  // Redirect if not admin
  if (!loading && (!user || !isAdmin)) {
    navigate("/auth");
    return null;
  }

  // Populate form data when editing
  useEffect(() => {
    if (editPost) {
      setFormData({
        title: editPost.title,
        body: editPost.content,
        metaTitle: editPost.meta_description || "",
        metaDescription: editPost.meta_description || "",
        tags: editPost.tags?.join(', ') || "",
        metaTags: editPost.meta_keywords || "",
        featured: editPost.featured || false,
        uploadNow: true,
      });
      
      if (editPost.image_url) {
        setImagePreview(editPost.image_url);
      }
    }
  }, [editPost]);

  const uploadImage = async (): Promise<string | null> => {
    if (!imageFile) return null;

    try {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `blog-images/${fileName}`;

      const { error } = await supabase.storage
        .from('blog-images')
        .upload(filePath, imageFile);

      if (error) {
        console.error('Error uploading image:', error);
        return null;
      }

      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      return data.publicUrl;
    } catch (error) {
      console.error('Image upload error:', error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let imageUrl = editPost?.image_url || null;
      
      if (imageFile && formData.uploadNow) {
        imageUrl = await uploadImage();
        if (!imageUrl) {
          toast.error("Failed to upload image");
          setSubmitting(false);
          return;
        }
      }

      const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      const metaTagsArray = formData.metaTags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

      if (isEditing && editPost) {
        // Update existing post
        const updateData = {
          title: formData.title,
          excerpt: formData.body.substring(0, 200) + (formData.body.length > 200 ? '...' : ''),
          content: formData.body,
          tags: tagsArray,
          meta_description: formData.metaDescription,
          meta_keywords: metaTagsArray.join(', '),
          featured: formData.featured,
          ...(imageUrl && { image_url: imageUrl }),
        };

        await updateBlogPost(editPost.id, updateData);
        toast.success("Post updated successfully!");
      } else {
        // Create new post
        const postData = {
          title: formData.title,
          excerpt: formData.body.substring(0, 200) + (formData.body.length > 200 ? '...' : ''),
          content: formData.body,
          category: "Blog",
          tags: tagsArray,
          meta_description: formData.metaDescription,
          meta_keywords: metaTagsArray.join(', '),
          featured: formData.featured,
          published: true,
          comments_enabled: true,
          image_url: imageUrl,
          author_id: user?.id,
        };

        const { data, error } = await supabase
          .from('blog_posts')
          .insert(postData)
          .select();

        if (error) {
          console.error('Error creating post:', error);
          toast.error(`Failed to create post: ${error.message}`);
          setSubmitting(false);
          return;
        }
        
        toast.success("Post created successfully!");
      }
      
      navigate("/blog");
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("An unexpected error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Urban Background */}
        <div className="fixed inset-0 -z-50" aria-hidden="true">
          {textureImageUrl && (
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url(${textureImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
        </div>

        <Navigation />
        <main className="relative z-10 pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center py-20">
              <div className="text-6xl font-permanent-marker transform -rotate-12 drop-shadow-lg mb-4" style={{
                color: 'transparent',
                background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                backgroundSize: '400% 400%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'pearlescent 3s ease-in-out infinite'
              }}>
                Loading...
              </div>
              <p className="text-brand-black/60 dark:text-brand-cream/60">Setting up your workspace</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      <SEO
        title="Create New Story | Standardthought"
        description="Share your builder journey with the community. Create inspiring stories for fellow entrepreneurs."
        keywords="create blog, share story, entrepreneur, builder"
        url="/create-post"
      />

      <Navigation />
      
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <PageHeader 
            isEditing={isEditing} 
            onBackClick={() => navigate("/blog")} 
          />

          <PostForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitting={submitting}
            isEditing={isEditing}
            imageFile={imageFile}
            setImageFile={setImageFile}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            onCancel={() => navigate("/blog")}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePost;