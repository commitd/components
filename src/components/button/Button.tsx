import * as React from "react"
import styled from "styled-components"
import {
  color,
  space,
  minWidth,
  boxShadow,
  WidthProps,
  SpaceProps,
  FontSizeProps,
  MinWidthProps,
  BorderProps,
  fontSize,
  border,
  ColorProps,
  BoxShadowProps
} from "styled-system"
import { themeGet } from "@styled-system/theme-get"
import { theme, ThemeProps, withTheme } from "../../theme"

type SharedButtonProps = FontSizeProps &
  ColorProps &
  SpaceProps &
  MinWidthProps &
  WidthProps &
  BorderProps &
  BoxShadowProps & {
    // Set true to disable
    disabled?: boolean
  }

type InnerButtonProps = SharedButtonProps & {
  hoverColor: string
  colorAttribute: string
  stretch: boolean
}

const hoverAttributeMap = {
  bg: "background-color",
  color: "color"
}

const getDisplay = (props: InnerButtonProps) =>
  props.stretch ? "block" : "inline-block"
const getWidth = (props: InnerButtonProps) => (props.stretch ? "100%" : null)
const getHoverColor = (props: InnerButtonProps) =>
  `
    ${hoverAttributeMap[props.colorAttribute]}: ${
    props.disabled ? props.bg : props.hoverColor
  }
  `

const InnerButton: React.FC<InnerButtonProps> = styled.button<InnerButtonProps>`
  display: ${getDisplay};
  width: ${getWidth};
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  border-radius: ${props => props.theme.radius};
  border-width: 0;
  border-style: solid;
  &:disabled {
    opacity: 0.25;
  }
  ${fontSize};
  ${color};
  ${space};
  ${minWidth};
  ${boxShadow};
  ${border};

  &:hover {
    ${getHoverColor}
  }
`

export type ButtonProps = SharedButtonProps & {
  // Size variations of the button
  size: "sm" | "md" | "lg" | "xl"
  // Button type
  type: "contained" | "outlined"
  // Button variation
  variation:
    | "primary"
    | "supporting"
    | "success"
    | "warning"
    | "error"
    | "neutral"
  // Set true to disable
  disabled?: boolean
}

const ThemeButton: React.FC<ButtonProps & ThemeProps> = props => {
  const { size, type, variation } = props

  // Size is straightforward enough
  const sizeProps = themeGet(`button.sizes.${size}`)(props)
  const textStyle = themeGet(`button.textStyles.${size}`)(props)
  const textProps = themeGet(`textStyles.${textStyle}`)(props)

  const { colorAttribute, ...variationRest } = themeGet(
    `button.styles.${type}`
  )(props)

  const colors = themeGet(`button.colors.${variation}`)(props)

  const variationProps = {
    color: colorAttribute === "bg" ? "white" : colors.default,
    colorAttribute,
    [colorAttribute]: colors.default,
    hoverColor: colors.hover,
    ...variationRest
  }
  return (
    <InnerButton {...props} {...variationProps} {...sizeProps} {...textProps} />
  )
}

export const Button = withTheme(ThemeButton)
Button.defaultProps = {
  size: "md",
  type: "contained",
  variation: "primary",
  theme: theme
}
Button.displayName = "Button"
export default Button
