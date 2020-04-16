import * as React from 'react'
import { RadioProps } from '@material-ui/core/Radio'

export type RadioDocsProps = Omit<
  RadioProps,
  keyof Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    'color' | 'onChange' | 'id'
  >
>
export const RadioDocs: React.FC<RadioDocsProps> = () => null
