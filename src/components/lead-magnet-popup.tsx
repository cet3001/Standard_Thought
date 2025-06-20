
import { X } from "lucide-react";
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
    handleClose
  } = useLeadMagnetPopup();

  if (!isVisible) return null;

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleClose();
  };

  // Immediate gritty brick SVG pattern - always ready
  const immediateBrickSvg = `<svg width="200" height="120" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grittybrick" patternUnits="userSpaceOnUse" width="40" height="30">
        <rect width="40" height="30" fill="#7A1F1A"/>
        <rect width="38" height="28" x="1" y="1" fill="#8B2E23"/>
        <rect width="36" height="26" x="2" y="2" fill="#6B1A15"/>
        <rect width="8" height="4" x="5" y="8" fill="#4A3228" opacity="0.8"/>
        <rect width="6" height="3" x="25" y="15" fill="#2D2D2D" opacity="0.7"/>
        <rect width="4" height="6" x="32" y="5" fill="#1A1A1A" opacity="0.6"/>
        <rect width="5" height="2" x="12" y="22" fill="#5A4A3A" opacity="0.7"/>
        <rect width="40" height="1" y="0" fill="#D0D0D0"/>
        <rect width="40" height="1" y="29" fill="#B0B0B0"/>
        <rect width="1" height="30" x="0" fill="#C0C0C0"/>
        <rect width="1" height="30" x="39" fill="#A0A0A0"/>
        <circle cx="8" cy="12" r="0.5" fill="#000" opacity="0.4"/>
        <circle cx="22" cy="8" r="0.3" fill="#333" opacity="0.5"/>
        <circle cx="28" cy="20" r="0.4" fill="#222" opacity="0.4"/>
        <circle cx="15" cy="18" r="0.2" fill="#555" opacity="0.6"/>
        <rect width="2" height="1" x="10" y="5" fill="#E0E0E0" opacity="0.3"/>
        <rect width="1" height="2" x="30" y="12" fill="#F0F0F0" opacity="0.2"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grittybrick)"/>
    <rect width="100%" height="100%" fill="#000" opacity="0.15"/>
  </svg>`;

  const encodedImmediateSvg = encodeURIComponent(immediateBrickSvg.trim());
  const immediateFallback = `data:image/svg+xml,${encodedImmediateSvg}`;

  // Use AI-generated texture if available, otherwise use immediate fallback
  const backgroundTexture = brickTextureUrl || immediateFallback;
  
  // Stronger overlay for better readability
  const bg = `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.7)),url("${backgroundTexture}")`;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div 
        data-lead-magnet
        className="relative max-w-lg w-full max-h-[85vh] overflow-hidden rounded-2xl border border-[#247EFF]/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: bg,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* Close button with proper positioning and functionality */}
        <button
          type="button"
          onClick={handleCloseClick}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {/* Subtle loading indicator for texture generation */}
        {isGeneratingTexture && !brickTextureUrl && (
          <div className="absolute top-4 left-4 z-30 px-3 py-1.5 bg-black/20 backdrop-blur-sm rounded-full">
            <div className="text-white/80 text-sm font-medium flex items-center gap-2">
              <div className="w-2 h-2 bg-[#247EFF] rounded-full animate-pulse"></div>
              Enhancing...
            </div>
          </div>
        )}

        {/* Content card - properly sized */}
        <div className="relative z-30 p-6 sm:p-8">
          <div className="mx-auto w-full rounded-2xl bg-white/95 p-6 sm:p-8 shadow-lg backdrop-blur-md dark:bg-brand-black/90">
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
