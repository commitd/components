'use client'
import { css, cx } from '@committed/ss/css'
import { SystemStyleObject } from '@committed/ss/types'
import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-alert-dialog'
import { ComponentProps, ElementRef, FC, forwardRef } from 'react'
import { ConditionalWrapper, component } from '../../utils'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { overlayAnimationStyles, overlayStyles } from '../Overlay/Overlay'
import { paperStyles } from '../Paper/Paper'
import { Text } from '../Text'

const StyledOverlay = component(
  Overlay,
  overlayStyles,
  overlayAnimationStyles,
  css({
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  }),
)

const StyledContent = component(
  Content,
  paperStyles,
  css({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 200,
    maxWidth: 'fit-content',
    maxHeight: '85vh',
    padding: '$4',
    marginTop: '-5vh',

    boxShadow: '$2',

    display: 'flex',
    flexDirection: 'column',

    _focus: {
      outline: 'none',
    },
  }),
  overlayAnimationStyles,
)

/**
 * The `ConfirmDialog` component can be used get confirmation of an action from the user.
 * This is done by isolating the user from the main window by overlaying
 * another window that requires the users to confirm or cancel.
 *
 * Its appearance is controlled with the `open` and `onOpenChange` props or by providing a
 * `ConfirmDialogTrigger`.
 *
 * The content should be wrapped in a `ConfirmDialogContent`.
 *
 * The `ConfirmDialogContent` should contain a `title` and `description` supplied on the props
 * (or through child components, `ConfirmDialogTitle` and a `ConfirmDialogDescription`).
 *
 * It should also contain a cancel and confirm action. these can be supplied using the `ConfirmDialogActions`
 * or by its separate parts (see Parts story).
 *
 *
 * Based on [Radix Alert Dialog](https://radix-ui.com/primitives/docs/components/alert-dialog).
 */
export const ConfirmDialog = Root

type ConfirmDialogContentProps = ComponentProps<typeof StyledContent> & {
  /** Add a title to the content. */
  title?: string
  /** Add a description to the content. */
  description?: string
  /** Modify the default styling of the overlay */
  overlayCss?: SystemStyleObject
  /** By default, portals your overlay and content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

export const ConfirmDialogContent = forwardRef<
  ElementRef<typeof StyledContent>,
  ConfirmDialogContentProps
>(
  (
    {
      title,
      description,
      overlayCss = {},
      container,
      portalled = true,
      children,
      ...props
    },
    forwardedRef,
  ) => (
    <ConditionalWrapper
      condition={portalled}
      wrapper={(child) => <Portal container={container}>{child}</Portal>}
    >
      <>
        <StyledOverlay className={css(overlayCss)} />
        <StyledContent {...props} ref={forwardedRef}>
          {title && <ConfirmDialogTitle>{title}</ConfirmDialogTitle>}
          {description && (
            <ConfirmDialogDescription>{description}</ConfirmDialogDescription>
          )}
          {children}
        </StyledContent>
      </>
    </ConditionalWrapper>
  ),
)
ConfirmDialogContent.displayName = 'ConfirmDialogContent'

export const ConfirmDialogTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  Omit<ComponentProps<typeof Trigger>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Trigger asChild {...props} ref={forwardedRef}>
    {children}
  </Trigger>
))
ConfirmDialogTrigger.displayName = 'ConfirmDialogTrigger'

export const ConfirmDialogTitle: FC<ComponentProps<typeof Heading>> = ({
  className,
  ...props
}) => (
  <Title>
    <Heading
      as="div"
      variant="h6"
      className={cx(css({ mb: 4 }), className)}
      {...props}
    />
  </Title>
)
ConfirmDialogTitle.displayName = 'ConfirmDialogTitle'

export const ConfirmDialogDescription: FC<ComponentProps<typeof Text>> = (
  props,
) => (
  <Description>
    <Text {...props} />
  </Description>
)
ConfirmDialogDescription.displayName = 'ConfirmDialogDescription'

export const ConfirmDialogAction: FC<ComponentProps<typeof Button>> = (
  props,
) => (
  <Action asChild>
    <Button variant="solid" {...props} />
  </Action>
)
ConfirmDialogAction.displayName = 'ConfirmDialogAction'

export const ConfirmDialogCancel: FC<ComponentProps<typeof Button>> = (
  props,
) => (
  <Cancel asChild>
    <Button variant="text" color="$neutral" {...props} />
  </Cancel>
)
ConfirmDialogCancel.displayName = 'ConfirmDialogCancel'

export const ConfirmDialogActionsWrapper = component(
  'div',
  css({
    display: 'flex',
    gap: '$2',
    justifyContent: 'flex-end',
    mt: '$4',
  }),
)
ConfirmDialogActionsWrapper.displayName = 'ConfirmDialogActionsWrapper'

type ConfirmDialogActionsProps = {
  cancel?: string
  onCancel?: () => void
  confirm: string
  onConfirm: () => void
  destructive?: boolean
}

export const ConfirmDialogActions: FC<ConfirmDialogActionsProps> = ({
  cancel = 'Cancel',
  confirm,
  onCancel,
  onConfirm,
  destructive,
}) => (
  <ConfirmDialogActionsWrapper>
    <ConfirmDialogCancel onClick={onCancel}>{cancel}</ConfirmDialogCancel>
    <ConfirmDialogAction onClick={onConfirm} destructive={destructive}>
      {confirm}
    </ConfirmDialogAction>
  </ConfirmDialogActionsWrapper>
)
ConfirmDialogActions.displayName = 'ConfirmDialogActions'
