import React from 'react'
import { withWrapper, WithWrapperProps } from '../../internal'
import MaterialTextField, {
  TextFieldProps as MaterialTextFieldProps,
} from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

export type TextFieldProps = Omit<MaterialTextFieldProps, 'variant'> &
  WithWrapperProps

const useStyles = makeStyles((theme) => {
  const borderColor =
    theme.palette.type === 'light'
      ? 'rgba(0, 0, 0, 0.23)'
      : 'rgba(255, 255, 255, 0.23)'

  return {
    root: {
      border: '1px solid',
      borderColor,
      overflow: 'hidden',
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        borderColor: theme.palette.text.primary,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderColor,
        },
      },
      '&$focused': {
        borderColor: theme.palette.primary.main,
        boxShadow: '0px 0px 0px 2px ' + theme.palette.primary.main,
      },
    },
    focused: {},
    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {
      '&$focused': {
        borderColor: theme.palette.secondary.main,
        boxShadow: '0px 0px 0px 2px ' + theme.palette.secondary.main,
      },
    },
    error: {
      borderColor: theme.palette.error.main,
      '&$focused': {
        borderColor: theme.palette.error.main,
        boxShadow: '0px 0px 0px 2px ' + theme.palette.error.main,
      },
    },
    disabled: {
      borderColor: theme.palette.action.disabled,
      '&$focused': {
        boxShadow: '0px 0px 0px 2px ' + theme.palette.action.disabled,
      },
      '&:hover': {
        borderColor,
      },
    },
  }
})

function CommittedTextField(props: TextFieldProps) {
  const classes = useStyles()

  const inputProps = Object.assign(
    {},
    {
      classes,
      disableUnderline: true,
    },
    props.InputProps || {}
  )

  const inputLabelProps = Object.assign(
    {},
    { shrink: true },
    props.InputLabelProps || {}
  )

  return (
    <MaterialTextField
      InputProps={inputProps}
      InputLabelProps={inputLabelProps}
      variant="filled"
      fullWidth={true}
      {...props}
    />
  )
}

export const TextField: React.ComponentType<TextFieldProps> = withWrapper<
  MaterialTextFieldProps
>(CommittedTextField)
