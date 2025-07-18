
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure all public files are copied to dist during build
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Optimize bundle splitting for better caching
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        // Split vendor libraries into separate chunks
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-toast'],
          'query-vendor': ['@tanstack/react-query'],
          'supabase-vendor': ['@supabase/supabase-js'],
        },
        // Optimize chunk file naming for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId;
          if (facadeModuleId) {
            if (facadeModuleId.includes('pages/')) {
              return 'pages/[name]-[hash].js';
            }
            if (facadeModuleId.includes('components/')) {
              return 'components/[name]-[hash].js';
            }
          }
          return 'chunks/[name]-[hash].js';
        },
        assetFileNames: 'assets/[name]-[hash].[ext]',
        entryFileNames: 'entries/[name]-[hash].js',
      }
    },
    // Copy all files from public directory
    copyPublicDir: true,
    // Enable minification (uses esbuild by default - faster than terser)
    minify: true,
    // Increase chunk size warning limit for better performance
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@tanstack/react-query',
      '@supabase/supabase-js'
    ],
  },
}));
