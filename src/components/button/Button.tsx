import React from 'react'
import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@material-ui/core/Button'
import {
  withNoOpener,
  withPositioningProps,
  PositioningProps,
} from '../../internal'

export type ButtonProps = MaterialButtonProps & PositioningProps

export const Button: React.ComponentType<ButtonProps> = withPositioningProps<
  MaterialButtonProps
>(withNoOpener<MaterialButtonProps>(MaterialButton))

Button.defaultProps = {
  variant: 'contained',
}
