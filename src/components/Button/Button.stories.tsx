import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    /**
     * react-docgen-typescript fails us here.
     * @see https://github.com/storybookjs/storybook/issues/12641#issuecomment-708603353
     */
    as: {
      control: {
        type: 'select',
        options: ['button', 'a'],
      },
      defaultValue: 'button',
      description:
        'Can be any HTML element, but can also be any component. Typically only used with "button" or "a".',
    },
  },
} as Meta

export const Default = () => {
  return <Button>Button</Button>
}

const Template: Story = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'Button' }
