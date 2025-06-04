
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

const CreatePost = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    featured: false,
    published: false,
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      let imageUrl = null;
      if (imageFile) {
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

      const { error } = await supabase
        .from('blog_posts')
        .insert({
          title: formData.title,
          excerpt: formData.excerpt,
          content: formData.content,
          category: formData.category,
          tags: tagsArray,
          featured: formData.featured,
          published: formData.published,
          image_url: imageUrl,
          author_id: user?.id,
        });

      if (error) {
        toast.error("Failed to create post");
        console.error('Error creating post:', error);
      } else {
        toast.success("Post created successfully!");
        navigate("/blog");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-brand-cream dark:bg-brand-black flex items-center justify-center">
      <div className="text-xl text-[#0A0A0A] dark:text-brand-cream">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="text-[#247EFF] hover:text-[#0057FF] mb-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
            <h1 className="text-4xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-2">
              Create New Story
            </h1>
            <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">
              Share your builder journey with the community
            </p>
          </div>

          <Card className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border-[#247EFF]/20">
            <CardHeader>
              <CardTitle className="text-[#0A0A0A] dark:text-brand-cream">Post Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title" className="text-[#0A0A0A] dark:text-brand-cream">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      placeholder="Enter post title"
                      required
                      className="bg-brand-cream/50 dark:bg-brand-black/50 border-[#E5E5E5] dark:border-[#2A2A2A] focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream"
                    />
                  </div>
                  <div>
                    <Label htmlFor="category" className="text-[#0A0A0A] dark:text-brand-cream">Category</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      placeholder="e.g., Mindset, Hustle, Network"
                      required
                      className="bg-brand-cream/50 dark:bg-brand-black/50 border-[#E5E5E5] dark:border-[#2A2A2A] focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="excerpt" className="text-[#0A0A0A] dark:text-brand-cream">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    placeholder="Brief description of your post"
                    rows={3}
                    required
                    className="bg-brand-cream/50 dark:bg-brand-black/50 border-[#E5E5E5] dark:border-[#2A2A2A] focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream"
                  />
                </div>

                <div>
                  <Label htmlFor="content" className="text-[#0A0A0A] dark:text-brand-cream">Content</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({...formData, content: e.target.value})}
                    placeholder="Write your story here..."
                    rows={10}
                    required
                    className="bg-brand-cream/50 dark:bg-brand-black/50 border-[#E5E5E5] dark:border-[#2A2A2A] focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream"
                  />
                </div>

                <div>
                  <Label htmlFor="tags" className="text-[#0A0A0A] dark:text-brand-cream">Tags</Label>
                  <Input
                    id="tags"
                    value={formData.tags}
                    onChange={(e) => setFormData({...formData, tags: e.target.value})}
                    placeholder="Enter tags separated by commas"
                    className="bg-brand-cream/50 dark:bg-brand-black/50 border-[#E5E5E5] dark:border-[#2A2A2A] focus:border-[#247EFF] text-[#0A0A0A] dark:text-brand-cream"
                  />
                </div>

                <div>
                  <Label htmlFor="image" className="text-[#0A0A0A] dark:text-brand-cream">Featured Image</Label>
                  <div className="mt-2">
                    {imagePreview ? (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
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
                      <div className="border-2 border-dashed border-[#247EFF]/20 rounded-lg p-8 text-center bg-brand-cream/30 dark:bg-brand-black/30">
                        <Upload className="mx-auto h-12 w-12 text-[#247EFF] mb-4" />
                        <div className="text-[#0A0A0A] dark:text-brand-cream mb-2">
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
                          className="cursor-pointer text-[#247EFF] hover:text-[#0057FF]"
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
                    <Label htmlFor="featured" className="text-[#0A0A0A] dark:text-brand-cream">Featured Post</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="published"
                      checked={formData.published}
                      onCheckedChange={(checked) => setFormData({...formData, published: checked})}
                    />
                    <Label htmlFor="published" className="text-[#0A0A0A] dark:text-brand-cream">Publish Immediately</Label>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#247EFF] hover:bg-[#0057FF] text-white"
                  >
                    {submitting ? "Creating..." : "Create Post"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/blog")}
                    className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreatePost;
