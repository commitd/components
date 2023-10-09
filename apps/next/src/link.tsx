import { Box, Inline, Link, Text } from '@committed/ds'

export const LinkExample = () => (
  <Inline>
    <Box>
      <Link href="#">Link</Link>
    </Box>
    <Box
      css={{
        color: '$success',
      }}
    >
      <Link href="#">color inherits</Link>
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
  </Inline>
)
