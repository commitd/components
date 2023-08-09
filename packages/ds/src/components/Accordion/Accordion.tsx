'use client'

import { css } from '@committed/ss/css'
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import { ComponentProps } from 'react'
import { component, fixedForwardRef } from '../../utils'
import { buttonInteractionStyles, buttonVariables } from '../Button/Button'
import { ChevronDown } from '../Icons'
import { paperStyles } from '../Paper'

const Chevron = component(
  ChevronDown,
  css({
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
    },

    '[data-state=open] &': {
      transform: 'rotate(180deg)',
    },
  }),
)
Chevron.displayName = 'Chevron'

export const Accordion = component(
  Root,
  paperStyles,
  css({
    boxShadow: '1',
    borderTop: '1px solid token(colors.$neutral.4)',
  }),
)
Accordion.displayName = 'Accordion'

export const AccordionItem = component(
  Item,
  css({
    borderBottom: '1px solid token(colors.$neutral.4)',
  }),
)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = component(
  Trigger,
  css(buttonVariables),
  css(buttonInteractionStyles),
  css({
    backgroundColor: 'transparent',
    border: 'none',
    padding: '$4',
    flex: 1,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'text',
    width: '100%',
    outline: 'none',

    pointerEvents: 'auto',

    '&[aria-disabled="true"]': {
      cursor: 'auto',
      pointerEvents: 'none',
    },
  }),
)
AccordionTrigger.displayName = 'AccordionTrigger'

export const AccordionContent = component(
  Content,
  css({
    '--transformValue':
      'calc(var(--radix-accordion-content-height)+token(sizes.$6))',
    padding: '$4',
    color: '$text',
    '&[data-state="open"]': {
      _motionReduce: { transition: 'none' },
      _motionSafe: {
        animation: `slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
      },
    },
    '&[data-state="closed"]': {
      _motionReduce: { transition: 'none' },
      _motionSafe: {
        animation: `slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
      },
    },
  }),
)
AccordionContent.displayName = 'AccordionContent'

type AccordionTriggerProps = ComponentProps<typeof AccordionTrigger>
type AccordionHeaderProps = AccordionTriggerProps

export const AccordionHeader = fixedForwardRef<
  typeof AccordionTrigger,
  AccordionHeaderProps
>(({ children, ...props }, forwardedRef) => (
  <Header>
    <AccordionTrigger {...props} ref={forwardedRef}>
      {children}
      <Chevron />
    </AccordionTrigger>
  </Header>
))
AccordionHeader.displayName = 'AccordionHeader'
