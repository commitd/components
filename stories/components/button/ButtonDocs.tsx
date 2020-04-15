import { FC } from 'react'
import { ButtonProps as MaterialButtonProps } from '@material-ui/core/Button'

export type BaseButtonProps = Pick<
  MaterialButtonProps,
  'children' | 'color' | 'fullWidth' | 'href' | 'size' | 'variant'
>
export type RestButtonProps = Omit<MaterialButtonProps, keyof BaseButtonProps>
export const BaseButtonDocs: FC<BaseButtonProps> = () => null
export const RestButtonDocs: FC<RestButtonProps> = () => null
