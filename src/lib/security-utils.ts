import DOMPurify from 'dompurify';

// Configure DOMPurify with enhanced security settings
const purifyConfig = {
  ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote'],
  ALLOWED_ATTR: ['class'],
  ALLOWED_URI_REGEXP: /^https?:\/\/|^\/|^#/,
  FORBID_TAGS: ['script', 'object', 'embed', 'style', 'form', 'input', 'textarea', 'button', 'link', 'meta', 'iframe', 'frame', 'frameset', 'svg', 'math'],
  FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover', 'onfocus', 'onblur', 'onchange', 'onsubmit', 'href', 'src', 'action', 'formaction', 'data', 'style'],
  FORCE_BODY: true,
  SANITIZE_DOM: true,
  KEEP_CONTENT: false,
  RETURN_DOM: false,
  RETURN_DOM_FRAGMENT: false,
  RETURN_TRUSTED_TYPE: false
};

/**
 * Sanitize HTML content to prevent XSS attacks
 */
export const sanitizeHtml = (html: string): string => {
  if (!html) return '';
  return DOMPurify.sanitize(html, purifyConfig);
};

/**
 * Sanitize plain text input
 */
export const sanitizeText = (text: string): string => {
  if (!text) return '';
  return text.trim().replace(/[<>]/g, '');
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validate text length and content
 */
export const validateTextInput = (text: string, minLength = 1, maxLength = 1000): { isValid: boolean; error?: string } => {
  if (!text || text.trim().length < minLength) {
    return { isValid: false, error: `Text must be at least ${minLength} characters` };
  }
  if (text.length > maxLength) {
    return { isValid: false, error: `Text must be no more than ${maxLength} characters` };
  }
  
  // Check for suspicious patterns
  const suspiciousPatterns = [
    /<script[\s\S]*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /data:text\/html/gi
  ];
  
  for (const pattern of suspiciousPatterns) {
    if (pattern.test(text)) {
      return { isValid: false, error: 'Input contains invalid content' };
    }
  }
  
  return { isValid: true };
};

/**
 * Rate limiting utility
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts = 5, windowMs = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (validAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    // Add current attempt
    validAttempts.push(now);
    this.attempts.set(identifier, validAttempts);
    
    return true;
  }

  getRemainingTime(identifier: string): number {
    const attempts = this.attempts.get(identifier) || [];
    if (attempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...attempts);
    const timeLeft = this.windowMs - (Date.now() - oldestAttempt);
    
    return Math.max(0, timeLeft);
  }
}

// Create rate limiters for different actions
export const newsletterRateLimiter = new RateLimiter(3, 300000); // 3 attempts per 5 minutes
export const storySubmissionRateLimiter = new RateLimiter(2, 600000); // 2 attempts per 10 minutes
export const authRateLimiter = new RateLimiter(5, 900000); // 5 attempts per 15 minutes

/**
 * Get client identifier for rate limiting
 */
export const getClientIdentifier = (): string => {
  // In a real app, you'd use IP address from server
  // For client-side, we'll use sessionStorage with a fallback
  let identifier = sessionStorage.getItem('clientId');
  if (!identifier) {
    identifier = Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('clientId', identifier);
  }
  return identifier;
};

/**
 * Secure form validation hook
 */
export const useSecureFormValidation = () => {
  const validateForm = (data: Record<string, any>, rules: Record<string, any>) => {
    const errors: Record<string, string> = {};
    
    for (const [field, value] of Object.entries(data)) {
      const rule = rules[field];
      if (!rule) continue;
      
      // Required field check
      if (rule.required && (!value || value.toString().trim() === '')) {
        errors[field] = `${field} is required`;
        continue;
      }
      
      // Email validation
      if (rule.type === 'email' && value && !validateEmail(value)) {
        errors[field] = 'Invalid email format';
        continue;
      }
      
      // Text validation
      if (rule.type === 'text' && value) {
        const validation = validateTextInput(value, rule.minLength, rule.maxLength);
        if (!validation.isValid) {
          errors[field] = validation.error!;
          continue;
        }
      }
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  };
  
  return { validateForm };
};