import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Overlay } from '.'

export default {
  title: 'Components/Overlay',
  component: Overlay,
} as Meta

export const Default: Story = (args) => (
  <Overlay css={{ height: '50px', width: '100%' }} {...args} />
)
