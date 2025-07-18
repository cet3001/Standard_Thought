// Page: CreatePost
// Manages both publishing new stories and editing old ones.
// If a slug is in the URL we fetch that post and load its data.
import { useState, useEffect } from "react";
import { useHeaderHeight } from "@/hooks/use-header-height";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { BlogPost, getBlogPost } from "@/lib/api";
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
  const searchParams = new URLSearchParams(location.search);
  const slugParam = searchParams.get('slug');
  const { textureImageUrl } = useUrbanTexture();

  // Check if we're editing an existing post
  const [editPost, setEditPost] = useState<BlogPost | undefined>(
    location.state?.editPost as BlogPost | undefined
  );
  
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    metaTitle: "",
    metaDescription: "",
    tags: "",
    metaTags: "",
    featured: false,
    uploadNow: true,
    standardThoughtLaw: "",
    commentsEnabled: true,
    displayTag: "",
  });

  // Custom hooks
  const { imageFile, setImageFile, imagePreview, setImagePreview, uploadImage } = useImageUpload();
  const { submitting, handleSubmit: submitPost, isEditing } = usePostSubmission(editPost, user?.id, uploadImage);

  // Redirect if not admin
  if (!loading && (!user || !isAdmin)) {
    navigate("/auth");
    return null;
  }

  // If editing via slug (e.g., page refresh), fetch the post data
  useEffect(() => {
    const fetchPost = async () => {
      if (!editPost && slugParam) {
        try {
          const post = await getBlogPost(slugParam);
          if (post) {
            setEditPost(post);
          }
        } catch (err) {
          console.error('Failed to fetch post for editing:', err);
        }
      }
    };

    fetchPost();
  }, [slugParam, editPost]);

  // Populate form data when editing
  useEffect(() => {
    console.log('CreatePost useEffect triggered. editPost:', editPost);
    console.log('Location state:', location.state);
    console.log('Slug param:', slugParam);
    
    if (editPost) {
      console.log('EditPost data received:', {
        id: editPost.id,
        title: editPost.title,
        content: editPost.content,
        tags: editPost.tags,
        meta_description: editPost.meta_description,
        meta_keywords: editPost.meta_keywords,
        featured: editPost.featured,
        comments_enabled: editPost.comments_enabled,
        image_url: editPost.image_url
      });
      
      const populatedData = {
        title: editPost.title || "",
        body: editPost.content || "",
        metaTitle: editPost.title || "", // Use title for meta title
        metaDescription: editPost.meta_description || "",
        tags: Array.isArray(editPost.tags) ? editPost.tags.join(', ') : "",
        metaTags: editPost.meta_keywords || "",
        featured: editPost.featured || false,
        uploadNow: true,
        standardThoughtLaw: "", // Will be populated if exists in future
        commentsEnabled: editPost.comments_enabled !== undefined ? editPost.comments_enabled : true,
        displayTag: Array.isArray(editPost.tags) && editPost.tags.length > 0 ? editPost.tags[0] : "",
      };
      
      console.log('Setting form data to:', populatedData);
      setFormData(populatedData);
      
      if (editPost.image_url) {
        console.log('Setting image preview to:', editPost.image_url);
        setImagePreview(editPost.image_url);
      }
    } else {
      console.log('No editPost found in location state');
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
      
      <main className="relative z-10 pb-16" style={{ marginTop: `${useHeaderHeight()}px`, paddingTop: '3rem' }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <PageHeader 
            isEditing={isEditing} 
            onBackClick={() => navigate("/blog")} 
          />

          <PostForm
            key={editPost?.id || 'new-post'} // Force re-render when editing different posts
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