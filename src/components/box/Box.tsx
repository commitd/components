import React from 'react'
import { styled } from '@material-ui/styles'
import { compose } from '@material-ui/system'
import {
  gridcontainer,
  griditem,
  GridcontinerProps,
  GriditemProps,
} from '../../internal'
import MaterialBox, {
  BoxProps as MaterialBoxProps,
} from '@material-ui/core/Box'

export type BoxProps = MaterialBoxProps &
  Omit<GridcontinerProps, 'justifyContent' | 'alignItems' | 'theme'> &
  Omit<GriditemProps, 'justifySelf' | 'alignSelf' | 'theme'> & {
    ref?: React.Ref<HTMLDivElement>
  }

export const Box: React.ComponentType<BoxProps> = styled(MaterialBox)(
  compose(gridcontainer, griditem)
)
