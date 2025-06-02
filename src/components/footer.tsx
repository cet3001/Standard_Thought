
import { Link } from "react-router-dom";
import { Mail, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Blog", path: "/blog" },
      { label: "Sales", path: "/sales" },
    ],
    resources: [
      { label: "Legacy Playbook", path: "/playbook" },
      { label: "Community", path: "/community" },
      { label: "Mentorship", path: "/mentorship" },
      { label: "Events", path: "/events" },
    ],
    legal: [
      { label: "Privacy Policy", path: "/privacy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Cookie Policy", path: "/cookies" },
    ]
  };

  return (
    <footer className="glass-effect border-t border-accent/20 py-16 urban-texture relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold font-satoshi mb-4 block group">
              <span className="group-hover:text-shadow-glow transition-all duration-300">Standard</span>
              <span className="text-accent">thought</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Building legacy from nothing. Join a movement of entrepreneurs, creators, and visionaries who refuse to accept limits and choose to create their own destiny.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@standardthought.com" 
                className="w-12 h-12 glass-effect hover:bg-accent text-accent hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 glass-effect hover:bg-accent text-accent hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Youtube size={20} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-accent">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-accent transition-all duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-accent">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-accent transition-all duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Newsletter Signup */}
        <div className="glass-effect border border-accent/30 rounded-3xl p-8 mb-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h3 className="text-2xl font-bold mb-2 text-shadow-glow">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Get weekly insights, exclusive content, and first access to new resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-2xl border border-accent/30 bg-background/50 focus:outline-none focus:border-accent transition-all duration-300 glass-effect"
              />
              <button className="bg-accent hover:bg-accent/90 text-black font-medium px-6 py-3 rounded-2xl transition-all duration-300 hover:scale-105 glow-pulse">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-accent/20">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Standardthought. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            {footerLinks.legal.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className="text-muted-foreground hover:text-accent transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
