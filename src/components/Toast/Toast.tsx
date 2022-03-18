import React, { ComponentProps, ElementRef, FC, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled, keyframes } from '../../stitches.config'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { Close } from '../Icons'
import { slate } from '@radix-ui/colors'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { IconButton } from '../IconButton'

const DEFAULT_TAG = 'div'

const StyledAlert = styled(DEFAULT_TAG, {
  // Reset
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  border: '1px solid',
  borderRadius: '$default',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  p: '$4',

  variants: {
    severity: {
      ghost: {
        backgroundColor: '$grey2',
        borderColor: '$grey7',
        color: '$grey12',
      },
      warning: {
        backgroundColor: '$warningBackground',
        borderColor: '$warningHighlight',
        color: '$warningHighlight',
      },
      info: {
        backgroundColor: '$infoBackground',
        borderColor: '$infoHighlight',
        color: '$infoHighlight',
      },
      success: {
        backgroundColor: '$successBackground',
        borderColor: '$successHighlight',
        color: '$successHighlight',
      },
      error: {
        backgroundColor: '$errorBackground',
        borderColor: '$errorHighlight',
        color: '$errorHighlight',
      },
    },
  },
})

type AlertVariants = VariantProps<typeof StyledAlert>
type AlertProps = AlertVariants & CSSProps & ComponentProps<typeof DEFAULT_TAG>

const Alert = forwardRef<ElementRef<typeof StyledAlert>, AlertProps>(
  (props, forwardedRef) => {
    return <StyledAlert {...props} ref={forwardedRef} />
  }
)
Alert.toString = () => `.${StyledAlert.className}`

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
})

const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in forwards`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out forwards`,
    },
  },
})

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  color: slate.slate12,
  fontSize: 15,
})

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: slate.slate11,
  fontSize: 13,
  lineHeight: 1.3,
})

const StyledClose = styled(ToastPrimitive.Close, {
  all: 'unset',
})

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
})

export const ToastClose = forwardRef<ElementRef<typeof StyledClose>>(
  (props, forwardedRef) => {
    return (
      <StyledClose {...props} ref={forwardedRef} aria-label="Close">
        <IconButton variant="tertiary">
          <Close />
        </IconButton>
      </StyledClose>
    )
  }
)

type AbstractToastProps = ComponentProps<typeof StyledToast> &
  ComponentProps<typeof StyledAction> & {
    title: string
    description: string
    close?: boolean
  }

/**
 *  Toast component.
 *
 * Displays a toast with information and optionally an action in the bottom right of a page.
 *
 * Based on [Radix Dropdown Menu](https://www.radix-ui.com/docs/primitives/components/toast).
 *
 * Toast can be closed by a timeout or by swiping right by default (these can be changed by `duration` and `swipeDirection` respectively).
 * Alternatively, they can be closed by an action button (implying addition effects) or by an close icon (`ToastClose`).
 *
 * Doesn't currently handle both close button and action button simultaneously instead separately.
 */
export const Toast = forwardRef<
  ElementRef<typeof StyledToast>,
  AbstractToastProps
>(({ title, description, altText, close, children, ...props }) => {
  return (
    <ToastProvider swipeDirection="right">
      <StyledToast {...props}>
        {title && <StyledTitle>{title}</StyledTitle>}
        <StyledDescription>{description}</StyledDescription>
        {close && <ToastClose />}
        {children && (
          <StyledAction asChild altText={altText}>
            {children}
          </StyledAction>
        )}
      </StyledToast>
      <StyledViewport />
    </ToastProvider>
  )
})

// Exports
export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = StyledViewport
export const ToastRoot = StyledToast
export const ToastTitle = StyledTitle
export const ToastDescription = StyledDescription
export const ToastAction = StyledAction
export const ToastCloseRoot = StyledClose
