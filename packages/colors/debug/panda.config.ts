import { defineConfig } from '@pandacss/dev'

import { presetColors } from '../dist'

export default defineConfig({
  presets: [presetColors()],
  outdir: 'debug/out',
})
