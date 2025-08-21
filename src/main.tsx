
// Bootstraps the React app and loads our custom fonts.
// Keeps the vibe sharp by preloading all weights we need.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Critical fonts loaded immediately via Google Fonts in index.html
// Additional font weights loaded via CSS imports in index.css
import { applyCspMeta } from './lib/security-headers';

console.log('main.tsx: Starting application...');

// Apply security headers - simplified for development
try {
  applyCspMeta();
} catch (error) {
  console.warn('CSP application failed, continuing without:', error);
}

// Add CSP violation listener for debugging
window.addEventListener('securitypolicyviolation', (e) => {
  console.error('CSP block:', e.blockedURI, e.violatedDirective);
});

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  console.error('Error details:', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    error: event.error
  });
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

const rootElement = document.getElementById("root");
console.log('main.tsx: Root element found:', rootElement);

if (!rootElement) {
  console.error('main.tsx: Root element not found!');
  document.body.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif;">
      <div style="text-align: center;">
        <h1 style="color: #ef4444;">Root Element Missing</h1>
        <p>The root element with id="root" was not found in the HTML.</p>
      </div>
    </div>
  `;
} else {
  try {
    const root = createRoot(rootElement);
    console.log('main.tsx: React root created successfully');
    
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
    console.log('main.tsx: App rendered successfully');
  } catch (error) {
    console.error('main.tsx: Error rendering app:', error);
    rootElement.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif;">
        <div style="text-align: center;">
          <h1 style="color: #ef4444;">Rendering Error</h1>
          <pre style="background: #f3f4f6; padding: 1rem; border-radius: 4px; text-align: left; margin: 1rem 0; max-width: 500px;">${error}</pre>
          <button onclick="window.location.reload()" style="background: #3b82f6; color: white; padding: 8px 16px; border: none; border-radius: 4px; cursor: pointer;">
            Reload Page
          </button>
        </div>
      </div>
    `;
  }
}
