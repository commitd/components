import { Box, Svg } from '@committed/ds/src/components'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/Svg',
  component: Svg,
  argTypes: {
    path: {
      description: 'Add the given svg path',
      type: 'string',
    },
    color: {
      description: 'Set the color of the svg used for fill and stroke',
    },
    fill: {
      description: 'set the fill color',
    },
    stroke: {
      description: 'set the stroke color',
    },
  },
} as Meta

export const Default: StoryFn = (args) => (
  <Svg {...args}>
    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
  </Svg>
)

/** The color (fill and stroke) is set to inherit by default but can also be controlled through the css */
export const Colors: StoryFn = () => (
  <>
    <Box css={{ display: 'inline', color: '$error.9' }}>
      <Svg size="$5">
        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
      </Svg>
    </Box>
    <Svg size="$6" color="$success.9">
      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
    </Svg>
    <Svg css={{ size: '$7', fill: '$info.9' }}>
      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
    </Svg>
    <Svg
      size="$8"
      fill="transparent"
      stroke="$warning.9"
      path="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"
    />
  </>
)
