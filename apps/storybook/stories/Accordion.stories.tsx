import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'

import { expect } from '@storybook/jest'

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
    //@ts-ignore (available only in single mode so causes error for general availability)
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

const item1 = 'Here goes the content for the accordion item 1.'
const item2 = 'Here goes the content for the accordion item 2.'
const item3 = 'Here goes the content for the accordion item 3.'

export const Default: Story = {
  render: ({ type, ...args }) => {
    return (
      <Accordion type={type} {...args}>
        <AccordionItem value="item-1">
          <AccordionHeader>Item 1</AccordionHeader>
          <AccordionContent>{item1}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionHeader>Item 2</AccordionHeader>
          <AccordionContent>{item2}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionHeader>Item 3</AccordionHeader>
          <AccordionContent>{item3}</AccordionContent>
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
  play: async ({ canvasElement, step }) => {
    const screen = within(canvasElement)

    await step('Starts closed', async () => {
      expect(screen.queryByText(item1)).not.toBeInTheDocument()
      expect(screen.queryByText(item2)).not.toBeInTheDocument()
      expect(screen.queryByText(item3)).not.toBeInTheDocument()
    })
    await step('Can open 1', async () => {
      userEvent.click(screen.getByRole('button', { name: /Item 1/i }))
      await waitFor(() => {
        expect(screen.getByText(item1)).toBeInTheDocument()
      })
      expect(screen.queryByText(item2)).not.toBeInTheDocument()
      expect(screen.queryByText(item3)).not.toBeInTheDocument()
    })
    await step('Can open 2', async () => {
      userEvent.click(screen.getByRole('button', { name: /Item 2/i }))
      await waitFor(() => {
        expect(screen.getByText(item1)).toBeInTheDocument()
        expect(screen.queryByText(item2)).toBeInTheDocument()
      })
      expect(screen.queryByText(item3)).not.toBeInTheDocument()
    })
    await step('Can close all', async () => {
      userEvent.click(screen.getByRole('button', { name: /Item 1/i }))
      userEvent.click(screen.getByRole('button', { name: /Item 2/i }))
      await waitFor(() => {
        expect(screen.queryByText(item1)).not.toBeInTheDocument()
        expect(screen.queryByText(item2)).not.toBeInTheDocument()
        expect(screen.queryByText(item3)).not.toBeInTheDocument()
      })
    })
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

  play: async ({ canvasElement, step }) => {
    const screen = within(canvasElement)

    await step('Starts open', async () => {
      expect(screen.getByLabelText(/Item 1/i)).toBeInTheDocument()
      expect(screen.queryByText(item1)).toBeInTheDocument()
      expect(screen.queryByText(item2)).not.toBeInTheDocument()
      expect(screen.queryByText(item3)).not.toBeInTheDocument()
    })
    await step('Open 2 closes 1', async () => {
      userEvent.click(screen.getByRole('button', { name: /Item 2/i }))
      await waitFor(() => {
        expect(screen.queryByText(item1)).not.toBeInTheDocument()
        expect(screen.getByText(item2)).toBeInTheDocument()
        expect(screen.queryByText(item3)).not.toBeInTheDocument()
      })
    })
    await step('Return to start state', async () => {
      userEvent.click(screen.getByRole('button', { name: /Item 1/i }))
    })
  },
}
