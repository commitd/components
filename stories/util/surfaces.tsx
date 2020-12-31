import React from 'react'
import {
  withTheme,
  styled,
  WithTheme,
  Theme,
  Flex,
  Text,
  Heading,
  copyToClipboard,
} from '../../src'

export const Background = styled('div')(({ theme }: WithTheme) => ({
  background: theme.palette.background.default,
  padding: theme.spacing(3),
  width: '100%',
  height: '100%',
}))

const InnerSurfaces: React.FC<{ theme: Theme }> = ({ theme }) => (
  <Flex
    m={1}
    mt={3}
    p={3}
    flexGrow={1}
    bgcolor={theme.palette.background.default}
    color={theme.palette.text.primary}
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
          <Text color="inherit">Default</Text>
          <Text color="primary">Primary</Text>
          <Text color="secondary">Secondary</Text>
          <Text color="error">Error</Text>
        </Flex>
        <Flex p={2} flexDirection="column">
          {/* Forced due to issue with nesting themes */}
          <div style={{ color: theme.palette.text.primary }}>
            <Text>Text Primary</Text>
          </div>
          <div style={{ color: theme.palette.text.secondary }}>
            <Text>Text Secondary</Text>
          </div>
          <div style={{ color: theme.palette.text.disabled }}>
            <Text>Text Disabled</Text>
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
