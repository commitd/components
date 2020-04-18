import React from 'react'
import MaterialSwitch, {
  SwitchProps as MaterialSwitchProps,
} from '@material-ui/core/Switch'
import { withPositioning, PositioningProps } from '../internal'

//TODO consider setting up with context

export type ThemeSwitchProps = MaterialSwitchProps & PositioningProps

export const ThemeSwitch: React.ComponentType<ThemeSwitchProps> = withPositioning<
  MaterialSwitchProps
>(MaterialSwitch)
