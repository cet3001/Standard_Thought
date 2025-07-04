import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import Analytics from "@/components/analytics";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const About = () => {
  useMobilePerformance();
  const [isVisible, setIsVisible] = useState(false);
  const { textureImageUrl } = useUrbanTexture();

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
      <main className="relative z-10">
        {/* Hero Section: "Unlock Your Mindset Arsenal" */}
        <section className="pt-40 pb-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Hero Content */}
              <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Main Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
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
                <div className="max-w-4xl mx-auto mb-12">
                  <p className="text-xl md:text-2xl lg:text-3xl text-[#0A0A0A] font-bold leading-relaxed">
                    This ain't just about stacking bread—it's about{" "}
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
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
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
          </div>
        </section>

        {/* Section Spacer */}
        <div className="py-8"></div>

        {/* Standard Thought Codes Section */}
        <section className="py-32 relative overflow-hidden">
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

      </main>

      {/* Footer - Static across all pages */}
      <Footer />
    </div>
  );
};

export default About;