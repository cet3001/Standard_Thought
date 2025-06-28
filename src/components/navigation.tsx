
import { useState, useEffect } from "react";
import Logo from "./navigation/logo";
import ThemeToggle from "./navigation/theme-toggle";
import MobileMenu from "./navigation/mobile-menu";
import { supabase } from "@/integrations/supabase/client";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textureImageUrl, setTextureImageUrl] = useState<string>("");
  const [imageGenerationStatus, setImageGenerationStatus] = useState<string>("idle");

  console.log('Navigation render - isMenuOpen:', isMenuOpen);
  console.log('Navigation render - textureImageUrl:', textureImageUrl);
  console.log('Navigation render - imageGenerationStatus:', imageGenerationStatus);

  // Check localStorage cache first
  useEffect(() => {
    const cachedImageUrl = localStorage.getItem('urban-texture-cache');
    const cacheTimestamp = localStorage.getItem('urban-texture-timestamp');
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

    if (cachedImageUrl && cacheTimestamp) {
      const isExpired = Date.now() - parseInt(cacheTimestamp) > CACHE_DURATION;
      if (!isExpired) {
        console.log("🔥 Using cached urban texture:", cachedImageUrl);
        setTextureImageUrl(cachedImageUrl);
        setImageGenerationStatus("cached");
        return;
      } else {
        console.log("⏰ Cache expired, generating new texture...");
        localStorage.removeItem('urban-texture-cache');
        localStorage.removeItem('urban-texture-timestamp');
      }
    }

    generateUrbanTexture();
  }, []);

  const generateUrbanTexture = async (retryCount = 0) => {
    const MAX_RETRIES = 2;
    
    try {
      console.log(`🎨 Starting urban texture generation (attempt ${retryCount + 1})...`);
      setImageGenerationStatus("generating");
      
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: {
          prompt: "Ultra-realistic weathered urban brick wall texture, dark burgundy and brown aged bricks with deep mortar lines, street graffiti stains, rust streaks, concrete dust patches, peeling paint, urban decay, gritty inner city aesthetic, high contrast shadows, worn industrial texture, close-up detailed pattern, street photography style, natural lighting, seamless tileable pattern",
          size: "1024x1024",
          quality: "hd",
          style: "natural"
        }
      });

      console.log("📊 Supabase function response:", { data, error });

      if (error) {
        console.error("❌ Supabase function error:", error);
        
        // If we haven't exhausted retries, try again
        if (retryCount < MAX_RETRIES) {
          console.log(`🔄 Retrying in 2 seconds... (${retryCount + 1}/${MAX_RETRIES})`);
          setTimeout(() => generateUrbanTexture(retryCount + 1), 2000);
          return;
        }
        
        // All retries failed, use fallback
        console.log("💀 All retries failed, using fallback texture");
        await useFallbackTexture();
        return;
      }

      if (data && data.imageUrl) {
        // Cache the successful result
        localStorage.setItem('urban-texture-cache', data.imageUrl);
        localStorage.setItem('urban-texture-timestamp', Date.now().toString());
        
        setTextureImageUrl(data.imageUrl);
        setImageGenerationStatus("success");
        console.log("✅ Urban texture generated and cached:", data.imageUrl);
      } else {
        console.log("⚠️ No image URL returned from function");
        
        if (retryCount < MAX_RETRIES) {
          setTimeout(() => generateUrbanTexture(retryCount + 1), 2000);
        } else {
          await useFallbackTexture();
        }
      }
    } catch (error) {
      console.error("❌ Failed to generate urban texture:", error);
      
      if (retryCount < MAX_RETRIES) {
        setTimeout(() => generateUrbanTexture(retryCount + 1), 2000);
      } else {
        await useFallbackTexture();
      }
    }
  };

  const useFallbackTexture = async () => {
    console.log("🔧 Attempting fallback texture strategies...");
    setImageGenerationStatus("fallback");
    
    // Strategy 1: Try a pre-uploaded texture from Supabase Storage (if available)
    try {
      const { data: storageList } = await supabase.storage
        .from('public')
        .list('textures');
      
      if (storageList && storageList.length > 0) {
        const { data: publicUrl } = supabase.storage
          .from('public')
          .getPublicUrl(`textures/${storageList[0].name}`);
        
        if (publicUrl.publicUrl) {
          console.log("🏗️ Using pre-uploaded fallback texture:", publicUrl.publicUrl);
          setTextureImageUrl(publicUrl.publicUrl);
          setImageGenerationStatus("storage-fallback");
          return;
        }
      }
    } catch (storageError) {
      console.log("⚠️ Storage fallback failed:", storageError);
    }
    
    // Strategy 2: Use a high-quality Unsplash image as ultimate fallback
    const unsplashFallback = "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=1024&h=1024&fit=crop&crop=center";
    console.log("🌆 Using Unsplash urban texture fallback");
    setTextureImageUrl(unsplashFallback);
    setImageGenerationStatus("unsplash-fallback");
  };

  const getStatusMessage = () => {
    switch (imageGenerationStatus) {
      case "generating": return "🔥 Cooking up that street texture...";
      case "success": return "✅ Fresh AI texture loaded";
      case "cached": return "⚡ Cached texture ready";
      case "fallback": return "🔧 Switching to backup";
      case "storage-fallback": return "🏗️ Storage texture active";
      case "unsplash-fallback": return "🌆 Urban fallback ready";
      case "error": return "❌ Generation failed";
      default: return "⏳ Starting up...";
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Community Trust Banner */}
      <div className="bg-gradient-to-r from-[#247EFF] to-[#0057FF] text-white text-center py-2 text-sm font-medium">
        🔥 Trusted by 1,000+ first-gen hustlers building generational wealth
      </div>
      
      {/* Main Navigation with AI-Generated Urban Texture */}
      <nav className="bg-brand-cream/95 dark:bg-brand-black/95 backdrop-blur-md border-b border-[#247EFF]/20 shadow-sm relative">
        {/* Debug Status Indicator */}
        <div className="absolute top-0 left-0 bg-black/80 text-white text-xs px-2 py-1 z-50">
          {getStatusMessage()}
        </div>
        
        {/* AI-Generated Urban Texture Background */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-[0.15] bg-repeat bg-center"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: '200px 200px',
              filter: 'contrast(1.2) brightness(0.8)'
            }}
          />
        )}
        
        {/* Enhanced CSS fallback while image loads */}
        {!textureImageUrl && (
          <>
            <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,1)_1px,_transparent_0)] bg-[length:12px_12px]"></div>
            <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(45deg,_transparent_46%,_rgba(0,0,0,0.4)_47%,_rgba(0,0,0,0.4)_53%,_transparent_54%)] bg-[length:6px_6px]"></div>
            <div className="absolute inset-0 opacity-[0.08] bg-[conic-gradient(from_0deg,_transparent_60%,_rgba(0,0,0,0.2)_80%,_transparent_100%)] bg-[length:10px_10px]"></div>
          </>
        )}
        
        {/* Content overlay */}
        <div className="absolute inset-0 bg-brand-cream/20 dark:bg-brand-black/20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 py-4 relative z-10">
          {/* Single layout for all screen sizes */}
          <div className="flex items-center justify-between">
            {/* Hamburger Menu */}
            <div className="flex items-center flex-shrink-0">
              <MobileMenu 
                isOpen={isMenuOpen}
                onToggle={() => {
                  console.log('Toggle called, current state:', isMenuOpen);
                  setIsMenuOpen(!isMenuOpen);
                }}
                onClose={() => {
                  console.log('Close called');
                  setIsMenuOpen(false);
                }}
              />
            </div>

            {/* Centered Logo - bigger and more prominent */}
            <div className="flex-1 flex justify-center min-w-0">
              <Logo />
            </div>

            {/* Right side with Theme Toggle and Primary CTA */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              <ThemeToggle />
              {/* Primary CTA Button - Get the Blueprint */}
              <button className="bg-gradient-to-r from-[#FFD700] via-[#FFF8DC] to-[#FFA500] text-black font-bold hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg rounded-full px-4 lg:px-6 py-2 lg:py-3 border-0 text-xs lg:text-sm relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 hover:from-[#FFA500] hover:via-[#FFD700] hover:to-[#FFD700]">
                Get Blueprint
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
