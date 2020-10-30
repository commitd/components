import React from 'react'
import MaterialSwitch, {
  SwitchProps as MaterialSwitchProps,
} from '@material-ui/core/Switch'
import { withPositioningProps, PositioningProps } from '../../internal'

export type SwitchProps = MaterialSwitchProps & PositioningProps

export const Switch: React.ComponentType<SwitchProps> = withPositioningProps<
  MaterialSwitchProps
>(MaterialSwitch)
