// Service Worker for caching and performance optimization
const CACHE_NAME = 'urban-wealth-cache-v1';
const STATIC_CACHE = 'static-v1';
const API_CACHE = 'api-cache-v1';

// Cache static assets
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico'
];

// API patterns to cache
const API_PATTERNS = [
  /\/api\/blog/,
  /\/rest\/v1\/blog_posts/,
  /\/rest\/v1\/guides/,
  /\/rest\/v1\/builder_stories/
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('SW: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('SW: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheName.includes('v1')) {
            console.log('SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Handle static assets with cache-first strategy
  if (request.destination === 'script' || 
      request.destination === 'style' || 
      request.destination === 'image' ||
      request.url.includes('static')) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Handle API requests with stale-while-revalidate
  if (API_PATTERNS.some(pattern => pattern.test(url.pathname))) {
    event.respondWith(staleWhileRevalidate(request, API_CACHE));
    return;
  }

  // Handle navigation requests with network-first
  if (request.destination === 'document') {
    event.respondWith(networkFirst(request, CACHE_NAME));
    return;
  }

  // Default to network
  event.respondWith(fetch(request));
});

// Cache-first strategy for static assets
async function cacheFirst(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('SW: Cache-first failed:', error);
    return new Response('Network error', { status: 408 });
  }
}

// Stale-while-revalidate strategy for API calls
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  // Fetch from network in background
  const networkResponsePromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => null);

  // Return cached version immediately if available
  if (cachedResponse) {
    networkResponsePromise.catch(() => {});
    return cachedResponse;
  }

  // Otherwise wait for network
  return networkResponsePromise || new Response('No data available', { status: 503 });
}

// Network-first strategy for navigation
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return fallback for navigation requests
    return new Response(`
      <!DOCTYPE html>
      <html>
        <head><title>Offline</title></head>
        <body>
          <h1>You're offline</h1>
          <p>This page is not available offline. Please check your connection.</p>
        </body>
      </html>
    `, {
      status: 200,
      headers: { 'Content-Type': 'text/html' }
    });
  }
}
