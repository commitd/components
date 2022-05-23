import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-dialog'
import React, { ComponentProps, ElementRef, FC, forwardRef } from 'react'
import type { CSSProps } from '../../stitches.config'
import { CSS, styled } from '../../stitches.config'
import { ConditionalWrapper } from '../../utils'
import { Heading } from '../Heading'
import { IconButton } from '../IconButton'
import { Close as Icon } from '../Icons'
import { overlayAnimationStyles, overlayStyles } from '../Overlay'
import { paperStyles } from '../Paper'
import { Text } from '../Text'

export const StyledOverlay = styled(
  Overlay,
  overlayStyles,
  overlayAnimationStyles,
  {
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  }
)

export const StyledContent = styled(
  Content,
  paperStyles,
  {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 200,
    maxWidth: 'fit-content',
    maxHeight: '85vh',
    padding: 20,
    marginTop: '-5vh',

    boxShadow: '$2',

    display: 'flex',
    flexDirection: 'column',

    '&:focus': {
      outline: 'none',
    },
  },
  overlayAnimationStyles
)

// Could be exported for reuse but currently causes typing issue
const StyledIconButton = styled(IconButton, {
  position: 'fixed',
  right: '$1',
  top: '$1',
})

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
export const Dialog = Root

type DialogContentProps = Omit<ComponentProps<typeof Content>, 'asChild'> &
  CSSProps & {
    /** Closable, add a standard close icon. */
    defaultClose?: boolean
    /** Modify the default styling of the overlay */
    overlayCss?: CSS
    /** By default, portals your overlay and content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const DialogContent = forwardRef<
  ElementRef<typeof StyledContent>,
  DialogContentProps
>(
  (
    {
      children,
      overlayCss,
      container,
      portalled = true,
      defaultClose = true,
      ...props
    },
    forwardedRef
  ) => (
    <ConditionalWrapper
      condition={portalled}
      wrapper={(child) => <Portal container={container}>{child}</Portal>}
    >
      <>
        <StyledOverlay css={overlayCss} />
        <StyledContent {...props} ref={forwardedRef}>
          {defaultClose && (
            <Close asChild>
              <StyledIconButton aria-label="close" variant="tertiary">
                <Icon title="Close" />
              </StyledIconButton>
            </Close>
          )}
          {children}
        </StyledContent>
      </>
    </ConditionalWrapper>
  )
)
DialogContent.toString = () => `.${StyledContent.className}`

export const DialogTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  Omit<ComponentProps<typeof Trigger>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Trigger asChild {...props} ref={forwardedRef}>
    {children}
  </Trigger>
))

export const DialogClose = forwardRef<
  ElementRef<typeof Close>,
  Omit<ComponentProps<typeof Close>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Close asChild {...props} ref={forwardedRef}>
    {children}
  </Close>
))

export const DialogTitle: FC<ComponentProps<typeof Heading>> = ({
  css,
  ...props
}) => (
  <Title>
    <Heading
      as="div"
      variant="h6"
      css={{ mb: '$4', ...css } as CSS}
      {...props}
    />
  </Title>
)

export const DialogDescription: FC<ComponentProps<typeof Text>> = (props) => (
  <Description>
    <Text {...props} />
  </Description>
)
