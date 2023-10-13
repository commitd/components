import { Inline } from '@committed/ds'
import { SystemStyleObject, token } from '@committed/ds-ss'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { ComponentProps } from 'react'
import { ExampleComponent } from './utils'

export default {
  title: 'Components/Inline',
  component: Inline,
  argTypes: {
    spacing: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large', 'responsive'],
      },
      description:
        'The spacing is available in 3 different sizes, and a responsive version.',
    },
  },
} satisfies Meta<typeof Inline>

type Story = StoryObj<
  ComponentProps<typeof Inline> & {
    height: SystemStyleObject['height']
    width: SystemStyleObject['width']
  }
>
export const Default: Story = {
  render: ({ height, width, ...args }) => (
    <Inline {...args}>
      <ExampleComponent height={height} width={width} />
      <ExampleComponent height={height} width={width} />
      <ExampleComponent height={height} width={width} />
    </Inline>
  ),
}

/**
 * `small` spacing can be used for the spacing of smaller components
 */
export const Small: Story = {
  ...Default,
  args: {
    spacing: 'small',
    height: token('sizes.$6'),
  },
}
/**
 * `large` spacing can be used for the spacing of large components
 */
export const Large: Story = {
  ...Default,
  args: {
    spacing: 'large',
    height: token('sizes.$10'),
  },
}
/**
 * `responsive` spacing can be used across multiple display types
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
/**
 * Add the `wrap` prop to allow the inline element to wrap the children
 */
export const Wrap: StoryFn = () => (
  <Inline wrap>
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
    <ExampleComponent width="100px" />
  </Inline>
)
