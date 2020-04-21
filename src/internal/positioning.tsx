import React from 'react'
import {
  compose,
  display,
  flexbox,
  spacing,
  DisplayProps,
  FlexboxProps,
  SpacingProps,
} from '@material-ui/system'
import { styled } from '@material-ui/styles'
import { griditem, GriditemProps } from './griditem'

export type PositioningProps = SpacingProps &
  FlexboxProps &
  DisplayProps &
  GriditemProps

// The natural typing causes typescript to error, hence the casts to force it.
export const withPositioning = <P extends object>(
  WrappedComponent: React.ElementType<P>
) =>
  (styled(WrappedComponent)(
    compose(display, spacing, flexbox, griditem)
  ) as unknown) as React.ComponentType<P & PositioningProps>
