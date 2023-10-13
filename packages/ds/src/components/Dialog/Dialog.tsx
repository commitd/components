'use client'
import { SystemStyleObject, css, cva, cx, styled } from '@committed/ss'
import { Surface } from '@committed/utilities'
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
import { ComponentProps, FC } from 'react'
import { ConditionalWrapper, component, forwardRefDefine } from '../../utils'
import { IconButton } from '../Button'
import { Heading } from '../Heading'
import { Close as Icon } from '../Icons'
import { overlayAnimationStyles } from '../Overlay/Overlay'
import { paperStyles } from '../Paper/Paper'
import { Text } from '../Text'

export const StyledOverlay = styled(
  component(Overlay, overlayAnimationStyles),
  cva({
    base: {
      position: 'fixed',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
    },
  }),
)

export const StyledContent = styled(
  component(Content, paperStyles, overlayAnimationStyles),
  cva({
    base: {
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

      _focus: {
        outline: 'none',
      },
    },
  }),
)

// Could be exported for reuse but currently causes typing issue
const StyledIconButton = component(
  IconButton,
  css({
    position: 'fixed',
    right: '$1',
    top: '$1',
  }),
)

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

type DialogContentProps = Omit<ComponentProps<typeof Content>, 'asChild'> & {
  /** Closable, add a standard close icon. */
  defaultClose?: boolean
  /** Modify the default styling of the content */
  surface?: Surface
  css?: SystemStyleObject
  /** Modify the default styling of the overlay */
  overlay?: Surface
  overlayCss?: SystemStyleObject
  /** By default, portals your overlay and content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

export const DialogContent = forwardRefDefine<
  typeof StyledContent,
  DialogContentProps
>(
  (
    {
      children,
      overlay,
      overlayCss,
      container,
      surface = 'solid',
      portalled = true,
      defaultClose = true,
      ...props
    },
    forwardedRef,
  ) => (
    <ConditionalWrapper
      condition={portalled}
      props={{ container }}
      wrapper={Portal}
    >
      <>
        <StyledOverlay className={css({ surface: overlay }, overlayCss)} />
        <StyledContent surface={surface} {...props} ref={forwardedRef}>
          {defaultClose && (
            <Close asChild>
              <StyledIconButton
                aria-label="close"
                variant="text"
                colorPalette="$neutral"
              >
                <Icon title="Close" />
              </StyledIconButton>
            </Close>
          )}
          {children}
        </StyledContent>
      </>
    </ConditionalWrapper>
  ),
)
DialogContent.displayName = 'DialogContent'

export const DialogTrigger = forwardRefDefine<
  typeof Trigger,
  Omit<ComponentProps<typeof Trigger>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Trigger asChild {...props} ref={forwardedRef}>
    {children}
  </Trigger>
))
DialogTrigger.displayName = 'DialogTrigger'

export const DialogClose = forwardRefDefine<
  typeof Close,
  Omit<ComponentProps<typeof Close>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Close asChild {...props} ref={forwardedRef}>
    {children}
  </Close>
))
DialogClose.displayName = 'DialogClose'

export const DialogTitle: FC<ComponentProps<typeof Heading>> = ({
  className,
  children,
  ...props
}) => (
  <Title>
    <Heading
      as="div"
      variant="h6"
      className={cx(css({ mb: '$4' }), className)}
      {...props}
    >
      <div>{children}</div>
    </Heading>
  </Title>
)
DialogTitle.displayName = 'DialogTitle'

export const DialogDescription: FC<ComponentProps<typeof Text>> = (props) => (
  <Description>
    <Text {...props} />
  </Description>
)
DialogDescription.displayName = 'DialogDescription'
