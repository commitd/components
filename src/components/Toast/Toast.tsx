import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { styled, keyframes } from '../../stitches.config'
import { Close } from '../Icons'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { IconButton } from '../IconButton'

const VIEWPORT_PADDING = '$5'

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
  bottom: '$0',
  right: '$0',
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: '$3',
  width: '$13',
  listStyle: 'none',
  zIndex: '$toast',
})

const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: '$paper',
  border: '1px solid',
  borderRadius: '$default',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$4',
  display: 'grid',
  gridTemplateAreas: '"title close" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
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

  variants: {
    severity: {
      default: {
        backgroundColor: '$paper',
        borderColor: 'transparent',
        color: '$text',
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

const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: '$2',
  color: 'inherit',
  fontSize: '$1',
})

const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: '$0',
  color: 'inherit',
  fontSize: '$-1',
})

const StyledClose = styled(ToastPrimitive.Close, {
  all: 'unset',
  gridArea: 'close',
  marginRight: '-$4',
  marginTop: '-$6',
})

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
})

export const ToastClose = forwardRef<ElementRef<typeof StyledClose>>(
  (props, forwardedRef) => {
    return (
      <StyledClose {...props} ref={forwardedRef} aria-label="Close">
        <IconButton size="small" variant="tertiary">
          <Close />
        </IconButton>
      </StyledClose>
    )
  }
)

type ToastVariants = VariantProps<typeof StyledToast>
type ToastProps = ToastVariants & CSSProps & ComponentProps<typeof StyledToast>

type AbstractToastProps = ToastProps &
  ComponentProps<typeof StyledAction> & {
    title: string
    description?: string
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
 * Doesn't currently nicely handle both close button and action button simultaneously, instead only separately.
 */
export const Toast = forwardRef<
  ElementRef<typeof StyledToast>,
  AbstractToastProps
>(
  ({
    title,
    description,
    altText,
    close,
    severity = 'default',
    children,
    ...props
  }) => {
    return (
      <ToastProvider swipeDirection="right">
        <StyledToast severity={severity} {...props}>
          <StyledTitle>{title}</StyledTitle>
          {description && <StyledDescription>{description}</StyledDescription>}
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
  }
)

// Exports
export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = StyledViewport
export const ToastRoot = StyledToast
export const ToastTitle = StyledTitle
export const ToastDescription = StyledDescription
export const ToastAction = StyledAction
export const ToastCloseRoot = StyledClose
