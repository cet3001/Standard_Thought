
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black dark:bg-brand-black text-brand-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#247EFF]/20 via-transparent to-[#D4AF37]/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-[#247EFF]">Standardthought</h3>
            <p className="text-brand-cream/70 mb-6 leading-relaxed">
              Building legacy from nothing. Join the movement of entrepreneurs 
              who refuse to accept limitations.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="p-2 text-[#247EFF] hover:text-[#D4AF37] hover:bg-[#247EFF]/10 transition-colors rounded-xl"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon size={20} />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Sales", href: "/sales" },
                { label: "Community", href: "#" },
                { label: "Contact", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-brand-cream/70 hover:text-[#247EFF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#D4AF37]">Resources</h4>
            <ul className="space-y-4">
              {[
                { label: "Free Playbook", href: "#" },
                { label: "Success Stories", href: "#" },
                { label: "Podcast", href: "#" },
                { label: "Mentorship", href: "#" },
                { label: "Events", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-brand-cream/70 hover:text-[#247EFF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#D4AF37]">Stay Connected</h4>
            <p className="text-brand-cream/70 mb-4">
              Get weekly insights and strategies delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-cream/60 h-4 w-4" />
                <Input
                  type="email"
                  placeholder="Your email"
                  className="pl-10 bg-brand-cream/10 border-[#247EFF]/20 focus:border-[#247EFF] text-brand-cream placeholder:text-brand-cream/50 rounded-xl"
                />
              </div>
              <Button 
                className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#D4AF37]/30 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-[#247EFF]/20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-cream/60">
          <p>&copy; 2024 Standardthought. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#247EFF] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#247EFF] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#247EFF] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
