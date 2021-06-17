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

export const Default: Story = (args) => (
  <Select {...args}>
    <SelectItem value="one">One</SelectItem>
    <SelectItem value="two">Two</SelectItem>
    <SelectItem value="three">Three</SelectItem>
  </Select>
)
