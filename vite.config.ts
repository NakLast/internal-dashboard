import path from "path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./src/app"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
