'use client'
import { css, cx } from '@committed/ss/css'
import { styled } from '@committed/ss/jsx'
import { SurfaceVariants } from '@committed/utilities'
import {
  Anchor,
  Arrow,
  Close,
  Content,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-popover'
import { ComponentProps } from 'react'
import {
  CComponent,
  CComponentProps,
  ConditionalWrapper,
  component,
  forwardRefExtend,
  forwardRefOmit,
} from '../../utils'
import { paperStyles } from '../Paper/Paper'

const POPOVER = 'c-popover'
const POPOVER_CONTENT = 'c-popover-content'
const POPOVER_ARROW = 'c-popover-arrow'
const POPOVER_TRIGGER = 'c-popover-trigger'
const POPOVER_ANCHOR = 'c-popover-anchor'
const POPOVER_CLOSE = 'c-popover-close'

const StyledContent = styled(
  component(
    Content,
    POPOVER_CONTENT,
    paperStyles,
    css({
      borderRadius: '$default',
      padding: '$4',

      display: 'flex',
      flexDirection: 'column',
      gap: '$2',

      _before: {
        boxShadow: 'none',
      },
      filter:
        'drop-shadow(0px 3px 2.5px rgba(0,0,0,0.2)) drop-shadow(0px 6px 5px rgba(0,0,0,0.14)) drop-shadow(0px 1px 9px rgba(0,0,0,0.12))',
    }),
  ),
)

const StyledArrow = component(
  Arrow,
  POPOVER_ARROW,
  css({
    fill: '$surface.solid',
  }),
)

type PopoverContentProps = CComponentProps &
  SurfaceVariants & {
    /** By default, portals your content parts into the body, set false to add at dom location. */
    portalled?: boolean
    /** Specify a container element to portal the content into. */
    container?: ComponentProps<typeof Portal>['container']
  }

export const PopoverContent = forwardRefExtend<
  typeof Content,
  PopoverContentProps
>(
  (
    { portalled = true, surface = 'solid', container, children, ...props },
    forwardedRef,
  ) => (
    <ConditionalWrapper
      condition={portalled}
      wrapper={(child) => <Portal container={container}>{child}</Portal>}
    >
      <StyledContent surface={surface} {...props} ref={forwardedRef}>
        <StyledArrow offset={-1} />
        {children}
      </StyledContent>
    </ConditionalWrapper>
  ),
)
PopoverContent.displayName = 'PopoverContent'

export const PopoverTrigger = forwardRefOmit<typeof Trigger, 'asChild'>(
  ({ className, children, ...props }, forwardedRef) => (
    <Trigger
      className={cx(POPOVER_TRIGGER, className)}
      asChild
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Trigger>
  ),
)
PopoverTrigger.displayName = 'PopoverTrigger'

export const PopoverAnchor = forwardRefOmit<typeof Anchor, 'asChild'>(
  ({ className, children, ...props }, forwardedRef) => (
    <Anchor
      className={cx(POPOVER_ANCHOR, className)}
      asChild
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Anchor>
  ),
)
PopoverAnchor.displayName = 'PopoverAnchor'

export const PopoverClose = forwardRefOmit<typeof Close, 'asChild'>(
  ({ className, children, ...props }, forwardedRef) => (
    <Close
      asChild
      className={cx(POPOVER_CLOSE, className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Close>
  ),
)
PopoverClose.displayName = 'PopoverClose'

/**
 *
 * Popovers display extra information when users hover over, focus on, or tap an element.
 *
 * When activated, Popovers can display rich interactive content.
 *
 * Built using [Radix Popover](https://radix-ui.com/primitives/docs/components/popover)
 */
export const Popover: CComponent<typeof Root> = component(Root, POPOVER)
Popover.displayName = 'Popover'
