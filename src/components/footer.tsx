
import { Link } from "react-router-dom";
import SiteNavigationHub from "./site-navigation-hub";
import LSIContent from "./lsi-content";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-brand-cream py-16 relative">
      <LSIContent primaryKeyword="wealth building" context="wealth-building" />
      
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/" className="text-2xl font-bold text-brand-cream hover:text-[#247EFF] transition-colors">
                Standardthought
              </Link>
            </div>
            <p className="text-brand-cream/80 leading-relaxed mb-6">
              Empowering first-generation entrepreneurs to build generational wealth through proven strategies, community support, and actionable frameworks.
            </p>
            <div className="text-sm text-brand-cream/60">
              Building legacy businesses since 2024
            </div>
          </div>

          {/* Navigation Hub */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 text-[#247EFF]">Explore Our Ecosystem</h3>
            <SiteNavigationHub showInFooter={true} />
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-brand-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy-policy" className="text-brand-cream/70 hover:text-[#247EFF] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-brand-cream/70 hover:text-[#247EFF] transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-brand-cream/70 hover:text-[#247EFF] transition-colors">
                Cookie Policy
              </Link>
              <Link to="/unsubscribe" className="text-brand-cream/70 hover:text-[#247EFF] transition-colors">
                Unsubscribe
              </Link>
            </div>
            <div className="text-sm text-brand-cream/60">
              © 2024 Standardthought. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
