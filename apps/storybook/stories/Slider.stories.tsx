import { Column, Inline, Paper, Slider, Stack } from '@committed/ds'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { useState } from 'react'

export default {
  title: 'Components/Slider',
  component: Slider,
} satisfies Meta<typeof Slider>

export const Default: StoryObj<typeof Slider> = {}

/** The semantic colors can be set using `colorPalette`. */
export const Variants: StoryFn = () => (
  <Paper>
    <Stack spacing="large">
      <Slider />
      <Slider colorPalette="$primary" />
      <Slider colorPalette="$secondary" />
    </Stack>
  </Paper>
)

export const Disabled: StoryFn = () => (
  <Stack spacing="large">
    <Slider disabled colorPalette="$primary" defaultValue={[50]} />
    <Slider disabled colorPalette="$secondary" value={[50]} />
  </Stack>
)

export const Vertical: StoryFn = () => (
  <Inline spacing="large">
    <Column css={{ height: '$10' }}>
      <Slider orientation="vertical" colorPalette="$primary" labelSide="left" />
    </Column>
    <Column css={{ height: '$10' }}>
      <Slider
        orientation="vertical"
        colorPalette="$secondary"
        labelSide="right"
      />
    </Column>
  </Inline>
)

/**
 * Passing an array as the `defaultValue` or `value` will add multiple markers  on the track.
 */
export const Contained: StoryFn = () => (
  <Stack spacing="large">
    <Slider defaultValue={[25, 75]} colorPalette="$primary" />
    <Slider defaultValue={[10, 50, 90]} colorPalette="$secondary" />
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
