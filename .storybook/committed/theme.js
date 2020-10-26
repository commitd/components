import { create } from '@storybook/theming'
import lightImage from '../../public/images/Committed-Colour-512px.png'
import darkImage from '../../public/images/Committed-Yellow-Trans-512px.png'

const overrides = {
  colorPrimary: '#ffbb00',
  colorSecondary: '#4098D7',

  // Typography
  fontBase:
    '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"', // fonts.defaultFonts.typography.fontFamily,
  fontCode:
    '"SFMono-Regular", Consolas, "Liberation Mono", "Andale Mono", "Ubuntu Mono", Menlo, Courier, monospace', // fonts.defaultFonts.monospace.fontFamily,

  brandTitle: 'Committed Components',
  brandUrl: '/',
}

export const committedLight = create({
  ...overrides,
  base: 'light',
  brandImage: lightImage,
})

export const committedDark = create({
  ...overrides,
  base: 'dark',
  brandImage: darkImage,
})
