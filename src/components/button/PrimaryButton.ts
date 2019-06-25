import * as React from "react"
import styled from "styled-components"
import Button, { ButtonProps } from "./Button"
import theme from "../../theme/theme"

export const PrimaryButton: React.FC<ButtonProps> = styled(Button)`
  background-color: ${props => props.theme.colors.primary[3]};
  &:hover {
    background-color: ${props =>
      props.disabled ? null : props.theme.colors.primary[2]};
  }
`

PrimaryButton.defaultProps = {
  theme: theme
}

export default PrimaryButton
