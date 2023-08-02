import { Box, Paper } from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Paper',
  component: Paper,
} satisfies Meta<typeof Paper>

type Story = StoryObj<typeof Paper>

export const Default: Story = {
  render: (args) => (
    <Paper css={{ minHeight: '100px', minWidth: '100%' }} {...args} />
  ),
}

export const OnGrey: Story = {
  ...Default,
  decorators: [
    (story) => <Box css={{ padding: '$2', bg: '$grey.4' }}>{story()}</Box>,
  ],
}
