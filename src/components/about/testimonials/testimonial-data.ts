
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  category: string;
  initials: string;
  categoryColor: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "I was stuck making $12/hour with no vision for my future. Standard Thought helped me see that my story wasn't my ceiling. Now I run my own digital marketing agency and just hit six figures.",
    name: "Marcus",
    title: "Atlanta • Digital Agency Owner",
    category: "Breakthrough",
    initials: "M",
    categoryColor: "bg-emerald-500"
  },
  {
    quote: "Growing up, I thought wanting money made you greedy. Calvin showed me wealth is about freedom and impact. I went from broke college student to real estate investor in 18 months.",
    name: "Keisha",
    title: "Chicago • Real Estate Investor", 
    category: "Mindset Shift",
    initials: "K",
    categoryColor: "bg-purple-500"
  },
  {
    quote: "I used to apologize for my ambition. Standard Thought taught me to own my vision without shrinking myself. Now I help other women build their empires unapologetically.",
    name: "Jasmine",
    title: "Brooklyn • Business Coach",
    category: "Confidence",
    initials: "J",
    categoryColor: "bg-pink-500"
  }
];
