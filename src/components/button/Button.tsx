import React from 'react'
import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@material-ui/core/Button'
import { withNoOpener, withPositioning, PositioningProps } from '../../internal'

export type ButtonProps = MaterialButtonProps & PositioningProps

export const Button: React.ComponentType<ButtonProps> = withPositioning<
  MaterialButtonProps
>(withNoOpener(MaterialButton))

Button.defaultProps = {
  variant: 'contained',
}

export type BaseButtonProps = Pick<
  MaterialButtonProps,
  'children' | 'color' | 'fullWidth' | 'href' | 'size' | 'variant'
>
export type RestButtonProps = Omit<MaterialButtonProps, keyof BaseButtonProps>
export const BaseButtonDocs: React.FC<BaseButtonProps> = () => null
export const RestButtonDocs: React.FC<RestButtonProps> = () => null
