import * as React from 'react'
import { RadioGroupProps } from '@material-ui/core/RadioGroup'

export type RadioGroupDocsProps = Omit<
  RadioGroupProps,
  keyof Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
>
export const RadioGroupDocs: React.FC<RadioGroupDocsProps> = () => null
