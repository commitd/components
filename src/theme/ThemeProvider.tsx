import * as React from "react"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import * as theme from "./theme"

const muiTheme = responsiveFontSizes(createMuiTheme(theme.light))

export const ThemeProvider = (props: any) => (
  <MuiThemeProvider theme={muiTheme}>
    <CssBaseline />
    <div {...props} />
  </MuiThemeProvider>
)
