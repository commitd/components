import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Tab, TabContent, Tabs, TabsList } from '.'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { TabsList, Tab, TabContent },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'brand'],
      },
      description:
        'The button is available in different variants. For the primary action on the view use the `primary` variant, most others should be `secondary` which is the default. Use `tertiary` for paired no-action buttons and `brand` is for use in the AppBar.',
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
      description: 'The button is available in 3 different sizes.',
    },
  },
}
export default meta
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

export const Primary: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  ...Default,
  args: {
    defaultValue: 'tab2',
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  ...Default,
  args: {
    defaultValue: 'tab3',
    variant: 'tertiary',
  },
}

/**
 * By default content is shown when the tab is focused. Use `activationMode` `manual` to require a click to change tabs.
 */
export const Manual: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'tertiary',
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
    variant: 'primary',
    position: 'left',
  },
}

export const Right: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'secondary',
    position: 'right',
  },
}

export const Top: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'tertiary',
    position: 'top',
  },
}

export const Bottom: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'brand',
    position: 'bottom',
  },
}

export const TertiaryLeft: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'tertiary',
    position: 'left',
  },
}

export const TertiaryTop: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'tertiary',
    position: 'top',
  },
}

export const TertiaryRight: Story = {
  ...Default,
  args: {
    defaultValue: 'tab1',
    variant: 'tertiary',
    position: 'right',
  },
}
