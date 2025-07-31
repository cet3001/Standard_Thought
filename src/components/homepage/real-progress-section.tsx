import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  quote: string;
  struggle: string;
  solution: string;
  avatarImageUrl?: string;
}

interface RealProgressSectionProps {
  isVisible: boolean;
}

const RealProgressSection = ({ isVisible }: RealProgressSectionProps) => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah K.",
      quote: "Standard Thought gave me the clarity I desperately needed!",
      struggle: "Feeling stuck and overwhelmed by too many conflicting ideas about money and success.",
      solution: "The framework provided a clear path, helping me prioritize and achieve tangible results. I went from confused to confident in my financial decisions.",
      avatarImageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Michael B.",
      quote: "My productivity soared after implementing these strategies.",
      struggle: "Struggling with procrastination and inconsistent work habits that kept me broke.",
      solution: "Standard Thought's actionable steps helped me build sustainable routines and overcome mental blocks. Now I'm consistently earning and saving.",
      avatarImageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    },
    {
      name: "Elena R.",
      quote: "A true breakthrough in personal development.",
      struggle: "Lack of motivation and a clear sense of direction in building wealth.",
      solution: "Through Standard Thought, I discovered my core values and learned to align my actions with my goals. I finally have a plan that works.",
      avatarImageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-brand-black dark:text-brand-cream font-ibm-plex-mono">
                REAL{" "}
                <span className="font-permanent-marker transform rotate-1" style={{
                  color: 'transparent',
                  background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                  backgroundSize: '400% 400%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'pearlescent 3s ease-in-out infinite'
                }}>
                  PROGRESS
                </span>
                
                {/* Graffiti-style underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C22 6 42 10 62 8C82 6 102 12 122 8C142 4 162 10 182 8C202 6 222 10 242 8C262 6 282 10 298 8"
                    stroke="url(#progressGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#f4d03f' }} />
                      <stop offset="25%" style={{ stopColor: '#ffd700' }} />
                      <stop offset="50%" style={{ stopColor: '#ffeb3b' }} />
                      <stop offset="75%" style={{ stopColor: '#fff176' }} />
                      <stop offset="100%" style={{ stopColor: '#f4d03f' }} />
                    </linearGradient>
                  </defs>
                </svg>
              </h2>
            </div>
            <p className="text-lg text-brand-black/70 dark:text-brand-cream/70 max-w-2xl mx-auto leading-relaxed">
              Real people, real transformations. Here's what happens when you stop playing and start building.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 bg-white/20 dark:bg-gray-900/25 backdrop-blur-md border border-white/30 dark:border-gray-700/40 hover:bg-white/30 dark:hover:bg-gray-900/35 hover:shadow-2xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 shadow-lg border-2 border-white/30">
                      <img
                        src={testimonial.avatarImageUrl}
                        alt={`${testimonial.name} avatar`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-brand-black dark:text-brand-cream font-ibm-plex-mono">
                        {testimonial.name}
                      </h4>
                      <div className="px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-black">
                        BUILDER
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg font-medium mb-4 text-brand-black dark:text-brand-cream italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Struggle */}
                  <div className="mb-4">
                    <h5 className="font-bold text-sm text-red-600 dark:text-red-400 mb-2 uppercase tracking-wide">
                      Struggled With:
                    </h5>
                    <p className="text-sm text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
                      {testimonial.struggle}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h5 className="font-bold text-sm text-green-600 dark:text-green-400 mb-2 uppercase tracking-wide">
                      How Standard Thought Helped:
                    </h5>
                    <p className="text-sm text-brand-black/80 dark:text-brand-cream/80 leading-relaxed">
                      {testimonial.solution}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-6 h-6 transform rotate-45 rounded-sm opacity-20" style={{
                    background: 'linear-gradient(45deg, #f4d03f, #f7dc6f, #fdeaa7, #f8e71c, #ffd700, #ffeb3b, #fff176, #f4d03f)',
                    backgroundSize: '400% 400%',
                    animation: 'pearlescent 3s ease-in-out infinite'
                  }}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pearlescent {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default RealProgressSection;