import { mdiFormatItalic } from '@mdi/js'
import { ComponentStory, Meta, Story } from '@storybook/react'
import React from 'react'
import { Toggle } from '.'
import { Svg } from '../'
import { Inline } from '../Inline'
import { Stack } from '../Stack'

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
  <Inline>
    <Toggle variant="primary">
      <Italic />
    </Toggle>
    <Toggle variant="secondary">
      <Italic />
    </Toggle>
    <Toggle variant="tertiary">
      <Italic />
    </Toggle>
  </Inline>
)

export const Sizes: Story = () => (
  <Inline>
    <Toggle size="small">
      <Italic />
    </Toggle>
    <Toggle size="default">
      <Italic />
    </Toggle>
    <Toggle size="large">
      <Italic />
    </Toggle>
  </Inline>
)

/**
 * This uses the force prop to simulate hover and focus states so they can be compared at the same time.
 * This prop is not intended for normal use and the toggles here will not interact normally.
 */
export const States: Story = () => (
  <Stack>
    <Inline>
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
    </Inline>
    <Inline>
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
    </Inline>
    <Inline>
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
    </Inline>
  </Stack>
)
