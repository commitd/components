import React, {
  forwardRef,
  PropsWithChildren,
  ComponentProps,
  ForwardRefExoticComponent,
} from 'react'
import { styled, keyframes } from 'stitches.config'
import { ChevronDown } from '../Icons'
import { Root, Item, Header, Button, Panel } from '@radix-ui/react-accordion'

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

export const Accordion = styled(Root, {
  borderTop: '1px solid $defaultHighlight',
  borderRadius: '$default',
  boxShadow: '$1',
})

export const AccordionItem = styled(Item, {
  borderBottom: '1px solid $defaultHighlight',
})

const AccordionButton = styled(Button, {
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

  '@hover': {
    '&:hover': {
      backgroundColor: '$defaultHighlight',
    },
  },

  // TODO consider focus style
  // '&:focus': {
  //   outline: 'none',
  //   boxShadow: 'inset 0 0 0 1px $colors$grey700, 0 0 0 1px $colors$grey700',
  // },
})

export const AccordionPanel = styled(Panel, {
  padding: '$4',
  color: '$text',
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms ease-out`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms ease-out`,
  },
})

export const AccordionHeader: ForwardRefExoticComponent<
  ComponentProps<typeof AccordionButton>
> = forwardRef<HTMLButtonElement, ComponentProps<typeof AccordionButton>>(
  ({ children, ...props }, forwardedRef) => (
    <Header>
      <AccordionButton {...props} ref={forwardedRef}>
        {children}
        <Chevron />
      </AccordionButton>
    </Header>
  )
)
AccordionHeader.displayName = 'Accordion.Header'
