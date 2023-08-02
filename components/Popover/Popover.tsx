import { css, cx } from '@committed/ss/css'
import {
    Anchor,
    Arrow,
    Close,
    Content,
    Portal,
    Root,
    Trigger,
} from '@radix-ui/react-popover'
import React, { ComponentProps, ElementRef, FC, forwardRef } from 'react'
import { ConditionalWrapper, withClasses } from '../../utils'
import { paperStyles } from '../Paper'

const StyledContent = withClasses(
  Content,
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
  })
)

const StyledArrow = withClasses(
  Arrow,
  css({
    fill: '$paper',
  })
)

type PopoverContentProps = ComponentProps<typeof Content> & {
  /** By default, portals your content parts into the body, set false to add at dom location. */
  portalled?: boolean
  /** Specify a container element to portal the content into. */
  container?: ComponentProps<typeof Portal>['container']
}

export const PopoverContent = forwardRef<
  ElementRef<typeof StyledContent>,
  PopoverContentProps
>(({ portalled = true, container, children, ...props }, forwardedRef) => (
  <ConditionalWrapper
    condition={portalled}
    wrapper={(child) => <Portal container={container}>{child}</Portal>}
  >
    <StyledContent {...props} ref={forwardedRef}>
      <StyledArrow offset={-1} />
      {children}
    </StyledContent>
  </ConditionalWrapper>
))
PopoverContent.displayName = 'PopoverContent'

const POPOVER_TRIGGER_CLASS_NAME = 'c-popover-trigger'

export const PopoverTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  Omit<ComponentProps<typeof Trigger>, 'asChild'>
>(({ className, children, ...props }, forwardedRef) => (
  <Trigger
    className={cx(POPOVER_TRIGGER_CLASS_NAME, className)}
    asChild
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Trigger>
))
PopoverTrigger.displayName = 'PopoverTrigger'

const POPOVER_ANCHOR_CLASS_NAME = 'c-popover-anchor'

export const PopoverAnchor = forwardRef<
  ElementRef<typeof Anchor>,
  Omit<ComponentProps<typeof Anchor>, 'asChild'>
>(({ className, children, ...props }, forwardedRef) => (
  <Anchor
    className={cx(POPOVER_ANCHOR_CLASS_NAME, className)}
    asChild
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Anchor>
))
PopoverAnchor.displayName = 'PopoverAnchor'

const POPOVER_CLOSE_CLASS_NAME = 'c-popover-close'

export const PopoverClose = forwardRef<
  ElementRef<typeof Close>,
  Omit<ComponentProps<typeof Close>, 'asChild'>
>(({ className, children, ...props }, forwardedRef) => (
  <Close
    asChild
    className={cx(POPOVER_CLOSE_CLASS_NAME, className)}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Close>
))
PopoverClose.displayName = 'PopoverClose'

/**
 *
 * Popovers display extra information when users hover over, focus on, or tap an element.
 *
 * When activated, Popovers can display rich interactive content.
 *
 * Built using [Radix Popover](https://radix-ui.com/primitives/docs/components/popover)
 */
export const Popover: FC<React.ComponentProps<typeof Root>> = Root
Popover.displayName = 'Popover'
