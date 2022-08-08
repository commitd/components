import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '.'
import { Card, CardBody, CardHeading, CardLeadIn } from '../Card'
import { Link } from '../Link'
import { Text } from '../Text'
import image from './committed_io.png'

export default {
  title: 'Components/HoverCard',
  component: HoverCard,
  subcomponents: {
    HoverCardTrigger,
    HoverCardContent,
  },
} as Meta

export const Default: Story<ComponentProps<typeof HoverCard>> = (args) => (
  <HoverCard {...args}>
    <HoverCardTrigger>
      <Link href="https://committed.io" target="_blank">
        Committed Website
      </Link>
    </HoverCardTrigger>
    <HoverCardContent>
      <img src={image} />
    </HoverCardContent>
  </HoverCard>
)

/**
 * The HoverCard content can be a preview like the main example or show further information.
 */
export const Sticky: Story = () => (
  <HoverCard>
    <HoverCardTrigger>
      <Link href="https://committed.io" target="_blank">
        Committed Website
      </Link>
    </HoverCardTrigger>
    <HoverCardContent>
      <Card>
        <CardLeadIn>https://committed.io</CardLeadIn>
        <CardHeading as="h3">Committed Software</CardHeading>
        <CardBody>
          <Text>
            Bespoke software company specializing in integrating the best of
            breed open source technologies to allow rapid development and
            minimal duplication of effort.
          </Text>
        </CardBody>
      </Card>
    </HoverCardContent>
  </HoverCard>
)
