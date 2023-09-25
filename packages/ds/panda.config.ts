import { presetColors } from '@committed/colors'
import { presetTokens } from '@committed/tokens'
import { presetUtilities } from '@committed/utilities'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: [presetColors(), presetTokens(), presetUtilities()],
  jsxFramework: 'react',
  emitPackage: true,
  outdir: '@committed/ss',
  clean: true,
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
})
