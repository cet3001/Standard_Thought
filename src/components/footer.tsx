
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { subscribeToNewsletter } from "@/lib/email-utils";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      await subscribeToNewsletter(email);
      
      setEmail("");
      toast({
        title: "Playbook Sent! 🎉",
        description: "Check your inbox for your welcome email with the FREE playbook PDF attached!"
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-brand-black dark:bg-brand-black text-brand-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#247EFF]/20 via-transparent to-[#247EFF]/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column with Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 opacity-80">
                <img 
                  src="/lovable-uploads/5316a53a-9afb-4437-8f49-d3b521d18e44.png" 
                  alt="ST Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#247EFF]">Standardthought</h3>
            </div>
            <p className="text-brand-cream/70 mb-6 leading-relaxed">
              From the mud to momentum. For the ones who weren't handed anything—welcome home.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: "https://instagram.com/standard_thought" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="p-2 text-[#247EFF] hover:text-[#247EFF] hover:bg-[#247EFF]/10 transition-colors rounded-xl"
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
            <h4 className="text-lg font-semibold mb-6 text-[#247EFF]">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Sales", href: "/sales" }
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

          {/* Resources & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#247EFF]">Resources</h4>
            <ul className="space-y-4 mb-8">
              {[
                { label: "Free Playbook", href: "#" },
                { label: "Mentorship", href: "#" }
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
            
            <h4 className="text-lg font-semibold mb-4 text-[#247EFF]">Contact</h4>
            <a 
              href="mailto:cet3001@gmail.com"
              className="text-brand-cream/70 hover:text-[#247EFF] transition-colors"
            >
              cet3001@gmail.com
            </a>
          </div>

          {/* Enhanced Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#247EFF]">Get Your Free Playbook</h4>
            <p className="text-brand-cream/70 mb-4">
              Get the complete playbook PDF delivered instantly + weekly "Hustle Notes" with real builder strategies and behind-the-scenes insights.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-cream/60 h-4 w-4" />
                <Input
                  type="email"
                  placeholder="Your email for instant access"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-brand-cream/10 border-[#247EFF]/20 focus:border-[#247EFF] text-brand-cream placeholder:text-brand-cream/50 rounded-xl"
                  required
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit"
                disabled={isLoading}
                className="bg-[#247EFF] hover:bg-[#0057FF] hover:shadow-lg hover:shadow-[#247EFF]/30 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-70"
              >
                {isLoading ? "Sending..." : "Get Free Playbook PDF"}
              </Button>
            </form>
            <p className="text-xs text-brand-cream/50 mt-2">
              📧 Playbook PDF delivered instantly to your inbox
            </p>
          </div>
        </div>

        <Separator className="bg-[#247EFF]/20" />

        {/* Bottom Footer with subtle logo watermark */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-cream/60 relative">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <img 
              src="/lovable-uploads/5316a53a-9afb-4437-8f49-d3b521d18e44.png" 
              alt="ST Watermark" 
              className="w-24 h-24 object-contain"
            />
          </div>
          <p>&copy; 2024 Standardthought. Built from nothing, made for builders.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-[#247EFF] transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-[#247EFF] transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="hover:text-[#247EFF] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
