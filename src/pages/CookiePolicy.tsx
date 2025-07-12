import Navigation from "@/components/navigation";
import { useHeaderHeight } from "@/hooks/use-header-height";
import Footer from "@/components/footer";
import SEO from "@/components/seo";
import Analytics from "@/components/analytics";
import { useUrbanTexture } from "@/hooks/use-urban-texture";
import { useMobilePerformance } from "@/hooks/use-mobile-performance";

const CookiePolicy = () => {
  useMobilePerformance();
  const { textureImageUrl } = useUrbanTexture();

  const breadcrumbs = [
    { name: "Home", url: "https://www.standardthought.com", position: 1 },
    { name: "Cookie Policy", url: "https://www.standardthought.com/cookie-policy", position: 2 }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Site-wide Urban Background */}
      <div className="fixed inset-0 -z-50" aria-hidden="true">
        {textureImageUrl && (
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url(${textureImageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        )}
        
        {/* REMOVED DUPLICATE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 via-slate-700/15 to-slate-900/10"></div>
        
        {/* Content overlay for text readability - CONSISTENT LIGHT GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-brand-cream/85 to-brand-cream/90 dark:from-brand-black/80 dark:via-brand-black/85 dark:to-brand-black/90"></div>
      </div>

      {/* SEO */}
      <SEO
        title="Cookie Policy | Standardthought"
        description="Learn how Standardthought uses cookies to improve your experience on our website."
        keywords="cookie policy, privacy, data collection, website cookies"
        url="/cookie-policy"
        type="website"
        breadcrumbs={breadcrumbs}
      />

      {/* Analytics */}
      <Analytics />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 pb-16" style={{ marginTop: `${useHeaderHeight()}px`, paddingTop: '3rem' }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-gray-300/20 dark:border-gray-700/20 shadow-xl">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 text-black dark:text-brand-cream leading-tight">
              Cookie Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-black dark:text-brand-cream">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                <strong>Last updated:</strong> July 6, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-brand-cream">What Are Cookies?</h2>
                <p className="mb-4 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences and 
                  analyzing how you use our site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-brand-cream">How We Use Cookies</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-brand-cream">Essential Cookies</h3>
                    <p className="leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable core functionality 
                      such as security, network management, and accessibility.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-brand-cream">Analytics Cookies</h3>
                    <p className="leading-relaxed">
                      We use Google Analytics to understand how visitors interact with our website. 
                      This helps us improve our content and user experience.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-brand-cream">Functional Cookies</h3>
                    <p className="leading-relaxed">
                      These cookies remember your preferences (like theme settings) to provide a more 
                      personalized experience.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-brand-cream">Managing Cookies</h2>
                <p className="mb-4 leading-relaxed">
                  You can control and manage cookies in your browser settings. Please note that disabling 
                  certain cookies may impact the functionality of our website.
                </p>
                <p className="leading-relaxed">
                  For more information on how to manage cookies in your specific browser, please refer to 
                  your browser's help documentation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-brand-cream">Third-Party Cookies</h2>
                <p className="leading-relaxed">
                  We may use third-party services such as Google Analytics that place cookies on your device. 
                  These services have their own privacy policies governing the use of cookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-brand-cream">Contact Us</h2>
                <p className="leading-relaxed">
                  If you have any questions about our use of cookies, please contact us at{" "}
                  <a href="mailto:hello@standardthought.com" className="text-[#FFD700] font-semibold hover:underline">
                    hello@standardthought.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CookiePolicy;