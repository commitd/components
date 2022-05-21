import { Root } from '@radix-ui/react-toggle'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import {
  AsProps,
  css,
  CSSProps,
  styled,
  VariantProps,
} from '../../stitches.config'
import { focus, hover, iconButtonStyles } from '../IconButton'

export const toggleStyles = css({
  $$main: '$colors$primary',
  $$mainHover: '$colors$primaryHighlight',
  $$contrast: '$colors$primaryContrast',
  $$active: '$colors$defaultActive',
  $$default: '$colors$default',
  $$defaultHover: '$colors$defaultHighlight',
  $$lowlight: '$colors$defaultLowlight',
  $$onBackgroundColor: '$color$defaultHighlight',
  $$onColor: '$$main',

  '&[data-state=on]': {
    backgroundColor: '$$onBackgroundColor',
    color: '$$onColor',
    $$hover: '$$defaultHover',
  },

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
        $$onColor: '$colors$brandContrast',
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
})

const StyledToggle = styled(Root, iconButtonStyles, toggleStyles)

type ToggleVariants = VariantProps<typeof StyledToggle>
type ToggleProps = ComponentProps<typeof Root> &
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
