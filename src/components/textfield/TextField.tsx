import { withWrapper, WithWrapperProps } from '../internal'

import MaterialTextField, {
  TextFieldProps as MaterialTextFieldProps
} from '@material-ui/core/TextField'

export type TextFieldProps = Omit<
  MaterialTextFieldProps,
  'fullWidth' | 'variant'
> &
  WithWrapperProps

export const TextField: React.ComponentType<TextFieldProps> = withWrapper(
  MaterialTextField,
  {
    fullWidth: true,
    variant: 'outlined'
  }
)

export default TextField
