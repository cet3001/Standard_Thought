import React from 'react';
import { Helmet } from 'react-helmet';
import PaidGuideCard from './PaidGuideCard';
import { usePaidGuides, PaidGuide } from '@/hooks/use-paid-guides';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { analytics } from '@/lib/analytics-service';

const PaidGuidesVault: React.FC = () => {
  const { guides, loading, initiatePurchase } = usePaidGuides();

  // Loading skeleton
  if (loading) {
    return (
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Skeleton className="h-12 w-96 mx-auto mb-4" />
              <Skeleton className="h-6 w-full max-w-4xl mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="h-80">
                  <CardContent className="p-6">
                    <Skeleton className="h-full w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // No guides available
  if (!guides || guides.length === 0) {
    return (
      <section className="py-16 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                <span className="text-brand-black dark:text-brand-cream">The Vault: </span>
                <span className="text-[#FFD369]">Paid Playbook Drop</span>
              </h2>
              <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-4xl mx-auto">
                You earned your way past the gate. These moves go deeper—premium strategies for cycle-breakers building for real.
              </p>
            </div>
            <div className="text-center py-16">
              <p className="text-lg text-brand-black dark:text-brand-cream/80">
                No premium guides available at the moment. Check back soon for exclusive content.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Run the Play - Premium Wealth Playbooks",
            "description": "Premium wealth-building strategies for cycle-breakers and first-generation builders",
            "url": "https://www.standardthought.com/sales",
            "numberOfItems": guides.length,
            "itemListElement": guides.map((guide, index) => ({
              "@type": "Product",
              "position": index + 1,
              "name": guide.title,
              "description": guide.description || guide.subtitle,
              "sku": guide.slug,
              "category": "Financial Education",
              "creator": {
                "@type": "Organization",
                "name": "Standard Thought",
                "url": "https://www.standardthought.com"
              },
              "brand": {
                "@type": "Brand",
                "name": "Standard Thought"
              },
              "offers": {
                "@type": "Offer",
                "price": (guide.price / 100).toFixed(2),
                "priceCurrency": guide.currency || "USD",
                "availability": "https://schema.org/InStock",
                "url": `https://www.standardthought.com/sales#${guide.slug}`,
                "validFrom": new Date().toISOString(),
                "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
                "seller": {
                  "@type": "Organization",
                  "name": "Standard Thought"
                }
              },
              "audience": {
                "@type": "Audience",
                "audienceType": "Cycle-breakers and wealth builders"
              }
            }))
          })}
        </script>
      </Helmet>

      <section className="py-16 relative" id="paid-vault">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
                <span className="text-brand-black dark:text-brand-cream">The Vault: </span>
                <span className="text-[#FFD369]">Paid Playbook Drop</span>
              </h2>
              <p className="text-lg text-brand-black dark:text-brand-cream/80 max-w-4xl mx-auto leading-relaxed">
                You earned your way past the gate. These moves go deeper—premium strategies for cycle-breakers building for real.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guides.map((guide) => (
                <PaidGuideCard
                  key={guide.id}
                  guide={guide}
                  onPurchase={initiatePurchase}
                />
              ))}
            </div>

            {/* Optional bundle section for future expansion */}
            {guides.length >= 3 && (
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-[#FFD700]/20 via-[#FFA500]/15 to-[#FFD700]/20 border-2 border-[#FFD700]/30 rounded-2xl p-8 backdrop-blur-sm max-w-2xl mx-auto">
                  <h3 className="text-2xl font-black text-brand-black dark:text-brand-cream mb-4">
                    Want It All?
                  </h3>
                  <p className="text-lg text-brand-black dark:text-brand-cream/80 mb-4">
                    Get the complete vault - every playbook, every strategy, every move.
                  </p>
                  <p className="text-sm text-[#FFD369] font-medium opacity-80">
                    Bundle pricing coming soon - get each one now at individual rates.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaidGuidesVault;