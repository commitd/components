import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel } from '.'

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as Meta

export const Default: React.FC = () => {
  return (
    <Accordion type="single">
      <AccordionItem value="item-1">
        <AccordionHeader>Item 1</AccordionHeader>
        <AccordionPanel>
          Here goes the content for the accordion item 1.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionHeader>Item 2</AccordionHeader>
        <AccordionPanel>
          Here goes the content for the accordion item 2.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionHeader>Item 3</AccordionHeader>
        <AccordionPanel>
          Here goes the content for the accordion item 3.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
