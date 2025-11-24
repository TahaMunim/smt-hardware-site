import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import replitRuntimeErrorModal from "@replit/vite-plugin-runtime-error-modal";
import { cartographer } from "@replit/vite-plugin-cartographer";

export default defineConfig(({ mode }) => {
  const isReplit = process.env.REPL_ID !== undefined;
  const isProd = mode === "production";

  return {
    plugins: [
      react(),

      // Load Replit plugins ONLY inside Replit & ONLY in dev mode
      ...(isReplit && !isProd
        ? [
            // Runtime error modal (dev only)
            replitRuntimeErrorModal(),

            // Replit Cartographer (dev only)
            cartographer(),
          ]
        : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    root: path.resolve(import.meta.dirname, "client"),

    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
      sourcemap: false, // off for security & performance
      minify: "esbuild", // fastest + smallest
    },

    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});
