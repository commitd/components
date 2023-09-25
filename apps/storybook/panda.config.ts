import { presetColors } from '@committed/colors'
import { presetTokens } from '@committed/tokens'
import { presetUtilities } from '@committed/utilities'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  presets: [presetColors(), presetTokens(), presetUtilities()],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    // "./node_modules/@committed/ss/src/**/*.ts*",
    './node_modules/@committed/ds/src/**/*.ts*',
    // "./node_modules/@committed/colors/src/**/*.ts*",
    // "./node_modules/@committed/tokens/src/**/*.ts*",
    // using this instead of the above will trigger a refresh when the preset is changed
    // but config:change is not triggered
    //
    // touching this config will trigger a refresh and config:change is triggered
    // but still the style is not updated until storybook reload
    '../../packages/preset/src/**/*.ts*',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],
  jsxFramework: 'react',
  hooks: {
    'config:resolved': (conf) => {
      console.log('🐼 config:resolve')
    },
    'config:change': (conf) => {
      console.log(
        '🐼 config:change',
        JSON.stringify(conf?.theme?.recipes, null, 5),
      )
    },
    'generator:css': (file, _css) => {
      console.log('🐼 generator:css', file)
      // console.log('🐼 generator:css', _css)
    },
  },

  outdir: '@committed/ss',
  emitPackage: true,
})
