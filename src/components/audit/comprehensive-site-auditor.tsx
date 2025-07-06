import { useState, useEffect } from 'react';

interface AuditResult {
  category: string;
  status: 'pass' | 'warn' | 'fail';
  message: string;
  details?: string[];
}

const ComprehensiveSiteAuditor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auditResults, setAuditResults] = useState<AuditResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  if (process.env.NODE_ENV !== 'development') return null;

  const runComprehensiveAudit = async () => {
    setIsRunning(true);
    const results: AuditResult[] = [];

    // 1. SEO Audit
    const metaTags = document.querySelectorAll('meta');
    const title = document.querySelector('title');
    const h1Count = document.querySelectorAll('h1').length;
    
    results.push({
      category: 'SEO',
      status: title && title.textContent ? 'pass' : 'fail',
      message: `Page title: ${title?.textContent || 'Missing'}`
    });

    results.push({
      category: 'SEO',
      status: h1Count === 1 ? 'pass' : h1Count === 0 ? 'fail' : 'warn',
      message: `H1 tags: ${h1Count} found ${h1Count === 1 ? '✓' : h1Count === 0 ? '❌' : '⚠️'}`
    });

    // 2. Performance Audit
    const images = document.querySelectorAll('img');
    const missingAlt = Array.from(images).filter(img => !img.alt);
    
    results.push({
      category: 'Performance',
      status: missingAlt.length === 0 ? 'pass' : 'warn',
      message: `Images without alt text: ${missingAlt.length}`,
      details: missingAlt.map(img => img.src)
    });

    // 3. Link Audit
    const links = document.querySelectorAll('a[href]');
    const externalLinks = Array.from(links).filter(link => 
      link.getAttribute('href')?.startsWith('http') && 
      !link.getAttribute('href')?.includes(window.location.hostname)
    );
    
    const linksWithoutTarget = externalLinks.filter(link => 
      !link.hasAttribute('target') || 
      link.getAttribute('target') !== '_blank'
    );

    results.push({
      category: 'UX',
      status: linksWithoutTarget.length === 0 ? 'pass' : 'warn',
      message: `External links without target="_blank": ${linksWithoutTarget.length}`,
      details: linksWithoutTarget.map(link => link.getAttribute('href') || '')
    });

    // 4. Accessibility Audit
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    results.push({
      category: 'Accessibility',
      status: 'pass',
      message: `Focusable elements found: ${focusableElements.length}`
    });

    // 5. Security Audit
    const forms = document.querySelectorAll('form');
    const unsecureForms = Array.from(forms).filter(form => 
      form.getAttribute('action')?.startsWith('http:')
    );

    results.push({
      category: 'Security',
      status: unsecureForms.length === 0 ? 'pass' : 'fail',
      message: `Insecure forms (http): ${unsecureForms.length}`
    });

    // 6. Brand Consistency
    const currentYear = new Date().getFullYear();
    const copyrightText = document.body.textContent?.includes(currentYear.toString());
    
    results.push({
      category: 'Brand',
      status: copyrightText ? 'pass' : 'warn',
      message: `Copyright year ${currentYear}: ${copyrightText ? 'Found' : 'Not found'}`
    });

    // 7. Technical SEO
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    results.push({
      category: 'Technical SEO',
      status: canonicalLink ? 'pass' : 'warn',
      message: `Canonical URL: ${canonicalLink ? 'Present' : 'Missing'}`
    });

    const robotsMeta = document.querySelector('meta[name="robots"]');
    results.push({
      category: 'Technical SEO',
      status: robotsMeta ? 'pass' : 'warn',
      message: `Robots meta: ${robotsMeta?.getAttribute('content') || 'Missing'}`
    });

    setAuditResults(results);
    setIsRunning(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'text-green-600 dark:text-green-400';
      case 'warn': return 'text-yellow-600 dark:text-yellow-400';
      case 'fail': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass': return '✅';
      case 'warn': return '⚠️';
      case 'fail': return '❌';
      default: return '❓';
    }
  };

  const categoryStats = auditResults.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = { pass: 0, warn: 0, fail: 0 };
    }
    acc[result.category][result.status]++;
    return acc;
  }, {} as Record<string, Record<string, number>>);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-full font-bold shadow-lg transition-all duration-200 flex items-center gap-2"
      >
        🔍 Site Audit
        {auditResults.length > 0 && (
          <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
            {auditResults.filter(r => r.status === 'pass').length}/{auditResults.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl max-w-2xl w-96 border max-h-96 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              🔍 Comprehensive Site Audit
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>

          <div className="mb-4">
            <button
              onClick={runComprehensiveAudit}
              disabled={isRunning}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded font-bold transition-all duration-200 disabled:opacity-50"
            >
              {isRunning ? '🔄 Running Audit...' : '🚀 Run Full Audit'}
            </button>
          </div>

          {auditResults.length > 0 && (
            <>
              {/* Category Summary */}
              <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-800 rounded">
                <h4 className="font-semibold mb-2">📊 Summary by Category</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(categoryStats).map(([category, stats]) => (
                    <div key={category} className="flex justify-between">
                      <span className="font-medium">{category}:</span>
                      <span>
                        <span className="text-green-600">✅{stats.pass}</span>{' '}
                        <span className="text-yellow-600">⚠️{stats.warn}</span>{' '}
                        <span className="text-red-600">❌{stats.fail}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Results */}
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {auditResults.map((result, index) => (
                  <div 
                    key={index}
                    className="p-2 border rounded text-sm bg-gray-50 dark:bg-gray-800"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono">
                        {result.category}
                      </span>
                      <div className="flex-1">
                        <div className={`font-medium ${getStatusColor(result.status)}`}>
                          {getStatusIcon(result.status)} {result.message}
                        </div>
                        {result.details && result.details.length > 0 && (
                          <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                            {result.details.slice(0, 3).map((detail, i) => (
                              <div key={i} className="truncate">• {detail}</div>
                            ))}
                            {result.details.length > 3 && (
                              <div>... and {result.details.length - 3} more</div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-semibold mb-2 text-xs">🚀 Quick Actions</h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a 
                    href="https://search.google.com/search-console" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    Search Console
                  </a>
                  <a 
                    href="https://pagespeed.web.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                  >
                    PageSpeed
                  </a>
                  <a 
                    href="https://validator.w3.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                  >
                    HTML Validator
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ComprehensiveSiteAuditor;