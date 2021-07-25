import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Select, SelectItem } from '.'

export default {
  title: 'Components/Select',
  component: Select,
  subcomponents: {
    SelectItem,
  },
} as Meta

const Template: Story = (args) => (
  <Select {...args}>
    <SelectItem value="one">One</SelectItem>
    <SelectItem value="two">Two</SelectItem>
    <SelectItem value="three">Three</SelectItem>
  </Select>
)

export const Default = Template.bind({})
export const Label = Template.bind({})
Label.args = {
  label: 'Select',
}
export const Placeholder = Template.bind({})
Placeholder.args = {
  placeholder: '--Select an option--',
}
export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}
