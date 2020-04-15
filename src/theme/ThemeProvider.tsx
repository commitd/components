import React, { FC } from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import {
  createCommittedFonts,
  createCommittedOverrides,
  createCommittedShape,
  createCommittedSpacing,
  createCommittedTypography,
  createCommittedPaletteOptions,
  defaultPaletteColors,
  FontOptions,
} from './theme'
import deepmerge from 'deepmerge'
import { PaletteOptions, Palette } from '@material-ui/core/styles/createPalette'
import createMuiPalette from '@material-ui/core/styles/createPalette'
import { ShapeOptions } from '@material-ui/core/styles/shape'
import { SpacingOptions } from '@material-ui/core/styles/createSpacing'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { Overrides } from '@material-ui/core/styles/overrides'
import { augmentColor } from './themeMaterialUtil'

export interface ThemeProviderProps {
  /**
   *  Should either return a `theme.FontOptions` object to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   *
   *  default is used for Typography,
   *  text for Text, display for Display and mono for Monospace.
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
  createFonts?: () => FontOptions | undefined
  /**
   * Should either return a [set of material-ui color intentions](https://material-ui.com/customization/palette/#customization) to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   *
   * The material-ui colors can be specified: palette.primary, palette.secondary, palette.error, palette.warning, palette.info or palette.success
   *
   * Additionally the committed-theme colors can be specified: palette.brand, palette.neutral
   */
  createPaletteOptions?: () => PaletteOptions
  /**
   * Should either return material-ui shape options i.e. `{ borderRadius: xx }` to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   */
  createShape?: () => ShapeOptions | undefined
  /**
   * Should either return [material-ui spacing options](https://material-ui.com/customization/spacing/) to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   */
  createSpacing?: () => SpacingOptions | undefined
  /**
   * Should either return [material-ui typography options](https://material-ui.com/customization/typography/) to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults.
   */
  createTypography?: () =>
    | TypographyOptions
    | ((palette: Palette) => TypographyOptions)
    | undefined
  /**
   * Should either return [material-ui overrides options](https://material-ui.com/customization/globals/) to replace the Committed theme defaults, or it should return undefined to use the Material-UI defaults. It is passed the palette created using the `createPaletteOptions()` prop
   */
  createOverrides?: (palette: Palette) => Overrides | undefined
  children?: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  createPaletteOptions = createCommittedPaletteOptions,
  createFonts = createCommittedFonts,
  createOverrides = createCommittedOverrides,
  createShape = createCommittedShape,
  createSpacing = createCommittedSpacing,
  createTypography = createCommittedTypography,
  ...rest
}: ThemeProviderProps) => {
  const paletteOptions = createPaletteOptions()
  const palette = createMuiPalette(paletteOptions)
  // createMuiPalette() "augments" inputted colors (that may be in several forms) to make them conform to {main: #xxxx, light:#xxxx ,...etc}
  // manually augment committed custom theme colors that createMuiPalette is not aware of
  palette.success = augmentColor(
    paletteOptions.success,
    defaultPaletteColors.success
  )
  palette.warning = augmentColor(
    paletteOptions.warning,
    defaultPaletteColors.warning
  )
  palette.brand = augmentColor(paletteOptions.brand, defaultPaletteColors.brand)
  palette.info = augmentColor(paletteOptions.info, defaultPaletteColors.info)
  palette.neutral = augmentColor(
    paletteOptions.neutral,
    defaultPaletteColors.neutral
  )

  const themeOptions: ThemeOptions = {
    palette,
    fonts: createFonts(),
    shape: createShape(),
    spacing: createSpacing(),
    typography: createTypography(),
    overrides: createOverrides(palette),
  }

  const muiTheme = responsiveFontSizes(createMuiTheme(themeOptions))
  const fonts = createFonts()
  return (
    <MuiThemeProvider theme={deepmerge(muiTheme, { fonts })}>
      <CssBaseline />
      <div {...rest} />
    </MuiThemeProvider>
  )
}

// for documentation
export const ThemeProviderDocs: FC<ThemeProviderProps> = () => null
