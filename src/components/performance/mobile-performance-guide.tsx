import { useState } from 'react';

const MobilePerformanceGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#FFD700] hover:bg-[#FFA500] text-black px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-200"
      >
        📱 Test Performance
      </button>

      {isOpen && (
        <div className="absolute bottom-12 right-0 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl max-w-md border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">🚀 Performance Testing Checklist</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          <div className="space-y-4 text-sm">
            {/* Core Tools */}
            <div>
              <h4 className="font-semibold text-[#FFD700] mb-2">🛠️ Essential Tools</h4>
              <div className="space-y-2">
                <a 
                  href="https://pagespeed.web.dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-blue-50 dark:bg-blue-900/20 p-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  📊 <strong>Google PageSpeed Insights</strong><br/>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Core Web Vitals + Mobile/Desktop scores</span>
                </a>
                
                <a 
                  href="https://gtmetrix.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-green-50 dark:bg-green-900/20 p-2 rounded hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  ⚡ <strong>GTmetrix</strong><br/>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Detailed performance breakdown</span>
                </a>
                
                <div className="bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
                  📱 <strong>Chrome DevTools</strong><br/>
                  <span className="text-xs text-gray-600 dark:text-gray-400">F12 → Lighthouse → Mobile Audit</span>
                </div>
              </div>
            </div>

            {/* Performance Targets */}
            <div>
              <h4 className="font-semibold text-[#FFD700] mb-2">🎯 Target Scores</h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div><strong>Desktop:</strong> 90+</div>
                  <div><strong>Mobile:</strong> 85+</div>
                  <div><strong>LCP:</strong> &lt;2.5s</div>
                  <div><strong>FID:</strong> &lt;100ms</div>
                  <div><strong>CLS:</strong> &lt;0.1</div>
                  <div><strong>FCP:</strong> &lt;1.8s</div>
                </div>
              </div>
            </div>

            {/* Mobile Test Steps */}
            <div>
              <h4 className="font-semibold text-[#FFD700] mb-2">📱 Mobile Testing Steps</h4>
              <ol className="space-y-1 text-xs list-decimal list-inside">
                <li>Open Chrome DevTools (F12)</li>
                <li>Click "Device Toggle" (phone icon)</li>
                <li>Select "iPhone 12 Pro" or similar</li>
                <li>Go to Lighthouse tab</li>
                <li>Run "Mobile" audit</li>
                <li>Test on real device if possible</li>
              </ol>
            </div>

            {/* Quick Fixes */}
            <div>
              <h4 className="font-semibold text-[#FFD700] mb-2">⚡ Quick Fixes</h4>
              <ul className="space-y-1 text-xs list-disc list-inside">
                <li>Enable Gzip compression</li>
                <li>Optimize images (WebP format)</li>
                <li>Minify CSS/JS</li>
                <li>Use lazy loading</li>
                <li>Preload critical resources</li>
                <li>Reduce unused JavaScript</li>
              </ul>
            </div>

            {/* Current Status */}
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">✅ Already Optimized</h4>
              <ul className="text-xs space-y-1 text-green-600 dark:text-green-400">
                <li>• WebP image support added</li>
                <li>• Lazy loading implemented</li>
                <li>• Performance monitoring active</li>
                <li>• Core Web Vitals tracking</li>
                <li>• Preconnect hints added</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobilePerformanceGuide;