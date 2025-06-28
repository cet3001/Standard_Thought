
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import EditPostHeader from "@/components/edit-post/edit-post-header";
import EditPostForm from "@/components/edit-post/edit-post-form";
import EditPostLoading from "@/components/edit-post/edit-post-loading";
import { useEditPost } from "@/hooks/use-edit-post";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const EditPost = () => {
  const { form, loading, saving, post, onSubmit, isAdmin } = useEditPost();
  const { textureImageUrl } = useUrbanTexture();

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
    <div className="min-h-screen relative overflow-hidden">
      {/* Urban Background - Matches homepage styling */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-25 bg-cover bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/15 via-slate-700/25 to-slate-900/15"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/95 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/95"></div>
      </div>
      
      <div className="relative z-10">
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
    </div>
  );
};

export default EditPost;
