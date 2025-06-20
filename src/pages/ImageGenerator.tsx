
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ImageGenerator from "@/components/image-generator";
import SEO from "@/components/seo";

const ImageGeneratorPage = () => {
  return (
    <>
      <SEO
        title="AI Image Generator & Stock Photos | Standardthought"
        description="Generate custom AI images with DALL-E or search high-quality stock photos from Unsplash. Perfect for content creation, blog posts, and marketing materials."
        keywords="AI image generator, DALL-E, stock photos, Unsplash, content creation, blog images, marketing visuals"
        url="/image-generator"
        type="website"
      />

      <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
        <Navigation />
        
        <div className="pt-32 pb-16">
          <ImageGenerator />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ImageGeneratorPage;
