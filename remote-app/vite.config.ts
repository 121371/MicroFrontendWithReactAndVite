// remote-app/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js", // This should create the correct entry point
      exposes: {
        "./Button": "./src/Button", // Ensure this path is correct
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3001,
    cors: true, // Enable CORS
  },
});
