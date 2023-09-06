import { RecipeVariantProps, css, cva, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { component, forwardRefExtend } from '../../utils'
import { IconButton } from '../Button'
import { Close } from '../Icons'

const TOAST_CLASS = 'c-toast'
const TOAST_VIEWPORT_CLASS = 'c-toast-viewport'
const TOAST_TITLE_CLASS = 'c-toast-title'
const TOAST_DESCRIPTION_CLASS = 'c-toast-description'
const TOAST_CLOSE_CLASS = 'c-toast-close'
const TOAST_ACTION_CLASS = 'c-toast-action'

const SeverityColor: Record<
  string,
  ComponentProps<typeof IconButton>['color']
> = {
  default: '$neutral',
  warning: '$warn',
  info: '$info',
  success: '$success',
  error: '$error',
}

const StyledViewport = component(
  ToastPrimitive.Viewport,
  TOAST_VIEWPORT_CLASS,
  css({
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    padding: '$5',
    gap: '$3',
    width: '$13',
    listStyle: 'none',
    zIndex: '$toast',
  }),
)

const StyledTitle = component(
  ToastPrimitive.Title,
  TOAST_TITLE_CLASS,
  css({
    gridArea: 'title',
    marginBottom: '$2',
    color: 'inherit',
    fontSize: '$1',
  }),
)

const StyledDescription = component(
  ToastPrimitive.Description,
  TOAST_DESCRIPTION_CLASS,
  css({
    gridArea: 'description',
    margin: 0,
    color: 'inherit',
    fontSize: '$-1',
  }),
)

const toast = cva({
  base: {
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

    _motionReduce: { transition: 'none' },
    _motionSafe: {
      '&[data-state="open"]': {
        animation: `slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
      },
      '&[data-state="closed"]': {
        animation: `hide 100ms ease-in forwards`,
      },
      '&[data-swipe="move"]': {
        transform: 'translateX(var(--radix-toast-swipe-move-x))',
      },
      '&[data-swipe="cancel"]': {
        transform: 'translateX(0)',
        transition: 'transform 200ms ease-out',
      },
      '&[data-swipe="end"]': {
        animation: `swipeOut 100ms ease-out forwards`,
      },
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
        backgroundColor: '$warn.bg',
        borderColor: '$warn.border',
        color: '$warn.text.low',
      },
      info: {
        backgroundColor: '$info.bg',
        borderColor: '$info.border',
        color: '$info.text.low',
      },
      success: {
        backgroundColor: '$success.bg',
        borderColor: '$success.border',
        color: '$success.text.low',
      },
      error: {
        backgroundColor: '$error.bg',
        borderColor: '$error.border',
        color: '$error.text.low',
      },
    },
  },

  defaultVariants: {
    severity: 'default',
  },
})

const StyledToast = styled(ToastPrimitive.Root, toast)

const StyledClose = component(
  ToastPrimitive.Close,
  TOAST_CLOSE_CLASS,
  css({
    all: 'unset',
    gridArea: 'close',
    marginRight: '-$4',
    marginTop: '-$6',
  }),
)

const StyledAction = component(
  ToastPrimitive.Action,
  TOAST_ACTION_CLASS,
  css({
    gridArea: 'action',
  }),
)

export const ToastClose = forwardRefExtend<
  typeof StyledClose,
  {
    severity?: keyof typeof SeverityColor
  }
>(({ severity = 'default', ...props }, forwardedRef) => {
  return (
    <StyledClose {...props} ref={forwardedRef} aria-label="Close">
      <IconButton color={SeverityColor[severity]} size="small" variant="text">
        <Close />
      </IconButton>
    </StyledClose>
  )
})

type ToastVariants = RecipeVariantProps<typeof toast>
type StyledToastProps = ToastVariants & ComponentProps<typeof StyledToast>

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
      className,
      children,
      ...props
    },
    forwardedRef,
  ) => (
    <StyledToast
      className={cx(TOAST_CLASS, className)}
      severity={severity}
      {...props}
      ref={forwardedRef}
    >
      {title && <StyledTitle>{title}</StyledTitle>}
      {description && <StyledDescription>{description}</StyledDescription>}
      {close && <ToastClose severity={severity} />}
      {children && (
        <StyledAction asChild altText={altText}>
          {children}
        </StyledAction>
      )}
    </StyledToast>
  ),
)

// Exports
export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = StyledViewport
export const ToastRoot = StyledToast
export const ToastTitle = StyledTitle
export const ToastDescription = StyledDescription
export const ToastAction = StyledAction
export const ToastCloseRoot = StyledClose

ToastProvider.displayName = 'ToastProvider'
ToastViewport.displayName = 'ToastViewport'
ToastRoot.displayName = 'ToastRoot'
ToastTitle.displayName = 'ToastTitle'
ToastDescription.displayName = 'ToastDescription'
ToastAction.displayName = 'ToastAction'
ToastCloseRoot.displayName = 'ToastCloseRoot'
