import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { AsProps, CSSProps, VariantProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { IconButton } from '../IconButton'
import { Close } from '../Icons'

const DEFAULT_TAG = 'span'

const StyledChip = styled(DEFAULT_TAG, {
  $$background: '$colors$grey2',
  $$backgroundHover: '$colors$grey3',
  $$$main: '$colors$grey9',
  $$focus: '$colors$grey7',
  $$active: '$colors$grey9',

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
  '&:disabled': {
    backgroundColor: '$grey2',
    pointerEvents: 'none',
    color: '$grey7',
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  // Custom
  borderRadius: '$pill',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',
  width: 'fit-content; width: -moz-fit-content',
  backgroundColor: '$$background',
  color: '$$main',

  [`& ${IconButton}`]: {
    color: 'inherit !important',
    borderRadius: '$pill',
  },

  variants: {
    size: {
      small: {
        height: '$4',
        px: '$2',
        fontSize: '$-2',

        [`& ${IconButton}`]: {
          size: '$4',
          mr: '-$2',
          [`& > svg`]: {
            size: '$3',
          },
        },
      },
      default: {
        height: '$6',
        px: '$3',
        fontSize: '$1',
        [`& ${IconButton}`]: {
          mr: '-$3',
          size: '$6',
          [`& > svg`]: {
            size: '$5',
          },
        },
      },
    },
    variant: {
      grey: {
        $$background: '$colors$grey2',
        $$backgroundHover: '$colors$grey3',
        $$main: '$colors$grey9',
        $$focus: '$colors$grey7',
        $$active: '$colors$grey9',
      },
      ghost: {
        $$background: '$colors$transparency2',
        $$backgroundHover: '$colors$transparency3',
        $$main: '$colors$text',
        $$focus: '$colors$transparency7',
        $$active: '$colors$transparency9',
      },
      brand: {
        $$background: '$colors$brand',
        $$backgroundHover: '$colors$brandHighlight',
        $$main: '$colors$brandContrast',
        $$focus: '$colors$brandHighlight',
        $$active: '$colors$brandActive',
      },
      primary: {
        $$background: '$colors$primary2',
        $$backgroundHover: '$colors$primary3',
        $$main: '$colors$primary9',
        $$focus: '$colors$brandHighlight',
        $$active: '$colors$primary9',
      },
      error: {
        $$background: '$colors$error2',
        $$backgroundHover: '$colors$error3',
        $$main: '$colors$error9',
        $$focus: '$colors$error7',
        $$active: '$colors$error9',
      },
      info: {
        $$background: '$colors$info2',
        $$backgroundHover: '$colors$info3',
        $$main: '$colors$info9',
        $$focus: '$colors$info7',
        $$active: '$colors$info9',
      },
      success: {
        $$background: '$colors$success2',
        $$backgroundHover: '$colors$success3',
        $$main: '$colors$success9',
        $$focus: '$colors$success7',
        $$active: '$colors$success9',
      },
      warning: {
        $$background: '$colors$warning2',
        $$backgroundHover: '$colors$warning3',
        $$main: '$colors$warning9',
        $$focus: '$colors$warning7',
        $$active: '$colors$warning9',
      },
    },
    interactive: {
      true: {
        cursor: 'pointer',
        '@motion': {
          transition: 'background 0.5s',
        },
        backgroundPosition: 'center',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $$focus, 0 0 0 1px $$focus',
        },
        '@hover': {
          '&:hover': {
            background:
              '$$backgroundHover radial-gradient(circle, transparent 1%, $$backgroundHover 1%) center/15000%',
          },
        },
        '&:active': {
          backgroundColor: '$$active',
          backgroundSize: '100%',
          '@motion': {
            transition: 'background 0s',
          },
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$$active',
          },
      },
    },
  },

  defaultVariants: {
    size: 'default',
    variant: 'grey',
  },
})

type ChipVariants = VariantProps<typeof StyledChip>
type ChipProps = ComponentProps<typeof DEFAULT_TAG> &
  AsProps &
  CSSProps &
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
Chip.toString = () => `.${StyledChip.className}`
