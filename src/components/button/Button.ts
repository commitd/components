import * as React from "react"
import styled from "styled-components"
import { width, space, WidthProps, SpaceProps } from "styled-system"
import theme, { ThemeProps } from "../../theme/theme"

export type ButtonProps = WidthProps &
  SpaceProps &
  ThemeProps & {
    // Size variations of the button
    size: "small" | "medium" | "large"
    // Set true to disable
    disabled?: boolean
  }

const size = (props: ButtonProps) => {
  switch (props.size) {
    case "small":
      return {
        fontSize: `${props.theme!.fontSizes[0]}px`,
        padding: "7px 12px"
      }
    case "medium":
      return {
        fontSize: `${props.theme!.fontSizes[1]}px`,
        padding: "9.5px 18px"
      }
    case "large":
      return {
        fontSize: `${props.theme!.fontSizes[2]}px`,
        padding: "12px 22px"
      }
    default:
      return {
        fontSize: `${props.theme!.fontSizes[1]}px`,
        padding: "9.5px 18px"
      }
  }
}

export const Button: React.FC<ButtonProps> = styled.button<ButtonProps>`
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  cursor: pointer;
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  border-width: 0;
  border-style: solid;
  &:disabled {
    opacity: 0.25;
  }
  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.darkBlue};
  }
  ${width} ${size} ${space};
`

Button.defaultProps = {
  theme: theme
}

Button.displayName = "Button"

export default Button
