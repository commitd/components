import { component } from '@committed/ds'
import { css } from '@committed/ss/css'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'

const Component = component('button', 'c-component')

const meta: Meta<typeof Component> = {
  title: 'Util/Component',
  component: Component,
}
export default meta
type Story = StoryObj<typeof Component>

export const Primary: Story = { args: { children: 'Example' } }

export const NormalChild: StoryFn = () => (
  <Component>
    <a href="https://committed.io">link</a>
  </Component>
)

export const WithRef: StoryFn = () => {
  const button = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    if (button.current) {
      button.current.focus()
    }
  }, [])
  return <Component ref={button}>Focused</Component>
}

export const AsChild: StoryFn = () => (
  <Component asChild>
    <a href="https://committed.io">link</a>
  </Component>
)

export const ClassName: Story = {
  args: { children: 'classes: c-component test', className: 'test' },
}

export const ClassNameWithCss: Story = {
  args: {
    children: 'classes: c-component css-generated',
    className: css({ color: '$error' }),
  },
}

export const Css: Story = {
  args: {
    children: 'classes: c-component css-generated',
    css: {
      color: '$error',
      bg: '$warn',
    },
  },
}
export const CssAndClassName: Story = {
  args: {
    children: 'classes: c-component css-generated test',
    className: 'test',
    css: { color: '$error', bg: '$warn' },
  },
}
