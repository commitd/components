import { BaseCSSProperties } from '@material-ui/styles/withStyles'
export type { SpacingOptions } from '@material-ui/core/styles/createSpacing'
export type { ShapeOptions } from '@material-ui/core/styles/shape'
export type { TypographyOptions } from '@material-ui/core/styles/createTypography'
export type { Overrides } from '@material-ui/core/styles/overrides'
export type {
  Palette,
  PaletteColor,
  PaletteOptions,
  TypeAction,
  TypeText,
} from '@material-ui/core/styles/createPalette'

export type ThemeChoice = 'light' | 'dark'

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    brand?: PaletteColorOptions
  }

  interface Palette {
    brand: PaletteColor
  }
}

export type FontType =
  | 'typography'
  | 'heading'
  | 'subheading'
  | 'text'
  | 'display'
  | 'monospace'

/** The supported font types */
export interface Fonts {
  typography: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  heading: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  subheading: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  text: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  display: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  monospace: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
}

/** The font size scale.
 * should be and integer between -2 and 6, inclusively */
export interface FontSizing {
  (factor: number): string
}

export type FontOptions = Partial<Fonts>

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    fonts: Fonts
    fontSizing: FontSizing
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    fonts?: FontOptions
    fontSizing?: FontSizing
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    brand: PaletteColor
  }
}
