import { RecipeVariantProps, css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SystemStyleObject } from '@committed/ss/types'
import { Root, Thumb } from '@radix-ui/react-switch'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { component } from '../../utils'

const SWITCH_CLASS = 'c-switch'
const SWITCH_THUMB_CLASS = 'c-switch-thumb'

const StyledThumb = component(
  Thumb,
  SWITCH_THUMB_CLASS,
  css({
    '--border': 'token(colors.$neutral)',
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

    _checked: {
      transform: 'translateX(14px)',
    },
  }),
)

const hover = {
  [`& .${SWITCH_THUMB_CLASS}`]: {
    '--background': 'var(--thumbBackgroundHighlight) !important',
    _checked: {
      '--background': 'var(--thumbBackgroundHighlight) !important',
      // '--background': 'var(--thumbBackgroundChecked) !important',
    },
  },
} as SystemStyleObject

const focus = hover

const base = {
  '--background': 'token(colors.$neutral.4)',
  '--thumbBorder': 'token(colors.$neutral)',
  '--thumbBackgroundChecked': 'var(--thumbBorder)',
  '--thumbBackgroundHighlight': 'token(colors.$neutral.5)',

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

    _checked: {
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

const switchCva = cva({
  base,
  variants: {
    color: {
      $primary: {
        '--background': 'token(colors.$primary.4)',
        '--thumbBorder': 'token(colors.$primary)',
        '--thumbBackgroundChecked': 'var(--thumbBorder)',
        '--thumbBackgroundHighlight': 'token(colors.$primary.5)',
      },
      $secondary: {
        '--background': 'token(colors.$secondary.4)',
        '--thumbBorder': 'token(colors.$secondary)',
        '--thumbBackgroundChecked': 'var(--thumbBorder)',
        '--thumbBackgroundHighlight': 'token(colors.$secondary.5)',
      },
      $info: {
        '--background': 'token(colors.$info.4)',
        '--thumbBorder': 'token(colors.$info)',
        '--thumbBackgroundChecked': 'var(--thumbBorder)',
        '--thumbBackgroundHighlight': 'token(colors.$info.5)',
      },
      $success: {
        '--background': 'token(colors.$success.4)',
        '--thumbBorder': 'token(colors.$success)',
        '--thumbBackgroundChecked': 'var(--thumbBorder)',
        '--thumbBackgroundHighlight': 'token(colors.$success.5)',
      },
      $warn: {
        '--background': 'token(colors.$warn.4)',
        '--thumbBorder': 'token(colors.$warn)',
        '--thumbBackgroundChecked': 'var(--thumbBorder)',
        '--thumbBackgroundHighlight': 'token(colors.$warn.5)',
      },
      $error: {
        '--background': 'token(colors.$error.4)',
        '--thumbBorder': 'token(colors.$error)',
        '--thumbBackgroundChecked': 'var(--thumbBorder)',
        '--thumbBackgroundHighlight': 'token(colors.$error.5)',
      },
    },
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
  ),
)
Switch.displayName = 'Switch'
