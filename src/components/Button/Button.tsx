import { css, styled } from '../../stitches.config'

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

export const disabled = {
  pointerEvents: 'none',
  opacity: 0.3,
}

export const buttonInteractionStyles = css({
  cursor: 'pointer',
  transition: 'background 0.5s',
  backgroundPosition: 'center',

  $$active: '$colors$defaultActive',
  $$lowlight: '$colors$defaultLowlight',
  $$hover: '$colors$defaultHighlight',

  '&:hover': hover,
  '&:focus': focus,
  '&:active': active,
  '&:disabled': disabled,
})

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

export const buttonBaseStyle = css({
  $$main: '$colors$primary',
  $$mainHover: '$colors$primaryHighlight',
  $$contrast: '$colors$primaryContrast',
  $$default: '$colors$default',
  $$defaultHover: '$colors$defaultHighlight',

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
  backgroundColor: 'transparent',
  border: 'none',
  width: 'fit-content; width: -moz-fit-content',
})

const buttonVariants = css({
  variants: {
    variant: mainVariants,
    destructive: destructiveVariants,
    size: sizeVariants,
    ['full-width']: {
      true: {
        width: '100%',
      },
    },
    force: {
      hover,
      focus,
      active,
    },
  },
})

/**
 * Button component
 */
export const Button = styled(
  DEFAULT_TAG,
  buttonBaseStyle,
  buttonInteractionStyles,
  buttonVariants,
  {
    defaultVariants: {
      variant: 'secondary',
      destructive: 'false',
      size: 'default',
    },
  }
)
