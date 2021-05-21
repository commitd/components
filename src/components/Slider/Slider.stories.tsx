import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Slider, SliderProps } from '.'

export default {
  title: 'Components/Slider',
  component: Slider,
} as Meta

export const Default: React.FC = () => {
  return <Slider />
}

const Template: Story<SliderProps> = (args) => <Slider {...args} />

export const Primary = Template.bind({})
Primary.args = {}
