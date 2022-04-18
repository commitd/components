import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Radio, RadioGroup } from '.'
import { Form, FormButton, FormControl, Row } from '../'
import { withFormData } from '../../docs/util'

export default {
  title: 'Components/Radio',
  component: RadioGroup,
  subcomponents: { Radio },
} as Meta

export const Default: Story = () => {
  return (
    <RadioGroup>
      <Radio value="mobx" label="Mobx" />
      <Radio value="redux" label="Redux" />
      <Radio value="context" label="Context" />
    </RadioGroup>
  )
}

/** A primary variants is also available but should be used sparingly, e.g. when the only or most important control on the page. */
export const Primary: Story = () => {
  return (
    <RadioGroup>
      <Radio variant="primary" value="mobx" label="Mobx" />
      <Radio variant="primary" value="redux" label="Redux" />
      <Radio variant="primary" value="context" label="Context" />
    </RadioGroup>
  )
}

/**
 * The groups can be orientated horizontally or vertically (default).
 */
export const Orientation: Story = () => {
  return (
    <Row gap>
      <RadioGroup orientation="vertical">
        <Radio value="mobx" label="Mobx" />
        <Radio value="redux" label="Redux" />
        <Radio value="context" label="Context" />
      </RadioGroup>
      <RadioGroup orientation="horizontal">
        <Radio value="mobx" label="Mobx" />
        <Radio value="redux" label="Redux" />
        <Radio value="context" label="Context" />
      </RadioGroup>
    </Row>
  )
}

export const Controlled: Story = () => {
  const [value, setValue] = React.useState('redux')
  return (
    <RadioGroup value={value} onValueChange={(v) => setValue(v)}>
      <Radio value="mobx" label="Mobx" />
      <Radio value="redux" label="Redux" />
      <Radio value="context" label="Context" />
    </RadioGroup>
  )
}

/**
 * Individual radio items can be disabled.
 *
 * The disabled prop on radio item can be used inside a FormControl.
 */
export const Disabled: Story = () => {
  return (
    <Row gap>
      <RadioGroup defaultValue="redux">
        <Radio value="mobx" label="Mobx" />
        <Radio value="redux" label="Redux" />
        <Radio disabled value="context" label="Context" />
      </RadioGroup>
      <RadioGroup defaultValue="context">
        <Radio variant="primary" disabled value="mobx" label="Mobx" />
        <Radio variant="primary" disabled value="redux" label="Redux" />
        <Radio variant="primary" disabled value="context" label="Context" />
      </RadioGroup>
      <FormControl>
        <RadioGroup disabled defaultValue="context">
          <Radio value="mobx" label="Mobx" />
          <Radio value="redux" label="Redux" />
          <Radio value="context" label="Context" />
        </RadioGroup>
      </FormControl>
    </Row>
  )
}

export const Destructive: Story = () => {
  return (
    <Row gap>
      <RadioGroup label="Choose">
        <Radio destructive value="mobx" label="Mobx" />
        <Radio destructive value="redux" label="Redux" />
        <Radio destructive value="context" label="Context" />
      </RadioGroup>
      <RadioGroup label="Choose">
        <Radio destructive variant="primary" value="mobx" label="Mobx" />
        <Radio destructive variant="primary" value="redux" label="Redux" />
        <Radio destructive variant="primary" value="context" label="Context" />
      </RadioGroup>
    </Row>
  )
}

/**
 * This story just checks the spacing works without labels but this would be a rare requirement. Normally, you would have labels.
 */
export const NoLabels: Story = () => {
  return (
    <Row gap>
      <RadioGroup orientation="vertical">
        <Radio value="mobx" />
        <Radio value="redux" />
        <Radio value="context" />
      </RadioGroup>
      <RadioGroup orientation="horizontal" defaultValue="context">
        <Radio variant="primary" value="mobx" />
        <Radio variant="primary" value="redux" />
        <Radio variant="primary" value="context" />
      </RadioGroup>
    </Row>
  )
}

/**
 * Demo of use in a `Form`
 */
export const InForm: Story = () => {
  return (
    <Form onSubmit={withFormData(alert)}>
      <RadioGroup name="radio" id="radio-test" label="Radio">
        <Radio value="mobx" label="Mobx" />
        <Radio value="redux" label="Redux" />
        <Radio value="context" label="Context" />
      </RadioGroup>
      <FormButton />
    </Form>
  )
}
