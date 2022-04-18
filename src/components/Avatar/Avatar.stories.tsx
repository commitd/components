import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Avatar } from '.'
import { Flex } from '../'
import { randomColor } from '../../utils'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta

export const Default: Story = () => (
  <Avatar css={{ m: '$3' }} alt="John Smith" src="https://i.pravatar.cc" />
)

/**
 * Size can be controlled through the `size` prop, with values `small`, `medium` (default) and `large`.
 */
export const Size: Story = () => (
  <Flex css={{ gap: '$3' }}>
    <Avatar size="small" alt="John Smith" src="https://i.pravatar.cc" />
    <Avatar alt="John Smith" src="https://i.pravatar.cc" />
    <Avatar size="large" alt="John Smith" src="https://i.pravatar.cc" />
  </Flex>
)

/**
 * If no image the avatar will default to the letters provided.
 *
 * Background color can be controlled through the `css` prop,
 */
export const Letters: Story = () => (
  <Flex>
    <Avatar
      src="Missing"
      css={{ m: '$2' }}
      backgroundColor="$primary"
      color="$primaryContrast"
    >
      H
    </Avatar>
    <Avatar css={{ m: '$2' }} backgroundColor="$success">
      N
    </Avatar>
    <Avatar css={{ m: '$2' }} backgroundColor="$warning">
      OP
    </Avatar>
    <Avatar css={{ m: '$2' }} backgroundColor="$error9" color="$error1">
      H
    </Avatar>
    <Avatar css={{ m: '$2' }} backgroundColor="#AB34FA" color="$white">
      PP
    </Avatar>
    <Avatar
      css={{ m: '$2' }}
      backgroundColor={randomColor()}
      color={randomColor(1)}
    >
      RC
    </Avatar>
  </Flex>
)
