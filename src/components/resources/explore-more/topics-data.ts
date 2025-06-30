
import { CreditCard, PiggyBank, Laptop, Banknote } from "lucide-react";

export const exploreMoreTopics = [
  {
    title: "Credit Building",
    description: "Fix your credit score fast with street-smart strategies",
    icon: CreditCard,
    route: "/blog/credit-building-guide",
    color: "#D4AF37", // Muted gold
    bgGradient: "from-[#2A2A2A] to-[#1A1A1A]"
  },
  {
    title: "Smart Investing", 
    description: "Start building wealth with micro-investing apps",
    icon: PiggyBank,
    route: "/start-investing-guide",
    color: "#B8860B", // Dark goldenrod
    bgGradient: "from-[#2D2D2D] to-[#1D1D1D]"
  },
  {
    title: "AI Side Hustles",
    description: "Turn AI tools into consistent income streams",
    icon: Laptop,
    route: "/blog/ai-side-hustles-guide", 
    color: "#FFD700", // Classic gold
    bgGradient: "from-[#2F2F2F] to-[#1F1F1F]"
  },
  {
    title: "Cash Management",
    description: "Break the paycheck-to-paycheck cycle for good",
    icon: Banknote,
    route: "/wealth-building-strategies",
    color: "#DDBF47", // Warm gold
    bgGradient: "from-[#323232] to-[#222222]"
  }
];
