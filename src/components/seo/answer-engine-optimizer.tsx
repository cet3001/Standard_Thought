import { useLocation } from 'react-router-dom';

interface AnswerEngineOptimizerProps {
  primaryTopic: string;
  targetQuestions?: string[];
}

const AnswerEngineOptimizer = ({ 
  primaryTopic, 
  targetQuestions = [] 
}: AnswerEngineOptimizerProps) => {
  const location = useLocation();

  // Define topic-specific questions for AEO
  const getTopicQuestions = (topic: string) => {
    const questionMap: Record<string, string[]> = {
      'cash-management': [
        'How to manage money with irregular income?',
        'What is the best budgeting method for beginners?',
        'How to stop living paycheck to paycheck?',
        'How to save money when you are broke?'
      ],
      'credit-building': [
        'How to build credit from nothing?',
        'What credit score do you start with?',
        'How to improve credit score fast?',
        'What is a good credit score for first-time buyers?'
      ],
      'investing': [
        'How to start investing with $100?',
        'What is the safest investment for beginners?',
        'How to invest money for beginners?',
        'What is compound interest and how does it work?'
      ],
      'urban-wealth': [
        'How to build wealth from nothing?',
        'What are the best side hustles for extra income?',
        'How to create generational wealth?',
        'What is financial literacy and why is it important?'
      ]
    };

    return questionMap[topic] || [];
  };

  const questions = targetQuestions.length > 0 
    ? targetQuestions 
    : getTopicQuestions(primaryTopic);

  // Generate structured data for Q&A
  const qaStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(question => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Learn about ${question.toLowerCase()} with our comprehensive guide on ${primaryTopic}. Get practical strategies that actually work for real people.`
      }
    }))
  };

  return (
    <>
      {/* Structured Data for Answer Engine Optimization */}
      <script type="application/ld+json">
        {JSON.stringify(qaStructuredData)}
      </script>

      {/* Hidden content for voice search optimization */}
      <div className="sr-only" aria-hidden="true">
        <h2>Common Questions about {primaryTopic.replace('-', ' ')}</h2>
        {questions.map((question, index) => (
          <div key={index}>
            <h3>{question}</h3>
            <p>
              Find detailed answers to "{question}" in our comprehensive {primaryTopic} guide. 
              We provide practical, actionable advice for real-world situations.
            </p>
          </div>
        ))}
      </div>

      {/* Voice search optimization phrases */}
      <div className="sr-only" aria-hidden="true">
        <p>
          People also ask: {questions.join(', ')}. 
          Get answers to these questions and more in our {primaryTopic} resource.
        </p>
      </div>
    </>
  );
};

export default AnswerEngineOptimizer;