/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { definePreset } from '@pandacss/dev'
import type { Preset, SemanticTokens } from '@pandacss/types'
import * as colors from '@radix-ui/colors'

type AllColor = keyof typeof colors
export type Color = Exclude<AllColor, `${string}Dark` | `${string}A`>
export type ColorScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export type Prefix<P extends string, T extends string> = `${P}${T}`

export type test = Prefix<'$', Color>

export const neutralColors: Color[] = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
]
export const primaryColors: Color[] = [
  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'grass',
  'orange',
  'brown',
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
]

export interface Config {
  primary?: Color
  secondary?: Color
  neutral?: Color
  info?: Color
  warn?: Color
  error?: Color
  success?: Color
}

export type SemanticColor = keyof Required<Config>

export const semanticColors: SemanticColor[] = [
  'primary',
  'secondary',
  'neutral',
  'info',
  'warn',
  'error',
  'success',
]

const blackText = ['sky', 'mint', 'lime', 'yellow', 'amber']

const DefaultConfig: Required<Config> = {
  primary: 'amber',
  secondary: 'mint',
  neutral: 'sand',
  info: 'blue',
  warn: 'orange',
  error: 'red',
  success: 'grass',
}

function createColorValue(
  color: Color,
  lightLevel: ColorScale,
  darkLevel?: ColorScale,
) {
  darkLevel = darkLevel ?? lightLevel
  return {
    value: {
      base: (colors as any)[color][`${color}${lightLevel}`] as string,
      _dark: (colors as any)[`${color}Dark`][`${color}${darkLevel}`] as string,
    },
  }
}

function createInvertedValue(
  color: Color,
  lightLevel: ColorScale,
  darkLevel?: ColorScale,
) {
  darkLevel = darkLevel ?? lightLevel
  return {
    value: {
      base: (colors as any)[`${color}Dark`][`${color}${lightLevel}`] as string,
      _dark: (colors as any)[color][`${color}${darkLevel}`] as string,
    },
  }
}

function createAlphaValue(
  color: Color,
  lightLevel: ColorScale,
  darkLevel?: ColorScale,
) {
  darkLevel = darkLevel ?? lightLevel
  return {
    value: {
      base: (colors as any)[`${color}A`][`${color}A${lightLevel}`] as string,
      _dark: (colors as any)[`${color}DarkA`][
        `${color}A${darkLevel}`
      ] as string,
    },
  }
}

function createColorPair(
  color: Color,
  lightLevel: ColorScale,
  darkLevel?: ColorScale,
) {
  return {
    DEFAULT: createColorValue(color, lightLevel, darkLevel),
    a: createAlphaValue(color, lightLevel, darkLevel),
  }
}

function createColorScale(color: Color) {
  return {
    DEFAULT: createColorValue(color, 9),
    a: createAlphaValue(color, 9),
    1: createColorPair(color, 1),
    2: createColorPair(color, 2),
    3: createColorPair(color, 3),
    4: createColorPair(color, 4),
    5: createColorPair(color, 5),
    6: createColorPair(color, 6),
    7: createColorPair(color, 7),
    8: createColorPair(color, 8),
    9: createColorPair(color, 9),
    10: createColorPair(color, 10),
    11: createColorPair(color, 11),
    12: createColorPair(color, 12),
    outline: {
      DEFAULT: createColorValue(color, 2),
      focus: createColorValue(color, 3),
      hover: createColorValue(color, 3),
      active: createColorValue(color, 11),
    },
    border: {
      DEFAULT: createColorValue(color, 7),
      focus: createColorValue(color, 10),
      hover: createColorValue(color, 10),
      active: createColorValue(color, 11),
    },
    solid: {
      DEFAULT: createColorValue(color, 9),
      focus: createColorValue(color, 10),
      hover: createColorValue(color, 10),
      active: createColorValue(color, 11),
    },
    text: {
      DEFAULT: { value: blackText.includes(color) ? 'black' : 'white' },
      low: createColorValue(color, 11),
      contrast: createColorValue(color, 12),
    },
  }
}

