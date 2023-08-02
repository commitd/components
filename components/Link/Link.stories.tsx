import { Meta, Story } from '@storybook/react'
import React from 'react'
import {
  Link as RouterLink,
  MemoryRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { Link } from '.'
import { Box, Column, Text } from '../'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

export const Default: Story = () => {
  return (
    <Column>
      <Box>
        <Link href="#">Link</Link>
      </Box>
      <Box css={{ color: '$red500' }}>
        <Link href="#">color inherits"</Link>
      </Box>
      <Box>
        <Text font="monospace">
          <Link href="/"> font="monospace"</Link>
        </Text>
      </Box>
      <Box>
        <Link href="http://committed.io" target="_blank">
          External
        </Link>
      </Box>
    </Column>
  )
}
/**
 * For when a link need to be applied to a separately styled element
 */
export const Clear: Story = () => (
  <Text>
    <Link variant="clear" href="#">
      Link
    </Link>
  </Text>
)

/**
 * For when a link should be hidden but shown on hover
 */
export const Hovered: Story = () => (
  <Text>
    <Link variant="hovered" href="#">
      Link
    </Link>
  </Text>
)

/**
 * The styled variant is intended for use in articles such as blog posts.
 */
export const Styled: Story = () => (
  <Text>
    This is{' '}
    <Link variant="styled" href="#link">
      Internal
    </Link>{' '}
    and this{' '}
    <Link variant="styled" href="http://committed.io">
      External
    </Link>
  </Text>
)

export const WithReactRouter: Story = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route index element={<div>Hello Router</div>} />
        <Route path="/one" element={<div>Route 1</div>} />
        <Route path="/two" element={<div>Route 2</div>} />
      </Routes>
      <Box>
        <Box>
          <RouterLink to="/one">Click to change Router path</RouterLink>
        </Box>
        <Box>
          <Link asChild>
            <RouterLink to="/two">Click to change Router path</RouterLink>
          </Link>
        </Box>
        <Box>
          <Link variant="styled" asChild>
            <RouterLink to="./one">Click to change Router path</RouterLink>
          </Link>
        </Box>
      </Box>
    </MemoryRouter>
  )
}

/**
 * Links support substituting the rendered element for one supplied to the `asChild` pattern prop.
 */
export const As: Story = () => (
  <ol>
    <Link asChild href="test.com" css={{ display: 'block' }}>
      <li>Test</li>
    </Link>
    <Link
      variant="styled"
      asChild
      href="test.com"
      css={{ display: 'inline-block' }}
    >
      <li>Test</li>
    </Link>
    <Link variant="clear" asChild href="test.com" css={{ display: 'block' }}>
      <li>Test</li>
    </Link>
  </ol>
)
