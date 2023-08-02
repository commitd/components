import { useBoolean } from '@committed/hooks'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React from 'react'
import { Switch } from '.'
import { Grid } from '../'
import { Box } from '../Box'
import { Inline } from '../Inline'
import { Stack } from '../Stack'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
}
export default meta

export const Default: StoryObj<typeof Switch> = {}

export const Variants: StoryFn = () => {
  const [value, { toggle }] = useBoolean(false)

  return (
    <Inline>
      <Switch variant="primary" checked={value} onCheckedChange={toggle} />
      <Switch variant="secondary" checked={value} onCheckedChange={toggle} />
    </Inline>
  )
}

export const Brand: StoryFn = () => {
  const [value, { toggle }] = useBoolean(false)

  return (
    <Box css={{ padding: '$4', backgroundColor: '$brand' }}>
      <Switch variant="brand" checked={value} onCheckedChange={toggle} />
    </Box>
  )
}

export const Destructive: StoryFn = () => {
  const [value, { toggle }] = useBoolean(false)

  return (
    <Inline>
      <Switch
        destructive
        variant="primary"
        checked={value}
        onCheckedChange={toggle}
      />
      <Switch
        destructive
        variant="secondary"
        checked={value}
        onCheckedChange={toggle}
      />
    </Inline>
  )
}

export const Disabled: StoryFn = () => (
  <Stack>
    <Inline>
      <Switch variant="primary" checked={false} />
      <Switch variant="primary" checked={true} />
      <Switch variant="secondary" checked={false} />
      <Switch variant="secondary" checked={true} />
      <Switch destructive variant="primary" checked={false} />
      <Switch destructive variant="primary" checked={true} />
      <Switch destructive variant="secondary" checked={false} />
      <Switch destructive variant="secondary" checked={true} />
    </Inline>
    <Inline>
      <Switch disabled variant="primary" checked={false} />
      <Switch disabled variant="primary" checked={true} />
      <Switch disabled variant="secondary" checked={false} />
      <Switch disabled variant="secondary" checked={true} />
      <Switch disabled destructive variant="primary" checked={false} />
      <Switch disabled destructive variant="primary" checked={true} />
      <Switch disabled destructive variant="secondary" checked={false} />
      <Switch disabled destructive variant="secondary" checked={true} />
    </Inline>
  </Stack>
)

export const States: StoryFn = () => {
  return (
    <>
      <Grid css={{ p: '$4', gap: '$4', gridTemplateColumns: '$6 $6 $6' }}>
        <Switch variant="primary" checked={false} />
        <Switch variant="primary" checked={false} data-hover />
        <Switch variant="primary" checked={false} data-focus />
        <Switch variant="primary" checked={true} />
        <Switch variant="primary" checked={true} data-hover />
        <Switch variant="primary" checked={true} data-focus />
        <Switch variant="secondary" checked={false} />
        <Switch variant="secondary" checked={false} data-hover />
        <Switch variant="secondary" checked={false} data-focus />
        <Switch variant="secondary" checked={true} />
        <Switch variant="secondary" checked={true} data-hover />
        <Switch variant="secondary" checked={true} data-focus />
        <Switch destructive variant="primary" checked={false} />
        <Switch destructive variant="primary" checked={false} data-hover />
        <Switch destructive variant="primary" checked={false} data-focus />
        <Switch destructive variant="primary" checked={true} />
        <Switch destructive variant="primary" checked={true} data-hover />
        <Switch destructive variant="primary" checked={true} data-focus />
        <Switch destructive variant="secondary" checked={false} />
        <Switch destructive variant="secondary" checked={false} data-hover />
        <Switch destructive variant="secondary" checked={false} data-focus />
        <Switch destructive variant="secondary" checked={true} />
        <Switch destructive variant="secondary" checked={true} data-hover />
        <Switch destructive variant="secondary" checked={true} data-focus />
      </Grid>
      <Grid
        css={{
          p: '$4',
          gap: '$4',
          gridTemplateColumns: '$6 $6 $6',
          backgroundColor: '$brand',
        }}
      >
        <Switch variant="brand" checked={false} />
        <Switch variant="brand" checked={false} data-hover />
        <Switch variant="brand" checked={false} data-focus />
        <Switch variant="brand" checked={true} />
        <Switch variant="brand" checked={true} data-hover />
        <Switch variant="brand" checked={true} data-focus />
        <Switch variant="brand" disabled checked={false} />
        <Switch variant="brand" disabled checked={false} data-hover />
        <Switch variant="brand" disabled checked={false} data-focus />
        <Switch variant="brand" disabled checked={true} />
        <Switch variant="brand" disabled checked={true} data-hover />
        <Switch variant="brand" disabled checked={true} data-focus />
      </Grid>
    </>
  )
}
