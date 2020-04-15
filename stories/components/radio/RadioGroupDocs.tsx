import React, { FC, HTMLAttributes } from 'react'
import { RadioGroupProps as MaterialRadioGroupProps } from '@material-ui/core/RadioGroup'

// For documentation only
export type RadioGroupDocsProps = Omit<
  MaterialRadioGroupProps,
  keyof Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>
>
export const RadioGroupDocs: FC<RadioGroupDocsProps> = () => null
