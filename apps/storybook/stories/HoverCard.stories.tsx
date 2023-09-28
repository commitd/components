import {
  CardContent,
  CardHeading,
  CardLeadIn,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Link,
  Text,
} from '@committed/ds'
import { Meta, StoryFn } from '@storybook/react'
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
    <HoverCardContent surface="solid">
      <CardLeadIn>https://committed.io</CardLeadIn>
      <CardHeading asChild>
        <h3>Committed Software</h3>
      </CardHeading>
      <CardContent>
        <Text>
          Bespoke software company specializing in integrating the best of breed
          open source technologies to allow rapid development and minimal
          duplication of effort.
        </Text>
      </CardContent>
    </HoverCardContent>
  </HoverCard>
)

/**
 * The HoverCard surface can be specified.
 */
export const Surface: StoryFn = () => (
  <HoverCard>
    <HoverCardTrigger>
      <Link href="https://committed.io" target="_blank">
        Committed Website
      </Link>
    </HoverCardTrigger>
    <HoverCardContent surface="glass">
      <CardLeadIn>https://committed.io</CardLeadIn>
      <CardHeading asChild>
        <h3>Committed Software</h3>
      </CardHeading>
      <CardContent>
        <Text>
          Bespoke software company specializing in integrating the best of breed
          open source technologies to allow rapid development and minimal
          duplication of effort.
        </Text>
      </CardContent>
    </HoverCardContent>
  </HoverCard>
)
