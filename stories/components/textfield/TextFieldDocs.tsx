import { FC, HTMLAttributes } from 'react'
import { TextFieldProps as MaterialTextFieldProps } from '@material-ui/core/TextField'

// For documentation only
export type TextFieldDocsProps = Omit<
  MaterialTextFieldProps,
  keyof HTMLAttributes<HTMLDivElement>
> & {
  /**
   * The variant to use.
   * @default outlined
   */
  variant?: 'standard' | 'outlined' | 'filled'
}
export const TextFieldDocs: FC<TextFieldDocsProps> = () => null
