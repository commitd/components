import { RecipeVariantProps, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import React from 'react'

import { PolyCComponentProps, component, fixedForwardRef } from '../../utils'
import { IconButton } from '../Button'
import { Close } from '../Icons'

const DEFAULT_TAG = 'span' as const

const chip = cva({
  base: {
    '--background': 'token(colors.$neutral.2)',
    '--backgroundHover': 'token(colors.$neutral.3)',
    '--main': 'token(colors.$neutral.9)',
    '--focus': 'token(colors.$neutral.7)',
    '--active': 'token(colors.$neutral.9)',

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
    padding: '0',
    textDecoration: 'none',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    _disabled: {
      backgroundColor: '$neutral.2',
      pointerEvents: 'none',
      color: '$grey7',
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
        height: 4,
        px: 2,
        fontSize: '$-2',

        '& .c-icon-button': {
          height: 4,
          width: 4,
          mr: '-token(sizes.2)',
          [`& > svg`]: {
            height: '$3',
            width: '$3',
          },
        },
      },
      default: {
        height: 6,
        px: 3,
        fontSize: '$1',
        '& .c-icon-button': {
          mr: '-token(sizes.3)',
          height: '$6',
          width: '$6',
          [`& > svg`]: {
            height: '$5',
            width: '$5',
          },
        },
      },
    },
    variant: {
      neutral: {
        '--background': 'token(colors.$neutral2)',
        '--backgroundHover': 'token(colors.$neutral3)',
        '--main': 'token(colors.$neutral9)',
        '--focus': 'token(colors.$neutral7)',
        '--active': 'token(colors.$neutral9)',
      },
      ghost: {
        '--background': 'token(colors.$transparency.2)',
        '--backgroundHover': 'token(colors.$transparency.3)',
        '--main': 'token(colors.$text)',
        '--focus': 'token(colors.$transparency.7)',
        '--active': 'token(colors.$transparency.9)',
      },
      primary: {
        '--background': 'token(colors.$primary.2)',
        '--backgroundHover': 'token(colors.$primary.3)',
        '--main': 'token(colors.$primary.9)',
        '--focus': 'token(colors.$primary.10)',
        '--active': 'token(colors.$primary.9)',
      },
      secondary: {
        '--background': 'token(colors.$secondary.2)',
        '--backgroundHover': 'token(colors.$secondary.3)',
        '--main': 'token(colors.$secondary.9)',
        '--focus': 'token(colors.$secondary.10)',
        '--active': 'token(colors.$secondary.9)',
      },
      error: {
        '--background': 'token(colors.$error.2)',
        '--backgroundHover': 'token(colors.$error.3)',
        '--main': 'token(colors.$error.9)',
        '--focus': 'token(colors.$error.7)',
        '--active': 'token(colors.$error.9)',
      },
      info: {
        '--background': 'token(colors.$info.2)',
        '--backgroundHover': 'token(colors.$info.3)',
        '--main': 'token(colors.$info.9)',
        '--focus': 'token(colors.$info.7)',
        '--active': 'token(colors.$info.9)',
      },
      success: {
        '--background': 'token(colors.$success.2)',
        '--backgroundHover': 'token(colors.$success.3)',
        '--main': 'token(colors.$success.9)',
        '--focus': 'token(colors.$success.7)',
        '--active': 'token(colors.$success.9)',
      },
      warn: {
        '--background': 'token(colors.$warn.2)',
        '--backgroundHover': 'token(colors.$warn.3)',
        '--main': 'token(colors.$warn.9)',
        '--focus': 'token(colors.$warn.7)',
        '--active': 'token(colors.$warn.9)',
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
    variant: 'neutral',
  },
})

const Styled = styled(component(DEFAULT_TAG, 'c-chip'), chip)

type Variants = RecipeVariantProps<typeof chip>
type Props = Variants & {
  disabled?: boolean
  onClose?: () => void
} & PolyCComponentProps

/**
 * The `Chip` component can be used for small bits of information such as labels or attributes and can
 * optionally add actions to, say edit and delete.
 */
export const Chip = fixedForwardRef<typeof Styled, Props>(
  ({ onClose, children, size, ...props }, forwardedRef) => {
    const handleClose = (event: React.MouseEvent) => {
      // This seems overkill but with out all three the event
      // seems to get through to the chip.
      event.stopPropagation()
      event.nativeEvent.stopImmediatePropagation()
      event.preventDefault()
      onClose && onClose()
    }

    return (
      <Styled size={size} {...props} ref={forwardedRef}>
        {children}
        {onClose && (
          <IconButton
            as="span"
            size={size}
            role="button"
            aria-label="close"
            variant="tertiary"
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        )}
      </Styled>
    )
  },
)
Chip.displayName = 'Chip'
