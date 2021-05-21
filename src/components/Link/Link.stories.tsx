import React, { ComponentProps } from 'react'
import { Story, Meta } from '@storybook/react'
import { Link } from '.'
import { Text } from '../Text'
import { Flex } from '../Flex'
import { Box } from '../Box'
import {
  MemoryRouter,
  Route,
  Switch,
  Link as RouterLink,
} from 'react-router-dom'

export default {
  title: 'Components/Link',
  component: Link,
} as Meta

export const Default: React.FC = () => {
  return (
    <Box>
      <Box>
        <Link href="javascript:;">Link</Link>
      </Box>
      <Box>
        <Link href="javascript:;" color="inherit">
          color="inherit"
        </Link>
      </Box>
      <Box>
        <Text font="monospace">
          <Link href="javascript:;"> font="monospace"</Link>
        </Text>
      </Box>
      <Box>
        <Link href="http://committed.io" target="_blank">
          External
        </Link>
      </Box>
    </Box>
  )
}

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
            underline="hover"
          >
            Click to change Router path
          </RouterLink>
        </Box>
      </Box>
    </MemoryRouter>
  )
}

const Template: Story<ComponentProps<typeof Link>> = (args) => {
  return <Link {...args} />
}

export const Primary = Template.bind({})
Primary.args = {}
