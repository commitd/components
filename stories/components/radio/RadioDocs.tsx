import { FC, HTMLAttributes } from 'react'
import { RadioProps } from '@material-ui/core/Radio'

// For documentation only
export type RadioDocsProps = Omit<
  RadioProps,
  keyof Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'onChange' | 'id'>
>
export const RadioDocs: FC<RadioDocsProps> = () => null
