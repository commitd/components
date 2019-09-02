import ArciformWolff2 from '@fonts/ArciformFF/arciform.woff2'
import FreeSansWolff from '@fonts/FreeSans/FreeSansBold.ttf'
import LatoTtf from '@fonts/Lato/Lato-Regular.ttf'
import { FontFace } from 'csstype'

export type Font = 'arciform' | 'freesans' | 'lato'

const arciform = {
  fontFamily: 'Arciform',
  fontWeight: 400,
  src: `
    local('Arciform'),
    local('Arciform-Regular'),
    url(${ArciformWolff2}) format('woff2')
  `
}

const freesans = {
  fontFamily: 'FreeSansBold',
  fontWeight: 'bold',
  src: `
      local('FreeSansBold'),
      url(${FreeSansWolff}) format('truetype')
      `
}

const lato = {
  fontFamily: 'Lato',
  fontWeight: 'normal',
  src: `
        local('Lato'),
        local('Lato-Regular'),
        url(${LatoTtf}) format('truetype')
      `
}

export const faces: FontFace[] = [arciform, freesans, lato]

export const size = '16px'

export const sizes = {
  [-3]: '0.296rem',
  [-2]: '0.444rem',
  [-1]: '0.667rem',
  [0]: '1rem',
  [1]: '1.5rem',
  [2]: '2.25rem',
  [3]: '3.375rem',
  [4]: '5.063rem',
  [5]: '7.594rem',
  [6]: '11.391rem'
}

export const families = {
  system:
    '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
  main: 'Lato, Geneva, Tahoma, sans-serif',
  display:
    'Arciform, "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
  brand: 'FreeSansBold',
  mono: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
}
