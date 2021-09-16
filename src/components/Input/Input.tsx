import { useLabelContext } from '@radix-ui/react-label'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { css, styled } from '../../stitches.config'
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

export const inputStyles = css({
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

const StyledInput = styled(DEFAULT_TAG, inputStyles)

type InputVariants = VariantProps<typeof StyledInput>
type InputProps = ComponentProps<typeof StyledInput> &
  CSSProps &
  InputVariants & {
    /** Add a label to the Input */
    label?: string
    /** Called on input change with new value */
    onValueChange?: (value: string) => void
  }

export const Input = forwardRef<ElementRef<typeof DEFAULT_TAG>, InputProps>(
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onValueChange && onValueChange(e.target.value)
          }
          {...props}
          id={id || label}
          ref={forwardedRef}
        />
      </>
    )
  }
)
Input.toString = () => `.${StyledInput.className}`
