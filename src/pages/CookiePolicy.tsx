
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-[#0A0A0A] dark:text-brand-cream">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none text-[#0A0A0A] dark:text-brand-cream">
            <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 mb-8">Last updated: December 2024</p>
            
            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">What Are Cookies?</h2>
            <p className="mb-6">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">How We Use Cookies</h2>
            <p className="mb-4">Standardthought uses cookies to:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve your browsing experience</li>
              <li>Analyze website traffic and performance</li>
              <li>Provide relevant content recommendations</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-[#0A0A0A] dark:text-brand-cream">Essential Cookies</h3>
            <p className="mb-4">These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and remembering your login status.</p>

            <h3 className="text-xl font-semibold mb-3 text-[#0A0A0A] dark:text-brand-cream">Analytics Cookies</h3>
            <p className="mb-4">We use analytics cookies to understand how visitors interact with our website. This helps us improve our content and user experience. These cookies collect information anonymously.</p>

            <h3 className="text-xl font-semibold mb-3 text-[#0A0A0A] dark:text-brand-cream">Functional Cookies</h3>
            <p className="mb-4">These cookies enable enhanced functionality and personalization, such as remembering your theme preference (light/dark mode) and language settings.</p>

            <h3 className="text-xl font-semibold mb-3 text-[#0A0A0A] dark:text-brand-cream">Marketing Cookies</h3>
            <p className="mb-6">We may use marketing cookies to track visitors across websites to display relevant advertisements and measure the effectiveness of our marketing campaigns.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">Third-Party Cookies</h2>
            <p className="mb-4">We may also use third-party services that set cookies on our behalf. These include:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for content sharing</li>
              <li>Email service providers for newsletter management</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">Managing Cookies</h2>
            <p className="mb-4">You can control and manage cookies in several ways:</p>
            <ul className="mb-4 list-disc pl-6">
              <li>Browser Settings: Most browsers allow you to block or delete cookies</li>
              <li>Opt-out Tools: Many advertising networks provide opt-out tools</li>
              <li>Privacy Settings: Some websites offer cookie preference centers</li>
            </ul>
            <p className="mb-6">Please note that blocking certain cookies may impact your experience on our website and limit some functionality.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">Cookie Retention</h2>
            <p className="mb-4">Different cookies have different lifespans:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Session cookies: Deleted when you close your browser</li>
              <li>Persistent cookies: Remain on your device for a set period or until deleted</li>
              <li>First-party cookies: Set by our website</li>
              <li>Third-party cookies: Set by external services we use</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">Updates to This Policy</h2>
            <p className="mb-6">We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Please check this page periodically for updates.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">Contact Us</h2>
            <p className="mb-6">If you have any questions about our use of cookies or this Cookie Policy, please contact us through our website.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;
