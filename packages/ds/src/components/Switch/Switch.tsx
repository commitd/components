'use client'
import {
  RecipeVariantProps,
  SystemStyleObject,
  css,
  cva,
  cx,
  styled,
} from '@committed/ss'
import { Root, Thumb } from '@radix-ui/react-switch'
import { ColorPaletteProps, component, forwardRefExtend } from '../../utils'

const SWITCH_CLASS = 'c-switch'
const SWITCH_THUMB_CLASS = 'c-switch-thumb'

const StyledThumb = component(
  Thumb,
  SWITCH_THUMB_CLASS,
  css({
    '--size': '20px',
    '--border': 'token(colors.$neutral)',
    '--background': 'token(colors.$surface.solid)',

    position: 'absolute',
    left: 0,
    size: 'var(--size)',
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
      transform: 'translateX(calc(var(--width) - var(--size)))',
    },
  }),
)

const hover = {
  [`& .${SWITCH_THUMB_CLASS}`]: {
    '--background': 'var(--thumbBackgroundHighlight) !important',
    _checked: {
      '--background': 'var(--thumbBackgroundHighlight) !important',
    },
  },
} as SystemStyleObject

const focus = hover

const base = {
  '--width': 'token(sizes.$6)',

  '--background': 'token(colors.colorPalette.4)',
  '--thumbBorder': 'token(colors.colorPalette.9)', // DEFAULT
  '--thumbBackgroundChecked': 'var(--thumbBorder)',
  '--thumbBackgroundHighlight': 'token(colors.colorPalette.5)',
  colorPalette: '$neutral',

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

  width: 'var(--width)',
  height: '$3',
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
})

const StyledSwitch = styled(Root, switchCva)

type SwitchProps = RecipeVariantProps<typeof switchCva> & ColorPaletteProps

export const Switch = forwardRefExtend<typeof Root, SwitchProps>(
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
