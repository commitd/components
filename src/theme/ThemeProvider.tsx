import * as React from "react"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { fonts } from "./theme"

// export const Base = styled((props) => <div {...props}/>)({
//   fontSize:   (props: ThemeProps) => props.theme.fontSize,
//   fontFamily: (props: ThemeProps) => props.theme.font,
//   lineHeight: (props: ThemeProps) => props.theme.lineHeights.standard,
//   fontWeight: (props: ThemeProps) => props.theme.fontWeights.medium,
//   * {
//     box-sizing: border-box;
//   }
// `

const muiTheme = responsiveFontSizes(
  createMuiTheme({
    props: {
      MuiTypography: {
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h2",
          subtitle2: "h3",
          body1: "p",
          body2: "span"
        }
      }
    },
    spacing: factor => [0, 4, 8, 16, 32, 64, 128][factor],
    typography: {
      fontFamily: fonts.system
    },
    overrides: {
      // Style sheet name ⚛️
      MuiButton: {
        // Name of the rule
        root: {
          // Some CSS
          textTransform: "none"
        }
      }
    }
  })
)

export default class ThemeProvider extends React.Component {
  public render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div {...this.props} />
      </MuiThemeProvider>
    )
  }
}
