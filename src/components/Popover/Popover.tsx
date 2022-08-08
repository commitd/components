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
import type { AsProps, CSSProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { ConditionalWrapper } from '../../utils'
import { paperStyles } from '../Paper'

const StyledContent = styled(Content, paperStyles, {
  borderRadius: '$default',
  padding: '$4',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  '&::before': {
    boxShadow: 'none',
  },
  filter:
    'drop-shadow(0px 3px 2.5px rgba(0,0,0,0.2)) drop-shadow(0px 6px 5px rgba(0,0,0,0.14)) drop-shadow(0px 1px 9px rgba(0,0,0,0.12))',
})

const StyledArrow = styled(Arrow, {
  fill: '$paper',
})

type PopoverContentProps = CSSProps &
  AsProps &
  ComponentProps<typeof Content> & {
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
PopoverContent.toString = () => `.${StyledContent.className}`

const POPOVER_TRIGGER_CLASS_NAME = 'c-popover-trigger'

export const PopoverTrigger = forwardRef<
  ElementRef<typeof Trigger>,
  Omit<ComponentProps<typeof Trigger>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Trigger
    className={POPOVER_TRIGGER_CLASS_NAME}
    asChild
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Trigger>
))
PopoverTrigger.toString = () => `.${POPOVER_TRIGGER_CLASS_NAME}`

const POPOVER_ANCHOR_CLASS_NAME = 'c-popover-anchor'

export const PopoverAnchor = forwardRef<
  ElementRef<typeof Anchor>,
  Omit<ComponentProps<typeof Anchor>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Anchor
    className={POPOVER_ANCHOR_CLASS_NAME}
    asChild
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Anchor>
))
PopoverAnchor.toString = () => `.${POPOVER_ANCHOR_CLASS_NAME}`

const POPOVER_CLOSE_CLASS_NAME = 'c-popover-close'

export const PopoverClose = forwardRef<
  ElementRef<typeof Close>,
  Omit<ComponentProps<typeof Close>, 'asChild'>
>(({ children, ...props }, forwardedRef) => (
  <Close
    asChild
    className={POPOVER_CLOSE_CLASS_NAME}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Close>
))
PopoverClose.toString = () => `.${POPOVER_CLOSE_CLASS_NAME}`

/**
 *
 * Popovers display extra information when users hover over, focus on, or tap an element.
 *
 * When activated, Popovers can display rich interactive content.
 *
 * Built using [Radix Popover](https://radix-ui.com/primitives/docs/components/popover)
 */
export const Popover: FC<React.ComponentProps<typeof Root>> = Root
