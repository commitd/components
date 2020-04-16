import * as React from 'react'
import { FormControlProps } from '@material-ui/core/FormControl'

export type FormControlDocsProps = Omit<
  FormControlProps,
  keyof React.HTMLAttributes<HTMLDivElement>
>

export const FormControlDocs: React.FC<FormControlDocsProps> = () => null
