import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Paper } from '.'

export default {
  title: 'Components/Paper',
  component: Paper,
} as Meta

export const Default: Story = (args) => (
  <Paper css={{ height: '100px', width: '100%' }} {...args} />
)
