import { cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { RecipeVariantProps } from '@committed/ss/types/recipe'
import {
  PolyCComponent,
  Prettify,
  component,
  forwardRefExtend,
} from '../../utils'
import { Svg } from '../Svg'

const DEFAULT_TAG = 'button'

export const buttonVariables: SystemStyleObject = {
  //colors
  '--base': 'token(colors.$primary.9)',
  '--solid': 'token(colors.$primary.10)',
  '--bold': 'token(colors.$primary.11)',
  '--contrast': 'token(colors.$primary.11)',
  '--bg': 'token(colors.$primary.2)',
  '--subtle': 'token(colors.$primary.3)',
  '--normal': 'token(colors.$primary.4)',
  '--text': 'token(colors.$primary.text)',

  // states
  '--active': 'var(--bold)',
  '--focus': 'var(--subtle)',
  '--hover': 'var(--normal)',
}

export const hover: SystemStyleObject = {
  background:
    'var(--hover) radial-gradient(circle, transparent 1%, var(--hover) 1%) center/15000%',
}

export const focus = {
  background:
    'var(--focus) radial-gradient(circle, transparent 1%, var(--focus) 1%) center/15000%',
  outline: '2px solid var(--bold)',
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
    '--active': 'var(--bold)',
    '--focus': 'var(--bold)',
    '--hover': 'var(--solid)',

    backgroundColor: 'var(--base)',

    color: 'var(--text)',
  },
  outline: {
    '--active': 'var(--bold)',
    '--focus': 'var(--subtle)',
    '--hover': 'var(--subtle)',

    backgroundColor: 'var(--bg)',
    borderColor: 'var(--contrast)',
    color: 'var(--contrast)',
  },
  text: {
    '--active': 'var(--bold)',
    '--focus': 'var(--subtle)',
    '--hover': 'var(--subtle)',

    color: 'var(--contrast)',
  },
} as const

