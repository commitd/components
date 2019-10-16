import { FC } from 'react'
import Box, { BoxProps } from '@material-ui/core/Box'
export type BoxProps = BoxProps
export { Box }

// For documentation only
import {
  BordersProps,
  PaletteProps,
  PositionsProps,
  ShadowsProps,
  TypographyProps
} from '@material-ui/system'
export type BaseBoxProps = BordersProps &
  PaletteProps &
  PositionsProps &
  ShadowsProps &
  TypographyProps
export type RestBoxProps = Omit<BoxProps, keyof BaseBoxProps>
export const BaseBoxDocs: FC<BaseBoxProps> = () => null
export const RestBoxDocs: FC<RestBoxProps> = () => null
