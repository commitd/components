import { Root, Thumb } from '@radix-ui/react-switch'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'

const StyledThumb = styled(Thumb, {
  $$border: '$colors$default',
  $$background: '$colors$paper',

  position: 'absolute',
  left: 0,
  width: 20,
  height: 20,
  backgroundColor: '$$background',
  borderRadius: '$round',
  boxShadow: '$1',
  willChange: 'transform',
  border: 'solid 2px',
  borderColor: '$$border',
  '@motion': {
    transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  },

  '&[data-state="checked"]': {
    transform: 'translateX(14px)',
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
  $$thumbBorder: '$colors$default',
  $$thumbBackgroundChecked: '$colors$paper',
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

    '&[data-state="checked"]': {
      $$background: '$$thumbBackgroundChecked',
    },
  },

  '&:focus': focus,
  '&:hover': hover,

  '&:disabled': {
    pointerEvents: 'none',
    opacity: 0.3,
  },

  variants: {
    variant: {
      primary: {
        $$background: '$colors$brandYellow6',
        $$thumbBorder: '$colors$primary',
        $$thumbBackgroundChecked: '$$thumbBorder',
        $$thumbBackgroundHighlight: '$colors$primaryHighlight',
      },
      secondary: {},
      brand: {
        $$background: '$colors$brandLowlight',
        $$thumbBorder: '$colors$brandYellow',
        $$thumbBackgroundChecked: '$colors$brandYellow',
        $$thumbBackgroundHighlight: '$colors$brandYellow',
        [`& ${StyledThumb}`]: {
          $$border: '$$thumbBorder',
          $$background: '$colors$brand',

          '&[data-state="checked"]': {
            $$background: '$$thumbBackgroundChecked',
          },
        },
      },
    },
    destructive: {
      false: {},
      true: {
        $$background: '$colors$errorBackground',
        $$thumbBorder: '$colors$error',
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
type SwitchRootProps = ComponentProps<typeof Root>
type SwitchProps = SwitchRootProps & SwitchVariants & CSSProps

export const Switch = forwardRef<ElementRef<typeof StyledSwitch>, SwitchProps>(
  (props, forwardedRef) => (
    <StyledSwitch {...props} ref={forwardedRef}>
      <StyledThumb />
    </StyledSwitch>
  )
)
Switch.toString = () => `.${StyledSwitch.className}`
