import { useBoolean } from '@committed/hooks'
import { Meta, Story } from '@storybook/react'
import React from 'react'
import { Switch } from '.'
import { Row, Grid } from '../'

export default {
  title: 'Components/Switch',
  component: Switch,
} as Meta

export const Default: Story = (args) => <Switch {...args} />

export const Variants = () => {
  const [value, { toggle }] = useBoolean(false)

  return (
    <Row css={{ gap: '$4' }}>
      <Switch variant="primary" checked={value} onCheckedChange={toggle} />
      <Switch variant="secondary" checked={value} onCheckedChange={toggle} />
    </Row>
  )
}

export const Brand = () => {
  const [value, { toggle }] = useBoolean(false)

  return (
    <Row css={{ padding: '$4', backgroundColor: '$brand' }}>
      <Switch variant="brand" checked={value} onCheckedChange={toggle} />
    </Row>
  )
}

export const Destructive = () => {
  const [value, { toggle }] = useBoolean(false)

  return (
    <Row css={{ gap: '$4' }}>
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
    </Row>
  )
}

export const Disabled = () => (
  <>
    <Row css={{ gap: '$4', mb: '$3' }}>
      <Switch variant="primary" checked={false} />
      <Switch variant="primary" checked={true} />
      <Switch variant="secondary" checked={false} />
      <Switch variant="secondary" checked={true} />
      <Switch destructive variant="primary" checked={false} />
      <Switch destructive variant="primary" checked={true} />
      <Switch destructive variant="secondary" checked={false} />
      <Switch destructive variant="secondary" checked={true} />
    </Row>
    <Row css={{ gap: '$4' }}>
      <Switch disabled variant="primary" checked={false} />
      <Switch disabled variant="primary" checked={true} />
      <Switch disabled variant="secondary" checked={false} />
      <Switch disabled variant="secondary" checked={true} />
      <Switch disabled destructive variant="primary" checked={false} />
      <Switch disabled destructive variant="primary" checked={true} />
      <Switch disabled destructive variant="secondary" checked={false} />
      <Switch disabled destructive variant="secondary" checked={true} />
    </Row>
  </>
)

export const States = () => {
  return (
    <>
      <Grid css={{ p: '$4', gap: '$4', gridTemplateColumns: '$6 $6 $6' }}>
        <Switch variant="primary" checked={false} />
        <Switch variant="primary" checked={false} force="hover" />
        <Switch variant="primary" checked={false} force="focus" />
        <Switch variant="primary" checked={true} />
        <Switch variant="primary" checked={true} force="hover" />
        <Switch variant="primary" checked={true} force="focus" />
        <Switch variant="secondary" checked={false} />
        <Switch variant="secondary" checked={false} force="hover" />
        <Switch variant="secondary" checked={false} force="focus" />
        <Switch variant="secondary" checked={true} />
        <Switch variant="secondary" checked={true} force="hover" />
        <Switch variant="secondary" checked={true} force="focus" />
        <Switch destructive variant="primary" checked={false} />
        <Switch destructive variant="primary" checked={false} force="hover" />
        <Switch destructive variant="primary" checked={false} force="focus" />
        <Switch destructive variant="primary" checked={true} />
        <Switch destructive variant="primary" checked={true} force="hover" />
        <Switch destructive variant="primary" checked={true} force="focus" />
        <Switch destructive variant="secondary" checked={false} />
        <Switch destructive variant="secondary" checked={false} force="hover" />
        <Switch destructive variant="secondary" checked={false} force="focus" />
        <Switch destructive variant="secondary" checked={true} />
        <Switch destructive variant="secondary" checked={true} force="hover" />
        <Switch destructive variant="secondary" checked={true} force="focus" />
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
        <Switch variant="brand" checked={false} force="hover" />
        <Switch variant="brand" checked={false} force="focus" />
        <Switch variant="brand" checked={true} />
        <Switch variant="brand" checked={true} force="hover" />
        <Switch variant="brand" checked={true} force="focus" />
        <Switch variant="brand" disabled checked={false} />
        <Switch variant="brand" disabled checked={false} force="hover" />
        <Switch variant="brand" disabled checked={false} force="focus" />
        <Switch variant="brand" disabled checked={true} />
        <Switch variant="brand" disabled checked={true} force="hover" />
        <Switch variant="brand" disabled checked={true} force="focus" />
      </Grid>
    </>
  )
}