export const destructiveVariants = {
  false: {},
  true: {
    '--base': 'token(colors.$error.9)',
    '--solid': 'token(colors.$error.10)',
    '--bold': 'token(colors.$error.11)',
    '--contrast': 'token(colors.$error.11)',
    '--bg': 'token(colors.$error.2)',
    '--subtle': 'token(colors.$error.3)',
    '--normal': 'token(colors.$error.4)',
    '--text': 'token(colors.$error.text)',
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

export const buttonColors = {
  $primary: {
    '--base': 'token(colors.$primary.9)',
    '--solid': 'token(colors.$primary.10)',
    '--bold': 'token(colors.$primary.11)',
    '--contrast': 'token(colors.$primary.11)',
    '--bg': 'token(colors.$primary.2)',
    '--subtle': 'token(colors.$primary.3)',
    '--normal': 'token(colors.$primary.4)',
    '--text': 'token(colors.$primary.text)',
  },
  $secondary: {
    '--base': 'token(colors.$secondary.9)',
    '--solid': 'token(colors.$secondary.10)',
    '--bold': 'token(colors.$secondary.11)',
    '--contrast': 'token(colors.$secondary.11)',
    '--bg': 'token(colors.$secondary.2)',
    '--subtle': 'token(colors.$secondary.3)',
    '--normal': 'token(colors.$secondary.4)',
    '--text': 'token(colors.$secondary.text)',
  },
  $neutral: {
    '--base': 'token(colors.$neutral.9)',
    '--solid': 'token(colors.$neutral.10)',
    '--bold': 'token(colors.$neutral.11)',
    '--contrast': 'token(colors.$neutral.11)',
    '--bg': 'token(colors.$neutral.2)',
    '--subtle': 'token(colors.$neutral.3)',
    '--normal': 'token(colors.$neutral.4)',
    '--text': 'token(colors.$neutral.text)',
  },
  $info: {
    '--base': 'token(colors.$info.9)',
    '--solid': 'token(colors.$info.10)',
    '--bold': 'token(colors.$info.11)',
    '--contrast': 'token(colors.$info.11)',
    '--bg': 'token(colors.$info.2)',
    '--subtle': 'token(colors.$info.3)',
    '--normal': 'token(colors.$info.4)',
    '--text': 'token(colors.$info.text)',
  },
  $warn: {
    '--base': 'token(colors.$warn.9)',
    '--solid': 'token(colors.$warn.10)',
    '--bold': 'token(colors.$warn.11)',
    '--contrast': 'token(colors.$warn.11)',
    '--bg': 'token(colors.$warn.2)',
    '--subtle': 'token(colors.$warn.3)',
    '--normal': 'token(colors.$warn.4)',
    '--text': 'token(colors.$warn.text)',
  },
  $error: {
    '--base': 'token(colors.$error.9)',
    '--solid': 'token(colors.$error.10)',
    '--bold': 'token(colors.$error.11)',
    '--contrast': 'token(colors.$error.11)',
    '--bg': 'token(colors.$error.2)',
    '--subtle': 'token(colors.$error.3)',
    '--normal': 'token(colors.$error.4)',
    '--text': 'token(colors.$error.text)',
  },
  $success: {
    '--base': 'token(colors.$success.9)',
    '--solid': 'token(colors.$success.10)',
    '--bold': 'token(colors.$success.11)',
    '--contrast': 'token(colors.$success.11)',
    '--bg': 'token(colors.$success.2)',
    '--subtle': 'token(colors.$success.3)',
    '--normal': 'token(colors.$success.4)',
    '--text': 'token(colors.$success.text)',
  },
  $tomato: {
    '--base': 'token(colors.$tomato.9)',
    '--solid': 'token(colors.$tomato.10)',
    '--bold': 'token(colors.$tomato.11)',
    '--contrast': 'token(colors.$tomato.11)',
    '--bg': 'token(colors.$tomato.2)',
    '--subtle': 'token(colors.$tomato.3)',
    '--normal': 'token(colors.$tomato.4)',
    '--text': 'token(colors.$tomato.text)',
  },
  $red: {
    '--base': 'token(colors.$red.9)',
    '--solid': 'token(colors.$red.10)',
    '--bold': 'token(colors.$red.11)',
    '--contrast': 'token(colors.$red.11)',
    '--bg': 'token(colors.$red.2)',
    '--subtle': 'token(colors.$red.3)',
    '--normal': 'token(colors.$red.4)',
    '--text': 'token(colors.$red.text)',
  },
  $crimson: {
    '--base': 'token(colors.$crimson.9)',
    '--solid': 'token(colors.$crimson.10)',
    '--bold': 'token(colors.$crimson.11)',
    '--contrast': 'token(colors.$crimson.11)',
    '--bg': 'token(colors.$crimson.2)',
    '--subtle': 'token(colors.$crimson.3)',
    '--normal': 'token(colors.$crimson.4)',
    '--text': 'token(colors.$crimson.text)',
  },
  $pink: {
    '--base': 'token(colors.$pink.9)',
    '--solid': 'token(colors.$pink.10)',
    '--bold': 'token(colors.$pink.11)',
    '--contrast': 'token(colors.$pink.11)',
    '--bg': 'token(colors.$pink.2)',
    '--subtle': 'token(colors.$pink.3)',
    '--normal': 'token(colors.$pink.4)',
    '--text': 'token(colors.$pink.text)',
  },
  $plum: {
    '--base': 'token(colors.$plum.9)',
    '--solid': 'token(colors.$plum.10)',
    '--bold': 'token(colors.$plum.11)',
    '--contrast': 'token(colors.$plum.11)',
    '--bg': 'token(colors.$plum.2)',
    '--subtle': 'token(colors.$plum.3)',
    '--normal': 'token(colors.$plum.4)',
    '--text': 'token(colors.$plum.text)',
  },
  $purple: {
    '--base': 'token(colors.$purple.9)',
    '--solid': 'token(colors.$purple.10)',
    '--bold': 'token(colors.$purple.11)',
    '--contrast': 'token(colors.$purple.11)',
    '--bg': 'token(colors.$purple.2)',
    '--subtle': 'token(colors.$purple.3)',
    '--normal': 'token(colors.$purple.4)',
    '--text': 'token(colors.$purple.text)',
  },
  $violet: {
    '--base': 'token(colors.$violet.9)',
    '--solid': 'token(colors.$violet.10)',
    '--bold': 'token(colors.$violet.11)',
    '--contrast': 'token(colors.$violet.11)',
    '--bg': 'token(colors.$violet.2)',
    '--subtle': 'token(colors.$violet.3)',
    '--normal': 'token(colors.$violet.4)',
    '--text': 'token(colors.$violet.text)',
  },
  $indigo: {
    '--base': 'token(colors.$indigo.9)',
    '--solid': 'token(colors.$indigo.10)',
    '--bold': 'token(colors.$indigo.11)',
    '--contrast': 'token(colors.$indigo.11)',
    '--bg': 'token(colors.$indigo.2)',
    '--subtle': 'token(colors.$indigo.3)',
    '--normal': 'token(colors.$indigo.4)',
    '--text': 'token(colors.$indigo.text)',
  },
  $blue: {
    '--base': 'token(colors.$blue.9)',
    '--solid': 'token(colors.$blue.10)',
    '--bold': 'token(colors.$blue.11)',
    '--contrast': 'token(colors.$blue.11)',
    '--bg': 'token(colors.$blue.2)',
    '--subtle': 'token(colors.$blue.3)',
    '--normal': 'token(colors.$blue.4)',
    '--text': 'token(colors.$blue.text)',
  },
  $cyan: {
    '--base': 'token(colors.$cyan.9)',
    '--solid': 'token(colors.$cyan.10)',
    '--bold': 'token(colors.$cyan.11)',
    '--contrast': 'token(colors.$cyan.11)',
    '--bg': 'token(colors.$cyan.2)',
    '--subtle': 'token(colors.$cyan.3)',
    '--normal': 'token(colors.$cyan.4)',
    '--text': 'token(colors.$cyan.text)',
  },
  $teal: {
    '--base': 'token(colors.$teal.9)',
    '--solid': 'token(colors.$teal.10)',
    '--bold': 'token(colors.$teal.11)',
    '--contrast': 'token(colors.$teal.11)',
    '--bg': 'token(colors.$teal.2)',
    '--subtle': 'token(colors.$teal.3)',
    '--normal': 'token(colors.$teal.4)',
    '--text': 'token(colors.$teal.text)',
  },
  $green: {
    '--base': 'token(colors.$green.9)',
    '--solid': 'token(colors.$green.10)',
    '--bold': 'token(colors.$green.11)',
    '--contrast': 'token(colors.$green.11)',
    '--bg': 'token(colors.$green.2)',
    '--subtle': 'token(colors.$green.3)',
    '--normal': 'token(colors.$green.4)',
    '--text': 'token(colors.$green.text)',
  },
  $grass: {
    '--base': 'token(colors.$grass.9)',
    '--solid': 'token(colors.$grass.10)',
    '--bold': 'token(colors.$grass.11)',
    '--contrast': 'token(colors.$grass.11)',
    '--bg': 'token(colors.$grass.2)',
    '--subtle': 'token(colors.$grass.3)',
    '--normal': 'token(colors.$grass.4)',
    '--text': 'token(colors.$grass.text)',
  },
  $orange: {
    '--base': 'token(colors.$orange.9)',
    '--solid': 'token(colors.$orange.10)',
    '--bold': 'token(colors.$orange.11)',
    '--contrast': 'token(colors.$orange.11)',
    '--bg': 'token(colors.$orange.2)',
    '--subtle': 'token(colors.$orange.3)',
    '--normal': 'token(colors.$orange.4)',
    '--text': 'token(colors.$orange.text)',
  },
  $brown: {
    '--base': 'token(colors.$brown.9)',
    '--solid': 'token(colors.$brown.10)',
    '--bold': 'token(colors.$brown.11)',
    '--contrast': 'token(colors.$brown.11)',
    '--bg': 'token(colors.$brown.2)',
    '--subtle': 'token(colors.$brown.3)',
    '--normal': 'token(colors.$brown.4)',
    '--text': 'token(colors.$brown.text)',
  },
  $sky: {
    '--base': 'token(colors.$sky.9)',
    '--solid': 'token(colors.$sky.10)',
    '--bold': 'token(colors.$sky.11)',
    '--contrast': 'token(colors.$sky.11)',
    '--bg': 'token(colors.$sky.2)',
    '--subtle': 'token(colors.$sky.3)',
    '--normal': 'token(colors.$sky.4)',
    '--text': 'token(colors.$sky.text)',
  },
  $mint: {
    '--base': 'token(colors.$mint.9)',
    '--solid': 'token(colors.$mint.10)',
    '--bold': 'token(colors.$mint.11)',
    '--contrast': 'token(colors.$mint.11)',
    '--bg': 'token(colors.$mint.2)',
    '--subtle': 'token(colors.$mint.3)',
    '--normal': 'token(colors.$mint.4)',
    '--text': 'token(colors.$mint.text)',
  },
  $lime: {
    '--base': 'token(colors.$lime.9)',
    '--solid': 'token(colors.$lime.10)',
    '--bold': 'token(colors.$lime.11)',
    '--contrast': 'token(colors.$lime.11)',
    '--bg': 'token(colors.$lime.2)',
    '--subtle': 'token(colors.$lime.3)',
    '--normal': 'token(colors.$lime.4)',
    '--text': 'token(colors.$lime.text)',
  },
  $yellow: {
    '--base': 'token(colors.$yellow.9)',
    '--solid': 'token(colors.$yellow.10)',
    '--bold': 'token(colors.$yellow.11)',
    '--contrast': 'token(colors.$yellow.11)',
    '--bg': 'token(colors.$yellow.2)',
    '--subtle': 'token(colors.$yellow.3)',
    '--normal': 'token(colors.$yellow.4)',
    '--text': 'token(colors.$yellow.text)',
  },
  $amber: {
    '--base': 'token(colors.$amber.9)',
    '--solid': 'token(colors.$amber.10)',
    '--bold': 'token(colors.$amber.11)',
    '--contrast': 'token(colors.$amber.11)',
    '--bg': 'token(colors.$amber.2)',
    '--subtle': 'token(colors.$amber.3)',
    '--normal': 'token(colors.$amber.4)',
    '--text': 'token(colors.$amber.text)',
  },
  $gray: {
    '--base': 'token(colors.$gray.9)',
    '--solid': 'token(colors.$gray.10)',
    '--bold': 'token(colors.$gray.11)',
    '--contrast': 'token(colors.$gray.11)',
    '--bg': 'token(colors.$gray.2)',
    '--subtle': 'token(colors.$gray.3)',
    '--normal': 'token(colors.$gray.4)',
    '--text': 'token(colors.$gray.text)',
  },
  $mauve: {
    '--base': 'token(colors.$mauve.9)',
    '--solid': 'token(colors.$mauve.10)',
    '--bold': 'token(colors.$mauve.11)',
    '--contrast': 'token(colors.$mauve.11)',
    '--bg': 'token(colors.$mauve.2)',
    '--subtle': 'token(colors.$mauve.3)',
    '--normal': 'token(colors.$mauve.4)',
    '--text': 'token(colors.$mauve.text)',
  },
  $slate: {
    '--base': 'token(colors.$slate.9)',
    '--solid': 'token(colors.$slate.10)',
    '--bold': 'token(colors.$slate.11)',
    '--contrast': 'token(colors.$slate.11)',
    '--bg': 'token(colors.$slate.2)',
    '--subtle': 'token(colors.$slate.3)',
    '--normal': 'token(colors.$slate.4)',
    '--text': 'token(colors.$slate.text)',
  },
  $sage: {
    '--base': 'token(colors.$sage.9)',
    '--solid': 'token(colors.$sage.10)',
    '--bold': 'token(colors.$sage.11)',
    '--contrast': 'token(colors.$sage.11)',
    '--bg': 'token(colors.$sage.2)',
    '--subtle': 'token(colors.$sage.3)',
    '--normal': 'token(colors.$sage.4)',
    '--text': 'token(colors.$sage.text)',
  },
  $olive: {
    '--base': 'token(colors.$olive.9)',
    '--solid': 'token(colors.$olive.10)',
    '--bold': 'token(colors.$olive.11)',
    '--contrast': 'token(colors.$olive.11)',
    '--bg': 'token(colors.$olive.2)',
    '--subtle': 'token(colors.$olive.3)',
    '--normal': 'token(colors.$olive.4)',
    '--text': 'token(colors.$olive.text)',
  },
  $sand: {
    '--base': 'token(colors.$sand.9)',
    '--solid': 'token(colors.$sand.10)',
    '--bold': 'token(colors.$sand.11)',
    '--contrast': 'token(colors.$sand.11)',
    '--bg': 'token(colors.$sand.2)',
    '--subtle': 'token(colors.$sand.3)',
    '--normal': 'token(colors.$sand.4)',
    '--text': 'token(colors.$sand.text)',
  },
}

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
  backgroundColor: '$transparent',
  border: 'transparent solid 2px',
  width: 'fit-content; width: -moz-fit-content',
  _motionReduce: { transition: 'none' },
}

const buttonVariants = {
  variants: {
    variant: mainVariants,
    destructive: destructiveVariants,
    color: buttonColors,
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
  },
  ...buttonVariants,
  defaultVariants: {
    variant: 'outline',
    destructive: false,
    size: 'default',
  },
})

type ButtonVariants = RecipeVariantProps<typeof button>
const Base = component(DEFAULT_TAG, 'c-button')

/**
 * Button component
 */
export const Button: PolyCComponent<typeof DEFAULT_TAG, ButtonVariants> =
  styled(Base, button)
Button.displayName = 'Button'

//// IconButton

const iconSizeVariants = {
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
    color: buttonColors,
    size: iconSizeVariants,
  },
}

const iconButton = cva({
  base: {
    ...buttonVariables,
    ...buttonBaseStyles,
    ...buttonInteractionStyles,
  },
  ...iconButtonVariants,
  defaultVariants: {
    variant: 'outline',
    destructive: false,
    size: 'default',
  },
})

export const StyledIconButton = styled(DEFAULT_TAG, iconButton)

type IconButtonVariants = RecipeVariantProps<typeof iconButton>
type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'size'>
type StyledIconButtonProps = IconButtonVariants & {
  className?: string
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
