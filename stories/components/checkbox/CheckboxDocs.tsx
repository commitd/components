import { FC, HTMLAttributes } from 'react'
import { CheckboxProps as MaterialCheckboxProps } from '@material-ui/core/Checkbox'

// For documentation only
export type CheckboxDocsProps = Omit<
  MaterialCheckboxProps,
  keyof HTMLAttributes<HTMLElement>
>
export const CheckboxDocs: FC<CheckboxDocsProps> = () => null
