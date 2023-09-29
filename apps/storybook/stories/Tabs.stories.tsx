import { Tab, TabContent, Tabs, TabsList } from '@committed/ds'
import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { TabsList, Tab, TabContent },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline', 'text'],
      },
      description:
        'The button is available in different variants. For the primary action on the view use the `solid` variant, most others should be `outline` which is the default. Use `text` variant for paired no-action buttons.',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
      description: 'The button is available in 3 different sizes.',
    },
  },
} satisfies Meta<typeof Tabs>

type Story = StoryObj<typeof Tabs>

const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <Tab value="tab1">One</Tab>
        <Tab value="tab2">Two</Tab>
        <Tab value="tab3">Three</Tab>
      </TabsList>
      <TabContent value="tab1">Tab one content</TabContent>
      <TabContent value="tab2">Tab two content</TabContent>
      <TabContent value="tab3">Tab three content</TabContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'tab1',
  },
}

export const Solid: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'solid',
  },
}

export const Outline: Story = {
  ...Default,
  args: {
    defaultValue: 'tab2',
    variant: 'outline',
  },
}

export const Text: Story = {
  ...Default,
  args: {
    defaultValue: 'tab3',
    variant: 'text',
  },
}

/**
 * By default content is shown when the tab is focused. Use `activationMode` `manual` to require a click to change tabs.
 */
export const Manual: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    activationMode: 'manual',
  },
}

/* Tabs can have `size` small */
export const Small: Story = {
  ...Default,
  args: {
    defaultValue: 'tab2',
    size: 'small',
  },
}

/* Tabs can have `size` large */
export const Large: Story = {
  ...Default,
  args: {
    defaultValue: 'tab3',
    size: 'large',
  },
}

export const Left: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'solid',
    position: 'left',
  },
}

export const Right: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'outline',
    position: 'right',
  },
}

export const Top: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    position: 'top',
  },
}

export const Bottom: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'solid',
    position: 'bottom',
  },
}

export const TextLeft: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    position: 'left',
  },
}

export const TextTop: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    position: 'top',
  },
}

export const TextRight: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'text',
    position: 'right',
  },
}

export const TestTabs: Story = {
  ...Default,
  play: async ({ args, canvasElement, step }) => {
    const screen = within(canvasElement)
    const tab1 = await screen.findByRole('tab', { name: 'One' })
    const tab2 = await screen.findByRole('tab', { name: 'Two' })
    const tab3 = await screen.findByRole('tab', { name: 'Three' })
    expect(tab1).toBeInTheDocument()
    expect(tab2).toBeInTheDocument()
    expect(tab3).toBeInTheDocument()

    expect(
      await screen
        .getAllByRole('tabpanel')
        .filter((tab) => tab.getAttribute('data-state') === 'active'),
    ).toHaveLength(1)
    expect(await screen.findByText('Tab one content')).toBeVisible()

    await userEvent.click(tab2)

    await waitFor(async () => {
      expect(
        await screen
          .getAllByRole('tabpanel')
          .filter((tab) => tab.getAttribute('data-state') === 'active'),
      ).toHaveLength(1)
      expect(await screen.findByText('Tab two content')).toBeVisible()
    })

    await userEvent.keyboard('[ArrowRight]')

    await waitFor(async () => {
      expect(
        await screen
          .getAllByRole('tabpanel')
          .filter((tab) => tab.getAttribute('data-state') === 'active'),
      ).toHaveLength(1)
      expect(await screen.findByText('Tab three content')).toBeVisible()
    })

    await userEvent.click(tab1)
  },
}
