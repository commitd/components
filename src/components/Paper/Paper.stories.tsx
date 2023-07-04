import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Paper } from '.'
import { Box } from '../Box'

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
}

export default meta
type Story = StoryObj<typeof Paper>

export const Default: Story = {
  render: (args) => (
    <Paper css={{ minHeight: '100px', minWidth: '100%' }} {...args} />
  ),
}

export const OnGrey: Story = {
  ...Default,
  decorators: [
    (story) => <Box css={{ padding: 4, bg: 'grey4' }}>{story()}</Box>,
  ],
}
