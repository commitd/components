import { FC } from 'react'
import { FlexProps, RowProps, ColumnProps } from '../../../src'
//import { BoxProps } from '../../../src'

// export type FlexProps = Omit<BoxProps, 'display'>
// export type RowProps = Omit<FlexProps, 'flexDirection'>
// export type ColumnProps = Omit<FlexProps, 'flexDirection'>

// For documentation only
import {
  BordersProps,
  PaletteProps,
  PositionsProps,
  ShadowsProps,
  TypographyProps,
} from '@material-ui/system'
export type FlexDocsProps = BordersProps &
  PaletteProps &
  PositionsProps &
  ShadowsProps &
  TypographyProps
export const FlexDocs: FC<FlexDocsProps> = () => null
