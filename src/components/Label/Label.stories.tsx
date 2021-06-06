import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Label } from '.'
import { Input, Checkbox, Radio, Flex, RadioGroup } from '../'

export default {
  title: 'Components/Label',
  component: Label,
} as Meta

export const Default: Story = ({ children = 'Label', ...args }) => (
  <Label {...args}>{children}</Label>
)

/**
 * Form parts, `Input`, `Checkbox`, etc. support a label props that uses the default styling for the control.
 *
 * If you want to customize the styling you can use the Label separately and use the `htmlFor` prop and the aria support will be added for you.
 * `Label` supports the same additional props as `Text`.
 */
export const WithInputs: React.FC = () => (
  <>
    <Label weight="bold" htmlFor="firstName">
      First name
    </Label>
    <Input type="text" id="firstName" />
  </>
)

/**
 * If a for part component is nested, clicks are passed on the component and the `htmlFor` is not required.
 *
 * Some variants support the common use cases.
 */
export const NestedComponent: React.FC = () => (
  <Label size={2} variant="inline">
    <Checkbox />
    Label
  </Label>
)
