import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Label, LabelOptional } from '.'
import { Checkbox, Input } from '../'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  subcomponents: { LabelOptional },
}
export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: { children: 'Label' },
}

/**
 * Form parts, `Input`, `Checkbox`, etc. support a label props that uses the default styling for the control.
 *
 * If you want to customize the styling you can use the Label separately and use the `htmlFor` prop and the aria support will be added for you.
 * `Label` supports the same additional props as `Text`.
 */
export const WithInputs: Story = {
  render: () => (
    <>
      <Label weight="bold" htmlFor="firstName">
        First name
      </Label>
      <Input type="text" id="firstName" />
    </>
  ),
}

/**
 * If a for part component is nested, clicks are passed on the component and the `htmlFor` is not required.
 *
 * Some variants support the common use cases.
 */
export const NestedComponent: Story = {
  render: () => (
    <Label size="$2" variant="inline">
      <Checkbox />
      Label
    </Label>
  ),
}

/**
 * A optional flag can be added - this is handled by default in forms.
 */
export const Optional: Story = {
  render: () => (
    <>
      <Label htmlFor="firstName">
        First name
        <LabelOptional />
      </Label>
      <Input type="text" id="firstName" />
    </>
  ),
}
