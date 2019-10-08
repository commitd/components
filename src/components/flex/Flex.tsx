import * as React from 'react'
import { BoxProps, Box } from '../box/Box'

export type FlexProps = Omit<BoxProps, 'display'>

export type FlexRef = HTMLDivElement

export const Flex = React.forwardRef<FlexRef, FlexProps>(
  (props: FlexProps, ref) => <Box ref={ref} {...props} display="flex" />
)
