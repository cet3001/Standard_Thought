
import QuestionAnswerContent from "../content-structure/question-answer-content";
import HeaderHierarchy from "../content-structure/header-hierarchy";

const BlogFeaturedQuestions = () => {
  const featuredQuestions = [
    {
      question: "How long does it take to build generational wealth from nothing?",
      answer: "Building generational wealth typically takes 15-30 years of consistent investing and strategic business decisions. However, urban entrepreneurs can accelerate this timeline through:\n\n• Starting businesses in their 20s-30s\n• Reinvesting profits into appreciating assets\n• Building multiple income streams\n• Focusing on scalable business models\n• Teaching wealth-building to the next generation\n\nThe key is starting early and staying consistent with both saving and investing strategies.",
      tags: ["Generational Wealth", "Long-term Planning", "Wealth Building"],
      actionText: "Read Success Stories",
      actionLink: "/blog"
    },
    {
      question: "What business can I start with $500 or less?",
      answer: "Profitable businesses you can start with $500 or less:\n\n• Content creation services (writing, social media management)\n• Local service businesses (cleaning, tutoring, pet sitting)\n• Digital marketing consultant using free tools\n• Reselling products from thrift stores or clearance\n• Food business (meal prep, catering from home)\n• AI-powered services (using ChatGPT, Midjourney)\n\nFocus on service-based businesses that leverage your existing skills and require minimal upfront investment.",
      tags: ["Low-Capital Business", "Entrepreneurship", "Startup Ideas"],
      actionText: "Get Business Guide",
      actionLink: "/blog"
    }
  ];

  return (
    <div className="mb-16">
      <HeaderHierarchy level={2} className="text-center mb-12">
        Featured Questions from Our Community
      </HeaderHierarchy>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredQuestions.map((qa, index) => (
          <QuestionAnswerContent
            key={index}
            question={qa.question}
            answer={qa.answer}
            tags={qa.tags}
            actionText={qa.actionText}
            actionLink={qa.actionLink}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogFeaturedQuestions;
