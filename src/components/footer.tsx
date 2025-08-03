
import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-brand-cream py-12 relative overflow-hidden">
      {/* City Skyline Silhouette Background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none" aria-hidden="true">
        <svg 
          viewBox="0 0 1200 128" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* City skyline silhouette */}
          <g fill="currentColor" className="text-brand-cream">
            {/* Building blocks creating skyline */}
            <rect x="0" y="80" width="80" height="48"/>
            <rect x="80" y="60" width="60" height="68"/>
            <rect x="140" y="90" width="40" height="38"/>
            <rect x="180" y="45" width="70" height="83"/>
            <rect x="250" y="70" width="50" height="58"/>
            <rect x="300" y="35" width="80" height="93"/>
            <rect x="380" y="55" width="45" height="73"/>
            <rect x="425" y="75" width="55" height="53"/>
            <rect x="480" y="40" width="65" height="88"/>
            <rect x="545" y="85" width="35" height="43"/>
            <rect x="580" y="50" width="75" height="78"/>
            <rect x="655" y="65" width="45" height="63"/>
            <rect x="700" y="30" width="90" height="98"/>
            <rect x="790" y="70" width="50" height="58"/>
            <rect x="840" y="45" width="60" height="83"/>
            <rect x="900" y="80" width="40" height="48"/>
            <rect x="940" y="55" width="70" height="73"/>
            <rect x="1010" y="75" width="55" height="53"/>
            <rect x="1065" y="40" width="65" height="88"/>
            <rect x="1130" y="85" width="70" height="43"/>
            
            {/* Window details */}
            {Array.from({ length: 20 }).map((_, i) => (
              <g key={i}>
                <rect x={i * 60 + 10} y={70 + (i % 3) * 10} width="3" height="4" fill="#FFD700" opacity="0.6"/>
                <rect x={i * 60 + 20} y={80 + (i % 2) * 8} width="3" height="4" fill="#FFD700" opacity="0.4"/>
                <rect x={i * 60 + 35} y={75 + (i % 4) * 6} width="3" height="4" fill="#FFD700" opacity="0.5"/>
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Brick wall texture overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 8px,
              rgba(253, 246, 227, 0.1) 8px,
              rgba(253, 246, 227, 0.1) 16px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 24px,
              rgba(253, 246, 227, 0.1) 24px,
              rgba(253, 246, 227, 0.1) 48px
            )`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section with Handwritten Style */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Link 
                to="/" 
                className="text-2xl font-bold text-brand-cream hover:text-[#247EFF] transition-colors transform -rotate-1 inline-block"
                style={{ 
                  fontFamily: "'Permanent Marker', 'Kalam', 'Comic Neue', cursive",
                  textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
                  letterSpacing: '1px'
                }}
              >
                Standardthought
              </Link>
            </div>
            <p className="text-brand-cream/80 text-sm leading-relaxed mb-4">
              Empowering underestimated creators to build generational wealth from the ground up.
            </p>
            
            {/* Street-smart tagline */}
            <div 
              className="text-[#FFD700] text-sm font-medium transform rotate-1 mt-4"
              style={{ 
                fontFamily: "'Kalam', 'Comic Neue', cursive",
                textShadow: '1px 1px 0px rgba(0,0,0,0.5)'
              }}
            >
              Built from the ground up
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <Link to="/" className="text-brand-cream/80 hover:text-[#247EFF] transition-colors">
              The Root
            </Link>
            <Link to="/about" className="text-brand-cream/80 hover:text-[#247EFF] transition-colors">
              The Shift
            </Link>
            <Link to="/blog" className="text-brand-cream/80 hover:text-[#247EFF] transition-colors">
              The Code They Never Gave Us
            </Link>
            <Link to="/sales" className="text-brand-cream/80 hover:text-[#247EFF] transition-colors">
              Run the Play
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
                href="mailto:movement@standardthought.com" 
                className="flex items-center space-x-2 text-brand-cream/80 hover:text-[#247EFF] transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>movement@standardthought.com</span>
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
