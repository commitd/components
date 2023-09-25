import { defineRecipe } from '@pandacss/dev'

export const paletteRecipe = defineRecipe({
  className: 'palette',
  description: 'Color palette options for use with the color variant',
  variants: {
    color: {
      $primary: {
        colorPalette: '$primary',
      },
      $secondary: {
        colorPalette: '$secondary',
      },
      $neutral: {
        colorPalette: '$neutral',
      },
      $info: {
        colorPalette: '$info',
      },
      $warn: {
        colorPalette: '$warn',
      },
      $error: {
        colorPalette: '$error',
      },
      $success: {
        colorPalette: '$success',
      },
      $tomato: {
        colorPalette: '$tomato',
      },
      $red: {
        colorPalette: '$red',
      },
      $crimson: {
        colorPalette: '$crimson',
      },
      $pink: {
        colorPalette: '$pink',
      },
      $plum: {
        colorPalette: '$plum',
      },
      $purple: {
        colorPalette: '$purple',
      },
      $violet: {
        colorPalette: '$violet',
      },
      $indigo: {
        colorPalette: '$indigo',
      },
      $blue: {
        colorPalette: '$blue',
      },
      $cyan: {
        colorPalette: '$cyan',
      },
      $teal: {
        colorPalette: '$teal',
      },
      $green: {
        colorPalette: '$green',
      },
      $grass: {
        colorPalette: '$grass',
      },
      $orange: {
        colorPalette: '$orange',
      },
      $brown: {
        colorPalette: '$brown',
      },
      $sky: {
        colorPalette: '$sky',
      },
      $mint: {
        colorPalette: '$mint',
      },
      $lime: {
        colorPalette: '$lime',
      },
      $yellow: {
        colorPalette: '$yellow',
      },
      $amber: {
        colorPalette: '$amber',
      },
      $gray: {
        colorPalette: '$gray',
      },
      $mauve: {
        colorPalette: '$mauve',
      },
      $slate: {
        colorPalette: '$slate',
      },
      $sage: {
        colorPalette: '$sage',
      },
      $olive: {
        colorPalette: '$olive',
      },
      $sand: {
        colorPalette: '$sand',
      },
    },
  },
})
