
import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-brand-cream py-12 relative">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link to="/" className="text-2xl font-bold text-brand-cream hover:text-[#247EFF] transition-colors">
                Standardthought
              </Link>
            </div>
            <p className="text-brand-cream/80 text-sm leading-relaxed mb-4">
              Empowering underestimated creators to build generational wealth from the ground up.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <Link to="/about" className="text-brand-cream/80 hover:text-[#247EFF] transition-colors">
                About
              </Link>
              <Link to="/blog" className="text-brand-cream/80 hover:text-[#247EFF] transition-colors">
                Builder Stories
              </Link>
              <Link to="/about" className="text-brand-cream/80 hover:text-[#247EFF] transition-colors">
                Mindset Tools
              </Link>
              <Link to="/resources" className="text-brand-cream/80 hover:text-[#247EFF] transition-colors">
                Success Strategies
              </Link>
              <Link to="/auth" className="text-brand-cream/80 hover:text-[#247EFF] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:hello@standardthought.com" 
                className="flex items-center space-x-2 text-brand-cream/80 hover:text-[#247EFF] transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>hello@standardthought.com</span>
              </a>
              
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/standardthought" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-cream/80 hover:text-[#247EFF] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/standardthought" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-cream/80 hover:text-[#247EFF] transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/standardthought" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-cream/80 hover:text-[#247EFF] transition-colors"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="border-t border-brand-cream/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link to="/privacy-policy" className="text-brand-cream/70 hover:text-[#247EFF] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-brand-cream/70 hover:text-[#247EFF] transition-colors">
                Terms of Use
              </Link>
            </div>
            <div className="text-sm text-brand-cream/60">
              © 2025 Standardthought. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
