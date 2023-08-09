import { Avatar, Inline } from '@committed/ds'
import { Meta, StoryObj } from '@storybook/react'

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
 * Background color can be controlled through the exposed `css` background props and shorthands.
 */
export const Letters: Story = {
  render: () => (
    <Inline>
      <Avatar src="Missing" backgroundColor="$primary" color="$primary.text">
        H
      </Avatar>
      <Avatar backgroundColor="$success">N</Avatar>
      <Avatar backgroundColor="$warn.3" color="$warn">
        OP
      </Avatar>
      <Avatar backgroundColor="$error.9" color="$error.1">
        H
      </Avatar>
      <Avatar backgroundColor="#AB34FA" color="white">
        PP
      </Avatar>
    </Inline>
  ),
}
