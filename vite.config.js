import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotev from "dotenv";

dotev.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src"
    }
  },
  server: {
    port: 3000,
  }
});
