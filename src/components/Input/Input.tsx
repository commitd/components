import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import { CSS, StitchesVariants, styled } from 'stitches.config'

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

const StyledInput = styled(DEFAULT_TAG, {
  $$inactive: '$colors$grey300',
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
  backgroundColor: '$background',
  boxShadow: 'inset 0 0 0 1px $$inactive',
  borderRadius: '$default',
  color: '$text',
  fontVariantNumeric: 'tabular-nums',

  height: '$7',
  fontSize: '$1',
  px: '$2',
  '&:-webkit-autofill::first-line': {
    fontSize: '$1',
  },

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $$border, inset 0 0 0 100px $$border',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$system',
    color: '$text',
  },

  '&:hover': hover,
  '&:focus': focus,
  '&::placeholder': {
    color: '$grey300',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$grey100',
    color: '$grey400',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$grey300',
    },
  },
  '&:read-only': {
    backgroundColor: '$grey100',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$grey600',
    },
  },

  variants: {
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
  },
})

type InputCSSProp = { css?: CSS }
type InputVariants = StitchesVariants<typeof StyledInput>
type InputOwnProps = InputCSSProp & InputVariants

type InputComponent = Polymorphic.ForwardRefComponent<
  typeof DEFAULT_TAG,
  InputOwnProps
>

export const Input = forwardRef((props, forwardedRef) => {
  return <StyledInput {...props} ref={forwardedRef} />
}) as InputComponent

Input.toString = () => `.${StyledInput.className}`
