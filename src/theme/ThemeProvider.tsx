import * as React from "react"
import styled, { ThemeProvider as StyledThemeProvider } from "styled-components"
import nextTheme from "./theme"
export { withTheme } from "styled-components"

export const Base = styled.div`
  font-family: ${props => props.theme.font};
  line-height: ${props => props.theme.lineHeights.standard};
  font-weight: ${props => props.theme.fontWeights.medium};

  * {
    box-sizing: border-box;
  }
`

interface ThemeProviderProps {
  /** Array of pixel values for custom breakpoint overrides */
  customBreakpoints?: number[]
}

export default class ThemeProvider extends React.Component<ThemeProviderProps> {
  public render() {
    const { customBreakpoints } = this.props
    const breakpoints = customBreakpoints || nextTheme.breakpoints
    const theme = {
      ...nextTheme,
      breakpoints
    }

    return (
      <StyledThemeProvider theme={theme}>
        <Base {...this.props} />
      </StyledThemeProvider>
    )
  }
}
