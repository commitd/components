import React from 'react'
import { BoxProps, Box } from '../box/Box'

export type GridProps = Omit<BoxProps, 'display'>

export type GridRef = HTMLDivElement

export const Grid = React.forwardRef<GridRef, GridProps>(
  (props: GridProps, ref) => <Box ref={ref} {...props} display="grid" />
) as React.ForwardRefExoticComponent<GridProps>
