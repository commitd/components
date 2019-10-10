import * as React from 'react'
import { BoxProps, Box } from '../box/Box'

export type FlexProps = Omit<BoxProps, 'display'>
export type RowProps = Omit<FlexProps, 'flexDirection'>
export type ColumnProps = Omit<FlexProps, 'flexDirection'>

export type FlexRef = HTMLDivElement

export const Flex = React.forwardRef<FlexRef, FlexProps>(
  (props: FlexProps, ref) => <Box ref={ref} {...props} display="flex" />
)

export const Row = React.forwardRef<FlexRef, RowProps>(
  (props: FlexProps, ref) => (
    <Box ref={ref} {...props} display="flex" flexDirection="row" />
  )
)

export const Column = React.forwardRef<FlexRef, ColumnProps>(
  (props: FlexProps, ref) => (
    <Box ref={ref} {...props} display="flex" flexDirection="column" />
  )
)
