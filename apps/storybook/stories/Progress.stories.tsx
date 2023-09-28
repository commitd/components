import { Progress, Slider, Stack, Text } from '@committed/ds'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useState } from 'react'

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
    colorPalette: {
      control: {
        type: 'select',
        options: ['$primary', '$secondary', '$neutral'],
      },
      description:
        'The progress is available in different variants. For a primary action use `primary`, for a background task use the `secondary` (default), two others are provided for special use cases.',
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
  args: { colorPalette: '$primary', value: 50 },
}
export const Neutral: Story = {
  args: { colorPalette: '$neutral', value: 75 },
}

export const Indeterminate: Story = {}

export const Decorated: StoryFn = () => (
  <Stack>
    <Text>Download 20% complete</Text>
    <Progress value={20} />
    <Text size="$-1" css={{ color: '$text.secondary' }}>
      6 hours remaining
    </Text>
  </Stack>
)

export const Controlled: StoryFn = () => {
  const [value, setValue] = useState([0])
  return (
    <Stack>
      <Progress value={value[0]} />
      <Progress colorPalette="$neutral" value={value[0]} />
      <Progress colorPalette="$primary" value={value[0]} />
      <Progress colorPalette="$secondary" value={value[0]} />
      <Progress colorPalette="$success" value={value[0]} />
      <Progress colorPalette="$error" value={value[0]} />
      <Progress colorPalette="$info" value={value[0]} />
      <Slider css={{ mt: '$6' }} value={value} onValueChange={setValue} />
    </Stack>
  )
}
