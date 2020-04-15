import { FC, ComponentType } from 'react'
import MaterialButton, {
  ButtonProps as MaterialButtonProps,
} from '@material-ui/core/Button'
import { withNoOpener, withPositioning, PositioningProps } from '../../internal'

export type ButtonProps = MaterialButtonProps & PositioningProps

export const Button: ComponentType<ButtonProps> = withPositioning(
  withNoOpener(MaterialButton)
)
Button.defaultProps = {
  variant: 'contained',
}

// For documentation only
export type BaseButtonProps = Pick<
  MaterialButtonProps,
  'children' | 'color' | 'fullWidth' | 'href' | 'size' | 'variant'
>
export type RestButtonProps = Omit<MaterialButtonProps, keyof BaseButtonProps>
export const BaseButtonDocs: FC<BaseButtonProps> = () => null
export const RestButtonDocs: FC<RestButtonProps> = () => null
