import { create } from '@storybook/theming'
import lightImage from '../public/images/Committed-Colour-512px.png'
import darkImage from '../public/images/Committed-Yellow-Trans-512px.png'

// The default color scheme is light so unless the preferred color
// scheme is set to dark we always want to use the light theme
// from '@storybook/theming/src/utils'
export const getPreferredColorScheme = () => {
  if (!window || !window.matchMedia) return 'light'

  const isDarkThemePreferred = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
  if (isDarkThemePreferred) return 'dark'

  return 'light'
}

console.log(lightImage)
console.log(darkImage)

export default create({
  colorPrimary: '#ffbb00',
  colorSecondary: '#4098D7',

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"', // fonts.defaultFonts.typography.fontFamily,
  fontCode:
    '"SFMono-Regular", Consolas, "Liberation Mono", "Andale Mono", "Ubuntu Mono", Menlo, Courier, monospace', // fonts.defaultFonts.monospace.fontFamily,

  brandTitle: 'Committed Components',
  brandUrl: '/',
  brandImage: getPreferredColorScheme() == 'light' ? lightImage : darkImage
})
