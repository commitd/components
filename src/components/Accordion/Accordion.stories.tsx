import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '.'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem, AccordionHeader, AccordionContent },
  argTypes: {
    type: {
      defaultValue: 'single',
    },
  },
} as Meta

export const Default: Story<React.ComponentProps<typeof Accordion>> = ({
  ...args
}) => {
  return (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionHeader>Item 1</AccordionHeader>
        <AccordionContent>
          Here goes the content for the accordion item 1.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionHeader>Item 2</AccordionHeader>
        <AccordionContent>
          Here goes the content for the accordion item 2.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionHeader>Item 3</AccordionHeader>
        <AccordionContent>
          Here goes the content for the accordion item 3.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
