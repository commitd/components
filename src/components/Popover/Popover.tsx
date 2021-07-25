import type * as Polymorphic from '@radix-ui/react-polymorphic'
import {
  Anchor,
  Arrow,
  Close,
  Content,
  Root,
  Trigger,
} from '@radix-ui/react-popover'
import { Slot } from '@radix-ui/react-slot'
import React, { FC, forwardRef } from 'react'
import type { CSSProps } from '../../stitches.config'
import { styled } from '../../stitches.config'
import { paperStyles } from '../Paper'

const StyledContent = styled(Content, {
  ...paperStyles,
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

type PopoverContentOwnProps = Polymorphic.OwnProps<typeof Content> & CSSProps

type PopoverContentComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Content>,
  PopoverContentOwnProps
>

export const PopoverContent = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledArrow offset={-1} />
      {children}
    </StyledContent>
  )
) as PopoverContentComponent

type PopoverTriggerOwnProps = Polymorphic.OwnProps<typeof Trigger>
type PopoverTriggerComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Trigger>,
  PopoverTriggerOwnProps
>

export const PopoverTrigger = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Trigger as={Slot} {...props} ref={forwardedRef}>
      {children}
    </Trigger>
  )
) as PopoverTriggerComponent

type PopoverCloseOwnProps = Polymorphic.OwnProps<typeof Close>
type PopoverCloseComponent = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Close>,
  PopoverCloseOwnProps
>

export const PopoverClose = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Close as={Slot} {...props} ref={forwardedRef}>
      {children}
    </Close>
  )
) as PopoverCloseComponent

/**
 *
 * Popovers display extra information when users hover over, focus on, or tap an element.
 *
 * When activated, Popovers can display rich interactive content.
 *
 * Built using [Radix Popover](https://radix-ui.com/primitives/docs/components/popover)
 */
export const Popover: FC<React.ComponentProps<typeof Root>> = Root
export const PopoverAnchor = Anchor
