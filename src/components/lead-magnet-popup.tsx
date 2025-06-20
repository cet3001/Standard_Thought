
import { X } from "lucide-react";
import { useEffect } from "react";
import { useLeadMagnetPopup } from "@/hooks/use-lead-magnet-popup";
import LeadMagnetContent from "./lead-magnet/lead-magnet-content";

const LeadMagnetPopup = () => {
  const {
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
  } = useLeadMagnetPopup();

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      console.log("Background clicked");
      setIsVisible(false);
      sessionStorage.setItem('leadMagnetShown', 'true');
    }
  };

  const handlePopupClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  console.log("LeadMagnetPopup: Render - isVisible:", isVisible);
  console.log("LeadMagnetPopup: brickTextureUrl:", brickTextureUrl);

  // Debug background image application
  useEffect(() => {
    if (brickTextureUrl) {
      console.log("🎨 Background image URL set:", brickTextureUrl);
      const element = document.querySelector('[data-lead-magnet]') as HTMLElement;
      if (element) {
        console.log("🎨 Applied background style:", element.style.backgroundImage);
      }
    }
  }, [brickTextureUrl]);

  if (!isVisible) return null;

  // Create background style object
  const backgroundStyle = brickTextureUrl ? {
    backgroundImage: `url("${brickTextureUrl}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  } : {};

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div 
        data-lead-magnet
        className="max-w-lg w-full rounded-3xl shadow-2xl border border-[#247EFF]/20 relative overflow-hidden min-h-[420px]"
        onClick={handlePopupClick}
        style={backgroundStyle}
      >
        {/* Overlay for better text readability - but let brick texture show through */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60 rounded-3xl" />

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute -top-2 -right-2 z-50 w-10 h-10 bg-white dark:bg-brand-black border border-[#247EFF]/20 rounded-full flex items-center justify-center text-[#0A0A0A] dark:text-brand-cream hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 shadow-lg"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {/* Loading state for texture generation */}
        {isGeneratingTexture && (
          <div className="absolute inset-0 bg-[#B85450]/30 animate-pulse rounded-3xl flex items-center justify-center z-20">
            <div className="text-white font-semibold">Generating street texture...</div>
          </div>
        )}

        {/* Content with its own background */}
        <div className="relative z-30">
          <div className="bg-white/95 dark:bg-brand-black/95 backdrop-blur-sm rounded-3xl m-2">
            <LeadMagnetContent
              email={email}
              setEmail={setEmail}
              name={name}
              setName={setName}
              isLoading={isLoading}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetPopup;
