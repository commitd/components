import React from 'react'
import { copyToClipboard } from './copy'
import { withTheme, styled } from '@material-ui/styles'
import { WithTheme, Theme } from '@material-ui/core'
import { Flex, Text, Heading } from '../../src'

export const Background = styled('div')(({ theme }: WithTheme) => ({
  background: theme.palette.background.default,
  padding: theme.spacing(3),
  width: '100%',
  height: '100%',
}))

const InnerSurfaces: React.SFC<{ theme: Theme }> = ({ theme }) => (
  <Flex
    m={1}
    mt={3}
    p={3}
    bgcolor={theme.palette.background.default}
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <Heading.h5 mb={3}>Background</Heading.h5>
    <Flex
      height="200px"
      width={1 / 2}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bgcolor={theme.palette.background.paper}
      onClick={() => copyToClipboard(theme.palette.background.paper)}
    >
      <Heading.h5>Paper</Heading.h5>
      <Flex p={2}>
        <Flex p={2} flexDirection="column">
          <Text>Default</Text>
          <Text color="primary">Primary</Text>
          <Text color="secondary">Secondary</Text>
          <Text color="error">Error</Text>
        </Flex>
        <Flex p={2} flexDirection="column">
          <Text color="textPrimary">Text Primary</Text>
          <Text color="textSecondary">Text Secondary</Text>
          <div style={{ color: theme.palette.text.disabled }}>
            <Text color="inherit">Text Disabled</Text>
          </div>
          <div style={{ color: theme.palette.text.hint }}>
            <Text>Text Hint</Text>
          </div>
        </Flex>
      </Flex>
    </Flex>
  </Flex>
)

// @ts-ignore
export const Surfaces = withTheme(InnerSurfaces)
