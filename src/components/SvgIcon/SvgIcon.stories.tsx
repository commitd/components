import { Meta, Story } from '@storybook/react'
import React from 'react'
import { SvgIcon } from '.'

export default {
  title: 'Components/SvgIcon',
  component: SvgIcon,
} as Meta

export const Default: Story = (args) => (
  <SvgIcon {...args}>
    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
  </SvgIcon>
)
