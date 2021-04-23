import { Meta, Story } from '@storybook/react'
import React from 'react'
import { styled } from 'stitches.config'
import { ThemeProvider, ThemeProviderProps } from '.'

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  decorators: [],
} as Meta

const Example = styled('div', {
  color: '$text',
  backgroundColor: '$background',
  width: '100%',
  height: '300px',
})

const Template: Story<ThemeProviderProps> = (args) => (
  <ThemeProvider {...args}>
    <Example>Example</Example>
  </ThemeProvider>
)

export const Default = () => <Example>Example</Example>

export const Light = Template.bind({})
Light.args = {
  choice: 'light',
}

export const Dark = Template.bind({})
Dark.args = {
  choice: 'dark',
}
