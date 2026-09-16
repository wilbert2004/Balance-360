import react from "@vitejs/plugin-react";
//importamos tailwindcss from "tailwindcss";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
