import { Link } from '../../packages/ds/src/components/Link'
import { renderDark, renderLight } from '../../test'
import { Card, CardBody, CardHeading, CardLeadIn } from '../Card'
import { Text } from '../Text'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard'

const Default = () => (
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

it('renders light without error', () => {
  const { asFragment } = renderLight(<Default />)
  expect(asFragment()).toBeDefined()
})

it('renders dark without error', () => {
  const { asFragment } = renderDark(<Default />)
  expect(asFragment()).toBeDefined()
})
