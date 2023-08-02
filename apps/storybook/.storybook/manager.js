import { addons } from '@storybook/addons'
import { committedDark, committedLight } from './committed/theme.js'

addons.setConfig({
  darkMode: {
    dark: committedDark,
    light: committedLight,
  },
  theme: committedLight,
  showPanel: false,
})
