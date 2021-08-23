import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import type * as Polymorphic from '@radix-ui/react-polymorphic'
import React, { forwardRef } from 'react'
import type { CSSProps } from '../../stitches.config'
import { keyframes, styled } from '../../stitches.config'
import { ChevronDown } from '../Icons'
import { paperStyles } from '../Paper'
import { buttonInteractionStyles } from '../Button/Button'
import { PartialPick } from '../../typings'

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

const StyledRoot = styled(Root, {
  ...paperStyles,
  boxShadow: '$1',
  borderTop: '1px solid $colors$grey4',
})

type AccordionProps = Partial<Polymorphic.OwnProps<typeof Root>> &
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore This type is allowed when type single.
  PartialPick<Polymorphic.OwnProps<typeof Root>, 'collapsible'> &
  CSSProps

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ collapsible = true, type = 'single', ...props }, forwardedRef) => {
    let additionalProps = {}
    if (type == 'single' && collapsible) {
      additionalProps = { collapsible: true }
    }
    return (
      <StyledRoot
        type={type}
        {...additionalProps}
        ref={forwardedRef}
        {...props}
      />
    )
  }
) as Polymorphic.ForwardRefComponent<
  Polymorphic.IntrinsicElement<typeof Root>,
  AccordionProps
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
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '$text',
  width: '100%',
  outline: 'none',

  ...buttonInteractionStyles,

  pointerEvents: 'auto',

  '&[aria-disabled="true"]': {
    cursor: 'auto',
    pointerEvents: 'none',
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
