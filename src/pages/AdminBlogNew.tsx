import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { PostForm } from "@/components/create-post/PostForm";
import { useImageUpload } from "@/hooks/use-image-upload";
import { usePostSubmission } from "@/hooks/use-post-submission";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/seo";
import { LoadingScreen } from "@/components/create-post";

const AdminBlogNew = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();

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

  const {
    imageFile,
    setImageFile,
    imagePreview,
    setImagePreview,
    uploadImage,
  } = useImageUpload();

  const { submitting, handleSubmit: handlePostSubmit } = usePostSubmission(
    undefined,
    user?.id,
    uploadImage
  );

  // Redirect if not admin
  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/auth');
    }
  }, [user, isAdmin, authLoading, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('AdminBlogNew: Form submitted with data:', formData);
    handlePostSubmit(formData);
  };

  const handleCancel = () => {
    navigate('/admin/blog');
  };

  if (authLoading) {
    return <LoadingScreen />;
  }

  if (!user || !isAdmin) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SEO 
        title="Create New Blog Post | Standardthought Admin"
        description="Create a new blog post for Standardthought"
        url="/admin/blog/new"
        noIndex={true}
      />
      
      <AdminLayout 
        title="Create New Blog Post" 
        description="Write and publish a new story for your audience"
      >
        <div className="max-w-4xl mx-auto">
          <PostForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            submitting={submitting}
            isEditing={false}
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

export default AdminBlogNew;