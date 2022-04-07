import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import { Slider } from '.'
import { Column, Row } from '../'

export default {
  title: 'Components/Slider',
  component: Slider,
} as Meta

export const Default: React.FC = () => <Slider />

/** A primary and secondary variant can be used. Secondary, is the default. */
export const Variants: Story = () => (
  <Column css={{ mt: '$7', gap: '$5' }}>
    <Slider variant="primary" />
    <Slider variant="secondary" />
  </Column>
)

export const Disabled: Story = () => (
  <Column css={{ mt: '$7', gap: '$5' }}>
    <Slider disabled variant="primary" defaultValue={[50]} />
    <Slider disabled variant="secondary" value={[50]} />
  </Column>
)

export const Vertical: Story = () => (
  <Row css={{ gap: '$5' }}>
    <Column css={{ height: '$10' }}>
      <Slider orientation="vertical" variant="primary" labelSide="left" />
    </Column>
    <Column css={{ height: '$10' }}>
      <Slider orientation="vertical" variant="secondary" labelSide="right" />
    </Column>
  </Row>
)

/**
 * Passing an array as the `defaultValue` or `value` will add multiple markers  on the track.
 */
export const Contained: Story = () => (
  <Column css={{ mt: '$7', gap: '$5' }}>
    <Slider defaultValue={[25, 75]} variant="primary" />
    <Slider defaultValue={[10, 50, 90]} variant="secondary" />
  </Column>
)

/**
 * Use `onValueChange` to update the controlled value array.
 */
export const Controlled: Story = () => {
  const [value, setValue] = useState([50])
  return <Slider value={value} onValueChange={setValue} />
}

/**
 * The Slider labels can be shown, `always`, on `hover`, or `none`. Using the `labelStyle` prop.
 */
export const LabelMarkers: Story = () => (
  <Column css={{ mt: '$7', gap: '$5' }}>
    <Slider labelStyle="always" />
    <Slider labelStyle="hover" />
    <Slider labelStyle="none" />
  </Column>
)

/**
 * A custom label function can be provided to format the label
 */
export const LabelContent: Story = () => (
  <Slider labelFunction={(value) => `Current value is ${value}`} />
)

/**
 * The props `min`, `max` and `step` can be used to control the range.
 */
export const RangeValues: Story = () => <Slider min={0} max={10} step={1} />

/**
 * By default the `Slider` labels are rendered using a react portal. However, this can cause issues.
 * If we switch to un-portalled, then they are in the dom tree by the trigger.
 *
 * You can toggle the portalled state using the `portalled` prop.
 */
export const Portalled: Story = () => (
  <Slider
    labelStyle="always"
    labelFunction={(value) => `Currently portalled (${value})`}
    portalled
  />
)
