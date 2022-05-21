import { mdiFormatItalic } from '@mdi/js'
import { ComponentStory, Meta, Story } from '@storybook/react'
import React from 'react'
import { Toggle } from '.'
import { Column, Row, Svg } from '../'

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta

const Italic: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFormatItalic} {...props} />
)

const Template: ComponentStory<typeof Toggle> = ({ ...args }) => {
  return (
    <Toggle aria-label="Toggle italic" {...args}>
      <Italic />
    </Toggle>
  )
}

export const Default = Template.bind({})

export const Variants: Story = () => (
  <Row gap>
    <Toggle variant="primary">
      <Italic />
    </Toggle>
    <Toggle variant="secondary">
      <Italic />
    </Toggle>
    <Toggle variant="tertiary">
      <Italic />
    </Toggle>
  </Row>
)

export const Sizes: Story = () => (
  <Row gap>
    <Toggle size="small">
      <Italic />
    </Toggle>
    <Toggle size="default">
      <Italic />
    </Toggle>
    <Toggle size="large">
      <Italic />
    </Toggle>
  </Row>
)

/**
 * This uses the force prop to simulate hover and focus states so they can be compared at the same time.
 * This prop is not intended for normal use and the toggles here will not interact normally.
 */
export const States: Story = () => (
  <Column gap>
    <Row gap>
      <Toggle variant="primary">
        <Italic />
      </Toggle>
      <Toggle variant="primary" force="hover">
        <Italic />
      </Toggle>
      <Toggle variant="primary" force="focus">
        <Italic />
      </Toggle>
      <Toggle variant="primary" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed force="hover">
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed force="focus">
        <Italic />
      </Toggle>
      <Toggle variant="primary" disabled>
        <Italic />
      </Toggle>
    </Row>
    <Row gap>
      <Toggle variant="secondary">
        <Italic />
      </Toggle>
      <Toggle variant="secondary" force="hover">
        <Italic />
      </Toggle>
      <Toggle variant="secondary" force="focus">
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed force="hover">
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed force="focus">
        <Italic />
      </Toggle>
      <Toggle variant="secondary" disabled>
        <Italic />
      </Toggle>
    </Row>
    <Row gap>
      <Toggle variant="tertiary">
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" force="hover">
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" force="focus">
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" pressed force="hover">
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" pressed force="focus">
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" disabled>
        <Italic />
      </Toggle>
    </Row>
  </Column>
)
