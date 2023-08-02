import { defineConfig } from '@pandacss/dev'
import { presetTokens } from '../dist'

export default defineConfig({
  presets: [presetTokens()],
  outdir: 'debug/out',
})
