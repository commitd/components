import React from 'react'
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps
} from '@material-ui/system'
import MaterialSelect, {
  SelectProps as MaterialSelectProps
} from '@material-ui/core/Select'
import { styled } from '@material-ui/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'

export type BaseSelectProps = MaterialSelectProps & {
  /**
   * The width of the label.
   */
  labelWidth: number
}

export type SelectProps = BaseSelectProps & SpacingProps & FlexboxProps

const BaseSelect = ({
  labelWidth,
  input = <OutlinedInput labelWidth={labelWidth} />,
  ...other
}: BaseSelectProps) => <MaterialSelect input={input} {...other} />

export const Select = styled<React.ComponentType<SelectProps>>(BaseSelect)(
  compose(
    spacing,
    flexbox
  )
)
