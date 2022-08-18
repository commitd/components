import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { Inline } from '.'
import { CSS } from '../../stitches.config'
import { ExampleComponent } from '../../utils/story-utils'

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
} as Meta

export const Default: Story<ComponentProps<typeof Inline>> = (args) => (
  <Inline {...args}>
    <ExampleComponent />
    <ExampleComponent />
    <ExampleComponent />
  </Inline>
)

const Template: Story<
  ComponentProps<typeof Inline> & { height: CSS['height']; width: CSS['width'] }
> = ({ height, width, ...args }) => (
  <Inline {...args}>
    <ExampleComponent height={height} width={width} />
    <ExampleComponent height={height} width={width} />
    <ExampleComponent height={height} width={width} />
  </Inline>
)

/**
 * `small` spacing can be used for the spacing of smaller components
 */
export const Small = Template.bind({})
Small.args = {
  spacing: 'small',
  height: '$6',
}

/**
 * `large` spacing can be used for the spacing of large components
 */
export const Large = Template.bind({})
Large.args = {
  spacing: 'large',
  height: '$10',
}

/**
 * `responsive` spacing can be used across multiple display types
 */
export const Responsive = Template.bind({})
Responsive.args = {
  spacing: 'responsive',
}

/**
 * `left` alignment is the default
 */
export const Left = Template.bind({})
Left.args = {
  width: '25%',
  align: 'left',
}

/**
 * `center` alignment can be used to put items in the center of the stack
 */
export const Center = Template.bind({})
Center.args = {
  width: '25%',
  align: 'center',
}

/**
 * `right` alignment can be used to align items to the right of the stack
 */
export const Bottom = Template.bind({})
Bottom.args = {
  width: '25%',
  align: 'right',
}
