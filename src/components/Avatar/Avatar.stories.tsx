import { Meta } from '@storybook/react'
import React from 'react'
import { Avatar } from '.'
import { Flex } from '../'
import { randomColor } from '../../utils'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta

export const Default = () => (
  <Avatar css={{ m: '$3' }} alt="John Smith" src="https://i.pravatar.cc" />
)

/**
 * Size can be controlled through the `css` prop, the default is `$7`.
 */
export const Size = () => (
  <Flex>
    <Avatar
      css={{ m: '$3', size: '$6' }}
      alt="John Smith"
      src="https://i.pravatar.cc"
    />
    <Avatar css={{ m: '$3' }} alt="John Smith" src="https://i.pravatar.cc" />
    <Avatar
      css={{ m: '$3', size: '$8' }}
      alt="John Smith"
      src="https://i.pravatar.cc"
    />
  </Flex>
)

/**
 * If no image the avatar will default to the letters provided.
 *
 * Background color can be controlled through the `css` prop,
 */
export const Letters = () => (
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
    <Avatar css={{ m: '$2' }} backgroundColor="$red500" color="$red100">
      H
    </Avatar>
    <Avatar css={{ m: '$2' }} backgroundColor="#AB34FA" color="$white">
      PP
    </Avatar>
    <Avatar
      css={{ m: '$2' }}
      backgroundColor={randomColor()}
      color={randomColor('100')}
    >
      RC
    </Avatar>
  </Flex>
)
