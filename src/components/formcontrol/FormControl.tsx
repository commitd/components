import React from 'react'
import {
  compose,
  spacing,
  flexbox,
  sizing,
  SpacingProps,
  FlexboxProps,
  SizingProps,
} from '@material-ui/system'
import { styled } from '@material-ui/styles'
import MaterialFormControl, {
  FormControlProps as MaterialFormControlProps,
} from '@material-ui/core/FormControl'

export type FormControlProps<
  C extends React.ElementType
> = MaterialFormControlProps<C, { component?: C }> &
  SpacingProps &
  FlexboxProps &
  SizingProps

export const FormControl: React.ComponentType<FormControlProps<any>> = styled(
  MaterialFormControl
)(compose(spacing, flexbox, sizing))

FormControl.defaultProps = {
  variant: 'outlined',
}
