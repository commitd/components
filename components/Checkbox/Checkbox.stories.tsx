import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Checkbox, CheckedState } from '.'
import { Flex, Form, FormButton } from '../'
import { Variants, rotateCheckedState, withFormData } from '../../docs/util'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
}
export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: () => <Checkbox onCheckedChange={action('checked')} />,
}

/**
 * A primary version for if the check is the main action.
 * (This probably doesn't happen very often.)
 *
 * Example with state - __Note__ the use of `onCheckedChange` to get the change notification from all triggering actions.
 * You can import the `CheckedState` to get the correct typing.
 */
export const Primary: Story = {
  render: () => {
    const [checked, setChecked] = useState<CheckedState>(false)
    return (
      <Checkbox
        checked={checked}
        variant="primary"
        onCheckedChange={setChecked}
      />
    )
  },
}

export const Destructive: Story = {
  render: () => {
    return (
      <Flex gap>
        <Checkbox variant="primary" destructive />
        <Checkbox destructive />
      </Flex>
    )
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <Flex gap>
        <Checkbox disabled variant="primary" />
        <Checkbox disabled variant="primary" checked />
        <Checkbox disabled />
        <Checkbox disabled checked />
      </Flex>
    )
  },
}

/**
 * Checkbox also support a `indeterminate` checked state.
 * This can only be used in a controlled behaviour.
 */
export const Indeterminate: Story = {
  render: () => {
    const [checked, setChecked] = useState<CheckedState>('indeterminate')

    const rotate = rotateCheckedState(setChecked)

    return (
      <Flex gap>
        <Checkbox
          checked={checked}
          variant="primary"
          onCheckedChange={rotate}
        />
        <Checkbox checked={checked} onCheckedChange={rotate} />
      </Flex>
    )
  },
}

/**
 * The check box has a `label` prop to support adding a standard label.
 * If a custom label position or style is required use the `Label` component separately.
 */
export const WithLabel: Story = {
  render: () => (
    <Checkbox onCheckedChange={action('checked')} label="Checkbox" />
  ),
}

/**
 * Demo of use in a `Form`
 */
export const InForm: Story = {
  render: () => {
    return (
      <Form onSubmit={withFormData(alert)}>
        <Checkbox name="demo" label="Demo" />
        <FormButton />
      </Form>
    )
  },
}

export const All: Story = {
  render: () => (
    <Variants
      component={Checkbox}
      variant={['primary', 'secondary']}
      destructive={[false, true]}
      disabled={[false, true]}
      checked={[false, true, 'indeterminate']}
    />
  ),
}
