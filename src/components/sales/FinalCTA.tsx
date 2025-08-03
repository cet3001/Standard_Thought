import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { CTAButton } from '@/components/shared/CTAButton';
import { Zap } from 'lucide-react';

export const FinalCTA = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const watermarkOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 0.12]);

  const handleCTAClick = () => {
    // Scroll to hero section or open modal
    const heroSection = document.getElementById('hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-muted/30 to-background overflow-hidden"
    >
      {/* Background Watermark */}
      <motion.div 
        style={{ opacity: isHovered ? 0.12 : watermarkOpacity }}
        className="absolute bottom-8 right-8 text-6xl md:text-8xl font-bold text-primary/10 pointer-events-none select-none hidden md:block"
      >
        Built From the Ground Up
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-brand-black dark:text-brand-cream">Ready to move for real?</span>{" "}
              <span className="pearlescent-text">You're not the only one.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-brand-black/80 dark:text-brand-cream/80 max-w-3xl mx-auto leading-relaxed">
              Built for the over-it, the underestimated, the ones tired of dead ends.{" "}
              <span className="text-brand-black dark:text-brand-cream font-semibold">Your story's just starting.</span>
            </p>

            {/* CTA Button */}
            <motion.div 
              className="pt-8"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <CTAButton
                size="xl"
                onClick={handleCTAClick}
                icon={Zap}
                className="mx-auto text-xl px-12 py-6 font-handwritten font-bold pearlescent-text shadow-pearlescent hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 border-2 border-[#FFD700]/40 hover:border-[#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700]/30 hover:to-[#FFA500]/30"
                aria-label="Start your cycle-breaker journey with the first featured guide"
              >
                ⚡ Unlock the First Move
              </CTAButton>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="pt-8 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Via Negativa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Jobs-to-Be-Done</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Skin-in-the-Game</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};