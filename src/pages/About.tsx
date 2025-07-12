import { useState, useEffect } from "react";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import Analytics from "@/components/analytics";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";
import { useBuilderStories } from "@/hooks/use-builder-stories";
import SectionOverlayBox from "@/components/layout/SectionOverlayBox";

const About = () => {
  useMobilePerformance();
  const [isVisible, setIsVisible] = useState(false);
  const headerHeight = useHeaderHeight();
  const { textureImageUrl } = useUrbanTexture();
  const { stories, loading, error, refreshStories } = useBuilderStories(3);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "About", url: "https://www.standardthought.com/about", position: 2 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background - Identical to homepage */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {/* AI-Generated or Curated Urban Texture */}
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-700/60 to-slate-900/50"></div>
        
        {/* Content overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/85 via-brand-cream/90 to-brand-cream/85 dark:from-brand-black/85 dark:via-brand-black/90 dark:to-brand-black/85"></div>
      </div>

      {/* SEO */}
      <SEO
        title="About Standardthought - Your Mindset Reset Station | Urban Wealth Building"
        description="Unlock your mindset arsenal with Standardthought. This ain't just about stacking bread—it's about flipping your story, breaking cycles, and building mental wealth from the ground up."
        keywords="mindset reset, urban wealth mindset, breaking cycles, mental wealth, standardthought about, urban entrepreneurship mindset"
        url="/about"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header - Static across all pages */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10" style={{ marginTop: `${headerHeight}px`, paddingTop: '3rem' }}>
        {/* Hero Section: "Unlock Your Mindset Arsenal" */}
        <section className="pb-16 md:pb-32 relative overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#FFD700]/10 animate-float"></div>
            <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-[#f4d03f]/15 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              
              {/* Hero Content - Two Column Layout */}
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Left Column - Text Content */}
                <div className="order-2 lg:order-1">
                  {/* Main Headline */}
                  <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight text-left">
                    <span className="text-[#0A0A0A]">Unlock Your </span>
                    <span 
                      className="relative inline-block font-black"
                      style={{ 
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        color: 'transparent',
                        animation: 'pearlescent 3s ease-in-out infinite'
                      }}
                    >
                      Mindset
                      {/* Graffiti-style underline */}
                      <svg 
                        className="absolute -bottom-2 left-0 w-full h-6" 
                        viewBox="0 0 200 20" 
                        style={{ filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.2))' }}
                      >
                        <path 
                          d="M5,15 Q50,8 100,12 Q150,16 195,9" 
                          stroke="#f4d03f"
                          strokeWidth="3" 
                          fill="none" 
                          strokeLinecap="round"
                          opacity="0.8"
                        />
                        <path 
                          d="M7,17 Q52,10 102,14 Q152,18 193,11" 
                          stroke="#ffd700"
                          strokeWidth="2" 
                          fill="none" 
                          strokeLinecap="round"
                          opacity="0.4"
                        />
                      </svg>
                    </span>
                    <span className="text-[#0A0A0A]"> Arsenal</span>
                  </h1>

                  {/* Subhead */}
                  <div className="mb-8">
                    <p className="text-lg md:text-xl lg:text-2xl text-[#0A0A0A] font-bold leading-relaxed text-left">
                      This isn't just about stacking bread—it's about{" "}
                      <span 
                        className="font-black"
                        style={{ 
                          background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                          backgroundSize: '400% 400%',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                          animation: 'pearlescent 3s ease-in-out infinite'
                        }}
                      >
                        flipping your story
                      </span>
                      , breaking cycles, and building mental wealth from the ground up.
                    </p>
                  </div>
                </div>

                {/* Right Column - Hero Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <picture className="block w-full">
                      <img
                        src="/lovable-uploads/f309179b-b731-4959-8cb3-c02b01fe3b95.png"
                        alt="Urban entrepreneur overlooking city skyline at night, representing the mindset shift from limitation to possibility in wealth building"
                        className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                        style={{
                          aspectRatio: '1/1',
                          maxHeight: '600px',
                          objectPosition: 'center'
                        }}
                        loading="eager"
                        width={600}
                        height={600}
                        decoding="async"
                      />
                      {/* Overlay gradient for better text contrast on mobile */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl lg:hidden"></div>
                    </picture>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Pearlescent animation keyframes */}
          <style>{`
            @keyframes pearlescent {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
          `}</style>
        </section>

        {/* Section Spacer */}
        <div className="py-8"></div>

        {/* The Real About Mindset Section */}
        <div className="container mx-auto px-6">
          <SectionOverlayBox>
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Section Header */}
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-[#0A0A0A] leading-tight">
                  The Real About{" "}
                  <span 
                    className="relative inline-block font-black"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    Mindset
                  </span>
                </h2>
              </div>

              {/* Main Content */}
              <div className="mb-16">
                <p className="text-lg md:text-xl lg:text-2xl text-[#0A0A0A] font-semibold leading-relaxed max-w-3xl mx-auto">
                  We know what it's like to go from{" "}
                  <span 
                    className="font-black"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    'I can't afford it'
                  </span>{" "}
                  to{" "}
                  <span 
                    className="font-black"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    'How can I afford it?'
                  </span>{" "}
                  Mindset ain't hype—it's the foundation every real move is built on. 
                  If you ever had to build your own blueprint, you're in the right spot.
                </p>
              </div>

              {/* Transformation Image */}
              <div className="mb-16">
                <div className="flex justify-center">
                  <div className="w-4/5 max-w-3xl">
                    <img
                      src="/lovable-uploads/1a47a54a-48c3-4757-9252-f876bd1cfefd.png"
                      alt="Desk transformation scene showing the journey from denied applications to breakthrough - coffee cups, laptop with Canva sticker, to-do list with goals"
                      className="w-full h-auto rounded-lg shadow-lg object-contain"
                      style={{
                        filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.15))',
                        maxHeight: '350px'
                      }}
                      title="The before ain't forever. The blueprint changes the whole setup."
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              {/* Pull Quote */}
              <div className="relative">
                <div 
                  className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] transform -rotate-1 relative z-10"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: '3px 3px 0px rgba(255,215,0,0.3), 2px 2px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '2px'
                  }}
                >
                  "Flip your mindset,{" "}
                  <span 
                    className="relative inline-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    flip your money
                  </span>."
                </div>
                
                {/* Handwritten underline effect */}
                <svg 
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-lg h-8" 
                  viewBox="0 0 400 30" 
                  style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.1))' }}
                >
                  <path 
                    d="M10,20 Q100,8 200,15 Q300,22 390,12" 
                    stroke="#f4d03f"
                    strokeWidth="4" 
                    fill="none" 
                    strokeLinecap="round"
                    opacity="0.7"
                    style={{ 
                      filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.2))'
                    }}
                  />
                  <path 
                    d="M15,22 Q105,10 205,17 Q305,24 385,14" 
                    stroke="#ffd700"
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round"
                    opacity="0.5"
                  />
                </svg>
              </div>

            </div>
          </SectionOverlayBox>
        </div>

        {/* Section Spacer */}
        <div className="py-8"></div>

        {/* Standard Thought Codes Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Spray-paint overlay effects */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div 
              className="absolute inset-0 opacity-12"
              style={{
                background: `
                  radial-gradient(ellipse at 10% 20%, rgba(244,208,63,0.08) 0%, transparent 50%),
                  radial-gradient(ellipse at 80% 70%, rgba(255,215,0,0.06) 0%, transparent 50%),
                  radial-gradient(ellipse at 40% 40%, rgba(244,208,63,0.04) 0%, transparent 50%)
                `,
                backgroundSize: '300px 200px, 250px 300px, 400px 250px'
              }}
            ></div>
            <div className="absolute top-20 right-20 w-28 h-28 rounded-2xl bg-[#f4d03f]/8 animate-float" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute bottom-32 left-16 w-20 h-20 rounded-full bg-[#ffd700]/12 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Section Header with spray-paint effect */}
              <div className="text-center mb-20">
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#0A0A0A] transform -rotate-1 relative"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: '4px 4px 0px rgba(244,208,63,0.3), 3px 3px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '3px'
                  }}
                >
                  Standard Thought{" "}
                  <span 
                    className="relative inline-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    Codes
                  </span>
                  
                  {/* Spray paint underline effect */}
                  <svg 
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-8" 
                    viewBox="0 0 500 25" 
                  >
                    <path 
                      d="M10,15 Q125,5 250,12 Q375,19 490,8" 
                      stroke="#f4d03f"
                      strokeWidth="6" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.6"
                      style={{ 
                        filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.2))'
                      }}
                    />
                    <path 
                      d="M15,17 Q130,7 255,14 Q380,21 485,10" 
                      stroke="#ffd700"
                      strokeWidth="3" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.8"
                    />
                  </svg>
                </h2>
              </div>

              {/* Three Codes Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                
                {/* Code 1: Level Up Over Easy */}
                <div className="group relative bg-gradient-to-br from-gray-100/40 to-gray-200/30 dark:from-gray-700/30 dark:to-gray-800/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-600/20 hover:border-[#ffd700]/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {/* Graffiti-style icon */}
                  <div className="mb-6 relative">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #ffd700)',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.1), 2px 2px 0px rgba(244,208,63,0.3)'
                      }}
                    >
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 7.5L16.5 11L13 14.5V12H8V11H13V7.5Z"/>
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 
                    className="text-2xl font-black mb-4 text-[#0A0A0A] transform -rotate-1"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                    }}
                  >
                    Level Up Over Easy
                  </h3>
                  
                  <p className="text-lg font-semibold text-[#0A0A0A] leading-relaxed">
                    "We don't play it safe. Every challenge is a shot to level up."
                  </p>
                </div>

                {/* Code 2: We All Eat */}
                <div className="group relative bg-gradient-to-br from-gray-100/40 to-gray-200/30 dark:from-gray-700/30 dark:to-gray-800/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-600/20 hover:border-[#ffd700]/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {/* Graffiti-style icon */}
                  <div className="mb-6 relative">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center transform rotate-2 group-hover:rotate-0 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #ffd700)',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.1), 2px 2px 0px rgba(244,208,63,0.3)'
                      }}
                    >
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11V9L21 8.5V11M15 13V11L21 11.5V13M15 15V13L21 13.5V15M9 13C11.67 13 14.5 14.34 14.5 16V20H9.5V16C9.5 15.65 8.77 15 7.5 15S5.5 15.65 5.5 16V20H3.5V16C3.5 14.34 6.33 13 9 13Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 
                    className="text-2xl font-black mb-4 text-[#0A0A0A] transform rotate-1"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                    }}
                  >
                    We All Eat
                  </h3>
                  
                  <p className="text-lg font-semibold text-[#0A0A0A] leading-relaxed">
                    "We rise together—nobody builds alone."
                  </p>
                </div>

                {/* Code 3: Legacy Moves Only */}
                <div className="group relative bg-gradient-to-br from-gray-100/40 to-gray-200/30 dark:from-gray-700/30 dark:to-gray-800/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-600/20 hover:border-[#ffd700]/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {/* Graffiti-style icon */}
                  <div className="mb-6 relative">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #ffd700)',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.1), 2px 2px 0px rgba(244,208,63,0.3)'
                      }}
                    >
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16L3 5H1V3H4L6 14H18L20 7H8L8.5 5H21.95L19.7 16H5ZM12 2L15.39 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.61 8.26L12 2Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 
                    className="text-2xl font-black mb-4 text-[#0A0A0A] transform rotate-1"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                    }}
                  >
                    Legacy Moves Only
                  </h3>
                  
                  <p className="text-lg font-semibold text-[#0A0A0A] leading-relaxed">
                    "Every move is about legacy. Build today, eat tomorrow."
                  </p>
                </div>

              </div>

              {/* Instructional Callout */}
              <div className="text-center">
                <div 
                  className="inline-block bg-gradient-to-r from-[#f4d03f]/20 to-[#ffd700]/20 backdrop-blur-sm border-2 border-[#f4d03f]/40 rounded-2xl px-8 py-6 transform -rotate-1"
                  style={{
                    boxShadow: '6px 6px 0px rgba(244,208,63,0.2), 3px 3px 0px rgba(0,0,0,0.1)'
                  }}
                >
                  <p 
                    className="text-lg md:text-xl font-black text-[#0A0A0A]"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(244,208,63,0.3)',
                      letterSpacing: '1px'
                    }}
                  >
                    📱 Screenshot this page and make it your mental reset button.{" "}
                    <span 
                      className="relative inline-block"
                      style={{ 
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        animation: 'pearlescent 3s ease-in-out infinite'
                      }}
                    >
                      These codes are how we move different.
                    </span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section Spacer */}
        <div className="py-8"></div>

        {/* Featured Mindset Tools Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Hand-cut border overlay effects */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div 
              className="absolute inset-0 opacity-8"
              style={{
                background: `
                  repeating-linear-gradient(45deg, rgba(244,208,63,0.06) 0px, transparent 2px, transparent 8px, rgba(244,208,63,0.03) 10px),
                  repeating-linear-gradient(-45deg, rgba(255,215,0,0.04) 0px, transparent 3px, transparent 12px, rgba(255,215,0,0.02) 15px)
                `,
                backgroundSize: '20px 20px, 25px 25px'
              }}
            ></div>
            <div className="absolute top-40 left-12 w-24 h-24 rounded-lg bg-[#f4d03f]/8 animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-28 right-20 w-20 h-20 rounded-full bg-[#ffd700]/10 animate-float" style={{ animationDelay: '3.5s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-20">
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#0A0A0A] transform rotate-1 relative"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: '4px 4px 0px rgba(244,208,63,0.3), 3px 3px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '2px'
                  }}
                >
                  Featured{" "}
                  <span 
                    className="relative inline-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    Mindset
                  </span>{" "}
                  Tools
                  
                  {/* Hand-cut underline effect */}
                  <svg 
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-8" 
                    viewBox="0 0 500 25" 
                  >
                    <path 
                      d="M10,15 C80,8 150,20 250,12 C350,4 420,18 490,10" 
                      stroke="#f4d03f"
                      strokeWidth="5" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.7"
                      style={{ 
                        filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.2))'
                      }}
                    />
                    <path 
                      d="M15,17 C85,10 155,22 255,14 C355,6 425,20 485,12" 
                      stroke="#ffd700"
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  </svg>
                </h2>
              </div>

              {/* Tools Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                
                {/* Tool 1: Money Trauma Reset */}
                <div className="group relative bg-gradient-to-br from-gray-100/40 to-gray-200/30 dark:from-gray-700/30 dark:to-gray-800/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-600/20 hover:border-[#ffd700]/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {/* Gritty icon */}
                  <div className="mb-6 relative">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center transform -rotate-2 group-hover:rotate-0 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        animation: 'pearlescent 3s ease-in-out infinite',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.1), 2px 2px 0px rgba(244,208,63,0.3)',
                        border: '2px solid rgba(0,0,0,0.1)'
                      }}
                    >
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11V9L21 8.5V11M15 13V11L21 11.5V13M15 15V13L21 13.5V15M9 13C11.67 13 14.5 14.34 14.5 16V20H9.5V16C9.5 15.65 8.77 15 7.5 15S5.5 15.65 5.5 16V20H3.5V16C3.5 14.34 6.33 13 9 13ZM12,9A1,1 0 0,1 13,10A1,1 0 0,1 12,11A1,1 0 0,1 11,10A1,1 0 0,1 12,9Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 
                    className="text-2xl font-black mb-4 text-[#0A0A0A] transform -rotate-1"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                    }}
                  >
                    Money Trauma Reset
                  </h3>
                  
                  <p className="text-base font-semibold text-[#0A0A0A] leading-relaxed mb-6">
                    Break the cycle. Flip your relationship with money from scarcity to abundance mindset.
                  </p>
                  
                  <button 
                    className="w-full text-black font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-black/10"
                    style={{
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      animation: 'pearlescent 3s ease-in-out infinite',
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: "1px 1px 0px rgba(0,0,0,0.2)",
                      letterSpacing: '1px'
                    }}
                  >
                    Try Now
                  </button>
                </div>

                {/* Tool 2: Vision Board Blueprint */}
                <div className="group relative bg-gradient-to-br from-gray-100/40 to-gray-200/30 dark:from-gray-700/30 dark:to-gray-800/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-600/20 hover:border-[#ffd700]/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {/* Gritty icon */}
                  <div className="mb-6 relative">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center transform rotate-1 group-hover:rotate-0 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        animation: 'pearlescent 3s ease-in-out infinite',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.1), 2px 2px 0px rgba(244,208,63,0.3)',
                        border: '2px solid rgba(0,0,0,0.1)'
                      }}
                    >
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6A2,2 0 0,1 10,4A2,2 0 0,1 12,2M21,9V7L15,13.5L13.5,12L19,6.5L21,9M8.5,11.5L10,13L15,18L13.5,19.5L8.5,14.5L7,16L5.5,14.5L8.5,11.5M3,17H21V19H3V17Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 
                    className="text-2xl font-black mb-4 text-[#0A0A0A] transform rotate-1"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                    }}
                  >
                    Vision Board Blueprint
                  </h3>
                  
                  <p className="text-base font-semibold text-[#0A0A0A] leading-relaxed mb-6">
                    Map your future. Turn dreams into concrete goals with our street-smart vision framework.
                  </p>
                  
                  <button 
                    className="w-full text-black font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-black/10"
                    style={{
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      animation: 'pearlescent 3s ease-in-out infinite',
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: "1px 1px 0px rgba(0,0,0,0.2)",
                      letterSpacing: '1px'
                    }}
                  >
                    Download
                  </button>
                </div>

                {/* Tool 3: Self-Talk Flip */}
                <div className="group relative bg-gradient-to-br from-gray-100/40 to-gray-200/30 dark:from-gray-700/30 dark:to-gray-800/20 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-600/20 hover:border-[#ffd700]/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl">
                  {/* Gritty icon */}
                  <div className="mb-6 relative">
                    <div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        animation: 'pearlescent 3s ease-in-out infinite',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.1), 2px 2px 0px rgba(244,208,63,0.3)',
                        border: '2px solid rgba(0,0,0,0.1)'
                      }}
                    >
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 8.12,16.5 8.91,15.77L10.32,17.18C9.75,17.96 9.29,18.81 8.95,19.71C8.31,19.27 7.72,18.8 7.19,18.28H7.07M9.05,4.29C9.29,5.19 9.75,6.04 10.32,6.82L8.91,8.23C8.12,7.5 7.5,6.62 7.07,5.72C7.72,5.2 8.31,4.73 9.05,4.29M5.72,7.07C6.62,7.5 7.5,8.12 8.23,8.91L6.82,10.32C6.04,9.75 5.19,9.29 4.29,9.05C4.73,8.31 5.2,7.72 5.72,7.07M4.29,14.95C5.19,14.71 6.04,14.25 6.82,13.68L8.23,15.09C7.5,15.88 6.62,16.5 5.72,16.93C5.2,16.28 4.73,15.69 4.29,14.95M19.71,9.05C18.81,9.29 17.96,9.75 17.18,10.32L15.77,8.91C16.5,8.12 17.38,7.5 18.28,7.07C18.8,7.72 19.27,8.31 19.71,9.05M13.68,17.18C14.25,17.96 14.71,18.81 14.95,19.71C15.69,19.27 16.28,18.8 16.93,18.28C16.5,17.38 15.88,16.5 15.09,15.77L13.68,17.18M17.18,13.68C17.96,14.25 18.81,14.71 19.71,14.95C19.27,15.69 18.8,16.28 18.28,16.93C17.38,16.5 16.5,15.88 15.77,15.09L17.18,13.68M14.95,4.29C14.71,5.19 14.25,6.04 13.68,6.82L15.09,8.23C15.88,7.5 16.5,6.62 16.93,5.72C16.28,5.2 15.69,4.73 14.95,4.29Z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h3 
                    className="text-2xl font-black mb-4 text-[#0A0A0A] transform rotate-1"
                    style={{ 
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                    }}
                  >
                    Self-Talk Flip
                  </h3>
                  
                  <p className="text-base font-semibold text-[#0A0A0A] leading-relaxed mb-6">
                    Rewire your mind. Transform negative self-talk into your biggest advantage.
                  </p>
                  
                  <button 
                    className="w-full text-black font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-black/10"
                    style={{
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      animation: 'pearlescent 3s ease-in-out infinite',
                      fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                      textShadow: "1px 1px 0px rgba(0,0,0,0.2)",
                      letterSpacing: '1px'
                    }}
                  >
                    Try Now
                  </button>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Section Spacer */}
        <div className="py-8"></div>

        {/* FAQ: Mindset & Motivation Section */}
        <div className="container mx-auto px-6">
          <SectionOverlayBox>
            <div className="max-w-4xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-[#0A0A0A] transform rotate-1 relative"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: '4px 4px 0px rgba(244,208,63,0.3), 3px 3px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '2px'
                  }}
                >
                  FAQ:{" "}
                  <span 
                    className="relative inline-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    Mindset
                  </span>{" "}
                  & Motivation
                  
                  {/* Graffiti underline effect */}
                  <svg 
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-6" 
                    viewBox="0 0 500 20" 
                  >
                    <path 
                      d="M10,12 C120,6 250,18 380,8 Q420,12 490,10" 
                      stroke="#f4d03f"
                      strokeWidth="4" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.8"
                      style={{ 
                        filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.2))'
                      }}
                    />
                  </svg>
                </h2>
              </div>

              {/* FAQ Items */}
              <div className="space-y-8">
                
                {/* FAQ 1 */}
                <div className="relative border-l-4 border-[#f4d03f] pl-8 py-4">
                  <div className="flex items-start gap-4">
                    {/* Graffiti icon */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transform -rotate-2"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        animation: 'pearlescent 3s ease-in-out infinite',
                        boxShadow: '3px 3px 0px rgba(0,0,0,0.1), 1px 1px 0px rgba(244,208,63,0.3)'
                      }}
                    >
                      <span className="text-lg font-black text-black">Q</span>
                    </div>
                    
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-black mb-4 text-[#0A0A0A] transform -rotate-1"
                        style={{ 
                          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                          textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                        }}
                      >
                        "What if I keep falling off?"
                      </h3>
                      <p className="text-base md:text-lg text-[#0A0A0A] font-semibold leading-relaxed">
                        Real talk—everybody falls off. The difference is how fast you get back up. Don't make "falling off" mean you're weak. Make it mean you're human. The goal isn't perfection, it's consistency over time. Start with 10 minutes a day, not 10 hours. Build the habit first, then build the intensity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="relative border-l-4 border-[#f4d03f] pl-8 py-4">
                  <div className="flex items-start gap-4">
                    {/* Graffiti icon */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transform rotate-1"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        animation: 'pearlescent 3s ease-in-out infinite',
                        boxShadow: '3px 3px 0px rgba(0,0,0,0.1), 1px 1px 0px rgba(244,208,63,0.3)'
                      }}
                    >
                      <span className="text-lg font-black text-black">Q</span>
                    </div>
                    
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-black mb-4 text-[#0A0A0A] transform rotate-1"
                        style={{ 
                          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                          textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                        }}
                      >
                        "How do I stay motivated when nothing's working?"
                      </h3>
                      <p className="text-base md:text-lg text-[#0A0A0A] font-semibold leading-relaxed">
                        Motivation is trash. You need systems, not feelings. When nothing's working, that means you're in the learning phase—not the failing phase. Adjust your approach, not your goal. Find one small win every day and stack them. Progress isn't always visible, but it's always happening when you stay consistent.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="relative border-l-4 border-[#f4d03f] pl-8 py-4">
                  <div className="flex items-start gap-4">
                    {/* Graffiti icon */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transform -rotate-1"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        animation: 'pearlescent 3s ease-in-out infinite',
                        boxShadow: '3px 3px 0px rgba(0,0,0,0.1), 1px 1px 0px rgba(244,208,63,0.3)'
                      }}
                    >
                      <span className="text-lg font-black text-black">Q</span>
                    </div>
                    
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-black mb-4 text-[#0A0A0A] transform -rotate-1"
                        style={{ 
                          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                          textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                        }}
                      >
                        "Can I really break money trauma if I've never seen wealth?"
                      </h3>
                      <p className="text-base md:text-lg text-[#0A0A0A] font-semibold leading-relaxed">
                        Absolutely. Money trauma comes from the stories we tell ourselves, not the bank account we inherited. You don't need to see wealth to create it—you need to study it, understand it, and start building it one decision at a time. Your background is your starting point, not your ceiling. Every wealthy person was broke at some point. The difference is what they chose to believe and do next.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="relative border-l-4 border-[#f4d03f] pl-8 py-4">
                  <div className="flex items-start gap-4">
                    {/* Graffiti icon */}
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transform rotate-2"
                      style={{
                        background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                        backgroundSize: '400% 400%',
                        animation: 'pearlescent 3s ease-in-out infinite',
                        boxShadow: '3px 3px 0px rgba(0,0,0,0.1), 1px 1px 0px rgba(244,208,63,0.3)'
                      }}
                    >
                      <span className="text-lg font-black text-black">Q</span>
                    </div>
                    
                    <div>
                      <h3 
                        className="text-xl md:text-2xl font-black mb-4 text-[#0A0A0A] transform rotate-1"
                        style={{ 
                          fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                          textShadow: '2px 2px 0px rgba(244,208,63,0.2)'
                        }}
                      >
                        "How long before I see real changes?"
                      </h3>
                      <p className="text-base md:text-lg text-[#0A0A0A] font-semibold leading-relaxed">
                        Mindset shifts happen fast—sometimes in days. Behavior changes take 30-90 days to stick. Financial results? That depends on how you apply what you learn. But here's what's real: you'll feel different within weeks, think different within months, and live different within a year. The key is starting today, not waiting for perfect conditions.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </SectionOverlayBox>
        </div>

        {/* Section Spacer */}
        <div className="py-8"></div>

        {/* CTA: Join the Movement Section */}
        <div className="container mx-auto px-6">
          <SectionOverlayBox>
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Section Header */}
              <div className="mb-12">
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#0A0A0A] transform -rotate-1 relative"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: '4px 4px 0px rgba(244,208,63,0.3), 3px 3px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '2px'
                  }}
                >
                  Join the{" "}
                  <span 
                    className="relative inline-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    Movement
                  </span>
                  
                  {/* Hand-drawn underline effect */}
                  <svg 
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-xl h-8" 
                    viewBox="0 0 400 25" 
                  >
                    <path 
                      d="M10,15 C100,8 200,22 300,12 Q350,16 390,14" 
                      stroke="#f4d03f"
                      strokeWidth="5" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.7"
                      style={{ 
                        filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.2))'
                      }}
                    />
                    <path 
                      d="M15,17 Q105,10 205,19 Q305,24 385,16" 
                      stroke="#ffd700"
                      strokeWidth="2" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.5"
                    />
                  </svg>
                </h2>
                
                <p className="text-lg md:text-xl text-[#0A0A0A] font-semibold leading-relaxed max-w-2xl mx-auto">
                  Ready to flip your mindset and start building? Get your free mindset tool and join thousands of builders who are already transforming their lives.
                </p>
              </div>

              {/* CTA Button and Form */}
              <div className="space-y-6">
                <button 
                  className="group relative inline-flex items-center gap-3 text-black font-bold py-4 px-10 rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border-3 border-black/20 text-lg md:text-xl"
                  style={{
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    animation: 'pearlescent 3s ease-in-out infinite',
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
                    letterSpacing: '2px',
                    transform: 'rotate(-1deg)'
                  }}
                  onClick={() => {
                    const newsletterSection = document.querySelector('[data-section="newsletter"]');
                    if (newsletterSection) {
                      const formElement = newsletterSection.querySelector('form');
                      if (formElement) {
                        const formRect = formElement.getBoundingClientRect();
                        const targetPosition = window.pageYOffset + formRect.top;
                        const offset = window.innerWidth < 768 ? window.innerHeight * 0.3 : 100;
                        window.scrollTo({
                          top: targetPosition - offset,
                          behavior: 'smooth'
                        });
                      }
                    }
                  }}
                >
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                  </svg>
                  Get Your Free Mindset Tool
                </button>
                
                <p 
                  className="text-sm text-[#0A0A0A] font-semibold transform rotate-1"
                  style={{ 
                    fontFamily: "'Kalam', 'Comic Neue', cursive",
                    textShadow: '1px 1px 0px rgba(244,208,63,0.3)'
                  }}
                >
                  No spam, just real blueprints.
                </p>
              </div>

            </div>
          </SectionOverlayBox>
        </div>

        {/* Section Spacer */}
        <div className="py-8"></div>

        {/* Real Builder Stories Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Polaroid photo overlay effects */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div 
              className="absolute inset-0 opacity-6"
              style={{
                background: `
                  radial-gradient(circle at 25% 25%, rgba(244,208,63,0.04) 0%, transparent 40%),
                  radial-gradient(circle at 75% 75%, rgba(255,215,0,0.03) 0%, transparent 40%),
                  radial-gradient(circle at 50% 90%, rgba(244,208,63,0.02) 0%, transparent 30%)
                `,
                backgroundSize: '400px 400px, 350px 350px, 300px 300px'
              }}
            ></div>
            <div className="absolute top-24 right-12 w-16 h-16 rounded-lg bg-[#f4d03f]/6 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-[#ffd700]/8 animate-float" style={{ animationDelay: '4.5s' }}></div>
            <div className="absolute top-1/2 left-8 w-8 h-8 rounded-sm bg-[#f4d03f]/5 animate-float" style={{ animationDelay: '1.5s' }}></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Section Header */}
              <div className="text-center mb-20">
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#0A0A0A] transform -rotate-1 relative"
                  style={{ 
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: '4px 4px 0px rgba(244,208,63,0.3), 3px 3px 0px rgba(0,0,0,0.1)',
                    letterSpacing: '2px'
                  }}
                >
                  Real{" "}
                  <span 
                    className="relative inline-block"
                    style={{ 
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}
                  >
                    Builder
                  </span>{" "}
                  Stories
                  
                  {/* Polaroid-style underline effect */}
                  <svg 
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-xl h-6" 
                    viewBox="0 0 400 20" 
                  >
                    <path 
                      d="M10,12 C100,6 200,18 300,8 Q350,12 390,10" 
                      stroke="#f4d03f"
                      strokeWidth="4" 
                      fill="none" 
                      strokeLinecap="round"
                      opacity="0.8"
                      style={{ 
                        filter: 'drop-shadow(1px 1px 0px rgba(0,0,0,0.2))'
                      }}
                    />
                  </svg>
                </h2>
              </div>

              {/* Polaroid Stories Grid */}
              {loading ? (
                <div className="text-center py-12">
                  <div className="text-lg font-semibold text-[#0A0A0A]">Loading builder stories...</div>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <div className="text-lg font-semibold text-red-600">Unable to load stories. Please try again later.</div>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {stories.map((story, index) => (
                    <div 
                      key={story.id}
                      className="group relative transform hover:scale-105 transition-all duration-300"
                      style={{ 
                        transform: `rotate(${index % 2 === 0 ? '-' : ''}${Math.random() * 3 + 1}deg)`,
                        animationDelay: `${index * 200}ms`
                      }}
                    >
                      {/* Polaroid Frame */}
                      <div 
                        className="bg-white p-4 pb-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 relative"
                        style={{
                          boxShadow: '0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)',
                          transform: 'perspective(1000px) rotateX(0deg)',
                          background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)'
                        }}
                      >
                        {/* Photo */}
                        <div className="aspect-square bg-gray-200 rounded-sm mb-4 overflow-hidden">
                          {story.avatar_url ? (
                            <img 
                              src={story.avatar_url} 
                              alt={`${story.name} from ${story.city_area}`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                              <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                              </svg>
                            </div>
                          )}
                        </div>
                        
                        {/* Handwritten Quote */}
                        <div className="mb-4">
                          <p 
                            className="text-sm leading-relaxed text-gray-800"
                            style={{ 
                              fontFamily: "'Kalam', 'Comic Neue', cursive",
                              transform: 'rotate(-0.5deg)',
                              textShadow: '0.5px 0.5px 0px rgba(0,0,0,0.1)'
                            }}
                          >
                            "{story.quote}"
                          </p>
                        </div>
                        
                        {/* Name and Location */}
                        <div 
                          className="absolute bottom-3 left-4 right-4"
                          style={{ 
                            fontFamily: "'Kalam', 'Comic Neue', cursive",
                            transform: 'rotate(0.5deg)'
                          }}
                        >
                          <div className="text-xs font-bold text-gray-700">
                            {story.name}
                          </div>
                          <div className="text-xs text-gray-600">
                            {story.city_area}
                          </div>
                        </div>
                        
                        {/* Tape Effect */}
                        <div 
                          className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 opacity-60"
                          style={{
                            background: 'linear-gradient(45deg, #ffeaa7 0%, #fdcb6e 100%)',
                            borderRadius: '2px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Refresh Button */}
              <div className="text-center">
                <button
                  onClick={refreshStories}
                  className="group relative inline-flex items-center gap-2 text-black font-bold py-3 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-black/10"
                  style={{
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    animation: 'pearlescent 3s ease-in-out infinite',
                    fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                    textShadow: "1px 1px 0px rgba(0,0,0,0.2)",
                    letterSpacing: '1px'
                  }}
                >
                  <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"/>
                  </svg>
                  More Stories
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer - Static across all pages */}
      <Footer />
    </div>
  );
};

export default About;