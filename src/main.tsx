
// Bootstraps the React app and loads our custom fonts.
// Keeps the vibe sharp by preloading all weights we need.
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// Optimize font loading - only load critical weights initially
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

// Lazy load additional font weights
const loadAdditionalFonts = () => {
  import('@fontsource/inter/300.css');
  import('@fontsource/inter/500.css');
  import('@fontsource/inter/800.css');
  import('@fontsource/inter/900.css');
  import('@fontsource/ibm-plex-sans/400.css');
  import('@fontsource/ibm-plex-sans/500.css');
  import('@fontsource/ibm-plex-sans/600.css');
  import('@fontsource/kalam/400.css');
  import('@fontsource/kalam/700.css');
  import('@fontsource/permanent-marker/400.css');
  import('@fontsource/comic-neue/400.css');
  import('@fontsource/comic-neue/700.css');
};

// Load additional fonts after initial render
if ('requestIdleCallback' in window) {
  requestIdleCallback(loadAdditionalFonts);
} else {
  setTimeout(loadAdditionalFonts, 1000);
}
import { applyCspMeta } from './lib/security-headers';

console.log('main.tsx: Starting application...');

// Apply security headers
applyCspMeta();

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
      <React.StrictMode>
        <App />
      </React.StrictMode>
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
