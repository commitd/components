import React, { FC } from 'react'
import deepmerge from 'deepmerge'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { BaseCSSProperties } from '@material-ui/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as themes from './theme'
import { defaultFonts } from './fonts'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'
import { createLightOptions, PaletteColors } from './theme'

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
  children?: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  fonts = {},
  paletteColors = {},
  ...rest
}: ThemeProviderProps) => {
  const defaultFont = fonts.typography || defaultFonts.typography
  const allFonts = {
    typography: defaultFont,
    heading: fonts.heading || defaultFont,
    subheading: fonts.subheading || fonts.heading || defaultFont,
    text: fonts.text || defaultFont,
    display: fonts.display || defaultFont,
    monospace: fonts.monospace || defaultFonts.monospace
  }
  const lightOptions = createLightOptions(
    deepmerge(themes.defaultPaletteColors, paletteColors)
  )
  const theme: ThemeOptions = Object.assign({}, lightOptions, {
    fonts: allFonts,
    typography: Object.assign(lightOptions.typography, allFonts.typography)
  })
  const muiTheme = responsiveFontSizes(createMuiTheme(theme))
  return (
    <MuiThemeProvider theme={deepmerge(muiTheme, { fonts })}>
      <CssBaseline />
      <div {...rest} />
    </MuiThemeProvider>
  )
}

// for documentation
export const ThemeProviderDocs: FC<ThemeProviderProps> = () => null
