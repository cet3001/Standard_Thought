
import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useLeadMagnetPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [brickTextureUrl, setBrickTextureUrl] = useState<string>("");
  const [isGeneratingTexture, setIsGeneratingTexture] = useState(false);

  // Enhanced session management with multiple storage checks
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.log("LeadMagnetPopup: Setting up triggers");
    }
    
    // Check multiple storage mechanisms to prevent excessive popups
    const hasSeenPopupSession = sessionStorage.getItem('leadMagnetShown');
    const hasSeenPopupLocal = localStorage.getItem('leadMagnetShown');
    const lastShownTime = localStorage.getItem('leadMagnetLastShown');
    
    // If shown in last 24 hours, don't show again
    const twentyFourHours = 24 * 60 * 60 * 1000;
    const now = Date.now();
    
    if (lastShownTime && (now - parseInt(lastShownTime)) < twentyFourHours) {
      if (process.env.NODE_ENV !== 'production') {
        console.log("LeadMagnetPopup: Popup shown within last 24 hours, skipping");
      }
      return;
    }
    
    if (hasSeenPopupSession || hasSeenPopupLocal) {
      if (process.env.NODE_ENV !== 'production') {
        console.log("LeadMagnetPopup: Popup already shown, skipping");
      }
      return;
    }

    let scrollTriggered = false;
    let exitTriggered = false;
    let timeTriggered = false;

    // Scroll trigger (70% of page - higher threshold)
    const handleScroll = () => {
      if (scrollTriggered || hasTriggered || timeTriggered || exitTriggered) return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 70) {
        if (process.env.NODE_ENV !== 'production') {
          console.log("LeadMagnetPopup: Scroll trigger activated!");
        }
        scrollTriggered = true;
        setHasTriggered(true);
        setIsVisible(true);
        markPopupAsShown();
      }
    };

    // Exit intent trigger (desktop only, more restrictive)
    const handleMouseLeave = (e: MouseEvent) => {
      if (exitTriggered || hasTriggered || timeTriggered || scrollTriggered || window.innerWidth < 768) return;
      
      // Only trigger if mouse leaves from top and user has been on page for at least 10 seconds
      if (e.clientY <= 0 && performance.now() > 10000) {
        if (process.env.NODE_ENV !== 'production') {
          console.log("LeadMagnetPopup: Exit intent trigger activated!");
        }
        exitTriggered = true;
        setHasTriggered(true);
        setIsVisible(true);
        markPopupAsShown();
      }
    };

    // Time-based trigger (30 seconds instead of 500ms)
    const timeoutTrigger = setTimeout(() => {
      if (!hasTriggered && !scrollTriggered && !exitTriggered && !hasSeenPopupSession && !hasSeenPopupLocal) {
        if (process.env.NODE_ENV !== 'production') {
          console.log("LeadMagnetPopup: Time trigger activated (30 seconds)!");
        }
        timeTriggered = true;
        setHasTriggered(true);
        setIsVisible(true);
        markPopupAsShown();
      }
    }, 30000); // 30 seconds

    if (process.env.NODE_ENV !== 'production') {
      console.log("LeadMagnetPopup: Adding event listeners");
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (process.env.NODE_ENV !== 'production') {
        console.log("LeadMagnetPopup: Cleaning up event listeners");
      }
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutTrigger);
    };
  }, []);

  // Helper function to mark popup as shown with timestamp
  const markPopupAsShown = () => {
    const timestamp = Date.now().toString();
    sessionStorage.setItem('leadMagnetShown', 'true');
    localStorage.setItem('leadMagnetShown', 'true');
    localStorage.setItem('leadMagnetLastShown', timestamp);
  };

  // Generate enhanced brick texture when popup becomes visible (background process)
  useEffect(() => {
    if (isVisible && !brickTextureUrl && !isGeneratingTexture) {
      generateBrickTexture();
    }
  }, [isVisible, brickTextureUrl, isGeneratingTexture]);

  const generateBrickTexture = async () => {
    setIsGeneratingTexture(true);
    if (process.env.NODE_ENV !== 'production') {
      console.log("🧱 Starting enhanced gritty urban brick texture generation...");
    }
    
    try {
      const prompt = "Ultra-realistic weathered urban brick wall texture, dark burgundy and brown aged bricks with deep mortar lines, street graffiti stains, rust streaks, concrete dust patches, peeling paint, urban decay, gritty inner city aesthetic, high contrast shadows, worn industrial texture, close-up detailed pattern, street photography style, natural lighting";
      
      if (process.env.NODE_ENV !== 'production') {
        console.log("🧱 Calling Supabase function with enhanced prompt");
      }
      
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { 
          prompt,
          quality: 'hd',
          style: 'natural'
        }
      });

      if (error) {
        console.error("🧱 Supabase function error:", error);
        throw error;
      }

      if (data && data.imageUrl) {
        setBrickTextureUrl(data.imageUrl);
        if (process.env.NODE_ENV !== 'production') {
          console.log("🧱 Enhanced brick texture generated successfully:", data.imageUrl);
        }
      }
    } catch (error) {
      console.error("🧱 Error generating enhanced brick texture:", error);
      if (process.env.NODE_ENV !== 'production') {
        console.log("🧱 Will continue using immediate SVG fallback");
      }
    } finally {
      setIsGeneratingTexture(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    
    try {
      const { data: subscriber, error } = await supabase
        .from("Subscribers")
        .insert([
          {
            email: email,
            name: name || null,
            unsubscribe_token: crypto.randomUUID(),
          },
        ])
        .select()
        .single();

      if (error) {
        console.error("Subscription error:", error);
        toast.error("Failed to subscribe. Please try again.");
        return;
      }

      toast.success("Playbook sent! Check your email for your free PDF.");
      setIsVisible(false);
      setEmail("");
      setName("");
      
      // Mark as permanently shown after successful subscription
      markPopupAsShown();
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = useCallback(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.log("Closing popup and marking as shown");
    }
    setIsVisible(false);
    markPopupAsShown();
  }, []);

  return {
    isVisible,
    email,
    setEmail,
    name,
    setName,
    isLoading,
    brickTextureUrl,
    isGeneratingTexture,
    handleSubmit,
    handleClose
  };
};
