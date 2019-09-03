import React, { FormHTMLAttributes } from 'react'
import {
  compose,
  spacing,
  flexbox,
  sizing,
  SpacingProps,
  FlexboxProps,
  SizingProps
} from '@material-ui/system'
import { styled } from '@material-ui/styles'

export type FormProps = FormHTMLAttributes<HTMLFormElement> &
  SpacingProps &
  FlexboxProps &
  SizingProps

export const Form = styled('form')(
  compose(
    spacing,
    flexbox,
    sizing
  )
)

export default Form as React.ComponentType<FormProps>
