import * as TogglePrimitive from '@radix-ui/react-toggle'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { AsProps, CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { hover, IconButtonStyling } from '../IconButton'

export const selected = {
  backgroundColor: '$$onBackgroundColor',
  color: '$$onColor',
  $$hover: '$$defaultHover',
}

const focus = hover

// TODO: pressed + hover together not working as intended
export const ToggleStyling = {
  ...IconButtonStyling,
  $$main: '$colors$primary',
  $$mainHover: '$colors$primaryHighlight',
  $$contrast: '$colors$primaryContrast',
  $$active: '$colors$defaultActive',
  $$default: '$colors$default',
  $$defaultHover: '$colors$defaultHighlight',
  $$lowlight: '$colors$defaultLowlight',
  $$onBackgroundColor: '$color$defaultHighlight',
  $$onColor: '$$main',

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
