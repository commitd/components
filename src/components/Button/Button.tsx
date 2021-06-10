import React from 'react'
import { StitchesVariants, styled } from 'stitches.config'

const DEFAULT_TAG = 'button'

export const hover = {
  background:
    '$$hover radial-gradient(circle, transparent 1%, $$hover 1%) center/15000%',
}

export const focus = hover

export const active = {
  backgroundColor: '$$active',
  backgroundSize: '100%',
  transition: 'background 0s',
}

export const mainVariants = {
  brand: {
    $$active: '$colors$brandActive',
    $$lowlight: '$colors$brandLowlight',
    $$hover: '$colors$brandHighlight',
    backgroundColor: '$colors$brand',
    color: '$colors$brandContrast',
  },
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
}

export const destructiveVariants = {
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
}

export const sizeVariants = {
  small: {
    paddingLeft: '$3',
    paddingRight: '$3',
    height: '$5',
    fontSize: '$-1',
  },
  default: {
    paddingLeft: '$4',
    paddingRight: '$4',
    height: '$6',
  },
  large: {
    paddingLeft: '$6',
    paddingRight: '$6',
    height: '$7',
  },
}

export const buttonBaseStyle = {
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
  width: 'fit-content',

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
}

const buttonVariants = {
  variant: mainVariants,
  destructive: destructiveVariants,
  size: sizeVariants,
  force: {
    hover,
    focus,
    active,
  },
}

const StyledButton = styled(DEFAULT_TAG, {
  ...buttonBaseStyle,
  variants: buttonVariants,
  defaultVariants: {
    variant: 'secondary',
    destructive: 'false',
    size: 'default',
  },
} as Parameters<typeof styled>[1] & {
  variants: typeof buttonVariants
})

type ButtonVariants = StitchesVariants<typeof StyledButton>
type ButtonOwnProps = React.ComponentProps<typeof StyledButton>
export type ButtonProps = ButtonOwnProps & {
  /**  This is a test of the docs process */
  variant?: ButtonVariants['variant']
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = StyledButton
Button.toString = () => `.${StyledButton.className}`
