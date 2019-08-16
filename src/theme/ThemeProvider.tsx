import * as React from "react"
import GlobalStyle from "./GlobalStyle"
export { withTheme } from "styled-components"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { styled, ThemeProvider as MuiThemeProvider } from "@material-ui/styles"

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
      <>
        <GlobalStyle />
        <MuiThemeProvider theme={muiTheme}>
          <div {...this.props} />
        </MuiThemeProvider>
      </>
    )
  }
}
