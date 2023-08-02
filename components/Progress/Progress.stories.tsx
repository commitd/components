import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Progress } from '.'
import { Column, Slider, Stack, Text } from '../'

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    value: {
      control: {
        type: 'range',
        options: {
          min: 0,
          max: 100,
          step: 1,
        },
      },
      description: 'The current progress, between the min and max values',
    },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'gradient', 'brand'],
      },
      description:
        'The progress is available in different variants. For a primary action use `primary`, for a background task use the `secondary` (default), two others are provided for special use cases.',
    },
    destructive: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
      description:
        'Add the destructive flag for actions that are destructive, such as delete actions.',
    },
    max: {
      control: {
        type: 'number',
        options: {
          min: 0,
          max: 200,
          step: 50,
        },
      },
      defaultValue: 100,
      description: 'The progress maximum value',
    },
  },
}
export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {}

export const Primary: Story = {
  args: { variant: 'primary', value: 50 },
}
export const Brand: Story = {
  args: { variant: 'brand', value: 75 },
}
export const Gradient: Story = {
  args: { variant: 'gradient', value: 100 },
}
export const Destructive: Story = {
  args: { destructive: true, value: 40 },
}
export const Indeterminate: Story = {}

export const Decorated: StoryFn = () => (
  <Stack>
    <Text>Download 10% complete</Text>
    <Progress variant="primary" value={50} />
    <Text size="-1" css={{ color: '$textSecondary' }}>
      6 hours remaining
    </Text>
  </Stack>
)

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState([0])
  return (
    <Column css={{ gap: '$3' }}>
      <Progress value={value[0]} />
      <Progress variant="primary" value={value[0]} />
      <Progress variant="brand" value={value[0]} />
      <Progress variant="gradient" value={value[0]} />
      <Progress destructive value={value[0]} />
      <Slider css={{ mt: '$6' }} value={value} onValueChange={setValue} />
    </Column>
  )
}
