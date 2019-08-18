import * as React from "react"
import { styled } from "@material-ui/styles"
import Typography, { TypographyProps } from "./Typography"
import { fontSizes } from "../../theme/theme"

export type MainTextProps = {
  /** Select from a scaled font size, 0 in normal, negative index for smaller, positive for larger */
  fontSize?: number
  /** Set the text alignment */
  align: "left" | "center" | "right"
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

const ThemeText = styled(Typography)({
  fontStyle: props => (props.italic ? "italic" : "normal"),
  fontSize: props => fontSizes[props.fontSize ? props.fontSize : 0],
  // letterSpacing: props =>
  //   props.upper
  //     ? themeGet("letterSpacings.upper")(props)
  //     : props.capital
  //     ? themeGet("letterSpacings.title")(props)
  //     : themeGet("letterSpacings.normal")(props),
  textTransform: props =>
    props.upper ? "uppercase" : props.capital ? "capitalize" : "none",
  fontWeight: props => (props.light ? 100 : props.bold ? 500 : 300)
})

export const Text: React.FC<TextProps> = props => {
  let override = props
  if (props.align) {
    switch (props.align) {
      case "left":
        override = Object.assign({}, props, { alignLeft: true })
        break
      case "center":
        override = Object.assign({}, props, { alignCenter: true })
        break
      case "right":
        override = Object.assign({}, props, { alignRight: true })
        break
      default:
        break
    }
  }

  return <ThemeText {...override} />
}
Text.displayName = "Text"
export const Span: React.FC<TextProps> = props => (
  <ThemeText {...props} component="span" />
)
Span.displayName = "Span"
export const Paragraph: React.FC<TextProps> = props => (
  <ThemeText {...props} component="p" />
)
Paragraph.displayName = "Paragraph"
