import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
      
      // Apply analytics based on consent
      if (savedPreferences.analytics && window.gtag) {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);

    // Enable analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setPreferences(necessaryOnly);
    setShowBanner(false);

    // Disable analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
  };

  const acceptCustom = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);

    // Apply custom preferences
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          {/* Cookie Message */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
              🍪 We Value Your Privacy
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              We use cookies to enhance your experience, analyze site traffic, and personalize content. 
              You can manage your preferences below or{' '}
              <Link 
                to="/cookie-policy" 
                className="text-[#FFD700] hover:underline font-semibold"
              >
                learn more about our cookie policy
              </Link>
              .
            </p>

            {/* Cookie Preferences */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={preferences.necessary} 
                  disabled
                  className="rounded"
                />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>Necessary</strong> (Required)
                </span>
              </label>
              
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev, 
                    analytics: e.target.checked
                  }))}
                  className="rounded text-[#FFD700] focus:ring-[#FFD700]"
                />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>Analytics</strong> (Google Analytics)
                </span>
              </label>
              
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev, 
                    marketing: e.target.checked
                  }))}
                  className="rounded text-[#FFD700] focus:ring-[#FFD700]"
                />
                <span className="text-gray-600 dark:text-gray-300">
                  <strong>Marketing</strong> (Future features)
                </span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 lg:ml-4">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Necessary Only
            </button>
            
            <button
              onClick={acceptCustom}
              className="px-4 py-2 text-sm font-semibold text-black dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              Save Preferences
            </button>
            
            <button
              onClick={acceptAll}
              className="px-6 py-2 text-sm font-bold text-black bg-[#FFD700] hover:bg-[#FFA500] rounded-lg transition-colors shadow-md"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;