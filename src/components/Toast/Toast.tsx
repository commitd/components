import * as ToastPrimitive from '@radix-ui/react-toast'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps, VariantProps } from '../../stitches.config'
import { keyframes, styled } from '../../stitches.config'
import { IconButton } from '../IconButton'
import { Close } from '../Icons'

const VIEWPORT_PADDING = '$space$5'

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}))` },
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
  boxShadow: '$3',
  padding: '$4',
  display: 'grid',
  gridTemplateAreas: '"title close" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
  alignItems: 'center',

  '@motion': {
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

  defaultVariants: {
    severity: 'default',
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
      <StyledClose {...props} asChild ref={forwardedRef} aria-label="Close">
        <IconButton size="small" variant="tertiary">
          <Close />
        </IconButton>
      </StyledClose>
    )
  }
)

type ToastVariants = VariantProps<typeof StyledToast>
type StyledToastProps = ToastVariants &
  CSSProps &
  ComponentProps<typeof StyledToast>

export type ToastProps = StyledToastProps & {
  title: string
  description?: string
  close?: boolean
  altText?: string
}

/**
 * Toast component.
 *
 * Displays a toast with information and optionally an action in the bottom right of a page.
 *
 * Based on [Radix Toast](https://www.radix-ui.com/docs/primitives/components/toast).
 *
 * Toasts can be used directly with your own control mechanism or you can use the managed toasts via the `useToast` hook.
 *
 * Toast can be closed by a timeout or by swiping right by default (these can be changed by `duration` and `swipeDirection` respectively in the `ToastProvider` which is included in the `ComponentsProvider`).
 * Alternatively, they can be closed by an action button (implying addition effects) or by an close icon (`ToastClose`).
 *
 * Doesn't currently nicely handle both close button and action button simultaneously, instead only separately.
 */
export const Toast = forwardRef<ElementRef<typeof StyledToast>, ToastProps>(
  (
    {
      title,
      description,
      altText = '',
      close,
      severity = 'default',
      children,
      ...props
    },
    forwardedRef
  ) => (
    <StyledToast severity={severity} {...props} ref={forwardedRef}>
      {title && <StyledTitle>{title}</StyledTitle>}
      {description && <StyledDescription>{description}</StyledDescription>}
      {close && <ToastClose />}
      {children && (
        <StyledAction asChild altText={altText}>
          {children}
        </StyledAction>
      )}
    </StyledToast>
  )
)

// Exports
export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = StyledViewport
export const ToastRoot = StyledToast
export const ToastTitle = StyledTitle
export const ToastDescription = StyledDescription
export const ToastAction = StyledAction
export const ToastCloseRoot = StyledClose
