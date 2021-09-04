import React from 'react'

import { Story, Meta } from '@storybook/react'
import { Skeleton } from '.'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta

const Template: Story = (args) => <Skeleton {...args} />

export const Primary = Template.bind({})
export const Avatar = Template.bind({})
Avatar.args = {
  variant: 'avatar',
}
export const Text = Template.bind({})
Text.args = {
  variant: 'text',
}
export const Title = Template.bind({})
Title.args = {
  variant: 'title',
}

export const Buttons = () => (
  <>
    <Skeleton variant="button" size="small" />
    <Skeleton variant="button" />
    <Skeleton variant="button" size="large" />
  </>
)
