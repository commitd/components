import { FC } from 'react'
import { BoxProps } from '../../../src'
// import {
//   GridcontinerProps,
//   GriditemProps
// } from '../../internal'
// import MaterialBox, {
//   BoxProps as MaterialBoxProps
// } from '@material-ui/core/Box'

// export type BoxProps = MaterialBoxProps &
//   Omit<GridcontinerProps, 'justifyContent' | 'alignItems' | 'theme'> &
//   Omit<GriditemProps, 'justifySelf' | 'alignSelf' | 'theme'> & {
//     ref?: Ref<HTMLDivElement>
//   }

// For documentation only
import {
  BordersProps,
  PaletteProps,
  PositionsProps,
  ShadowsProps,
  TypographyProps,
} from '@material-ui/system'
export type BaseBoxProps = BordersProps &
  PaletteProps &
  PositionsProps &
  ShadowsProps &
  TypographyProps
export type RestBoxProps = Omit<BoxProps, keyof BaseBoxProps>
export const BaseBoxDocs: FC<BaseBoxProps> = () => null
export const RestBoxDocs: FC<RestBoxProps> = () => null
