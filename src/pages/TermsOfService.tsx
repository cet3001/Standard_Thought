
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-brand-black">
      <Navigation />
      
      <main className="pt-36 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-[#0A0A0A] dark:text-brand-cream">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-[#0A0A0A] dark:text-brand-cream">
            <p className="text-sm text-[#0A0A0A]/60 dark:text-brand-cream/60 mb-8">Last updated: December 2024</p>
            
            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">1. Acceptance of Terms</h2>
            <p className="mb-6">By accessing and using Standardthought ("the Website"), you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our website, newsletter, and any services we provide.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">2. Use of the Website</h2>
            <p className="mb-4">You may use our Website for lawful purposes only. You agree not to use the Website:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>In any way that violates any applicable federal, state, local, or international law</li>
              <li>To spam, harass, or send unsolicited communications</li>
              <li>To impersonate any person or entity</li>
              <li>To interfere with or disrupt the Website or servers</li>
              <li>To attempt to gain unauthorized access to any portion of the Website</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">3. Newsletter Subscription</h2>
            <p className="mb-4">When you subscribe to our newsletter, you agree to:</p>
            <ul className="mb-4 list-disc pl-6">
              <li>Provide accurate and current email information</li>
              <li>Receive our weekly "Hustle Notes" and related communications</li>
              <li>Our right to modify the frequency and content of communications</li>
            </ul>
            <p className="mb-6">You can unsubscribe at any time using the unsubscribe link in our emails.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">4. Content and Intellectual Property</h2>
            <p className="mb-6">All content on this Website, including text, graphics, logos, images, and software, is the property of Standardthought and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">5. User-Generated Content</h2>
            <p className="mb-6">If you submit any content to our Website (comments, feedback, etc.), you grant us a non-exclusive, royalty-free, perpetual license to use, modify, and display such content. You represent that you own or have the necessary rights to the content you submit.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">6. Disclaimers</h2>
            <p className="mb-4">The information on this Website is provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation:</p>
            <ul className="mb-6 list-disc pl-6">
              <li>Implied warranties of merchantability for a particular purpose</li>
              <li>Non-infringement of intellectual property rights</li>
              <li>Accuracy, reliability, or completeness of information</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">7. Limitation of Liability</h2>
            <p className="mb-6">In no event shall Standardthought be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this Website.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">8. Educational Content Disclaimer</h2>
            <p className="mb-6">Our content is for educational and inspirational purposes only. Business strategies and advice shared through our newsletter and website should not be considered professional financial or legal advice. Always consult with qualified professionals before making business decisions.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">9. Modifications</h2>
            <p className="mb-6">We may revise these Terms of Service at any time without notice. By using this Website, you agree to be bound by the current version of these Terms of Service.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">10. Governing Law</h2>
            <p className="mb-6">These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>

            <h2 className="text-2xl font-bold mb-4 text-[#247EFF]">11. Contact Information</h2>
            <p className="mb-6">If you have any questions about these Terms of Service, please contact us through our website.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
