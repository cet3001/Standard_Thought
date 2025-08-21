import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { PostForm } from "@/components/create-post/PostForm";
import { useImageUpload } from "@/hooks/use-image-upload";
import { usePostSubmission } from "@/hooks/use-post-submission";
import { getBlogPost, BlogPost } from "@/lib/api";
import SEO from "@/components/seo";
import { LoadingScreen } from "@/components/create-post";

const AdminBlogEdit = () => {
  const { id } = useParams<{ id: string }>();
  const { user, isAdmin, loading: authLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const editPost = location.state?.editPost as BlogPost | undefined;

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    metaTitle: "",
    metaDescription: "",
    tags: "",
    metaTags: "",
    featured: false,
    uploadNow: false,
    standardThoughtLaw: "",
    commentsEnabled: true,
    displayTag: "",
  });

  const [isLoadingPost, setIsLoadingPost] = useState(false);

  const {
    imageFile,
    setImageFile,
    imagePreview,
    setImagePreview,
    uploadImage,
  } = useImageUpload();

  const { submitting, handleSubmit: handlePostSubmit } = usePostSubmission(
    editPost,
    user?.id,
    uploadImage
  );

  // Redirect if not admin
  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, authLoading, navigate]);

  // Fetch post data if not provided in state
  useEffect(() => {
    const fetchPost = async () => {
      if (id && !editPost) {
        setIsLoadingPost(true);
        try {
          const post = await getBlogPost(id);
          if (post) {
            const populatedData = {
              title: post.title || "",
              body: post.content || "",
              metaTitle: post.meta_description || "",
              metaDescription: post.meta_description || "",
              tags: Array.isArray(post.tags) ? post.tags[0] || "" : "",
              metaTags: post.meta_keywords || "",
              featured: post.featured || false,
              uploadNow: !!post.image_url,
              standardThoughtLaw: "",
              commentsEnabled: post.comments_enabled ?? true,
              displayTag: post.display_tag || "",
            };
            setFormData(populatedData);

            if (post.image_url) {
              setImagePreview(post.image_url);
            }
          } else {
            navigate('/admin/blog');
          }
        } catch (error) {
          console.error('Error fetching post:', error);
          navigate('/admin/blog');
        } finally {
          setIsLoadingPost(false);
        }
      } else if (editPost) {
        // Populate form with editPost data
        const populatedData = {
          title: editPost.title || "",
          body: editPost.content || "",
          metaTitle: editPost.meta_description || "",
          metaDescription: editPost.meta_description || "",
          tags: Array.isArray(editPost.tags) ? editPost.tags[0] || "" : "",
          metaTags: editPost.meta_keywords || "",
          featured: editPost.featured || false,
          uploadNow: !!editPost.image_url,
          standardThoughtLaw: "",
          commentsEnabled: editPost.comments_enabled ?? true,
          displayTag: editPost.display_tag || "",
        };
        setFormData(populatedData);

        if (editPost.image_url) {
          setImagePreview(editPost.image_url);
        }
      }
    };

    fetchPost();
  }, [id, editPost, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('AdminBlogEdit: Form submitted with data:', formData);
    handlePostSubmit(formData);
  };

  const handleCancel = () => {
    navigate('/admin/blog');
  };

  if (authLoading || isLoadingPost) {
    return <LoadingScreen />;
  }

  if (!user || !isAdmin) {
    return <LoadingScreen />;
  }

  const postTitle = editPost?.title || formData.title;

  return (
    <>
      <SEO 
        title={`Edit: ${postTitle} | Standardthought Admin`}
        description="Edit blog post for Standardthought"
        url={`/admin/blog/edit/${id}`}
        noIndex={true}
      />
      
      <AdminLayout 
        title={`Edit: ${postTitle}`} 
        description="Update your blog post content and settings"
      >
        <div className="max-w-4xl mx-auto">
          <PostForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitting={submitting}
            isEditing={true}
            imageFile={imageFile}
            setImageFile={setImageFile}
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            onCancel={handleCancel}
          />
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminBlogEdit;