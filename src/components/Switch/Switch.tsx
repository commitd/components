import type * as Polymorphic from '@radix-ui/react-polymorphic'
import { Root, Thumb } from '@radix-ui/react-switch'
import React, { forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'

const StyledThumb = styled(Thumb, {
  $$border: '$colors$default',
  $$background: '$colors$paper',
  $$borderDisabled: '$colors$defaultLowlight',
  $$backgroundDisabled: '$colors$grey3',

  position: 'absolute',
  left: 0,
  width: 20,
  height: 20,
  backgroundColor: '$$background',
  borderRadius: '$round',
  boxShadow: '$1',
  transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  willChange: 'transform',
  border: 'solid 2px',
  borderColor: '$$border',

  '&[data-state="checked"]': {
    transform: 'translateX(14px)',
  },

  '&[data-disabled]': {
    borderColor: '$$borderDisabled',
    backgroundColor: '$$backgroundDisabled',
  },
})

const hover = {
  [`& ${StyledThumb}`]: {
    $$background: '$$thumbBackgroundHighlight',
  },
}

const focus = hover

const StyledSwitch = styled(Root, {
  $$background: '$colors$grey4',
  $$backgroundDisabled: '$colors$grey3',
  $$thumbBorder: '$colors$default',
  $$thumbBorderDisabled: '$colors$defaultLowlight',
  $$thumbBackgroundChecked: '$colors$paper',
  $$thumbBackgroundCheckedDisabled: '$colors$3',
  $$thumbBackgroundHighlight: '$colors$grey4',

  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  border: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  width: '34px',
  height: '14px',
  backgroundColor: '$$background',
  borderRadius: '$pill',
  position: 'relative',

  [`& ${StyledThumb}`]: {
    $$border: '$$thumbBorder',
    $$borderDisabled: '$$thumbBorderDisabled',

    '&[data-state="checked"]': {
      $$background: '$$thumbBackgroundChecked',
      $$backgroundDisabled: '$$thumbBackgroundCheckedDisabled',
    },
  },

  '&:focus': focus,
  '&:hover': hover,

  '&:disabled': {
    pointerEvents: 'none',
    $$background: '  $$backgroundDisabled',
  },

  variants: {
    variant: {
      primary: {
        $$background: '$colors$brandYellow6',
        $$backgroundDisabled: '$colors$brandYellow4',
        $$thumbBorder: '$colors$primary',
        $$thumbBorderDisabled: '$colors$primaryLowlight',
        $$thumbBackgroundChecked: '$$thumbBorder',
        $$thumbBackgroundCheckedDisabled: ' $$thumbBorderDisabled',
        $$thumbBackgroundHighlight: '$colors$primaryHighlight',
      },
      secondary: {},
    },
    destructive: {
      false: {},
      true: {
        $$background: '$colors$errorBackground',
        $$backgroundDisabled: '$colors$errorBackground',
        $$thumbBorder: '$colors$error',
        $$thumbBorderDisabled: '$colors$errorLowlight',
        $$thumbBackgroundHighlight: '$colors$errorLowlight',
      },
    },
    force: {
      hover,
      focus,
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
})

type SwitchVariants = VariantProps<typeof StyledSwitch>
type SwitchOwnProps = Polymorphic.OwnProps<typeof Root> &
  CSSProps &
  SwitchVariants
type SwitchComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Root>,
  SwitchOwnProps
>

export const Switch = forwardRef((props, forwardedRef) => (
  <StyledSwitch {...props} ref={forwardedRef}>
    <StyledThumb />
  </StyledSwitch>
)) as SwitchComponent
