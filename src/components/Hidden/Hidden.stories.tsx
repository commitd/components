import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Hidden } from '.'
import { Button } from '../Button'
import { Close } from '../Icons'

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
