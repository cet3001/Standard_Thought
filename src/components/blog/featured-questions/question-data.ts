
export interface FeaturedQuestion {
  question: string;
  answer: string;
  tags: string[];
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
  startupCost: string;
  quickStartChecklist: string[];
  realStories: string[];
  nextMoves: string;
  nextMovesLink: string;
  actionText: string;
  actionLink: string;
  secondaryActionText: string;
  secondaryActionLink: string;
}

export const questionPool: FeaturedQuestion[] = [
  {
    question: "What's the biggest mistake first-gen wealth builders make?",
    answer: "The biggest mistake is trying to copy strategies without understanding the context. Here's what really matters:\n\n• Know your starting point: Your credit score, income stability, and risk tolerance aren't the same as someone else's\n• Build systems, not just income: Focus on repeatable processes that generate consistent cash flow\n• Invest in education first: Understanding compound interest and tax implications saves more money than most 'get rich quick' schemes\n• Start ugly and improve: Perfect plans never launch - start with what you have and optimize as you learn\n\nMost people want the Instagram highlight reel, but real wealth comes from boring consistency and smart systems.",
    tags: ["Common Mistakes", "First-Gen Wealth", "Strategy"],
    skillLevel: "Beginner",
    startupCost: "$0",
    quickStartChecklist: [
      "Assess your current financial position (income, debt, credit score)",
      "Set up a simple tracking system for expenses and income",
      "Choose ONE wealth-building strategy to focus on first",
      "Join a community or find an accountability partner",
      "Schedule weekly progress reviews"
    ],
    realStories: [
      "Keisha from Detroit went from $40K debt to $100K net worth in 3 years by focusing on credit repair first, then side hustles.",
      "Marcus in Baltimore avoided the crypto trap and built steady wealth through index funds and a lawn care business.",
      "Tasha from Phoenix started with budgeting apps and now runs a $50K/year bookkeeping service."
    ],
    nextMoves: "Ready to build your foundation? Start with our Credit Building Blueprint to establish your financial base.",
    nextMovesLink: "/blog?category=Credit Building",
    actionText: "Read Keisha's Full Story",
    actionLink: "/blog?search=keisha+detroit+success",
    secondaryActionText: "See More Success Stories",
    secondaryActionLink: "/blog?search=success+story"
  },
  {
    question: "How do you know if a side hustle is worth scaling?",
    answer: "A side hustle is ready to scale when you see these 3 clear signals:\n\n1. Predictable Revenue: You can forecast monthly income within 20% accuracy\n2. Systems That Work Without You: The business runs for at least a week without your direct involvement\n3. Market Demand Exceeds Your Capacity: You're turning down work or have a waiting list\n\nRed flags to avoid scaling:\n• Income depends entirely on your personal time\n• No clear path to hire/train others\n• Market is too small or seasonal\n• Profit margins are shrinking as you grow\n\nFocus on businesses where your role shifts from 'doing' to 'managing systems.'",
    tags: ["Side Hustles", "Scaling Business", "Decision Framework"],
    skillLevel: "Intermediate",
    startupCost: "$100-500",
    quickStartChecklist: [
      "Track your hustle's revenue for 3 months straight",
      "Document all your processes in a simple guide",
      "Test running the business for 1 week without you",
      "Survey 5 customers about demand and referrals",
      "Calculate true profit margins including your time"
    ],
    realStories: [
      "Carlos scaled his lawn care hustle from $500/month to $5K by systematizing routes and hiring two part-timers.",
      "Jasmine turned her Etsy shop into a $3K/month business by creating templates others could customize.",
      "DeShawn went from weekend car detailing to a 4-location operation by documenting everything and training others."
    ],
    nextMoves: "Got consistent revenue? Check out our Business Scaling Strategies to build systems that work without you.",
    nextMovesLink: "/blog?category=Entrepreneurship",
    actionText: "Read Carlos's Scaling Story",
    actionLink: "/blog?search=carlos+lawn+care+scaling",
    secondaryActionText: "Explore More Scaling Stories",
    secondaryActionLink: "/blog?search=scaling+business"
  },
  {
    question: "What financial moves should you make in your first $10K?",
    answer: "Your first $10K is the foundation for everything else. Here's the strategic order:\n\nFirst $1K: Emergency fund in high-yield savings (prevents debt spiral)\nNext $2K: Pay off high-interest debt (credit cards, payday loans)\nNext $2K: Build credit with secured card + report rent payments\nNext $3K: Start investing in index funds (S&P 500, total market)\nLast $2K: Skill development or business investment with proven ROI\n\nDon't do this: Put everything in crypto, day trading, or 'business opportunities' without emergency funds first.\n\nThis order maximizes your financial stability while building wealth-generating assets.",
    tags: ["Financial Strategy", "Investment Priority", "Wealth Building"],
    skillLevel: "Beginner",
    startupCost: "$1K+",
    quickStartChecklist: [
      "Open a high-yield savings account for emergency fund",
      "List all debts by interest rate (highest first)",
      "Apply for a secured credit card if needed",
      "Research low-cost index funds (Vanguard, Fidelity)",
      "Set up automatic transfers for each goal"
    ],
    realStories: [
      "Jamal followed this exact blueprint and went from broke to $50K invested in 18 months while working retail.",
      "Maya used this system to pay off $8K in credit card debt and start investing within her first year.",
      "Andre prioritized his emergency fund first and avoided going back into debt when his car broke down."
    ],
    nextMoves: "Ready to invest your first $1K? Our Free Investing Guide breaks down exactly which funds to choose and why.",
    nextMovesLink: "/free-investing-guide",
    actionText: "Read Jamal's Investment Journey",
    actionLink: "/blog?search=jamal+investment+strategy",
    secondaryActionText: "See All Investment Stories",
    secondaryActionLink: "/blog?search=investment+strategy"
  },
  {
    question: "How long does it take to build generational wealth from nothing?",
    answer: "Real generational wealth takes 10-20 years of consistent action, but you'll see meaningful progress much sooner:\n\nYear 1-2: Foundation building (emergency fund, debt payoff, credit repair)\nYear 3-5: Wealth acceleration (investing, side hustles, skill development)\nYear 5-10: System optimization (business scaling, advanced investing, tax strategies)\nYear 10-20: Legacy building (real estate, business ownership, teaching others)\n\nThe key: Start with what you have, stay consistent, and compound your efforts. Most people see their first $10K within 2-3 years, $100K by year 7-10.\n\nGenerational wealth isn't just money—it's knowledge, systems, and mindset you pass down.",
    tags: ["Generational Wealth", "Timeline", "Long-term Strategy"],
    skillLevel: "Beginner",
    startupCost: "$0",
    quickStartChecklist: [
      "Set your 20-year wealth vision and work backwards",
      "Start tracking net worth monthly (even if it's negative)",
      "Choose your first wealth-building pillar (investing, business, or real estate)",
      "Find mentors or examples who've walked this path",
      "Document your journey to teach others later"
    ],
    realStories: [
      "Keisha from Detroit went from $40K debt to $100K net worth in 3 years by staying consistent with her plan.",
      "The Johnson family in Memphis built their first $250K in 8 years through real estate and business ownership.",
      "Tony from Oakland started at 25 with nothing and retired his mom at 40 through systematic wealth building."
    ],
    nextMoves: "Ready to start your wealth journey? Our Generational Wealth Blueprint shows you exactly how to build lasting legacy.",
    nextMovesLink: "/wealth-building-strategies",
    actionText: "Read Tony's Full Journey",
    actionLink: "/blog?search=tony+oakland+generational+wealth",
    secondaryActionText: "See More Wealth Stories",
    secondaryActionLink: "/blog?search=generational+wealth"
  },
  {
    question: "What business can I start with $500 or less?",
    answer: "Here are proven businesses you can launch with $500 or less:\n\nService-Based ($0-100):\n• Virtual assistant, tutoring, social media management\n• House cleaning, car detailing, pet sitting\n• Freelance writing, graphic design, web development\n\nProduct-Based ($100-500):\n• Print-on-demand (t-shirts, mugs, phone cases)\n• Dropshipping (start with one niche)\n• Digital products (courses, templates, ebooks)\n• Reselling (thrift flips, wholesale products)\n\nThe secret: Start with services to build capital, then reinvest in products for passive income.",
    tags: ["Low-Cost Business", "Entrepreneurship", "Side Hustles"],
    skillLevel: "Beginner",
    startupCost: "$0-500",
    quickStartChecklist: [
      "Pick ONE business model that matches your skills",
      "Set up basic online presence (social media + simple website)",
      "Create your first offer and price it confidently",
      "Find your first 3 customers through your network",
      "Reinvest first profits to improve and scale"
    ],
    realStories: [
      "Marcus in Atlanta started a cleaning business with $100 in supplies and landed his first client in a week.",
      "Jasmine launched her print-on-demand store with $150 and hit $1K/month within 4 months.",
      "Kevin started dropshipping phone accessories with $300 and scaled to $2K/month profit in 6 months."
    ],
    nextMoves: "Ready to launch? Download our Business Startup Checklist and get your first sale within 30 days.",
    nextMovesLink: "/blog?category=Bootstrapping",
    actionText: "Read Marcus's Startup Story",
    actionLink: "/blog?search=marcus+atlanta+cleaning+business",
    secondaryActionText: "See All Startup Stories",
    secondaryActionLink: "/blog?search=low+cost+business"
  }
];
