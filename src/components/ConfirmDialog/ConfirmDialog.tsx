import {
  Action,
  Cancel,
  Content,
  Description,
  Overlay,
  Root,
  Title,
  Trigger,
} from '@radix-ui/react-alert-dialog'
import React, { ComponentProps, ElementRef, FC, forwardRef } from 'react'
import type { CSSProps } from '../../stitches.config'
import { CSS, styled } from '../../stitches.config'
import { Button } from '../Button'
import { Heading } from '../Heading'
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
    padding: '$4',
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

type ConfirmDialogProps = ComponentProps<typeof Root> & {
  /** Modify the default styling of the overlay */
  overlayCss?: CSS
}

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
export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  children,
  overlayCss,
  ...props
}) => {
  return (
    <Root {...props}>
      <StyledOverlay css={overlayCss} />
      {children}
    </Root>
  )
}

type ConfirmDialogContentProps = ComponentProps<typeof StyledContent> &
  CSSProps & {
    /** Add a title to the content. */
    title?: string
    /** Add a description to the content. */
    description?: string
  }

export const ConfirmDialogContent = forwardRef<
  ElementRef<typeof StyledContent>,
  ConfirmDialogContentProps
>(({ title, description, children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {title && <ConfirmDialogTitle>{title}</ConfirmDialogTitle>}
    {description && (
      <ConfirmDialogDescription>{description}</ConfirmDialogDescription>
    )}
    {children}
  </StyledContent>
))
ConfirmDialogContent.toString = () => `.${StyledContent.className}`

export const ConfirmDialogTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  Omit<ComponentProps<typeof Trigger>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Trigger asChild {...props} ref={forwardedRef}>
    {children}
  </Trigger>
))

export const ConfirmDialogTitle: FC<ComponentProps<typeof Heading>> = ({
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

export const ConfirmDialogDescription: FC<ComponentProps<typeof Text>> = (
  props
) => (
  <Description>
    <Text {...props} />
  </Description>
)

export const ConfirmDialogAction: FC<ComponentProps<typeof Button>> = (
  props
) => (
  <Action asChild>
    <Button variant="primary" {...props} />
  </Action>
)

export const ConfirmDialogCancel: FC<ComponentProps<typeof Button>> = (
  props
) => (
  <Cancel asChild>
    <Button variant="tertiary" {...props} />
  </Cancel>
)

export const ConfirmDialogActionsWrapper = styled('div', {
  display: 'flex',
  gap: '$2',
  justifyContent: 'flex-end',
  mt: '$4',
})

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
