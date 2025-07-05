import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { BlogPost } from "@/lib/api";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { PostForm, PageHeader, UrbanBackground, LoadingScreen } from "@/components/create-post";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useImageUpload } from "@/hooks/use-image-upload";
import { usePostSubmission } from "@/hooks/use-post-submission";
import SEO from "@/components/seo";

const CreatePost = () => {
  useMobilePerformance();
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { textureImageUrl } = useUrbanTexture();
  
  // Check if we're editing an existing post
  const editPost = location.state?.editPost as BlogPost | undefined;
  
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

  // Custom hooks
  const { imageFile, setImageFile, imagePreview, setImagePreview, uploadImage } = useImageUpload();
  const { submitting, handleSubmit: submitPost, isEditing } = usePostSubmission(editPost, user?.id, uploadImage);

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
  }, [editPost, setImagePreview]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitPost(formData);
  };

  if (loading) {
    return <LoadingScreen textureImageUrl={textureImageUrl} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <UrbanBackground textureImageUrl={textureImageUrl} />

      <SEO
        title="Create New Story | Standardthought"
        description="Share your builder journey with the community. Create inspiring stories for fellow entrepreneurs."
        keywords="create blog, share story, entrepreneur, builder"
        url="/create-post"
      />

      <Navigation />
      
      <main className="relative z-10 pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <PageHeader 
            isEditing={isEditing} 
            onBackClick={() => navigate("/blog")} 
          />

          <PostForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleFormSubmit}
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