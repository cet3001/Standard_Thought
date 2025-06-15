
interface BlogShowcaseHeaderProps {
  isVisible: boolean;
}

const BlogShowcaseHeader = ({ isVisible }: BlogShowcaseHeaderProps) => {
  return (
    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black dark:text-brand-cream">
        Real Stories. Real Struggle. <span className="text-accent">Real Wins.</span>
      </h2>
      <p className="text-xl text-brand-black/70 dark:text-brand-cream/70 max-w-3xl mx-auto">
        No gurus. No gatekeepers. Just hustlers, dreamers, and builders who started with nothing but grit—and turned it into legacy. Your story's next.
      </p>
    </div>
  );
};

export default BlogShowcaseHeader;
