import { FC, HTMLAttributes } from 'react'
import Radio, { RadioProps } from '@material-ui/core/Radio'

export type RadioProps = RadioProps
export { Radio }

// For documentation only
export type RadioDocsProps = Omit<
  RadioProps,
  keyof Omit<HTMLAttributes<HTMLButtonElement>, 'color' | 'onChange' | 'id'>
>
export const RadioDocs: FC<RadioDocsProps> = () => null
