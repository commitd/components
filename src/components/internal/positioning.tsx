import React from 'react'
import {
  compose,
  display,
  flexbox,
  spacing,
  DisplayProps,
  FlexboxProps,
  SpacingProps
} from '@material-ui/system'
import { styled } from '@material-ui/styles'

export type PositioningProps = SpacingProps & FlexboxProps & DisplayProps

export const withPositioning = <P extends object>(
  WrappedComponent: React.ComponentType<P & PositioningProps>
) =>
  styled(WrappedComponent)(
    compose(
      display,
      spacing,
      flexbox
    )
  )
