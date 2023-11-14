'use client'
import {
  RecipeVariantProps,
  SystemStyleObject,
  cva,
  cx,
  isCssProperty,
  styled,
} from '@committed/ds-ss'
import React from 'react'
import {
  CComponent,
  SafeConditional,
  component,
  forwardRefExtend,
} from '../../utils'
import { UseFormControlProps, useFormControl } from '../FormControl'
import { InputLabel } from './InputLabel'

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
    backgroundColor: '$surface.clear',
    borderRadius: '$default',
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
type InputVariants = RecipeVariantProps<typeof input>

const StyledInput = styled(component(DEFAULT_TAG, 'c-input'), input, {
  shouldForwardProp: (prop, variantKeys) =>
    prop == 'size' || (!variantKeys.includes(prop) && !isCssProperty(prop)),
}) as CComponent<typeof DEFAULT_TAG, InputVariants>

type InputProps = UseFormControlProps &
  Omit<InputVariants, 'state'> & {
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

export const Input = forwardRefExtend<typeof DEFAULT_TAG, InputProps>(
  ({ label, onValueChange, className, size, ...props }, forwardedRef) => {
    const [id, { state, disabled, required }, remainingProps] =
      useFormControl(props)
    return (
      <SafeConditional
        condition={label}
        wrapper={<InputLabel id={id} label={label} required={required} />}
      >
        <StyledInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onValueChange?.(e.target.value)
          }
          {...remainingProps}
          id={id}
          className={cx('c-input', className)}
          size={size}
          state={state}
          disabled={disabled}
          required={required}
          ref={forwardedRef}
        />
      </SafeConditional>
    )
  },
)
Input.displayName = 'Input'
