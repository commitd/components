import { FC, HTMLAttributes } from 'react'
import { FormControlProps as MaterialFormControlProps } from '@material-ui/core/FormControl'

// For documentation only
export type FormControlDocsProps = Omit<
  MaterialFormControlProps,
  keyof HTMLAttributes<HTMLDivElement>
>

export const FormControlDocs: FC<FormControlDocsProps> = () => null
