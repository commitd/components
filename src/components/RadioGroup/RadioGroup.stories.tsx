import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Radio, RadioGroup } from '.'
import { Form, FormButton, FormControl } from '../'
import { withFormData } from '../../docs/util'
import { Inline } from '../Inline'

const subcomponents = { Radio } as unknown as Meta<
  typeof RadioGroup
>['subcomponents']

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Radio',
  component: RadioGroup,
  subcomponents,
}
export default meta

export const Default: StoryFn = () => {
  return (
    <RadioGroup>
      <Radio value="mobx" label="Mobx" />
      <Radio value="redux" label="Redux" />
      <Radio value="context" label="Context" />
    </RadioGroup>
  )
}

/** A primary variants is also available but should be used sparingly, e.g. when the only or most important control on the page. */
export const Primary: StoryFn = () => {
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
export const Orientation: StoryFn = () => {
  return (
    <Inline>
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
    </Inline>
  )
}

export const Controlled: StoryFn = () => {
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
export const Disabled: StoryFn = () => {
  return (
    <Inline>
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
    </Inline>
  )
}

export const Destructive: StoryFn = () => {
  return (
    <Inline>
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
    </Inline>
  )
}

/**
 * This story just checks the spacing works without labels but this would be a rare requirement. Normally, you would have labels.
 */
export const NoLabels: StoryFn = () => {
  return (
    <Inline>
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
    </Inline>
  )
}

/**
 * Demo of use in a `Form`
 */
export const InForm: StoryFn = () => {
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
