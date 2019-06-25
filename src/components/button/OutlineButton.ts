import * as React from "react"
import styled from "styled-components"
import Button from "./Button"
import theme from "../../theme/theme"
import { ButtonProps } from "./Button"

export const OutlineButton: React.FC<ButtonProps> = styled(Button)`
  color: ${props => props.theme.colors.neutral[4]};
  box-shadow: inset 0 0 0 2px ${props => props.theme.colors.neutral[4]};
  background-color: transparent;
  &:hover {
    color: ${props => (props.disabled ? null : props.theme.colors.neutral[5])};
    box-shadow: inset 0 0 0 2px
      ${props => (props.disabled ? null : props.theme.colors.neutral[5])};
    background-color: transparent;
  }
`

OutlineButton.defaultProps = {
  theme: theme
}

export default OutlineButton
