import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from '.'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem, AccordionHeader, AccordionContent },
  argTypes: {
    type: {
      defaultValue: 'single',
      control: {
        type: 'select',
      },
      options: ['single', 'multiple'],
      description: 'Defines the policy for how many items can be open',
    },
    collapsible: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      description: 'In single mode only, declares that they can all be closed.',
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

/** By setting `type` to multiple the accordion can have multiple sections open at once. */
export const Multiple = Default.bind({})
Multiple.args = {
  type: 'multiple',
}

/** By setting `collapsible` to `false` and provided a `defaultValue` we can create an always one open accordion. */
export const OneOpen = Default.bind({})
OneOpen.args = {
  type: 'single',
  collapsible: false,
  defaultValue: 'item-1',
}
