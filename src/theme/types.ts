import { BreakpointsOptions } from '@material-ui/core/styles/createBreakpoints'
import { Palette, PaletteOptions } from '@material-ui/core/styles/createPalette'
import { SpacingOptions } from '@material-ui/core/styles/createSpacing'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { Overrides } from '@material-ui/core/styles/overrides'
import { Shadows } from '@material-ui/core/styles/shadows'
import { ShapeOptions } from '@material-ui/core/styles/shape'
import { TransitionsOptions } from '@material-ui/core/styles/transitions'
import { ZIndexOptions } from '@material-ui/core/styles/zIndex'
import { BaseCSSProperties } from '@material-ui/styles/withStyles'
export type {
  PaletteColor,
  TypeAction,
  TypeText,
} from '@material-ui/core/styles/createPalette'
export type {
  BreakpointsOptions,
  SpacingOptions,
  TypographyOptions,
  Overrides,
  Palette,
  PaletteOptions,
  Shadows,
  ShapeOptions,
  TransitionsOptions,
  ZIndexOptions,
}

export interface SpacingFunction {
  (value: number): number
}

export interface DefaultOverrideOptionsFunction {
  (helpers: {
    palette: Palette
    fontSizing: FontSizing
    spacing: SpacingFunction
  }): Overrides
}

export interface OverrideOptionsFunction {
  (
    defaultOverrides: Overrides,
    helpers: {
      palette: Palette
      fontSizing: FontSizing
      spacing: SpacingFunction
    }
  ): Overrides
}

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

export type OptionsSpecification<T> = undefined | T | ((defaultValues: T) => T)

/**
 * Interface for theme configuration
 */
export interface ThemeConfig {
  /**
   * Provide a [set of Material-UI breakpoint options](https://material-ui.com/customization/breakpoints/#custom-breakpoints) to be merged with the Committed theme defaults,
   * or a function, provided the defaults, to return overrides.
   *
   * The defaults use  xs, sm, md, lg, and  xl, if a different set is required use the function variant.
   */
  breakpoints?: OptionsSpecification<BreakpointsOptions>
  /**
   * Provide a [set of Material-UI color intentions](https://material-ui.com/customization/palette/#customization) to be merged with the Committed theme defaults,
   * or a function, provided the defaults, to return overrides.
   *
   * The material-ui colors can be specified: palette.primary, palette.secondary, palette.error, palette.warning, palette.info or palette.success
   *
   * Additionally, a committed-theme color can be specified: palette.brand
   */
  palette?: OptionsSpecification<PaletteOptions>
  /**
   *  Provide a `theme.FontOptions` to be merged with the Committed theme defaults
   * or a function, provided the defaults, to return overrides.
   *
   *  `default` is used for Typography,
   *  `text` for Text, `display` for Display and `mono` for Monospace.
   *
   *  typography: { fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'},
   *  heading: { fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'},
   *  subheading: { fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'},
   *  text: { fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'},
   *  display: {
   *   fontFamily: '"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
   *   fontWeight: 700
   *  },
   *  monospace: { fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace' }
   *
   */
  fonts?: OptionsSpecification<FontOptions>
  /**
   * Provide a material-ui shape options i.e. `{ borderRadius: xx }` to merge with the Committed theme defaults,
   * or a function, provided the defaults, to return overrides.
   * */
  shape?: OptionsSpecification<ShapeOptions>
  /**
   * Provide a [Material-UI typography options](https://material-ui.com/customization/typography/) to merge with the Committed theme defaults,
   * or a function, provided the defaults, to return overrides.
   */
  typography?: OptionsSpecification<TypographyOptions>
  /**
   * Provide a TransitionsOptions object to merge with the Committed theme defaults,
   * or a function, provided the defaults, to return overrides.
   */
  transitions?: OptionsSpecification<TransitionsOptions>
  /**
   * Provide a ZIndexOptions object to merge with the Committed theme defaults,
   * or a function, provided the defaults, to return overrides.
   * See [Material-UI zIndex](https://material-ui.com/customization/z-index/).
   */
  zIndex?: OptionsSpecification<ZIndexOptions>
  /**
   * Provide a FontSizing function to override the Committed theme defaults,
   */
  fontSizing?: FontSizing
  /**
   * Provide a SpacingOptions object to override the Committed theme defaults.
   * See [Material-UI spacing options](https://material-ui.com/customization/spacing/).
   */
  spacing?: SpacingOptions
  /**
   * Provide a Overrides object to merge with the Committed theme defaults,
   * or it should be a function to return overrides.
   *
   * The function is supplied with the defaults and a set of helper functions to simplify alignment with the palette, spacing and sizing options.
   * See [Material-UI overrides options](https://material-ui.com/customization/globals/).
   */
  overrides?: Overrides | OverrideOptionsFunction
}

/**
 * Interface for Themes Configuration.
 */
export interface ThemesConfig {
  /**A themes config to be applied to both light and dark modes */
  common?: ThemeConfig
  /**A themes config to be applied to light modes, merged with common */
  light?: ThemeConfig
  /**A themes config to be applied to dark mode, merged with common */
  dark?: ThemeConfig
}
