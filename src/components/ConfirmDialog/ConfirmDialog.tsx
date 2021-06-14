import {
  Title,
  Description,
  Cancel,
  Action,
  Content,
  Overlay,
  Root,
  Trigger,
} from '@radix-ui/react-alert-dialog'
import * as Polymorphic from '@radix-ui/react-polymorphic'
import { Slot } from '@radix-ui/react-slot'
import React, { FC, forwardRef, ComponentProps } from 'react'
import { CSS, styled } from 'stitches.config'
import { overlayAnimationStyles, overlayStyles } from '../Overlay'
import { paperStyles } from '../Paper'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Text } from '../Text'

export const StyledOverlay = styled(Overlay, {
  ...overlayStyles,
  ...overlayAnimationStyles,
  position: 'fixed',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
})

export const StyledContent = styled(Content, {
  ...paperStyles,
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

  ...overlayAnimationStyles,
})

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

type ConfirmDialogContentCSSProp = { css?: CSS }
type ConfirmDialogContentOwnProps = Polymorphic.OwnProps<typeof Content> &
  ConfirmDialogContentCSSProp & {
    /** Add a title to the content. */
    title?: string
    /** Add a description to the content. */
    description?: string
  }

type ConfirmDialogContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Content>,
  ConfirmDialogContentOwnProps
>

export const ConfirmDialogContent = forwardRef(
  ({ title, description, children, css, ...props }, forwardedRef) => (
    <StyledContent css={css as CSS} {...props} ref={forwardedRef}>
      {title && <ConfirmDialogTitle>{title}</ConfirmDialogTitle>}
      {description && (
        <ConfirmDialogDescription>{description}</ConfirmDialogDescription>
      )}
      {children}
    </StyledContent>
  )
) as ConfirmDialogContentComponent

type ConfirmDialogTriggerCSSProp = { css?: CSS }
type ConfirmDialogTriggerOwnProps = Polymorphic.OwnProps<typeof Trigger> &
  ConfirmDialogTriggerCSSProp

export type ConfirmDialogTriggerComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Trigger>,
  ConfirmDialogTriggerOwnProps
>

export const ConfirmDialogTrigger = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Trigger as={Slot} {...props} ref={forwardedRef}>
      {children}
    </Trigger>
  )
) as ConfirmDialogTriggerComponent

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
) => <Action as={Button} variant="primary" {...props} />

export const ConfirmDialogCancel: FC<ComponentProps<typeof Button>> = (
  props
) => <Cancel as={Button} variant="tertiary" {...props} />

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
