import React from 'react'
import MaterialButton, {
  ButtonProps as MaterialButtonProps
} from '@material-ui/core/Button'
import { withNoOpener, withPositioning, PositioningProps } from '../internal'

export type ButtonProps = MaterialButtonProps & PositioningProps

export const Button: React.ComponentType<ButtonProps> = withPositioning(
  withNoOpener(MaterialButton)
)
Button.defaultProps = {
  variant: 'contained'
}
