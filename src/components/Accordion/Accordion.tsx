import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import React, { ComponentProps, ElementRef, forwardRef } from 'react'
import type { CSSProps } from '../../stitches.config'
import { keyframes, styled } from '../../stitches.config'
import { buttonInteractionStyles } from '../Button/Button'
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

const StyledRoot = styled(Root, paperStyles, {
  boxShadow: '$1',
  borderTop: '1px solid $colors$grey4',
})

type AccordionRootProps = Omit<ComponentProps<typeof Root>, 'type'> & {
  /**
   * Allow `single` or `multiple` sections to be open, defaults to 'single'
   */
  type?: ComponentProps<typeof Root>['type']
  /**
   * Allow all elements to be collapsed.
   * This is only relevant when type single.
   * */
  collapsible?: boolean
}
type AccordionProps = AccordionRootProps & CSSProps

export const Accordion = forwardRef<
  ElementRef<typeof StyledRoot>,
  AccordionProps
>(({ collapsible = true, type = 'single', ...props }, forwardedRef) => {
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
})
Accordion.toString = () => `.${StyledRoot.className}`

// Typed explicitly to get props in storybook

export const AccordionItem = styled(Item, {
  borderBottom: '1px solid $colors$grey4',
})

const AccordionTrigger = styled(Trigger, buttonInteractionStyles, {
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

type AccordionTriggerProps = ComponentProps<typeof AccordionTrigger>
type AccordionHeaderProps = AccordionTriggerProps & CSSProps

export const AccordionHeader = forwardRef<
  ElementRef<typeof AccordionTrigger>,
  AccordionHeaderProps
>(({ children, ...props }, forwardedRef) => (
  <Header>
    <AccordionTrigger {...props} ref={forwardedRef}>
      {children}
      <Chevron />
    </AccordionTrigger>
  </Header>
))
