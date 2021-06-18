import { useLabelContext } from '@radix-ui/react-label'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import type { CSSProps, StitchesVariants } from 'stitches.config'
import { styled, StyledConfig } from 'stitches.config'
import { Label } from '../Label'

const DEFAULT_TAG = 'input'

const hover = {
  boxShadow: 'inset 0px 0px 0px 1px $$active',
  '&:-webkit-autofill': {
    boxShadow: 'inset 0px 0px 0px 1px $$active, inset 0 0 0 100px $paper',
  },
}
const focus = {
  backgroundColor: '$background',
  boxShadow: 'inset 0px 0px 0px 1px $$active, 0px 0px 0px 1px $$active',
  '&:-webkit-autofill': {
    boxShadow:
      'inset 0px 0px 0px 1px $$active, 0px 0px 0px 1px $$active, inset 0 0 0 100px $paper',
  },
}

const inputVariants = {
  // Not for general use
  force: {
    hover,
    focus,
  },
  state: {
    invalid: {
      backgroundColor: '$errorBackground',
      $$inactive: '$colors$errorLowlight',
      $$active: '$colors$error',
    },
    valid: {
      $$inactive: '$colors$successLowlight',
      $$active: '$colors$success',
    },
  },
  cursor: {
    default: {
      cursor: 'default',
      '&:focus': {
        cursor: 'text',
      },
    },
    text: {
      cursor: 'text',
    },
  },
}

export const inputStyles: StyledConfig<typeof inputVariants> = {
  $$inactive: '$colors$grey7',
  $$active: '$colors$primary',

  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  pointerEvents: 'auto',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$grey2',
  boxShadow: 'inset 0 0 0 1px $$inactive',
  borderRadius: '$default',
  color: '$text',
  fontVariantNumeric: 'tabular-nums',

  height: '$7',
  fontSize: '$1',
  px: '$2',

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $$border, inset 0 0 0 100px $$border',
    backgroundColor: '$grey2',
  },

  '&:-webkit-autofill::first-line': {
    fontSize: '$1',
    fontFamily: '$system',
    color: '$text',
  },

  '&:hover': hover,
  '&:focus': focus,
  '&::placeholder': {
    color: '$grey8',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$grey7',
    color: '$grey9',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$grey4',
    },
  },
  '&:read-only': {
    backgroundColor: '$grey3',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$grey7',
    },
  },
  variants: inputVariants,
}

const StyledInput = styled(DEFAULT_TAG, inputStyles)

type InputVariants = StitchesVariants<typeof StyledInput>
type InputOwnProps = CSSProps &
  InputVariants & {
    /** Add a label to the Input */
    label?: string
    // Should not be required but type is missing.
    /** Called on input change with full event */
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    /** Called on input change with new value */
    onValueChange?: (value: string) => void
  }

type InputComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  InputOwnProps
>

export const Input = forwardRef(
  ({ label, id, onValueChange, ...props }, forwardedRef) => {
    const labelId = useLabelContext()
    return (
      <>
        {label && (
          <Label variant="above" htmlFor={id || labelId}>
            {label}
          </Label>
        )}
        <StyledInput
          aria-labelledby={labelId}
          onChange={(e) => onValueChange && onValueChange(e.target.value)}
          {...props}
          id={id || label}
          ref={forwardedRef}
        />
      </>
    )
  }
) as InputComponent
Input.toString = () => `.${StyledInput.className}`
