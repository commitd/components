import * as React from 'react'
import { SwitchProps as MaterialSwitchProps } from '@material-ui/core/Switch'

export type SwitchDocsProps = Omit<
  MaterialSwitchProps,
  keyof Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    'color' | 'onChange' | 'id'
  >
>
export const SwitchDocs: React.FC<SwitchDocsProps> = () => null
