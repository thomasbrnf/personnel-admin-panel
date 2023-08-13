import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/personnel": "http://localhost:4000",
      "/edit-person": "http://localhost:4000",
      "/add-person": "http://localhost:4000",
      "/delete-person": "http://localhost:4000",
    },
  },
  plugins: [react()],
});
