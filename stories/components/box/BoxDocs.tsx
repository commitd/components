import * as React from 'react'
//import { BoxProps } from '../../../src'
// TODO remove BoxProp when storybook issue fixed

import { GridcontinerProps, GriditemProps } from '../../../src/internal'
import { BoxProps as MaterialBoxProps } from '@material-ui/core/Box'

export type BoxProps = MaterialBoxProps &
  Omit<GridcontinerProps, 'justifyContent' | 'alignItems' | 'theme'> &
  Omit<GriditemProps, 'justifySelf' | 'alignSelf' | 'theme'> & {
    ref?: React.Ref<HTMLDivElement>
  }

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
export const BaseBoxDocs: React.FC<BaseBoxProps> = () => null
export const RestBoxDocs: React.FC<RestBoxProps> = () => null
