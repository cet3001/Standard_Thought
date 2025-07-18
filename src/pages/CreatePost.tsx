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

  // Get editPost directly from location state
  const editPost = location.state?.editPost as BlogPost | undefined;
  
  // Initialize formData with populated data if editing
  const [formData, setFormData] = useState(() => {
    if (editPost) {
      console.log('Initializing formData from editPost state:', editPost);
      return {
        title: editPost.title || "",
        body: editPost.content || "",
        metaTitle: editPost.title || "",
        metaDescription: editPost.meta_description || "",
        tags: Array.isArray(editPost.tags) ? editPost.tags.join(', ') : "",
        metaTags: editPost.meta_keywords || "",
        featured: editPost.featured || false,
        uploadNow: true,
        standardThoughtLaw: "",
        commentsEnabled: editPost.comments_enabled !== undefined ? editPost.comments_enabled : true,
        displayTag: Array.isArray(editPost.tags) && editPost.tags.length > 0 ? editPost.tags[0] : "",
      };
    }
    return {
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
    };
  });

  const [isLoadingPost, setIsLoadingPost] = useState(!!slugParam && !editPost);
  const [imagePreviewState, setImagePreviewState] = useState(editPost?.image_url || null);

  // Custom hooks
  const { imageFile, setImageFile, uploadImage } = useImageUpload();
  const { submitting, handleSubmit: submitPost, isEditing } = usePostSubmission(editPost, user?.id, uploadImage);

  // Redirect if not admin
  if (!loading && (!user || !isAdmin)) {
    navigate("/auth");
    return null;
  }

  // Fetch post if refresh without state
  useEffect(() => {
    const fetchPost = async () => {
      if (slugParam && !editPost) {
        setIsLoadingPost(true);
        try {
          console.log('Fetching post with slug:', slugParam);
          const post = await getBlogPost(slugParam);
          console.log('Post fetched:', post);
          if (post) {
            const populatedData = {
              title: post.title || "",
              body: post.content || "",
              metaTitle: post.title || "",
              metaDescription: post.meta_description || "",
              tags: Array.isArray(post.tags) ? post.tags.join(', ') : "",
              metaTags: post.meta_keywords || "",
              featured: post.featured || false,
              uploadNow: true,
              standardThoughtLaw: "",
              commentsEnabled: post.comments_enabled !== undefined ? post.comments_enabled : true,
              displayTag: Array.isArray(post.tags) && post.tags.length > 0 ? post.tags[0] : "",
            };
            setFormData(populatedData);
            setImagePreviewState(post.image_url || null);
          }
        } catch (err) {
          console.error('Failed to fetch post for editing:', err);
        } finally {
          setIsLoadingPost(false);
        }
      }
    };

    fetchPost();
  }, [slugParam, editPost]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitPost(formData);
  };

  // Show loading for auth or post fetch
  if (loading || isLoadingPost || (!!slugParam && formData.title === "")) {
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
            key={slugParam || 'new-post'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleFormSubmit}
            submitting={submitting}
            isEditing={isEditing}
            imageFile={imageFile}
            setImageFile={setImageFile}
            imagePreview={imagePreviewState}
            setImagePreview={setImagePreviewState}
            onCancel={() => navigate("/blog")}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatePost;