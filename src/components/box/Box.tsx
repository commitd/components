import { FC, ComponentType,Ref } from 'react'
import { styled } from '@material-ui/styles'
import { compose } from '@material-ui/system'
import {
  gridcontainer,
  griditem,
  GridcontinerProps,
  GriditemProps
} from '../../internal'
import MaterialBox, {
  BoxProps as MaterialBoxProps
} from '@material-ui/core/Box'

export type BoxProps = MaterialBoxProps &
  Omit<GridcontinerProps, 'justifyContent' | 'alignItems'> &
  Omit<GriditemProps, 'justifySelf' | 'alignSelf'> & {
    ref?: Ref<HTMLDivElement>
  }

export const Box: ComponentType<BoxProps> = styled(MaterialBox)(
  compose(
    gridcontainer,
    griditem
  )
)

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
