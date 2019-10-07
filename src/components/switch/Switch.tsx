import React from 'react'
import {
  compose,
  spacing,
  flexbox,
  SpacingProps,
  FlexboxProps
} from '@material-ui/system'
import { styled } from '@material-ui/styles'
import MaterialSwitch, {
  SwitchProps as MaterialSwitchProps
} from '@material-ui/core/Switch'

export type SwitchProps = MaterialSwitchProps & SpacingProps & FlexboxProps

export const Switch: React.ComponentType<MaterialSwitchProps> = styled(
  MaterialSwitch
)(
  compose(
    spacing,
    flexbox
  )
)
