
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import EditPostHeader from "@/components/edit-post/edit-post-header";
import EditPostForm from "@/components/edit-post/edit-post-form";
import EditPostLoading from "@/components/edit-post/edit-post-loading";
import { useEditPost } from "@/hooks/use-edit-post";

const EditPost = () => {
  const { form, loading, saving, post, onSubmit, isAdmin } = useEditPost();

  // Debug: Log current form values
  const watchedValues = form.watch();
  console.log('EditPost - Current form values:', watchedValues);

  if (loading) {
    console.log('EditPost - Still loading...');
    return <EditPostLoading />;
  }

  if (!isAdmin) {
    console.log('EditPost - User is not admin, not rendering form');
    return null;
  }

  console.log('EditPost - Rendering form with post:', post);

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <EditPostHeader postTitle={post?.title} />
          <EditPostForm 
            form={form}
            onSubmit={onSubmit}
            saving={saving}
            postTitle={post?.title}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EditPost;
