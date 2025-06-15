
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import StorySubmissionForm from "@/components/story-submission-form";

const SubmitStory = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <SEO 
        title="Submit Your Success Story | Standardthought"
        description="Share your journey from struggle to success. Inspire other hustlers by telling how you flipped your circumstances and built something meaningful."
        keywords="submit success story, share your journey, urban entrepreneur stories, hustle success stories, inspire others"
        url="/submit-story"
        type="website"
      />
      
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] dark:text-brand-cream mb-6">
              Your Story Matters
            </h1>
            <p className="text-xl text-[#0A0A0A]/80 dark:text-brand-cream/80 max-w-2xl mx-auto">
              Every success starts with struggle. Share how you flipped your circumstances and inspire the next generation of hustlers to level up.
            </p>
          </div>
          
          <StorySubmissionForm />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitStory;
