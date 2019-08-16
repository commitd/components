import * as React from "react"
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps
} from "@material-ui/system"
import MaterialButton, {
  ButtonProps as MaterialButtonProps
} from "@material-ui/core/Button"
import { styled } from "@material-ui/styles"

export type ButtonProps = MaterialButtonProps & SpacingProps & FlexboxProps

export const Button = styled(MaterialButton)(
  compose(
    spacing,
    flexbox
  )
)

Button.defaultProps = {
  variant: "contained"
}

export default Button as React.FC<ButtonProps>
