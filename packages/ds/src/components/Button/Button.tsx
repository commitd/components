import { cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { RecipeVariantProps } from '@committed/ss/types/recipe'
import {
  ColorPaletteProps,
  PolyCComponent,
  Prettify,
  component,
  forwardRefExtend,
} from '../../utils'
import { Svg } from '../Svg'

const DEFAULT_TAG = 'button'

export const buttonVariables: SystemStyleObject = {
  // states
  '--active': 'token(colors.colorPalette.outline.active)',
  '--focus': 'token(colors.colorPalette.outline.focus)',
  '--hover': 'token(colors.colorPalette.outline.hover)',
}

export const hover: SystemStyleObject = {
  background:
    'var(--hover) radial-gradient(circle, transparent 1%, var(--hover) 1%) center/15000%',
}

export const focus = {
  background:
    'var(--focus) radial-gradient(circle, transparent 1%, var(--focus) 1%) center/15000%',
  outline: '2px solid var(--active)',
}

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
}

export const buttonInteractionStyles: SystemStyleObject = {
  cursor: 'pointer',
  _motionSafe: {
    transition: 'background 0.5s ',
  },
  backgroundPosition: 'center',

  _hover: hover,
  _focus: focus,
  _active: active,
  _disabled: disabled,
}

export const mainVariants = {
  solid: {
    '--active': 'token(colors.colorPalette.solid.active)',
    '--focus': 'token(colors.colorPalette.solid.focus)',
    '--hover': 'token(colors.colorPalette.solid.hover)',

    backgroundColor: 'token(colors.colorPalette.solid)',

    color: 'token(colors.colorPalette.text)',
  },
  outline: {
    '--active': 'token(colors.colorPalette.outline.active)',
    '--focus': 'token(colors.colorPalette.outline.focus)',
    '--hover': 'token(colors.colorPalette.outline.hover)',

    backgroundColor: 'token(colors.colorPalette.outline)',
    borderColor: 'var(--active)',
    color: 'var(--active)',
  },
  text: {
    '--active': 'token(colors.colorPalette.outline.active)',
    '--focus': 'token(colors.colorPalette.outline.focus)',
    '--hover': 'token(colors.colorPalette.outline.hover)',

    color: 'var(--active)',
  },
} as const

export const destructiveVariants = {
  false: {},
  true: {
    colorPalette: '$error',
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
} as const

export const buttonBaseStyles: SystemStyleObject = {
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: 'none',
  outline: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  // Defaults
  // fontFamily: '$text',
  fontSize: '$0',
  borderRadius: '$default',
  backgroundColor: 'transparent',
  border: 'transparent solid 2px',
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
    ...buttonVariables,
    ...buttonBaseStyles,
    ...buttonInteractionStyles,
    colorPalette: '$primary',
  },
  ...buttonVariants,
  defaultVariants: {
    variant: 'outline',
    destructive: false,
    size: 'default',
  },
})

type ButtonVariants = RecipeVariantProps<typeof button> & ColorPaletteProps
const Base = component(DEFAULT_TAG, 'c-button')

/**
 * Button component
 */
export const Button: PolyCComponent<typeof DEFAULT_TAG, ButtonVariants> =
  styled(Base, button)
Button.displayName = 'Button'

//// IconButton

export const iconSizeVariants = {
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
}

const iconButtonVariants = {
  variants: {
    variant: mainVariants,
    destructive: destructiveVariants,
    size: iconSizeVariants,
  },
}

const iconButton = cva({
  base: {
    ...buttonVariables,
    ...buttonBaseStyles,
    ...buttonInteractionStyles,
    colorPalette: '$primary',
  },
  ...iconButtonVariants,
  defaultVariants: {
    variant: 'outline',
    destructive: false,
    size: 'default',
  },
})

export const StyledIconButton = styled(DEFAULT_TAG, iconButton)

type IconButtonVariants = RecipeVariantProps<typeof iconButton> &
  ColorPaletteProps

type StyledIconButtonProps = IconButtonVariants & {
  // override the incorrectly inferred type from HTMLProps
  type?: 'button' | 'reset' | 'submit'
  /** Add a title */
  title?: string
  /** Add the given svg path  */
  path?: string
}

type IconButtonProps = Prettify<StyledIconButtonProps>

export const ICON_BUTTON_CLASS = 'c-icon-button'

/**
 * IconButton can be used to wrap custom `Svg` icons or use the `path` prop to supply a standard mdi icon.
 */
export const IconButton: PolyCComponent<
  typeof DEFAULT_TAG,
  StyledIconButtonProps
> = forwardRefExtend<typeof DEFAULT_TAG, IconButtonProps>(
  ({ className, title, path, children, ...props }, forwardedRef) => (
    <StyledIconButton
      className={cx(ICON_BUTTON_CLASS, className)}
      {...props}
      ref={forwardedRef}
    >
      {path ? <Svg path={path} title={title} /> : children}
    </StyledIconButton>
  ),
)
IconButton.displayName = 'IconButton'
