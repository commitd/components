import * as React from "react"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

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
    spacing: factor => [0, 4, 8, 16, 32, 64, 128][factor],
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
