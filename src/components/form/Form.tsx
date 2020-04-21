import React from 'react'
import {
  withPositioning,
  PositioningProps,
  withSizing,
  SizingProps,
} from '../../internal'

type PositionedFormProps = React.FormHTMLAttributes<HTMLFormElement> &
  PositioningProps

export type FormProps = PositionedFormProps & SizingProps

export const Form: React.ComponentType<FormProps> = withSizing(
  withPositioning<FormProps>('form')
)
