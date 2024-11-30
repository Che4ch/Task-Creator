import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import svgLoader from "vite-svg-loader"
import path from "path"

export default defineConfig({
  plugins: [vue(), svgLoader({ defaultImport: "url" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/_base.scss" as *;`,
      },
    },
  },
})
