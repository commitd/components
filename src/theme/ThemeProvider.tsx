import React, { FC } from 'react'
import deepmerge from 'deepmerge'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import { BaseCSSProperties } from '@material-ui/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as themes from './theme'
import { families } from './fonts'

export interface ThemeProviderProps {
  /**
   *  To override the font families used. default is used for Typography,
   *  text for Text, display for Display and mono for Monospace.
   *
   *  main: { fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"'},
   *  text: { fontFamily: 'Geneva, Tahoma, sans-serif' },
   *  display: {
   *   fontFamily: '"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
   *   fontWeight: 700
   *  },
   *  mono: { fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace' }
   *
   */
  fonts?: {
    main?: [P in keyof BaseCSSProperties]: BaseCSSProperties[P]
    text?: [P in keyof BaseCSSProperties]: BaseCSSProperties[P]
    display?: [P in keyof BaseCSSProperties]: BaseCSSProperties[P]
    mono?: [P in keyof BaseCSSProperties]: BaseCSSProperties[P]
  }
  children?: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  fonts = {},
  ...rest
}: ThemeProviderProps) => {
  const allFonts = deepmerge({ families }, fonts)
  const theme = deepmerge(themes.light, { typography: allFonts.main })
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
