import { Stack } from '@committed/ds/src'
import { token } from '@committed/ss/tokens'
import { SystemStyleObject } from '@committed/ss/types'
import { Meta, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import { ExampleComponent } from './utils'

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    spacing: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large', 'responsive'],
      },
      description:
        'The spacing is available in 3 different sizes, and a responsive version.',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right'],
      },
      description: 'The horizontal alignment can be set using the align prop.',
    },
  },
} satisfies Meta<typeof Stack>

type Story = StoryObj<
  ComponentProps<typeof Stack> & {
    height: SystemStyleObject['height']
    width: SystemStyleObject['width']
  }
>

export const Default: Story = {
  render: ({ height, width, ...args }) => (
    <Stack {...args}>
      <ExampleComponent height={height} width={width} />
      <ExampleComponent height={height} width={width} />
      <ExampleComponent height={height} width={width} />
    </Stack>
  ),
}

/**
 * `small` spacing can be used for the stacking of smaller components
 */
export const Small: Story = {
  ...Default,
  args: {
    spacing: 'small',
    height: token('sizes.$6'),
  },
}
/**
 * `large` spacing can be used for the stacking of large components
 */
export const Large: Story = {
  ...Default,
  args: {
    spacing: 'large',
    height: token('sizes.$10'),
  },
}

/**
 * `responsive` spacing can be used for stacks used across multiple display types
 */
export const Responsive: Story = {
  ...Default,
  args: {
    spacing: 'responsive',
  },
}

/**
 * `left` alignment is the default
 */
export const Left: Story = {
  ...Default,
  args: {
    width: '25%',
    align: 'left',
  },
}

/**
 * `center` alignment can be used to put items in the center of the stack
 */
export const Center: Story = {
  ...Default,
  args: {
    width: '25%',
    align: 'center',
  },
}

/**
 * `right` alignment can be used to align items to the right of the stack
 */
export const Bottom: Story = {
  ...Default,
  args: {
    width: '25%',
    align: 'right',
  },
}
