import { build } from 'esbuild'
import { nodeExternalsPlugin } from 'esbuild-node-externals'

const entryFile = 'src/index.ts'
const outFolder = 'dist'

const shared = {
  bundle: true,
  entryPoints: [entryFile],
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  target: ['esnext'],
  plugins: [nodeExternalsPlugin()],
}

build({
  ...shared,
  format: 'esm',
  outfile: `${outFolder}/index.esm.js`,
})

build({
  ...shared,
  format: 'cjs',
  outfile: `${outFolder}/index.cjs.js`,
})
