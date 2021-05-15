import { Meta } from '@storybook/react'
import React from 'react'
import { Radio, RadioGroup } from '.'
import { Column } from '../'

export default {
  title: 'Components/Radio',
  component: RadioGroup,
  subcomponents: { Radio },
} as Meta

export const Default = () => {
  return (
    <RadioGroup>
      <Radio value="mobx" label="Mobx" />
      <Radio value="redux" label="Redux" />
      <Radio value="context" label="Context" />
    </RadioGroup>
  )
}

/** A primary variants is also available but should be used sparingly, e.g. when the only or most important control on the page. */
export const Primary = () => {
  return (
    <RadioGroup orientation="vertical">
      <Radio variant="primary" value="mobx" label="Mobx" />
      <Radio variant="primary" value="redux" label="Redux" />
      <Radio variant="primary" value="context" label="Context" />
    </RadioGroup>
  )
}

export const Disabled = () => {
  return (
    <Column css={{ gap: '$3' }}>
      <RadioGroup value="redux">
        <Radio disabled value="mobx" label="Mobx" />
        <Radio disabled value="redux" label="Redux" />
        <Radio disabled value="context" label="Context" />
      </RadioGroup>
      <RadioGroup defaultValue="context">
        <Radio variant="primary" disabled value="mobx" label="Mobx" />
        <Radio variant="primary" disabled value="redux" label="Redux" />
        <Radio variant="primary" disabled value="context" label="Context" />
      </RadioGroup>
    </Column>
  )
}

export const Destructive = () => {
  return (
    <Column css={{ gap: '$3' }}>
      <RadioGroup>
        <Radio destructive value="mobx" label="Mobx" />
        <Radio destructive value="redux" label="Redux" />
        <Radio destructive value="context" label="Context" />
      </RadioGroup>
      <RadioGroup>
        <Radio destructive variant="primary" value="mobx" label="Mobx" />
        <Radio destructive variant="primary" value="redux" label="Redux" />
        <Radio destructive variant="primary" value="context" label="Context" />
      </RadioGroup>
    </Column>
  )
}
