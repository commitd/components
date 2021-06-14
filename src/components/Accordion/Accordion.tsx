import { Button, Header, Item, Panel, Root } from '@radix-ui/react-accordion'
import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react'
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

export const Accordion = styled(Root, {
  ...paperStyles,
  boxShadow: '$1',
  borderTop: '1px solid $grey4',
})

export const AccordionItem = styled(Item, {
  borderBottom: '1px solid $grey4',
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
  outline: 'none',

  '&:hover': {
    backgroundColor: '$grey3',
  },
  '&:focus': {
    backgroundColor: '$grey4',
  },
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
