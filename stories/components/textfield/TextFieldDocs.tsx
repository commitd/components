import * as React from 'react'
import { TextFieldProps } from '@material-ui/core/TextField'

export type TextFieldDocsProps = Omit<
  TextFieldProps,
  keyof React.HTMLAttributes<HTMLDivElement>
> & {
  /**
   * The variant to use.
   * @default outlined
   */
  variant?: 'standard' | 'outlined' | 'filled'
}
export const TextFieldDocs: React.FC<TextFieldDocsProps> = () => null
