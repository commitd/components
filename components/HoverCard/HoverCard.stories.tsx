import { Meta, StoryFn } from '@storybook/react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '.'
import { Link } from '../../packages/ds/src/components/Link'
import { Card, CardBody, CardHeading, CardLeadIn } from '../Card'
import { Text } from '../Text'
import image from './committed_io.png'

const meta: Meta<typeof HoverCard> = {
  title: 'Components/HoverCard',
  component: HoverCard,
  subcomponents: {
    HoverCardTrigger,
    HoverCardContent,
  },
}
export default meta

export const Default: StoryFn = (args) => (
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
export const Sticky: StoryFn = () => (
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
