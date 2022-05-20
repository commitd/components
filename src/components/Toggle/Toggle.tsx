import * as TogglePrimitive from '@radix-ui/react-toggle'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { AsProps, CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { disabled, hover } from '../IconButton'

export const selected = {
  backgroundColor: '$$onBackgroundColor',
  color: '$$onColor',
  $$focusColor: '$$onFocusColor',
}

const focus = hover

// TODO: pressed + hover together not working as intended
export const ToggleStyling = {
  $$main: '$colors$primary',
  $$mainHover: '$colors$primaryHighlight',
  $$contrast: '$colors$primaryContrast',
  $$active: '$colors$defaultActive',
  $$default: '$colors$default',
  $$defaultHover: '$colors$defaultHighlight',
  $$lowlight: '$colors$defaultLowlight',
  $$onBackgroundColor: '$color$defaultHighlight',
  $$onColor: '$$main',
  $$focusColor: '$$default',

  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '$none',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Defaults
  fontSize: '$0',
  borderRadius: '$default',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none',

  // Actions
  '@motion': {
    transition: 'background 0.5s',
  },
  backgroundPosition: 'center',

  '&:hover': hover,
  '&:focus': focus,
  '&:disabled': disabled,
  '&[data-state=on]': selected,

  variants: {
    variant: {
      primary: {
        $$lowlight: '$colors$primaryLowlight',
        $$hover: '$$mainHover',
        backgroundColor: '$$main',
        color: '$$contrast',
        $$onBackgroundColor: '$$contrast',
      },
      secondary: {
        border: 'solid 2px',
        color: '$$default',
        $$hover: '$$defaultHover',
        $$onBackgroundColor: '$$contrast',
      },
      tertiary: {
        color: '$$default',
        $$hover: '$$defaultHover',
        $$onColor: '$$contrast',
      },
    },
    size: {
      small: {
        size: '$5',
        '& > svg': {
          size: '$4',
        },
      },
      default: {
        size: '$6',
      },
      large: {
        size: '$7',
        '& > svg': {
          size: '$6',
        },
      },
    },
    force: {
      hover,
      focus,
    },
  },

  defaultVariants: {
    variant: 'secondary',
    size: 'default',
  },
}

const StyledToggle = styled(TogglePrimitive.Root, ToggleStyling)

type ToggleVariants = VariantProps<typeof StyledToggle>
type ToggleProps = ComponentProps<typeof TogglePrimitive.Root> &
  AsProps &
  CSSProps &
  ToggleVariants

/**
 * Toggle Component
 *
 * Toggles are designed to wrap custom `Svg` icons much like an IconButton, while also having a controllable 'Pressed' state.
 *
 * Based on [Radix Toggle](https://www.radix-ui.com/docs/primitives/components/toggle).
 */
export const Toggle = forwardRef<ElementRef<typeof StyledToggle>, ToggleProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledToggle {...props} ref={forwardedRef}>
      {children}
    </StyledToggle>
  )
)
Toggle.toString = () => `.${StyledToggle.className}`
