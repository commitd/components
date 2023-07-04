import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Avatar } from '.'
import { randomColor } from '../../docs/util'
import { Inline } from '../Inline'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
}
export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: { alt: 'John Smith', src: 'https://i.pravatar.cc' },
}

/**
 * Size can be controlled through the `size` prop, with values `small`, `medium` (default) and `large`.
 */
export const Size: Story = {
  render: () => (
    <Inline>
      <Avatar size="small" alt="John Smith" src="https://i.pravatar.cc" />
      <Avatar alt="John Smith" src="https://i.pravatar.cc" />
      <Avatar size="large" alt="John Smith" src="https://i.pravatar.cc" />
    </Inline>
  ),
}

/**
 * If no image the avatar will default to the letters provided.
 *
 * Background color can be controlled through the `css` prop,
 */
export const Letters: Story = {
  render: () => (
    <Inline>
      <Avatar src="Missing" backgroundColor="primary" color="primaryContrast">
        H
      </Avatar>
      <Avatar backgroundColor="success">N</Avatar>
      <Avatar backgroundColor="warning">OP</Avatar>
      <Avatar backgroundColor="error9" color="error1">
        H
      </Avatar>
      <Avatar backgroundColor="#AB34FA" color="white">
        PP
      </Avatar>
      <Avatar backgroundColor={randomColor()} color={randomColor(1)}>
        RC
      </Avatar>
    </Inline>
  ),
}
