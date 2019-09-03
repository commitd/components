import * as React from 'react'
import { BoxProps, Box } from '../box/Box'
import { styled } from '@material-ui/styles'

export type FlexProps = Omit<BoxProps, 'display'>

export const Flex: React.ComponentType<FlexProps> = styled(Box)({
  display: 'flex'
})
Flex.displayName = 'Flex'

export default Flex
