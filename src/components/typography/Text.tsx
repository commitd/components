import { themeGet } from "@styled-system/theme-get"
import * as React from "react"
import styled from "styled-components"
import { theme, withTheme } from "../../theme"
import Typography from "./Typography"
import { TypographyProps } from "./Typography"

export type MainTextProps = {
  /** Set true to set title case */
  capital: boolean
  /** Set true to set all upper */
  upper: boolean
  /** Set true to use bold font */
  bold: boolean
  /** Set true to use light font */
  light: boolean
  /** Set true to use italic font  */
  italic: boolean
}
export type TextProps = TypographyProps & MainTextProps

const ThemeText = withTheme(styled(Typography)<TextProps & { as?: any }>`
  font-style: ${props => (props.italic ? "italic" : "normal")};
  letter-spacing: ${props =>
    props.upper
      ? themeGet("letterSpacings.upper")(props)
      : props.capital
      ? themeGet("letterSpacings.title")(props)
      : themeGet("letterSpacings.normal")(props)};
  text-transform: ${props =>
    props.upper ? "uppercase" : props.capital ? "capitalize" : "none"};
  font-weight: ${props =>
    props.light
      ? themeGet("fontWeights.light")(props)
      : props.bold
      ? themeGet("fontWeights.bold")(props)
      : themeGet("fontWeights.medium")(props)};
`)

ThemeText.defaultProps = {
  theme: theme
}

export const Text: React.FC<TextProps> = props => <ThemeText {...props} />
Text.displayName = "Text"
export const Span: React.FC<TextProps> = props => (
  <ThemeText {...props} as="span" />
)
Span.displayName = "Span"
export const Paragraph: React.FC<TextProps> = props => (
  <ThemeText {...props} as="p" />
)
Paragraph.displayName = "Paragraph"
