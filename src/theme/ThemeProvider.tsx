import React, { FC } from 'react'
import deepmerge from 'deepmerge'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import * as themes from './theme'
import { families } from './fonts'

export interface ThemeProviderProps {
  /**
   *  To override the font families used. default is used for Typography,
   *  text for Text, display for Display and mono for Monospace.
   *
   *  main: '-apple-system, BlinkMacSystemFont, "San Francisco", Roboto,  "Segoe UI", "Helvetica Neue"',
   *  text: 'Geneva, Tahoma, sans-serif',
   *  display: '"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif',
   *  mono: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace'
   *
   */
  fonts?: {
    main?: string
    text?: string
    display?: string
    mono?: string
  }
  children?: React.ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  fonts = {},
  ...rest
}: ThemeProviderProps) => {
  const { main = families.system } = fonts
  const theme = deepmerge(themes.light, { typography: { fontFamily: main } })
  const muiTheme = responsiveFontSizes(createMuiTheme(theme))
  return (
    <MuiThemeProvider theme={deepmerge(muiTheme, { fonts })}>
      <CssBaseline />
      <div {...rest} />
    </MuiThemeProvider>
  )
}
