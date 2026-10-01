import { defineConfig } from "vite";
import zaloMiniApp from "zmp-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default () => {
  const rootDir = fileURLToPath(new URL(".", import.meta.url));

  return defineConfig({
    root: "./src",
    base: "",
    plugins: [zaloMiniApp(), react()],
    build: {
      assetsInlineLimit: 0,
    },
    resolve: {
      alias: {
        "@": path.resolve(rootDir, "src"),
      },
    },
  });
};
