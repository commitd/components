const { build } = require('esbuild')
const { peerDependencies } = require('./package.json')

const entryFile = 'src/index.ts'
const outFolder = 'dist'

const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: Object.keys(peerDependencies),
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  target: ['esnext', 'node12.22.0'],
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
