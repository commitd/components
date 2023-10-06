'use client'
import { RecipeVariantProps, cva, styled } from '@committed/ss'
import { Root } from '@radix-ui/react-toggle'
import { CComponent, component } from '../../utils'

import {
  buttonBaseStyles,
  buttonInteractionStyles,
  buttonVariables,
  destructiveVariants,
  iconSizeVariants,
  mainVariants,
} from '../Button/Button'

const toggleVariants = {
  variant: {
    solid: {
      ...mainVariants.solid,
      '--hover': 'token(colors.$text.secondary)',
      '--focus': 'token(colors.$text.secondary)',
      backgroundColor: 'token(colors.colorPalette.text)',
      color: 'token(colors.colorPalette.solid)',
      '--onBackgroundColor': 'token(colors.colorPalette.solid)',
      '--onColor': 'token(colors.colorPalette.text)',
    },
    outline: {
      ...mainVariants.outline,
      border: 'solid 2px',
      '--onBackgroundColor': 'token(colors.colorPalette.solid)',
    },
    text: {
      ...mainVariants.text,
      '--onBackgroundColor': 'token(colors.colorPalette.solid)',
    },
  },
  destructive: destructiveVariants,
  size: iconSizeVariants,
}

const toggle = cva({
  base: {
    ...buttonVariables,
    ...buttonBaseStyles,
    ...buttonInteractionStyles,

    '--onBackgroundColor': 'token(colors.colorPalette.solid)',
    '--onColor': 'token(colors.colorPalette.text)',

    '&[data-state=on]': {
      backgroundColor: 'var(--onBackgroundColor)',
      color: 'var(--onColor)',
      '--hover': 'token(colors.colorPalette.solid)',
      '--focus': 'token(colors.colorPalette.solid)',
    },
    colorPalette: '$primary',
  },
  variants: toggleVariants,
  defaultVariants: {
    variant: 'outline',
    destructive: false,
    size: 'default',
  },
})
type ToggleVariants = RecipeVariantProps<typeof toggle>

/**
 * Toggle Component
 *
 * Toggles are designed to wrap custom `Svg` icons much like an IconButton, while also having a controllable 'Pressed' state.
 *
 * Based on [Radix Toggle](https://www.radix-ui.com/docs/primitives/components/toggle).
 */
export const Toggle: CComponent<typeof Root, ToggleVariants> = styled(
  component(Root, 'c-toggle'),
  toggle,
)
Toggle.displayName = 'Toggle'
