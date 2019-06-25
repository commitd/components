import * as React from "react"
import styled from "styled-components"
import Button, { ButtonProps } from "./Button"
import theme from "../../theme/theme"

export const SecondaryButton: React.FC<ButtonProps> = styled(Button)`
  background-color: ${props => props.theme.colors.secondary[3]};
  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.secondary[2]};
  }
`

SecondaryButton.defaultProps = {
  theme: theme
}

export default SecondaryButton
