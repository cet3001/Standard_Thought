// Service Worker for caching strategies and performance optimization
const CACHE_NAME = 'standard-thought-v1';
const STATIC_CACHE = 'static-assets-v1';
const API_CACHE = 'api-cache-v1';

// Static assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/robots.txt',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[SW] Static assets cached successfully');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE && cacheName !== API_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] Service worker activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests for external domains (except fonts and CDNs)
  if (url.origin !== location.origin && 
      !url.origin.includes('fonts.googleapis.com') &&
      !url.origin.includes('fonts.gstatic.com') &&
      !url.origin.includes('lovableproject.com')) {
    return;
  }

  // API requests - stale-while-revalidate strategy
  if (url.pathname.includes('/rest/v1/') || url.pathname.includes('/api/')) {
    event.respondWith(staleWhileRevalidate(request, API_CACHE));
    return;
  }

  // Static assets - cache first strategy
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // HTML pages - network first with cache fallback
  if (isHTMLRequest(request)) {
    event.respondWith(networkFirstWithCache(request, CACHE_NAME));
    return;
  }

  // Everything else - network first
  event.respondWith(
    fetch(request).catch(() => {
      // Fallback for offline
      if (isHTMLRequest(request)) {
        return caches.match('/');
      }
    })
  );
});

// Cache first strategy for static assets
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    if (cached) {
      console.log('[SW] Cache hit:', request.url);
      return cached;
    }

    const response = await fetch(request);
    if (response.status === 200) {
      const responseClone = response.clone();
      cache.put(request, responseClone);
      console.log('[SW] Cached new asset:', request.url);
    }
    
    return response;
  } catch (error) {
    console.error('[SW] Cache first error:', error);
    return fetch(request);
  }
}

// Stale while revalidate for API calls
async function staleWhileRevalidate(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    // Always fetch in background to update cache
    const fetchPromise = fetch(request).then((response) => {
      if (response.status === 200) {
        const responseClone = response.clone();
        cache.put(request, responseClone);
        console.log('[SW] Updated API cache:', request.url);
      }
      return response;
    });

    // Return cached version immediately if available
    if (cached) {
      console.log('[SW] Serving from cache while revalidating:', request.url);
      return cached;
    }

    // If no cache, wait for network
    return fetchPromise;
  } catch (error) {
    console.error('[SW] Stale while revalidate error:', error);
    return fetch(request);
  }
}

// Network first with cache fallback for HTML
async function networkFirstWithCache(request, cacheName) {
  try {
    const response = await fetch(request);
    
    if (response.status === 200) {
      const cache = await caches.open(cacheName);
      const responseClone = response.clone();
      cache.put(request, responseClone);
      console.log('[SW] Cached HTML page:', request.url);
    }
    
    return response;
  } catch (error) {
    console.log('[SW] Network failed, trying cache:', request.url);
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    // Ultimate fallback to homepage
    return caches.match('/');
  }
}

// Helper functions
function isStaticAsset(pathname) {
  return pathname.match(/\.(js|css|png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|eot)$/);
}

function isHTMLRequest(request) {
  return request.headers.get('accept')?.includes('text/html');
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});