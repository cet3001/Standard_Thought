/**
 * Content Security Policy configuration for enhanced security
 */
export const CSP_CONFIG = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", 'https://cdnjs.cloudflare.com'],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': ["'self'", 'data:', 'https:', 'blob:'],
  'font-src': ["'self'", 'https://fonts.gstatic.com'],
  'connect-src': ["'self'", 'https:', 'wss:'],
  'media-src': ["'self'"],
  'object-src': ["'none'"],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
};

/**
 * Generate CSP header string
 */
export const generateCSPHeader = (): string => {
  return Object.entries(CSP_CONFIG)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
    .join('; ');
};

/**
 * Apply CSP meta tag to document head
 */
export const applyCspMeta = (): void => {
  const cspMetaTag = document.createElement('meta');
  cspMetaTag.setAttribute('http-equiv', 'Content-Security-Policy');
  cspMetaTag.setAttribute('content', generateCSPHeader());
  
  // Remove any existing CSP meta tag
  const existingCsp = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  if (existingCsp) {
    existingCsp.remove();
  }
  
  document.head.appendChild(cspMetaTag);
};

/**
 * Security headers configuration
 */
export const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': generateCSPHeader(),
};