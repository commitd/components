import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import type { CSSProps } from 'stitches.config'
import { keyframes, styled } from 'stitches.config'
import { ChevronDown } from '../Icons'
import { paperStyles } from '../Paper'

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'cal(var(--radix-accordion-panel-height) + $6)' },
})

const slideUp = keyframes({
  from: { height: 'cal(var(--radix-accordion-panel-height) + $6)' },
  to: { height: 0 },
})

const Chevron = styled(ChevronDown, {
  transition: 'transform 300ms',

  '[data-state=open] &': {
    transform: 'rotate(180deg)',
  },
})

export const Accordion = (styled(Root, {
  ...paperStyles,
  boxShadow: '$1',
  borderTop: '1px solid $colors$grey4',
}) as unknown) as Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Root>,
  Polymorphic.OwnProps<typeof Root> & CSSProps
>
// Typed explicitly to get props in storybook

export const AccordionItem = styled(Item, {
  borderBottom: '1px solid $colors$grey4',
})

const AccordionTrigger = styled(Trigger, {
  backgroundColor: 'transparent',
  border: 'none',
  padding: '$4',
  flex: 1,
  textAlign: 'left',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$text',
  width: '100%',
  outline: 'none',

  '&:hover': {
    backgroundColor: '$grey3',
  },
  '&:focus': {
    backgroundColor: '$grey4',
  },
})

export const AccordionContent = styled(Content, {
  padding: '$4',
  color: '$text',
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms ease-out`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms ease-out`,
  },
})

type PolymorphicAccordionHeader = Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Trigger>,
  Polymorphic.OwnProps<typeof AccordionTrigger> & CSSProps
>

export const AccordionHeader = forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Header>
      <AccordionTrigger {...props} ref={forwardedRef}>
        {children}
        <Chevron />
      </AccordionTrigger>
    </Header>
  )
) as PolymorphicAccordionHeader
AccordionHeader.displayName = 'AccordionHeader'
