import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { Slider } from '.'
import { Column } from '../'
import { Inline } from '../Inline'
import { Stack } from '../Stack'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
}
export default meta

export const Default: StoryObj<typeof Slider> = {}

/** A primary and secondary variant can be used. Secondary, is the default. */
export const Variants: StoryFn = () => (
  <Stack spacing="large">
    <Slider variant="primary" />
    <Slider variant="secondary" />
  </Stack>
)

export const Disabled: StoryFn = () => (
  <Stack spacing="large">
    <Slider disabled variant="primary" defaultValue={[50]} />
    <Slider disabled variant="secondary" value={[50]} />
  </Stack>
)

export const Vertical: StoryFn = () => (
  <Inline spacing="large">
    <Column css={{ height: '$10' }}>
      <Slider orientation="vertical" variant="primary" labelSide="left" />
    </Column>
    <Column css={{ height: '$10' }}>
      <Slider orientation="vertical" variant="secondary" labelSide="right" />
    </Column>
  </Inline>
)

/**
 * Passing an array as the `defaultValue` or `value` will add multiple markers  on the track.
 */
export const Contained: StoryFn = () => (
  <Stack spacing="large">
    <Slider defaultValue={[25, 75]} variant="primary" />
    <Slider defaultValue={[10, 50, 90]} variant="secondary" />
  </Stack>
)

/**
 * Use `onValueChange` to update the controlled value array.
 */
export const Controlled: StoryFn = () => {
  const [value, setValue] = useState([50])
  return <Slider value={value} onValueChange={setValue} />
}

/**
 * The Slider labels can be shown, `always`, on `hover`, or `none`. Using the `labelStyle` prop.
 */
export const LabelMarkers: StoryFn = () => (
  <Stack>
    <Slider labelStyle="always" />
    <Slider labelStyle="hover" />
    <Slider labelStyle="none" />
  </Stack>
)

/**
 * A custom label function can be provided to format the label
 */
export const LabelContent: StoryFn = () => (
  <Slider labelFunction={(value) => `Current value is ${value}`} />
)

/**
 * The props `min`, `max` and `step` can be used to control the range.
 */
export const RangeValues: StoryFn = () => <Slider min={0} max={10} step={1} />

/**
 * By default the `Slider` labels are rendered using a react portal. However, this can cause issues.
 * If we switch to un-portalled, then they are in the dom tree by the trigger.
 *
 * You can toggle the portalled state using the `portalled` prop.
 */
export const Portalled: StoryFn = () => (
  <Slider
    labelStyle="always"
    labelFunction={(value) => `Currently portalled (${value})`}
    portalled
  />
)
