
import HeaderHierarchy from "@/components/content-structure/header-hierarchy";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, MessageCircle } from "lucide-react";

const InvestingNextMoves = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <HeaderHierarchy level={2} className="text-center mb-12 text-foreground">
            Next <span className="text-[#FFD700]">Moves</span>
          </HeaderHierarchy>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[#247EFF]/30">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-[#247EFF] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Level Up:</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ready to go deeper? Check out our Investing for Beginners Series for more strategies and real stories.
                </p>
                <Button 
                  className="bg-gradient-to-r from-[#247EFF] to-green-500 text-white font-bold hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="/wealth-building-strategies">Explore Advanced Strategies</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#247EFF]/30">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">Got Questions?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Hit our FAQ below or DM us on Instagram for quick answers.
                </p>
                <Button 
                  className="bg-gradient-to-r from-[#FFD700] to-green-500 text-black font-bold hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="#faq">Check FAQ</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestingNextMoves;
