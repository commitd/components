import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Badge, Status } from '.'
import { Heading } from '../Heading'
import { Flex } from '../Flex'
import { Check } from '../Icons'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

export const Default: Story = (args) => (
  <Flex css={{ gap: '$6', flexWrap: 'wrap' }}>
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
  </Flex>
)

export const Icons: Story = (args) => (
  <Flex css={{ gap: '$6', flexWrap: 'wrap' }}>
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
  </Flex>
)

export const StatusBadge: Story = (args) => (
  <Flex css={{ gap: '$6', flexWrap: 'wrap' }}>
    <Status>
      <Heading variant="h5">Default</Heading>
    </Status>
    <Status variant="primary">
      <Heading variant="h5">Primary</Heading>
    </Status>
    <Status variant="ghost">
      <Heading variant="h5">Ghost</Heading>
    </Status>
    <Status variant="brand">
      <Heading variant="h5">Brand</Heading>
    </Status>
    <Status variant="error">
      <Heading variant="h5">Error</Heading>
    </Status>
    <Status variant="success">
      <Heading variant="h5">Success</Heading>
    </Status>
    <Status variant="info">
      <Heading variant="h5">Warning</Heading>
    </Status>
  </Flex>
)

export const DottedIcons: Story = (args) => (
  <Flex css={{ gap: '$6', flexWrap: 'wrap' }}>
    <Status>
      <Check />
    </Status>
    <Status variant="primary">
      <Check />
    </Status>
    <Status variant="ghost">
      <Check />
    </Status>
    <Status variant="brand">
      <Check />
    </Status>
    <Status variant="error">
      <Check />
    </Status>
    <Status variant="success">
      <Check />
    </Status>
    <Status variant="info">
      <Check />
    </Status>
  </Flex>
)
