import { useState, useEffect } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;
    const isInWebAppChrome = window.matchMedia('(display-mode: standalone)').matches;
    
    if (isStandalone || isInWebAppiOS || isInWebAppChrome) {
      setIsInstalled(true);
      return;
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallButton(true);
    };

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    await deferredPrompt.prompt();
    
    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the PWA install prompt');
    } else {
      console.log('User dismissed the PWA install prompt');
    }
    
    // Clear the prompt
    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  // Don't show on installed PWA or if no prompt available
  if (isInstalled || !showInstallButton) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-in-left">
      <div className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black px-4 py-3 rounded-lg shadow-lg max-w-sm border-2 border-yellow-300">
        <div className="flex items-center gap-3">
          <div className="text-2xl">📱</div>
          <div className="flex-1">
            <h3 className="font-bold text-sm">Install Standard Thought</h3>
            <p className="text-xs opacity-90">Get faster access & offline reading</p>
          </div>
          <div className="flex flex-col gap-1">
            <button
              onClick={handleInstallClick}
              className="bg-black text-white px-3 py-1 rounded text-xs font-bold hover:bg-gray-800 transition-colors"
            >
              Install
            </button>
            <button
              onClick={() => setShowInstallButton(false)}
              className="text-xs opacity-70 hover:opacity-100 transition-opacity"
            >
              Not now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstaller;