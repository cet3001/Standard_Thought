import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { ArrowLeft, Upload, X } from "lucide-react";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import SEO from "@/components/seo";

const CreatePost = () => {
  useMobilePerformance();
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { textureImageUrl } = useUrbanTexture();
  const [submitting, setSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

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
      let imageUrl = null;
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

      const postData = {
        title: formData.title,
        excerpt: formData.body.substring(0, 200) + (formData.body.length > 200 ? '...' : ''),
        content: formData.body,
        category: "Blog", // Default category
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
      } else {
        toast.success("Post created successfully!");
        navigate("/blog");
      }
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

      {/* SEO */}
      <SEO
        title="Create New Story | Standardthought"
        description="Share your builder journey with the community. Create inspiring stories for fellow entrepreneurs."
        keywords="create blog, share story, entrepreneur, builder"
        url="/create-post"
      />

      <Navigation />
      
      <main className="relative z-10 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="text-brand-black/70 dark:text-brand-cream/70 hover:text-brand-black dark:hover:text-brand-cream mb-4 font-ibm-plex-mono"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Button>
            <div className="text-6xl font-permanent-marker transform -rotate-2 drop-shadow-lg mb-4" style={{
              color: 'transparent',
              background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
              backgroundSize: '400% 400%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'pearlescent 3s ease-in-out infinite'
            }}>
              Create Story
            </div>
            <p className="text-brand-black/70 dark:text-brand-cream/70 text-lg font-ibm-plex-mono">
              Share your builder journey with the community
            </p>
          </div>

          <Card className="backdrop-blur-sm border-2 border-yellow-400/30 shadow-2xl" style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
          }}>
            <CardHeader>
              <CardTitle className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Story Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Enter your story title"
                      required
                      className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
                    />
                  </div>
                  <div>
                    <Label htmlFor="metaTitle" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Meta Title</Label>
                    <Input
                      id="metaTitle"
                      value={formData.metaTitle}
                      onChange={(e) => setFormData({...formData, metaTitle: e.target.value})}
                      placeholder="SEO title (optional)"
                      className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="body" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Story Content</Label>
                  <Textarea
                    id="body"
                    value={formData.body}
                    onChange={(e) => setFormData({...formData, body: e.target.value})}
                    placeholder="Write your story here..."
                    rows={12}
                    required
                    className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
                  />
                </div>

                <div>
                  <Label htmlFor="metaDescription" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    value={formData.metaDescription}
                    onChange={(e) => setFormData({...formData, metaDescription: e.target.value})}
                    placeholder="Brief description for search engines"
                    rows={3}
                    className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="tags" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Tags</Label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData({...formData, tags: e.target.value})}
                      placeholder="hustle, mindset, network (comma separated)"
                      className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
                    />
                  </div>
                  <div>
                    <Label htmlFor="metaTags" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Meta Tags</Label>
                    <Input
                      id="metaTags"
                      value={formData.metaTags}
                      onChange={(e) => setFormData({...formData, metaTags: e.target.value})}
                      placeholder="SEO keywords (comma separated)"
                      className="bg-brand-cream/50 dark:bg-brand-black/50 border-yellow-400/30 focus:border-yellow-400 text-brand-black dark:text-brand-cream font-kalam"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="image" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Featured Image</Label>
                  <div className="mt-2">
                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg shadow-lg"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => {
                            setImageFile(null);
                            setImagePreview(null);
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-yellow-400/30 rounded-lg p-8 text-center backdrop-blur-sm" style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                      }}>
                        <Upload className="mx-auto h-12 w-12 mb-4" style={{
                          color: 'transparent',
                          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                          backgroundSize: '400% 400%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          animation: 'pearlescent 3s ease-in-out infinite'
                        }} />
                        <div className="text-brand-black dark:text-brand-cream mb-2 font-kalam">
                          Click to upload an image
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                          id="image-upload"
                        />
                        <Label
                          htmlFor="image-upload"
                          className="cursor-pointer text-brand-black dark:text-brand-cream hover:opacity-80 font-ibm-plex-mono"
                        >
                          Choose file
                        </Label>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="featured"
                      checked={formData.featured}
                      onCheckedChange={(checked) => setFormData({...formData, featured: checked})}
                    />
                    <Label htmlFor="featured" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Featured Story</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="uploadNow"
                      checked={formData.uploadNow}
                      onCheckedChange={(checked) => setFormData({...formData, uploadNow: checked})}
                    />
                    <Label htmlFor="uploadNow" className="text-brand-black dark:text-brand-cream font-ibm-plex-mono">Upload Image Now</Label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold px-8 py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base border-0"
                  >
                    <span 
                      style={{ 
                        fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                        textShadow: '2px 2px 0px rgba(0,0,0,0.3), 1px 1px 0px rgba(255,255,255,0.1)',
                        transform: 'rotate(-1deg)',
                        display: 'inline-block'
                      }}
                    >
                      {submitting ? "Publishing..." : "Publish Story"}
                    </span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/blog")}
                    className="border-yellow-400/30 text-brand-black dark:text-brand-cream hover:bg-yellow-400/20 font-ibm-plex-mono"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePost;