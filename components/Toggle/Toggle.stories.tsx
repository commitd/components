import { mdiFormatItalic } from '@mdi/js'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Toggle } from '.'
import { Svg } from '../'
import { Inline } from '../Inline'
import { Stack } from '../Stack'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
}
export default meta

const Italic: React.FC<React.ComponentProps<typeof Svg>> = (props) => (
  <Svg path={mdiFormatItalic} {...props} />
)

export const Default: StoryFn = ({ ...args }) => {
  return (
    <Toggle aria-label="Toggle italic" {...args}>
      <Italic />
    </Toggle>
  )
}

export const Variants: StoryFn = () => (
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

export const Sizes: StoryFn = () => (
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
 * This uses the data-* props simulate hover and focus states so they can be compared at the same time.
 * This prop is not intended for normal use and the toggles here will not interact normally.
 */
export const States: StoryFn = () => (
  <Stack>
    <Inline>
      <Toggle variant="primary">
        <Italic />
      </Toggle>
      <Toggle variant="primary" data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="primary" data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="primary" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed data-focus>
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
      <Toggle variant="secondary" data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="secondary" data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="secondary" pressed data-focus>
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
      <Toggle variant="tertiary" data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" pressed>
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" pressed data-hover>
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" pressed data-focus>
        <Italic />
      </Toggle>
      <Toggle variant="tertiary" disabled>
        <Italic />
      </Toggle>
    </Inline>
  </Stack>
)
