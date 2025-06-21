
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, UserPlus, TrendingUp, Repeat } from "lucide-react";

const InvestingStepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Pick the Right App",
      icon: Smartphone,
      content: {
        lookFor: [
          "No minimums (Acorns, Cash App Investing, Robinhood, Stash)",
          "No or low fees",
          "Easy to use on your phone"
        ],
        proTip: "Start with apps that let you buy \"fractional shares\"—that means you can own a piece of a stock for as little as $1."
      }
    },
    {
      number: 2,
      title: "Set Up Your Account",
      icon: UserPlus,
      content: {
        lookFor: [
          "Email address",
          "Bank account or debit card (even a prepaid card works with some apps)",
          "Basic info (name, address, SSN for tax purposes)"
        ],
        proTip: "If you don't have a bank account, check out our Banking for Beginners Guide."
      }
    },
    {
      number: 3,
      title: "Make Your First Investment",
      icon: TrendingUp,
      content: {
        lookFor: [
          "Deposit $1–$10 to start (don't stress about big money)",
          "Pick a stock or ETF (an ETF is like a bundle of stocks—safer for beginners)",
          "Hit \"Buy\"—that's it!"
        ],
        proTip: "Look for companies you know (Nike, Apple, etc.) or choose a broad ETF (like S&P 500) for instant diversification."
      }
    },
    {
      number: 4,
      title: "Keep It Going",
      icon: Repeat,
      content: {
        lookFor: [
          "Set a weekly or monthly auto-invest—even $5 at a time",
          "Watch your money grow over time (it's slow but real)",
          "Don't panic if the market dips—this is a long game"
        ],
        proTip: "Consistency beats perfection. Small amounts invested regularly build real wealth over time."
      }
    }
  ];

  return (
    <section id="steps" className="py-16 bg-white/70 dark:bg-brand-black/70">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <HeaderHierarchy level={2} className="text-center mb-12 text-brand-black dark:text-brand-cream">
            Step-By-Step: How to Start Investing from <span className="text-[#FFD700]">Scratch</span>
          </HeaderHierarchy>
          
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <Card key={step.number} className="border-[#247EFF]/30 hover:border-[#247EFF]/50 transition-all duration-300 bg-white/90 dark:bg-brand-black/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#247EFF] to-green-500 flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                      <IconComponent className="h-8 w-8 text-[#247EFF]" />
                    </div>
                    <CardTitle className="text-[#247EFF] text-xl">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-3 text-[#FFD700] border-[#FFD700]">
                        What {step.number <= 2 ? "You'll Need" : step.number === 3 ? "to Look For" : "to Remember"}
                      </Badge>
                      <ul className="space-y-2">
                        {step.content.lookFor.map((item, index) => (
                          <li key={index} className="text-brand-black/70 dark:text-brand-cream/70 flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-[#247EFF]/10 rounded-lg p-4 border-l-4 border-[#FFD700]">
                      <p className="text-[#FFD700] font-semibold mb-2">
                        {step.number <= 2 ? "Real Talk:" : "Pro Tip:"}
                      </p>
                      <p className="text-brand-black dark:text-brand-cream text-sm leading-relaxed">
                        {step.content.proTip}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestingStepsSection;
