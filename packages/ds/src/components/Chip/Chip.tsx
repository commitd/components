import { cva, styled } from '@committed/ds-ss'

import { useMemo } from 'react'
import {
  CComponent,
  ColorPaletteProps,
  component,
  forwardRefExtend,
} from '../../utils'
import { IconButton } from '../Button'
import { Close } from '../Icons'

const DEFAULT_TAG = 'span' as const

const chip = cva({
  base: {
    colorPalette: '$neutral',
    '--background': 'token(colors.colorPalette.2)',
    '--backgroundHover': 'token(colors.colorPalette.3)',
    '--main': 'token(colors.colorPalette.11)',
    '--focus': 'token(colors.colorPalette.11)',
    '--active': 'token(colors.colorPalette.9)',

    // Reset
    alignItems: 'center',
    appearance: 'none',
    borderWidth: '0',
    boxSizing: 'border-box',
    display: 'inline-flex',
    flexShrink: 0,
    fontFamily: 'inherit',
    justifyContent: 'center',
    lineHeight: '1',
    verticalAlign: 'middle',
    outline: 'none',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    _disabled: {
      backgroundColor: '$neutral.2',
      pointerEvents: 'none',
      color: '$neutral.7',
    },
    _before: {
      content: '""',
    },
    _after: {
      content: '""',
    },

    // Custom
    borderRadius: '$pill',
    whiteSpace: 'nowrap',
    fontVariantNumeric: 'tabular-nums',
    width: 'fit-content; width: -moz-fit-content',
    backgroundColor: 'var(--background)',
    color: 'var(--main)',

    '& .c-icon-button': {
      color: 'inherit !important',
      borderRadius: '$pill',
    },
  },

  variants: {
    size: {
      small: {
        height: '$4',
        px: '$2',
        fontSize: '$-2',

        '& .c-icon-button': {
          height: '$4',
          width: '$4',
          mr: 'calc(-1 * token(sizes.$2))',
          [`& > svg`]: {
            height: '$3',
            width: '$3',
          },
        },
      },
      default: {
        height: '$6',
        px: '$3',
        fontSize: '$1',
        '& .c-icon-button': {
          mr: 'calc(-1 * token(sizes.$3))',
          height: '$6',
          width: '$6',
          [`& > svg`]: {
            height: '$5',
            width: '$5',
          },
        },
      },
    },
    interactive: {
      true: {
        cursor: 'pointer',
        _motionReduce: { transition: 'none' },
        _motionSafe: {
          transition: 'background 0.5s',
        },
        backgroundPosition: 'center',
        _focus: {
          boxShadow: 'inset 0 0 0 1px var(--focus), 0 0 0 1px var(--focus)',
        },
        _hover: {
          background:
            'var(--backgroundHover) radial-gradient(circle, transparent 1%, var(--backgroundHover) 1%) center/15000%',
        },
        _active: {
          backgroundColor: 'var(--active)',
          backgroundSize: '100%',
          _motionReduce: { transition: 'none' },
          _motionSafe: {
            transition: 'background 0s',
          },
          '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
            {
              backgroundColor: 'var(--active)',
            },
        },
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const Styled = styled(component(DEFAULT_TAG, 'c-chip'), chip)

// Not sure why this confuses typescript
// type AllVariants = RecipeVariantProps<typeof chip>
// type Variants = Omit<AllVariants, 'interactive'>
type Variants = {
  size?: 'small' | 'default'
}
type Props = Variants &
  ColorPaletteProps & {
    closable?: boolean
    disabled?: boolean
    interactive?: boolean
    onClick?: () => void
  }

/**
 * The `Chip` component can be used for small bits of information such as labels or attributes and can
 * optionally add actions to, say edit and delete.
 */
export const Chip: CComponent<typeof DEFAULT_TAG, Props> = forwardRefExtend<
  typeof Styled,
  Props
>(
  (
    { onClick, colorPalette, children, closable, interactive, size, ...props },
    forwardedRef,
  ) => {
    const additionalProps = useMemo(() => {
      if ((onClick || interactive) && !closable) {
        return {
          role: 'button',
          tabIndex: 0,
          onClick: onClick,
        }
      }
    }, [onClick, closable, interactive])

    return (
      <Styled
        interactive={(!!onClick || interactive) && !closable}
        size={size}
        colorPalette={colorPalette}
        {...additionalProps}
        {...props}
        ref={forwardedRef}
      >
        {children}
        {onClick && closable && (
          <IconButton
            size={size}
            colorPalette={colorPalette}
            role="button"
            aria-label="close"
            variant="text"
            onClick={onClick}
          >
            <Close />
          </IconButton>
        )}
      </Styled>
    )
  },
)
Chip.displayName = 'Chip'
