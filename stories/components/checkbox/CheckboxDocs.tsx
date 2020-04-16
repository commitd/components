import * as React from 'react'
import { CheckboxProps } from '@material-ui/core/Checkbox'

export type CheckboxDocsProps = Omit<
  CheckboxProps,
  keyof React.HTMLAttributes<HTMLElement>
>
export const CheckboxDocs: React.FC<CheckboxDocsProps> = () => null
