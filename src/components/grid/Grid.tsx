import React, { FC } from 'react'
import { BoxProps, Box } from '../box/Box'

export type GridProps = Omit<BoxProps, 'display'>

export type GridRef = HTMLDivElement

export const Grid = React.forwardRef<GridRef, GridProps>(
  (props: GridProps, ref) => <Box ref={ref} {...props} display="grid" />
)

// For documentation only
import {
  BordersProps,
  PaletteProps,
  PositionsProps,
  ShadowsProps,
  TypographyProps
} from '@material-ui/system'
export type GridDocsProps = BordersProps &
  PaletteProps &
  PositionsProps &
  ShadowsProps &
  TypographyProps

export const GridDocs: FC<GridDocsProps> = () => null
