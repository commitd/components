import { FontSizing } from './types'
export const size = 16

export const sizes = {
  [-2]: '0.694rem',
  [-1]: '0.833rem',
  0: '1rem',
  1: '1.2rem',
  2: '1.44rem',
  3: '1.728rem',
  4: '2.074rem',
  5: '2.488rem',
  6: '2.9856rem',
}

export const sizing: FontSizing = (factor: number) => {
  // should be an int, but just incase
  var index = Math.floor(factor) as -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6
  if (index < -2) index = -2
  if (index > 6) {
    index = 6
  }
  return sizes[index]
}

const systemFont =
  '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'

const materialFont = '"Roboto", "Helvetica", "Arial", sans-serif"'

const monospaceFont =
  '"SFMono-Regular", Consolas, "Liberation Mono", "Andale Mono", "Ubuntu Mono", Menlo, Courier, monospace'

export const defaultFonts = {
  typography: { fontFamily: systemFont },
  heading: { fontFamily: systemFont },
  subheading: { fontFamily: systemFont },
  text: { fontFamily: systemFont },
  display: {
    fontFamily: '"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
  },
  monospace: { fontFamily: monospaceFont },
}

export const materialFonts = {
  typography: { fontFamily: materialFont },
  heading: { fontFamily: materialFont },
  subheading: { fontFamily: materialFont },
  text: { fontFamily: materialFont },
  display: {
    fontFamily: materialFont,
  },
  monospace: {
    fontFamily: monospaceFont,
  },
}
