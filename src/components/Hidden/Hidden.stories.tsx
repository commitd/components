import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Close } from '../Icons'
import { Button } from '../Button'
import { Hidden } from '.'

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
