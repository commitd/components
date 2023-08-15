import { Form, FormButton, Grid, Input, Label, Stack } from '@committed/ds'
import { Meta, Story, StoryFn } from '@storybook/react'
import React from 'react'
import { withFormData } from './utils'

export default {
  title: 'Components/Input',
  component: Input,
} satisfies Meta<typeof Input>

export const Default: StoryFn = () => <Input id="default" />

/** Add the `required` prop to mark as required */
export const Required: StoryFn = () => <Input required id="default" />

/**
 * Supplying a `value` will make the component controlled. The changes can be handled by the standard `onChange`
 * prop or use the convenience `onValueChange` that passes just the new value.
 */
export const Controlled: StoryFn = () => {
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
export const WithLabel: StoryFn = () => (
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

    <Input id="h1" data-hover />
    <Input id="h2" data-hover placeholder="hovered" />
    <Input id="h3" data-hover value="Value" />
    <Input id="h4" data-hover valid defaultValue="Valid" />
    <Input id="h5" data-hover error defaultValue="Invalid" />
    <Input id="h6" disabled value="disabled" />

    <Input id="f1" data-focus />
    <Input id="f2" data-focus placeholder="focussed" />
    <Input id="f3" data-focus value="Value" />
    <Input id="f4" data-focus valid defaultValue="Valid" />
    <Input id="f5" data-focus error defaultValue="Invalid" />
    <Input id="f6" readOnly value="readonly" />
  </Grid>
)
