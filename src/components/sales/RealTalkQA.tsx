import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const qaData = [
  {
    question: "What if I'm broke?",
    answer: "You're why this exists. Start with free plays—flip trauma into traction, step by step."
  },
  {
    question: "Can this fix my credit if it's shot?", 
    answer: "Real templates, tested in the trenches. Not just fixes—actual progress."
  },
  {
    question: "Is this just another get-rich scheme?",
    answer: "Not even close. Built from the grind up. Zero shortcuts, just tools."
  },
  {
    question: "Why trust this over the usual gurus?",
    answer: "Because our only script is lived experience. No filters. Just proof."
  }
];

export const RealTalkQA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Real Questions,</span>{" "}
              <span className="text-foreground">Real</span>{" "}
              <span className="text-primary">Answers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              No sugar-coating, no BS—just talk about building wealth from nothing.
            </p>
          </div>

          {/* Q&A Grid */}
          <div 
            ref={ref}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {qaData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group relative"
              >
                <div className="relative p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground leading-tight">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};