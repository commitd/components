import { cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { RecipeVariantProps } from '@committed/ss/types/recipe'

const DEFAULT_TAG = 'button'

export const hover: SystemStyleObject = {
  background:
    'var(--hover) radial-gradient(circle, transparent 1%, var(--hover) 1%) center/15000%',
}

export const focus = hover

export const active: SystemStyleObject = {
  _motionSafe: {
    transition: 'background 0s !important',
  },
  backgroundColor: 'var(--active)',
  backgroundSize: '100%',
}

export const disabled: SystemStyleObject = {
  pointerEvents: 'none',
  opacity: 0.3,
  '--main': 'var(--lowlight)',
}

export const buttonInteractionStyles: SystemStyleObject = {
  cursor: 'pointer',
  _motionSafe: {
    transition: 'background 0.5s ',
  },
  backgroundPosition: 'center',

  '--active': 'token(colors.$defaultActive)',
  '--lowlight': 'token(colors.$defaultLowlight)',
  '--hover': 'token(colors.$defaultHighlight)',

  _hover: hover,
  _focus: focus,
  _active: active,
  _disabled: disabled,
}

export const mainVariants = {
  brand: {
    '--active': 'token(colors.$brandActive)',
    '--lowlight': 'token(colors.$brandLowlight)',
    '--hover': 'token(colors.$brandHighlight)',
    backgroundColor: 'token(colors.$brand)',
    color: 'token(colors.$brandContrast)',
  },
  primary: {
    '--active': 'token(colors.$primaryActive)',
    '--lowlight': 'token(colors.$primaryLowlight)',
    '--hover': 'var(--mainHover)',
    backgroundColor: 'var(--main)',
    color: 'var(--contrast)',
  },
  secondary: {
    borderColor: 'var(--default)',
    border: 'solid 2px',
    color: 'var(--default)',
    '--hover': 'var(--defaultHover)',
  },
  tertiary: {
    color: 'var(--default)',
    '--hover': 'var(--defaultHover)',
  },
}

export const destructiveVariants = {
  false: {},
  true: {
    '--main': 'token(colors.$error)',
    '--mainHover': 'token(colors.$errorHighlight)',
    '--contrast': 'token(colors.$errorContrast)',
    '--active': 'token(colors.$errorActive)',
    '--default': 'token(colors.$error)',
    '--defaultHover': 'token(colors.$errorBackground)',
    '--lowlight': 'token(colors.$errorLowlight)',
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

export const buttonBaseStyle: SystemStyleObject = {
  '--main': 'token(colors.$primary)',
  '--mainHover': 'token(colors.$primaryHighlight)',
  '--contrast': 'token(colors.$primaryContrast)',
  '--default': 'token(colors.$default)',
  '--defaultHover': 'token(colors.$defaultHighlight)',

  // Defaults
  fontSize: '$0',
  borderRadius: '$default',
  backgroundColor: '$transparent',
  border: 'none',
  width: 'fit-content; width: -moz-fit-content',
  _motionReduce: { transition: 'none' },
}

const buttonVariants = {
  variants: {
    variant: mainVariants,
    destructive: destructiveVariants,
    size: sizeVariants,
    ['full-width']: {
      true: {
        width: '100%',
      },
    },
  },
}

const button = cva({
  base: {
    ...buttonBaseStyle,
    ...buttonInteractionStyles,
  },
  ...buttonVariants,
  defaultVariants: {
    variant: 'secondary',
    destructive: false,
    size: 'default',
  },
})

type ButtonVariants = RecipeVariantProps<typeof button>
type ButtonProps = React.HTMLProps<HTMLButtonElement> & ButtonVariants

/**
 * Button component
 */
export const Button = styled(DEFAULT_TAG, button) as React.FC<ButtonProps>
Button.displayName = 'Button'
