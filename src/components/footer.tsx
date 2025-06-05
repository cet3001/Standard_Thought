
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
        title: "Welcome to the Movement! 🎉",
        description: "Check your inbox for your welcome email with exclusive insights and next steps."
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
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-[#247EFF]">Standardthought</h3>
            <p className="text-brand-cream/70 mb-6 leading-relaxed">
              From the mud to momentum. For the ones who weren't handed anything—welcome home.
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
            <h4 className="text-lg font-semibold mb-6 text-[#247EFF]">Resources</h4>
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
            <h4 className="text-lg font-semibold mb-6 text-[#247EFF]">Stay Connected</h4>
            <p className="text-brand-cream/70 mb-4">
              Get the real—no spam, just street-smart insights and game-changing strategy, every week.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-cream/60 h-4 w-4" />
                <Input
                  type="email"
                  placeholder="Your email"
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
                {isLoading ? "Joining..." : "Tap In"}
              </Button>
            </form>
          </div>
        </div>

        <Separator className="bg-[#247EFF]/20" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-cream/60">
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
