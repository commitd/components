import React from 'react'
import { Story, Meta } from '@storybook/react'
import { AppBar, AppBarProps } from '.'
import { Button } from '..'

export default {
  title: 'Components/AppBar',
  component: AppBar,
} as Meta

export const Default: React.FC = () => {
  return (
    <AppBar
      heading="Example"
      actions={[<Button color="inherit">Login</Button>]}
    />
  )
}
