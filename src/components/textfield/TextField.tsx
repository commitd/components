import { FC, ComponentType, HTMLAttributes } from 'react'
import { withWrapper, WithWrapperProps } from '../internal'
import MaterialTextField, {
  TextFieldProps as MaterialTextFieldProps
} from '@material-ui/core/TextField'

export type TextFieldProps = Omit<
  MaterialTextFieldProps,
  'fullWidth' | 'variant'
> &
  WithWrapperProps

export const TextField: ComponentType<TextFieldProps> = withWrapper<
  MaterialTextFieldProps
>(MaterialTextField, {
  fullWidth: true,
  variant: 'outlined'
})

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
