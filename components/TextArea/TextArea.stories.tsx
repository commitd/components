import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { TextArea } from '.'
import { Column, Grid, Label } from '../'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
}
export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {}

/**
 * Supplying a `value` will make the component controlled. The changes can be handled by the standard `onChange`
 * prop or use the convenience `onValueChange` that passes just the new value.
 */
export const Controlled: Story = {
  render: () => {
    const [description, setDescription] = useState('test')
    return (
      <Column>
        <TextArea
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextArea
          label="Description"
          value={description}
          onValueChange={setDescription}
        />
      </Column>
    )
  },
}

/**
 * Use the label props to add a standard label, automatically adds aria.
 */
export const WithLabel: StoryFn = () => (
  <Column>
    <TextArea name="firstname" label="First name" />
    <TextArea name="familyname" label="Family name" />
  </Column>
)

/**
 * If you want a single inline label you can wrap an TextArea in a `Label` component and it will auto assign the
 * `htmlFor` and `id` props.
 */
export const InlineLabel: StoryFn = () => (
  <Label variant="inline">
    Inline
    <TextArea />
  </Label>
)

/**
 * A variant can be used to restrict the resize options or constrain it to the parent.
 */
export const Constrain: StoryFn = () => (
  <Column>
    <TextArea
      label="Horizontal"
      placeholder="Can be resized horizontally"
      resize="horizontal"
    />
    <TextArea
      label="Vertical"
      placeholder="Can be resized vertically"
      resize="vertical"
    />
    <TextArea
      label="Constrain"
      placeholder="Can be resized but constrained by partent"
      constrain
    />
    <TextArea label="None" placeholder="Can't be resized" resize="none" />
  </Column>
)

export const States: StoryFn = () => (
  <Grid
    css={{
      rowGap: '$3',
      columnGap: '$2',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    }}
  >
    <TextArea id="1" />
    <TextArea id="2" placeholder="placeholder" />
    <TextArea id="3" value="Value" />
    <TextArea id="4" valid defaultValue="Valid" />
    <TextArea id="5" error defaultValue="Invalid" />
    <TextArea id="6" disabled />

    <TextArea id="h1" data-hover />
    <TextArea id="h2" data-hover placeholder="hovered" />
    <TextArea id="h3" data-hover value="Value" />
    <TextArea id="h4" data-hover valid defaultValue="Valid" />
    <TextArea id="h5" data-hover error defaultValue="Invalid" />
    <TextArea id="h6" disabled value="disabled" />

    <TextArea id="f1" data-focus />
    <TextArea id="f2" data-focus placeholder="focussed" />
    <TextArea id="f3" data-focus value="Value" />
    <TextArea id="f4" data-focus valid defaultValue="Valid" />
    <TextArea id="f5" data-focus error defaultValue="Invalid" />
    <TextArea id="f6" readOnly value="readonly" />
  </Grid>
)
