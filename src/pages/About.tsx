
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">
              Why <span className="text-[#247EFF]">Standard</span>thought?
            </h1>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 leading-relaxed">
              Because we're not here for average. This is for the ones who had to figure it out with nothing but hustle, 
              grit, and their own two hands. If you've ever felt like you had to make your own playbook—this is your home.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white/90 dark:bg-brand-black/80">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <img 
                src="/lovable-uploads/a8faab87-8319-4fa0-ae53-35597c6f8fc5.png" 
                alt="Looking up at the crown - building your own legacy" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
              />
            </div>
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">Our Story</h2>
              <div className="space-y-4 text-[#0A0A0A]/70 dark:text-brand-cream/70">
                <p>
                  Standardthought was built by outsiders and underdogs—people who were tired of playing by someone else's rules. 
                  We came up with empty pockets, big dreams, and nobody handing us a roadmap. Every win was earned. Every lesson was paid for in sweat.
                </p>
                <p>
                  This isn't a guru brand. It's a real community for the ones who had to build their own table, teach themselves the game, 
                  and turn setbacks into strategy. If you've ever had to make a way out of no way, you're one of us.
                </p>
                <p>
                  We're here for the long haul—creating a <span className="text-[#247EFF] font-medium">legacy</span>, not just a payday. 
                  Everything we do is for those who came from nothing and refuse to let that define them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-brand-cream dark:bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-[#0A0A0A] dark:text-brand-cream">What We Stand For</h2>
            <p className="text-xl text-[#0A0A0A]/70 dark:text-brand-cream/70 max-w-2xl mx-auto">
              These aren't just words on a wall. They're the rules we live by, the code we built from scratch, 
              and the promises we make to those coming up behind us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real Growth Only",
                description: "We don't fake wins or flex for clout. Everything here is built from scratch—no shortcuts, no overnight hype."
              },
              {
                title: "Put Each Other On",
                description: "No gatekeeping. If I learn, you learn. We celebrate wins, share game, and pull each other up. That's how we all get ahead."
              },
              {
                title: "Legacy Moves",
                description: "We're not here for the quick flip. Every decision is made with the next generation in mind. We're building for people who aren't even here yet."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm border border-[#247EFF]/20 rounded-3xl p-8 text-center transition-all duration-1000 hover:scale-105 hover:shadow-lg hover:shadow-[#247EFF]/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-[#247EFF]">{value.title}</h3>
                <p className="text-[#0A0A0A]/70 dark:text-brand-cream/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
