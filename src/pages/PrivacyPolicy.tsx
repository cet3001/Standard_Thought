
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      <main className="pt-20 sm:pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-[#0A0A0A] dark:text-brand-cream">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-[#0A0A0A] dark:text-brand-cream">
            <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 mb-8">Last updated: December 2024</p>
            
            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">1. Information We Collect</h2>
            <p className="mb-6">At Standardthought, we collect information you provide directly to us when you:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Subscribe to our newsletter</li>
              <li>Create an account on our platform</li>
              <li>Contact us through our website</li>
              <li>Engage with our content</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Send you our weekly "Hustle Notes" newsletter</li>
              <li>Provide you with relevant content and updates</li>
              <li>Improve our services and user experience</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze website usage and performance</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">3. Information Sharing</h2>
            <p className="mb-6">We don't sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with trusted service providers who assist us in operating our website and conducting our business.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">4. Email Communications</h2>
            <p className="mb-4">When you subscribe to our newsletter, you'll receive:</p>
            <ul className="mb-4 list-disc pl-6">
              <li>A welcome email with exclusive insights</li>
              <li>Weekly "Hustle Notes" with receipts & real talk and strategies</li>
              <li>Occasional updates about new content and opportunities</li>
            </ul>
            <p className="mb-6">You can unsubscribe at any time by clicking the unsubscribe link in any email or contacting us directly.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">5. Cookies and Tracking</h2>
            <p className="mb-6">We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">6. Data Security</h2>
            <p className="mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">8. Changes to This Policy</h2>
            <p className="mb-6">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">9. Contact Us</h2>
            <p className="mb-6">If you have any questions about this Privacy Policy or our data practices, please contact us through our website or email us directly.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
