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

export const HoverCardExample = () => (
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
