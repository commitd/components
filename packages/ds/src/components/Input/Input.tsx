import { RecipeVariantProps, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import { ConditionalWrapper } from '../../utils'
import { UseFormControlProps, useFormControl } from '../FormControl'
import { Label, LabelOptional } from '../Label'

const DEFAULT_TAG = 'input'

export const hover = {
  boxShadow: 'inset 0px 0px 0px 1px var(--active)',
  '&:-webkit-autofill': {
    boxShadow:
      'inset 0px 0px 0px 1px var(--active), inset 0 0 0 100px token(colors.$surface.solid)',
  },
} as const satisfies SystemStyleObject

export const focus = {
  backgroundColor: '$surface.solid',
  boxShadow:
    'inset 0px 0px 0px 1px var(--active), 0px 0px 0px 1px var(--active)',
  '&:-webkit-autofill': {
    boxShadow:
      'inset 0px 0px 0px 1px var(--active), 0px 0px 0px 1px var(--active), inset 0 0 0 100px token(colors.$surface.solid)',
  },
} as const satisfies SystemStyleObject

export const placeholder = {
  color: '$neutral.8',
} satisfies SystemStyleObject

export const disabled = {
  pointerEvents: 'none',
  backgroundColor: '$neutral.7',
  color: '$neutral.9',
  cursor: 'not-allowed',
  _placeholder: {
    color: '$neutral.4',
  },
} satisfies SystemStyleObject

export const readonlyStyles = {
  _readOnly: {
    cursor: 'not-allowed',
    backgroundColor: '$neutral.3',
    _focus: {
      boxShadow: 'inset 0px 0px 0px 1px token(colors.$neutral.7)',
    },
  },
} satisfies SystemStyleObject

export const defaultStyles = {
  appearance: 'none',
  pointerEvents: 'auto',

  fontFamily: 'inherit',
  textDecoration: 'none',
  color: '$text',
  lineHeight: 'none',

  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  outline: 'none',

  borderRadius: '$default',
  backgroundColor: '$background',
  fontVariantNumeric: 'tabular-nums',
} satisfies SystemStyleObject

export const inputStyles = {
  base: {
    '--inactive': 'token(colors.$neutral.7)',
    '--active': 'token(colors.$primary)',

    appearance: 'none',
    pointerEvents: 'auto',

    fontFamily: 'inherit',
    textDecoration: 'none',
    color: '$text',
    lineHeight: 'none',

    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    outline: 'none',

    borderWidth: '0',
    borderRadius: '$default',
    backgroundColor: '$background',
    fontVariantNumeric: 'tabular-nums',

    _readOnly: {
      cursor: 'not-allowed',
      backgroundColor: '$neutral.3',
      _focus: {
        boxShadow: 'inset 0px 0px 0px 1px token(colors.$neutral.7)',
      },
    },

    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'background 0.5s',
    },
    backgroundPosition: 'center',

    boxShadow: 'inset 0 0 0 1px var(--inactive)',

    '&:-webkit-autofill': {
      boxShadow:
        'inset 0 0 0 1px var(--border), inset 0 0 0 100px var(--border)',
      backgroundColor: '$neutral.2',
    },

    '&:-webkit-autofill::first-line': {
      fontSize: '$1',
      fontFamily: '$system',
      color: '$text',
    },

    _focus: {
      backgroundColor: '$surface.solid',
      boxShadow:
        'inset 0px 0px 0px 1px var(--active), 0px 0px 0px 1px var(--active) !important',
      '&:-webkit-autofill': {
        boxShadow:
          'inset 0px 0px 0px 1px var(--active), 0px 0px 0px 1px var(--active), inset 0 0 0 100px token(colors.$surface.solid)',
      },
    },
    _hover: {
      boxShadow: 'inset 0px 0px 0px 1px var(--active)',
      '&:-webkit-autofill': {
        boxShadow:
          'inset 0px 0px 0px 1px var(--active), inset 0 0 0 100px token(colors.$surface.solid)',
      },
    },
    _placeholder: {
      color: '$neutral.8',
    },
    _disabled: {
      pointerEvents: 'none',
      backgroundColor: '$neutral.7',
      color: '$neutral.9',
      cursor: 'not-allowed',
      _placeholder: {
        color: '$neutral.4',
      },
    },

    width: '100%',
    height: '$7',
    fontSize: '$1',
    paddingLeft: '$2',
    paddingRight: '$2',
  },

  variants: {
    // Not for general use
    state: {
      invalid: {
        backgroundColor: '$error.2',
        '--inactive': 'token(colors.$error.7)',
        '--active': 'token(colors.$error)',
      },
      valid: {
        '--inactive': 'token(colors.$success.7)',
        '--active': 'token(colors.$success)',
      },
    },
    native: {
      false: {},
      true: {
        '&:invalid': {
          backgroundColor: '$error.2',
          '--inactive': 'token(colors.$error.7)',
          '--active': 'token(colors.$error)',
        },
        '&:valid': {
          '--inactive': 'token(colors.$success.7)',
          '--active': 'token(colors.$success)',
        },
        '&:has(+select:invalid)': {
          backgroundColor: '$error.2',
          '--inactive': 'token(colors.$error.7)',
          '--active': 'token(colors.$error)',
        },
        '&:has(+select:valid)': {
          '--inactive': 'token(colors.$success.7)',
          '--active': 'token(colors.$success)',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        _focus: {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
} as const

const input = cva(inputStyles)

const StyledInput = styled(DEFAULT_TAG, input)

type InputVariants = Omit<RecipeVariantProps<typeof input>, 'state'>

// Required due to ts error forcing the enterKeyHint props. Likely can be removed in later version.
type StyledInputProps = Omit<ComponentProps<typeof StyledInput>, 'enterKeyHint'>

type InputProps = StyledInputProps &
  UseFormControlProps &
  InputVariants & {
    /** Add a label to the Input */
    label?: string
    /** Add the required props to mark input as required.*/
    required?: boolean
    /** Called on input change with new value */
    onValueChange?: (value: string) => void
    /* Added directly to correct ts error */
    enterKeyHint?:
      | 'enter'
      | 'done'
      | 'go'
      | 'next'
      | 'previous'
      | 'search'
      | 'send'
      | undefined
  }

export const Input = forwardRef<ElementRef<typeof DEFAULT_TAG>, InputProps>(
  ({ label, onValueChange, className, ...props }, forwardedRef) => {
    const [id, { state, disabled, required }, remainingProps] =
      useFormControl(props)
    return (
      <ConditionalWrapper
        condition={label}
        wrapper={(children) => (
          // htmlFor required here for auto linking as not a radix primitive
          <Label id={`label-${id}`} variant="wrapping" htmlFor={id}>
            <span>
              {label}
              {required === false && <LabelOptional />}
            </span>
            {children}
          </Label>
        )}
      >
        <StyledInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onValueChange && onValueChange(e.target.value)
          }
          {...remainingProps}
          id={id}
          className={cx('c-input', className)}
          state={state}
          disabled={disabled}
          required={required}
          ref={forwardedRef}
        />
      </ConditionalWrapper>
    )
  },
)
Input.displayName = 'Input'
