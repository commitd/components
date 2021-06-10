import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Badge, DotBadge } from '.'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Box } from '../Box'
import { Check } from '../Icons'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

export const Default: Story = (args) => (
  <Box css={{ display: 'flex', gap: '$6', flexWrap: 'wrap' }}>
    <Badge content={'text'}>
      <Heading variant="h5">Default</Heading>
    </Badge>
    <Badge variant="primary" content={9} max={99}>
      <Heading variant="h5">Primary</Heading>
    </Badge>
    <Badge variant="ghost" content={99} max={99}>
      <Heading variant="h5">Ghost</Heading>
    </Badge>
    <Badge variant="brand" content={999} max={99}>
      <Heading variant="h5">Brand</Heading>
    </Badge>
    <Badge variant="error" content={9999} max={99}>
      <Heading variant="h5">Error</Heading>
    </Badge>
    <Badge variant="success" content={99999} max={99}>
      <Heading variant="h5">Success</Heading>
    </Badge>
    <Badge variant="info" content={999999} max={99}>
      <Heading variant="h5">Warning</Heading>
    </Badge>
  </Box>
)

export const Icons: Story = (args) => (
  <Box css={{ display: 'flex', gap: '$6', flexWrap: 'wrap' }}>
    <Badge content={'text'}>
      <Check />
    </Badge>
    <Badge variant="primary" content={4}>
      <Check />
    </Badge>
    <Badge variant="ghost" content={4}>
      <Check />
    </Badge>
    <Badge variant="brand" content={4}>
      <Check />
    </Badge>
    <Badge variant="error" content={4}>
      <Check />
    </Badge>
    <Badge variant="success" content={4}>
      <Check />
    </Badge>
    <Badge variant="info" content={4}>
      <Check />
    </Badge>
  </Box>
)

export const Dotted: Story = (args) => (
  <Box css={{ display: 'flex', gap: '$6', flexWrap: 'wrap' }}>
    <DotBadge>
      <Heading variant="h5">Default</Heading>
    </DotBadge>
    <DotBadge variant="primary">
      <Heading variant="h5">Primary</Heading>
    </DotBadge>
    <DotBadge variant="ghost">
      <Heading variant="h5">Ghost</Heading>
    </DotBadge>
    <DotBadge variant="brand">
      <Heading variant="h5">Brand</Heading>
    </DotBadge>
    <DotBadge variant="error">
      <Heading variant="h5">Error</Heading>
    </DotBadge>
    <DotBadge variant="success">
      <Heading variant="h5">Success</Heading>
    </DotBadge>
    <DotBadge variant="info">
      <Heading variant="h5">Warning</Heading>
    </DotBadge>
  </Box>
)

export const DottedIcons: Story = (args) => (
  <Box css={{ display: 'flex', gap: '$6', flexWrap: 'wrap' }}>
    <DotBadge>
      <Check />
    </DotBadge>
    <DotBadge variant="primary">
      <Check />
    </DotBadge>
    <DotBadge variant="ghost">
      <Check />
    </DotBadge>
    <DotBadge variant="brand">
      <Check />
    </DotBadge>
    <DotBadge variant="error">
      <Check />
    </DotBadge>
    <DotBadge variant="success">
      <Check />
    </DotBadge>
    <DotBadge variant="info">
      <Check />
    </DotBadge>
  </Box>
)
