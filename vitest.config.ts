/// <reference types="vitest" />
import path from "path";
import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    root: "./",
    environment: "node",
    include: ["**/*.spec.ts", "**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@test": path.resolve(__dirname, "./test"),
    },
  },
  plugins: [
    swc.vite({
      module: { type: "es6" },
      jsc: {
        target: "es2023",
      },
    }),
  ],
});
