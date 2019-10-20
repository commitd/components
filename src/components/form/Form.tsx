import { ComponentType, FormHTMLAttributes } from 'react'
import {
  withPositioning,
  PositioningProps,
  withSizing,
  SizingProps
} from '../../internal'

export type FormProps = FormHTMLAttributes<HTMLFormElement> &
  PositioningProps &
  SizingProps

export const Form: ComponentType<FormProps> = withSizing(
  withPositioning<FormProps>('form')
)
