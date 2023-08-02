import { definePreset } from '@pandacss/dev'
import type { Preset, SemanticTokens } from '@pandacss/types'
import * as colors from '@radix-ui/colors'

type AllColor = keyof typeof colors
export type Color = Exclude<AllColor, `${string}Dark` | `${string}A`>
export type ColorScale = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface ColorConfig {
  primary?: Color
  secondary?: Color
  grey?: Color
  info?: Color
  warn?: Color
  error?: Color
  success?: Color
}

const DefaultColorConfig: ColorConfig = {
  primary: 'amber',
  secondary: 'mint',
  grey: 'sand',
  info: 'blue',
  warn: 'orange',
  error: 'red',
  success: 'grass',
}

function createColorValue(color: Color, level: ColorScale) {
  return {
    value: {
      base: (colors as any)[color][`${color}${level}`] as string,
      _dark: (colors as any)[`${color}Dark`][`${color}${level}`] as string,
    },
  }
}

function createInvertedValue(color: Color, level: ColorScale) {
  return {
    value: {
      base: (colors as any)[`${color}Dark`][`${color}${level}`] as string,
      _dark: (colors as any)[color][`${color}${level}`] as string,
    },
  }
}

function createAlphaValue(color: Color, level: ColorScale) {
  return {
    value: {
      base: (colors as any)[`${color}A`][`${color}A${level}`] as string,
      _dark: (colors as any)[`${color}DarkA`][`${color}A${level}`] as string,
    },
  }
}

function createColorPair(color: Color, level: ColorScale) {
  return {
    DEFAULT: createColorValue(color, level),
    a: createAlphaValue(color, level),
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
    base: createColorValue(color, 1),
    bg: {
      DEFAULT: createColorValue(color, 3),
      subtle: createColorValue(color, 2),
      hover: createColorValue(color, 4),
      active: createColorValue(color, 5),
    },
    line: createColorValue(color, 6),
    border: {
      DEFAULT: createColorValue(color, 7),
      hover: createColorValue(color, 8),
    },
    focus: {
      DEFAULT: createColorValue(color, 8),
    },
    solid: {
      DEFAULT: createColorValue(color, 9),
      hover: createColorValue(color, 10),
    },
    text: {
      DEFAULT: createColorValue(color, 11),
      contrast: createColorValue(color, 12),
    },
  }
}

function createColorTokens(config: ColorConfig) {
  return {
    $primary: createColorScale(config.primary!),
    $secondary: createColorScale(config.secondary!),
    $grey: createColorScale(config.grey!),
    $info: createColorScale(config.info!),
    $warn: createColorScale(config.warn!),
    $error: createColorScale(config.error!),
    $success: createColorScale(config.success!),
    $overlay: {
      black: {
        DEFAULT: { value: colors.blackA.blackA12 },
        1: { value: colors.blackA.blackA1 },
        2: { value: colors.blackA.blackA2 },
        3: { value: colors.blackA.blackA3 },
        4: { value: colors.blackA.blackA4 },
        5: { value: colors.blackA.blackA5 },
        6: { value: colors.blackA.blackA6 },
        7: { value: colors.blackA.blackA7 },
        8: { value: colors.blackA.blackA8 },
        9: { value: colors.blackA.blackA9 },
        10: { value: colors.blackA.blackA10 },
        11: { value: colors.blackA.blackA11 },
        12: { value: colors.blackA.blackA12 },
      },
      white: {
        DEFAULT: { value: colors.whiteA.whiteA12 },
        1: { value: colors.whiteA.whiteA1 },
        2: { value: colors.whiteA.whiteA2 },
        3: { value: colors.whiteA.whiteA3 },
        4: { value: colors.whiteA.whiteA4 },
        5: { value: colors.whiteA.whiteA5 },
        6: { value: colors.whiteA.whiteA6 },
        7: { value: colors.whiteA.whiteA7 },
        8: { value: colors.whiteA.whiteA8 },
        9: { value: colors.whiteA.whiteA9 },
        10: { value: colors.whiteA.whiteA10 },
        11: { value: colors.whiteA.whiteA11 },
        12: { value: colors.whiteA.whiteA12 },
      },
    },
    $background: {
      value: { base: '{colors.$grey.3}', _dark: '{colors.$grey.3}' },
    },
    $paper: { value: { base: 'white', _dark: '{colors.$grey.9}' } },
    $tooltip: createInvertedValue(config.grey!, 1),
    $selection: {
      value: '{$primary.3}',
    },
    $text: {
      DEFAULT: { value: { base: '#3b3b3b', _dark: '#FFFFFF' } },
      secondary: {
        value: { base: '{colors.$grey11}', _dark: '{colors.$white}' },
      },
      tooltip: {
        value: { base: '#FFFFFF', _dark: '#000000' },
      },
    },
  } satisfies SemanticTokens['colors']
}

export function presetColors(config: ColorConfig = {}): Preset {
  const fullConfig = { ...DefaultColorConfig, ...config }
  return definePreset({
    theme: {
      semanticTokens: {
        colors: createColorTokens(fullConfig),
      },
    },
  })
}
