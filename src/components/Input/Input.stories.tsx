import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Input } from '.'
import { Form, FormButton, Grid, Label } from '../'
import { withFormData } from '../../docs/util'
import { Stack } from '../Stack'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

export const Default: Story = () => <Input id="default" />

/** Add the `required` prop to mark as required */
export const Required: Story = () => <Input required id="default" />

/**
 * Supplying a `value` will make the component controlled. The changes can be handled by the standard `onChange`
 * prop or use the convenience `onValueChange` that passes just the new value.
 */
export const Controlled: Story = () => {
  const [name, setName] = React.useState('test')
  return (
    <Stack>
      <Input
        id="name-event"
        label="Name"
        value={name}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setName(e.target.value)
        }
      />
      <Input
        id="name-value"
        label="Name"
        value={name}
        onValueChange={setName}
      />
    </Stack>
  )
}

/**
 * Use the label props to add a standard label, automatically adds aria.
 */
export const WithLabel: Story = () => (
  <Stack>
    <Input id="username" label="Username" required />
    <Input id="firstname" label="First name" />
    <Input id="familyname" label="Family name" required={false} />
  </Stack>
)

/**
 * If you want a single inline label you can wrap an input in a `Label` component and it will auto assign the
 * `htmlFor` and `id` props.
 */
export const InlineLabel: Story = () => (
  <Label variant="inline">
    Email address
    <Input type="email" />
  </Label>
)

/**
 * Demo of use in a `Form`
 */
export const InForm: Story = () => {
  return (
    <Form onSubmit={withFormData(alert)}>
      <Input label="Demo" name="demo" />
      <FormButton />
    </Form>
  )
}

/**
 * If you need to align multiple labels then better to layout yourself to control the width and apply the appropriate
 * `htmlFor` and `id` props.
 */
export const MultipleInlineLabels: Story = () => (
  <Grid css={{ gridTemplateColumns: '150px 1fr', gap: '$3' }}>
    <Label variant="inline" htmlFor="mll-firstname">
      First name
    </Label>
    <Input id="mll-firstname" />
    <Label variant="inline" htmlFor="mll-familyname">
      Family name
    </Label>
    <Input id="mll-familyname" />
    <Label variant="inline" htmlFor="mll-email">
      Email address
    </Label>
    <Input id="email" type="mll-email" />
  </Grid>
)

export const States: Story = () => (
  <Grid
    css={{
      rowGap: '$3',
      columnGap: '$2',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    }}
  >
    <Input id="1" />
    <Input id="2" placeholder="placeholder" />
    <Input id="3" value="Value" />
    <Input id="4" valid defaultValue="Valid" />
    <Input id="5" error defaultValue="Invalid" />
    <Input id="6" disabled />

    <Input id="h1" force="hover" />
    <Input id="h2" force="hover" placeholder="hovered" />
    <Input id="h3" force="hover" value="Value" />
    <Input id="h4" force="hover" valid defaultValue="Valid" />
    <Input id="h5" force="hover" error defaultValue="Invalid" />
    <Input id="h6" disabled value="disabled" />

    <Input id="f1" force="focus" />
    <Input id="f2" force="focus" placeholder="focussed" />
    <Input id="f3" force="focus" value="Value" />
    <Input id="f4" force="focus" valid defaultValue="Valid" />
    <Input id="f5" force="focus" error defaultValue="Invalid" />
    <Input id="f6" readOnly value="readonly" />
  </Grid>
)
