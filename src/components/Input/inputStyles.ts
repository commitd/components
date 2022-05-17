import { css, CSS } from '../../stitches.config'

export const hover: CSS = {
  boxShadow: 'inset 0px 0px 0px 1px $$active',
  '&:-webkit-autofill': {
    boxShadow: 'inset 0px 0px 0px 1px $$active, inset 0 0 0 100px $paper',
  },
}

export const focus: CSS = {
  backgroundColor: '$paper',
  boxShadow: 'inset 0px 0px 0px 1px $$active, 0px 0px 0px 1px $$active',
  '&:-webkit-autofill': {
    boxShadow:
      'inset 0px 0px 0px 1px $$active, 0px 0px 0px 1px $$active, inset 0 0 0 100px $paper',
  },
}

export const placeholder: CSS = {
  color: '$grey8',
}

export const disabled: CSS = {
  pointerEvents: 'none',
  backgroundColor: '$grey7',
  color: '$grey9',
  cursor: 'not-allowed',
  '&::placeholder': {
    color: '$grey4',
  },
}

export const readonlyStyles = css({
  '&:read-only': {
    cursor: 'not-allowed',
    backgroundColor: '$grey3',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$grey7',
    },
  },
})

export const defaultStyles = css({
  appearance: 'none',
  pointerEvents: 'auto',

  fontFamily: 'inherit',
  textDecoration: 'none',
  color: '$text',
  lineHeight: '$none',

  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  margin: '0',
  padding: '0',
  outline: 'none',

  borderWidth: '0',
  borderRadius: '$default',
  backgroundColor: '$background',
  fontVariantNumeric: 'tabular-nums',
})

export const inputStyles = css({
  $$inactive: '$colors$grey7',
  $$active: '$colors$primary',

  '@motion': {
    transition: 'background 0.5s',
  },
  backgroundPosition: 'center',

  boxShadow: 'inset 0 0 0 1px $$inactive',

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $$border, inset 0 0 0 100px $$border',
    backgroundColor: '$grey2',
  },

  '&:-webkit-autofill::first-line': {
    fontSize: '$1',
    fontFamily: '$system',
    color: '$text',
  },

  '&:hover': hover,
  '&:focus': focus,
  '&::placeholder': placeholder,
  '&:disabled': disabled,

  width: '100%',
  height: '$7',
  fontSize: '$1',
  paddingLeft: '$2',
  paddingRight: '$2',

  variants: {
    // Not for general use
    force: {
      hover,
      focus,
    },
    state: {
      invalid: {
        backgroundColor: '$errorBackground',
        $$inactive: '$colors$errorLowlight',
        $$active: '$colors$error',
      },
      valid: {
        $$inactive: '$colors$successLowlight',
        $$active: '$colors$success',
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
})

export const checkStyles = css({
  $$main: '$colors$primary',
  $$contrast: '$colors$primaryContrast',
  $$default: '$colors$default',
  $$defaultHover: '$colors$defaultHighlight',

  $$inactive: '$colors$grey7',
  $$active: '$colors$primary',

  color: '$$default',
  boxShadow: 'inset 0 0 0 1px $$inactive',

  flexShrink: 0,
  userSelect: 'none',
  lineHeight: '$none',
  verticalAlign: 'middle',
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',

  overflow: 'hidden',
  fontSize: '$0',
  cursor: 'pointer',

  '@motion': {
    transition: 'background 0.5s',
  },
  backgroundPosition: 'center',

  '&:hover': {
    ...hover,
    background:
      '$$hover radial-gradient(circle, transparent 1%, $$hover 1%) center/15000%',
  },

  '&:active': {
    backgroundColor: '$$active',
    backgroundSize: '100%',
    '@motion': {
      transition: 'background 0s',
    },
  },

  '&:disabled': disabled,

  '&:focus': {
    ...focus,
    backgroundColor: '$paper',
    '&[data-state=checked]': {
      color: '$$default',
    },
    '&[data-state=indeterminate]': {
      color: '$$default',
    },
  },

  variants: {
    variant: {
      primary: {
        $$active: '$colors$primaryActive',
        $$hover: '$$defaultHover',
        color: '$$contrast',
        '&[data-state=checked]': {
          backgroundColor: '$$main',
          '&:focus': {
            color: '$$contrast',
          },
        },
        '&[data-state=indeterminate]': {
          backgroundColor: '$$main',
          '&:focus': {
            color: '$$contrast',
          },
        },
      },
      secondary: {
        $$hover: '$$defaultHover',
      },
    },
    state: {
      invalid: {
        backgroundColor: '$errorBackground',
        borderColor: '$colors$error',
        $$inactive: '$colors$errorLowlight',
        $$active: '$colors$error',
      },
      valid: {
        borderColor: '$colors$success',
        $$inactive: '$colors$successLowlight',
        $$active: '$colors$success',
      },
    },
    destructive: {
      true: {
        $$main: '$colors$error',
        $$contrast: '$colors$errorContrast',
        $$active: '$colors$error',
        $$default: '$colors$error',
        $$defaultHover: '$colors$errorBackground',
      },
    },
  },

  defaultVariants: {
    variant: 'secondary',
  },
})
