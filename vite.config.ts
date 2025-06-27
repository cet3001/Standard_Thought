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
    rollupOptions: {
      // Ensure critical files are included in build
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      // Explicitly copy 404.html to root of dist
      output: {
        assetFileNames: (assetInfo) => {
          // Keep 404.html at root level
          if (assetInfo.name === '404.html') {
            return '404.html';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    // Ensure 404.html is treated as a static asset
    assetsInclude: ['**/*.html']
  }
}));
