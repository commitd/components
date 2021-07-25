import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Box } from '.'

export default {
  title: 'Components/Box',
  component: Box,
} as Meta

export const Default: React.FC = () => (
  <Box
    css={{
      backgroundColor: '$paper',
      color: '$text',
      border: '$colors$red500 solid $sizes$3',
      padding: '$4',
    }}
  >
    Box
  </Box>
)

const Template: Story = (args) => <Box {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'Example' }

export const Padding = Template.bind({})
Padding.args = {
  children: 'Padding of $space$4 (16px)',
  css: {
    p: '$4',
    border: 'solid $sizes$1',
  },
}

export const Margin = Template.bind({})
Margin.args = {
  children: 'Margin of $space$3 (12px)',
  css: {
    m: '$3',
    border: 'solid $sizes$1',
  },
}

export const Colors = Template.bind({})
Colors.args = {
  children: 'Access to theme colors',
  css: {
    m: '$3',
    p: '$2',
    border: 'solid $sizes$1',
    backgroundColor: '$primary',
    color: '$primaryContrast',
  },
}

export const Responsive = Template.bind({})
Responsive.args = {
  children: 'Responsive',
  css: {
    backgroundColor: '$red500',
    '@sm': {
      backgroundColor: '$yellow500',
    },
    '@md': {
      backgroundColor: '$blue500',
    },
    '@lg': {
      backgroundColor: '$orange500',
    },
    '@xl': {
      backgroundColor: '$green500',
    },
    m: '$3',
    p: '$2',
    border: 'solid $sizes$1',
  },
}

export const As = Template.bind({})
As.args = {
  as: 'article',
  children: 'As article',
}
