import React from 'react'
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps,
} from '@material-ui/system'
import MaterialRadioGroup, {
  RadioGroupProps as MaterialRadioGroupProps,
} from '@material-ui/core/RadioGroup'
import { styled } from '@material-ui/styles'

export type RadioGroupProps = MaterialRadioGroupProps &
  SpacingProps &
  FlexboxProps

export const RadioGroup: React.ComponentType<RadioGroupProps> = styled<
  React.ComponentType<MaterialRadioGroupProps>
>(MaterialRadioGroup)(compose(spacing, flexbox))
