import { FC, HTMLAttributes } from 'react'
import { SwitchProps as MaterialSwitchProps } from '@material-ui/core/Switch'

// For documentation only
export type SwitchDocsProps = Omit<
  MaterialSwitchProps,
  keyof Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'onChange' | 'id'>
>
export const SwitchDocs: FC<SwitchDocsProps> = () => null
