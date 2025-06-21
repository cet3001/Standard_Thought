
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap, Users, TrendingUp, CheckCircle, Brain, Rocket, Shield, ArrowRight, UserCheck, Star } from "lucide-react";
import { trackButtonClick, trackResourceClick } from "@/components/analytics";

interface HomepageHeroProps {
  scrollToNewsletter: () => void;
}

const HomepageHero = ({ scrollToNewsletter }: HomepageHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetBlueprint = () => {
    trackButtonClick('Get the Blueprint', 'hero_section', 'scroll_to_newsletter');
    scrollToNewsletter();
  };

  const handleReadStories = () => {
    trackButtonClick('Read Builder Stories', 'hero_section', 'navigate_to_blog');
  };

  const handleLinkClick = (title: string, link: string) => {
    trackResourceClick(title, 'hero_value_prop');
  };

  const valueProps = [
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="Financial growth and investment icon" />,
      title: "Street-Smart Investing",
      description: "Master urban investing strategies and build wealth starting with just $1",
      link: "/blog/free-investing-guide",
      linkText: "Start investing today"
    },
    {
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="AI technology and automation icon" />,
      title: "AI Side Hustles",
      description: "Generate $500-5000+ monthly with proven artificial intelligence income streams",
      link: "/blog/ai-side-hustles-guide",
      linkText: "Launch AI business"
    },
    {
      icon: <Rocket className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="Financial education and learning icon" />,
      title: "Hood Financial Literacy",
      description: "Real financial education in language that makes sense, no corporate BS",
      link: "/financial-education-guide",
      linkText: "Master money basics"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#247EFF]" aria-label="Community and support network icon" />,
      title: "Builder Community",
      description: "Connect with first-gen entrepreneurs creating generational wealth",
      link: "/blog",
      linkText: "Read success stories"
    }
  ];

  return (
    <section className="pt-32 pb-24 bg-brand-cream dark:bg-brand-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 animate-float"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 rounded-2xl bg-accent/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-brand-black dark:text-brand-cream">
                Build <span className="text-[#FFD700]">Legacy</span><br />
                From <span className="text-[#FFD700]">Nothing</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-brand-black dark:text-brand-cream leading-relaxed px-4">
                Real strategies for <strong>urban wealth building</strong>, proven <Link to="/blog/ai-side-hustles-guide" className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 transition-colors">AI side hustles</Link>, and <Link to="/financial-education-guide" className="text-[#247EFF] hover:text-[#0057FF] underline decoration-dotted underline-offset-4 transition-colors">financial education</Link> designed for first-gen entrepreneurs building generational wealth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
                <Button 
                  size="lg"
                  onClick={handleGetBlueprint}
                  className="w-full sm:w-auto bg-gradient-to-r from-accent to-[#FFD700] text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  aria-label="Get the wealth building blueprint - scroll to newsletter signup"
                >
                  <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-label="Lightning bolt icon representing fast action" />
                  Get the Blueprint
                </Button>
                
                <Link to="/blog" onClick={handleReadStories}>
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-accent to-[#FFD700] text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    aria-label="Read real builder success stories"
                  >
                    Read Builder Stories
                  </Button>
                </Link>
              </div>

              <div className="text-center text-xs sm:text-sm text-brand-black/60 dark:text-brand-cream/60 px-4">
                <p>
                  Join 1000+ first-gen entrepreneurs mastering <Link to="/blog/free-investing-guide" className="text-[#247EFF] hover:text-[#0057FF] underline">urban investing strategies</Link>, 
                  learning <Link to="/resources" className="text-[#247EFF] hover:text-[#0057FF] underline">street-smart money moves</Link>, and building wealth that lasts generations.
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="group" aria-label="Success metrics and social proof">
              
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-[#247EFF]/10 rounded-full flex items-center justify-center group-hover:bg-[#247EFF]/20 transition-colors">
                    <Users className="h-8 w-8 text-[#247EFF]" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#247EFF] mb-2" aria-label="Over 1000 community members">1,000+</div>
                <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80 font-medium mb-2">Active Community Members</div>
                <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">First gen hustlers building wealth from scratch</div>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <TrendingUp className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2" aria-label="Income growth from 500 to 50,000 dollars">$500→$50K+</div>
                <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80 font-medium mb-2">Average Income Growth</div>
                <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">From side hustles to legitimate businesses</div>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                    <CheckCircle className="h-8 w-8 text-orange-600" aria-hidden="true" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">83%</div>
                <div className="text-[#0A0A0A]/80 dark:text-brand-cream/80 font-medium mb-2">Success Rate</div>
                <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">Members who increased their income within 6 months</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-[#247EFF]/20">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-[#0A0A0A]/80 dark:text-brand-cream/80 italic mb-4">
                  "I went from living check to check to having my first $10K saved in 8 months. The frameworks here are different—they actually work for people like us."
                </p>
                <div className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60">
                  — Marcus T., Community Member since 2023
                </div>
              </div>
            </div>
          </div>

          {/* Value Props */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 px-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {valueProps.map((prop, index) => (
              <div 
                key={index}
                className={`text-center p-4 sm:p-6 bg-white/70 dark:bg-brand-black/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="mb-3 sm:mb-4 flex justify-center">
                  {prop.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-brand-black dark:text-brand-cream group-hover:text-accent transition-colors">
                  {prop.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-black/70 dark:text-brand-cream/70 mb-3 sm:mb-4 leading-relaxed">
                  {prop.description}
                </p>
                <Link 
                  to={prop.link}
                  onClick={() => handleLinkClick(prop.title, prop.link)}
                  className="text-[#247EFF] hover:text-[#0057FF] font-semibold text-xs sm:text-sm underline decoration-dotted underline-offset-4 hover:decoration-solid transition-all duration-300"
                >
                  {prop.linkText} →
                </Link>
              </div>
            ))}
          </div>

          {/* Content Pillars */}
          <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-black dark:text-brand-cream">
                The Standard Thought Blueprint
              </h2>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                Our unique approach combines mindset mastery, strategic hustle, and legacy building—designed for the culture, proven for progress.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="group" aria-label="Standard Thought methodology pillars">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    <Brain className="h-10 w-10 text-purple-600" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
                  Mindset Mastery
                </h3>
                <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
                  Heal money trauma, build confidence, and unlock your full potential—rooted in our experience.
                </p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-[#247EFF]/10 rounded-full flex items-center justify-center group-hover:bg-[#247EFF]/20 transition-colors">
                    <Rocket className="h-10 w-10 text-[#247EFF]" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
                  Strategic Hustle
                </h3>
                <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
                  Turn hustle into systems. Launch AI side hustles, stack income streams—no big startup needed.
                </p>
              </div>

              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-amber-500/10 rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                    <Shield className="h-10 w-10 text-amber-600" aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-black dark:text-brand-cream mb-4">
                  Legacy Building
                </h3>
                <p className="text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
                  Stack assets, break cycles, and build wealth that lasts—step-by-step, for your family's future.
                </p>
              </div>
            </div>
          </div>

          {/* Success Stories */}
          <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-black dark:text-brand-cream">
                Real People. Real Progress.
              </h2>
              <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
                Our community is flipping the script—one win at a time. Here's how folks just like you are turning hustle into legacy with Standard Thought.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" role="group" aria-label="Community success stories">
              <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-6 hover:shadow-lg hover:shadow-[#247EFF]/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-brand-black/80 dark:text-brand-cream/80 mb-4 italic">
                  "I started with $0 and a vision. Now I've got a side hustle bringing in $1,200/month. The blueprint made it simple."
                </blockquote>
                <cite className="text-sm text-brand-black/60 dark:text-brand-cream/60 font-medium">
                  — Tasha, Detroit
                </cite>
              </div>

              <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-green-500/20 rounded-3xl p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#247EFF]/10 rounded-full flex items-center justify-center mr-4">
                    <UserCheck className="h-6 w-6 text-[#247EFF]" aria-hidden="true" />
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-brand-black/80 dark:text-brand-cream/80 mb-4 italic">
                  "Standard Thought helped me fix my credit and stack my first $10K. I never thought I'd get here."
                </blockquote>
                <cite className="text-sm text-brand-black/60 dark:text-brand-cream/60 font-medium">
                  — Malik, Houston
                </cite>
              </div>

              <div className="bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mr-4">
                    <Brain className="h-6 w-6 text-purple-600" aria-hidden="true" />
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-brand-black/80 dark:text-brand-cream/80 mb-4 italic">
                  "I finally understand how to make my money work for me, not just work for money."
                </blockquote>
                <cite className="text-sm text-brand-black/60 dark:text-brand-cream/60 font-medium">
                  — J. Rivera, Bronx
                </cite>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/blog">
                <Button 
                  variant="outline" 
                  className="border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white"
                  aria-label="Read more success stories"
                >
                  See More Stories
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
              <Link to="/submit-story">
                <Button 
                  variant="outline" 
                  className="border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white"
                  aria-label="Share your success story"
                >
                  Share Your Win
                  <UserCheck className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Final CTA */}
          <div className={`text-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToNewsletter}
              className="bg-gradient-to-r from-[#247EFF]/10 to-[#247EFF]/20 border-[#247EFF] text-[#247EFF] hover:bg-[#247EFF] hover:text-white font-semibold px-8 py-4 rounded-3xl transition-all duration-300 hover:scale-105"
              aria-label="Ready to start your own story - Scroll to newsletter signup"
            >
              <ArrowDown className="mr-2 h-5 w-5" aria-label="Arrow pointing down to scroll to newsletter section" />
              Ready to start your own story? Get the Blueprint
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageHero;
