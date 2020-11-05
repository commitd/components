import React from 'react'
import {
  withPositioningProps,
  PositioningProps,
  withSizingProps,
  SizingProps,
} from '../../internal'

type PositionedFormProps = React.FormHTMLAttributes<HTMLFormElement> &
  PositioningProps

export type FormProps = PositionedFormProps & SizingProps

export const Form: React.ComponentType<FormProps> = withSizingProps(
  withPositioningProps<FormProps>((props) => <form {...props} />)
)
