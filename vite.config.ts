import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/friends-a-random-one/", // Replace with your repository name
  plugins: [react()],
});
