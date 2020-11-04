import React from 'react'
import { Flex, Heading, Box } from '../../../src'

interface PageHeadingProps {
  title?: string
  buttons?: React.ReactNode[]
  inline?: boolean
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  buttons = [],
  inline,
}) => {
  return (
    <Box
      display={inline ? 'flex' : 'block'}
      alignContent="flex-end"
      mb={3}
      flexWrap="wrap"
      width={1}
    >
      {title && <Heading.h2>{title}</Heading.h2>}

      <Flex justifyContent="flex-end" flexWrap="wrap" flex={1} flexShrink={0}>
        {buttons.map((b) => (
          <Box ml={2}>{b}</Box>
        ))}
      </Flex>
    </Box>
  )
}
