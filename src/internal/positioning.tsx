import { ComponentType } from 'react'
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
import { griditem, GriditemProps } from './'

export type PositioningProps = SpacingProps &
  FlexboxProps &
  DisplayProps &
  GriditemProps

export const withPositioning = <P extends object>(
  WrappedComponent: React.ElementType<P>
) =>
  (styled(WrappedComponent)(
    compose(
      display,
      spacing,
      flexbox,
      griditem
    )
  ) as unknown) as ComponentType<P & PositioningProps>
