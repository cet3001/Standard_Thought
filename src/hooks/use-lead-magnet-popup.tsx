
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

  // Generate brick texture when popup becomes visible
  useEffect(() => {
    if (isVisible && !brickTextureUrl && !isGeneratingTexture) {
      generateBrickTexture();
    }
  }, [isVisible, brickTextureUrl, isGeneratingTexture]);

  const generateBrickTexture = async () => {
    setIsGeneratingTexture(true);
    console.log("🧱 Starting brick texture generation...");
    
    try {
      const prompt = "Urban brick wall texture, weathered red and brown bricks with white mortar lines, close-up pattern, realistic texture, high contrast, street photography style, gritty urban aesthetic";
      
      console.log("🧱 Calling Supabase function with prompt:", prompt);
      
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { prompt }
      });

      // COMPREHENSIVE DEBUGGING
      console.log("🧱 Supabase function response:");
      console.table({ error, data });
      console.log("🧱 Full response data:", JSON.stringify(data, null, 2));
      console.log("🧱 Full error details:", JSON.stringify(error, null, 2));

      if (error) {
        console.error("🧱 Supabase function error:", error);
        throw error;
      }

      if (data && data.imageUrl) {
        setBrickTextureUrl(data.imageUrl);
        console.log("🧱 Brick texture generated successfully:", data.imageUrl);
        
        // Test if URL is accessible
        const testImg = new Image();
        testImg.onload = () => console.log("✅ Image URL is accessible and loaded");
        testImg.onerror = () => console.error("❌ Image URL failed to load");
        testImg.src = data.imageUrl;
      } else {
        console.error("🧱 No image URL in response:", data);
        throw new Error("No image URL received from function");
      }
    } catch (error) {
      console.error("🧱 Error generating brick texture:", error);
      console.log("🧱 Setting enhanced SVG fallback...");
      
      // Create a more robust brick pattern SVG with proper encoding
      const svgString = `<svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="brick" patternUnits="userSpaceOnUse" width="30" height="20">
            <rect width="30" height="20" fill="#B85450"/>
            <rect width="28" height="18" x="1" y="1" fill="#A0342E"/>
            <rect width="26" height="16" x="2" y="2" fill="#8B2E23"/>
            <rect width="24" height="14" x="3" y="3" fill="#7A1F1A"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#brick)"/>
      </svg>`;
      
      // Properly encode the SVG
      const encodedSvg = encodeURIComponent(svgString.trim());
      const fallbackUrl = `data:image/svg+xml,${encodedSvg}`;
      setBrickTextureUrl(fallbackUrl);
      console.log("🧱 Enhanced SVG fallback set:", fallbackUrl);
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
