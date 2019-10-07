import React from 'react'
import { withWrapper, WithWrapperProps } from '../internal'

import MaterialTextField, {
  TextFieldProps as MaterialTextFieldProps
} from '@material-ui/core/TextField'

export type TextFieldProps = Omit<
  MaterialTextFieldProps,
  'fullWidth' | 'variant'
> &
  WithWrapperProps

export const TextField: React.ComponentType<TextFieldProps> = withWrapper<
  MaterialTextFieldProps
>(MaterialTextField, {
  fullWidth: true,
  variant: 'outlined'
})
