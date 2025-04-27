import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  server: {
    host: true,
  },
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/services': 'http://localhost:5000'
    }
  }
});


