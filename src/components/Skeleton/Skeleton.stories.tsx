import React from 'react'
import { Flex } from '../Flex'
import { Story, Meta } from '@storybook/react'
import { Skeleton } from '.'

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta

const Template: Story = (args) => <Skeleton {...args} />

export const Primary = Template.bind({})

export const Text = Template.bind({})
Text.args = {
  variant: 'text',
}

export const Title = Template.bind({})
Title.args = {
  variant: 'title',
}

/** An alternative animation, `pulse`, is available  */
export const Animation = Template.bind({})
Animation.args = {
  variant: 'title',
  animation: 'pulse',
}

/** The `avatar` variant also supports an additional size prop to reflect the sizing on the `Avatar` component.  */
export const Avatar: Story = () => (
  <Flex css={{ gap: '$3' }}>
    <Skeleton variant="avatar" size="small" />
    <Skeleton variant="avatar" />
    <Skeleton variant="avatar" size="large" />
  </Flex>
)

/** The `button` variant also supports an additional size prop to reflect the sizing on the `Button` component.  */
export const Buttons: Story = () => (
  <Flex css={{ gap: '$3' }}>
    <Skeleton variant="button" size="small" />
    <Skeleton variant="button" />
    <Skeleton variant="button" size="large" />
  </Flex>
)
