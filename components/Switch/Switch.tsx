import { RecipeVariantProps, css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { Root, Thumb } from '@radix-ui/react-switch'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { withClasses } from '../../utils'

const SWITCH_CLASS = 'c-switch'
const SWITCH_THUMB_CLASS = 'c-switch-thumb'

const StyledThumb = withClasses(
  Thumb,
  SWITCH_THUMB_CLASS,
  css({
    '--border': 'token(colors.$default)',
    '--background': 'token(colors.$paper)',

    position: 'absolute',
    left: 0,
    width: 20,
    height: 20,
    backgroundColor: 'var(--background)',
    borderRadius: '$round',
    boxShadow: '$1',
    willChange: 'transform',
    border: 'solid 2px',
    borderColor: 'var(--border)',
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
    },

    '&[data-state="checked"]': {
      transform: 'translateX(14px)',
    },
  })
)

const hover = {
  [`& .${SWITCH_THUMB_CLASS}`]: {
    '--background': 'var(--thumbBackgroundHighlight)',
  },
} as SystemStyleObject

const focus = hover

const base = {
  '--background': 'token(colors.$grey4)',
  '--thumbBorder': 'token(colors.$default)',
  '--thumbBackgroundChecked': 'token(colors.$paper)',
  '--thumbBackgroundHighlight': 'token(colors.$grey4)',

  // Reset
  alignItems: 'center',
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  border: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  width: '34px',
  height: '14px',
  backgroundColor: 'var(--background)',
  borderRadius: '$pill',
  position: 'relative',

  [`& .${SWITCH_THUMB_CLASS}`]: {
    '--border': 'var(--thumbBorder)',

    '&[data-state="checked"]': {
      '--background': 'var(--thumbBackgroundChecked)',
    },
  },

  _focus: focus,
  _hover: hover,

  _disabled: {
    pointerEvents: 'none',
    opacity: 0.3,
  },
} as SystemStyleObject

const brand = {
  '--background': 'token(colors.$brandLowlight)',
  '--thumbBorder': 'token(colors.$brandYellow)',
  '--thumbBackgroundChecked': 'token(colors.$brandYellow)',
  '--thumbBackgroundHighlight': 'token(colors.$brandYellow)',
  [`& .${SWITCH_THUMB_CLASS}`]: {
    '--border': 'var(--thumbBorder)',
    '--background': 'token(colors.$brand)',

    '&[data-state="checked"]': {
      '--background': 'var(--thumbBackgroundChecked)',
    },
  },
} as SystemStyleObject

const switchCva = cva({
  base,
  variants: {
    variant: {
      primary: {
        '--background': 'token(colors.$brandYellow6)',
        '--thumbBorder': 'token(colors.$primary)',
        '--thumbBackgroundChecked': 'var(--thumbBorder)',
        '--thumbBackgroundHighlight': 'token(colors.$primaryHighlight)',
      },
      secondary: {},
      brand,
    },
    destructive: {
      false: {},
      true: {
        '--background': 'token(colors.$errorBackground)',
        '--thumbBorder': 'token(colors.$error)',
        '--thumbBackgroundHighlight': 'token(colors.$errorLowlight)',
      },
    },
  },
  defaultVariants: {
    variant: 'secondary',
  },
})

const StyledSwitch = styled(Root, switchCva)

type SwitchVariants = RecipeVariantProps<typeof switchCva>
type SwitchRootProps = ComponentProps<typeof Root>
type SwitchProps = SwitchRootProps & SwitchVariants

export const Switch = forwardRef<ElementRef<typeof StyledSwitch>, SwitchProps>(
  ({ className, ...props }, forwardedRef) => (
    <StyledSwitch
      className={cx(SWITCH_CLASS, className)}
      {...props}
      ref={forwardedRef}
    >
      <StyledThumb />
    </StyledSwitch>
  )
)
Switch.displayName = 'Switch'
