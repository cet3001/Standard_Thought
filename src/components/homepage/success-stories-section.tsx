
import { TrendingUp, UserCheck, Brain } from "lucide-react";

interface SuccessStoriesSectionProps {
  isVisible: boolean;
}

const SuccessStoriesSection = ({ isVisible }: SuccessStoriesSectionProps) => {
  // Rotating stories - can be updated weekly
  const stories = [
    {
      quote: "Started with $0 and a vision. Now I've got a side hustle bringing in $1,200/month. The blueprint made it simple.",
      name: "Tasha",
      location: "Detroit",
      icon: <TrendingUp className="h-6 w-6 text-green-600" aria-hidden="true" />,
      bgColor: "bg-green-500/10"
    },
    {
      quote: "Standard Thought helped me fix my credit and stack my first $10K. I never thought I'd get here.",
      name: "Malik",
      location: "Houston", 
      icon: <UserCheck className="h-6 w-6 text-[#247EFF]" aria-hidden="true" />,
      bgColor: "bg-[#247EFF]/10"
    },
    {
      quote: "I finally understand how to make my money work for me, not just work for money.",
      name: "J. Rivera",
      location: "Bronx",
      icon: <Brain className="h-6 w-6 text-purple-600" aria-hidden="true" />,
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <div className={`mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-black dark:text-brand-cream">
          Real People. Real Progress.
        </h2>
        <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
          Our community is flipping the script—one win at a time. Here's how folks just like you are turning hustle into legacy.
        </p>
      </div>

      {/* Polaroid-style Story Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16" role="group" aria-label="Community success stories">
        {stories.map((story, index) => (
          <div 
            key={index}
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${800 + index * 200}ms` }}
          >
            {/* Polaroid Frame */}
            <div className="bg-white dark:bg-brand-cream shadow-xl transform rotate-1 hover:rotate-0 transition-all duration-300 hover:scale-105 p-4 pb-8 relative">
              {/* Tape effect */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-200/60 rounded-sm rotate-3 shadow-sm"></div>
              
              {/* Photo area */}
              <div className="bg-gray-100 dark:bg-gray-200 h-32 mb-4 flex items-center justify-center relative overflow-hidden">
                <div className={`w-12 h-12 ${story.bgColor} rounded-full flex items-center justify-center`}>
                  {story.icon}
                </div>
                
                {/* Vintage photo texture overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-yellow-100/20 pointer-events-none"></div>
              </div>
              
              {/* Handwritten quote */}
              <blockquote 
                className="text-brand-black/90 text-sm mb-3 italic leading-relaxed"
                style={{ 
                  fontFamily: "'Kalam', 'Comic Neue', cursive",
                  transform: 'rotate(-0.5deg)'
                }}
              >
                "{story.quote}"
              </blockquote>
              
              {/* Handwritten signature */}
              <div 
                className="text-right text-brand-black/80 text-sm font-medium"
                style={{ 
                  fontFamily: "'Kalam', 'Comic Neue', cursive",
                  transform: 'rotate(0.5deg)'
                }}
              >
                — {story.name}, {story.location}
              </div>
              
              {/* Corner curl effect */}
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-gray-200 transform rotate-45 translate-x-2 translate-y-2 shadow-inner"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Note about rotating stories */}
      <div className="text-center">
        <p 
          className="text-sm text-brand-black/60 dark:text-brand-cream/60 transform -rotate-1"
          style={{ fontFamily: "'Kalam', 'Comic Neue', cursive" }}
        >
          ↑ Fresh stories every week from our community
        </p>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
