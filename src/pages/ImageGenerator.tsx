
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ImageGenerator from "@/components/image-generator";
import SEO from "@/components/seo";
import { useUrbanTexture } from "@/hooks/use-urban-texture";

const ImageGeneratorPage = () => {
  const { textureImageUrl } = useUrbanTexture();

  return (
    <>
      <SEO
        title="AI Image Generator | Standardthought"
        description="Generate custom AI images with DALL-E for your wealth-building content, blog posts, and marketing materials."
        keywords="AI image generator, DALL-E, content creation, blog images, marketing visuals, wealth building"
        url="/image-generator"
        type="website"
      />

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
          
          <div className="header-spacing pb-16">
            <ImageGenerator />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default ImageGeneratorPage;
