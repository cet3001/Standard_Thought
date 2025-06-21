
import QuickStartChecklist from "@/components/resources/quick-start-checklist";

const InvestingChecklist = () => {
  const checklistItems = [
    { id: "app", text: "Download a micro-investing app (Acorns, Cash App, Robinhood, or Stash)" },
    { id: "account", text: "Set up your account and connect your card" },
    { id: "deposit", text: "Deposit your first $1–$10" },
    { id: "buy", text: "Buy a stock or ETF" },
    { id: "auto", text: "Set up auto-invest (optional)" },
    { id: "check", text: "Check your progress once a month" }
  ];

  return (
    <section className="py-16 bg-brand-cream/30 dark:bg-brand-black/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <QuickStartChecklist
            title="Quick-Start Checklist"
            description="Follow these steps to start your investing journey today. Check off each item as you complete it!"
            items={checklistItems}
            downloadTitle="start-investing-checklist"
            bgColor="bg-green-50/10 dark:bg-green-900/20"
            accentColor="border-green-500"
          />
        </div>
      </div>
    </section>
  );
};

export default InvestingChecklist;
