import React, { FC } from 'react'
import deepmerge from 'deepmerge'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { BaseCSSProperties } from '@material-ui/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as themes from './theme'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import {
  PaletteColors,
  createCommittedPalette,
  createCommittedFonts,
  createCommittedOverrides,
  createCommittedShape,
  createCommittedSpacing,
  createCommittedTypography
} from './theme'
import { defaultFonts } from './fonts'
import { PaletteOptions, Palette } from '@material-ui/core/styles/createPalette'
import { ShapeOptions } from '@material-ui/core/styles/shape'
import { SpacingOptions } from '@material-ui/core/styles/createSpacing'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { Overrides } from '@material-ui/core/styles/overrides'

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
  /**
   *  To override the value of particular colors in the palette. For example, the primary, secondary or brand colors.
   *
   *  Variants of each shade should be specified. Or a material-ui color preset should be used https://material-ui.com/customization/color/#color
   */
  paletteColors?: Partial<PaletteColors>
  createPalette?: (paletteColors: PaletteColors) => PaletteOptions
  createFonts?: () => typeof defaultFonts | undefined
  createShape?: () => ShapeOptions | undefined
  createSpacing?: () => SpacingOptions | undefined
  createTypography?: () =>
    | TypographyOptions
    | ((palette: Palette) => TypographyOptions)
    | undefined
  createOverrides?: (paletteColors: PaletteColors) => Overrides | undefined
  children?: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  createPalette = createCommittedPalette,
  createFonts = createCommittedFonts,
  createOverrides = createCommittedOverrides,
  createShape = createCommittedShape,
  createSpacing = createCommittedSpacing,
  createTypography = createCommittedTypography,
  paletteColors = {},
  ...rest
}: ThemeProviderProps) => {
  const mergedPaletteColors = deepmerge(
    themes.defaultPaletteColors,
    paletteColors
  )
  const themeOptions: ThemeOptions = {
    palette: createPalette(mergedPaletteColors),
    fonts: createFonts(),
    shape: createShape(),
    spacing: createSpacing(),
    typography: createTypography(),
    overrides: createOverrides(mergedPaletteColors)
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
