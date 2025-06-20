
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ImageGenerator from "@/components/image-generator";
import SEO from "@/components/seo";

const ImageGeneratorPage = () => {
  return (
    <>
      <SEO
        title="AI Image Generator | Standardthought"
        description="Generate custom AI images with DALL-E for your wealth-building content, blog posts, and marketing materials."
        keywords="AI image generator, DALL-E, content creation, blog images, marketing visuals, wealth building"
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
