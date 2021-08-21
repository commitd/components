import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Tab, TabContent, TabsList, TabsRoot } from '.'

export default {
  title: 'Components/Tabs',
  component: TabsRoot,
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
} as Meta

const Template: Story = (args) => (
  <TabsRoot {...args}>
    <TabsList>
      <Tab value="tab1">One</Tab>
      <Tab value="tab2">Two</Tab>
      <Tab value="tab3">Three</Tab>
    </TabsList>
    <TabContent value="tab1">Tab one content</TabContent>
    <TabContent value="tab2">Tab two content</TabContent>
    <TabContent value="tab3">Tab three content</TabContent>
  </TabsRoot>
)

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'tab1',
}

export const Primary = Template.bind({})
Primary.args = {
  defaultValue: 'tab1',
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  defaultValue: 'tab2',
  variant: 'secondary',
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  defaultValue: 'tab3',
  variant: 'tertiary',
}

/**
 * By default content is shown when the tab is focused. Use `activationMode` `manual` to require a click to change tabs.
 */
export const Manual = Template.bind({})
Manual.args = {
  defaultValue: 'tab1',
  variant: 'tertiary',
  activationMode: 'manual',
}

/* Tabs can have `size` small */
export const Small = Template.bind({})
Small.args = {
  defaultValue: 'tab2',
  size: 'small',
}

/* Tabs can have `size` large */
export const Large = Template.bind({})
Large.args = {
  defaultValue: 'tab3',
  size: 'large',
}

export const Left = Template.bind({})
Left.args = {
  defaultValue: 'tab1',
  variant: 'primary',
  position: 'left',
}
export const Right = Template.bind({})
Right.args = {
  defaultValue: 'tab1',
  variant: 'secondary',
  position: 'right',
}
export const Top = Template.bind({})
Top.args = {
  defaultValue: 'tab1',
  variant: 'tertiary',
  position: 'top',
}
export const Bottom = Template.bind({})
Bottom.args = {
  defaultValue: 'tab1',
  variant: 'brand',
  position: 'bottom',
}

export const TertiaryLeft = Template.bind({})
TertiaryLeft.args = {
  defaultValue: 'tab1',
  variant: 'tertiary',
  position: 'left',
}

export const TertiaryTop = Template.bind({})
TertiaryTop.args = {
  defaultValue: 'tab1',
  variant: 'tertiary',
  position: 'top',
}

export const TertiaryRight = Template.bind({})
TertiaryRight.args = {
  defaultValue: 'tab1',
  variant: 'tertiary',
  position: 'right',
}
