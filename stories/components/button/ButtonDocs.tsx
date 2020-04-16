import * as React from 'react'
import { ButtonProps as MaterialButtonProps } from '@material-ui/core/Button'

export type BaseButtonProps = Pick<
  MaterialButtonProps,
  'children' | 'color' | 'fullWidth' | 'href' | 'size' | 'variant'
>
export type RestButtonProps = Omit<MaterialButtonProps, keyof BaseButtonProps>
export const BaseButtonDocs: React.FC<BaseButtonProps> = () => null
export const RestButtonDocs: React.FC<RestButtonProps> = () => null
