import * as TogglePrimitive from '@radix-ui/react-toggle'
import { styled } from '../../stitches.config'
import { disabled, hover } from '../IconButton'

export const selected = {
  backgroundColor: '$$onBackgroundColor',
  color: '$$onColor',
  $$focusColor: '$$onFocusColor',
}

const focus = { borderColor: '$$focusColor', border: 'solid 2px' }

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
  $$onFocusColor: '$$contrast',

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
  borderColor: 'transparent',

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
        $$focusColor: 'transparent',
        $$onFocusColor: '$$onBackgroundColor',
      },
      secondary: {
        border: 'solid 2px',
        color: '$$default',
        $$hover: '$$defaultHover',
        $$onBackgroundColor: '$$contrast',
        $$focusColor: 'transparent',
        $$onFocusColor: 'transparent',
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

/**
 * Toggle Component
 *
 * Toggles are designed to wrap custom `Svg` icons much like an IconButton.
 *
 * Based on [Radix Toggle](https://www.radix-ui.com/docs/primitives/components/toggle).
 */
export const Toggle = StyledToggle
