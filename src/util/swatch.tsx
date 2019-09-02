import * as React from 'react'
import { Box, Flex } from '@components'

export interface SwatchProps {
  color: string
  name: string
}

export default class Swatch extends React.Component<SwatchProps> {
  public render() {
    const { color, name } = this.props
    return (
      <Box p={1} width={1 / 5}>
        <Box height="100px" bg={color} />
        <Flex>
          <Box>{name}</Box>
          <Box flex="1" />
          <Box>{color}</Box>
        </Flex>
      </Box>
    )
  }
}
