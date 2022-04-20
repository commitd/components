import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Paper } from '.'

export default {
  title: 'Components/Paper',
  component: Paper,
} as Meta

export const Default: Story = (args) => (
  <Paper css={{ height: '100px', width: '100%' }} {...args} />
)
