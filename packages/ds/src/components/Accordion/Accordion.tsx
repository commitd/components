'use client'

import { css, cx } from '@committed/ss'
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import {
  CComponent,
  ChildProps,
  ClassNameProps,
  component,
  forwardRefDefine,
} from '../../utils'
import { buttonInteractionStyles, buttonVariables } from '../Button/Button'
import { ChevronDown } from '../Icons'
import { paperStyles, paperSurfaceStyles } from '../Paper/Paper'

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

export const Accordion: CComponent<typeof Root> = component(
  Root,
  'c-accordion',
  paperStyles,
  paperSurfaceStyles,
  css({
    boxShadow: '1',
    borderTop: '1px solid token(colors.$neutral.4)',
  }),
)
Accordion.displayName = 'Accordion'

export const AccordionItem = component(
  Item,
  'c-accordion-item',
  css({
    borderBottom: '1px solid token(colors.$neutral.4)',
  }),
)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = component(
  Trigger,
  'c-accordion-trigger',
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
    color: '$text',
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
  'c-accordion-content',
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

export const AccordionHeader = forwardRefDefine<
  typeof AccordionTrigger,
  ChildProps & ClassNameProps
>(({ children, className, ...props }, forwardedRef) => (
  <Header className={cx('c-accordion-header', className)}>
    <AccordionTrigger {...props} ref={forwardedRef}>
      {children}
      <Chevron />
    </AccordionTrigger>
  </Header>
))
AccordionHeader.displayName = 'AccordionHeader'
