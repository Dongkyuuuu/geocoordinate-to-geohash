import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  splitting: false,
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
});
