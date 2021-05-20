import { Meta } from '@storybook/react'
import React from 'react'
import { Input } from '.'
import { Grid } from '../'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

export const Default: React.FC = () => <Input id="default" />

export const States = () => (
  <Grid
    css={{
      rowGap: '$3',
      columnGap: '$2',
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
    }}
  >
    <Input id="1" />
    <Input id="2" placeholder="placeholder" />
    <Input id="3" value="Value" />
    <Input id="4" state="valid" defaultValue="Valid" />
    <Input id="5" state="invalid" defaultValue="Invalid" />
    <Input id="6" disabled />

    <Input id="h1" force="hover" />
    <Input id="h2" force="hover" placeholder="hovered" />
    <Input id="h3" force="hover" value="Value" />
    <Input id="h4" force="hover" state="valid" defaultValue="Valid" />
    <Input id="h5" force="hover" state="invalid" defaultValue="Invalid" />
    <Input id="h6" disabled value="disabled" />

    <Input id="f1" force="focus" />
    <Input id="f2" force="focus" placeholder="focussed" />
    <Input id="f3" force="focus" value="Value" />
    <Input id="f4" force="focus" state="valid" defaultValue="Valid" />
    <Input id="f5" force="focus" state="invalid" defaultValue="Invalid" />
    <Input id="f6" readOnly value="readonly" />
  </Grid>
)
