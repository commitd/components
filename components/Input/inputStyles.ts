import { SystemStyleObject } from '@committed/ss/types'

export const hover = {
  boxShadow: 'inset 0px 0px 0px 1px var(--active)',
  '&:-webkit-autofill': {
    boxShadow:
      'inset 0px 0px 0px 1px var(--active), inset 0 0 0 100px token(colors.$paper)',
  },
} satisfies SystemStyleObject

export const focus = {
  backgroundColor: 'paper',
  boxShadow:
    'inset 0px 0px 0px 1px var(--active), 0px 0px 0px 1px var(--active)',
  '&:-webkit-autofill': {
    boxShadow:
      'inset 0px 0px 0px 1px var(--active), 0px 0px 0px 1px var(--active), inset 0 0 0 100px token(colors.$paper)',
  },
} satisfies SystemStyleObject

export const placeholder = {
  color: 'grey8',
} satisfies SystemStyleObject

export const disabled = {
  pointerEvents: 'none',
  backgroundColor: 'grey7',
  color: 'grey9',
  cursor: 'not-allowed',
  '&::placeholder': {
    color: 'grey4',
  },
} satisfies SystemStyleObject

export const readonlyStyles = {
  '&:read-only': {
    cursor: 'not-allowed',
    backgroundColor: 'grey3',
    _focus: {
      boxShadow: 'inset 0px 0px 0px 1px token(colors.$grey7)',
    },
  },
} satisfies SystemStyleObject

export const defaultStyles = {
  appearance: 'none',
  pointerEvents: 'auto',

  fontFamily: 'inherit',
  textDecoration: 'none',
  color: 'text',
  lineHeight: 'none',

  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  margin: '0',
  padding: '0',
  outline: 'none',

  borderWidth: '0',
  borderRadius: 'default',
  backgroundColor: 'background',
  fontVariantNumeric: 'tabular-nums',
} satisfies SystemStyleObject

export const inputStyles = {
  base: {
    '--inactive': 'token(colors.$grey7)',
    '--active': 'token(colors.$primary)',

    ...defaultStyles,
    ...readonlyStyles,

    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'background 0.5s',
    },
    backgroundPosition: 'center',

    boxShadow: 'inset 0 0 0 1px var(--inactive)',

    '&:-webkit-autofill': {
      boxShadow:
        'inset 0 0 0 1px var(--border), inset 0 0 0 100px var(--border)',
      backgroundColor: 'grey2',
    },

    '&:-webkit-autofill::first-line': {
      fontSize: 1,
      fontFamily: 'system',
      color: 'text',
    },

    _hover: hover,
    _focus: focus,
    _placeholder: placeholder,
    _disabled: disabled,

    width: '100%',
    height: 7,
    fontSize: 1,
    paddingLeft: 2,
    paddingRight: 2,
  },

  variants: {
    // Not for general use
    state: {
      invalid: {
        backgroundColor: '$errorBackground',
        '--inactive': 'token(colors.$errorLowlight)',
        '--active': 'token(colors.$error)',
      },
      valid: {
        '--inactive': 'token(colors.$successLowlight)',
        '--active': 'token(colors.$success)',
      },
    },
    native: {
      false: {},
      true: {
        '&:invalid': {
          backgroundColor: '$errorBackground',
          '--inactive': 'token(colors.$errorLowlight)',
          '--active': 'token(colors.$error)',
        },
        '&:valid': {
          '--inactive': 'token(colors.$successLowlight)',
          '--active': 'token(colors.$success)',
        },
        '&:has(+select:invalid)': {
          backgroundColor: '$errorBackground',
          '--inactive': 'token(colors.$errorLowlight)',
          '--active': 'token(colors.$error)',
        },
        '&:has(+select:valid)': {
          '--inactive': 'token(colors.$successLowlight)',
          '--active': 'token(colors.$success)',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        _focus: {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
}

export const checkStyleVariants = {
  variant: {
    primary: {
      '--active': 'token(colors.$primaryActive)',
      '--hover': 'var(--defaultHover)',
      color: 'var(--contrast)',
      '&[data-state=checked]': {
        backgroundColor: 'var(--main)',
        _focus: {
          color: 'var(--contrast)',
        },
      },
      '&[data-state=indeterminate]': {
        backgroundColor: 'var(--main)',
        _focus: {
          color: 'var(--contrast)',
        },
      },
    },
    secondary: {
      '--hover': 'var(--defaultHover)',
    },
  },
  state: {
    invalid: {
      backgroundColor: '$errorBackground',
      borderColor: 'token(colors.$error)',
      '--inactive': 'token(colors.$errorLowlight)',
      '--active': 'token(colors.$error)',
    },
    valid: {
      borderColor: 'token(colors.$success)',
      '--inactive': 'token(colors.$successLowlight)',
      '--active': 'token(colors.$success)',
    },
  },
  native: {
    false: {},
    true: {
      '&:has(+input:invalid)': {
        backgroundColor: '$errorBackground',
        borderColor: 'token(colors.$error)',
        '--inactive': 'token(colors.$errorLowlight)',
        '--active': 'token(colors.$error)',
      },
      '&:has(+input:valid)': {
        borderColor: 'token(colors.$success)',
        '--inactive': 'token(colors.$successLowlight)',
        '--active': 'token(colors.$success)',
      },
    },
  },
  destructive: {
    true: {
      '--main': 'token(colors.$error)',
      '--contrast': 'token(colors.$errorContrast)',
      '--active': 'token(colors.$error)',
      '--default': 'token(colors.$error)',
      '--defaultHover': 'token(colors.$errorBackground)',
    },
  },
}

export const checkStylesBase = {
  '--main': 'token(colors.$primary)',
  '--contrast': 'token(colors.$primaryContrast)',
  '--default': 'token(colors.$default)',
  '--defaultHover': 'token(colors.$defaultHighlight)',

  '--inactive': 'token(colors.$grey7)',
  '--active': 'token(colors.$primary)',

  ...defaultStyles,

  color: 'var(--default)',
  boxShadow: 'inset 0 0 0 1px var(--inactive)',

  flexShrink: 0,
  userSelect: 'none',
  lineHeight: 'none',
  verticalAlign: 'middle',
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',

  overflow: 'hidden',
  fontSize: 0,
  cursor: 'pointer',

  width: '28px',
  height: '28px',

  _motionReduce: { transition: 'none' },
  _motionSafe: {
    transition: 'background 0.5s',
  },
  backgroundPosition: 'center',

  _hover: {
    ...hover,
    background:
      'var(--hover) radial-gradient(circle, transparent 1%, var(--hover) 1%) center/15000%',
  },

  _active: {
    backgroundColor: 'var(--active)',
    backgroundSize: '100%',
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'background 0s',
    },
  },

  _disabled: disabled,

  _focus: {
    ...focus,
    backgroundColor: 'paper',
    '&[data-state=checked]': {
      color: 'default',
    },
    '&[data-state=indeterminate]': {
      color: 'default',
    },
  },
} as const
