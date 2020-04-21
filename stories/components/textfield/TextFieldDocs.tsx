import * as React from 'react'
import { TextFieldProps } from '@material-ui/core/TextField'

export type TextFieldDocsProps = Omit<
  TextFieldProps,
  'variant' | keyof React.HTMLAttributes<HTMLDivElement>
>

export const TextFieldDocs: React.FC<TextFieldDocsProps> = () => null
