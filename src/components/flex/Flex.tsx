import * as React from 'react'
import { BoxProps, Box } from '../box/Box'

export type FlexProps = Omit<BoxProps, 'display'>

export const Flex: React.FC<FlexProps> = (props: FlexProps) => (
  <Box {...props} display="flex" />
)