const primaryColorTokens = primaryColors.reduce((colors, color) => {
  colors[`$${color}`] = createColorScale(color)
  return colors
}, {} as any)
const neutralColorsTokens = neutralColors.reduce((colors, color) => {
  colors[`$${color}`] = createColorScale(color)
  return colors
}, {} as any)

function createColorTokens(config: Required<Config>): SemanticTokens['colors'] {
  return {
    ...primaryColorTokens,
    ...neutralColorsTokens,
    $primary: createColorScale(config.primary),
    $secondary: createColorScale(config.secondary),
    $neutral: createColorScale(config.neutral),
    $info: createColorScale(config.info),
    $warn: createColorScale(config.warn),
    $error: createColorScale(config.error),
    $success: createColorScale(config.success),
    $transparency: {
      DEFAULT: {
        value: { base: colors.blackA.blackA12, _dark: colors.whiteA.whiteA12 },
      },
      1: {
        value: { base: colors.blackA.blackA1, _dark: colors.whiteA.whiteA1 },
      },
      2: {
        value: { base: colors.blackA.blackA2, _dark: colors.whiteA.whiteA2 },
      },
      3: {
        value: { base: colors.blackA.blackA3, _dark: colors.whiteA.whiteA3 },
      },
      4: {
        value: { base: colors.blackA.blackA4, _dark: colors.whiteA.whiteA4 },
      },
      5: {
        value: { base: colors.blackA.blackA5, _dark: colors.whiteA.whiteA5 },
      },
      6: {
        value: { base: colors.blackA.blackA6, _dark: colors.whiteA.whiteA6 },
      },
      7: {
        value: { base: colors.blackA.blackA7, _dark: colors.whiteA.whiteA7 },
      },
      8: {
        value: { base: colors.blackA.blackA8, _dark: colors.whiteA.whiteA8 },
      },
      9: {
        value: { base: colors.blackA.blackA9, _dark: colors.whiteA.whiteA9 },
      },
      10: {
        value: { base: colors.blackA.blackA10, _dark: colors.whiteA.whiteA10 },
      },
      11: {
        value: { base: colors.blackA.blackA11, _dark: colors.whiteA.whiteA11 },
      },
      12: {
        value: { base: colors.blackA.blackA12, _dark: colors.whiteA.whiteA12 },
      },
    },
    $surface: {
      neutral: {
        value: { base: '{colors.$neutral.3}', _dark: '{colors.$neutral.1}' },
      },
      solid: {
        value: { base: '{colors.$neutral.1}', _dark: '{colors.$neutral.3}' },
      },
      clear: {
        value: 'transparent',
      },
      glass: {
        value: {
          base: '{colors.$neutral.1.a}',
          _dark: '{colors.$neutral.3.a}',
        },
      },
      frost: {
        value: {
          base: '{colors.$neutral.6.a}',
          _dark: '{colors.$neutral.6.a}',
        },
      },
    },

    $tooltip: createInvertedValue(config.neutral, 1),
    $selection: {
      value: '{colors.$primary.3.a}',
    },
    $text: {
      DEFAULT: { value: { base: '#3b3b3b', _dark: '#FFFFFF' } },
      secondary: {
        value: { base: '{colors.$neutral.11}', _dark: '{colors.$white}' },
      },
      tooltip: {
        value: { base: '#FFFFFF', _dark: '#000000' },
      },
    },
  } satisfies SemanticTokens['colors']
}

export function preset(config: Config = {}): Preset {
  const fullConfig: Required<Config> = {
    ...DefaultConfig,
    ...config,
  }
  return definePreset({
    theme: {
      extend: {
        semanticTokens: {
          colors: createColorTokens(fullConfig),
        },
      },
    },
  })
}
