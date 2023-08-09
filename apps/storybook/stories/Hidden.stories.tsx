import { Button, Close, Hidden } from '@committed/ds'
import { Meta, Story } from '@storybook/react'

export default {
  title: 'Components/Hidden',
  component: Hidden,
} as Meta

export const Default: Story = (args) => (
  <Button>
    <Close />
    <Hidden>Settings</Hidden>
  </Button>
)
