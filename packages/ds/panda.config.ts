import { presetColors } from '@committed/colors'
import { presetTokens } from '@committed/tokens'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: [presetColors(), presetTokens()],
  conditions: {
    extend: {
      notVertical: '&:not([data-orientation=vertical])',
      notHorizontal: '&:not([data-orientation=horizontal])',
    },
  },

  jsxFramework: 'react',
  emitPackage: true,
  outdir: '@committed/ss',
  clean: true,
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],
})
