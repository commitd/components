import { Paper } from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Paper',
  component: Paper,
} satisfies Meta<typeof Paper>

type Story = StoryObj<typeof Paper>

export const Default: Story = {
  render: (args) => (
    <Paper css={{ height: '100px', width: '100%' }} {...args} />
  ),
}
