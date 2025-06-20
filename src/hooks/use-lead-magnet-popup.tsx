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
    
    // TEMPORARILY CLEAR SESSION STORAGE FOR TESTING
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

    // IMMEDIATE TRIGGER FOR TESTING (reduced to 500ms)
    const timeoutTrigger = setTimeout(() => {
      if (!hasTriggered && !hasSeenPopup) {
        console.log("LeadMagnetPopup: Timeout trigger activated (500ms)!");
        setHasTriggered(true);
        setIsVisible(true);
        sessionStorage.setItem('leadMagnetShown', 'true');
      }
    }, 500);

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

  // Generate enhanced brick texture when popup becomes visible (background process)
  useEffect(() => {
    if (isVisible && !brickTextureUrl && !isGeneratingTexture) {
      // Start generation in background without blocking the UI
      generateBrickTexture();
    }
  }, [isVisible, brickTextureUrl, isGeneratingTexture]);

  const generateBrickTexture = async () => {
    setIsGeneratingTexture(true);
    console.log("🧱 Starting enhanced gritty urban brick texture generation...");
    
    try {
      // Enhanced gritty urban brick prompt for more realistic texture
      const prompt = "Ultra-realistic weathered urban brick wall texture, dark burgundy and brown aged bricks with deep mortar lines, street graffiti stains, rust streaks, concrete dust patches, peeling paint, urban decay, gritty inner city aesthetic, high contrast shadows, worn industrial texture, close-up detailed pattern, street photography style, natural lighting";
      
      console.log("🧱 Calling Supabase function with enhanced prompt:", prompt);
      
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { 
          prompt,
          quality: 'hd',
          style: 'natural'
        }
      });

      console.log("🧱 Supabase function response:");
      console.table({ error, data });

      if (error) {
        console.error("🧱 Supabase function error:", error);
        throw error;
      }

      if (data && data.imageUrl) {
        setBrickTextureUrl(data.imageUrl);
        console.log("🧱 Enhanced brick texture generated successfully:", data.imageUrl);
        
        // Test if URL is accessible
        const testImg = new Image();
        testImg.onload = () => console.log("✅ Enhanced brick image URL is accessible and loaded");
        testImg.onerror = () => console.error("❌ Enhanced brick image URL failed to load");
        testImg.src = data.imageUrl;
      } else {
        console.error("🧱 No image URL in response:", data);
        throw new Error("No image URL received from function");
      }
    } catch (error) {
      console.error("🧱 Error generating enhanced brick texture:", error);
      console.log("🧱 Will continue using immediate SVG fallback");
      // Don't set fallback here - component already has immediate fallback
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
