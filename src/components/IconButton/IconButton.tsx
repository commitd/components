import React from 'react'
import { styled } from 'stitches.config'

const DEFAULT_TAG = 'button'

const hover = {
  background:
    '$$hover radial-gradient(circle, transparent 1%, $$hover 1%) center/15000%',
}

const focus = hover

const active = {
  backgroundColor: '$$active',
  backgroundSize: '100%',
  transition: 'background 0s',
}

export const StyledIconButton = styled(DEFAULT_TAG, {
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
  transition: 'background 0.5s',
  backgroundPosition: 'center',

  '&:hover': hover,
  '&:focus': focus,
  '&:active': active,

  '&:disabled': {
    pointerEvents: 'none',
    $$main: '$$lowlight',
    $$default: '$$lowlight',
  },

  variants: {
    variant: {
      primary: {
        $$active: '$colors$primaryActive',
        $$lowlight: '$colors$primaryLowlight',
        $$hover: '$$mainHover',
        backgroundColor: '$$main',
        color: '$$contrast',
      },
      secondary: {
        borderColor: '$$default',
        border: 'solid 2px',
        color: '$$default',
        $$hover: '$$defaultHover',
      },
      tertiary: {
        color: '$$default',
        $$hover: '$$defaultHover',
      },
    },
    destructive: {
      false: {},
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
      active,
    },
  },

  defaultVariants: {
    variant: 'secondary',
    destructive: 'false',
    size: 'default',
  },
})

type IconButtonProps = React.ComponentProps<typeof StyledIconButton>

/**
 * IconButton component
 */
export const IconButton: React.FC<IconButtonProps> = StyledIconButton
IconButton.toString = () => `.${StyledIconButton.className}`
