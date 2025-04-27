import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    React(),
    tailwindcss()
  ],
  server: {
    host: true,
    allowedHosts: ['doctor-appointment-app-ksqr.onrender.com'],
    proxy: {
      '/services': 'http://localhost:5000'
    }
  }
});


