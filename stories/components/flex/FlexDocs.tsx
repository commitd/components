import * as React from 'react'
//import { BoxProps } from '../../../src'

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
export const FlexDocs: React.FC<FlexDocsProps> = () => null
