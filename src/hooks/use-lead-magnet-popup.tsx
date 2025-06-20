
import { useState, useEffect } from "react";
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

  useEffect(() => {
    console.log("LeadMagnetPopup: Setting up triggers");
    
    // Clear session storage for testing - remove this line in production
    sessionStorage.removeItem('leadMagnetShown');
    
    // Check if user has already seen popup this session
    const hasSeenPopup = sessionStorage.getItem('leadMagnetShown');
    console.log("LeadMagnetPopup: Has seen popup before?", hasSeenPopup);
    
    if (hasSeenPopup) {
      console.log("LeadMagnetPopup: Popup already shown this session, skipping");
      return;
    }

    let scrollTriggered = false;
    let exitTriggered = false;

    // Scroll trigger (60% of page)
    const handleScroll = () => {
      if (scrollTriggered || hasTriggered) return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      console.log("LeadMagnetPopup: Scroll percentage:", scrollPercentage);
      
      if (scrollPercentage >= 60) {
        console.log("LeadMagnetPopup: Scroll trigger activated!");
        scrollTriggered = true;
        setHasTriggered(true);
        setIsVisible(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    };

    // Exit intent trigger (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (exitTriggered || hasTriggered || window.innerWidth < 768) return;
      
      console.log("LeadMagnetPopup: Mouse leave detected, clientY:", e.clientY);
      
      if (e.clientY <= 0) {
        console.log("LeadMagnetPopup: Exit intent trigger activated!");
        exitTriggered = true;
        setHasTriggered(true);
        setIsVisible(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    };

    // Add a timeout trigger for testing (1 second for immediate testing)
    const timeoutTrigger = setTimeout(() => {
      if (!hasTriggered && !hasSeenPopup) {
        console.log("LeadMagnetPopup: Timeout trigger activated (1 second)!");
        setHasTriggered(true);
        setIsVisible(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    }, 1000);

    console.log("LeadMagnetPopup: Adding event listeners");
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      console.log("LeadMagnetPopup: Cleaning up event listeners");
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutTrigger);
    };
  }, [hasTriggered]);

  // Generate brick texture when popup becomes visible
  useEffect(() => {
    if (isVisible && !brickTextureUrl && !isGeneratingTexture) {
      generateBrickTexture();
    }
  }, [isVisible, brickTextureUrl, isGeneratingTexture]);

  const generateBrickTexture = async () => {
    setIsGeneratingTexture(true);
    console.log("Starting brick texture generation...");
    
    try {
      const prompt = "Urban brick wall texture, weathered red and brown bricks with white mortar lines, close-up pattern, realistic texture, high contrast, street photography style, gritty urban aesthetic";
      
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { prompt }
      });

      if (error) {
        console.error("Supabase function error:", error);
        throw error;
      }

      if (data && data.imageUrl) {
        setBrickTextureUrl(data.imageUrl);
        console.log("Brick texture generated successfully:", data.imageUrl);
      } else {
        console.error("No image URL in response:", data);
        throw new Error("No image URL received");
      }
    } catch (error) {
      console.error("Error generating brick texture:", error);
      // Set a fallback CSS gradient pattern that looks like bricks
      setBrickTextureUrl("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B85450' fill-opacity='0.3'%3E%3Crect width='11' height='4' x='0' y='0'/%3E%3Crect width='11' height='4' x='15' y='0'/%3E%3Crect width='11' height='4' x='30' y='0'/%3E%3Crect width='11' height='4' x='45' y='0'/%3E%3Crect width='11' height='4' x='7.5' y='6'/%3E%3Crect width='11' height='4' x='22.5' y='6'/%3E%3Crect width='11' height='4' x='37.5' y='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Close button clicked");
    setIsVisible(false);
    sessionStorage.setItem('leadMagnetShown', 'true');
  };

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
    handleClose,
    setIsVisible
  };
};
