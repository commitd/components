import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { AsProps, CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { Svg } from '../Svg'

const DEFAULT_TAG = 'button'

const hover = {
  background:
    '$$hover radial-gradient(circle, transparent 1%, $$hover 1%) center/15000%',
}

const focus = hover

const active = {
  backgroundColor: '$$active',
  backgroundSize: '100%',
  '@motion': {
    transition: 'background 0s',
  },
}

export const disabled = {
  pointerEvents: 'none',
  $$main: '$$lowlight',
  opacity: 0.4,
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
  '@motion': {
    transition: 'background 0.5s',
  },
  backgroundPosition: 'center',

  '&:hover': hover,
  '&:focus': focus,
  '&:active': active,
  '&:disabled': disabled,

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

type IconButtonVariants = VariantProps<typeof StyledIconButton>
type ButtonProps = ComponentProps<typeof DEFAULT_TAG>
type IconButtonProps = ButtonProps &
  AsProps &
  CSSProps &
  IconButtonVariants & {
    /** Add a title */
    title?: string
    /** Add the given svg path  */
    path?: string
  }

/**
 * IconButton can be used to wrap custom `Svg` icons or use the `path` prop to supply a standard mdi icon.
 */
export const IconButton = forwardRef<
  ElementRef<typeof StyledIconButton>,
  IconButtonProps
>(({ title, path, children, ...props }, forwardedRef) => (
  <StyledIconButton {...props} ref={forwardedRef}>
    {path ? <Svg path={path} title={title} /> : children}
  </StyledIconButton>
))
IconButton.toString = () => `.${StyledIconButton.className}`
