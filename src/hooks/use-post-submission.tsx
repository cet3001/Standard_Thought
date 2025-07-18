import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { updateBlogPost, BlogPost } from "@/lib/api";
import { toast } from "sonner";

interface FormData {
  title: string;
  body: string;
  metaTitle: string;
  metaDescription: string;
  tags: string;
  metaTags: string;
  featured: boolean;
  uploadNow: boolean;
  standardThoughtLaw: string;
  commentsEnabled: boolean;
  displayTag: string;
}

export const usePostSubmission = (
  editPost: BlogPost | undefined,
  userId: string | undefined,
  uploadImage: () => Promise<string | null>
) => {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const isEditing = !!editPost;

  const handleSubmit = async (formData: FormData) => {
    setSubmitting(true);

    try {
      let imageUrl = editPost?.image_url || null;
      
      if (formData.uploadNow) {
        const uploadedImageUrl = await uploadImage();
        if (uploadedImageUrl) {
          imageUrl = uploadedImageUrl;
        } else if (!imageUrl) {
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
          comments_enabled: formData.commentsEnabled,
          display_tag: formData.displayTag || null,
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
          comments_enabled: formData.commentsEnabled,
          display_tag: formData.displayTag || null,
          image_url: imageUrl,
          author_id: userId,
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

  return {
    submitting,
    handleSubmit,
    isEditing
  };
};