import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  outDir: 'dist',
  clean: true,
  dts: false,
  splitting: false,
  sourcemap: true,
  minify: false,
  format: ['esm'],
  external: ['@committed/ds-ss'],
})
