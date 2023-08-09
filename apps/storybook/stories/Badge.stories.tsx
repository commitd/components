import { Badge, Check, Flex, Heading, Status } from '@committed/ds'
import { Meta, Story, StoryFn } from '@storybook/react'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta

export const Default: StoryFn = () => (
  <Flex css={{ gap: '$6', flexWrap: 'wrap' }}>
    <Badge content={'text'}>
      <Heading as="h5">Default</Heading>
    </Badge>
    <Badge variant="primary" content={9} max={99}>
      <Heading as="h5">Primary</Heading>
    </Badge>
    <Badge variant="ghost" content={99} max={99}>
      <Heading as="h5">Ghost</Heading>
    </Badge>
    <Badge variant="secondary" content={999} max={99}>
      <Heading as="h5">Brand</Heading>
    </Badge>
    <Badge variant="error" content={9999} max={99}>
      <Heading as="h5">Error</Heading>
    </Badge>
    <Badge variant="success" content={99999} max={99}>
      <Heading as="h5">Success</Heading>
    </Badge>
    <Badge variant="info" content={999999} max={99}>
      <Heading as="h5">Warning</Heading>
    </Badge>
  </Flex>
)

export const Icons: StoryFn = () => (
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
    <Badge variant="secondary" content={4}>
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

export const StatusBadge: StoryFn = () => (
  <Flex css={{ gap: '$6', flexWrap: 'wrap' }}>
    <Status>
      <Heading as="h5">Default</Heading>
    </Status>
    <Status variant="primary">
      <Heading as="h5">Primary</Heading>
    </Status>
    <Status variant="ghost">
      <Heading as="h5">Ghost</Heading>
    </Status>
    <Status variant="brand">
      <Heading as="h5">Brand</Heading>
    </Status>
    <Status variant="error">
      <Heading as="h5">Error</Heading>
    </Status>
    <Status variant="success">
      <Heading as="h5">Success</Heading>
    </Status>
    <Status variant="info">
      <Heading as="h5">Warning</Heading>
    </Status>
  </Flex>
)

export const DottedIcons: Story = () => (
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
