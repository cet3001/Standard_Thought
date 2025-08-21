import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

interface FeaturesProps {
  features: FeatureItem[];
}

const Features = ({ features }: FeaturesProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono leading-tight">
                Features That Transform
              </h2>
                
              {/* Graffiti-style underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-2"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C22 6 42 10 62 8C82 6 102 12 122 8C142 4 162 10 182 8C202 6 222 10 242 8C262 6 282 10 298 8"
                  stroke="url(#featuresGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="featuresGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#f4d03f' }} />
                    <stop offset="25%" style={{ stopColor: '#ffd700' }} />
                    <stop offset="50%" style={{ stopColor: '#ffeb3b' }} />
                    <stop offset="75%" style={{ stopColor: '#fff176' }} />
                    <stop offset="100%" style={{ stopColor: '#f4d03f' }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto leading-relaxed">
              The tools and strategies that power your transformation
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glass Card */}
                <div className="relative bg-white/20 dark:bg-gray-900/25 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-white/30 dark:border-gray-700/40 hover:bg-white/30 dark:hover:bg-gray-900/35 hover:shadow-3xl hover:border-white/40 dark:hover:border-gray-600/50 transition-all duration-500 p-6">
                  {/* Grain texture overlay */}
                  <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlRmlsdGVyIj4KICAgICAgPGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgIDwvZmlsdGVyPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2VGaWx0ZXIpIiBvcGFjaXR5PSIwLjQiLz4KPC9zdmc+')] pointer-events-none"></div>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="text-4xl font-permanent-marker transform -rotate-3 drop-shadow-lg" style={{
                      color: 'transparent',
                      background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                      backgroundSize: '400% 400%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      animation: 'pearlescent 3s ease-in-out infinite'
                    }}>
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl mb-3 font-ibm-plex-mono leading-tight transition-colors duration-300 drop-shadow-sm" style={{
                    color: 'transparent',
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 dark:text-brand-cream/80 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-3 right-3 w-6 h-6 transform rotate-45 rounded-sm opacity-60" style={{
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    animation: 'pearlescent 3s ease-in-out infinite',
                    opacity: 0.2
                  }}></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 bg-white/10 transform -rotate-12 rounded-full opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;