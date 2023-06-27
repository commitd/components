import { Meta, StoryObj } from '@storybook/react'
import { Base } from '.'
import { css } from '../../../styled-system/css'

const meta: Meta<typeof Base> = {
  title: 'Components/Base',
  component: Base,
}
export default meta
type Story = StoryObj<typeof Base>

export const Primary: Story = { args: { children: 'Example' } }
export const Article: Story = { args: { as: 'article', children: 'Article' } }
export const ClassName: Story = {
  args: { children: 'Class', className: 'test' },
}
export const Css: Story = {
  args: { children: 'Css', css: { color: 'error7' } },
}
export const CssClassName: Story = {
  args: { children: 'Css', className: css({ color: 'error7' }) },
}
export const CssClass: Story = {
  args: {
    children: 'CSS + Class',
    className: 'test',
    css: { color: 'error7' },
  },
}
