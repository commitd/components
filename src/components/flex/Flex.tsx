import React from 'react'
import { BoxProps, Box } from '../box/Box'

export type FlexProps = Omit<BoxProps, 'display'>
export type RowProps = Omit<FlexProps, 'flexDirection'>
export type ColumnProps = Omit<FlexProps, 'flexDirection'>

export type FlexRef = HTMLDivElement

export const Flex: React.ForwardRefExoticComponent<FlexProps> = React.forwardRef<
  FlexRef,
  FlexProps
>((props: FlexProps, ref) => <Box ref={ref} {...props} display="flex" />)

export const Row: React.ForwardRefExoticComponent<RowProps> = React.forwardRef<
  FlexRef,
  RowProps
>((props: FlexProps, ref) => (
  <Box ref={ref} {...props} display="flex" flexDirection="row" />
))

export const Column: React.ForwardRefExoticComponent<ColumnProps> = React.forwardRef<
  FlexRef,
  ColumnProps
>((props: FlexProps, ref) => (
  <Box ref={ref} {...props} display="flex" flexDirection="column" />
))
