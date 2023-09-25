'use client'
import { cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { RecipeVariantProps } from '@committed/ss/types/recipe'
import { Root } from '@radix-ui/react-toggle'
import { CComponent, component } from '../../utils'

import {
  buttonBaseStyles,
  buttonColors,
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
      backgroundColor: 'var(--text)',
      color: 'var(--base)',
      '--onBackgroundColor': 'var(--base)',
      '--onColor': 'var(--text)',
    },
    outline: {
      ...mainVariants.outline,
      border: 'solid 2px',
      '--onBackgroundColor': 'var(--base)',
    },
    text: {
      ...mainVariants.text,
      '--onBackgroundColor': 'var(--base)',
    },
  },
  destructive: destructiveVariants,
  color: buttonColors,
  size: iconSizeVariants,
}

const toggle = cva({
  base: {
    ...buttonVariables,
    ...buttonBaseStyles,
    ...buttonInteractionStyles,

    '--onBackgroundColor': 'var(--base)',
    '--onColor': 'var(--text)',

    '&[data-state=on]': {
      backgroundColor: 'var(--onBackgroundColor)',
      color: 'var(--onColor)',
      '--hover': 'var(--solid)',
      '--focus': 'var(--solid)',
    },
  },
  variants: toggleVariants,
  defaultVariants: {
    color: '$primary',
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
