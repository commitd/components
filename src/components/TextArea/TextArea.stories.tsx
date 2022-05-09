import { Meta, Story } from '@storybook/react'
import React from 'react'
import { TextArea } from '.'
import { Column, Grid, Label } from '../'

export default {
  title: 'Components/TextArea',
  component: TextArea,
} as Meta

export const Default: Story = (args) => <TextArea {...args} />

/**
 * Supplying a `value` will make the component controlled. The changes can be handled by the standard `onChange`
 * prop or use the convenience `onValueChange` that passes just the new value.
 */
export const Controlled: Story = () => {
  const [description, setDescription] = React.useState('test')
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
}

/**
 * Use the label props to add a standard label, automatically adds aria.
 */
export const WithLabel: React.FC = () => (
  <Column>
    <TextArea name="firstname" label="First name" />
    <TextArea name="familyname" label="Family name" />
  </Column>
)

/**
 * If you want a single inline label you can wrap an TextArea in a `Label` component and it will auto assign the
 * `htmlFor` and `id` props.
 */
export const InlineLabel: Story = () => (
  <Label variant="inline">
    Inline
    <TextArea />
  </Label>
)

/**
 * A variant can be used to restrict the resize options or constrain it to the parent.
 */
export const Constrain: React.FC = () => (
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

export const States: Story = () => (
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

    <TextArea id="h1" force="hover" />
    <TextArea id="h2" force="hover" placeholder="hovered" />
    <TextArea id="h3" force="hover" value="Value" />
    <TextArea id="h4" force="hover" valid defaultValue="Valid" />
    <TextArea id="h5" force="hover" error defaultValue="Invalid" />
    <TextArea id="h6" disabled value="disabled" />

    <TextArea id="f1" force="focus" />
    <TextArea id="f2" force="focus" placeholder="focussed" />
    <TextArea id="f3" force="focus" value="Value" />
    <TextArea id="f4" force="focus" valid defaultValue="Valid" />
    <TextArea id="f5" force="focus" error defaultValue="Invalid" />
    <TextArea id="f6" readOnly value="readonly" />
  </Grid>
)
