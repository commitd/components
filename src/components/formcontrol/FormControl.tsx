import { ComponentType, FC, HTMLAttributes } from 'react'
import {
  compose,
  spacing,
  flexbox,
  sizing,
  SpacingProps,
  FlexboxProps,
  SizingProps
} from '@material-ui/system'
import { styled } from '@material-ui/styles'
import MaterialFormControl, {
  FormControlProps as MaterialFormControlProps
} from '@material-ui/core/FormControl'

export type FormControlProps = MaterialFormControlProps &
  SpacingProps &
  FlexboxProps &
  SizingProps

export const FormControl: ComponentType<MaterialFormControlProps> = styled(
  MaterialFormControl
)(
  compose(
    spacing,
    flexbox,
    sizing
  )
)

FormControl.defaultProps = {
  variant: 'outlined'
}

// For documentation only
export type FormControlDocsProps = Omit<
  FormControlProps,
  keyof (HTMLAttributes<HTMLDivElement> &
    SpacingProps &
    FlexboxProps &
    SizingProps)
>

export const FormControlDocs: FC<FormControlDocsProps> = () => null