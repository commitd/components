import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'

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
} satisfies Meta<typeof Accordion>

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: ({ type, ...args }) => {
    return (
      <Accordion type={type} {...args}>
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
  },
}

/** By setting `type` to multiple the accordion can have multiple sections open at once. */
export const Multiple = {
  ...Default,
  args: {
    type: 'multiple',
  },
}

/** By setting `collapsible` to `false` and provided a `defaultValue` we can create an always one open accordion. */
export const OneOpen = {
  ...Default,
  args: {
    type: 'single',
    collapsible: false,
    defaultValue: 'item-1',
  },
}
