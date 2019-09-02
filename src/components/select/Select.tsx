import * as React from 'react'
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

export type SelectProps = MaterialSelectProps & SpacingProps & FlexboxProps

export const Select = styled(MaterialSelect)(
  compose(
    spacing,
    flexbox
  )
)

export default Select as React.FC<SelectProps>
