import React, { FC } from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { BaseCSSProperties } from '@material-ui/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import {
  createCommittedFonts,
  createCommittedOverrides,
  createCommittedShape,
  createCommittedSpacing,
  createCommittedTypography,
  createCommittedPaletteOptions,
  defaultPaletteColors
} from './theme'
import { defaultFonts } from './fonts'
import { PaletteOptions, Palette } from '@material-ui/core/styles/createPalette'
import createMuiPalette from '@material-ui/core/styles/createPalette'
import { ShapeOptions } from '@material-ui/core/styles/shape'
import { SpacingOptions } from '@material-ui/core/styles/createSpacing'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { Overrides } from '@material-ui/core/styles/overrides'
import { augmentColor } from './themeMaterialUtil'

export interface ThemeProviderProps {
  /**
   *  To override the font families used. default is used for Typography,
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
  fonts?: {
    typography?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
    heading?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
    subheading?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
    text?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
    display?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
    monospace?: { [P in keyof BaseCSSProperties]: BaseCSSProperties[P] }
  }
  createPaletteOptions?: () => PaletteOptions
  createFonts?: () => typeof defaultFonts | undefined
  createShape?: () => ShapeOptions | undefined
  createSpacing?: () => SpacingOptions | undefined
  createTypography?: () =>
    | TypographyOptions
    | ((palette: Palette) => TypographyOptions)
    | undefined
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
    overrides: createOverrides(palette)
  }

  const muiTheme = responsiveFontSizes(createMuiTheme(themeOptions))
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div {...rest} />
    </MuiThemeProvider>
  )
}

// for documentation
export const ThemeProviderDocs: FC<ThemeProviderProps> = () => null
