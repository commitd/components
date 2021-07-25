import { Meta } from '@storybook/react'
import React from 'react'
import { Link as RouterLink, MemoryRouter } from 'react-router-dom'
import { Link } from '.'
import { Box, Column, Text } from '../'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

export const Default: React.FC = () => {
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
          <Link href="#"> font="monospace"</Link>
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
export const Clear = () => (
  <Text>
    <Link variant="clear" href="#">
      Link
    </Link>
  </Text>
)

/**
 * The styled variant is intended for use in articles such as blog posts.
 */
export const Styled = () => (
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

export const WithReactRouter: React.FC = () => {
  return (
    <MemoryRouter>
      <Box>
        <Box>
          <RouterLink
            component={Link}
            to="./example-route"
            // props for component={Link} are passed on despite the error
            // @ts-ignore
            css={{ color: '$text' }}
          >
            Click to change Router path
          </RouterLink>
        </Box>
      </Box>
    </MemoryRouter>
  )
}

/**
 * Links support substituting the rendered element for one supplied to the `as` prop.
 */
export const As = () => (
  <ol>
    <Link as="li" href="test.com" css={{ color: '$text' }}>
      Test
    </Link>
  </ol>
)
