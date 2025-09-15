import { defineConfig } from "@monoreponame/vite-config";

export default defineConfig(async () => ({
  application: {
    compress: true,
    visualizer: true,
    compressTypes: ["brotli", "gzip"],
  },
}));
