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
    console.log("🧱 Starting gritty urban brick texture generation...");
    
    try {
      // More detailed, gritty urban brick prompt
      const prompt = "Weathered urban brick wall texture, dark red and brown aged bricks with deep mortar lines, street graffiti stains, peeling paint patches, concrete dust, rust streaks, weathered urban decay, gritty inner city aesthetic, high contrast shadows, realistic worn texture, close-up detailed pattern, industrial atmosphere";
      
      console.log("🧱 Calling Supabase function with gritty urban prompt:", prompt);
      
      const { data, error } = await supabase.functions.invoke('generate-image', {
        body: { 
          prompt,
          quality: 'hd',
          style: 'natural' // More realistic, less stylized
        }
      });

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
        console.log("🧱 Gritty brick texture generated successfully:", data.imageUrl);
        
        // Test if URL is accessible
        const testImg = new Image();
        testImg.onload = () => console.log("✅ Gritty brick image URL is accessible and loaded");
        testImg.onerror = () => console.error("❌ Gritty brick image URL failed to load");
        testImg.src = data.imageUrl;
      } else {
        console.error("🧱 No image URL in response:", data);
        throw new Error("No image URL received from function");
      }
    } catch (error) {
      console.error("🧱 Error generating gritty brick texture:", error);
      console.log("🧱 Setting enhanced gritty SVG fallback...");
      
      // Create a more robust gritty brick pattern SVG
      const svgString = `<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grittybrick" patternUnits="userSpaceOnUse" width="40" height="30">
            <!-- Base brick with weathered effect -->
            <rect width="40" height="30" fill="#8B2E23"/>
            <rect width="38" height="28" x="1" y="1" fill="#A0342E"/>
            <rect width="36" height="26" x="2" y="2" fill="#7A1F1A"/>
            
            <!-- Weathered patches and stains -->
            <rect width="8" height="4" x="5" y="8" fill="#654832" opacity="0.7"/>
            <rect width="6" height="3" x="25" y="15" fill="#4A4A4A" opacity="0.6"/>
            <rect width="4" height="6" x="32" y="5" fill="#2D2D2D" opacity="0.5"/>
            
            <!-- Mortar lines with depth -->
            <rect width="40" height="1" y="0" fill="#E0E0E0"/>
            <rect width="40" height="1" y="29" fill="#C0C0C0"/>
            <rect width="1" height="30" x="0" fill="#D0D0D0"/>
            <rect width="1" height="30" x="39" fill="#B0B0B0"/>
            
            <!-- Gritty texture overlay -->
            <circle cx="10" cy="10" r="0.5" fill="#000" opacity="0.3"/>
            <circle cx="20" cy="20" r="0.3" fill="#666" opacity="0.4"/>
            <circle cx="30" cy="8" r="0.4" fill="#333" opacity="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grittybrick)"/>
        <!-- Overall weathered overlay -->
        <rect width="100%" height="100%" fill="#000" opacity="0.1"/>
      </svg>`;
      
      const encodedSvg = encodeURIComponent(svgString.trim());
      const fallbackUrl = `data:image/svg+xml,${encodedSvg}`;
      setBrickTextureUrl(fallbackUrl);
      console.log("🧱 Enhanced gritty SVG fallback set:", fallbackUrl);
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
