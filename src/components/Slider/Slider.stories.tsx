import { Meta, Story } from '@storybook/react'
import React, { useState } from 'react'
import { Slider } from '.'
import { Column, Row } from '../'
import { usePortalled } from '../../docs/util'

export default {
  title: 'Components/Slider',
  component: Slider,
} as Meta

export const Default: React.FC = () => <Slider />

/** A primary and secondary variant can be used. Secondary, is the default. */
export const Variants: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <Column css={{ mt: '$7', gap: '$5' }}>
      <Slider variant="primary" portalled={portalled} />
      <Slider variant="secondary" portalled={portalled} />
    </Column>
  )
}

/**
 * By default the `Slider` labels are rendered using a react portal. However, this can cause issues. For example, in storybook rendering with a portal puts the label outside of the theme decorator
 * so portalled label remains in the light theme.
 * If we switch to un-portalled, then they are rendered inside the theme decorator but due to storybook again they may not appear in the right place in the docs.
 *
 * You can toggle the portalled state in the toolbar to see how they function in the docs and canvas, but in most situations they should work correctly with the default.
 *
 * The use of `usePortalled` in these stories facilitates this switch, you can ignore it in normal use.
 */
export const Portalled: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <Slider
      labelStyle="always"
      labelFunction={(value) =>
        `Currently${portalled ? ' ' : ' not '}portalled `
      }
      portalled={portalled}
    />
  )
}

export const Disabled: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <Column css={{ mt: '$7', gap: '$5' }}>
      <Slider
        disabled
        variant="primary"
        defaultValue={[50]}
        portalled={portalled}
      />
      <Slider disabled variant="secondary" value={[50]} portalled={portalled} />
    </Column>
  )
}

export const Vertical: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <Row css={{ gap: '$5' }}>
      <Column css={{ height: '$10' }}>
        <Slider
          orientation="vertical"
          variant="primary"
          labelSide="left"
          portalled={portalled}
        />
      </Column>
      <Column css={{ height: '$10' }}>
        <Slider
          orientation="vertical"
          variant="secondary"
          labelSide="right"
          portalled={portalled}
        />
      </Column>
    </Row>
  )
}

/**
 * Passing an array as the `defaultValue` or `value` will add multiple markers  on the track.
 */
export const Contained: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <Column css={{ mt: '$7', gap: '$5' }}>
      <Slider defaultValue={[25, 75]} variant="primary" portalled={portalled} />
      <Slider
        defaultValue={[10, 50, 90]}
        variant="secondary"
        portalled={portalled}
      />
    </Column>
  )
}

/**
 * Use `onValueChange` to update the controlled value array.
 */
export const Controlled: Story = (_args, context) => {
  const portalled = usePortalled(context)
  const [value, setValue] = useState([50])
  return <Slider value={value} onValueChange={setValue} portalled={portalled} />
}

/**
 * The Slider labels cna be shown, `always`, on `hover`, or `none`. Using the `labelStyle` prop.
 */
export const LabelMarkers: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <Column css={{ mt: '$7', gap: '$5' }}>
      <Slider labelStyle="always" portalled={portalled} />
      <Slider labelStyle="hover" portalled={portalled} />
      <Slider labelStyle="none" portalled={portalled} />
    </Column>
  )
}

/**
 * A custom label function can be provided to format the label
 */
export const LabelContent: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return (
    <Slider
      labelFunction={(value) => `Current value is ${value}`}
      portalled={portalled}
    />
  )
}

/**
 * The props `min`, `max` and `step` can be used to control the range.
 */
export const RangeValues: Story = (_args, context) => {
  const portalled = usePortalled(context)
  return <Slider min={0} max={10} step={1} portalled={portalled} />
}
