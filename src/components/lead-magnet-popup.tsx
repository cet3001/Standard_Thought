
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

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div 
        className="bg-white dark:bg-brand-black max-w-lg w-full rounded-3xl shadow-2xl border border-[#247EFF]/20 relative overflow-hidden"
        onClick={handlePopupClick}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute -top-2 -right-2 z-30 w-10 h-10 bg-white dark:bg-brand-black border border-[#247EFF]/20 rounded-full flex items-center justify-center text-[#0A0A0A] dark:text-brand-cream hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 shadow-lg"
          aria-label="Close popup"
        >
          <X size={18} />
        </button>

        {/* Generated brick texture background */}
        {brickTextureUrl && (
          <div 
            className="absolute inset-0 opacity-40 pointer-events-none bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${brickTextureUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 pointer-events-none"></div>

        {/* Loading state for texture generation */}
        {isGeneratingTexture && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#B85450]/20 to-[#A0342E]/20 pointer-events-none animate-pulse"></div>
        )}

        {/* Content */}
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
  );
};

export default LeadMagnetPopup;
