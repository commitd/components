import { FC, ComponentType, HTMLAttributes } from 'react'
import MaterialSwitch, {
  SwitchProps as MaterialSwitchProps
} from '@material-ui/core/Switch'
import { withPositioning, PositioningProps } from '../../internal'

export type SwitchProps = MaterialSwitchProps & PositioningProps

export const Switch: ComponentType<SwitchProps> = withPositioning(
  MaterialSwitch
)

// For documentation only
export type SwitchDocsProps = Omit<
  MaterialSwitchProps,
  keyof Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'onChange' | 'id'>
>
export const SwitchDocs: FC<SwitchDocsProps> = () => null
