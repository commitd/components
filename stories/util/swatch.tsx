import * as React from 'react'
import { Box, Flex, Text, copyToClipboard } from '../../src'

export interface SwatchProps {
  width?: number
  color: string
  name: string
}

export const Swatch = ({ color, name, width = 1 / 5 }: SwatchProps) => (
  <Box p={1} width={width}>
    <Box
      height="100px"
      bgcolor={color}
      onClick={() => copyToClipboard(color)}
    />
    <Flex>
      <Box>
        <Text>{name}</Text>
      </Box>
      <Box flex="1" />
      <Box>
        <Text>{color}</Text>
      </Box>
    </Flex>
  </Box>
)
