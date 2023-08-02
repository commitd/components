import { RecipeVariantProps, cva } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import React, { ElementRef, forwardRef } from 'react'
import { PolymorphicProps, poly } from '../../packages/ds/src/components/Base'
import { IconButton } from '../IconButton'
import { Close } from '../Icons'

const DEFAULT_TAG = 'span' as const

const chip = cva({
  base: {
    '--background': 'token(colors.$grey2)',
    '--backgroundHover': 'token(colors.$grey3)',
    '--main': 'token(colors.$grey9)',
    '--focus': 'token(colors.$grey7)',
    '--active': 'token(colors.$grey9)',

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
      backgroundColor: '$grey2',
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
      grey: {
        '--background': 'token(colors.$grey2)',
        '--backgroundHover': 'token(colors.$grey3)',
        '--main': 'token(colors.$grey9)',
        '--focus': 'token(colors.$grey7)',
        '--active': 'token(colors.$grey9)',
      },
      ghost: {
        '--background': 'token(colors.$transparency2)',
        '--backgroundHover': 'token(colors.$transparency3)',
        '--main': 'token(colors.$text)',
        '--focus': 'token(colors.$transparency7)',
        '--active': 'token(colors.$transparency9)',
      },
      brand: {
        '--background': 'token(colors.$brand)',
        '--backgroundHover': 'token(colors.$brandHighlight)',
        '--main': 'token(colors.$brandContrast)',
        '--focus': 'token(colors.$brandHighlight)',
        '--active': 'token(colors.$brandActive)',
      },
      primary: {
        '--background': 'token(colors.$primary2)',
        '--backgroundHover': 'token(colors.$primary3)',
        '--main': 'token(colors.$primary9)',
        '--focus': 'token(colors.$brandHighlight)',
        '--active': 'token(colors.$primary9)',
      },
      error: {
        '--background': 'token(colors.$error2)',
        '--backgroundHover': 'token(colors.$error3)',
        '--main': 'token(colors.$error9)',
        '--focus': 'token(colors.$error7)',
        '--active': 'token(colors.$error9)',
      },
      info: {
        '--background': 'token(colors.$info2)',
        '--backgroundHover': 'token(colors.$info3)',
        '--main': 'token(colors.$info9)',
        '--focus': 'token(colors.$info7)',
        '--active': 'token(colors.$info9)',
      },
      success: {
        '--background': 'token(colors.$success2)',
        '--backgroundHover': 'token(colors.$success3)',
        '--main': 'token(colors.$success9)',
        '--focus': 'token(colors.$success7)',
        '--active': 'token(colors.$success9)',
      },
      warning: {
        '--background': 'token(colors.$warning2)',
        '--backgroundHover': 'token(colors.$warning3)',
        '--main': 'token(colors.$warning9)',
        '--focus': 'token(colors.$warning7)',
        '--active': 'token(colors.$warning9)',
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
    variant: 'grey',
  },
})

const StyledChip = styled(poly(DEFAULT_TAG), chip)

type ChipVariants = RecipeVariantProps<typeof chip>
type ChipProps = PolymorphicProps<typeof DEFAULT_TAG> &
  ChipVariants & {
    disabled?: boolean
    onClose?: () => void
  }

/**
 * The `Chip` component can be used for small bits of information such as labels or attributes and can
 * optionally add actions to, say edit and delete.
 */
export const Chip = forwardRef<ElementRef<typeof StyledChip>, ChipProps>(
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
      <StyledChip size={size} {...props} ref={forwardedRef}>
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
      </StyledChip>
    )
  }
)
Chip.displayName = 'Chip'
