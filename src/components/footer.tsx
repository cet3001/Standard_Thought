
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-black dark:bg-brand-black text-brand-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-accent">Standardthought</h3>
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
                  className="p-2 hover:bg-accent hover:text-black transition-colors rounded-xl"
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
            <h4 className="text-lg font-semibold mb-6 text-accent">Quick Links</h4>
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
                    className="text-brand-cream/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Resources</h4>
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
                    className="text-brand-cream/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Stay Connected</h4>
            <p className="text-brand-cream/70 mb-4">
              Get weekly insights and strategies delivered to your inbox.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-cream/60 h-4 w-4" />
                <Input
                  type="email"
                  placeholder="Your email"
                  className="pl-10 bg-brand-cream/10 border-accent/20 focus:border-accent text-brand-cream placeholder:text-brand-cream/50 rounded-xl"
                />
              </div>
              <Button 
                className="bg-accent hover:bg-accent/90 text-black font-semibold rounded-xl"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-accent/20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-cream/60">
          <p>&copy; 2024 Standardthought. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
