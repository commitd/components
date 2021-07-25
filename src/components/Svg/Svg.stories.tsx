import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Svg } from '.'
import { Box } from '../'

export default {
  title: 'Components/Svg',
  component: Svg,
} as Meta

export const Default: Story = (args) => (
  <Svg {...args}>
    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
  </Svg>
)

/** The color (fill and stroke) is set to inherit by default but can also be controlled through the css */
export const Colors = () => (
  <>
    <Box css={{ display: 'inline', color: '$red500' }}>
      <Svg css={{ size: '$8' }}>
        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
      </Svg>
    </Box>
    <Svg css={{ size: '$8', color: '$green500' }}>
      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
    </Svg>
    <Svg css={{ size: '$8', fill: '$blue500' }}>
      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
    </Svg>
    <Svg css={{ size: '$8', fill: 'transparent', stroke: '$orange500' }}>
      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
    </Svg>
  </>
)
