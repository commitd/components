import { ComponentType } from 'react'
import MaterialSwitch, {
  SwitchProps as MaterialSwitchProps,
} from '@material-ui/core/Switch'
import { withPositioning, PositioningProps } from '../../internal'

export type SwitchProps = MaterialSwitchProps & PositioningProps

export const Switch: ComponentType<SwitchProps> = withPositioning(
  MaterialSwitch
)
