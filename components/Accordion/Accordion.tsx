import { css } from '@committed/ss/css'
import { Content, Header, Item, Root, Trigger } from '@radix-ui/react-accordion'
import { ComponentProps, ElementRef, forwardRef } from 'react'
import { withClasses } from '../../utils'
import { buttonInteractionStyles } from '../Button/Button'
import { ChevronDown } from '../Icons'
import { paperStyles } from '../Paper'

const Chevron = withClasses(
  ChevronDown,
  css({
    _motionReduce: { transition: 'none' },
    _motionSafe: {
      transition: 'transform 300ms',
    },

    '[data-state=open] &': {
      transform: 'rotate(180deg)',
    },
  })
)
Chevron.displayName = 'Chevron'

export const Accordion = withClasses(
  Root,
  paperStyles,
  css({
    boxShadow: '1',
    borderTop: '1px solid token(colors.$grey4)',
  })
)
Accordion.displayName = 'Accordion'

export const AccordionItem = withClasses(
  Item,
  css({
    borderBottom: '1px solid token(colors.$grey4)',
  })
)
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = withClasses(
  Trigger,
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
  })
)
AccordionTrigger.displayName = 'AccordionTrigger'

export const AccordionContent = withClasses(
  Content,
  css({
    padding: '$4',
    color: '$text',
    '&[data-state="open"]': {
      _motionReduce: { transition: 'none' },
      _motionSafe: {
        animation: `$accordionSlideDown 300ms ease-out`,
      },
    },
    '&[data-state="closed"]': {
      _motionReduce: { transition: 'none' },
      _motionSafe: {
        animation: `$accordionSlideUp 300ms ease-out`,
      },
    },
  })
)
AccordionContent.displayName = 'AccordionContent'

type AccordionTriggerProps = ComponentProps<typeof AccordionTrigger>
type AccordionHeaderProps = AccordionTriggerProps

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
AccordionHeader.displayName = 'AccordionHeader'
