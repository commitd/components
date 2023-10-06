'use client'
import { RecipeVariantProps, css, cva, cx, styled } from '@committed/ss'
import { Indicator, Root } from '@radix-ui/react-checkbox'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { ConditionalWrapper, Prettify, component } from '../../utils'
import { UseFormControlProps, useFormControl } from '../FormControl'
import { Check, CheckIndeterminate } from '../Icons'
import { Label, LabelOptional } from '../Label'
export type { CheckedState } from '@radix-ui/react-checkbox'

export const checkStylesBase = {
  colorPalette: '$primary',
  '--main': 'token(colors.colorPalette.9)',
  '--contrast': 'token(colors.colorPalette.text)',
  '--default': 'token(colors.colorPalette.9)',
  '--hover': 'token(colors.colorPalette.2)',

  '--inactive': 'token(colors.$neutral.7)',
  '--active': 'token(colors.colorPalette.9)',

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
  fontVariantNumeric: 'tabular-nums',
  boxShadow: 'inset 0 0 0 1px var(--inactive)',

  flexShrink: 0,
  userSelect: 'none',
  verticalAlign: 'middle',
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',

  overflow: 'hidden',
  fontSize: 0,
  cursor: 'pointer',

  width: '28px',
  height: '28px',

  _motionReduce: { transition: 'none' },
  _motionSafe: {
    transition: 'background 0.5s',
  },
  backgroundPosition: 'center',

  _hover: {
    boxShadow: 'inset 0px 0px 0px 1px var(--active)',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px var(--active), inset 0 0 0 100px token(colors.$surface.solid)',
    },
    background:
      'var(--hover) radial-gradient(circle, transparent 1%, var(--hover) 1%) center/15000%',
  },

  _active: {
    backgroundColor: 'var(--active)',
    backgroundSize: '100%',
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'background 0s',
    },
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

  _focus: {
    boxShadow:
      'inset 0px 0px 0px 1px var(--active), 0px 0px 0px 1px var(--active) !important',
    '&:-webkit-autofill': {
      boxShadow:
        'inset 0px 0px 0px 1px var(--active), 0px 0px 0px 1px var(--active), inset 0 0 0 100px token(colors.$surface.solid) !important',
    },
    backgroundColor: '$surface.solid',
  },
} as const

export const checkStyleVariants = {
  variant: {
    solid: {
      color: 'var(--contrast)',
      '&[data-state=checked]': {
        backgroundColor: 'var(--main)',
        _focus: {
          backgroundColor: 'var(--main)',
        },
      },
      '&[data-state=indeterminate]': {
        backgroundColor: 'var(--main)',
        _focus: {
          backgroundColor: 'var(--main)',
        },
      },
    },
    outline: {},
  },
  state: {
    invalid: {
      backgroundColor: '$error.2',
      borderColor: 'token(colors.$error)',
      '--inactive': 'token(colors.$error.3)',
      '--active': 'token(colors.$error)',
    },
    valid: {
      borderColor: 'token(colors.$success)',
      '--inactive': 'token(colors.$success.3)',
      '--active': 'token(colors.$success)',
    },
  },
  native: {
    false: {},
    true: {
      '&:has(+input:invalid)': {
        backgroundColor: '$error.2',
        borderColor: 'token(colors.$error)',
        '--inactive': 'token(colors.$error.3)',
        '--active': 'token(colors.$error)',
      },
      '&:has(+input:valid)': {
        borderColor: 'token(colors.$success)',
        '--inactive': 'token(colors.$success.3)',
        '--active': 'token(colors.$success)',
      },
    },
  },
  destructive: {
    true: {
      '--main': 'token(colors.$error)',
      '--contrast': 'token(colors.$error.text)',
      '--active': 'token(colors.$error)',
      '--default': 'token(colors.$error)',
      '--hover': 'token(colors.$error.2)',
    },
  },
} as const

const checkbox = cva({
  base: checkStylesBase,
  variants: checkStyleVariants,
  defaultVariants: {
    variant: 'outline',
  },
})

const StyledRoot = styled(Root, checkbox)

const StyledIndicator = component(
  Indicator,
  css({
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  }),
)

type CheckboxVariants = RecipeVariantProps<typeof checkbox>
type CheckboxRootProps = ComponentProps<typeof Root>
type CheckboxProps = Prettify<
  Omit<CheckboxRootProps, 'onCheckedChange'> &
    UseFormControlProps &
    Omit<CheckboxVariants, 'state'> & {
      /** Add a label to the checkbox */
      label?: string

      onCheckedChange?:
        | CheckboxRootProps['onCheckedChange']
        | ((checked: boolean) => void)
    }
>
/**
 * Checkboxes can be used as toggle actions or as part of input forms.
 * Use when single select/deselect option, use radio when one option of more then two choices; [further info](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/).
 *
 * This checkbox supports the additional `indeterminate` checked state.
 *
 * Based on [Radix Checkbox](https://radix-ui.com/primitives/docs/components/checkbox).
 */
export const Checkbox = forwardRef<
  ElementRef<typeof StyledRoot>,
  CheckboxProps
>(({ label, className, ...props }, forwardedRef) => {
  const [id, { state, disabled, required }, remainingProps] =
    useFormControl(props)
  return (
    <ConditionalWrapper
      condition={label}
      wrapper={(children) => (
        <Label id={`label-${id}`} variant="inline">
          {children}
          {label}
          {required === false && <LabelOptional />}
        </Label>
      )}
    >
      <StyledRoot
        id={id}
        className={cx('c-checkbox', className)}
        state={state}
        disabled={disabled}
        required={required}
        {...remainingProps}
        ref={forwardedRef}
      >
        <StyledIndicator>
          {props.checked === 'indeterminate' && <CheckIndeterminate />}
          {props.checked !== 'indeterminate' && <Check />}
        </StyledIndicator>
      </StyledRoot>
    </ConditionalWrapper>
  )
})
Checkbox.displayName = 'Checkbox'
