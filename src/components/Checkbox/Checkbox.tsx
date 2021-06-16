import { Indicator, Root } from '@radix-ui/react-checkbox'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef, ForwardRefExoticComponent } from 'react'
import type { CSSProps, StitchesVariants } from 'stitches.config'
import { CSS, styled } from 'stitches.config'
import { ConditionalWrapper } from '../../utils'
import { Check, CheckIndeterminate } from '../Icons'
import { Label } from '../Label'
export type { CheckedState } from '@radix-ui/react-checkbox'

const StyledRoot = styled(Root, {
  $$main: '$colors$primary',
  $$mainHover: '$colors$primaryHighlight',
  $$contrast: '$colors$primaryContrast',
  $$active: '$colors$defaultActive',
  $$default: '$colors$default',
  $$defaultHover: '$colors$defaultHighlight',
  $$lowlight: '$colors$defaultLowlight',

  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '$none',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  flexShrink: 0,
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  color: '$text',
  overflow: 'hidden',
  borderRadius: '$default',
  width: '28px',
  height: '28px',
  fontSize: '$0',
  cursor: 'pointer',
  backgroundColor: 'transparent',

  transition: 'background 0.5s',
  backgroundPosition: 'center',
  border: 'solid 2px',

  '&:hover': {
    background:
      '$$hover radial-gradient(circle, transparent 1%, $$hover 1%) center/15000%',
  },

  '&:active': {
    backgroundColor: '$$active',
    backgroundSize: '100%',
    transition: 'background 0s',
  },

  '&:disabled': {
    pointerEvents: 'none',
    $$main: '$$lowlight',
    $$default: '$$lowlight',
  },

  '&:focus': {
    '&[data-state=unchecked]': {
      backgroundColor: '$$defaultHover',
    },
    '&[data-state=checked]': {
      backgroundColor: '$$defaultHover',
      color: '$$default',
    },
    '&[data-state=indeterminate]': {
      backgroundColor: '$$defaultHover',
      color: '$$default',
    },
  },

  variants: {
    variant: {
      primary: {
        $$active: '$colors$primaryActive',
        $$lowlight: '$colors$primaryLowlight',
        $$hover: '$$defaultHover',
        color: '$$contrast',
        borderColor: '$$main',
        '&[data-state=checked]': {
          backgroundColor: '$$main',
        },
        '&[data-state=indeterminate]': {
          backgroundColor: '$$main',
        },
      },
      secondary: {
        color: '$$default',
        borderColor: '$$default',
        $$hover: '$$defaultHover',
      },
    },
    destructive: {
      true: {
        $$main: '$colors$error',
        $$mainHover: '$colors$errorHighlight',
        $$contrast: '$colors$errorContrast',
        $$active: '$colors$errorActive',
        $$default: '$colors$error',
        $$defaultHover: '$colors$errorBackground',
        $$lowlight: '$colors$errorLowlight',
      },
    },
  },

  defaultVariants: {
    variant: 'secondary',
  },
})

const StyledIndicator = styled(Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
})

type CheckboxVariants = StitchesVariants<typeof StyledRoot>
type CheckboxProps = Polymorphic.OwnProps<typeof Root> &
  CheckboxVariants &
  CSSProps & {
    /** Add a label to the checkbox */
    label?: string
  }

/**
 * Checkboxes can be used as toggle actions or as part of input forms.
 * Use when single select/deselect option, use radio when one option of more then two choices; [further info](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/).
 *
 * This checkbox supports the additional `indeterminate` checked state.
 *
 * Based on [Radix Checkbox](https://radix-ui.com/primitives/docs/components/checkbox).
 */
export const Checkbox: ForwardRefExoticComponent<CheckboxProps> = forwardRef<
  HTMLButtonElement,
  CheckboxProps
>(({ css, label, ...props }, forwardedRef) => {
  return (
    <ConditionalWrapper
      condition={label}
      wrapper={(children) => (
        <Label variant="wrapping">
          {children}
          {label}
        </Label>
      )}
    >
      <StyledRoot css={css as CSS} {...props} ref={forwardedRef}>
        <StyledIndicator>
          {props.checked === 'indeterminate' && <CheckIndeterminate />}
          {props.checked !== 'indeterminate' && <Check />}
        </StyledIndicator>
      </StyledRoot>
    </ConditionalWrapper>
  )
})
Checkbox.displayName = 'Checkbox'
