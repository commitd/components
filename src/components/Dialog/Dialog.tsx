import { Close, Content, Overlay, Root, Trigger } from '@radix-ui/react-dialog'
import * as Polymorphic from '@radix-ui/react-polymorphic'
import { Slot } from '@radix-ui/react-slot'
import React, { FC, forwardRef } from 'react'
import { CSS, styled, keyframes } from 'stitches.config'
import { IconButton } from '../IconButton'
import { Close as Icon } from '../Icons'

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
})

const fadeOut = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const StyledOverlay = styled(Overlay, {
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: '$transparency3',
  '&[data-state=open]': {
    animation: `${fadeIn} 200ms ease-out`,
  },
  '&[data-state=closed]': {
    animation: `${fadeOut} 200ms ease-out`,
  },
})

const StyledContent = styled(Content, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxWidth: 'fit-content',
  maxHeight: '85vh',
  padding: 20,
  marginTop: '-5vh',
  borderRadius: '$default',
  backgroundColor: '$paper',
  color: '$text',

  display: 'flex',
  flexDirection: 'column',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state=open]': {
    animation: `${fadeIn} 200ms ease-out`,
  },
  '&[data-state=closed]': {
    animation: `${fadeOut} 200ms ease-out`,
  },
})

const StyledIconButton = styled(IconButton, {
  position: 'fixed',
  right: '$1',
  top: '$1',
})

type DialogProps = React.ComponentProps<typeof Root> & {
  /** Modify the default styling of the overlay */
  overlayCss?: CSS
}

/**
 * The Dialog component can be used to isolate the user from the main window by overlaying
 * another window that requires the users attention.
 *
 * Its appearance is controlled with the `open` and `onOpenChange` props or by providing a
 * `DialogTrigger` and (optionally) a `DialogClose` inside the main `Dialog`.
 * The content should be wrapped in a `DialogContent`.
 *
 * This can be the basis for custom dialogs required in your application.
 * Some common use cases are covered with other Components.
 *
 * Based on [Radix Dialog](https://radix-ui.com/primitives/docs/components/dialog).
 */
export const Dialog: FC<DialogProps> = ({ children, overlayCss, ...props }) => {
  return (
    <Root {...props}>
      <StyledOverlay css={overlayCss} />
      {children}
    </Root>
  )
}

type DialogContentCSSProp = { css?: CSS }
type DialogContentOwnProps = Polymorphic.OwnProps<typeof Content> &
  DialogContentCSSProp & {
    /** Closable, add a standard close icon. */
    defaultClose?: boolean
  }

type DialogContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Content>,
  DialogContentOwnProps
>

export const DialogContent = forwardRef(
  ({ children, defaultClose = true, css, ...props }, forwardedRef) => (
    <StyledContent css={css as CSS} {...props} ref={forwardedRef}>
      {defaultClose && (
        <Close as={StyledIconButton} variant="tertiary">
          <Icon title="Close" />
        </Close>
      )}
      {children}
    </StyledContent>
  )
) as DialogContentComponent

type DialogTriggerCSSProp = { css?: CSS }
type DialogTriggerOwnProps = Polymorphic.OwnProps<typeof Trigger> &
  DialogTriggerCSSProp

type DialogTriggerComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Trigger>,
  DialogTriggerOwnProps
>

export const DialogTrigger = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Trigger as={Slot} {...props} ref={forwardedRef}>
      {children}
    </Trigger>
  )
) as DialogTriggerComponent

export const DialogClose = Close
